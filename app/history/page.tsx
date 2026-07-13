import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Goju Ryu History",
  description: "The history of Goju Ryu - from Chojun Miyagi's founding of the style on Okinawa to the founding of Daigaku Karate Kai by Shihan Gavin Mulholland (DKK London) and Shihan Dan Lewis (DKK Portishead).",
  openGraph: { images: ["/og/history.jpg"] },
  twitter: { images: ["/og/history.jpg"] },
};

type Entry = {
  period: string;
  title: string;
  body: string;
};
type Chapter = {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  entries: Entry[];
};

const chapters: Chapter[] = [
  {
    number: "I",
    label: "Goju Ryu is Born",
    title: "The Style Takes Form",
    subtitle: "Hard and soft. Chojun Miyagi forges the system on Okinawa, and the world learns the name 'Karate'.",
    entries: [
      {
        period: "Early 20th Century",
        title: "Chojun Miyagi Creates Goju Ryu",
        body: "Chojun Miyagi, the outstanding student of Kanryo Higaonna, combined his teacher's knowledge of Chinese systems with native Okinawan fighting arts to create Goju Ryu Karate. He named it after a line in the Bubishi: 'The way of inhaling and exhaling is hardness and softness.'",
      },
      {
        period: "1936",
        title: "The Name 'Karate' Agreed",
        body: "A council of Okinawan masters agreed the term 'Karate' (empty hand) in 1936. It was never meant to be a single style - rather a global term representing all unarmed fighting arts that traced through Okinawa.",
      },
      {
        period: "1953",
        title: "Miyagi's Death & the Jundokan",
        body: "On Chojun Miyagi's death in 1953, Ei'ichi Miyazato took over as head of the Jundokan and the Okinawan Goju Ryu system, continuing to develop and preserve the style for the generations that would follow.",
      },
    ],
  },
  {
    number: "II",
    label: "The DKK Era",
    title: "The Tradition Reaches London",
    subtitle: "Shihan Mulholland and Shihan Lewis carry the Okinawan tradition into a new generation, building DKK into one of the UK's strongest karate clubs.",
    entries: [
      {
        period: "1990 - 1992",
        title: "DKK Founded",
        body: "After meeting as Black Belts under Kyoshi Kim Roberts in 1990, Gavin Mulholland and Dan Lewis set up Daigaku Karate Kai in 1992. The name - 'university' or 'place of learning' - was chosen because both clubs were initially established inside universities. From the outset DKK held to a combat-orientated reading of Goju Ryu, drawing additionally on Shihan Dave Arnold, Master Steve Morris, and Sensei Nick Hughes.",
      },
      {
        period: "Today",
        title: "DKK London - The Tradition Continues",
        body: "Under Shihan Mulholland's continued leadership, DKK London trains adults of all backgrounds in Okinawan Goju Ryu, keeping the authentic tradition alive at 309 Regent Street, London, every Monday and Wednesday.",
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        variant="archive"
        eyebrow="Heritage"
        eyebrowTone="gold"
        folio="05 / History"
        kanji="系譜"
        kanjiTone="gold"
        title="Goju Ryu History"
        lead="From the dojos of Okinawa to 309 Regent Street - the Goju Ryu tradition lives on."
        caption="Archive photograph · 1982"
        image={{ src: "/images/Site/archive-1982-group-rising-sun.jpg" }}
      />

      {/* Intro statement - centered, impactful */}
      <section className="section-reveal py-20 lg:py-28 bg-night border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-5">
            <span className="w-6 h-px bg-gold" />
            A Living Tradition
            <span className="w-6 h-px bg-gold" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-[1.05] mb-6">
            Hard and soft. Forged in Okinawa.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            The style we practise was hand-built by Chojun Miyagi on Okinawa in the early 20th century - a fusion of Chinese systems and the island's own fighting arts. Today the same Goju Ryu lives on at 309 Regent Street, every Monday and Wednesday.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 max-w-2xl mx-auto">
            {[
              { value: "Okinawa", label: "Birthplace" },
              { value: "Miyagi", label: "Founder" },
              { value: "London", label: "DKK Today" },
            ].map((item) => (
              <div key={item.label} className="p-4 sm:p-5 bg-card border border-white/5 rounded-sm">
                <p className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none">{item.value}</p>
                <p className="text-gold text-[10px] uppercase tracking-widest mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - chaptered */}
      <section className="section-reveal py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand text-xs font-bold uppercase tracking-[0.35em] mb-3">The Journey</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none">From Okinawa to London</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-20">
            {chapters.map((chapter, ci) => {
              const isFinal = ci === chapters.length - 1;
              return (
                <div key={chapter.number} className="relative">
                  {/* Chapter header */}
                  <div className="flex items-end gap-5 mb-10 pb-6 border-b border-white/10">
                    <span className={`font-display text-[5.5rem] sm:text-[7rem] leading-none tracking-wide ${isFinal ? "text-brand" : "text-gold/70"}`}>
                      {chapter.number}
                    </span>
                    <div className="flex-1 pb-3">
                      <p className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-2 ${isFinal ? "text-brand" : "text-gold"}`}>
                        {chapter.label}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-none mb-3">{chapter.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{chapter.subtitle}</p>
                    </div>
                  </div>

                  {/* Chapter entries - fixed-width dot rail with centred line */}
                  <div className="relative">
                    <div className={`absolute left-[7px] top-4 bottom-4 w-px ${isFinal ? "bg-gradient-to-b from-brand via-brand/40 to-brand/0" : "bg-gradient-to-b from-gold via-gold/30 to-gold/0"}`} />

                    <div className="space-y-4">
                      {chapter.entries.map((item, ei) => {
                        const isFoundingEra = isFinal && ei === 0;
                        const isToday = isFinal && ei === chapter.entries.length - 1;
                        return (
                          <div key={ei} className="relative flex gap-5 sm:gap-7 group">
                            <div className="w-[15px] flex-shrink-0 relative">
                              <div className={`absolute left-0 top-5 w-3.5 h-3.5 rounded-full ring-4 ring-night z-10 transition-all duration-300 ${isFinal ? "bg-brand group-hover:ring-brand/20" : "bg-gold group-hover:ring-gold/20"}`} />
                            </div>
                            <div className="relative overflow-hidden flex-1 p-5 bg-card border border-white/5 rounded-sm hover:border-brand/25 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(168,32,26,0.12)] transition-all duration-300">
                              {/\d{4}/.test(item.period) && (
                                <span aria-hidden="true" className="absolute top-3 right-3 font-display text-6xl sm:text-7xl leading-none text-white/[0.05] select-none pointer-events-none">
                                  {item.period.match(/\d{4}/)?.[0]}
                                </span>
                              )}
                              <p className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 ${isFinal ? "text-brand" : "text-gold"}`}>{item.period}</p>
                              <h4 className="font-display text-2xl tracking-wide text-white mb-2 leading-tight">{item.title}</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                              {isFoundingEra && (
                                <div className="mt-4 relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
                                  <SafeImage src="/images/Site/archive-grading-certificates.jpg" alt="DKK London founding-era grading, 1990s" fill className="object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                  <p className="absolute bottom-2 left-3 text-white/80 text-[10px] uppercase tracking-widest">Founding-era grading &middot; Early 1990s</p>
                                </div>
                              )}
                              {isToday && (
                                <div className="mt-4 relative rounded-sm overflow-hidden" style={{ aspectRatio: "16/9" }}>
                                  <SafeImage src="/images/Camp/summer-camp-panoramic.JPG" alt="DKK Summer Camp panoramic - the full DKK family" fill className="object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                  <p className="absolute bottom-2 left-3 text-white/80 text-[10px] uppercase tracking-widest">DKK Summer Camp &middot; The Full DKK Family</p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />

      {/* From the Archive - vintage DKK photos */}
      <section className="section-reveal py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-gold" />
              From the Archive
              <span className="w-6 h-px bg-gold" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none">Four Decades of DKK</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">Photographs from the club&apos;s earliest days - training halls, grading lines, and a young Shihan making his name on the mats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-card group lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <SafeImage src="/images/Site/archive-1982-group-rising-sun.jpg" alt="1982 DKK group photo with Rising Sun flag" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">1982</p>
                <p className="text-white font-display text-2xl tracking-widest">Earliest Days</p>
                <p className="text-gray-400 text-xs mt-1">Certificates under the Rising Sun</p>
              </div>
            </div>
            {[
              { src: "/images/Site/archive-group-exit-sign.jpg",       label: "Old Hall",     sub: "Training days past" },
              { src: "/images/Site/archive-group-sepia.jpg",            label: "Club Photo",   sub: "The early members" },
              { src: "/images/Site/archive-shihan-neil-grading.jpg",    label: "Title Belts",  sub: "Neil Grove with Shihan & Dan Lewis" },
              { src: "/images/Shihan/Archive/shihan-young-flying-kick.jpg", label: "Flying Kick",   sub: "A young Shihan" },
              { src: "/images/Shihan/Archive/shihan-young-headlock.jpg",    label: "Control",       sub: "From the early archive" },
              { src: "/images/Shihan/Archive/shihan-young-technique.jpg",   label: "Technique",     sub: "Early DKK" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-card group">
                <SafeImage src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-display text-lg tracking-widest">{img.label}</p>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em]">{img.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-display text-2xl tracking-wide">Explore further</p>
            <p className="text-gray-400 text-sm">Learn about the style, or come and train it.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
              Goju Ryu <ChevronRight size={16} />
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-brand text-white font-semibold uppercase tracking-wider text-sm hover:bg-brand-hover transition-colors rounded-sm">
              Train With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
