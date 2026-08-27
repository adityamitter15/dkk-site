"use client";

import { useCurrentYear } from "@/lib/useCurrentYear";

/**
 * Renders the current year - seeded with the build year (so SSR and the
 * first client render match), then corrected from the visitor's own clock
 * during hydration. See lib/clubYears.ts for why this exists.
 */
export default function LiveYear() {
  return <>{useCurrentYear()}</>;
}
