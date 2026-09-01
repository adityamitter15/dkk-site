import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

/**
 * The confirmation the contact form switches to after a successful send.
 *
 * The form does not navigate here: it rewrites the URL with `history.pushState`
 * and keeps its own success panel, which Cloudflare's beacon counts as a route
 * change. This route exists so that a refresh, a bookmark or a shared link
 * lands on something real rather than a 404, since the site is a static export
 * and an invented path would have nothing behind it.
 *
 * noindex because it is a dead end for a search visitor and would otherwise
 * compete with /contact for the queries that matter.
 */
export const metadata: Metadata = {
  title: "Message Sent",
  description: "Your message to Daigaku Karate Kai London has been sent.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact" },
};

export default function MessageSentPage() {
  return (
    <section className="min-h-[70svh] flex items-center justify-center bg-night px-4 py-28">
      <div className="max-w-lg text-center">
        <CheckCircle className="text-brand mx-auto mb-6" size={48} aria-hidden="true" />
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white mb-4">
          Message Sent
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          Thanks for getting in touch. We aim to reply within 48 hours. If you asked
          for a call back, we will ring you at the time you picked.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/training"
            className="px-6 py-3 bg-brand text-white text-sm font-semibold uppercase tracking-wide hover:bg-brand-hover transition-colors rounded-sm"
          >
            Class times
          </Link>
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
