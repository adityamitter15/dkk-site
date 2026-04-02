import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import { grades, type Member } from "@/data/yudansha";

export const metadata: Metadata = {
  title: "Yudansha - Black Belts",
  description: "The black belts of DKK London. Meet the yudansha who have earned their dan grades through years of demanding training.",
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#a8201a] rounded-sm">
          <span className="text-white text-[10px] font-bold uppercase tracking-wider">{dan}</span>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-white font-semibold text-sm leading-tight mb-1">{member.name}</p>
        {member.quote && (
          <p className="text-gray-500 text-xs italic mt-1 leading-relaxed line-clamp-3">&ldquo;{member.quote}&rdquo;</p>
        )}
        {!member.quote && member.action && member.portrait && (
          <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-0.5">Hover to see action</p>
        )}
      </div>
    </Link>
  );
}

export default function YudanshaPage() {
  const tunde = grades[0].members[0];

  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Club/grading-group-red.JPG" alt="" fill className="object-cover object-center opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Black Belts
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-2">Yudansha</h1>
          <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#a8201a]/40 tracking-widest mb-4">有段者</p>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Grades earned on genuine ability, not time served.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionHeading eyebrow="Dan Grades" title="The Black Belts of DKK London" />
            <p className="text-gray-400 leading-relaxed">
              Yudansha (有段者) refers to those holding a dan grade. At DKK London, grades are earned on genuine ability, not time served. Every name below represents years of demanding training under Shihan Mulholland&apos;s exacting standards.
            </p>
          </div>

          {/* Featured Godan */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-8 bg-[#a8201a] rounded-sm" />
              <div>
                <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em]">Godan</p>
                <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">5th Dan</h2>
              </div>
            </div>

            <Link href={`/yudansha/${tunde.slug}`} className="block">
              <div className="grid lg:grid-cols-4 gap-0 bg-[#141311] border border-[#a8201a]/20 rounded-sm overflow-hidden hover:border-[#a8201a]/40 transition-all duration-300 group">
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  {tunde.portrait && (
                    <SafeImage src={tunde.portrait} alt={tunde.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#a8201a] text-white text-xs font-bold uppercase tracking-wider rounded-sm">5th Dan</span>
                    <span className="text-[#a8201a] text-xs uppercase tracking-wider">Godan</span>
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
                  <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">{tier.dan}</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {tier.members.map((member) => (
                  <MemberCard key={member.name} member={member} dan={tier.dan} />
                ))}
              </div>
            </div>
          ))}
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
