import CTABand from "@/components/ui/CTABand";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, MapPin, Video, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import DanGrade from "@/components/DanGrade";
import LiveYears from "@/components/ui/LiveYears";
import { getAllMembers, getMemberBySlug } from "@/data/yudansha";

const gradeDescriptor: Record<string, string> = {
  Godan: "Advanced Teachings",
  Yondan: "Weapons Grade",
  Sandan: "Teaching Grade",
  Nidan: "Senior Grade",
  Shodan: "Black Belt",
};

export function generateStaticParams() {
  return getAllMembers().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Not Found" };
  const ogImage = member.portrait || member.action || "/images/Club/grading-group-red.JPG";
  return {
    title: `${member.name} - ${member.dan} - DKK London Yudansha`,
    description: member.bio || `${member.name}, ${member.dan} at Daigaku Karate Kai London.`,
    openGraph: { images: [ogImage] },
    twitter: { images: [ogImage] },
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
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {member.portrait && (
          <div className="absolute inset-0">
            <SafeImage src={member.portrait} alt="" fill className="object-cover object-top opacity-25 blur-sm scale-105" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-widest">
              <li>
                <Link href="/" className="text-gray-500 hover:text-brand transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-gray-700">/</li>
              <li>
                <Link href="/yudansha" className="text-gray-400 hover:text-brand transition-colors inline-flex items-center gap-1">
                  <ChevronLeft size={12} aria-hidden="true" />
                  Yudansha
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-700">/</li>
              <li aria-current="page" className="text-white truncate max-w-[140px] sm:max-w-none">{member.name}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-sm"><DanGrade text={member.dan} /></span>
            <span className="text-brand text-xs uppercase tracking-wider">{member.grade}</span>
            {gradeDescriptor[member.grade] && (
              <span className="text-gold text-[10px] uppercase tracking-[0.2em] border-l border-gold/30 pl-3">{gradeDescriptor[member.grade]}</span>
            )}
          </div>
          <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4 break-words">{member.name}</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light">Daigaku Karate Kai London</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 sm:py-20 lg:py-28 bg-night">
        {/* max-w-7xl shell so content edges align with the hero title above */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Images */}
          {hasBothImages && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-5xl">
              <div className="relative rounded-sm overflow-hidden bg-card" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={member.portrait!} alt={member.name} fill className="object-cover object-top" />
              </div>
              <div className="relative rounded-sm overflow-hidden bg-card" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={member.action!} alt={`${member.name} - training`} fill className="object-cover object-top" />
              </div>
            </div>
          )}

          {hasOneImage && primaryImg && (
            <div className="max-w-sm mx-auto mb-14">
              <div className="relative rounded-sm overflow-hidden bg-card" style={{ aspectRatio: "3/4" }}>
                <SafeImage src={primaryImg} alt={member.name} fill className="object-cover object-top" />
              </div>
            </div>
          )}

          {!primaryImg && (
            <div className="max-w-[240px] mx-auto mb-14">
              <div className="relative rounded-sm overflow-hidden bg-card flex items-center justify-center" style={{ aspectRatio: "3/4" }}>
                <div className="flex flex-col items-center gap-3">
                  <span className="font-display text-7xl text-brand/20 tracking-widest">{initials}</span>
                  <p className="text-gray-600 text-xs uppercase tracking-widest"><DanGrade text={member.dan} /></p>
                </div>
              </div>
            </div>
          )}

          {/* Bio + Stats */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <p className="text-brand text-xs font-bold uppercase tracking-[0.2em]">
                {member.grade} &middot; <DanGrade text={member.dan} />
                {gradeDescriptor[member.grade] && <span className="text-gold ml-2">&middot; {gradeDescriptor[member.grade]}</span>}
              </p>
              {member.instructor && (
                <span className="px-2.5 py-1 bg-gold/15 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-wider rounded-sm">Instructor</span>
              )}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none mb-6">{member.name}</h2>

            {member.bio && (
              <p className="text-gray-400 leading-relaxed text-base mb-8">{member.bio}</p>
            )}

            {/* Stats row */}
            {(yearsTraining || lastMilestone) && (
              <div className="flex flex-wrap gap-6 mb-10">
                {firstMilestone && (
                  <div className="border-l-2 border-brand/40 pl-4">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Training since</p>
                    <p className="text-white font-display text-2xl tracking-wide">{firstMilestone}</p>
                  </div>
                )}
                {firstMilestone && yearsTraining && yearsTraining > 0 && (
                  <div className="border-l-2 border-brand/40 pl-4">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">Years training</p>
                    <p className="text-white font-display text-2xl tracking-wide"><LiveYears since={parseInt(firstMilestone)} form="digits" />+</p>
                  </div>
                )}
                <div className="border-l-2 border-brand/40 pl-4">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">Current grade</p>
                  <p className="text-white font-display text-2xl tracking-wide"><DanGrade text={member.dan} /></p>
                </div>
              </div>
            )}
          </div>

          {/* Journey Timeline */}
          {member.milestones && member.milestones.length > 0 && (
            <div className="max-w-4xl mt-2">
              <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-8">Journey</p>
              <div className="relative ml-[5px]">
                {/* Belt spine — the rail begins white (white belt) and fades into
                    the black of the page (black belt); the brand dot marks today */}
                <div className="absolute left-[-0.5px] top-[6px] bottom-[6px] w-[2px] bg-gradient-to-b from-white/90 via-white/35 to-white/0" />
                {member.milestones.map((m, i) => {
                  const isLast = i === member.milestones!.length - 1;
                  return (
                    <div key={i} className="relative flex items-start gap-6 pb-10 last:pb-0">
                      {/* Dot - centred on the line */}
                      <div className="relative flex-shrink-0 w-[11px] h-[11px] -ml-[5px] mt-[3px]">
                        <span className={`block w-full h-full rounded-full ${
                          isLast
                            ? "bg-brand shadow-ember-sm"
                            : "bg-white/20"
                        }`} />
                        {isLast && (
                          <span className="absolute inset-[-3px] rounded-full border border-brand/30" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex items-baseline gap-4 min-h-[1.5rem]">
                        <p className={`font-display text-xl tracking-wide leading-none min-w-[3.5rem] ${
                          isLast ? "text-brand" : "text-white/80"
                        }`}>
                          {m.year || "-"}
                        </p>
                        <div>
                          <p className={`text-sm leading-tight ${isLast ? "text-white font-medium" : "text-gray-400"}`}>
                            {m.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Classes They Run (instructors only) */}
          {member.classes && member.classes.length > 0 && (
            <div className="max-w-4xl mt-14 pt-10 border-t border-white/5">
              <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">Classes Taught</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {member.classes.map((c, i) => (
                  <div key={i} className="p-5 bg-card border border-white/5 rounded-sm">
                    <div className="flex items-start gap-3">
                      {c.format === "zoom" ? (
                        <Video className="text-gold flex-shrink-0 mt-0.5" size={18} />
                      ) : (
                        <Clock className="text-brand flex-shrink-0 mt-0.5" size={18} />
                      )}
                      <div className="flex-1">
                        <p className="text-white font-display text-xl tracking-wide leading-none">{c.day} · {c.time}</p>
                        <p className="text-gray-400 text-sm mt-1 flex items-center gap-1.5">
                          {c.format === "in-person" && <MapPin size={12} className="text-gray-500 flex-shrink-0" />}
                          {c.venue}
                        </p>
                        {c.address && (
                          c.mapUrl ? (
                            <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="text-brand text-xs hover:underline inline-flex items-center gap-1 mt-1">
                              {c.address} <ExternalLink size={10} />
                            </a>
                          ) : (
                            <p className="text-gray-500 text-xs mt-1">{c.address}</p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/training" className="inline-flex items-center gap-2 mt-5 text-brand font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all">
                Full training schedule <ChevronRight size={14} />
              </Link>
            </div>
          )}

          {/* Nav links */}
          <div className="max-w-4xl mt-12 flex gap-6">
            <Link href="/yudansha" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
              <ChevronLeft size={16} /> All Yudansha
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
              Train With Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cinematic Quote */}
      {member.quote && (
        <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-night via-black to-card" />
          {member.portrait && (
            <div className="absolute inset-0">
              <SafeImage src={member.portrait} alt="" fill className="object-cover object-center opacity-10 blur-md scale-110" />
            </div>
          )}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-display text-brand/30 text-8xl sm:text-9xl leading-none select-none block mb-2">&ldquo;</span>
            <blockquote className="text-gray-200 text-xl sm:text-2xl italic leading-relaxed font-light -mt-12 sm:-mt-16">
              &ldquo;{member.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-brand" />
              <span className="text-gray-500 text-sm uppercase tracking-widest">{member.name}</span>
              <span className="w-6 h-px bg-brand" />
            </footer>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABand
        title="Start your journey"
        sub="Every Yudansha above started exactly where you are now."
        buttonLabel="Join Now"
      />

      {/* Prev / Next */}
      <section className="bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 gap-4">
            {prev ? (
              <Link href={`/yudansha/${prev.slug}`} className="group flex items-center gap-3 min-w-0">
                <ChevronLeft size={16} className="text-gray-600 group-hover:text-brand transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest">Previous</p>
                  <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors truncate">{prev.name}</p>
                </div>
              </Link>
            ) : <span />}
            <Link href="/yudansha" className="hidden sm:inline-flex items-center gap-2 text-gray-600 hover:text-brand text-[10px] uppercase tracking-widest font-bold transition-colors flex-shrink-0">
              All Black Belts
            </Link>
            {next ? (
              <Link href={`/yudansha/${next.slug}`} className="group flex items-center gap-3 min-w-0 text-right">
                <div className="min-w-0">
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest">Next</p>
                  <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors truncate">{next.name}</p>
                </div>
                <ChevronRight size={16} className="text-gray-600 group-hover:text-brand transition-colors flex-shrink-0" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </>
  );
}
