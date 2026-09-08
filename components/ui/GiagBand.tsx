"use client";

import Link from "next/link";
import { Calendar, ChevronRight, ExternalLink } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { giag } from "@/data/giag";
import { useIsPast } from "@/lib/useIsPast";

/**
 * Give It A Go promo band for the student-facing pages, where the UWSU booking
 * links are the useful route in. Takes itself down after the last session
 * without needing a redeploy - see lib/eventDates.ts for why that is not a
 * build-time check.
 *
 * The public-facing version of this is /give-it-a-go, which leads with "turn
 * up" instead, because the booking links are students only.
 */
export default function GiagBand() {
  const passed = useIsPast(giag.endsAt);
  if (passed) return null;

  return (
    <section className="py-14 sm:py-16 bg-ember border-y border-brand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-14 items-center">
          <div>
            <Eyebrow className="mb-4">Give It A Go · {giag.shortDates}</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none mb-3">
              Try a Class This September
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Two open sessions, {giag.sessions[0].day} {giag.sessions[0].date} and{" "}
              {giag.sessions[1].day} {giag.sessions[1].date}, {giag.time} in the main hall. Book through
              UWSU below if you are a Westminster student. If you are not, there is nothing to book:
              see the{" "}
              <Link href="/give-it-a-go" className="link-underline text-gold">
                Give It A Go page
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:min-w-[280px]">
            {giag.sessions.map((session) => (
              <a
                key={session.start}
                href={session.uwsuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-5 py-4 bg-card border border-white/10 hover:border-gold/50 transition-colors rounded-sm"
              >
                <span className="flex items-center gap-3">
                  <Calendar size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-white font-display text-xl tracking-wide leading-none">
                      {session.date}
                    </span>
                    <span className="block text-gray-400 text-xs mt-1">
                      {session.day} · Book via UWSU
                    </span>
                  </span>
                </span>
                <ExternalLink
                  size={14}
                  className="text-gray-500 group-hover:text-gold transition-colors flex-shrink-0"
                  aria-hidden="true"
                />
              </a>
            ))}
            <Link
              href="/give-it-a-go"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-white/80 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Not a student? <ChevronRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
