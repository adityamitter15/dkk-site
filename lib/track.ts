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
 * Next's own router patch steps aside for a navigation only when the history
 * state it sees carries its internal `__NA` marker; otherwise it treats the
 * call as a real route change and the beacon fires for every `/go/...` hop
 * whether or not that is what we want counted. Spreading the current
 * `window.history.state` into the new call carries that marker forward, so
 * Next does not echo the virtual navigation back into its own router.
 *
 * Where the Navigation API is available, `replaceState` is used for the
 * forward hop instead of `pushState`: it still rewrites the visible URL (which
 * is all the beacon needs to see) without adding a history entry, so the back
 * button is never affected. The `pushState` fallback is kept for browsers
 * without the Navigation API, since Next's patch only intercepts that call.
 *
 * The address bar is put back with `replaceState` so the visitor never sees the
 * URL change and the back button still works. That restore is DELIBERATELY
 * deferred by a tick rather than run on the same line as the forward hop: the
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
    const { pathname, search, hash } = window.location;
    const original = `${pathname}${search}${hash}`;
    const state = { ...window.history.state }; // carries __NA, so Next does not echo
    if ("navigation" in window && (window as unknown as { navigation?: unknown }).navigation)
      window.history.replaceState(state, "", path);
    else window.history.pushState(state, "", path); // fallback only patches pushState
    window.setTimeout(() => {
      try {
        window.history.replaceState({ ...window.history.state }, "", original);
      } catch {
        /* history blocked mid-flight - the URL is cosmetic, the count is not */
      }
    }, RESTORE_DELAY_MS);
  } catch {
    /* history blocked - the click still goes through, which is what matters */
  }
}
