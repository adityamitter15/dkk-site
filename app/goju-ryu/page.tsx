import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import LineageChain from "@/components/LineageChain";

export const metadata: Metadata = {
  title: "Goju Ryu",
  description: "Goju Ryu — hard and soft style. An Okinawan karate system emphasising close-quarter combat, breathing, and practical self-defence. Learn about its origins and philosophy.",
};

export default function GojuRyuPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            The Style
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-2">Goju Ryu</h1>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#c0392b]/50 tracking-wide leading-none mb-6">剛柔流</h2>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionHeading eyebrow="Hard & Soft" title="What is Goju Ryu?" />
                <p className="text-gray-400 leading-relaxed mb-5">
                  The name Goju is derived from two contrasting terms: <strong className="text-white">Go</strong> meaning hard, and <strong className="text-white">Ju</strong> meaning soft. Goju differs from most other karate systems in its proximity of fighting. Great emphasis is placed on striking and grappling at close quarters — both standing and on the ground — making it an excellent style for reality-based self-defence.
                </p>
              </div>

              <div>
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
                    { title: "Close-Quarter Combat", body: "Goju Ryu is designed for fighting at close range — including grabs, throws and joint manipulation alongside striking." },
                    { title: "Hard & Soft Blend", body: "Closed-fist hard linear attacks combined with open-hand circular deflections create a uniquely versatile system." },
                    { title: "Breathing (Ibuki)", body: "Powerful breathing techniques are central to Goju Ryu, developing internal strength and focus." },
                    { title: "Sanchin Kata", body: "The foundational kata — a moving exercise developing posture, breath control and mental concentration." },
                    { title: "Ground & Grappling", body: "Unlike many karate styles, Goju addresses fighting on the ground — reflecting its complete approach to combat." },
                    { title: "Okinawan Tradition", body: "Practised in its authentic Okinawan form — not the sport or performance karate that became popular in Japan and the West." },
                  ].map((item) => (
                    <div key={item.title} className="p-5 bg-[#111] border border-white/5 rounded-sm">
                      <h4 className="font-['Bebas_Neue'] text-lg tracking-wide text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="relative rounded-sm overflow-hidden bg-[#111]" style={{ aspectRatio: "340/366" }}>
                <SafeImage src="/images/Gavheadlock4.jpg" alt="Close-quarter grappling — a hallmark of Goju Ryu" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider">Close-Quarter Combat</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-0.5">The Goju Ryu Way</p>
                </div>
              </div>
              <div className="p-6 bg-[#111] border border-white/5 rounded-sm">
                <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-white mb-4">Quick Facts</h3>
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

              <div className="p-6 bg-[#c0392b]/10 border border-[#c0392b]/30 rounded-sm">
                <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide mb-2">Experience it yourself</p>
                <p className="text-gray-400 text-sm mb-4">The best way to understand Goju Ryu is to train it. Monday & Wednesday, 6–8pm, 309 Regent Street, London.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                  Contact Us <ChevronRight size={16} />
                </Link>
              </div>

              <div className="p-6 bg-[#111] border border-white/5 rounded-sm">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Related Pages</p>
                <ul className="space-y-2">
                  {[
                    { href: "/history", label: "Karate History" },
                    { href: "/shihan", label: "Shihan Profile" },
                    { href: "/training", label: "Training Info" },
                    { href: "/books", label: "Books on Goju Ryu" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-300 hover:text-[#c0392b] text-sm transition-colors flex items-center gap-1">
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

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Lineage" title="From Okinawa to London" centered />
          <LineageChain />
        </div>
      </section>
    </>
  );
}
