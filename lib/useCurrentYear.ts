"use client";

import { useSyncExternalStore } from "react";
import { BUILD_YEAR } from "@/lib/clubYears";

/**
 * The current year, read from the visitor's own clock rather than frozen into
 * the static export at build time. See lib/clubYears.ts for why that matters.
 *
 * useSyncExternalStore rather than useState + useEffect: the server snapshot is
 * the build year, so SSR HTML and the first client render agree (no hydration
 * mismatch, and crawlers still see real text), and React swaps in the client
 * value during hydration instead of via a setState that fires after it.
 *
 * Nothing ever notifies - a tab that stays open across New Year keeps the old
 * value until it next renders, which is a rounding error nobody will see.
 */
const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => BUILD_YEAR;

export function useCurrentYear(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
