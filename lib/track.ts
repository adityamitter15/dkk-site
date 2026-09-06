/**
 * Counts an outbound click (WhatsApp, email, Google review, etc.) as a page
 * view of a virtual `/go/...` path.
 *
 * Cloudflare Web Analytics has no custom-event API, so there is no way to log
 * "WhatsApp button clicked" directly. Its beacon does patch `history.pushState`
 * and count any route change as a page view, so a brief, silent virtual
 * navigation is the only way to make an outbound click visible in the
 * dashboard. This is cookieless, so it needs no consent banner.
 *
 * The address bar is put back with `replaceState` so the visitor never sees the
 * URL change and the back button still works. That restore is DELIBERATELY
 * deferred by a tick rather than run on the same line as the pushState: the
 * beacon does not necessarily read `location.pathname` synchronously inside the
 * patched function, and if it reads it after we have already restored the URL
 * it records the page the visitor was on instead of the `/go/...` path, which
 * silently defeats the whole point. RESTORE_DELAY_MS is imperceptible and the
 * visitor is leaving for another app anyway.
 */
const RESTORE_DELAY_MS = 200;

export function trackOutbound(path: string): void {
  if (typeof window === "undefined") return;
  try {
    const original = `${window.location.pathname}${window.location.search}`;
    window.history.pushState({}, "", path);
    window.setTimeout(() => {
      try {
        window.history.replaceState({}, "", original);
      } catch {
        /* history blocked mid-flight - the URL is cosmetic, the count is not */
      }
    }, RESTORE_DELAY_MS);
  } catch {
    /* history blocked - the click still goes through, which is what matters */
  }
}
