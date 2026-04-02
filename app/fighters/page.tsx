import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";

export const metadata: Metadata = {
  title: "DKK Fighters",
  description: "DKK Fighters - 16 wins from 20 cage fights, a World Title, and one member who reached the UFC. The competitive record of DKK London.",
};

const fighters = [
  {
    name: "Neil \"Goliath\" Grove",
    record: "12-8-1",
    highlight: "UFC · Bellator · UCMMA World Heavyweight Champion",
    bio: "After a nightclub incident, Neil and a fellow bouncer were made to take Goju Ryu classes at DKK. He earned his Shodan in 2005 and went on to compete at the highest level. At Cage Rage 22, he knocked out James \"Colossus\" Thompson in 10 seconds on two days notice. He was crowned UCMMA World Heavyweight Champion and fought in the UFC and Bellator. All 12 of his wins came by KO or TKO.",
    stats: [
      { label: "Wins", value: "12" },
      { label: "All by KO/TKO", value: "100%" },
      { label: "Height", value: "6'6\"" },
    ],
  },
  {
    name: "Edgelson \"Edge\" Lua",
    record: "7-7-0",
    highlight: "Cage Rage · BAMMA · UCMMA",
    bio: "A DKK black belt since 2010, Edge competed across the UK's top MMA promotions. A powerful welterweight with fast hands, he recorded a 30-second knockout at Cage Rage Contenders 9 and went on to fight in BAMMA, FX3 and UCMMA.",
    stats: [
      { label: "Wins", value: "7" },
      { label: "By KO", value: "3" },
      { label: "By Sub", value: "3" },
    ],
  },
  {
    name: "Dyson Roberts",
    record: "Fighting Hurts Finalist",
    highlight: "Cage Rage · Fighting Hurts TV Show",
    bio: "Still an orange belt at the time, Dyson entered the reality TV show Fighting Hurts and was selected as one of 16 contestants. Though only a welterweight, he was matched against light-heavyweights, giving away almost 10kg per fight. He made it all the way to the final at the main Cage Rage show.",
    stats: [
      { label: "Result", value: "Finalist" },
      { label: "Weight", value: "Welterweight" },
      { label: "Grade", value: "Orange Belt" },
    ],
  },
];

export default function FightersPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Fighters/dkk.jpg" alt="" fill className="object-cover object-center opacity-35" />
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
      <section className="bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
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

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
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
              <p className="text-gray-400 leading-relaxed">
                Members of DKK Fighters have appeared regularly in the UK&apos;s premier MMA events including Cage Rage, Ultimate Challenge, Bellator and BAMMA.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-video bg-[#141311]">
              <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">DKK Fighters</p>
                <p className="text-[#a8201a] text-xs uppercase tracking-widest">Cage Rage · Bellator · BAMMA · UFC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fighter Profiles */}
      <section className="py-20 lg:py-28 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Fighters" title="Individual Records" />
          <div className="space-y-6">
            {fighters.map((fighter, i) => (
              <div
                key={fighter.name}
                className={`relative bg-[#141311] border rounded-sm overflow-hidden transition-all duration-300 hover:border-[#a8201a]/40 ${
                  i === 0 ? "border-[#a8201a]/30" : "border-white/5"
                }`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wide text-white leading-none">{fighter.name}</h3>
                      <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em] mt-1">{fighter.highlight}</p>
                    </div>
                    <div className="px-4 py-2 bg-[#a8201a]/10 border border-[#a8201a]/20 rounded-sm flex-shrink-0">
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">Record</p>
                      <p className="font-['Bebas_Neue'] text-2xl text-white tracking-wide leading-none">{fighter.record}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-3xl">{fighter.bio}</p>

                  <div className="flex flex-wrap gap-4">
                    {fighter.stats.map((stat) => (
                      <div key={stat.label} className="px-4 py-3 bg-[#0f0e0c] border border-white/5 rounded-sm min-w-[100px]">
                        <p className="font-['Bebas_Neue'] text-xl text-white tracking-wide leading-none">{stat.value}</p>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {i === 0 && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#a8201a] text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
                    Featured
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-xs mt-8">
            Fighter records sourced from Sherdog. DKK Fighters competed between 2006 and 2016 across multiple UK and international promotions.
          </p>
        </div>
      </section>

      {/* Summer Camp photo strip */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#12110f] via-transparent to-[#0f0e0c] opacity-30 pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Want to train with us?</p>
            <p className="text-white/70 text-sm mt-1">There is never any pressure to compete. Just come and train.</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#a8201a] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors rounded-sm flex-shrink-0 inline-flex items-center gap-2"
          >
            Get In Touch <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
