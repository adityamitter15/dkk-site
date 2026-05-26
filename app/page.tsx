import Link from "next/link";
import { Shield, Target, ChevronRight, Swords, Clock, MapPin, CheckCircle, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import CountUpStat from "@/components/CountUpStat";
import TestimonialRotator from "@/components/TestimonialRotator";
import ScrollReveal from "@/components/ScrollReveal";
import VideoHeroBackground from "@/components/VideoHeroBackground";
import VideoShowcase from "@/components/VideoShowcase";
import KineticHeadline from "@/components/KineticHeadline";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-black" />
        <VideoHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-12 sm:pt-24 sm:pb-16">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-5 sm:mb-6">
            <span className="w-6 h-px bg-[#a8201a]" />
            Westminster SU Club of the Year · 25/26
          </p>

          <KineticHeadline
            className="font-['Bebas_Neue'] text-[clamp(3.25rem,13vw,10rem)] text-white leading-[0.9] tracking-wide mb-6 sm:mb-8"
            lines={[
              "Daigaku",
              <span key="k" className="text-white">Karate</span>,
              <span key="ka" className="text-[#a8201a]">Kai</span>,
            ]}
          />

          <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-lg mb-8 sm:mb-10 font-light">
            One of the strongest karate clubs in the UK. Combat-orientated training for adults of all levels, every Monday and Wednesday in central London.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16">
            <MagneticButton href="/contact" className="px-8 py-4 bg-[#a8201a] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#c62828] transition-colors duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
              Start Training <ChevronRight size={18} />
            </MagneticButton>
            <MagneticButton href="/training" className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#a8201a] hover:bg-[#a8201a]/10 transition-colors duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
              Class Times <Clock size={16} />
            </MagneticButton>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
            {[
              { icon: Clock, text: "Mon & Wed  ·  6:00 – 8:00pm" },
              { icon: MapPin, text: "309 Regent Street, London W1B 2HW" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-400 text-sm">
                <item.icon size={14} className="text-[#a8201a] flex-shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0e0c] to-transparent" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { value: "Since 1990", label: "Oldest Club at Westminster" },
              { value: "Club of the Year", label: "Westminster SU · 25/26" },
              { value: "7th Dan", label: "Shihan Gavin Mulholland" },
              { value: "16 / 20", label: "Cage Fight Wins" },
            ].map((stat) => (
              <CountUpStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR FIRST CLASS - WARM LIGHT SECTION ────────────── */}
      <section className="py-24 lg:py-32 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                <span className="w-6 h-px bg-[#a8201a]" />
                New to DKK
                <span className="w-6 h-px bg-[#a8201a]" />
              </p>
              <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-[#1a1a18] tracking-wide leading-none mb-4">Your First Class Is Free</h2>
              <p className="text-[#4a4a42] text-lg max-w-2xl mx-auto leading-relaxed">
                No registration fee. No uniform needed. Just turn up, or get in touch first if you prefer. Here&apos;s what to expect.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Arrive", desc: "Come to 309 Regent Street, London W1B 2HW. Monday or Wednesday at 6pm. Wear comfortable training clothes." },
                { step: "02", title: "Warm Up", desc: "We start with a thorough warm-up: running, stretching, conditioning exercises. You go at your own pace." },
                { step: "03", title: "Train", desc: "Pad work, partner drills, kata, grappling. A full session. Beginners are paired with experienced students." },
                { step: "04", title: "Decide", desc: "No pressure. Come back next session, or take time to think. When you're ready, we'll be here." },
              ].map((item) => (
                <div key={item.step} className="relative p-7 bg-white border border-[#e8e3d9] rounded-sm group hover:shadow-lg transition-shadow duration-300">
                  <span className="font-['Bebas_Neue'] text-5xl text-[#a8201a]/15 absolute top-4 right-5 leading-none">{item.step}</span>
                  <h3 className="font-['Bebas_Neue'] text-2xl text-[#1a1a18] tracking-wide mb-2">{item.title}</h3>
                  <p className="text-[#5a5a52] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#a8201a] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#c62828] transition-all duration-200 rounded-sm">
                Come and Train <ChevronRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeading eyebrow="About the Club" title="Real Karate.&#10;No Compromises." />
                <p className="text-gray-400 leading-relaxed mb-5">
                  The London branch of Daigaku Karate Kai was started by Shihan Gavin Mulholland (7th Dan) in the late 1980s and is now one of the strongest karate clubs in the UK.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  We practise Okinawan Goju Ryu, a practical karate style which places heavy emphasis on close-quarter effectiveness. Training is combat-orientated rather than for sport or competition fighting, which require different skills and mindset.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Classes are open to all adults. We welcome beginners and practitioners from other styles at every level. The club has a good mix of men and women training regularly.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-10">
                  {[
                    { value: "Since 1990", label: "At Westminster" },
                    { value: "7th Dan", label: "Shihan Mulholland" },
                    { value: "16/20", label: "Cage Fight Wins" },
                  ].map((s) => (
                    <div key={s.label} className="p-4 bg-[#141311] border border-white/5 rounded-sm">
                      <p className="font-['Bebas_Neue'] text-xl text-white tracking-wide leading-none">{s.value}</p>
                      <p className="text-[#a8201a] text-[10px] uppercase tracking-widest mt-2">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                    About Goju Ryu <ChevronRight size={16} />
                  </Link>
                  <Link href="/training" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
                    Training Info <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden bg-[#141311] ring-1 ring-[#a8201a]/20" style={{ aspectRatio: "4/5" }}>
                <SafeImage src="/images/Shihan/shihan-portrait-black.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-['Bebas_Neue'] text-2xl text-white tracking-widest">Shihan Gavin Mulholland</p>
                  <p className="text-[#c9a96e] text-xs uppercase tracking-[0.2em] mt-0.5">7th Dan · Founder · Combat Hall of Fame</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHOTO STRIP - VISUAL BREAK ──────────────────────── */}
      <section className="relative h-80 sm:h-80 lg:h-96 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
          <div className="relative overflow-hidden">
            <SafeImage src="/images/Training/kumite-high-kick.jpg" alt="Kumite in the dojo" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative overflow-hidden">
            <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="Outdoor mass kata at camp" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative overflow-hidden">
            <SafeImage src="/images/Shihan/shihan-kuwa-black.jpg" alt="Shihan with traditional kuwa" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#0f0e0c] opacity-30 pointer-events-none" />
      </section>

      {/* ── VIDEO SHOWCASE ───────────────────────────────────── */}
      <VideoShowcase />

      {/* ── WHY TRAIN ────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 bg-[#12110f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why DKK" title="What Sets Us Apart" centered />
          <ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {[
              { icon: Swords, title: "Combat Orientated", body: "We train for real-world effectiveness, not trophies. Close-quarter techniques rooted in genuine martial necessity: striking, grappling, throwing, ground work." },
              { icon: Shield, title: "Authentic Goju Ryu", body: "Okinawan Goju Ryu in its true form: hard and soft techniques, Sanchin breathing, kata, bunkai and kumite. Not sport karate." },
              { icon: Target, title: "Proven Record", body: "DKK Fighters have competed in Cage Rage, BAMMA and the UFC. 16 wins from the first 20 cage fights, plus a World Title." },
            ].map((card) => (
              <div key={card.title} className="p-7 bg-[#141311] border border-white/5 hover:border-[#a8201a]/40 hover:bg-[#a8201a]/5 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-4px_rgba(168,32,26,0.15)] transition-all duration-300 rounded-sm group">
                <div className="w-10 h-10 rounded-sm bg-[#a8201a]/10 border border-[#a8201a]/20 flex items-center justify-center mb-5 group-hover:bg-[#a8201a]/20 transition-colors">
                  <card.icon className="text-[#a8201a]" size={20} />
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
        <div className="absolute inset-0 bg-[url('/images/Training/class-kata-aerial.JPG')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-[#c9a96e] text-xs font-bold uppercase tracking-[0.3em] mb-6">Philosophy</p>
          <p className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-wide">
            &ldquo;The ultimate aim of karate lies not in victory or defeat, but in the perfection of the character of its participants.&rdquo;
          </p>
          <p className="mt-8 text-[#c9a96e] text-sm uppercase tracking-widest">Gichin Funakoshi</p>
        </div>
      </section>

      {/* ── TRAINING TIMES ───────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-24 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Schedule" title="When & Where" />
              <div className="space-y-4">
                {[{ day: "Monday", time: "6:00pm – 8:00pm" }, { day: "Wednesday", time: "6:00pm – 8:00pm" }].map((s) => (
                  <div key={s.day} className="flex items-center gap-5 p-5 bg-[#141311] border-l-2 border-[#a8201a] rounded-sm">
                    <div>
                      <p className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">{s.day}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-1.5 mt-0.5"><Clock size={13} className="text-[#a8201a]" />{s.time}</p>
                    </div>
                  </div>
                ))}
                <div className="p-5 bg-[#141311] border-l-2 border-[#c9a96e]/40 rounded-sm">
                  <p className="font-['Bebas_Neue'] text-xl text-white tracking-wide flex items-center gap-2"><MapPin size={16} className="text-[#c9a96e]" />University of Westminster</p>
                  <p className="text-gray-400 text-sm mt-1">Main Hall · 309 Regent Street · London W1B 2HW</p>
                  <p className="text-gray-600 text-xs mt-1">No student card required. Classes run during all University breaks.</p>
                </div>
              </div>
              <Link href="/training" className="inline-flex items-center gap-2 mt-6 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Full Training Info <ChevronRight size={16} />
              </Link>
            </div>

            {/* Image instead of plain card for visual variety */}
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <SafeImage src="/images/Club/modern-group-hall.jpg" alt="DKK London class group" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-['Bebas_Neue'] text-3xl text-white tracking-wide mb-2">New Students Welcome</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Your first class is free - no registration fee",
                    "All experience levels welcome",
                    "Men and women train together",
                    "No uniform required for first visit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLUB OF THE YEAR AWARD ─────────────────────────── */}
      <section className="relative py-14 lg:py-20 bg-[#0a0907] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <SafeImage src="/images/Awards/uwsu-trophy-2526.jpg" alt="" fill className="object-cover object-top blur-sm scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0907] via-[#0a0907]/85 to-[#0a0907]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_220px] gap-10 lg:gap-14 items-center">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                  <Award size={14} className="text-[#c9a96e]" />
                  Westminster SU · 25/26
                </p>
                <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-4">
                  Club of the <span className="text-[#c9a96e]">Year</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-5">
                  Awarded by the Westminster Students&apos; Union for the 2025/26 academic year. Recognition from the body that vets every club at the University - voted for and decided on by the student community we&apos;ve trained alongside for over three decades.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <SafeImage src="/images/uwsu.png" alt="University of Westminster Students' Union" width={80} height={32} className="object-contain opacity-70" />
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Official Affiliation · DKK London at the University of Westminster</p>
                </div>
              </div>
              <div className="relative w-full max-w-[220px] mx-auto lg:mx-0" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 rounded-sm overflow-hidden ring-1 ring-[#c9a96e]/25 shadow-[0_0_60px_-10px_rgba(201,169,110,0.25)]">
                  <SafeImage src="/images/Awards/uwsu-trophy-2526.jpg" alt="Club of the Year 25/26 trophy" fill className="object-cover" style={{ objectPosition: "center 25%" }} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#c9a96e]/20 rounded-sm -z-10" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
