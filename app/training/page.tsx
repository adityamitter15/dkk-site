import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, Users, BookOpen, Award, HelpCircle, TreePine, Flame, Video, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "Training",
  description: "Okinawan Goju Ryu training every Monday and Wednesday, 6-8pm at the University of Westminster, 309 Regent Street, London. Adults of all levels welcome.",
};

export default function TrainingPage() {
  return (
    <>
      {/* Hero - split layout with action photo */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <ParallaxImage src="/images/Training/kumite-high-kick.jpg" className="object-cover object-center opacity-45" intensity={70} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-5">
            <span className="w-6 h-px bg-[#a8201a]" />
            DKK London
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-6">Training</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">
            Okinawan Goju Ryu. Every Monday and Wednesday evening at 309 Regent Street, London.
          </p>
        </div>
      </section>

      {/* Main Dojo - Westminster */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            <div>
              <SectionHeading eyebrow="Main Dojo" title="When We Train" />
              <div className="space-y-3 mb-8">
                {[
                  { day: "Monday", time: "6:00pm – 8:00pm" },
                  { day: "Wednesday", time: "6:00pm – 8:00pm" },
                ].map((session) => (
                  <div key={session.day} className="flex items-center gap-5 p-6 bg-[#141311] border-l-2 border-l-[#a8201a] border-y border-r border-white/5 rounded-sm">
                    <Clock className="text-[#a8201a] flex-shrink-0" size={22} />
                    <div>
                      <p className="font-['Bebas_Neue'] text-3xl text-white tracking-wide leading-none">{session.day}</p>
                      <p className="text-gray-400 text-sm mt-0.5">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 rounded-sm hover:border-white/10 transition-colors">
                <MapPin className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">University of Westminster</p>
                  <p className="text-gray-400 text-sm">Main Hall · 309 Regent Street · London W1B 2HW</p>
                  <p className="text-gray-600 text-xs mt-1.5">No student card required. Classes run during all University breaks.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
              <div className="absolute inset-0 rounded-sm overflow-hidden bg-[#141311]">
                <SafeImage src="/images/Training/dojo-sparring.JPG" alt="DKK training - sparring in the dojo" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#a8201a] text-xs uppercase tracking-widest">Close-Quarter Combat</p>
                  <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide">Every session. Every week.</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#a8201a]/25 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated DKK Classes */}
      <section className="py-20 lg:py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-[#c9a96e]" />
              Affiliated DKK Classes
              <span className="w-6 h-px bg-[#c9a96e]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl text-white tracking-wide leading-none">Train Across the Network</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">DKK instructors run additional classes in Oxfordshire and North London, plus online sessions on Zoom. All members are welcome at any session.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Simon Clinch - Oxfordshire */}
            <div className="bg-[#141311] border border-white/5 rounded-sm overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/simon_clinch_studio.jpg" alt="Simon Clinch" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/simon-clinch" className="font-['Bebas_Neue'] text-2xl tracking-wide text-white hover:text-[#c9a96e] transition-colors inline-flex items-center gap-1.5">
                    Simon Clinch <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">Oxfordshire · 4th Dan</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Clock className="text-[#a8201a] flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">Monday · 7:00pm – 8:30pm</p>
                    <p className="text-gray-400 text-sm mt-1">Oakley Village Hall</p>
                    <a href="https://maps.app.goo.gl/jnqjMNQKbRCm6fmCA" target="_blank" rel="noopener noreferrer" className="text-[#a8201a] text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      9 Oxford Road, Oakley, Bucks, HP18 9RS <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-[#a8201a] flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">Thursday · 7:30pm – 9:00pm</p>
                    <p className="text-gray-400 text-sm mt-1">Brill Memorial Hall</p>
                    <a href="https://maps.app.goo.gl/JRbY289Y33ocM4sm6" target="_blank" rel="noopener noreferrer" className="text-[#a8201a] text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      19 Church St, Brill, Aylesbury HP18 9RT <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ragi Marmar - North London */}
            <div className="bg-[#141311] border border-white/5 rounded-sm overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/ragi1.jpeg" alt="Ragi Marmar" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/ragi-marmar" className="font-['Bebas_Neue'] text-2xl tracking-wide text-white hover:text-[#c9a96e] transition-colors inline-flex items-center gap-1.5">
                    Ragi Marmar <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">North London · 4th Dan</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <Clock className="text-[#a8201a] flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">Thursday · 6:15pm – 8:00pm</p>
                    <p className="text-gray-400 text-sm mt-1">St Andrew&apos;s C of E School</p>
                    <a href="https://maps.app.goo.gl/1Jw7TbaSNBR44MBt5" target="_blank" rel="noopener noreferrer" className="text-[#a8201a] text-xs hover:underline inline-flex items-center gap-1 mt-0.5">
                      The Green, Totteridge, London N20 8NX <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tunde Oladimeji - Online Zoom */}
            <div className="bg-[#141311] border border-white/5 rounded-sm overflow-hidden md:col-span-2">
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-black flex-shrink-0">
                  <SafeImage src="/images/Yudansha/Tundepot.gif" alt="Tunde Oladimeji" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.2em] font-bold">Instructor</p>
                  <Link href="/yudansha/tunde-oladimeji" className="font-['Bebas_Neue'] text-2xl tracking-wide text-white hover:text-[#c9a96e] transition-colors inline-flex items-center gap-1.5">
                    Tunde Oladimeji <ChevronRight size={14} />
                  </Link>
                  <p className="text-gray-500 text-xs">Online · 5th Dan</p>
                </div>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                <div className="flex gap-4">
                  <Video className="text-[#c9a96e] flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">Monday · 6:15pm – 7:15pm</p>
                    <p className="text-gray-400 text-sm mt-1">Zoom · online session</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Video className="text-[#c9a96e] flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide leading-none">Friday · 6:00pm – 7:00pm</p>
                    <p className="text-gray-400 text-sm mt-1">Zoom · online session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-xs text-center mt-8">
            All DKK members are welcome at any affiliated session. <Link href="/contact" className="text-[#a8201a] hover:underline">Contact us</Link> for Zoom access or to confirm attendance.
          </p>
        </div>
      </section>

      {/* Syllabus - with chishi image */}
      <section className="py-20 lg:py-28 bg-[#12110f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <SectionHeading eyebrow="Syllabus" title="What We Cover" />
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Classes cover all aspects of the DKK syllabus, from foundational technique to traditional kata and pressure-tested sparring.
              </p>
              <div className="space-y-2">
                {[
                  { title: "Kihon", body: "Fundamental techniques: the building blocks of all karate training." },
                  { title: "Kata", body: "Traditional forms encoding the fighting principles and techniques of Goju Ryu." },
                  { title: "Bunkai", body: "Practical application of kata. The combat use of every movement unlocked." },
                  { title: "Kumite", body: "Controlled sparring to pressure-test technique against a resisting opponent." },
                  { title: "Fitness & Conditioning", body: "Building the strength, endurance and toughness a martial artist needs." },
                  { title: "Sanchin & Breathing", body: "The foundational Goju Ryu kata: breath control, body structure, mental focus." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-[#141311] border border-white/5 hover:border-[#a8201a]/30 hover:-translate-y-0.5 transition-all duration-300 rounded-sm group">
                    <div className="w-0.5 flex-shrink-0 bg-[#a8201a]/30 group-hover:bg-[#a8201a] rounded-full transition-colors" />
                    <div>
                      <h3 className="font-['Bebas_Neue'] text-lg tracking-wide text-white leading-none mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "3/4" }}>
              <SafeImage src="/images/Chishi2.jpg" alt="Chishi - traditional Okinawan conditioning" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#a8201a] text-[10px] uppercase tracking-[0.25em] mb-1">Hojo Undo</p>
                <p className="text-white font-['Bebas_Neue'] text-3xl tracking-wide leading-tight mb-2">Traditional Conditioning</p>
                <p className="text-gray-300 text-sm leading-relaxed">The chishi - an Okinawan training tool used for centuries to forge the strength behind authentic technique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Also available - with Shihan image */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <div className="lg:col-span-3">
              <SectionHeading eyebrow="More" title="Also Available" />
              <div className="space-y-3 mb-8">
                {[
                  { icon: BookOpen, title: "Courses", body: "Specialist courses throughout the year covering specific aspects of Goju Ryu: weapons, kata application, self-defence." },
                  { icon: Award, title: "Gradings", body: "Formal belt gradings held periodically. Grades at DKK are awarded on genuine ability, not time served or attendance." },
                  { icon: Users, title: "Summer & Winter Camps", body: "Annual training camps for intensive study, a cornerstone of the DKK year, open to all members." },
                  { icon: HelpCircle, title: "New Students Welcome", body: "No fee to watch or try your first class. No uniform needed. Adults of all experience levels, from complete beginners to black belts." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 hover:border-[#a8201a]/30 hover:-translate-y-0.5 transition-all duration-300 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-[#a8201a]/10 border border-[#a8201a]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-[#a8201a]" size={16} />
                    </div>
                    <div>
                      <h3 className="font-['Bebas_Neue'] text-xl tracking-wide text-white mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "3/4" }}>
                <SafeImage src="/images/GavPunch.jpg" alt="Shihan Mulholland - expert instruction" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-['Bebas_Neue'] text-2xl tracking-wide leading-tight">Expert Instruction</p>
                  <p className="text-[#a8201a] text-xs uppercase tracking-widest mt-0.5">Shihan Mulholland · 7th Dan</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#a8201a]/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUMMER CAMP ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            <div>
              <SectionHeading eyebrow="Annual Event" title="Summer Camp" />
              <p className="text-gray-400 leading-relaxed mb-5">
                The cornerstone of the DKK calendar. Every June, all DKK factions gather at Glenny Wood, a 23-acre woodland campsite in Portishead, North Somerset, for four days of intensive training, gradings and socialising.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Practitioners from London, Bristol, Torbay, Oxfordshire and Switzerland train together outdoors. The most significant gradings of the year are held here, including the 30 Man Kumite for Nidan.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: TreePine, title: "Glenny Wood", body: "23-acre woodland campsite in Portishead, North Somerset. Four days of camping, training and community." },
                  { icon: Users, title: "All DKK Clubs", body: "London, Bristol, Torbay, Oxfordshire and Switzerland train together as one." },
                  { icon: Award, title: "Major Gradings", body: "The most important gradings of the year, including the legendary 30 Man Kumite for Nidan." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-4 bg-[#141311] border border-white/5 rounded-sm">
                    <div className="w-9 h-9 rounded-sm bg-[#a8201a]/10 border border-[#a8201a]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-[#a8201a]" size={16} />
                    </div>
                    <div>
                      <h3 className="font-['Bebas_Neue'] text-lg tracking-wide text-white mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:min-h-full">
              <div className="relative rounded-sm overflow-hidden bg-[#141311] aspect-[4/3]">
                <SafeImage src="/images/Camp/outdoor-kata-dynamic.JPG" alt="Outdoor kata at summer camp" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#a8201a] text-[10px] uppercase tracking-[0.2em] mb-0.5">Summer Camp</p>
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">Outdoor Training</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-sm overflow-hidden bg-[#141311] aspect-square">
                  <SafeImage src="/images/Camp/camp-padwork-outdoor.jpg" alt="Outdoor padwork at camp" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative rounded-sm overflow-hidden bg-[#141311] aspect-square">
                  <SafeImage src="/images/Camp/obstacle-crawl.JPG" alt="Obstacle course" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden bg-[#141311] aspect-[3/1] lg:aspect-auto lg:flex-1 lg:min-h-[120px]">
                <SafeImage src="/images/Camp/summer-camp-panoramic.JPG" alt="Summer camp panoramic - the full DKK family" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-['Bebas_Neue'] text-lg tracking-wide">The Full DKK Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 30 MAN KUMITE ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-[#a8201a]" />
              The Ultimate Test
              <span className="w-6 h-px bg-[#a8201a]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-6">The 30 Man Kumite</h2>
            <p className="text-gray-400 leading-relaxed">
              The test for Nidan (2nd Dan) at DKK. 30 minutes of full-contact kumite, fighting 30 opponents for one minute each with no rest. Upon completion, the student is awarded the coveted black dogi.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
            {[
              { value: "30", label: "Opponents", sub: "One minute each" },
              { value: "30", label: "Minutes", sub: "No rest between rounds" },
              { value: "Nidan", label: "Requirement", sub: "2nd Dan grading" },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-[#141311] border border-[#a8201a]/20 rounded-sm text-center">
                <Flame className="text-[#a8201a] mx-auto mb-3" size={20} />
                <p className="font-['Bebas_Neue'] text-4xl text-white tracking-wide leading-none">{item.value}</p>
                <p className="text-[#a8201a] text-xs font-bold uppercase tracking-widest mt-1">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Beyond Nidan - the full dan progression */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-3">
                <span className="w-6 h-px bg-[#c9a96e]" />
                Beyond Nidan
                <span className="w-6 h-px bg-[#c9a96e]" />
              </p>
              <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">The Black Belt Journey</h3>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">Each dan grade at DKK carries a distinct requirement and responsibility.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { grade: "Nidan", dan: "2nd Dan", descriptor: "30 Man Kumite", sub: "Combat endurance", accent: "#a8201a" },
                { grade: "Sandan", dan: "3rd Dan", descriptor: "Teaching Grade", sub: "Ability to instruct", accent: "#c9a96e" },
                { grade: "Yondan", dan: "4th Dan", descriptor: "Weapons Grade", sub: "Okinawan kobudo", accent: "#c9a96e" },
                { grade: "Godan", dan: "5th Dan", descriptor: "Master Grade", sub: "Decades of service", accent: "#c9a96e" },
              ].map((g) => (
                <div key={g.grade} className="p-5 bg-[#141311] border border-white/5 rounded-sm text-center hover:border-white/10 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1" style={{ color: g.accent }}>{g.grade}</p>
                  <p className="font-['Bebas_Neue'] text-2xl text-white tracking-wide leading-none">{g.dan}</p>
                  <p className="text-white text-sm font-medium mt-3">{g.descriptor}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{g.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMP PHOTO STRIP ──────────────────────────────────── */}
      <section className="relative h-[32rem] sm:h-80 overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-full">
          {[
            { src: "/images/Camp/camp-lineup-trees.jpg", alt: "Summer camp lineup" },
            { src: "/images/Camp/pushups-outdoors.JPG", alt: "Outdoor conditioning" },
            { src: "/images/Camp/grading-certificates.JPG", alt: "Summer camp grading" },
            { src: "/images/Camp/black-belts-fists.JPG", alt: "Black belts at camp" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <SafeImage src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#a8201a]/20 opacity-40 pointer-events-none" />
      </section>

      {/* Winter Camp */}
      <section className="py-16 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="October" title="Winter Camp" />
            <p className="text-gray-400 leading-relaxed">
              A more technical and relaxed weekend of training held every October in North East London. Focused on detailed study of technique, kata analysis, and socialising with the wider DKK community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Ready to start training?</p>
            <p className="text-white/70 text-sm mt-1">Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#a8201a] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors rounded-sm flex-shrink-0 inline-flex items-center gap-2"
          >
            Get In Touch <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
