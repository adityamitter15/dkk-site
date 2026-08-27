import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import Reveal from "@/components/ui/Reveal";
import KanjiWatermark from "@/components/ui/KanjiWatermark";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Goju Ryu History - Okinawa to London",
  description: "From Chojun Miyagi's founding of Goju Ryu on Okinawa to Daigaku Karate Kai in London. The lineage behind the style we train at 309 Regent Street.",
  alternates: { canonical: "/history" },
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
        body: "Miyagi named the system after a line in the Bubishi: 'The way of inhaling and exhaling is hardness and softness.' Go - hard. Ju - soft.",
      },
      {
        period: "1936",
        title: "The Name 'Karate' Agreed",
        body: "The masters of Naha-te, Shuri-te and Tomari-te agreed a single umbrella name for the Okinawan arts: 'Kara-Te' - empty hand.",
      },
      {
        period: "1953",
        title: "Miyagi's Death & the Jundokan",
        body: "Ei'ichi Miyazato took over as head of the Okinawan Goju Ryu system and set up the Jundokan in Naha City.",
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
        period: "1990",
        title: "DKK Founded",
        body: "After meeting as Black Belts under Kyoshi Kim Roberts, Gavin Mulholland and Dan Lewis set up Daigaku Karate Kai in 1990. The name - 'university' or 'place of learning' - was chosen because both clubs were initially established inside universities. DKK remains true to the combat-orientated nature of Goju Ryu, drawing additionally on Kyoshi Kim Roberts, Shihan Dave Arnold, Master Steve Morris, and Sensei Nick Hughes.",
      },
      {
        period: "Today",
        title: "DKK London - The Tradition Continues",
        body: "Under Shihan Mulholland's continued leadership, DKK London trains adults of all backgrounds in Okinawan Goju Ryu, keeping the authentic tradition alive at 309 Regent Street, London, every Monday and Wednesday.",
      },
    ],
  },
];

/**
 * One paragraph of the supplied history, with a margin note naming its subject.
 * The note is decorative scannability only — it is hidden below lg and from AT,
 * and never carries information the prose does not already state.
 */
function Passage({ note, lead = false, children }: { note?: string; lead?: boolean; children: ReactNode }) {
  return (
    <Reveal className="grid lg:grid-cols-[7rem_1fr] gap-x-8">
      <span
        aria-hidden="true"
        className="hidden lg:block text-right text-[10px] font-bold uppercase tracking-[0.2em] text-gold/45 leading-none pt-2.5 select-none"
      >
        {note ?? ""}
      </span>
      <p
        className={
          lead
            ? "text-gray-300 text-lg leading-relaxed first-letter:float-left first-letter:font-display first-letter:text-[3.5rem] first-letter:leading-[0.78] first-letter:text-gold first-letter:mr-3 first-letter:mt-1"
            : "text-gray-400 leading-relaxed"
        }
      >
        {children}
      </p>
    </Reveal>
  );
}

export default function HistoryPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "History", path: "/history" }]} />
      <PageHero
        variant="archive"
        eyebrow="Heritage"
        eyebrowTone="gold"
        folio="05 / History"
        kanji="系譜"
        kanjiTone="gold"
        title="Goju Ryu History"
        lead="From the dojos of Okinawa to 309 Regent Street - the Goju Ryu tradition lives on."
        caption="Archive photograph · P.C.L. Karate Club"
        image={{ src: "/images/Site/archive-pcl-karate-club.jpg" }}
      />

      {/* Intro statement - centered, impactful */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-5">
            <span className="w-6 h-px bg-gold" />
            A Living Tradition
            <span className="w-6 h-px bg-gold" />
          </p>
          <ScrollRevealText
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-[1.05] mb-6 sm:mb-8"
            text="Hard and soft. Forged in Okinawa."
          />
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            The style we practise was created by Chojun Miyagi on Okinawa in the early 20th century - a fusion of Chinese systems and the island&apos;s own fighting arts. Today the same Goju Ryu lives on at 309 Regent Street, every Monday and Wednesday.
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

      {/* History of Goju Ryu - long-form account supplied by Shihan */}
      <section className="section-reveal relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-coal border-b border-white/5">
        {/* Desktop only - at 390px this sits behind body copy and eats contrast */}
        <KanjiWatermark glyphs="剛柔" tone="gold" className="hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-12 sm:mb-16">
              <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
                <span className="w-6 h-px bg-gold" aria-hidden="true" />
                The Origins
                <span className="w-6 h-px bg-gold" aria-hidden="true" />
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none">
                History of Goju Ryu
              </h2>
            </Reveal>

            <div className="space-y-6 sm:space-y-7">
              <Passage note="Te &amp; Tode" lead>
                While the art of Karate originated on the island of Okinawa off the southern coast of mainland Japan, a great many fighting systems had existed in Asia for thousands of years. The various Chinese-based martial arts that were practised on Okinawa were collectively known as <strong className="text-white">&lsquo;Tode&rsquo;</strong>, or &lsquo;Chinese Hand&rsquo;. However, Okinawa already had its own native combat systems, known simply as <strong className="text-white">&lsquo;Te&rsquo;</strong>.
              </Passage>
              <Passage note="1936">
                The name &lsquo;Karate&rsquo; only came into being in 1936 when the masters of the various systems of Te (Naha-te, Shuri-te and Tomari-te) met to discuss how the Okinawan martial arts might best be moved forward into a new era. At that meeting it was agreed that the combat systems they were currently practising should come together under the umbrella name of &lsquo;Kara-Te&rsquo; - empty hand.
              </Passage>
              <Passage>
                Karate was therefore never meant to be a &lsquo;style&rsquo; in its own right; rather a global term to represent all unarmed fighting arts. Therefore, although the name &lsquo;Karate&rsquo; is relatively new, the fighting art that we practise has a heritage of several thousand years.
              </Passage>
            </div>

            {/* Section break - the essay turns from the name to the lineage */}
            <div className="flex items-center justify-center gap-4 my-12 sm:my-16" aria-hidden="true">
              <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-gold/0 to-gold/40" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
              <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-gold/0 to-gold/40" />
            </div>

            <div className="space-y-6 sm:space-y-7">
              <Passage note="Higaonna">
                Oral tradition has it that late in the 19th Century an Okinawan Naha-te exponent called <strong className="text-white">Kanryo Higaonna</strong> travelled to Southern China where he trained under a White Crane master named Ryu Ryu Ko. On Higaonna&apos;s return to Okinawa he continued to teach where one of his students began to emerge as exceptional. This student&apos;s name was <strong className="text-white">Chojun Miyagi</strong>.
              </Passage>
              <Passage note="1915">
                After Higaonna Sensei&apos;s death in 1915, Chojun Miyagi combined his knowledge of the Chinese systems with that of his own native Te. Miyagi Sensei went on to transform Naha-te into a system of Karate instruction, which he later named <strong className="text-white">Goju Ryu</strong> - the system of martial combat which we still practise today.
              </Passage>
              <Passage note="1953">
                When Miyagi Sensei passed away in 1953, <strong className="text-white">Ei&apos;ichi Miyazato</strong> took over as head of the Okinawan Goju Ryu system, setting up the Jundokan in Naha City on Okinawa, to continue, and further, the teachings of his teacher, Miyagi Chojun Sensei.
              </Passage>
            </div>

            {/* Shihan's closing definition - the thesis of the whole piece */}
            <Reveal className="mt-12 sm:mt-16">
              <blockquote className="relative border-l-2 border-gold pl-6 sm:pl-8 py-1">
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
                  Goju Ryu is a civilian close-quarters fighting system and differs from most other Karate in its proximity of fighting, where great emphasis is placed on the ability to fight and grapple at close-quarters, both standing and on the ground.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline - chaptered */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand text-xs font-bold uppercase tracking-[0.35em] mb-3">The Journey</p>
            <ScrollRevealText
              className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-none"
              text="From Okinawa to London"
            />
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
                            <div className="relative overflow-hidden flex-1 p-5 bg-card border border-white/5 rounded-sm hover:border-brand/25 hover:-translate-y-0.5 hover:shadow-ember-card transition-all duration-300">
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
                                  <SafeImage src="/images/Site/archive-shinto-grading-1980s.jpg" alt="Grading line-up at the Shinto Karate School, early 1980s" fill className="object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                  <p className="absolute bottom-2 left-3 text-white/80 text-[10px] uppercase tracking-widest">Shinto Karate School &middot; Early 1980s</p>
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
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-gold" />
              From the Archive
              <span className="w-6 h-px bg-gold" />
            </p>
            <ScrollRevealText
              className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none"
              text="Four Decades of DKK"
            />
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">Photographs from the club&apos;s earliest days - training halls, grading lines, and a young Shihan making his name on the mats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-card group lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <SafeImage src="/images/Site/archive-class-group-bo-rack.jpg" alt="Archive photograph of a full DKK class in the dojo, bo staffs racked on the wall behind" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">From the Archive</p>
                <p className="text-white font-display text-2xl tracking-widest">The Full Class</p>
                <p className="text-gray-400 text-xs mt-1">A full class in the dojo, bo staffs racked behind</p>
              </div>
            </div>
            {[
              { src: "/images/Site/archive-group-exit-sign.jpg",       label: "Old Hall",     sub: "Training days past" },
              { src: "/images/Site/archive-club-photo-early-members.jpg", label: "Club Photo",   sub: "The early members" },
              { src: "/images/Site/archive-shihan-neil-grading.jpg",    label: "Title Belts",  sub: "Neil Grove with Shihan & Dan Lewis" },
              { src: "/images/Shihan/Archive/shihan-flying-kick-90s.jpg", label: "Flying Kick",   sub: "A young Shihan" },
              { src: "/images/Shihan/Archive/shihan-young-headlock.jpg",    label: "Control",       sub: "From the early archive" },
              { src: "/images/Shihan/Archive/shihan-young-technique.jpg",   label: "Technique",     sub: "Early DKK" },
              { src: "/images/Fighters/neil-grove-belts-crew.jpg",      label: "Black Belts",  sub: "From the early archive" },
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
