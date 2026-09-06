import Link from "next/link";
import { ChevronRight, Clock, MapPin, CheckCircle, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import TestimonialRotator from "@/components/TestimonialRotator";
import Reveal from "@/components/ui/Reveal";
import StatStrip, { StatCell } from "@/components/ui/StatStrip";
import DanGrade from "@/components/DanGrade";
import VideoHeroBackground from "@/components/VideoHeroBackground";
import VideoShowcase from "@/components/VideoShowcase";
import KineticHeadline from "@/components/KineticHeadline";
import MagneticButton from "@/components/MagneticButton";
import CTABand from "@/components/ui/CTABand";
import TrackedOutbound from "@/components/TrackedOutbound";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* svh: stable height on mobile, vh jumps when the iOS/Android URL bar collapses */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-black" />
        <VideoHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-24 sm:pb-16">
          <p className="inline-flex items-center gap-2 text-brand text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-5 sm:mb-6">
            <span className="w-6 h-px bg-brand" />
            Combat Okinawan Goju Ryu · Central London · Since 1990
          </p>

          <KineticHeadline
            label="Daigaku Karate Kai"
            className="font-display text-[clamp(3.25rem,13vw,10rem)] text-white leading-[0.9] tracking-wide mb-6 sm:mb-8"
            lines={[
              "Daigaku",
              <span key="k" className="text-white">Karate</span>,
              <span key="ka" className="text-brand">Kai</span>,
            ]}
          />

          <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-sm sm:max-w-lg mb-8 sm:mb-10 font-light">
            One of the strongest karate clubs in the UK. Combat-orientated training for adults of all levels, every Monday and Wednesday in central London.
          </p>

          <div className="mb-10 sm:mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact" className="px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-hover transition-colors duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
                Start Training <ChevronRight size={18} />
              </MagneticButton>
              <MagneticButton href="/training" className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-brand hover:bg-brand/10 transition-colors duration-200 inline-flex items-center justify-center gap-2 rounded-sm">
                Class Times <Clock size={16} />
              </MagneticButton>
            </div>
            <TrackedOutbound
              href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20and%20try%20a%20class%20at%20DKK%20London."
              track="/go/whatsapp"
              className="mt-4 inline-block text-gray-400 text-sm hover:text-whatsapp transition-colors"
            >
              or message us on WhatsApp
            </TrackedOutbound>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
            {[
              { icon: Clock, text: "Mon & Wed  ·  6:00 – 8:00pm" },
              { icon: MapPin, text: "309 Regent Street, London W1B 2HW" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-400 text-sm">
                <item.icon size={14} className="text-brand flex-shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-night to-transparent" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <StatStrip>
        <StatCell value="Since 1990" label="Oldest Club at Westminster" />
        <StatCell
          value="Gavin Mulholland"
          label={<><DanGrade text="7th Dan" /> Shihan</>}
        />
        <StatCell value="Goju Ryu" label={<>Okinawan &middot; Combat-Orientated</>} />
        <StatCell value={<>Mon &amp; Wed</>} label="6 - 8pm, Central London" />
      </StatStrip>

      {/* ── YOUR FIRST CLASS - WARM LIGHT SECTION ────────────── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="inline-flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.35em] mb-4">
                <span className="w-6 h-px bg-brand" />
                New to DKK
                <span className="w-6 h-px bg-brand" />
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink tracking-wide leading-none mb-4">Your First Class</h2>
              <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
                No uniform needed. Just turn up, or get in touch first if you prefer. Here&apos;s what to expect.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Arrive", desc: "Come to 309 Regent Street, London W1B 2HW. Monday or Wednesday at 6pm. Wear comfortable training clothes." },
                { step: "02", title: "Warm Up", desc: "We start with a thorough warm-up: running, stretching, conditioning exercises. Beginners ease in alongside experienced students." },
                { step: "03", title: "Train", desc: "Pad work, partner drills, kata, grappling. A full session. Beginners are paired with experienced students." },
                { step: "04", title: "Decide", desc: "No pressure. Come back next session, or take time to think. When you're ready, we'll be here." },
              ].map((item) => (
                <div key={item.step} className="relative p-7 bg-white border border-sand rounded-sm group hover:shadow-lg transition-shadow duration-300">
                  <span className="font-display text-3xl sm:text-5xl text-brand/15 absolute top-4 right-5 leading-none">{item.step}</span>
                  <h3 className="font-display text-2xl text-ink tracking-wide mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-hover transition-all duration-200 rounded-sm">
                Come and Train <ChevronRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeading eyebrow="About the Club" title="Real Karate.&#10;No Compromises." />
                <p className="text-gray-400 leading-relaxed mb-5">
                  The London branch of Daigaku Karate Kai was started by Shihan Gavin Mulholland (7th Dan) in the early 1990s and is now one of the strongest karate clubs in the UK.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  We practise Okinawan Goju Ryu, a practical karate style which places heavy emphasis on close-quarter effectiveness. Training is combat-orientated rather than for sport or competition fighting, which require different skills and mindset.
                </p>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Classes are open to all adults. We welcome beginners and practitioners from other styles at every level. The club has a good mix of men and women training regularly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/goju-ryu" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                    About Goju Ryu <ChevronRight size={16} />
                  </Link>
                  <Link href="/training" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors">
                    Training Info <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden bg-card ring-1 ring-brand/20" style={{ aspectRatio: "4/5" }}>
                <SafeImage src="/images/Shihan/shihan-portrait-black.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-2xl text-white tracking-widest">Shihan Gavin Mulholland</p>
                  <p className="text-gold text-xs uppercase tracking-[0.2em] mt-0.5">7<sup className="text-[0.65em] normal-case">th</sup> Dan · Founder · Combat Hall of Fame</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PHOTO STRIP - VISUAL BREAK ──────────────────────── */}
      <section className="relative sm:h-80 lg:h-96 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-full">
          <div className="relative aspect-[3/2] sm:aspect-auto sm:h-full overflow-hidden">
            <SafeImage src="/images/Training/kumite-high-kick.jpg" alt="Kumite in the dojo" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-[3/2] sm:aspect-auto sm:h-full overflow-hidden">
            <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="Outdoor mass kata at camp" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-[3/2] sm:aspect-auto sm:h-full overflow-hidden">
            <SafeImage src="/images/Shihan/shihan-kuwa-black.jpg" alt="Shihan with shillelagh" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-night via-transparent to-night opacity-30 pointer-events-none" />
      </section>

      {/* ── VIDEO SHOWCASE ───────────────────────────────────── */}
      <VideoShowcase />

      {/* ── WHY TRAIN: numbered editorial list beside one strong image ── */}
      <div className="section-divider" />
      <section className="py-20 sm:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <SectionHeading eyebrow="Why DKK" title="What Sets Us Apart" />
                <ol className="mt-2">
                  {[
                    { n: "01", title: "Combat Orientated", body: "We train for real-world effectiveness, not trophies. Close-quarter techniques rooted in genuine martial necessity: striking, grappling, throwing, ground work." },
                    { n: "02", title: "Authentic Goju Ryu", body: "Okinawan Goju Ryu in its true form: kata, kumite, ne-waza and weapons. Not sport karate." },
                    { n: "03", title: "Proven Record", body: "DKK Fighters have competed in Cage Rage, Bellator, BAMMA and the UFC. 16 wins from the first 20 cage fights, a British Heavyweight title and a World Title fight." },
                  ].map((item, i) => (
                    <li key={item.n} className={`flex gap-6 py-7 ${i > 0 ? "border-t border-white/5" : ""}`}>
                      <span className="font-display text-5xl sm:text-6xl text-brand/25 leading-none flex-shrink-0 w-16" aria-hidden="true">{item.n}</span>
                      <div>
                        <h3 className="font-display text-2xl tracking-wide text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="relative rounded-sm overflow-hidden hidden lg:block" style={{ aspectRatio: "4/5" }}>
                <SafeImage src="/images/Training/class-kata-aerial.JPG" alt="A DKK class drilling pad work in the Regent Street main hall" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-black/0" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/80 text-[11px] uppercase tracking-[0.25em]">Pad Work · Regent Street</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <TestimonialRotator />

      {/* ── TRAINING TIMES ───────────────────────────────────── */}
      <div className="section-divider" />
      <section className="py-20 sm:py-24 lg:py-32 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Schedule" title="When & Where" />
              <div className="space-y-4">
                {[{ day: "Monday", time: "6:00pm – 8:00pm" }, { day: "Wednesday", time: "6:00pm – 8:00pm" }].map((s) => (
                  <div key={s.day} className="flex items-center gap-5 p-5 bg-card border-l-2 border-brand rounded-sm">
                    <div>
                      <p className="font-display text-3xl text-white tracking-wide">{s.day}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-1.5 mt-0.5"><Clock size={13} className="text-brand" />{s.time}</p>
                    </div>
                  </div>
                ))}
                <div className="p-5 bg-card border-l-2 border-gold/40 rounded-sm">
                  <p className="font-display text-xl text-white tracking-wide flex items-center gap-2"><MapPin size={16} className="text-gold" />University of Westminster</p>
                  <p className="text-gray-400 text-sm mt-1">Main Hall · 309 Regent Street · London W1B 2HW</p>
                  <p className="text-gray-400 text-xs mt-1">No student card required. Classes run during all University breaks.</p>
                </div>
              </div>
              <Link href="/training" className="inline-flex items-center gap-2 mt-6 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Full Training Info <ChevronRight size={16} />
              </Link>
            </div>

            {/* Image instead of plain card for visual variety */}
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <SafeImage src="/images/Club/university-grading-group-2024.jpg" alt="DKK Karate Club members with their grading certificates at the University of Westminster" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-3xl text-white tracking-wide mb-2">New Students Welcome</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "All experience levels welcome",
                    "Practitioners from other styles welcome",
                    "Men and women train together",
                    "No uniform required for first visit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ── WESTMINSTER TEASER ──────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-coal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Award className="text-gold" size={20} />
              </div>
              <div>
                <p className="text-gold text-[10px] font-bold uppercase tracking-[0.35em] mb-1">University of Westminster</p>
                <p className="text-white font-display text-2xl sm:text-3xl tracking-wide leading-none">The Oldest Sports Club at Westminster</p>
                <p className="text-gray-400 text-sm mt-1">Trained continuously since 1990, under the same instructor.</p>
              </div>
            </div>
            <Link
              href="/university"
              className="flex-shrink-0 px-6 py-3 border border-gold/40 text-gold font-bold uppercase tracking-wider text-xs hover:bg-gold/10 hover:border-gold transition-colors rounded-sm inline-flex items-center gap-2"
            >
              About the Partnership <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Come and train with us"
        sub="No uniform needed. Just turn up."
      />
    </>
  );
}
