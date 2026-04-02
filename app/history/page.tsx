import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import LineageChain from "@/components/LineageChain";

export const metadata: Metadata = {
  title: "Karate History",
  description: "The history of karate from ancient Okinawan fighting arts to the founding of Goju Ryu by Chojun Miyagi and the establishment of DKK London.",
};

const timeline = [
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
];

export default function HistoryPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Camp/summer-camp-panoramic.JPG" alt="" fill className="object-cover object-center opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#b08d57] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#b08d57]" />
            Heritage
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Karate History</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">From ancient Okinawa to 309 Regent Street. A tradition spanning centuries.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-3">
              <SectionHeading eyebrow="From Okinawa to London" title="A Living Tradition" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Karate originated on the island of Okinawa off the southern coast of Japan. However fighting systems had existed in Asia for thousands of years before the name &lsquo;Karate&rsquo; was ever used.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Although the name &lsquo;Karate&rsquo; is relatively new, the fighting art we practise has a heritage of several thousand years. At DKK London, we see ourselves as part of that lineage, inheritors of a practical fighting tradition that we are responsible for preserving and passing on.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "4/3" }}>
              <SafeImage src="/images/Training/class-kata-aerial.JPG" alt="Kata training at DKK London" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#b08d57] text-[10px] uppercase tracking-[0.2em] mb-0.5">The Tradition Continues</p>
                <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide">DKK London · Est. Late 1980s</p>
              </div>
            </div>
          </div>

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-[1.1rem] top-3 bottom-3 w-px bg-gradient-to-b from-[#b08d57] via-[#a8201a]/30 to-transparent" />

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-12 group">
                  {/* Dot */}
                  <div className={`absolute left-[0.6rem] top-5 w-3.5 h-3.5 rounded-full ring-4 ring-[#0f0e0c] group-hover:ring-[#a8201a]/20 transition-all duration-300 z-10 ${i >= 6 ? "bg-[#a8201a]" : "bg-[#b08d57]"}`} />
                  {/* Card */}
                  <div className="p-5 bg-[#141311] border border-white/5 rounded-sm hover:border-[#a8201a]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(168,32,26,0.12)] transition-all duration-300">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 ${i >= 6 ? "text-[#a8201a]" : "text-[#b08d57]"}`}>{item.period}</p>
                    <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    {/* Inline photo at "DKK London Founded" entry */}
                    {i === 6 && (
                      <div className="mt-4 relative rounded-sm overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <SafeImage src="/images/Camp/summer-camp-group.JPG" alt="DKK London summer camp" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <p className="absolute bottom-2 left-3 text-white/70 text-[10px] uppercase tracking-widest">DKK London · Summer Camp</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />
      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#b08d57] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Lineage</p>
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
