import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { termNotice } from "@/data/site";

// Kept outside the component so the impure clock read isn't inlined into a
// component body (components must render the same output given the same
// props/state). This is a build-time check for a static export, same as the
// rest of the "annual items updated by hand" copy - not a live countdown.
function hasNoticePassed(isoDate: string): boolean {
  const noticeDate = new Date(isoDate);
  return Number.isNaN(noticeDate.getTime()) || noticeDate.getTime() < Date.now();
}

/**
 * Slim notice bar for a real, time-bound event (a new term or intake
 * starting). Server component, no client state: it just checks the date at
 * build/request time and renders nothing once `termNotice` is null or the
 * date has passed, so there is nothing to remember to take down.
 */
export default function TermNotice() {
  if (!termNotice || hasNoticePassed(termNotice.date)) return null;

  return (
    <div className="bg-brand text-white">
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
