import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Award, Star, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Shihan Gavin Mulholland",
  description: "Shihan Gavin Mulholland, 7th Dan — founder and chief instructor of Daigaku Karate Kai London. Combat Hall of Fame inductee and published author.",
};

export default function ShihanPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Instructor
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">Shihan</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-3">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-[#111]">
                <SafeImage src="/images/GavPortrait.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-['Bebas_Neue'] text-2xl tracking-widest">Gavin Mulholland</p>
                  <p className="text-[#c0392b] text-xs uppercase tracking-widest">Shihan · 7th Dan</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/images/Gavheadlock4.jpg", alt: "Shihan Mulholland — grappling" },
                  { src: "/images/GavThrowDom.jpg", alt: "Shihan Mulholland — throwing" },
                  { src: "/images/Chishi2.jpg", alt: "Shihan Mulholland — chishi training" },
                ].map((img) => (
                  <div key={img.src} className="aspect-square relative rounded-sm overflow-hidden bg-[#111] group">
                    <SafeImage src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Founder & Chief Instructor" title="Gavin Mulholland" />
              <div className="flex flex-wrap gap-2 mb-6">
                {["7th Dan", "Shihan", "Founder", "Author", "Combat Hall of Fame"].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-[#c0392b]/10 border border-[#c0392b]/30 text-[#c0392b] text-xs font-semibold uppercase tracking-wider rounded-sm">
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
                  <div key={item.label} className="p-4 bg-[#111] border border-white/5 rounded-sm text-center">
                    <item.icon className="text-[#c0392b] mx-auto mb-2" size={20} />
                    <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">{item.value}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 flex-wrap">
                <Link href="/books" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
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
      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading eyebrow="DKK Fighters" title="A Record in the Cage" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Shihan Mulholland has guided his team DKK Fighters to compete in Cage Rage, Ultimate Challenge, and BAMMA. The club&apos;s first 20 cage fights yielded 16 wins, one finalist in <em>Fighting Hurts</em>, and one World Title. One student even made it as far as the UFC.
              </p>
              <Link href="/fighters" className="inline-flex items-center gap-2 text-[#c0392b] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                DKK Fighters <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-video bg-[#111]">
              <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-6">
                {[{ value: "16/20", label: "Wins" }, { value: "1", label: "World Title" }, { value: "UFC", label: "Reached" }].map((s) => (
                  <div key={s.label}>
                    <p className="font-['Bebas_Neue'] text-2xl text-white tracking-wide">{s.value}</p>
                    <p className="text-[#c0392b] text-xs uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 items-start max-w-2xl">
            <Shield className="text-[#c0392b] flex-shrink-0 mt-1" size={28} />
            <div>
              <p className="text-[#c0392b] text-xs font-semibold uppercase tracking-widest mb-1">Recognition</p>
              <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white mb-2">Combat Hall of Fame</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shihan Mulholland is a member of the Combat Hall of Fame — recognition of his outstanding contribution to martial arts as an instructor, competitor, and author.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
