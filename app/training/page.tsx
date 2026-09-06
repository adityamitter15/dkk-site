import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, Users, Award, HelpCircle, TreePine, Video, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import SafeImage from "@/components/SafeImage";
import DanGrade from "@/components/DanGrade";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Karate Classes in Central London",
  description: "Adult karate classes in central London, Monday and Wednesday 6-8pm at 309 Regent Street, one minute from Oxford Circus. Okinawan Goju Ryu for all levels. Beginners welcome, no uniform needed to start.",
  alternates: { canonical: "/training" },
  openGraph: { images: ["/og/training.jpg"] },
  twitter: { images: ["/og/training.jpg"] },
};

export default function TrainingPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Training", path: "/training" }]} />
      {/* Hero - split layout with action photo */}
      <PageHero
        variant="full"
        eyebrow="DKK London"
        folio="02 / Training"
        kanji="稽古"
        title="Training"
        lead="Okinawan Goju Ryu. Every Monday and Wednesday evening at 309 Regent Street, London."
        image={{ src: "/images/Training/kumite-high-kick.jpg", position: "center 30%" }}
      />

      {/* Main Dojo - Westminster */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            <div>
              <SectionHeading eyebrow="Main Dojo" title="When We Train" />
              <div className="space-y-3 mb-8">
                {[
                  { day: "Monday", time: "6:00pm - 8:00pm" },
                  { day: "Wednesday", time: "6:00pm - 8:00pm" },
                ].map((session) => (
                  <div key={session.day} className="flex items-center gap-5 p-6 bg-card border-l-2 border-l-brand border-y border-r border-white/5 rounded-sm">
                    <Clock className="text-brand flex-shrink-0" size={22} />
                    <div>
                      <p className="font-display text-3xl text-white tracking-wide leading-none">{session.day}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 items-start p-5 bg-card border border-white/5 rounded-sm hover:border-white/10 transition-colors">
                <MapPin className="text-brand flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-white font-display text-xl tracking-wide">University of Westminster</p>
                  <p className="text-gray-400 text-sm">Main Hall · 309 Regent Street · London W1B 2HW</p>
                  <p className="text-gray-400 text-xs mt-1.5">
                    No student card required. Classes run during all University breaks. Nearest tube is Oxford Circus, one minute away.
                  </p>
                  <p className="text-gray-500 text-xs mt-1.5">
                    First time?{" "}
                    <Link href="/faq" className="link-underline text-gold">
                      What to wear and what to expect
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
              <div className="absolute inset-0 rounded-sm overflow-hidden bg-card">
                <SafeImage src="/images/Club/indoor-class-group.JPG" alt="A full DKK class in the main hall at 309 Regent Street" fill className="object-cover object-center" />
                {/* This photo is pale where the caption sits, so the scrim carries more
                    weight than elsewhere. Zero-alpha stops, not via/to-transparent. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/0" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-brand text-xs uppercase tracking-widest">The Main Hall</p>
                  <p className="text-white font-display text-lg tracking-wide">Every session. Every week.</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-brand/25 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated DKK Classes */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-gold" />
              Affiliated DKK Classes
              <span className="w-6 h-px bg-gold" />
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide leading-none">Train Across the Network</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">DKK instructors run additional classes in Oxfordshire and North London, plus online sessions on Zoom. All members are welcome at any session.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Simon Clinch - Oxfordshire */}
            <div className="bg-card border border-white/10 rounded-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/simon_clinch_studio.jpg" alt="Simon Clinch" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/simon-clinch" className="font-display text-2xl tracking-wide text-white hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    Simon Clinch <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">Oxfordshire · <DanGrade text="4th Dan" /></p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Clock className="text-brand flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-display text-xl tracking-wide leading-none">Monday · 7:00pm - 8:30pm</p>
                    <p className="text-gray-400 text-sm mt-1">Oakley Village Hall</p>
                    <a href="https://maps.app.goo.gl/jnqjMNQKbRCm6fmCA" target="_blank" rel="noopener noreferrer" className="text-brand text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      9 Oxford Road, Oakley, Bucks, HP18 9RS <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-brand flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-display text-xl tracking-wide leading-none">Thursday · 7:30pm - 9:00pm</p>
                    <p className="text-gray-400 text-sm mt-1">Brill Memorial Hall</p>
                    <a href="https://maps.app.goo.gl/JRbY289Y33ocM4sm6" target="_blank" rel="noopener noreferrer" className="text-brand text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      19 Church St, Brill, Aylesbury HP18 9RT <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-5">
                <Link href="/karate-oxfordshire" className="link-underline text-gold text-xs inline-flex items-center gap-1">
                  Full DKK Oxfordshire branch details <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Ragi Marmar - North London */}
            <div className="bg-card border border-white/10 rounded-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/ragi1.jpeg" alt="Ragi Marmar" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/ragi-marmar" className="font-display text-2xl tracking-wide text-white hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    Ragi Marmar <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">North London · <DanGrade text="4th Dan" /></p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Clock className="text-brand flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-display text-xl tracking-wide leading-none">Thursday · 6:15pm - 8:00pm</p>
                    <p className="text-gray-400 text-sm mt-1">St Andrew&apos;s C of E School</p>
                    <a href="https://maps.app.goo.gl/1Jw7TbaSNBR44MBt5" target="_blank" rel="noopener noreferrer" className="text-brand text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      The Green, Totteridge, London N20 8NX <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tunde Oladimeji - Monday Zoom */}
            <div className="bg-card border border-white/10 rounded-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/Tundepot.gif" alt="Tunde Oladimeji" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/tunde-oladimeji" className="font-display text-2xl tracking-wide text-white hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    Tunde Oladimeji <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">Online · <DanGrade text="5th Dan" /></p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Video className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-display text-xl tracking-wide leading-none">Monday · 6:15pm - 7:15pm</p>
                    <p className="text-gray-400 text-sm mt-1">Zoom · online session</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simon Kluth - Friday Zoom */}
            <div className="bg-card border border-white/10 rounded-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-sm overflow-hidden bg-gradient-to-br from-card to-night flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-2xl text-gold/60 tracking-widest">SK</span>
                </div>
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/simon-kluth" className="font-display text-2xl tracking-wide text-white hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    Simon Kluth <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">Online · <DanGrade text="4th Dan" /></p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Video className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-display text-xl tracking-wide leading-none">Friday · 6:15pm - 7:15pm</p>
                    <p className="text-gray-400 text-sm mt-1">Zoom · online session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-xs text-center mt-8">
            All DKK members are welcome at any affiliated session. <Link href="/contact" className="text-brand hover:underline">Contact us</Link> for Zoom access or to confirm attendance.
          </p>
        </div>
      </section>

      {/* Syllabus - with chishi image */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <SectionHeading eyebrow="Syllabus" title="What We Cover" />
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                The full Okinawan Goju Ryu syllabus - striking and grappling, traditional forms and pressure-tested sparring, both armed and unarmed.
              </p>
              <div className="space-y-2">
                {[
                  { title: "Kata", body: "Traditional forms encoding the fighting principles and techniques of Goju Ryu." },
                  { title: "Kumite", body: "Controlled sparring to pressure-test technique against a resisting opponent." },
                  { title: "Ne-Waza", body: "Ground work and grappling. Throws, takedowns and finishes on the floor." },
                  { title: "Weapons", body: "Traditional Okinawan kobudo - bo, eku, tanto and more - woven into the senior syllabus." },
                  { title: "Fitness & Conditioning", body: "Building the strength, endurance and toughness a martial artist needs." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-card border border-white/5 hover:border-brand/30 hover:-translate-y-0.5 transition-all duration-300 rounded-sm group">
                    <div className="w-0.5 flex-shrink-0 bg-brand/30 group-hover:bg-brand rounded-full transition-colors" />
                    <div>
                      <h3 className="font-display text-lg tracking-wide text-white leading-none mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden bg-card" style={{ aspectRatio: "3/4" }}>
              <SafeImage src="/images/Chishi2.jpg" alt="Chishi - traditional Okinawan conditioning" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-brand text-[10px] uppercase tracking-[0.25em] mb-1">Hojo Undo</p>
                <p className="text-white font-display text-3xl tracking-wide leading-tight mb-2">Traditional Conditioning</p>
                <p className="text-gray-300 text-sm leading-relaxed">The chishi - an Okinawan training tool used for centuries to forge the strength behind authentic technique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Also available - with Shihan image */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3">
              <SectionHeading eyebrow="More" title="Also Available" />
              <div className="space-y-3 mb-8">
                {[
                  { icon: Award, title: "Gradings", body: "Formal belt gradings held periodically. Grades at DKK are awarded on a combination of attendance and performance." },
                  { icon: Users, title: "Summer & Winter Camps", body: "Annual training camps for intensive study, a cornerstone of the DKK year, open to all members." },
                  { icon: HelpCircle, title: "New Students Welcome", body: "No uniform needed for your first class. Adults of all experience levels, from complete beginners to black belts - practitioners from other styles also welcome." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-5 bg-card border border-white/5 hover:border-brand/30 hover:-translate-y-0.5 transition-all duration-300 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-brand" size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl tracking-wide text-white mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative rounded-sm overflow-hidden bg-card" style={{ aspectRatio: "3/4" }}>
                <SafeImage src="/images/GavPunch.jpg" alt="Shihan Mulholland - expert instruction" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display text-2xl tracking-wide leading-tight">Expert Instruction</p>
                  <p className="text-brand text-xs uppercase tracking-widest mt-0.5">Shihan Mulholland · <DanGrade text="7th Dan" /></p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-brand/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUMMER CAMP ──────────────────────────────────────── */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            <div>
              <SectionHeading eyebrow="Annual Event" title="Summer Camp" />
              <p className="text-gray-400 leading-relaxed mb-5">
                The cornerstone of the DKK calendar. Every June, members gather in the woods near Portishead for four days of intensive training, gradings and socialising.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Practitioners from London, Portishead, as well as our satellite clubs and the national and international DKK diaspora train together outdoors. Black belt gradings for <strong className="text-white">Shodan</strong> and <strong className="text-white">Nidan</strong> are held here, including the <strong className="text-white">30 Man Kumite</strong>.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: TreePine, title: "The Woods", body: "Woodland campsite near Portishead, North Somerset. Four days of camping, training and community." },
                  { icon: Users, title: "The DKK Diaspora", body: "Practitioners travel in from across the UK and internationally to train together as one." },
                  { icon: Award, title: "Black Belt Gradings", body: "Black belt gradings for Shodan and Nidan are held here, including the 30 Man Kumite." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-4 bg-card border border-white/5 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-brand" size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg tracking-wide text-white mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:min-h-full">
              <div className="relative rounded-sm overflow-hidden bg-card aspect-[4/3]">
                <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="Outdoor kata at summer camp" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-brand text-[10px] uppercase tracking-[0.2em] mb-0.5">Summer Camp</p>
                  <p className="text-white font-display text-xl tracking-wide">Outdoor Training</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-sm overflow-hidden bg-card aspect-square">
                  <SafeImage src="/images/Camp/camp-padwork-outdoor.jpg" alt="Outdoor padwork at camp" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative rounded-sm overflow-hidden bg-card aspect-square">
                  <SafeImage src="/images/Camp/obstacle-crawl.JPG" alt="Obstacle course" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden bg-card aspect-[3/1] lg:aspect-auto lg:flex-1 lg:min-h-[120px]">
                <SafeImage src="/images/Camp/summer-camp-panoramic.JPG" alt="Summer camp panoramic - the full DKK family" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-display text-lg tracking-wide">The Full DKK Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 30 MAN KUMITE: coal band with the number itself as the monument ── */}
      <section className="relative py-20 sm:py-24 lg:py-36 bg-coal border-t border-white/5 overflow-hidden atmosphere-brand">
        <span
          aria-hidden="true"
          className="absolute -right-6 sm:right-4 top-1/2 -translate-y-1/2 font-display leading-none text-transparent select-none pointer-events-none text-[clamp(14rem,42vh,26rem)]"
          style={{ WebkitTextStroke: "1.5px rgba(168,32,26,0.35)" }}
        >
          30
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-brand" />
              The Ultimate Test
            </p>
            <ScrollRevealText
              className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-none mb-6"
              text="The 30 Man Kumite"
            />
            <div className="h-px w-24 bg-brand/70 mb-6" aria-hidden="true" />
            <p className="text-gray-400 leading-relaxed">
              One of the routes to Nidan (<DanGrade text="2nd Dan" />), taken at Summer Camp.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAMP PHOTO STRIP ──────────────────────────────────── */}
      <section className="relative h-[32rem] sm:h-80 overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-full">
          {[
            { src: "/images/Camp/camp-lineup-trees.jpg", alt: "Summer camp lineup" },
            { src: "/images/Camp/nidan-lineup-woods.jpg", alt: "Grading line-up in the woods at Summer Camp" },
            { src: "/images/Camp/camp-certificate-black-gi.jpg", alt: "Grading certificate presented at Summer Camp" },
            { src: "/images/Camp/black-belts-fists.JPG", alt: "Black belts at camp" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <SafeImage src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/0 to-brand/20 opacity-40 pointer-events-none" />
      </section>

      {/* Winter Camp */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="October" title="Winter Camp" />
            <p className="text-gray-400 leading-relaxed">
              A more technical and relaxed weekend of training held every October in North East London. Focused on detailed study of technique, kata analysis, and socialising with the wider DKK community.
            </p>
          </div>
        </div>
      </section>

      {/* Black Belt Camp - added at the club's request 2026-08-27 */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="January" title="Black Belt Camp" />
            <p className="text-gray-400 leading-relaxed">
              A camp for black belts only, held every January. Dan grades from across the club train together, and it takes a club of a certain size to fill one.
            </p>
          </div>
        </div>
      </section>

      {/* Club Tournaments */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Twice a Year" title="Club Tournaments" />
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            <div className="p-7 bg-card border-l-2 border-l-brand border-y border-r border-white/5 rounded-sm">
              <p className="text-brand text-xs font-bold uppercase tracking-[0.25em] mb-2">April</p>
              <p className="font-display text-3xl text-white tracking-wide leading-none">Kumite &amp; Grappling Tournament</p>
            </div>
            <div className="p-7 bg-card border-l-2 border-l-gold/60 border-y border-r border-white/5 rounded-sm">
              <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-2">November</p>
              <p className="font-display text-3xl text-white tracking-wide leading-none">Kata Tournament</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to start training?"
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street"
      />
    </>
  );
}
