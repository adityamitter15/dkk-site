import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, Users, BookOpen, Award, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Training",
  description: "Okinawan Goju Ryu training every Monday and Wednesday, 6-8pm at the University of Westminster, 309 Regent Street, London. Adults of all levels welcome.",
};

export default function TrainingPage() {
  return (
    <>
      {/* Hero - split layout with action photo */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Training/padwork-overhead.jpg" alt="" fill className="object-cover object-center opacity-25" />
        </div>
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

      {/* Schedule + location with image */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <SectionHeading eyebrow="Class Times" title="When We Train" />
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

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-[#141311]">
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

      {/* Syllabus - with chishi image */}
      <section className="py-20 lg:py-28 bg-[#12110f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
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

            <div className="space-y-4 lg:pt-16">
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "340/359" }}>
                <SafeImage src="/images/Chishi2.jpg" alt="Chishi - traditional Okinawan conditioning" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#a8201a] text-[10px] uppercase tracking-[0.2em] mb-0.5">Hojo Undo</p>
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">Traditional Conditioning</p>
                  <p className="text-gray-400 text-xs mt-0.5">The chishi, an Okinawan training tool used for centuries to develop strength and technique</p>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden bg-[#141311]" style={{ aspectRatio: "340/280" }}>
                <SafeImage src="/images/GavThrowDom.jpg" alt="Throwing technique - Nage Waza" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#a8201a] text-[10px] uppercase tracking-[0.2em] mb-0.5">Nage Waza</p>
                  <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">Throwing Technique</p>
                </div>
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

      {/* ── CAMP PHOTO STRIP ──────────────────────────────────── */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <div className="grid grid-cols-4 h-full">
          {[
            { src: "/images/Camp/summer-camp-group.JPG", alt: "Summer camp group" },
            { src: "/images/Camp/bo-staff-sunflare.JPG", alt: "Bo staff training at sunrise" },
            { src: "/images/Camp/obstacle-crawl.JPG", alt: "Obstacle course" },
            { src: "/images/Camp/outdoor-kata-dynamic.JPG", alt: "Outdoor kata" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <SafeImage src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#a8201a]/20 opacity-40 pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Ready to start training?</p>
            <p className="text-white/70 text-sm mt-1">Monday & Wednesday · 6:00pm – 8:00pm · 309 Regent Street</p>
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
