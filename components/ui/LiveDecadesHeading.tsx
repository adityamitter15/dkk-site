"use client";

import ScrollRevealText from "@/components/ui/ScrollRevealText";
import { decadesSince, toWords } from "@/lib/clubYears";
import { useCurrentYear } from "@/lib/useCurrentYear";

/**
 * A ScrollRevealText headline that leads with a live decade count, e.g. "Four
 * Decades of DKK". Seeded with the build year, corrected from the visitor's
 * clock (see lib/clubYears.ts).
 */
export default function LiveDecadesHeading({
  since,
  rest,
  className,
}: {
  since: number;
  rest: string;
  className?: string;
}) {
  const n = decadesSince(since, useCurrentYear());
  return <ScrollRevealText className={className} text={`${toWords(n)} Decades ${rest}`} />;
}
