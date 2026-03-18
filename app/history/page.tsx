import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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
    title: "Te — The Indigenous Art",
    body: "Okinawa had its own indigenous systems of combat known as Te (hand). The main ones were Naha-te, Shuri-te and Tomari-te — each developed in different regions of the island, reflecting the unique martial culture of Okinawa.",
  },
  {
    period: "Late 19th Century",
    title: "Kanryo Higaonna & Chinese Roots",
    body: "An Okinawan islander named Kanryo Higaonna travelled to Southern China and trained under a White Crane master named Ryu Ryu Ko. On his return he taught what would become the foundation of Goju Ryu — a fusion of Chinese arts and Okinawan Naha-te.",
  },
  {
    period: "Early 20th Century",
    title: "Chojun Miyagi Creates Goju Ryu",
    body: "After Higaonna's death in 1915, his outstanding student Chojun Miyagi combined his knowledge of Chinese systems with native Okinawan fighting arts (Tode) to create Goju Ryu Karate. He named it after a line in the Bubishi: 'The way of inhaling and exhaling is hardness and softness.'",
  },
  {
    period: "1936",
    title: "The Name 'Karate' Agreed",
    body: "It was the fusion and development of Te and Tode that became widely known as Kara-te when a council of Okinawan-te masters agreed the term in 1936. Karate — empty hand — was never meant to be a single style; rather a global term representing all unarmed fighting arts.",
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
    title: "DKK London — The Tradition Continues",
    body: "Under Shihan Mulholland's continued leadership, DKK London trains adults of all backgrounds in Okinawan Goju Ryu — keeping the authentic tradition alive at 309 Regent Street, London, every Monday and Wednesday.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Heritage
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">Karate History</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <SectionHeading eyebrow="From Okinawa to London" title="A Living Tradition" />
            <p className="text-gray-400 leading-relaxed mb-5">
              Karate originated on the island of Okinawa off the southern coast of Japan. However fighting systems had existed in Asia for thousands of years before the name &lsquo;Karate&rsquo; was ever used.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Although the name &lsquo;Karate&rsquo; is relatively new, the fighting art we practise has a heritage of several thousand years. At DKK London, we see ourselves as part of that lineage — inheritors of a practical fighting tradition that we are responsible for preserving and passing on.
            </p>
          </div>

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-[1.1rem] top-3 bottom-3 w-px bg-gradient-to-b from-[#c0392b] via-[#c0392b]/30 to-transparent" />

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-12 group">
                  {/* Dot */}
                  <div className="absolute left-[0.6rem] top-5 w-3.5 h-3.5 rounded-full bg-[#c0392b] ring-4 ring-[#0a0a0a] group-hover:ring-[#c0392b]/20 transition-all duration-300 z-10" />
                  {/* Card */}
                  <div className="p-5 bg-[#111] border border-white/5 rounded-sm hover:border-[#c0392b]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(192,57,43,0.12)] transition-all duration-300">
                    <p className="text-[#c0392b] text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5">{item.period}</p>
                    <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Lineage" title="From Okinawa to London" centered />
          <LineageChain />
        </div>
      </section>

      <section className="py-14 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide">Explore further</p>
            <p className="text-gray-400 text-sm">Learn about the style, or come and train it.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
              Goju Ryu <ChevronRight size={16} />
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-[#c0392b] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#e74c3c] transition-colors rounded-sm">
              Train With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
