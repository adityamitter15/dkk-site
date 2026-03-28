import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";

export const metadata: Metadata = {
  title: "DKK Fighters",
  description: "DKK Fighters - 16 wins from 20 cage fights, a World Title, and one member who reached the UFC. The competitive record of DKK London.",
};

export default function FightersPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Fighters/dkk.jpg" alt="" fill className="object-cover object-center opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Competition & Combat
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">DKK Fighters</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">16 wins from 20 cage fights. A World Title. One member who reached the UFC.</p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#a8201a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "16/20", label: "First 20 Fights Won" },
              { value: "1", label: "World Title" },
              { value: "UFC", label: "Level Reached" },
              { value: "BAMMA", label: "Competed In" },
            ].map((s) => (
              <CountUpStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading eyebrow="DKK London" title="Tested Under Pressure" />
              <p className="text-gray-400 leading-relaxed mb-5">
                While the club&apos;s primary focus is on combat, not competition, there is genuine benefit to be had from testing yourself against an aggressive, non-cooperative opponent, and the MMA scene offers just that challenge.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                There is never any pressure on students to compete. But several have chosen to test themselves in this extreme environment. For a karate club, the record is remarkable: the first 20 fights yielded <strong className="text-white">16 wins</strong>, one finalist in the reality TV show <em>Fighting Hurts</em>, and one <strong className="text-white">World Title</strong>. One member even made it as far as the <strong className="text-white">UFC</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Members of DKK Fighters have appeared regularly in the UK&apos;s premier MMA events including Cage Rage, Ultimate Challenge and BAMMA.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Train With Us <ChevronRight size={16} />
              </Link>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-video bg-[#141311]">
              <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">DKK Fighters</p>
                <p className="text-[#a8201a] text-xs uppercase tracking-widest">Cage Rage · BAMMA · UFC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Camp photo strip */}
      <section className="relative h-48 sm:h-64 overflow-hidden">
        <div className="grid grid-cols-3 h-full">
          {[
            { src: "/images/Camp/summer-camp-group.JPG", alt: "DKK summer camp group" },
            { src: "/images/Camp/black-belts-fists.JPG", alt: "Black belts at camp" },
            { src: "/images/Camp/summer-camp-panoramic.JPG", alt: "Summer camp panoramic" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <SafeImage src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#0f0e0c] opacity-30 pointer-events-none" />
      </section>
    </>
  );
}
