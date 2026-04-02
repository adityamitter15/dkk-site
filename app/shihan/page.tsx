import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Award, Star, Shield, Mic, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Shihan Gavin Mulholland",
  description: "Shihan Gavin Mulholland, 7th Dan. Founder and chief instructor of Daigaku Karate Kai London. Combat Hall of Fame inductee and published author.",
};

export default function ShihanPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src="/images/Club/GavPunch.jpg" alt="" fill className="object-cover object-top opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0c]/90 via-[#0f0e0c]/60 to-[#0f0e0c]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-[#0f0e0c]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#b08d57] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#b08d57]" />
            Founder & Chief Instructor
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4">Shihan<br /><span className="text-[#a8201a]">Mulholland</span></h1>
          <p className="text-gray-300 text-lg max-w-lg">7th Dan · Combat Hall of Fame · Published Author</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-3">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-[#141311]">
                <SafeImage src="/images/GavPortrait.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-['Bebas_Neue'] text-2xl tracking-widest">Gavin Mulholland</p>
                  <p className="text-[#a8201a] text-xs uppercase tracking-widest">Shihan · 7th Dan</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/images/Training/shihan-technique.JPG", alt: "Shihan Mulholland - technique demonstration" },
                  { src: "/images/GavThrowDom.jpg", alt: "Shihan Mulholland - throwing" },
                  { src: "/images/Training/self-defence-demo.JPG", alt: "Shihan Mulholland - self-defence" },
                ].map((img) => (
                  <div key={img.src} className="aspect-square relative rounded-sm overflow-hidden bg-[#141311] group">
                    <SafeImage src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Founder & Chief Instructor" title="Gavin Mulholland" />
              <div className="flex flex-wrap gap-2 mb-6">
                {["7th Dan", "Shihan", "Founder", "Author", "Combat Hall of Fame"].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-[#b08d57]/10 border border-[#b08d57]/30 text-[#b08d57] text-xs font-semibold uppercase tracking-wider rounded-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Gavin began training at an early age alongside his brothers under the tutelage of their father, who was teaching Judo and unarmed combat in the British Forces throughout the 1960s. After witnessing a demonstration of Goju Ryu by Kyoshi Kim Roberts in the late 70s, he became an immediate convert and trains with Kim to this day.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Gavin has travelled extensively throughout Asia experiencing a wide diversity of martial arts. However, as a holistic fighting art, Goju already incorporates elements from virtually every other fighting system and Gavin has remained within the Goju framework.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                A member of the Combat Hall of Fame, Gavin was awarded Godan in 2002, Rokudan in June 2009, and was promoted to Nanadan (7th Dan) in June 2019 by the Chairman of the OMAA, Shihan Roger Sheldon.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                He spent many years on the door as a regular instructor for Meido Ltd, specialising in door supervision, security and close protection. He has made TV and film appearances, published regular articles, and wrote the highly acclaimed <em>Four Shades of Black</em>. He is Chief Instructor of DKK alongside Shihan Dan Lewis of Bristol Combat Goju Ryu.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Award, label: "Grade", value: "7th Dan" },
                  { icon: Star, label: "Title", value: "Shihan" },
                  { icon: BookOpen, label: "Books", value: "Published" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-[#141311] border border-white/5 rounded-sm text-center">
                    <item.icon className="text-[#a8201a] mx-auto mb-2" size={20} />
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">{item.value}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 flex-wrap">
                <Link href="/books" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                  View Books <ChevronRight size={16} />
                </Link>
                <Link href="/fighters" className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm uppercase tracking-wider hover:text-white hover:gap-3 transition-all">
                  DKK Fighters <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fighters record */}
      <section className="py-16 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading eyebrow="DKK Fighters" title="A Record in the Cage" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Shihan Mulholland has guided his team DKK Fighters to compete in Cage Rage, Ultimate Challenge, and BAMMA. The club&apos;s first 20 cage fights yielded 16 wins, one finalist in <em>Fighting Hurts</em>, and one World Title. One student even made it as far as the UFC.
              </p>
              <Link href="/fighters" className="inline-flex items-center gap-2 text-[#a8201a] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                DKK Fighters <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-video bg-[#141311]">
              <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-6">
                {[{ value: "16/20", label: "Wins" }, { value: "1", label: "World Title" }, { value: "UFC", label: "Reached" }].map((s) => (
                  <div key={s.label}>
                    <p className="font-['Bebas_Neue'] text-2xl text-white tracking-wide">{s.value}</p>
                    <p className="text-[#a8201a] text-xs uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B&W Photoshoot Video */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 text-[#b08d57] text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-[#b08d57]" />
              From the Book
              <span className="w-6 h-px bg-[#b08d57]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide leading-none">More Shades of Black</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">Behind-the-scenes footage from the professional photoshoot for Shihan Mulholland&apos;s acclaimed book.</p>
          </div>
          <div className="relative rounded-sm overflow-hidden ring-1 ring-[#b08d57]/20">
            <video
              className="w-full aspect-video bg-[#080808]"
              src="/videos/dkk_bw_photoshoot.mp4"
              poster="/images/GavPortrait.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* Interviews & Media */}
      <section className="py-20 bg-[#0f0e0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Interviews" title="Podcasts & Media" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              {
                title: "\"Karate Doesn't Exist\"",
                source: "World of Martial Arts",
                description: "An in-depth exploration of the meaning of karate and the history of Goju Ryu.",
                href: "https://www.worldofmartialarts.tv/karate-doesnt-exist-gavin-mulholland-goju-ryu-interview/",
              },
              {
                title: "Kung-fu Kingdom Interview",
                source: "Kung-fu Kingdom",
                description: "A comprehensive biographical interview covering Shihan Mulholland's martial arts journey.",
                href: "https://kungfukingdom.com/interview-with-gavin-mulholland/",
              },
              {
                title: "Episode 60",
                source: "MartialFocus Podcast",
                description: "Training philosophy, the DKK approach, and what makes Goju Ryu different.",
                href: "https://martialfocus.podbean.com/e/episode-sixty-gavin-mulholland/",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-5 bg-[#141311] border border-white/5 rounded-sm hover:border-[#a8201a]/40 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-sm bg-[#a8201a]/10 border border-[#a8201a]/20 flex items-center justify-center">
                  <Mic className="text-[#a8201a]" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    {item.title}
                    <ExternalLink size={11} className="text-gray-600 group-hover:text-[#a8201a] transition-colors" />
                  </p>
                  <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">{item.source}</p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 items-start max-w-2xl">
            <Shield className="text-[#a8201a] flex-shrink-0 mt-1" size={28} />
            <div>
              <p className="text-[#a8201a] text-xs font-semibold uppercase tracking-widest mb-1">Recognition</p>
              <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2">Combat Hall of Fame</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shihan Mulholland is a member of the Combat Hall of Fame, in recognition of his outstanding contribution to martial arts as an instructor, competitor, and author.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
