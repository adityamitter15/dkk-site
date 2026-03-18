import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { ChevronRight, Trophy } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";

export const metadata: Metadata = {
  title: "DKK Fighters",
  description: "DKK Fighters — 16 wins from 20 cage fights, a World Title, and one member who reached the UFC. The competitive record of DKK London.",
};

export default function FightersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Competition & Combat
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">DKK Fighters</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#c0392b] py-8">
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

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading eyebrow="DKK London" title="Tested Under Pressure" />
              <p className="text-gray-400 leading-relaxed mb-5">
                While the club&apos;s primary focus is on combat, not competition, there is genuine benefit to be had from testing yourself against an aggressive, non-cooperative opponent — and the MMA scene offers just that challenge.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                There is never any pressure on students to compete. But several have chosen to test themselves in this extreme environment. For a karate club, the record is remarkable: the first 20 fights yielded <strong className="text-white">16 wins</strong>, one finalist in the reality TV show <em>Fighting Hurts</em>, and one <strong className="text-white">World Title</strong>. One member even made it as far as the <strong className="text-white">UFC</strong>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Members of DKK Fighters have appeared regularly in the UK&apos;s premier MMA events including Cage Rage, Ultimate Challenge and BAMMA.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Train With Us <ChevronRight size={16} />
              </Link>
            </div>

            <div>
              <div className="relative rounded-sm overflow-hidden aspect-video bg-[#111] mb-6">
                <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">DKK Fighters</p>
                  <p className="text-[#c0392b] text-xs uppercase tracking-widest">Cage Rage · BAMMA · UFC</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Trophy, title: "World Title", body: "One of our members captured a World Title in MMA competition." },
                  { icon: Trophy, title: "UFC", body: "One student reached the Ultimate Fighting Championship — the pinnacle of MMA." },
                  { icon: Trophy, title: "Reality TV", body: "A finalist in the TV show Fighting Hurts, showcasing DKK training under extreme pressure." },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-[#111] border border-white/5 rounded-sm">
                    <item.icon className="text-[#c0392b] mb-2" size={18} />
                    <p className="text-white text-xs font-semibold mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#c0392b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-tight">
            &ldquo;There is never any pressure to compete. But for those who choose to test themselves, the training prepares them well.&rdquo;
          </p>
          <p className="mt-4 text-white/70 text-sm uppercase tracking-widest">DKK London</p>
        </div>
      </section>
    </>
  );
}
