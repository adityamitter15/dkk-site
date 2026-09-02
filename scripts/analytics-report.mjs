#!/usr/bin/env node
/**
 * Weekly analytics report for goju-karate.co.uk.
 *
 * Pulls Cloudflare Web Analytics (the JS-beacon RUM dataset, not the proxy
 * dataset - the site is served by Firebase and is not proxied through
 * Cloudflare, so every `httpRequests` metric is permanently zero) and Google
 * Search Console (clicks, impressions, position, top queries), then emails a
 * report with inline SVG charts.
 *
 * Cloudflare answers "how many people are on the site". Search Console
 * answers the question that actually matters: are those people NEW, or is it
 * the same members re-reading the register. A brand query ("dkk karate",
 * "gavin mulholland") is someone who already knows the club; a non-brand
 * query ("karate london", "goju ryu near me") is a genuine prospect. The
 * brand/non-brand split below is the headline number in this report.
 *
 * Reads everything from the environment. Credentials are never written to
 * disk and never logged; only their presence is asserted.
 *
 *   CLOUDFLARE_API_TOKEN     secret, Account Analytics: Read
 *   CF_ACCOUNT_ID            not secret
 *   CF_SITE_TAG              not secret, identifies the Web Analytics site
 *   GSC_SERVICE_ACCOUNT_KEY  secret, full JSON key for a service account
 *                            granted read access on the Search Console
 *                            property (Settings > Users and permissions)
 *   GSC_SITE_URL             not secret, e.g. "sc-domain:goju-karate.co.uk"
 *   MAIL_TO / MAIL_FROM      destination and sender
 *   GMAIL_APP_PASSWORD       secret, SMTP auth for MAIL_FROM
 */

import crypto from "node:crypto";
import nodemailer from "nodemailer";

const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT = process.env.CF_ACCOUNT_ID;
const SITE_TAG = process.env.CF_SITE_TAG;
const GSC_KEY = process.env.GSC_SERVICE_ACCOUNT_KEY;
const GSC_SITE_URL = process.env.GSC_SITE_URL;
const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_PASS = process.env.GMAIL_APP_PASSWORD;

for (const [name, value] of Object.entries({
  CLOUDFLARE_API_TOKEN: TOKEN,
  CF_ACCOUNT_ID: ACCOUNT,
  CF_SITE_TAG: SITE_TAG,
  GSC_SERVICE_ACCOUNT_KEY: GSC_KEY,
  GSC_SITE_URL,
  MAIL_TO,
  MAIL_FROM,
  GMAIL_APP_PASSWORD: MAIL_PASS,
})) {
  if (!value) {
    console.error(`Missing ${name}. Set it as a repository secret or variable.`);
    process.exit(1);
  }
}

const GQL = "https://api.cloudflare.com/client/v4/graphql";

/** Midnight-aligned ISO strings for [days ago, days ago - span). */
function window(daysAgo, span) {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() - daysAgo);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - span);
  return { start: start.toISOString(), end: end.toISOString() };
}

const THIS_WEEK = window(0, 7);
const LAST_WEEK = window(7, 7);

async function gql(query, variables) {
  const res = await fetch(GQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Cloudflare API HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) {
    // Never interpolate the token into an error path.
    throw new Error(`GraphQL: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  return json.data;
}

const filter = (w) => ({
  AND: [
    { datetime_geq: w.start, datetime_lt: w.end },
    { siteTag: SITE_TAG },
    { bot: 0 },
  ],
});

/** Totals: page views is the row count, visits is the summed metric. */
async function totals(w) {
  const data = await gql(
    `query($account: String!, $filter: ZoneWebAnalyticsTopNFilter_InputObject!) {
      viewer {
        accounts(filter: { accountTag: $account }) {
          rumPageloadEventsAdaptiveGroups(limit: 1, filter: $filter) {
            count
            sum { visits }
          }
        }
      }
    }`,
    { account: ACCOUNT, filter: filter(w) },
  );
  const row = data.viewer.accounts[0]?.rumPageloadEventsAdaptiveGroups[0];
  return { views: row?.count ?? 0, visits: row?.sum?.visits ?? 0 };
}

/** Grouped breakdown, e.g. by requestPath for the per-page table. */
async function breakdown(w, dimension, limit = 12) {
  const data = await gql(
    `query($account: String!, $filter: ZoneWebAnalyticsTopNFilter_InputObject!, $limit: Int!) {
      viewer {
        accounts(filter: { accountTag: $account }) {
          rumPageloadEventsAdaptiveGroups(
            limit: $limit
            filter: $filter
            orderBy: [count_DESC]
          ) {
            count
            sum { visits }
            dimensions { ${dimension} }
          }
        }
      }
    }`,
    { account: ACCOUNT, filter: filter(w), limit },
  );
  return (data.viewer.accounts[0]?.rumPageloadEventsAdaptiveGroups ?? []).map((r) => ({
    label: r.dimensions[dimension] || "(unknown)",
    views: r.count,
    visits: r.sum?.visits ?? 0,
  }));
}

// ------------------------------------------------------- Search Console

let gscTokenCache = null;

/**
 * Exchanges the service account key for an access token via the standard
 * JWT-bearer grant. No googleapis dependency needed - Node's built-in
 * `crypto` signs RS256 directly, and it's one fetch to the token endpoint.
 */
async function gscAccessToken() {
  if (gscTokenCache && gscTokenCache.expires > Date.now()) return gscTokenCache.token;

  const key = JSON.parse(GSC_KEY);
  const now = Math.floor(Date.now() / 1000);
  const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsigned = `${b64url({ alg: "RS256", typ: "JWT" })}.${b64url({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), key.private_key).toString("base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`Google OAuth HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  gscTokenCache = { token: json.access_token, expires: Date.now() + (json.expires_in - 60) * 1000 };
  return json.access_token;
}

async function gscQuery(body) {
  const token = await gscAccessToken();
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE_URL)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) throw new Error(`Search Console API HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.rows ?? [];
}

/** Search Console dates are calendar days, not the RFC3339 windows above. */
function gscDates(daysAgo, span) {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() - daysAgo);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - span);
  const fmt = (d) => d.toISOString().slice(0, 10);
  // endDate is inclusive in the GSC API, so step back one day from the
  // exclusive boundary the Cloudflare windows use.
  const inclusiveEnd = new Date(end);
  inclusiveEnd.setUTCDate(inclusiveEnd.getUTCDate() - 1);
  return { startDate: fmt(start), endDate: fmt(inclusiveEnd) };
}

async function gscTotals(daysAgo, span) {
  const rows = await gscQuery({ ...gscDates(daysAgo, span), dimensions: [] });
  const r = rows[0];
  return { clicks: r?.clicks ?? 0, impressions: r?.impressions ?? 0, position: r?.position ?? 0 };
}

/**
 * A query is "brand" if it names the club or Shihan by name - someone
 * searching that already knows DKK exists. Everything else ("karate london",
 * "goju ryu near me") is a stranger finding the club for the first time,
 * which is the number this whole report exists to surface.
 */
const BRAND_TERMS = ["dkk", "daigaku", "gavin mulholland", "mulholland"];
const isBrandQuery = (q) => BRAND_TERMS.some((t) => q.toLowerCase().includes(t));

async function gscQueries(daysAgo, span, limit = 12) {
  const rows = await gscQuery({ ...gscDates(daysAgo, span), dimensions: ["query"], rowLimit: 250 });
  const queries = rows.map((r) => ({
    label: r.keys[0],
    views: Math.round(r.clicks),
    impressions: r.impressions,
    brand: isBrandQuery(r.keys[0]),
  }));
  const brandClicks = queries.filter((q) => q.brand).reduce((s, q) => s + q.views, 0);
  const nonBrandClicks = queries.filter((q) => !q.brand).reduce((s, q) => s + q.views, 0);
  return {
    top: queries.slice(0, limit).sort((a, b) => b.views - a.views).slice(0, limit),
    brandClicks,
    nonBrandClicks,
  };
}

// ---------------------------------------------------------------- rendering

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function delta(now, before) {
  if (!before) return { text: "new", colour: "#7d7568" };
  const pct = Math.round(((now - before) / before) * 100);
  if (pct === 0) return { text: "level", colour: "#7d7568" };
  return {
    text: `${pct > 0 ? "+" : ""}${pct}%`,
    colour: pct > 0 ? "#4a5a42" : "#a8201a",
  };
}

/** Search position: LOWER is better, the opposite sense to every other metric here. */
function positionDelta(now, before) {
  if (!before) return { text: "new", colour: "#7d7568" };
  const change = Math.round((before - now) * 10) / 10;
  if (change === 0) return { text: "level", colour: "#7d7568" };
  return {
    text: `${change > 0 ? "+" : ""}${change}`,
    colour: change > 0 ? "#4a5a42" : "#a8201a",
  };
}

/**
 * Inline SVG bar chart. Email clients strip <style> and most block remote
 * images, so the bars are plain <rect> elements with presentation attributes.
 */
function barChart(rows, { width = 560, barHeight = 22, gap = 8 } = {}) {
  if (!rows.length) return '<p style="color:#7d7568">No data this week.</p>';
  const max = Math.max(...rows.map((r) => r.views), 1);
  const labelW = 210;
  const trackW = width - labelW - 60;
  const height = rows.length * (barHeight + gap);

  const bars = rows
    .map((r, i) => {
      const y = i * (barHeight + gap);
      const w = Math.max(2, Math.round((r.views / max) * trackW));
      const label = esc(r.label.length > 34 ? `${r.label.slice(0, 33)}…` : r.label);
      return `
        <text x="0" y="${y + barHeight - 6}" font-family="Helvetica,Arial,sans-serif" font-size="12" fill="#57503f">${label}</text>
        <rect x="${labelW}" y="${y}" width="${trackW}" height="${barHeight}" fill="#eee8dc" rx="2"/>
        <rect x="${labelW}" y="${y}" width="${w}" height="${barHeight}" fill="#a8201a" rx="2"/>
        <text x="${labelW + trackW + 8}" y="${y + barHeight - 6}" font-family="Helvetica,Arial,sans-serif" font-size="12" fill="#1a1815">${r.views}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">${bars}</svg>`;
}

function statCell(label, value, d) {
  return `
    <td style="padding:14px 18px;border:1px solid #e4ddcf;background:#fffdf8">
      <div style="font:600 10px Helvetica,Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#8a8172">${esc(label)}</div>
      <div style="font:400 30px Helvetica,Arial,sans-serif;color:#1a1815;padding-top:4px">${value}</div>
      <div style="font:600 11px Helvetica,Arial,sans-serif;color:${d.colour};padding-top:2px">${esc(d.text)} on last week</div>
    </td>`;
}

function section(title, body) {
  return `
    <h2 style="font:600 13px Helvetica,Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#a8201a;margin:34px 0 12px">${esc(title)}</h2>
    ${body}`;
}

async function main() {
  const [now, before, pages, countries, browsers, devices, gscNow, gscBefore, gscQ] = await Promise.all([
    totals(THIS_WEEK),
    totals(LAST_WEEK),
    breakdown(THIS_WEEK, "requestPath", 12),
    breakdown(THIS_WEEK, "countryName", 8),
    breakdown(THIS_WEEK, "userAgentBrowser", 6),
    breakdown(THIS_WEEK, "deviceType", 4),
    gscTotals(0, 7),
    gscTotals(7, 7),
    gscQueries(0, 7, 12),
  ]);

  // Form completions. The contact form rewrites the URL to /contact/sent on a
  // successful send, so submissions show up as page views of that one path.
  const sent = pages.find((p) => p.label.replace(/\/$/, "") === "/contact/sent");
  const contact = pages.find((p) => p.label.replace(/\/$/, "") === "/contact");
  const conversion =
    contact && contact.visits
      ? `${Math.round(((sent?.visits ?? 0) / contact.visits) * 100)}%`
      : "n/a";

  const brandTotal = gscQ.brandClicks + gscQ.nonBrandClicks;
  const newVisitorShare = brandTotal ? `${Math.round((gscQ.nonBrandClicks / brandTotal) * 100)}%` : "n/a";

  const from = THIS_WEEK.start.slice(0, 10);
  const to = new Date(Date.parse(THIS_WEEK.end) - 86400000).toISOString().slice(0, 10);

  const html = `<!doctype html>
<html><body style="margin:0;padding:26px;background:#f2ece1;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:620px;margin:0 auto">

  <div style="border-bottom:2px solid #1a1815;padding-bottom:14px;margin-bottom:8px">
    <div style="font:600 10px Helvetica,Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#a8201a">Daigaku Karate Kai London</div>
    <div style="font:400 30px Helvetica,Arial,sans-serif;color:#1a1815;padding-top:6px">Weekly Analytics</div>
    <div style="font:400 12px Helvetica,Arial,sans-serif;color:#8a8172;padding-top:6px">${esc(from)} to ${esc(to)} &middot; goju-karate.co.uk &middot; bots excluded</div>
  </div>

  <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-top:18px">
    <tr>
      ${statCell("Visits", now.visits, delta(now.visits, before.visits))}
      ${statCell("Page views", now.views, delta(now.views, before.views))}
    </tr>
    <tr>
      ${statCell("Form submissions", sent?.visits ?? 0, delta(sent?.visits ?? 0, 0))}
      ${statCell("Contact page conversion", conversion, { text: "of contact visits", colour: "#8a8172" })}
    </tr>
  </table>

  ${section(
    "Google Search: new people finding the site",
    `<table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
      <tr>
        ${statCell("Search clicks", Math.round(gscNow.clicks), delta(gscNow.clicks, gscBefore.clicks))}
        ${statCell("Impressions", Math.round(gscNow.impressions), delta(gscNow.impressions, gscBefore.impressions))}
      </tr>
      <tr>
        ${statCell("Avg. position", gscNow.position ? gscNow.position.toFixed(1) : "n/a", positionDelta(gscNow.position, gscBefore.position))}
        ${statCell("Non-brand share of clicks", newVisitorShare, { text: "the number that matters", colour: "#a8201a" })}
      </tr>
    </table>
    <p style="font:400 12px Helvetica,Arial,sans-serif;color:#8a8172;line-height:1.6;margin:10px 0 0">
      A <strong>brand</strong> search names the club or Shihan by name (someone who already knows DKK exists).
      <strong>Non-brand</strong> is everything else, like "karate london" or "goju ryu near me": a stranger finding
      the club for the first time. That non-brand share, not total traffic, is the real answer to whether new
      people are arriving. Search Console data usually lags 2-3 days, so the most recent days may be undercounted.
    </p>`,
  )}
  ${section("Top search queries this week", barChart(gscQ.top))}
  ${section("Pages, by views", barChart(pages))}
  ${section("Countries", barChart(countries))}
  ${section("Browsers", barChart(browsers))}
  ${section("Devices", barChart(devices))}

  <p style="font:400 12px Helvetica,Arial,sans-serif;color:#8a8172;line-height:1.6;margin-top:34px;border-top:1px solid #e4ddcf;padding-top:14px">
    Cloudflare Web Analytics, cookieless, bots excluded. Form submissions are
    counted as views of /contact/sent, which the contact form switches to after
    a successful send. Full dashboard:
    <a href="https://dash.cloudflare.com/${esc(ACCOUNT)}/web-analytics" style="color:#a8201a">Web Analytics</a>.
    Every message itself is in <a href="https://formspree.io/forms" style="color:#a8201a">Formspree</a>.
    Search data from
    <a href="https://search.google.com/search-console/performance/search-analytics?resource_id=${esc(encodeURIComponent(GSC_SITE_URL))}" style="color:#a8201a">Google Search Console</a>.
  </p>

</div></body></html>`;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: MAIL_FROM, pass: MAIL_PASS },
  });

  await transport.sendMail({
    from: `DKK Analytics <${MAIL_FROM}>`,
    to: MAIL_TO,
    subject: `DKK weekly: ${now.visits} visits, ${now.views} page views (${from} to ${to})`,
    html,
  });

  console.log(`Sent. visits=${now.visits} views=${now.views} pages=${pages.length}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
