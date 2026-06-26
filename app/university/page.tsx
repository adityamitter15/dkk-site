import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Trophy, Award, MapPin, Calendar, Instagram } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "University of Westminster",
  description: "Daigaku Karate Kai - the oldest sports club at the University of Westminster, training continuously since 1990. UWSU Club of the Year 25/26.",
  openGraph: { images: ["/images/Awards/uwsu-award-111.jpg"] },
  twitter: { images: ["/images/Awards/uwsu-award-111.jpg"] },
};

const AWARDS_PHOTOS = [
  { src: "/images/Awards/uwsu-award-112.jpg", alt: "Karate Club committee at UWSU Awards Night with fighting stance" },
  { src: "/images/Awards/uwsu-award-211.jpg", alt: "Award holders on stage at UWSU Awards Night" },
  { src: "/images/Awards/uwsu-award-90.jpg", alt: "Karate Club committee at UWSU Awards Night" },
];

export default function UniversityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <ParallaxImage src="/images/Club/modern-group-hall.jpg" className="object-cover object-center opacity-35" intensity={70} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c9a96e]" />
            University of Westminster
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-[8rem] text-white tracking-wide leading-[0.95] mb-5">The Oldest Sports Club at Westminster</h1>
          <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">
            Established 1990. Daigaku Karate Kai has trained at the University of Westminster under the same instructor for over thirty-five years.
          </p>
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 [&>*:nth-child(2)]:border-l [&>*:nth-child(4)]:border-l [&>*:nth-child(3)]:border-t [&>*:nth-child(4)]:border-t lg:[&>*]:border-t-0 lg:[&>*:not(:first-child)]:border-l [&>*]:border-white/20 py-6">
            <div className="px-4 sm:px-6 text-center">
              <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">1990</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mt-2">Established</p>
            </div>
            <div className="px-4 sm:px-6 text-center">
              <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">Oldest</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mt-2">Sports Club at Westminster</p>
            </div>
            <div className="px-4 sm:px-6 text-center">
              <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">7<sup className="font-sans normal-case text-[0.45em] tracking-tight align-super -ml-px font-medium">th</sup> Dan</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mt-2">Shihan Mulholland</p>
            </div>
            <div className="px-4 sm:px-6 text-center">
              <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide leading-none">25 / 26</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mt-2">Club of the Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the partnership */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading eyebrow="The Partnership" title="Thirty-Five Years at Regent Street" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Daigaku Karate Kai was set up at the University of Westminster in 1990 and has been led by the same instructor - <strong className="text-white">Shihan Gavin Mulholland</strong> - from day one. It is the oldest sports club in the university and remains one of the most active.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Sessions run twice weekly in the main hall at 309 Regent Street, with members drawn from across the University as well as the wider public. Throughout the year, the club runs <strong className="text-white">Summer School</strong> in the woods near Bristol, <strong className="text-white">Winter Camp</strong> in Epping Forest, and tournaments in April and November.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The teaching is authentic Okinawan Goju-Ryu - a combat-orientated reading focused on close-quarter self-defence, not sport karate.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-[4/3] bg-[#141311]">
              <SafeImage src="/images/Club/dojo-full-class.JPG" alt="DKK Karate training in the Westminster main hall" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide">309 Regent Street</p>
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-widest">Main Hall · Mon &amp; Wed · 6-8pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club of the Year Award - centerpiece */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-[#0a0908] to-[#0f0e0c] border-t border-[#c9a96e]/15">
        <div className="absolute inset-0 opacity-[0.08]" style={{ background: "radial-gradient(ellipse at center top, #c9a96e 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.4em] mb-4">
              <span className="w-6 h-px bg-[#c9a96e]" />
              UWSU Awards 25 / 26
              <span className="w-6 h-px bg-[#c9a96e]" />
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-3">Club of the Year</h2>
            <p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em]">University of Westminster Students&apos; Union</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center mb-16">
            <div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-5">
                At the 2025/26 UWSU Awards, Daigaku Karate Kai was named <strong className="text-white">Club of the Year - Karate</strong>. The recognition reflects thirty-five years of consistent training, the strength of the current committee, and the work the club puts in year after year inside and outside the dojo.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For a club whose primary focus is combat rather than competition, the trophy means something different to many of the other awards in the room: it is acknowledgement from the wider University community that the way we train still matters.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[220px] sm:w-[260px] aspect-[3/4] rounded-sm overflow-hidden ring-1 ring-[#c9a96e]/40 shadow-[0_0_60px_-10px_rgba(201,169,110,0.45)]">
                <SafeImage src="/images/Awards/uwsu-trophy-2526.jpg" alt="UWSU Club of the Year 25/26 trophy" fill className="object-cover" style={{ objectPosition: "center 25%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-['Bebas_Neue'] text-white text-lg tracking-widest">The Trophy</p>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.25em]">25 / 26</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards night gallery */}
          <div>
            <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.35em] mb-5 text-center">From the Night</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {AWARDS_PHOTOS.map((photo) => (
                <div key={photo.src} className="relative aspect-[3/2] rounded-sm overflow-hidden bg-[#141311] ring-1 ring-white/5 group">
                  <SafeImage src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUCS - low-key mention */}
      <section className="py-14 bg-[#12110f] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-sm bg-[#a8201a]/10 border border-[#a8201a]/30 flex items-center justify-center flex-shrink-0">
            <Award className="text-[#a8201a]" size={22} />
          </div>
          <div>
            <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.35em] mb-1">BUCS Nationals 2025/26</p>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              In February 2026 the club also brought home a medal from the <strong>BUCS Karate Championships</strong> in Sheffield.
            </p>
          </div>
        </div>
      </section>

      {/* For Westminster Students */}
      <section className="py-20 lg:py-28 bg-[#0f0e0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <SectionHeading eyebrow="If You're a Student" title="How to Join" />
              <p className="text-gray-400 leading-relaxed">
                Sign up via UWSU or message the club on Instagram. The first session is always a watch-and-try - no kit required.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              <a
                href="https://uwsu.com/sports/view/karate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#141311] border border-white/10 hover:border-[#a8201a]/40 transition-all rounded-sm group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="text-[#a8201a]" size={20} />
                  <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.25em]">UWSU</p>
                </div>
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide mb-1">Sign up via UWSU</p>
                <p className="text-gray-400 text-sm">Official Westminster Students&apos; Union karate page.</p>
                <p className="text-[#a8201a] text-xs uppercase tracking-widest mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">uwsu.com/sports/view/karate <ChevronRight size={12} /></p>
              </a>

              <a
                href="https://instagram.com/uwsukarate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#141311] border border-white/10 hover:border-[#a8201a]/40 transition-all rounded-sm group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Instagram className="text-[#a8201a]" size={20} />
                  <p className="text-[#a8201a] text-[10px] font-bold uppercase tracking-[0.25em]">Instagram</p>
                </div>
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide mb-1">@uwsukarate</p>
                <p className="text-gray-400 text-sm">Follow the student-side committee for term-time updates.</p>
                <p className="text-[#a8201a] text-xs uppercase tracking-widest mt-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">instagram.com/uwsukarate <ChevronRight size={12} /></p>
              </a>

              <div className="p-5 bg-[#141311] border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-[#c9a96e]" size={20} />
                  <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.25em]">Where</p>
                </div>
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide mb-1">309 Regent Street</p>
                <p className="text-gray-400 text-sm">Main Hall, University of Westminster, W1B 2HW.</p>
              </div>

              <div className="p-5 bg-[#141311] border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-[#c9a96e]" size={20} />
                  <p className="text-[#c9a96e] text-[10px] font-bold uppercase tracking-[0.25em]">When</p>
                </div>
                <p className="text-white font-['Bebas_Neue'] text-xl tracking-wide mb-1">Monday &amp; Wednesday</p>
                <p className="text-gray-400 text-sm">6:00-8:00pm. Classes run during University breaks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#a8201a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Come and train.</p>
            <p className="text-white/70 text-sm mt-1">No kit needed for your first session. Just turn up Monday or Wednesday at 6pm.</p>
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
