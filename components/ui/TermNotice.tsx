"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { termNotice } from "@/data/site";
import { useIsPast } from "@/lib/useIsPast";

/**
 * Slim notice bar for a real, time-bound event (a taster week, a new term or
 * intake starting). Renders nothing once `termNotice` is null or its date has
 * passed, so there is nothing to remember to take down.
 *
 * The date check is NOT a build-time read. This is a static export, so a
 * server-rendered `Date.now()` freezes at build time and the bar would keep
 * advertising a finished event until somebody redeployed. `useIsPast` seeds
 * from the build instant (matching SSR, so no hydration mismatch and crawlers
 * still see the live notice) and then corrects from the visitor's own clock.
 * See lib/eventDates.ts.
 */
export default function TermNotice() {
  // Hooks cannot be called conditionally, so the null case goes through the
  // hook first. An empty string is unparseable, which `hasPassed` treats as
  // passed.
  const passed = useIsPast(termNotice?.date ?? "");

  if (!termNotice || passed) return null;

  return (
    // `relative` is load-bearing: this renders inside Navbar's fixed header,
    // above an absolutely positioned background layer that would otherwise
    // paint over it once the bar goes solid on scroll.
    <div className="relative bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={termNotice.href}
          className="flex items-center justify-center gap-1.5 py-2 text-center text-xs sm:text-sm font-semibold tracking-wide hover:underline underline-offset-2"
        >
          {termNotice.label}
          <ChevronRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
