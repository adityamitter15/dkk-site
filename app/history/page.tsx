import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import ParallaxImage from "@/components/ParallaxImage";
import LineageChain from "@/components/LineageChain";

export const metadata: Metadata = {
  title: "Karate History",
  description: "The history of karate from ancient Okinawan fighting arts to the founding of Goju Ryu by Chojun Miyagi and the establishment of DKK London.",
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
    label: "The Origins",
    title: "Before Karate",
    subtitle: "Thousands of years of Asian fighting systems converge on a small Pacific island.",
    entries: [
      {
        period: "Thousands of Years Ago",
        title: "Asian Fighting Systems",
        body: "Fighting systems had existed in Asia for thousands of years before the name 'Karate' was ever used. When the various martial arts that existed in China were practised on Okinawa, they were collectively known as Tode, or Chinese Hand.",
      },
      {
        period: "Ancient Okinawa",
        title: "Te - The Indigenous Art",
        body: "Okinawa had its own indigenous systems of combat known as Te (hand). The main ones were Naha-te, Shuri-te and Tomari-te, each developed in different regions of the island, reflecting the unique martial culture of Okinawa.",
      },
      {
        period: "Late 19th Century",
        title: "Kanryo Higaonna & Chinese Roots",
        body: "An Okinawan islander named Kanryo Higaonna travelled to Southern China and trained under a White Crane master named Ryu Ryu Ko. On his return he taught what would become the foundation of Goju Ryu, a fusion of Chinese arts and Okinawan Naha-te.",
      },
    ],
  },
  {
    number: "II",
    label: "Goju Ryu is Born",
    title: "The Style Takes Form",
    subtitle: "Hard and soft. Chojun Miyagi forges the system, and the world learns the name 'Karate'.",
    entries: [
      {
        period: "Early 20th Century",
        title: "Chojun Miyagi Creates Goju Ryu",
        body: "After Higaonna's death in 1915, his outstanding student Chojun Miyagi combined his knowledge of Chinese systems with native Okinawan fighting arts (Tode) to create Goju Ryu Karate. He named it after a line in the Bubishi: 'The way of inhaling and exhaling is hardness and softness.'",
      },
      {
        period: "1936",
        title: "The Name 'Karate' Agreed",
        body: "It was the fusion and development of Te and Tode that became widely known as Kara-te when a council of Okinawan-te masters agreed the term in 1936. Karate (empty hand) was never meant to be a single style; rather a global term representing all unarmed fighting arts.",
      },
      {
        period: "1953",
        title: "Miyagi's Death & the Jundokan",
        body: "On Chojun Miyagi's death in 1953, Ei'ichi Miyazato took over as head of the Jundokan and the Okinawan Goju Ryu system, continuing to develop and preserve the style.",
      },
    ],
  },
  {
    number: "III",
    label: "The DKK Era",
    title: "The Tradition Reaches London",
    subtitle: "Shihan Mulholland brings authentic Okinawan Goju Ryu to the UK and builds DKK into one of the country's strongest karate clubs.",
    entries: [
      {
        period: "Late 1980s",
        title: "DKK London Founded",
        body: "Shihan Gavin Mulholland established the London branch of Daigaku Karate Kai, bringing authentic Okinawan Goju Ryu to the UK. The club has grown into one of the strongest karate clubs in Britain, maintaining the combat-orientated ethos of the original style.",
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
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0907]" />
        <ParallaxImage src="/images/Site/archive-1982-group-rising-sun.jpg" className="object-cover object-center opacity-55" intensity={70} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c9a96e]" />
            Heritage
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Karate History</h1>
          <p className="text-gray-300 text-lg max-w-xl font-light leading-relaxed">From ancient Okinawa to 309 Regent Street - a tradition spanning several thousand years.</p>
        </div>
      </section>

      {/* Intro statement - centered, impactful */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-5">
            <span className="w-6 h-px bg-[#c9a96e]" />
            A Living Tradition
            <span className="w-6 h-px bg-[#c9a96e]" />
          </p>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-[1.05] mb-6">
            Karate is older than the name we give it.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            The fighting art we practise traces back several thousand years - from the indigenous arts of Okinawa, through the Chinese masters who shaped its movement, to a small dojo in central London where the tradition continues every Monday and Wednesday.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 max-w-2xl mx-auto">
            {[
              { value: "Okinawa", label: "Birthplace" },
              { value: "1936", label: "Name Agreed" },
              { value: "London", label: "DKK Today" },
            ].map((item) => (
              <div key={item.label} className="p-4 sm:p-5 bg-[#141311] border border-white/5 rounded-sm">
                <p className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-white tracking-wide leading-none">{item.value}</p>
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-widest mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - chaptered */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-3">The Journey</p>
            <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none">Three Acts &middot; Three Eras</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-20">
            {chapters.map((chapter, ci) => {
              const isFinal = ci === chapters.length - 1;
              return (
                <div key={chapter.number} className="relative">
                  {/* Chapter header */}
                  <div className="flex items-end gap-5 mb-10 pb-6 border-b border-white/10">
                    <span className={`font-['Bebas_Neue'] text-[5.5rem] sm:text-[7rem] leading-none tracking-wide ${isFinal ? "text-[#a8201a]" : "text-[#c9a96e]/70"}`}>
                      {chapter.number}
                    </span>
                    <div className="flex-1 pb-3">
                      <p className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-2 ${isFinal ? "text-[#a8201a]" : "text-[#c9a96e]"}`}>
                        {chapter.label}
                      </p>
                      <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none mb-3">{chapter.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{chapter.subtitle}</p>
                    </div>
                  </div>

                  {/* Chapter entries - fixed-width dot rail with centred line */}
                  <div className="relative">
                    <div className={`absolute left-[7px] top-4 bottom-4 w-px ${isFinal ? "bg-gradient-to-b from-[#a8201a] via-[#a8201a]/40 to-transparent" : "bg-gradient-to-b from-[#c9a96e] via-[#c9a96e]/30 to-transparent"}`} />

                    <div className="space-y-4">
                      {chapter.entries.map((item, ei) => {
                        const isFoundingEra = isFinal && ei === 0;
                        const isToday = isFinal && ei === chapter.entries.length - 1;
                        return (
                          <div key={ei} className="relative flex gap-5 sm:gap-7 group">
                            <div className="w-[15px] flex-shrink-0 relative">
                              <div className={`absolute left-0 top-5 w-3.5 h-3.5 rounded-full ring-4 ring-[#0f0e0c] z-10 transition-all duration-300 ${isFinal ? "bg-[#a8201a] group-hover:ring-[#a8201a]/20" : "bg-[#c9a96e] group-hover:ring-[#c9a96e]/20"}`} />
                            </div>
                            <div className="flex-1 p-5 bg-[#141311] border border-white/5 rounded-sm hover:border-[#a8201a]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(168,32,26,0.12)] transition-all duration-300">
                              <p className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 ${isFinal ? "text-[#a8201a]" : "text-[#c9a96e]"}`}>{item.period}</p>
                              <h4 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 leading-tight">{item.title}</h4>
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-[#c9a96e]" />
              From the Archive
              <span className="w-6 h-px bg-[#c9a96e]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none">Four Decades of DKK</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">Photographs from the club&apos;s earliest days - training halls, grading lines, and a young Shihan making his name on the mats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#141311] group lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <SafeImage src="/images/Site/archive-1982-group-rising-sun.jpg" alt="1982 DKK group photo with Rising Sun flag" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.2em]">1982</p>
                <p className="text-white font-['Bebas_Neue'] text-2xl tracking-widest">Earliest Days</p>
                <p className="text-gray-400 text-xs mt-1">Certificates under the Rising Sun</p>
              </div>
            </div>
            {[
              { src: "/images/Site/archive-group-exit-sign.jpg",       label: "Old Hall",     sub: "Training days past" },
              { src: "/images/Site/archive-group-sepia.jpg",            label: "Club Photo",   sub: "The early members" },
              { src: "/images/Site/archive-shihan-neil-grading.jpg",    label: "Grading Day",  sub: "Shihan & Neil Grove" },
              { src: "/images/Shihan/Archive/shihan-young-flying-kick.jpg", label: "Flying Kick",   sub: "A young Shihan" },
              { src: "/images/Shihan/Archive/shihan-young-headlock.jpg",    label: "Control",       sub: "From the early archive" },
              { src: "/images/Shihan/Archive/shihan-young-technique.jpg",   label: "Technique",     sub: "Early DKK" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#141311] group">
                <SafeImage src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-['Bebas_Neue'] text-lg tracking-widest">{img.label}</p>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.2em]">{img.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Lineage</p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none text-white">From Okinawa to London</h2>
          </div>
          <LineageChain />
        </div>
      </section>

      <section className="py-14 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide">Explore further</p>
            <p className="text-gray-400 text-sm">Learn about the style, or come and train it.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
              Goju Ryu <ChevronRight size={16} />
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-[#a8201a] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#c62828] transition-colors rounded-sm">
              Train With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
