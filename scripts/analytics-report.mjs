#!/usr/bin/env node
/**
 * Weekly analytics report for goju-karate.co.uk.
 *
 * Pulls Cloudflare Web Analytics (the JS-beacon RUM dataset, not the proxy
 * dataset - the site is served by Firebase and is not proxied through
 * Cloudflare, so every `httpRequests` metric is permanently zero) and emails a
 * report with inline SVG charts.
 *
 * Reads everything from the environment. The API token is never written to
 * disk and never logged; only its presence is asserted.
 *
 *   CLOUDFLARE_API_TOKEN  secret, Account Analytics: Read
 *   CF_ACCOUNT_ID         not secret
 *   CF_SITE_TAG           not secret, identifies the Web Analytics site
 *   MAIL_TO / MAIL_FROM   destination and sender
 *   GMAIL_APP_PASSWORD    secret, SMTP auth for MAIL_FROM
 */

import nodemailer from "nodemailer";

const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT = process.env.CF_ACCOUNT_ID;
const SITE_TAG = process.env.CF_SITE_TAG;
const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = process.env.MAIL_FROM;
const MAIL_PASS = process.env.GMAIL_APP_PASSWORD;

for (const [name, value] of Object.entries({
  CLOUDFLARE_API_TOKEN: TOKEN,
  CF_ACCOUNT_ID: ACCOUNT,
  CF_SITE_TAG: SITE_TAG,
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
  const [now, before, pages, countries, browsers, devices] = await Promise.all([
    totals(THIS_WEEK),
    totals(LAST_WEEK),
    breakdown(THIS_WEEK, "requestPath", 12),
    breakdown(THIS_WEEK, "countryName", 8),
    breakdown(THIS_WEEK, "userAgentBrowser", 6),
    breakdown(THIS_WEEK, "deviceType", 4),
  ]);

  // Form completions. The contact form rewrites the URL to /contact/sent on a
  // successful send, so submissions show up as page views of that one path.
  const sent = pages.find((p) => p.label.replace(/\/$/, "") === "/contact/sent");
  const contact = pages.find((p) => p.label.replace(/\/$/, "") === "/contact");
  const conversion =
    contact && contact.visits
      ? `${Math.round(((sent?.visits ?? 0) / contact.visits) * 100)}%`
      : "n/a";

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
