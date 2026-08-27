import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import StatStrip from "@/components/ui/StatStrip";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "DKK Fighters",
  description: "DKK Fighters - 16 wins from our first 20 professional cage fights, a British Heavyweight title, a World Title fight, and one member who reached the UFC.",
  alternates: { canonical: "/fighters" },
  openGraph: { images: ["/og/fighters.jpg"] },
  twitter: { images: ["/og/fighters.jpg"] },
};

const fighters = [
  {
    name: "Neil \"Goliath\" Grove",
    record: "12-8-1",
    highlight: "UCMMA British Heavyweight Champion \u00b7 BAMMA World Title Fight \u00b7 UFC",
    image: "/images/Fighters/neil-grove-victory-cage.jpg",
    portrait: "/images/Fighters/neil-grove-title-portrait.jpg",
    bio: "After a nightclub incident, Neil and a fellow bouncer were made to take Goju Ryu classes at DKK. He earned his Shodan in 2005 and went on to compete at the highest level. At Cage Rage 22, he knocked out James \"Colossus\" Thompson in 10 seconds on two days notice. He was crowned UCMMA British Heavyweight Champion, fought for the BAMMA World Heavyweight Title, and competed in the UFC. All 12 of his wins came by KO or TKO.",
    stats: [
      { label: "Wins", value: "12" },
      { label: "All by KO/TKO", value: "100%" },
      { label: "Height", value: "6'6\"" },
    ],
  },
  {
    name: "Edgelson \"Edge\" Lua",
    record: "7-7-0",
    highlight: "Cage Rage \u00b7 BAMMA \u00b7 UCMMA",
    image: "/images/Fighters/edge-hand-raised.jpg",
    portrait: "/images/Fighters/edge-back-patch.jpg",
    bio: "A DKK black belt since 2010, Edge competed across the UK's top MMA promotions. A powerful welterweight with fast hands, he recorded a 30-second knockout at Cage Rage Contenders 9 and went on to fight in BAMMA, FX3 and UCMMA.",
    stats: [
      { label: "Wins", value: "7" },
      { label: "By KO", value: "3" },
      { label: "By Sub", value: "3" },
    ],
  },
  {
    name: "Dyson Roberts",
    record: "5-3-0",
    highlight: "Cage Rage \u00b7 Fighting Hurts Finalist",
    image: null,
    portrait: null,
    bio: "Still an orange belt at the time, Dyson entered the reality TV show Fighting Hurts and was selected as one of 16 contestants. Though only a welterweight, he was matched against light-heavyweights, giving away almost 10kg per fight. He made it all the way to the final at the main Cage Rage show. Four of his five wins came inside the first round - two by TKO, two by submission to strikes - with his fastest finish in just 12 seconds.",
    stats: [
      { label: "Wins", value: "5" },
      { label: "1st-round Finishes", value: "4" },
      { label: "Fastest KO", value: "12s" },
    ],
  },
  {
    name: "Shola Adeniran",
    record: "1-0-0",
    highlight: "Ultimate Warrior Challenge",
    image: "/images/Fighters/shola-adeniran-victory.jpg",
    portrait: null,
    bio: "An orange belt at the time, Shola stepped into the cage at Ultimate Warrior Challenge in November 2008 and won by TKO in the third round. A fighting performance straight out of the DKK combat-orientated reading of Goju Ryu.",
    stats: [
      { label: "Method", value: "TKO" },
      { label: "Round", value: "3" },
      { label: "Grade", value: "Orange Belt" },
    ],
  },
];

export default function FightersPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "DKK Fighters", path: "/fighters" }]} />
      <PageHero
        variant="full"
        eyebrow="Competition & Combat"
        folio="07 / Fighters"
        kanji="組手"
        kanjiTone="brand"
        title="DKK Fighters"
        lead="16 wins from our first 20 professional cage fights. A British Heavyweight title, a World Title fight, and one member who reached the UFC."
        image={{ src: "/images/Fighters/neil-grove-victory-cage.jpg", alt: "Neil Grove celebrating victory in the cage", position: "center 42%" }}
      />

      {/* Stats banner */}
      <StatStrip>
        {[
          { value: "16/20", label: "First 20 Fights Won" },
          { value: "1", label: "British Heavyweight Title" },
          { value: "UFC", label: "Level Reached" },
          { value: "BAMMA", label: "Competed In" },
        ].map((s) => (
          <CountUpStat key={s.label} value={s.value} label={s.label} />
        ))}
      </StatStrip>

      {/* Intro */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="DKK London" title="Tested Under Pressure" />
              <p className="text-gray-400 leading-relaxed mb-5">
                While the club&apos;s primary focus is on combat, not competition, there is genuine benefit to be had from testing yourself against an aggressive, non-cooperative opponent, and the MMA scene offers just that challenge.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                There is never any pressure on students to compete. But several have chosen to test themselves in this extreme environment. Our record in the cage remains one of the best of any club in the UK: the first 20 fights yielded 16 wins, one finalist in the reality TV show <em>Fighting Hurts</em>, the <strong className="text-white">UCMMA British Heavyweight title</strong>, and a fight for the <strong className="text-white">BAMMA World Heavyweight Title</strong>. One member even made it as far as the <strong className="text-white">UFC</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Members of DKK Fighters appeared regularly in the UK&apos;s premier MMA events including Cage Rage, Ultimate Challenge, Bellator and BAMMA.
              </p>
              <p className="text-white font-display text-2xl tracking-[0.25em] uppercase mt-8 pt-6 border-t border-brand/30">
                Tested. Passed. Done.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-[4/5] lg:aspect-[3/4] bg-coal flex items-center justify-center p-6">
              <div className="relative w-full max-w-[280px] aspect-[221/305] rounded-sm overflow-hidden shadow-lg">
                <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters on the Ultimate Arena bill at the Troxy, 2010" fill className="object-contain" />
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-display text-xl tracking-wide">DKK Fighters</p>
                <p className="text-brand text-xs uppercase tracking-widest">Cage Rage &middot; Bellator &middot; BAMMA &middot; UFC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fighter Profiles */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Fighters" title="Individual Records" />
          <div className="space-y-6">
            {fighters.map((fighter, i) => (
              <div
                key={fighter.name}
                className={`relative bg-card border rounded-sm overflow-hidden transition-all duration-300 hover:border-brand/40 ${
                  i === 0 ? "border-brand/30" : "border-white/5"
                }`}
              >
                <div className={`grid ${fighter.image ? "lg:grid-cols-[1fr_1.4fr]" : ""} gap-0`}>
                  {fighter.image && (
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-black">
                      <SafeImage src={fighter.image} alt={fighter.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/0 to-card/0 lg:bg-gradient-to-r lg:from-card/0 lg:via-card/0 lg:to-card" />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl tracking-wide text-white leading-none">{fighter.name}</h3>
                        <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mt-1">{fighter.highlight}</p>
                      </div>
                      {/* Tale of the tape — W/L/D columns when the record parses */}
                      {/^\d+-\d+-\d+$/.test(fighter.record) ? (
                        <div className="flex flex-shrink-0 divide-x divide-white/10 bg-brand/10 border border-brand/20 rounded-sm">
                          {fighter.record.split("-").map((n, j) => (
                            <div key={j} className="px-4 py-2 text-center min-w-[3.5rem]">
                              <p className={`font-display text-2xl tracking-wide leading-none tabular-nums ${j === 0 ? "text-brand" : "text-white"}`}>{n}</p>
                              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-0.5">{["Wins", "Losses", "Draws"][j]}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-sm flex-shrink-0">
                          <p className="text-gray-500 text-[10px] uppercase tracking-widest">Record</p>
                          <p className="font-display text-2xl text-white tracking-wide leading-none">{fighter.record}</p>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-3xl">{fighter.bio}</p>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {fighter.stats.map((stat) => (
                        <div key={stat.label} className="px-3 sm:px-4 py-3 bg-night border border-white/5 rounded-sm min-w-[90px] sm:min-w-[100px]">
                          <p className="font-display text-xl text-white tracking-wide leading-none">{stat.value}</p>
                          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {i === 0 && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-brand text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm z-10">
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

      {/* In the Cage - archive gallery */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading eyebrow="From the Archive" title="In the Cage" />
            <p className="text-gray-500 text-sm max-w-md sm:text-right">Wembley, Ultimate Challenge, and nights that became part of DKK history.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {[
              { src: "/images/Fighters/neil-grove-walkout.jpg", caption: "Neil Grove - Walkout" },
              { src: "/images/Fighters/neil-grove-portrait-mulholland.jpg", caption: "Grove & Mulholland" },
              { src: "/images/Fighters/edge-cage-victory.jpg", caption: "Edge - Victory" },
              { src: "/images/Fighters/domagoj-wembley-2007.jpg", caption: "Wembley 2007" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-sm overflow-hidden bg-card group">
                <SafeImage src={img.src} alt={img.caption} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-[10px] uppercase tracking-widest font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Want to train with us?"
        sub="There is never any pressure to compete. Just come and train."
      />
    </>
  );
}
