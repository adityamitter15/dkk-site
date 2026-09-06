import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

/**
 * A real route behind the WhatsApp links, so the virtual page view
 * `trackOutbound` fires on the way out (see lib/track.ts) lands on something
 * real if a visitor ever hits it directly, refreshes, or shares the link.
 *
 * noindex because it is a dead end for a search visitor and would otherwise
 * compete with /contact for the queries that matter.
 */
export const metadata: Metadata = {
  title: "Opening WhatsApp",
  description: "Taking you to WhatsApp to chat with Daigaku Karate Kai London.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact" },
};

export default function GoWhatsAppPage() {
  return (
    <section className="min-h-[70svh] flex items-center justify-center bg-night px-4 py-28">
      <div className="max-w-lg text-center">
        <MessageCircle className="text-whatsapp mx-auto mb-6" size={48} aria-hidden="true" />
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white mb-4">
          Opening WhatsApp
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          WhatsApp should have opened in a new tab. If nothing happened, carry on below.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20and%20try%20a%20class%20at%20DKK%20London."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand text-white text-sm font-semibold uppercase tracking-wide hover:bg-brand-hover transition-colors rounded-sm"
          >
            Continue to WhatsApp
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
