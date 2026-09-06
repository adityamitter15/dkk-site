import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";

/**
 * A real route behind the Google review link, so the virtual page view
 * `trackOutbound` fires on the way out (see lib/track.ts) lands on something
 * real if a visitor ever hits it directly, refreshes, or shares the link.
 *
 * noindex because it is a dead end for a search visitor and would otherwise
 * compete with /contact for the queries that matter.
 */
export const metadata: Metadata = {
  title: "Opening Google Reviews",
  description: "Taking you to Google to leave a review for Daigaku Karate Kai London.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact" },
};

export default function GoReviewPage() {
  return (
    <section className="min-h-[70svh] flex items-center justify-center bg-night px-4 py-28">
      <div className="max-w-lg text-center">
        <Star className="text-gold mx-auto mb-6" size={48} aria-hidden="true" />
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white mb-4">
          Opening Google Reviews
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          Google should have opened in a new tab. If nothing happened, carry on below.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://maps.google.com/?cid=13776758326457460286"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand text-white text-sm font-semibold uppercase tracking-wide hover:bg-brand-hover transition-colors rounded-sm"
          >
            Continue to Google
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white/15 text-white text-sm font-semibold uppercase tracking-wide hover:border-white/40 transition-colors rounded-sm"
          >
            Back to contact
          </Link>
        </div>
      </div>
    </section>
  );
}
