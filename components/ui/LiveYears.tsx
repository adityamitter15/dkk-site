"use client";

import { useEffect, useState } from "react";
import { BUILD_YEAR, toWords, yearsSince } from "@/lib/clubYears";

/**
 * Renders "how many years since X" as live text - seeded with the build
 * year (so SSR and the first client render match), then corrected from the
 * visitor's own clock on mount. See lib/clubYears.ts for why this exists.
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
  const [year, setYear] = useState(BUILD_YEAR);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const n = yearsSince(since, year);

  return <>{form === "digits" ? String(n) : lower ? toWords(n).toLowerCase() : toWords(n)}</>;
}
