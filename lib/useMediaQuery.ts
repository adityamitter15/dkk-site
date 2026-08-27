"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query without a setState-in-effect round trip.
 *
 * The obvious version (useState + useEffect + setState) makes React render
 * twice on mount and trips react-hooks/set-state-in-effect. useSyncExternalStore
 * is the intended tool: it takes a separate server snapshot, so the SSR HTML and
 * the first client render agree, and React resolves the real value during
 * hydration instead of after it.
 *
 * `serverValue` is what the query is assumed to be during SSR. Default false,
 * i.e. "assume the query does not match", which is the safe default for
 * progressive enhancement: the full experience renders, then the client turns
 * it down if the visitor asked for that.
 */
export function useMediaQuery(query: string, serverValue = false): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query]
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => serverValue, [serverValue]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** True when the visitor has asked the OS to reduce motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * True on touch devices. Scroll-tied transforms janks badly on touch scrolling,
 * so parallax opts out here.
 */
export function useIsTouch(): boolean {
  return useMediaQuery("(hover: none) and (pointer: coarse)");
}
