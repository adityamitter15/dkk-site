"use client";

import { toWords, yearsSince } from "@/lib/clubYears";
import { useCurrentYear } from "@/lib/useCurrentYear";

/**
 * Renders "how many years since X" as live text - seeded with the build
 * year (so SSR and the first client render match), then corrected from the
 * visitor's own clock during hydration. See lib/clubYears.ts for why this exists.
 */
export default function LiveYears({
  since,
  form = "words",
  lower = false,
}: {
  since: number;
  form?: "words" | "digits";
  lower?: boolean;
}) {
  const n = yearsSince(since, useCurrentYear());

  return <>{form === "digits" ? String(n) : lower ? toWords(n).toLowerCase() : toWords(n)}</>;
}
