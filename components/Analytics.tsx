"use client";

import { useEffect } from "react";

const TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

/**
 * Cloudflare Web Analytics. Cookieless and collects no personal data, so it
 * needs no consent banner under UK PECR, and it counts every visitor rather
 * than only those who accept cookies.
 *
 * The beacon script is injected client-side after hydration, rather than
 * rendered as a server-emitted `<script>` tag, so it attaches to the DOM
 * after Next's own history patch (see `lib/track.ts`) is already in place.
 * Renders nothing until NEXT_PUBLIC_CF_ANALYTICS_TOKEN is set, so the site is
 * safe to build and deploy before the token exists.
 */
export default function Analytics() {
  useEffect(() => {
    if (!TOKEN || document.querySelector("script[data-cf-beacon]")) return;
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: TOKEN }));
    document.body.appendChild(s);
  }, []);

  return null;
}
