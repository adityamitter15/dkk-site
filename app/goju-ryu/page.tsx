import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "Goju Ryu",
  description: "Goju Ryu - hard and soft style. An Okinawan karate system emphasising close-quarter combat, breathing, and practical self-defence. Learn about its origins and philosophy.",
  openGraph: { images: ["/images/Shihan/shihan-kuwa-black.jpg"] },
  twitter: { images: ["/images/Shihan/shihan-kuwa-black.jpg"] },
};

export default function GojuRyuPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <ParallaxImage src="/images/Grading/bunkai-demo.JPG" className="object-cover object-center opacity-35" intensity={70} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c9a96e]" />
            The Style
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-2">Goju Ryu</h1>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#c9a96e]/50 tracking-wide leading-none mb-6">剛柔流</h2>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">Hard and soft. An Okinawan fighting system built for close-quarter reality.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionHeading eyebrow="Hard & Soft" title="What is Goju Ryu?" />
                <p className="text-gray-400 leading-relaxed mb-5">
                  The name Goju is derived from two contrasting terms: <strong className="text-white">Go</strong> meaning hard, and <strong className="text-white">Ju</strong> meaning soft. Goju differs from most other karate systems in its proximity of fighting. Great emphasis is placed on striking and grappling at close quarters, both standing and on the ground, making it an excellent style for reality-based self-defence.
                </p>
              </div>

              <div>
                <p className="text-[#c9a96e] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Heritage</p>
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-4">Origins</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Goju Ryu traced its roots to the late 19th century, when an Okinawan islander named Kanryo Higaonna travelled to Southern China and trained under a White Crane master named Ryu Ryu Ko. On his return, he taught his art and one of his students began to emerge as exceptional. His name was <strong className="text-white">Chojun Miyagi</strong>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  After Higaonna&apos;s death in 1915, Miyagi combined his knowledge of Chinese systems with his own native Okinawan fighting arts (Tode) to create Goju Ryu Karate. On his death in 1953, Ei&apos;ichi Miyazato took over as the head of the Jundokan and the Okinawan Goju Ryu system.
                </p>
              </div>

              <div>
                <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-4">Key Characteristics</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Close-Quarter Combat", body: "Goju Ryu is designed for fighting at close range, including grabs, throws and joint manipulation alongside striking." },
                    { title: "Hard & Soft Blend", body: "Closed-fist hard linear attacks combined with open-hand circular deflections create a uniquely versatile system." },
                    { title: "Ground & Grappling", body: "Unlike many karate styles, Goju addresses fighting on the ground, reflecting its complete approach to combat." },
                    { title: "Okinawan Tradition", body: "Practised in its authentic Okinawan form, not the sport or performance karate that became popular in Japan and the West." },
                  ].map((item) => (
                    <div key={item.title} className="p-5 bg-[#141311] border border-white/5 rounded-sm">
                      <h4 className="font-['Bebas_Neue'] text-lg tracking-wide text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "340/366" }}>
                <SafeImage src="/images/Gavheadlock4.jpg" alt="Close-quarter grappling, a hallmark of Goju Ryu" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider">Close-Quarter Combat</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-0.5">The Goju Ryu Way</p>
                </div>
              </div>
              <div className="p-6 bg-[#141311] border border-[#c9a96e]/15 rounded-sm">
                <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-[#c9a96e] mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Name", value: "Goju Ryu (剛柔流)" },
                    { label: "Meaning", value: "Hard-Soft Style" },
                    { label: "Origin", value: "Okinawa, Japan" },
                    { label: "Founded by", value: "Chojun Miyagi" },
                    { label: "Roots", value: "Naha-te + Chinese White Crane" },
                    { label: "Focus", value: "Close-quarter combat" },
                    { label: "At DKK", value: "Combat-orientated" },
                  ].map((fact) => (
                    <li key={fact.label} className="flex justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-500 text-sm">{fact.label}</span>
                      <span className="text-white text-sm font-medium text-right">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#a8201a]/10 border border-[#a8201a]/30 rounded-sm">
                <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide mb-2">Experience it yourself</p>
                <p className="text-gray-400 text-sm mb-4">The best way to understand Goju Ryu is to train it. Monday & Wednesday, 6–8pm, 309 Regent Street, London.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                  Contact Us <ChevronRight size={16} />
                </Link>
              </div>

              <div className="p-6 bg-[#141311] border border-white/5 rounded-sm">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Related Pages</p>
                <ul className="space-y-2">
                  {[
                    { href: "/history", label: "Karate History" },
                    { href: "/shihan", label: "Shihan Profile" },
                    { href: "/training", label: "Training Info" },
                    { href: "/books", label: "Books on Goju Ryu" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-300 hover:text-[#a8201a] text-sm transition-colors flex items-center gap-1">
                        <ChevronRight size={14} />{l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Poems of the Fist */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.4em] mb-4">
              <span className="w-6 h-px bg-[#c9a96e]" />
              The Ancient Precepts
              <span className="w-6 h-px bg-[#c9a96e]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-none mb-4">Eight Poems of the Fist</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Taken from the ancient <strong className="text-white">Bubishi</strong> text, Chojun Miyagi chose the name <em>Goju-Ryu</em> from the third precept shown below.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-14">
            {[
              "The mind is one with heaven and earth.",
              "The circulatory rhythm of the body is similar to the cycle of the sun and the moon.",
              "The way of inhaling and exhaling is hardness and softness.",
              "Act in accordance with time and change.",
              "Techniques will occur in the absence of conscious thought.",
              "The feet must advance and retreat, separate and meet.",
              "The eyes do not miss even the slightest change.",
              "The ears listen well in all directions.",
            ].map((body, i) => (
              <li key={i} className="p-5 sm:p-6 rounded-sm border bg-[#141311] border-white/5 flex gap-4">
                <span className="font-['Bebas_Neue'] text-3xl tracking-wide leading-none flex-shrink-0 text-gray-500">{i + 1}</span>
                <p className="leading-relaxed text-gray-300">{body}</p>
              </li>
            ))}
          </ol>

          <div className="max-w-3xl mx-auto text-center border-t border-[#c9a96e]/20 pt-10">
            <p className="text-gray-400 leading-relaxed mb-3">
              Goju is therefore a contrasting term where <strong className="text-white">Go</strong> means &apos;hard&apos; and <strong className="text-white">Ju</strong> means &apos;soft&apos; - the same Ju as used in <em>Ju-do</em> and <em>Ju-jitsu</em>.
            </p>
            <p className="text-[#c9a96e] font-['Bebas_Neue'] text-2xl sm:text-3xl tracking-[0.1em] leading-tight">
              Goju Ryu Karate - the hard-soft school of the empty hand.
            </p>
          </div>
        </div>
      </section>

      {/* The Badge */}
      <section className="py-20 lg:py-28 bg-[#12110f] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.4em] mb-4">
              <span className="w-6 h-px bg-[#c9a96e]" />
              Symbol of Daigaku Karate Kai
              <span className="w-6 h-px bg-[#c9a96e]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-none">The Badge</h2>
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-[240px] sm:w-[280px] aspect-square bg-[#0f0e0c] rounded-full ring-1 ring-[#c9a96e]/20 shadow-[0_0_60px_-10px_rgba(201,169,110,0.3)] overflow-hidden">
                <SafeImage src="/images/DKKCircularLogo.jpg" alt="The DKK Badge" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Badge is the symbol of <strong className="text-white">Daigaku Karate Kai</strong> and is a source of honour and pride for those who earn the right to wear it. <strong className="text-white">It cannot be bought.</strong> Awarded at Green Belt, it signifies that the association is happy to send the wearer into any dojo in the world.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#141311] border border-white/5 rounded-sm">
                  <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Outer Ring</p>
                  <p className="text-white text-sm leading-relaxed">Represents the Japanese island of <strong>Okinawa</strong>, where Karate and Goju Ryu were initially formulated.</p>
                </div>
                <div className="p-4 bg-[#141311] border border-white/5 rounded-sm">
                  <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Inner Symbol</p>
                  <p className="text-white text-sm leading-relaxed">The emblem of <strong>Hachiman</strong>, the Japanese God of War, extended to represent the <strong>White Crane</strong> - the Chinese Kung Fu root of Goju Ryu.</p>
                </div>
                <div className="p-4 bg-[#141311] border border-white/5 rounded-sm">
                  <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Black &amp; White</p>
                  <p className="text-white text-sm leading-relaxed">Represents <strong>hard / soft</strong>, <strong>yin / yang</strong>, and the dual nature of the martial arts.</p>
                </div>
                <div className="p-4 bg-[#1a0d0c] border border-[#a8201a]/40 rounded-sm">
                  <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">At Shodan</p>
                  <p className="text-white text-sm leading-relaxed">Black Belts attain the right to have the badge <strong>tattooed</strong> - permanent recognition of their dedication and inclusion in the brotherhood of DKK.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-gold" />
      <section className="py-14 bg-[#12110f] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a96e] text-xs font-bold uppercase tracking-[0.3em] mb-3">Lineage</p>
          <h2 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wide leading-none text-white mb-3">From Okinawa to London</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">DKK&apos;s line runs through the Jundokan in Okinawa, the early UK Goju pioneers, and a small group of teachers who still shape the way we train today.</p>
          <Link href="/history#lineage" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
            View Our Full Lineage <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
