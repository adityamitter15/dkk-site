"use client";

import { useSyncExternalStore } from "react";
import { BUILD_TIME, hasPassed } from "@/lib/eventDates";

/**
 * Whether a dated event is over, read from the visitor's own clock rather than
 * frozen into the static export at build time. See lib/eventDates.ts for why.
 *
 * useSyncExternalStore rather than useState + useEffect: the server snapshot is
 * measured against the build instant, so the SSR HTML and the first client
 * render agree, and React swaps in the real answer during hydration instead of
 * via a setState that fires after it (which is also what
 * react-hooks/set-state-in-effect flags).
 *
 * Nothing ever notifies - a tab left open across the end of an event keeps the
 * old value until it next renders, which nobody will see.
 */
const subscribe = () => () => {};

export function useIsPast(isoDate: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => hasPassed(isoDate, Date.now()),
    () => hasPassed(isoDate, BUILD_TIME)
  );
}
