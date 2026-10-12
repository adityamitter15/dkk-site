"use client";

import { yearsSince } from "@/lib/clubYears";
import { useCurrentYear } from "@/lib/useCurrentYear";

/**
 * The "Years training" cell on a member page. Seeded with the build year and
 * corrected from the visitor's clock (see lib/clubYears.ts). Renders nothing
 * below one year, so the page never shows "0" or "0+".
 */
export default function YearsTrainingStat({ since }: { since: number }) {
  const n = yearsSince(since, useCurrentYear());
  if (n < 1) return null;
  return (
    <div className="border-l-2 border-brand/40 pl-4">
      <p className="text-gray-500 text-[10px] uppercase tracking-widest">Years training</p>
      <p className="text-white font-display text-2xl tracking-wide">{n}+</p>
    </div>
  );
}
