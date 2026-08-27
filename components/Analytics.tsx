const TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

/**
 * Cloudflare Web Analytics. Cookieless and collects no personal data, so it
 * needs no consent banner under UK PECR, and it counts every visitor rather
 * than only those who accept cookies.
 *
 * Renders nothing until NEXT_PUBLIC_CF_ANALYTICS_TOKEN is set, so the site is
 * safe to build and deploy before the token exists.
 */
export default function Analytics() {
  if (!TOKEN) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: TOKEN })}
    />
  );
}
