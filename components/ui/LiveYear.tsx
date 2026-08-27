"use client";

import { useEffect, useState } from "react";
import { BUILD_YEAR } from "@/lib/clubYears";

/**
 * Renders the current year - seeded with the build year (so SSR and the
 * first client render match), then corrected from the visitor's own clock
 * on mount. See lib/clubYears.ts for why this exists.
 */
export default function LiveYear() {
  const [year, setYear] = useState(BUILD_YEAR);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
