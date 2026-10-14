import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";

/**
 * A real route behind the Students' Union links (the Give It A Go booking links
 * and the membership sign-up on /university), so the virtual page view
 * `trackOutbound` fires on the way out (see lib/track.ts) lands on something
 * real if a visitor ever hits it directly, refreshes, or shares the link.
 *
 * noindex because it is a dead end for a search visitor.
 */
export const metadata: Metadata = {
  title: "Opening the Students' Union",
  description: "Taking you to the University of Westminster Students' Union.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/university" },
};

export default function GoUwsuPage() {
  return (
    <section className="min-h-[70svh] flex items-center justify-center bg-night px-4 py-28">
      <div className="max-w-lg text-center">
        <Calendar className="text-brand mx-auto mb-6" size={48} aria-hidden="true" />
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white mb-4">
          Opening the Students&apos; Union
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          The Students&apos; Union page should have opened in a new tab. Membership and booking
          there are for University of Westminster students.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/university"
            className="px-6 py-3 border border-white/15 text-white text-sm font-semibold uppercase tracking-wide hover:border-white/40 transition-colors rounded-sm"
          >
            Back to University
          </Link>
        </div>
      </div>
    </section>
  );
}
