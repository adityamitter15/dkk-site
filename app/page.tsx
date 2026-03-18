import Link from "next/link";
import { Shield, Users, Target, ChevronRight, Award, Swords, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";
import TestimonialRotator from "@/components/TestimonialRotator";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/GavPunch.jpg" alt="" fill className="object-cover object-center opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* Left red accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-6">
            <span className="w-6 h-px bg-[#c0392b]" />
            London · Est. Late 1980s
          </p>

          <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,14vw,10rem)] text-white leading-[0.9] tracking-wide mb-8">
            Daigaku<br />
            <span className="text-white">Karate</span><br />
            <span className="text-[#c0392b]">Kai</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-lg mb-10 font-light">
            Okinawan Goju Ryu — one of the strongest karate clubs in the UK. Combat-orientated training for adults of all levels, every Monday and Wednesday.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact" className="px-8 py-4 bg-[#c0392b] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e74c3c] transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
              Start Training <ChevronRight size={18} />
            </Link>
            <Link href="/training" className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#c0392b] hover:bg-[#c0392b]/10 transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
              Class Times <Clock size={16} />
            </Link>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
            {[
              { icon: Clock, text: "Mon & Wed  ·  6:00 – 8:00pm" },
              { icon: MapPin, text: "309 Regent Street, London W1B 2HW" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-400 text-sm">
                <item.icon size={14} className="text-[#c0392b] flex-shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[#c0392b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { value: "Est. 1980s", label: "Founded in London" },
              { value: "7th Dan", label: "Shihan Gavin Mulholland" },
              { value: "Goju Ryu", label: "Okinawan Style" },
              { value: "16 / 20", label: "Cage Fight Wins" },
            ].map((stat) => (
              <CountUpStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeading eyebrow="About the Club" title="Real Karate.&#10;No Compromises." />
                <p className="text-gray-400 leading-relaxed mb-5">
                  The London branch of Daigaku Karate Kai was started by Shihan Gavin Mulholland (7th Dan) in the late 1980s and is now one of the strongest karate clubs in the UK.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  We practise Okinawan Goju Ryu — a practical karate style which places heavy emphasis on close-quarter effectiveness. Training is combat-orientated rather than for sport or competition fighting, which require different skills and mindset.
                </p>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Classes are open to all adults. We welcome beginners and practitioners from other styles at every level. The club has a good mix of men and women training regularly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                    About Goju Ryu <ChevronRight size={16} />
                  </Link>
                  <Link href="/training" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
                    Training Info <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden bg-[#111] ring-1 ring-[#c0392b]/20" style={{ aspectRatio: "3/4" }}>
                <SafeImage src="/images/GavPortrait.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-['Bebas_Neue'] text-2xl text-white tracking-widest">Shihan Gavin Mulholland</p>
                  <p className="text-[#c0392b] text-xs uppercase tracking-[0.2em] mt-0.5">7th Dan · Founder · Combat Hall of Fame</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY TRAIN ────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why DKK" title="What Sets Us Apart" centered />
          <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { icon: Swords, title: "Combat Orientated", body: "We train for real-world effectiveness, not trophies. Our approach prioritises close-quarter techniques rooted in genuine martial necessity." },
              { icon: Award, title: "Expert Instruction", body: "Train under Shihan Gavin Mulholland, 7th Dan — Combat Hall of Fame inductee, published author, and one of the UK's most respected Goju Ryu practitioners." },
              { icon: Users, title: "Inclusive Community", body: "Adults of all backgrounds welcome. Beginners and black belts train side by side. The club has a great mix of men and women at every level." },
              { icon: Shield, title: "Authentic Goju Ryu", body: "Okinawan Goju Ryu in its true form — hard and soft techniques, Sanchin breathing, kata, bunkai and kumite." },
              { icon: Target, title: "Proven Record", body: "DKK Fighters have competed in Cage Rage, BAMMA and the UFC — 16 wins from the first 20 cage fights, plus a World Title." },
              { icon: Clock, title: "Accessible Location", body: "Monday & Wednesday evenings, 6–8pm, at the University of Westminster, 309 Regent Street — central London. No student card required." },
            ].map((card) => (
              <div key={card.title} className="p-7 bg-[#111] border border-white/5 hover:border-[#c0392b]/40 hover:bg-[#c0392b]/5 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(192,57,43,0.15)] transition-all duration-300 rounded-sm group">
                <div className="w-10 h-10 rounded-sm bg-[#c0392b]/10 border border-[#c0392b]/20 flex items-center justify-center mb-5 group-hover:bg-[#c0392b]/20 transition-colors">
                  <card.icon className="text-[#c0392b]" size={20} />
                </div>
                <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <TestimonialRotator />

      {/* ── FULL-WIDTH QUOTE ─────────────────────────────────── */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Chishi2.jpg')] bg-cover bg-top opacity-10" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[0.3em] mb-6">Philosophy</p>
          <p className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-wide">
            &ldquo;Training is combat-orientated rather than for sport or competition fighting, which require a different skillset and mindset entirely.&rdquo;
          </p>
          <p className="mt-8 text-gray-500 text-sm uppercase tracking-widest">Daigaku Karate Kai London</p>
        </div>
      </section>

      {/* ── TRAINING TIMES ───────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Schedule" title="When & Where" />
              <div className="space-y-4">
                {[{ day: "Monday", time: "6:00pm – 8:00pm" }, { day: "Wednesday", time: "6:00pm – 8:00pm" }].map((s) => (
                  <div key={s.day} className="flex items-center gap-5 p-5 bg-[#111] border-l-2 border-[#c0392b] rounded-sm">
                    <div>
                      <p className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">{s.day}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-1.5 mt-0.5"><Clock size={13} className="text-[#c0392b]" />{s.time}</p>
                    </div>
                  </div>
                ))}
                <div className="p-5 bg-[#111] border-l-2 border-white/10 rounded-sm">
                  <p className="font-['Bebas_Neue'] text-xl text-white tracking-wide flex items-center gap-2"><MapPin size={16} className="text-[#c0392b]" />University of Westminster</p>
                  <p className="text-gray-400 text-sm mt-1">Main Hall · 309 Regent Street · London W1B 2HW</p>
                  <p className="text-gray-600 text-xs mt-1">No student card required. Classes run during all University breaks.</p>
                </div>
              </div>
              <Link href="/training" className="inline-flex items-center gap-2 mt-6 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Full Training Info <ChevronRight size={16} />
              </Link>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-sm p-8">
              <p className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-2">New Students</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Whether you&apos;ve never trained before or hold a black belt in another style — just turn up, or contact us first. There is no registration fee to come and watch or try your first class.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Adults only — no children&apos;s classes",
                  "All experience levels welcome",
                  "Men and women train together",
                  "No uniform required for first visit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] mt-1.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c0392b] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e74c3c] transition-colors rounded-sm">
                Get In Touch <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WUSU AFFILIATION ─────────────────────────────────── */}
      <section className="py-12 bg-[#0d0d0d] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs uppercase tracking-widest">Official Affiliation</p>
          <SafeImage src="/images/wusu.png" alt="Westminster Students' Union" width={140} height={56} className="object-contain opacity-50 hover:opacity-80 transition-opacity" />
          <p className="text-gray-500 text-xs uppercase tracking-widest">Westminster Students&apos; Union</p>
        </div>
      </section>
    </>
  );
}
