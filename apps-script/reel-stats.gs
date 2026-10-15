/**
 * DKK reel stats: live Instagram view counts for Simon Clinch's reels
 * (@dkkoxfordshire), served as JSON to the reel cards on goju-karate.co.uk.
 *
 * Why this exists: Instagram only shows view counts to a logged-in account or
 * to the account owner's official API, and a static site cannot hold a secret.
 * This script holds the token on Google's side, asks the official Instagram
 * API once a day, and serves only the public numbers:
 *   { "updated": "2026-10-16T06:00:00.000Z", "views": { "DeIHDXsOvzJ": 4931 } }
 * The site keys reels by shortcode, so a new reel needs no change here.
 *
 * SETUP (once; needs Simon for step 2):
 *  1. A Meta developer app with the Instagram product, "API setup with
 *     Instagram login". @dkkoxfordshire must be a Professional (Creator or
 *     Business) account, added under App roles as an Instagram tester; Simon
 *     accepts in Instagram: Settings > Website permissions > Apps and websites
 *     > Tester invites.
 *  2. In the app dashboard, "Generate token" for @dkkoxfordshire (Simon logs
 *     in to Instagram in the popup). Scopes: instagram_business_basic and
 *     instagram_business_manage_insights. Copy the long-lived token.
 *  3. Here: Project Settings > Script properties > add IG_TOKEN = that token.
 *  4. Run refresh() once from the editor and approve the permissions. Check
 *     the log shows reels counted.
 *  5. Triggers > Add trigger > refresh, time-driven, day timer.
 *  6. Deploy > New deployment > Web app. Execute as: Me. Who has access:
 *     Anyone. Copy the /exec URL into dkk-site data/site.ts reelStatsEndpoint,
 *     then rebuild and deploy the site once.
 *
 * The token refreshes itself (Instagram long-lived tokens last 60 days and can
 * be extended once they are a day old), so nothing needs renewing by hand
 * unless the daily trigger stops for two months.
 */

var API = "https://graph.instagram.com/v23.0";
var TOKEN_REFRESH_DAYS = 7;

/** Daily trigger. Keeps the previous figures if Instagram returns nothing. */
function refresh() {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty("IG_TOKEN");
  if (!token) throw new Error("IG_TOKEN is not set (Project Settings > Script properties).");
  token = refreshTokenIfDue_(props, token);

  var views = {};
  var url = API + "/me/media?fields=id,shortcode,media_product_type&limit=50&access_token=" + encodeURIComponent(token);
  for (var page = 0; url && page < 4; page++) {
    var res = getJson_(url);
    (res.data || []).forEach(function (m) {
      if (m.media_product_type !== "REELS" || !m.shortcode) return;
      var n = reelViews_(m.id, token);
      if (n !== null) views[m.shortcode] = n;
    });
    url = res.paging && res.paging.next;
  }

  var count = Object.keys(views).length;
  if (count === 0) throw new Error("No reel views returned; keeping the previous figures.");
  props.setProperty("STATS", JSON.stringify({ updated: new Date().toISOString(), views: views }));
  Logger.log("Stored views for " + count + " reels.");
}

/** Lifetime views for one reel, or null if Instagram will not say. */
function reelViews_(id, token) {
  try {
    var res = getJson_(API + "/" + id + "/insights?metric=views&access_token=" + encodeURIComponent(token));
    var metric = res.data && res.data[0];
    if (!metric) return null;
    var v = metric.values && metric.values[0] ? metric.values[0].value : metric.total_value && metric.total_value.value;
    return typeof v === "number" ? v : null;
  } catch (e) {
    Logger.log("No views for " + id + ": " + e.message);
    return null;
  }
}

function refreshTokenIfDue_(props, token) {
  var last = Number(props.getProperty("IG_TOKEN_REFRESHED") || 0);
  if (Date.now() - last < TOKEN_REFRESH_DAYS * 864e5) return token;
  var res = getJson_(
    "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" + encodeURIComponent(token),
  );
  if (!res.access_token) return token;
  props.setProperty("IG_TOKEN", res.access_token);
  props.setProperty("IG_TOKEN_REFRESHED", String(Date.now()));
  return res.access_token;
}

function getJson_(url) {
  var r = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  var body = JSON.parse(r.getContentText());
  if (r.getResponseCode() !== 200) {
    throw new Error((body.error && body.error.message) || "HTTP " + r.getResponseCode());
  }
  return body;
}

/** The public endpoint the site reads. Serves only the stored numbers. */
function doGet() {
  var stats = PropertiesService.getScriptProperties().getProperty("STATS") || '{"views":{}}';
  return ContentService.createTextOutput(stats).setMimeType(ContentService.MimeType.JSON);
}
