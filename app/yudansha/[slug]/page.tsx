import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { getAllMembers, getMemberBySlug } from "@/data/yudansha";

export function generateStaticParams() {
  return getAllMembers().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Not Found" };
  return {
    title: `${member.name} - ${member.dan} - DKK London Yudansha`,
    description: member.bio || `${member.name}, ${member.dan} at Daigaku Karate Kai London.`,
  };
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const allMembers = getAllMembers();
  const currentIndex = allMembers.findIndex((m) => m.slug === member.slug);
  const prev = currentIndex > 0 ? allMembers[currentIndex - 1] : null;
  const next = currentIndex < allMembers.length - 1 ? allMembers[currentIndex + 1] : null;

  const hasBothImages = member.portrait && member.action;
  const hasOneImage = (member.portrait || member.action) && !hasBothImages;
  const primaryImg = member.portrait || member.action;
  const initials = member.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  const firstMilestone = member.milestones?.find((m) => m.year)?.year;
  const lastMilestone = member.milestones?.[member.milestones.length - 1];
  const yearsTraining = firstMilestone ? new Date().getFullYear() - parseInt(firstMilestone) : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {member.portrait && (
          <div className="absolute inset-0">
            <SafeImage src={member.portrait} alt="" fill className="object-cover object-top opacity-25 blur-sm scale-105" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/yudansha" className="inline-flex items-center gap-1 text-gray-400 text-xs uppercase tracking-widest hover:text-[#a8201a] transition-colors mb-6">
            <ChevronLeft size={14} />
            All Yudansha
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#a8201a] text-white text-xs font-bold uppercase tracking-wider rounded-sm">{member.dan}</span>
            <span className="text-[#a8201a] text-xs uppercase tracking-wider">{member.grade}</span>
          </div>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4">{member.name}</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light">Daigaku Karate Kai London</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 sm:py-20 bg-[#0f0e0c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Images */}
          {hasBothImages && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={member.portrait!} alt={member.name} fill className="object-cover object-top" />
              </div>
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={member.action!} alt={`${member.name} - training`} fill className="object-cover object-top" />
              </div>
            </div>
          )}

          {hasOneImage && primaryImg && (
            <div className="max-w-sm mx-auto mb-14">
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={primaryImg} alt={member.name} fill className="object-cover object-top" />
              </div>
            </div>
          )}

          {!primaryImg && (
            <div className="max-w-[240px] mx-auto mb-14">
              <div className="relative rounded-sm overflow-hidden bg-[#141311] flex items-center justify-center" style={{ aspectRatio: "3/4" }}>
                <div className="flex flex-col items-center gap-3">
                  <span className="font-['Bebas_Neue'] text-7xl text-[#a8201a]/20 tracking-widest">{initials}</span>
                  <p className="text-gray-600 text-xs uppercase tracking-widest">{member.dan}</p>
                </div>
              </div>
            </div>
          )}

          {/* Bio + Stats */}
          <div className="max-w-4xl">
            <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em] mb-3">{member.grade} &middot; {member.dan}</p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide leading-none mb-6">{member.name}</h2>

            {member.bio && (
              <p className="text-gray-400 leading-relaxed text-base mb-8">{member.bio}</p>
            )}

            {/* Stats row */}
            {(yearsTraining || lastMilestone) && (
              <div className="flex flex-wrap gap-6 mb-10">
                {firstMilestone && (
                  <div className="border-l-2 border-[#a8201a]/40 pl-4">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Training since</p>
                    <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide">{firstMilestone}</p>
                  </div>
                )}
                {yearsTraining && yearsTraining > 0 && (
                  <div className="border-l-2 border-[#a8201a]/40 pl-4">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Years training</p>
                    <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide">{yearsTraining}+</p>
                  </div>
                )}
                <div className="border-l-2 border-[#a8201a]/40 pl-4">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">Current grade</p>
                  <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide">{member.dan}</p>
                </div>
              </div>
            )}
          </div>

          {/* Grading History */}
          {member.milestones && member.milestones.length > 0 && (
            <div className="max-w-4xl mt-2">
              <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Grading History</p>
              <div className="flex flex-wrap gap-3">
                {member.milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 rounded-sm border ${
                      i === member.milestones!.length - 1
                        ? "bg-[#a8201a]/10 border-[#a8201a]/30"
                        : "bg-[#141311] border-white/5"
                    }`}
                  >
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">
                      {m.year || "\u2014"}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nav links */}
          <div className="max-w-4xl mt-12 flex gap-6">
            <Link href="/yudansha" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
              <ChevronLeft size={16} /> All Yudansha
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
              Train With Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cinematic Quote */}
      {member.quote && (
        <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-black to-[#12110f]" />
          {member.portrait && (
            <div className="absolute inset-0">
              <SafeImage src={member.portrait} alt="" fill className="object-cover object-center opacity-10 blur-md scale-110" />
            </div>
          )}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-['Bebas_Neue'] text-[#a8201a]/30 text-8xl sm:text-9xl leading-none select-none block mb-2">&ldquo;</span>
            <blockquote className="text-gray-200 text-xl sm:text-2xl italic leading-relaxed font-light -mt-12 sm:-mt-16">
              &ldquo;{member.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-[#a8201a]" />
              <span className="text-gray-500 text-sm uppercase tracking-widest">{member.name}</span>
              <span className="w-6 h-px bg-[#a8201a]" />
            </footer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Start your journey</p>
            <p className="text-white/70 text-sm mt-1">Every Yudansha above started exactly where you are now.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 px-8 py-4 bg-white text-[#a8201a] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors rounded-sm inline-flex items-center gap-2">
            Join Now <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/5">
            <div className="py-6 pr-6">
              {prev ? (
                <Link href={`/yudansha/${prev.slug}`} className="group flex items-center gap-3">
                  <ChevronLeft size={16} className="text-gray-600 group-hover:text-[#a8201a] transition-colors" />
                  <div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">Previous</p>
                    <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{prev.name}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>
            <div className="py-6 pl-6 text-right">
              {next ? (
                <Link href={`/yudansha/${next.slug}`} className="group inline-flex items-center gap-3">
                  <div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">Next</p>
                    <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{next.name}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-600 group-hover:text-[#a8201a] transition-colors" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
