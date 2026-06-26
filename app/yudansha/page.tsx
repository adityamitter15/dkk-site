import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import ParallaxImage from "@/components/ParallaxImage";
import { grades, type Member } from "@/data/yudansha";
import DanGrade from "@/components/DanGrade";

export const metadata: Metadata = {
  title: "Yudansha - Black Belts",
  description: "The black belts of DKK London. Meet the yudansha who have earned their dan grades through years of demanding training.",
  openGraph: { images: ["/images/Club/grading-group-red.JPG"] },
  twitter: { images: ["/images/Club/grading-group-red.JPG"] },
};

function MemberCard({ member, dan }: { member: Member; dan: string }) {
  const hasImage = member.portrait || member.action;
  const primaryImg = member.portrait || member.action;
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <Link
      href={`/yudansha/${member.slug}`}
      className="bg-[#141311] border border-white/5 hover:border-[#a8201a]/30 transition-all duration-300 rounded-sm overflow-hidden group block"
    >
      {/* Image area */}
      <div className="relative bg-[#0f0e0c] overflow-hidden" style={{ aspectRatio: "4/5" }}>
        {hasImage && primaryImg ? (
          <>
            <SafeImage
              src={primaryImg}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {member.action && member.action !== primaryImg && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [@media(hover:none)]:opacity-100 [@media(hover:none)]:animate-[fade-pulse_6s_ease-in-out_infinite]">
                <SafeImage
                  src={member.action}
                  alt={`${member.name} - action`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0e0c]">
            <span className="font-['Bebas_Neue'] text-5xl text-[#a8201a]/30 tracking-widest">{initials}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex gap-1.5">
          {member.instructor && (
            <span className="px-2 py-0.5 bg-[#c9a96e] rounded-sm text-white text-[10px] font-bold uppercase tracking-wider">Instructor</span>
          )}
          <span className="px-2 py-0.5 bg-[#a8201a] rounded-sm text-white text-[10px] font-bold uppercase tracking-wider"><DanGrade text={dan} /></span>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-white font-semibold text-sm leading-tight mb-1">{member.name}</p>
        {member.quote && (
          <p className="text-gray-500 text-xs italic mt-1 leading-relaxed line-clamp-3">&ldquo;{member.quote}&rdquo;</p>
        )}
        {!member.quote && member.action && member.portrait && (
          <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-0.5 hidden [@media(hover:hover)]:block">Hover to see action</p>
        )}
      </div>
    </Link>
  );
}

const gradeDescriptor: Record<string, string> = {
  Godan: "Advanced Teachings",
  Yondan: "Weapons Grade",
  Sandan: "Teaching Grade",
  Nidan: "30 Man Kumite",
  Shodan: "Black Belt",
};

export default function YudanshaPage() {
  const tunde = grades[0].members[0];

  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <ParallaxImage src="/images/Club/grading-group-red.JPG" className="object-cover object-center opacity-30" intensity={70} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Black Belts
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-2">Yudansha</h1>
          <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#a8201a]/40 tracking-widest mb-4">有段者</p>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Grades earned on a combination of attendance and performance.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionHeading eyebrow="Dan Grades" title="The Black Belts of DKK London" />
            <p className="text-gray-400 leading-relaxed">
              Yudansha (有段者) refers to those holding a dan grade. At DKK London, grades are earned on a combination of attendance and performance. Every name below represents years of demanding training under Shihan Mulholland&apos;s exacting standards.
            </p>
          </div>

          {/* Featured Godan */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-8 bg-[#a8201a] rounded-sm" />
              <div>
                <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em]">Godan</p>
                <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide"><DanGrade text="5th Dan" /> <span className="text-gray-500 text-lg tracking-widest">· {gradeDescriptor.Godan}</span></h2>
              </div>
            </div>

            <Link href={`/yudansha/${tunde.slug}`} className="block">
              <div className="grid lg:grid-cols-4 gap-0 bg-[#141311] border border-[#a8201a]/20 rounded-sm overflow-hidden hover:border-[#a8201a]/40 transition-all duration-300 group">
                <div className="relative w-full max-h-[400px]" style={{ aspectRatio: "4/5" }}>
                  {tunde.portrait && (
                    <SafeImage src={tunde.portrait} alt={tunde.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3 flex-wrap">
                    <span className="px-2 py-0.5 bg-[#a8201a] text-white text-xs font-bold uppercase tracking-wider rounded-sm"><DanGrade text="5th Dan" /></span>
                    <span className="text-[#a8201a] text-xs uppercase tracking-wider">Godan</span>
                    {tunde.instructor && (
                      <span className="px-2 py-0.5 bg-[#c9a96e] text-white text-xs font-bold uppercase tracking-wider rounded-sm">Instructor</span>
                    )}
                  </div>
                  <p className="font-['Bebas_Neue'] text-4xl text-white tracking-wide mb-4">{tunde.name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{tunde.bio}</p>
                  {tunde.quote && (
                    <blockquote className="border-l-2 border-[#a8201a] pl-4">
                      <p className="text-gray-300 text-sm italic leading-relaxed">&ldquo;{tunde.quote}&rdquo;</p>
                    </blockquote>
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* Remaining grades */}
          {grades.slice(1).map((tier) => (
            <div key={tier.grade} className="mb-14">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-2 h-8 bg-[#a8201a]/60 rounded-sm" />
                <div>
                  <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em]">{tier.grade}</p>
                  <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">
                    <DanGrade text={tier.dan} />
                    {gradeDescriptor[tier.grade] && (
                      <span className="text-gray-500 text-lg tracking-widest"> · {gradeDescriptor[tier.grade]}</span>
                    )}
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {tier.members.map((member) => (
                  <div
                    key={member.name}
                    className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
                  >
                    <MemberCard member={member} dan={tier.dan} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The DKK Bell - rung by Dan grades at every Black Belt grading */}
      <section className="py-24 lg:py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ background: "radial-gradient(ellipse at center top, #c9a96e 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="w-6 h-px bg-[#c9a96e]" />
            From the Student Handbook
            <span className="w-6 h-px bg-[#c9a96e]" />
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-3">The DKK Bell</h2>
          <p className="text-[#c9a96e]/60 text-xs uppercase tracking-[0.3em] mb-12">Rung by Dan Grades on Every Black Belt Grading</p>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center text-left">
            <div className="flex justify-center">
              <div className="relative w-[200px] sm:w-[260px] aspect-[5/8] bg-black rounded-sm overflow-hidden ring-1 ring-[#c9a96e]/20 shadow-[0_0_60px_-10px_rgba(201,169,110,0.4)]">
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
          <div className="mt-16 pt-12 border-t border-[#c9a96e]/15">
            <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.4em] mb-7">Engraved on the Bell</p>
            <blockquote className="space-y-3 max-w-2xl mx-auto">
              {[
                "We are the Pilgrims, master; we shall go,",
                "Always a little further; it may be,",
                "Beyond that last blue mountain barred with snow,",
                "Across that angry or that glimmering sea.",
              ].map((line) => (
                <p key={line} className="font-['Bebas_Neue'] text-xl sm:text-2xl text-white/90 tracking-[0.08em] italic leading-snug">
                  {line}
                </p>
              ))}
            </blockquote>
            <p className="mt-10 font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#c9a96e] tracking-[0.25em] uppercase">
              Always A Little Further
            </p>
          </div>
        </div>
      </section>

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
    </>
  );
}
