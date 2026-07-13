import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import { grades, type Member } from "@/data/yudansha";
import DanGrade from "@/components/DanGrade";

export const metadata: Metadata = {
  title: "Yudansha - Black Belts",
  description: "The black belts of DKK London. Meet the yudansha who have earned their dan grades through years of demanding training.",
  openGraph: { images: ["/og/yudansha.jpg"] },
  twitter: { images: ["/og/yudansha.jpg"] },
};

const gradeDescriptor: Record<string, string> = {
  Godan: "Advanced Teachings",
  Yondan: "Weapons Grade",
  Sandan: "Teaching Grade",
  Nidan: "30 Man Kumite",
  Shodan: "Black Belt",
};

// Nafuda-style register numerals — the traditional dojo name-board reads by grade
const gradeKanji: Record<string, string> = {
  Godan: "五段",
  Yondan: "四段",
  Sandan: "三段",
  Nidan: "二段",
  Shodan: "初段",
};

/** One line of the register: year · name · marks. The portrait surfaces on hover. */
function RegisterRow({ member, tier }: { member: Member; tier: { grade: string; dan: string } }) {
  const gradeYear = member.milestones?.find((m) => m.event.includes(tier.grade))?.year || "";
  const thirtyMan = member.milestones?.some((m) => /30 man/i.test(m.event)) ?? false;
  const img = member.portrait || member.action;

  return (
    <li className="relative">
      <Link
        href={`/yudansha/${member.slug}`}
        className="group flex items-center gap-4 sm:gap-6 py-4 px-3 sm:px-4 -mx-3 sm:-mx-4 border-b border-white/5 hover:bg-card hover:border-brand/20 transition-colors rounded-sm"
      >
        <span className="w-12 flex-shrink-0 text-gray-600 group-hover:text-gold/70 text-xs tabular-nums tracking-[0.2em] transition-colors" aria-hidden="true">
          {gradeYear}
        </span>
        <span className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none group-hover:text-brand transition-colors">
          {member.name}
        </span>
        <span className="hidden sm:flex items-center gap-2 ml-1">
          {member.instructor && (
            <span className="px-2 py-0.5 border border-gold/40 text-gold rounded-sm text-[9px] font-bold uppercase tracking-[0.15em]">Instructor</span>
          )}
          {thirtyMan && (
            <span className="px-2 py-0.5 border border-brand/40 text-brand/90 rounded-sm text-[9px] font-bold uppercase tracking-[0.15em]">30 Man Kumite</span>
          )}
        </span>
        <span className="flex-1 border-b border-dotted border-white/10 group-hover:border-brand/20 transition-colors self-center mt-1" aria-hidden="true" />
        <ChevronRight size={16} className="flex-shrink-0 text-gray-700 group-hover:text-brand group-hover:translate-x-0.5 transition-all" aria-hidden="true" />

        {/* Portrait reveal — desktop hover only, floats over the register */}
        {img && (
          <span
            aria-hidden="true"
            className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-40 aspect-[4/5] rounded-sm overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/80 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20"
          >
            <SafeImage src={img} alt="" fill sizes="160px" className="object-cover object-top" />
          </span>
        )}
      </Link>
    </li>
  );
}

export default function YudanshaPage() {

  return (
    <>
      <PageHero
        variant="archive"
        eyebrow="Black Belts"
        folio="06 / Yudansha"
        kanji="有段者"
        title="Yudansha"
        lead="Grades earned on a combination of attendance and performance."
        image={{ src: "/images/Club/grading-group-red.JPG" }}
      />

      <section className="section-reveal py-20 lg:py-28 bg-night print-ink print:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionHeading eyebrow="Dan Grades" title="The Black Belts of DKK London" />
            <p className="text-gray-400 leading-relaxed">
              Yudansha (有段者) refers to those holding a dan grade. At DKK London, grades are earned on a combination of attendance and performance. Every name below represents years of demanding training under Shihan Mulholland&apos;s exacting standards.
            </p>
          </div>

          {/* The Dan Register — nafuda-kake name-board, grouped by grade */}
          <div className="max-w-4xl">
            {grades.map((tier) => (
              <div key={tier.grade} className="mb-16 last:mb-0">
                <div className="flex items-end gap-5 mb-6 border-b border-gold/15 pb-4">
                  <span
                    aria-hidden="true"
                    className="text-4xl sm:text-5xl text-gold/30 leading-none select-none"
                    style={{ fontFamily: "var(--font-kanji)" }}
                  >
                    {gradeKanji[tier.grade] ?? ""}
                  </span>
                  <div>
                    <p className="text-brand text-xs font-bold uppercase tracking-[0.2em]">{tier.grade}</p>
                    <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none">
                      <DanGrade text={tier.dan} />
                      {gradeDescriptor[tier.grade] && (
                        <span className="text-gray-500 text-base sm:text-lg tracking-widest"> · {gradeDescriptor[tier.grade]}</span>
                      )}
                    </h2>
                  </div>
                  <span className="ml-auto text-gray-600 text-[11px] uppercase tracking-[0.25em] tabular-nums pb-1">
                    {tier.members.length}
                  </span>
                </div>
                <ul>
                  {tier.members.map((member) => (
                    <RegisterRow key={member.slug} member={member} tier={tier} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The DKK Bell - rung by Dan grades at every Black Belt grading */}
      <section className="section-reveal py-24 lg:py-32 bg-black border-t border-white/5 relative overflow-hidden print:hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ background: "radial-gradient(ellipse at center top, var(--color-gold) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="w-6 h-px bg-gold" />
            From the Student Handbook
            <span className="w-6 h-px bg-gold" />
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-3">The DKK Bell</h2>
          <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-12">Rung by Dan Grades on Every Black Belt Grading</p>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center text-left">
            <div className="flex justify-center">
              <div className="relative w-[200px] sm:w-[260px] aspect-[5/8] bg-black rounded-sm overflow-hidden ring-1 ring-gold/20 shadow-[0_0_60px_-10px_rgba(201,169,110,0.4)]">
                <SafeImage src="/images/dkk-bell.jpg" alt="The DKK Bell - hand-made from a spent artillery shell" fill className="object-cover object-center" />
              </div>
            </div>

            <div>
              <p className="text-gray-300 leading-relaxed mb-5">
                The <strong className="text-white">DKK Bell</strong> was a gift from <strong className="text-white">Grove Martial Arts</strong> and the <strong className="text-white">29 Commando Royal Artillery Regiment</strong>. Hand-made from a <strong className="text-white">spent artillery shell</strong>, the bell is rung by Dan grades of all levels on successful completion of their Black Belt gradings.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alongside our name and badge is engraved part of a James Elroy Flecker poem - the same poem inscribed on the clock tower of the SAS barracks in Hereford. For GMA to believe it suited the character of DKK is an enormous honour.
              </p>
            </div>
          </div>

          {/* The Flecker poem */}
          <div className="mt-16 pt-12 border-t border-gold/15">
            <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-7">Engraved on the Bell</p>
            <blockquote className="space-y-3 max-w-2xl mx-auto">
              {[
                "We are the Pilgrims, master; we shall go,",
                "Always a little further; it may be,",
                "Beyond that last blue mountain barred with snow,",
                "Across that angry or that glimmering sea.",
              ].map((line) => (
                <p key={line} className="font-display text-xl sm:text-2xl text-white/90 tracking-[0.08em] italic leading-snug">
                  {line}
                </p>
              ))}
            </blockquote>
            <p className="mt-10 font-display text-3xl sm:text-4xl text-gold tracking-[0.25em] uppercase">
              Always A Little Further
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Start your journey"
        sub="Every Yudansha above started exactly where you are now."
        buttonLabel="Join Now"
      />
    </>
  );
}
