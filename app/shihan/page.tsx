import PageHero from "@/components/ui/PageHero";
import DanGrade from "@/components/DanGrade";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Award, Star, Shield, Mic, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Shihan Gavin Mulholland",
  description: "Shihan Gavin Mulholland, 7th Dan. Founder and chief instructor of Daigaku Karate Kai London. Combat Hall of Fame inductee and published author.",
  openGraph: { images: ["/og/shihan.jpg"] },
  twitter: { images: ["/og/shihan.jpg"] },
};

export default function ShihanPage() {
  return (
    <>
      <PageHero
        variant="full"
        eyebrow="Founder & Chief Instructor"
        eyebrowTone="gold"
        folio="03 / Shihan"
        kanji="師範"
        kanjiTone="gold"
        title={<>Shihan<br /><span className="text-brand">Mulholland</span></>}
        lead={<><DanGrade text="7th Dan" /> · Combat Hall of Fame · Published Author</>}
        image={{ src: "/images/Shihan/shihan-bo-black.jpg", alt: "Shihan Gavin Mulholland with bo staff", position: "78% 15%" }}
      />

      <section className="section-reveal py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-24 space-y-3">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-card">
                <SafeImage src="/images/Shihan/shihan-portrait-black.jpg" alt="Shihan Gavin Mulholland" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-display text-2xl tracking-widest">Gavin Mulholland</p>
                  <p className="text-brand text-xs uppercase tracking-widest">Shihan · <DanGrade text="7th Dan" /></p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/images/GavPunch.jpg", alt: "Shihan Mulholland - strike technique" },
                  { src: "/images/GavThrowDom.jpg", alt: "Shihan Mulholland - throwing" },
                  { src: "/images/Training/self-defence-demo.JPG", alt: "Shihan Mulholland - self-defence" },
                ].map((img) => (
                  <div key={img.src} className="aspect-square relative rounded-sm overflow-hidden bg-card group">
                    <SafeImage src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Founder & Chief Instructor" title="Gavin Mulholland" />
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider rounded-sm">
                  <DanGrade text="7th Dan" />
                </span>
                {["Shihan", "Founder", "Author", "Combat Hall of Fame"].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider rounded-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 leading-relaxed mb-5">
                Gavin began training at an early age alongside his brothers under the tutelage of their father, who was teaching Judo and unarmed combat in the British Forces throughout the 1960s. After witnessing a demonstration of Goju Ryu by <strong className="text-white">Kyoshi Kim Roberts</strong> and <strong className="text-white">Shihan Dave Arnold</strong> in the late 1970s, he became an immediate convert and has been studying Okinawan Goju Ryu ever since.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Gavin has travelled extensively throughout Asia experiencing a wide diversity of martial arts. However, as a holistic fighting art, Goju already incorporates elements from virtually every other fighting system and Gavin has remained within the Goju framework.
              </p>
              {/* Magazine pull-quote — lifted from the paragraph above */}
              <blockquote className="my-8 pl-6 border-l-2 border-gold" aria-hidden="true">
                <p className="font-display text-2xl sm:text-3xl text-gold/90 tracking-wide leading-snug">
                  &ldquo;As a holistic fighting art, Goju already incorporates elements from virtually every other fighting system.&rdquo;
                </p>
              </blockquote>
              <p className="text-gray-400 leading-relaxed mb-5">
                A member of the Combat Hall of Fame, Gavin was awarded Godan in 2002, Rokudan in June 2009, and was promoted to Nanadan (<DanGrade text="7th Dan" />) in June 2019 by the Chairman of the OMAA, Shihan Roger Sheldon.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                He spent many years on the door as a regular instructor for Meido Ltd, specialising in door supervision, security and close protection. He has made TV and film appearances, published regular articles, and wrote the highly acclaimed <em>Four Shades of Black</em>. He is Chief Instructor of DKK alongside Shihan Dan Lewis of DKK Portishead.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-card border border-white/5 rounded-sm text-center">
                  <Award className="text-brand mx-auto mb-2" size={20} />
                  <p className="text-white font-display text-xl tracking-wide">
                    <DanGrade text="7th Dan" />
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Grade</p>
                </div>
                <div className="p-4 bg-card border border-white/5 rounded-sm text-center">
                  <Star className="text-brand mx-auto mb-2" size={20} />
                  <p className="text-white font-display text-xl tracking-wide">Shihan</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Title</p>
                </div>
                <div className="p-4 bg-card border border-white/5 rounded-sm text-center">
                  <BookOpen className="text-brand mx-auto mb-2" size={20} />
                  <p className="text-white font-display text-xl tracking-wide">Published</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Books</p>
                </div>
              </div>
              <div className="flex gap-6 flex-wrap">
                <Link href="/books" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
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
      <section className="section-reveal py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading eyebrow="DKK Fighters" title="A Record in the Cage" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Shihan Mulholland has guided his team DKK Fighters to compete in Cage Rage, Ultimate Challenge, Bellator, BAMMA and the UFC. The club&apos;s first 20 professional cage fights yielded 16 wins, the <strong className="text-white">UCMMA British Heavyweight title</strong>, a fight for the <strong className="text-white">World Title</strong> in the Bellator Heavyweight Tournament, and a finalist in <em>Fighting Hurts</em>.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[{ value: "16/20", label: "Cage Wins" }, { value: "1", label: "British Title" }, { value: "UFC", label: "Reached" }].map((s) => (
                  <div key={s.label} className="p-4 bg-card border border-brand/20 rounded-sm text-center">
                    <p className="font-display text-2xl text-white tracking-wide leading-none">{s.value}</p>
                    <p className="text-brand text-[10px] uppercase tracking-widest mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/fighters" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                DKK Fighters <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-video bg-card">
              <SafeImage src="/images/Fighters/dkk.jpg" alt="DKK Fighters" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-display text-xl tracking-widest">DKK Fighters</p>
                <p className="text-brand text-xs uppercase tracking-widest">Cage Rage · BAMMA · UFC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons & Technique - Shades of Black portrait series */}
      <section className="section-reveal py-20 lg:py-28 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-gold" />
              Portrait Series
              <span className="w-6 h-px bg-gold" />
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide leading-none">Weapons &amp; Technique</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">From the professional studio shoot for <em>More Shades of Black</em> - traditional Okinawan weapons photographed in Shihan&apos;s hands.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { src: "/images/Shihan/shihan-kuwa-black.jpg", label: "Shillelagh", sub: "Irish fighting stick" },
              { src: "/images/Shihan/shihan-bo-black.jpg",   label: "Eku",        sub: "Okinawan oar" },
              { src: "/images/Shihan/shihan-tanto-black.jpg", label: "Tanto",     sub: "Short blade" },
            ].map((item) => (
              <div key={item.src} className="relative aspect-[4/5] rounded-sm overflow-hidden bg-card ring-1 ring-gold/10 hover:ring-gold/40 transition-all duration-500 group">
                <SafeImage src={item.src} alt={`Shihan Mulholland - ${item.label}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-display text-xl tracking-widest">{item.label}</p>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-card ring-1 ring-white/5 group">
              <SafeImage src="/images/Shihan/shihan-forest-kick.jpg" alt="Shihan Mulholland - high kick outdoors" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-display text-xl tracking-widest">Outdoors</p>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">High kick - open air</p>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-card ring-1 ring-white/5 group">
              <SafeImage src="/images/Shihan/shihan-outdoor-instruction-bw.jpg" alt="Shihan Mulholland - instruction outdoors" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-display text-xl tracking-widest">Instruction</p>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">Archive - outdoor session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B&W Photoshoot Video */}
      <section className="section-reveal py-20 lg:py-28 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-4">
              <span className="w-6 h-px bg-gold" />
              From the Book
              <span className="w-6 h-px bg-gold" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">More Shades of Black</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">Behind-the-scenes footage from the professional photoshoot for Shihan Mulholland&apos;s acclaimed book.</p>
          </div>
          <div className="relative rounded-sm overflow-hidden ring-1 ring-gold/20">
            <video
              className="w-full aspect-video bg-[#080808]"
              src="/videos/dkk_bw_photoshoot.mp4"
              poster="/images/Shihan/shihan-portrait-black.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* Interviews & Media */}
      <section className="section-reveal py-20 lg:py-28 bg-night border-t border-white/5">
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
                className="flex flex-col gap-3 p-5 bg-card border border-white/5 rounded-sm hover:border-brand/40 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-sm bg-brand/10 border border-brand/20 flex items-center justify-center">
                  <Mic className="text-brand" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    {item.title}
                    <ExternalLink size={11} className="text-gray-600 group-hover:text-brand transition-colors" />
                  </p>
                  <p className="text-brand text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">{item.source}</p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 items-start max-w-2xl">
            <Shield className="text-brand flex-shrink-0 mt-1" size={28} />
            <div>
              <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-1">Recognition</p>
              <h3 className="font-display text-2xl tracking-wide text-white mb-2">Combat Hall of Fame</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shihan Mulholland is a member of the Combat Hall of Fame, in recognition of his outstanding contribution to martial arts as an instructor, competitor, and author.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alongside Shihan Dan Lewis */}
      <section className="section-reveal py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-sm overflow-hidden bg-card w-full max-w-[360px]" style={{ aspectRatio: "4/5" }}>
                <SafeImage src="/images/dan_lewis.jpg" alt="Shihan Dan Lewis" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-display text-xl tracking-widest">Dan Lewis</p>
                  <p className="text-brand text-[10px] uppercase tracking-widest">Shihan &middot; <DanGrade text="7th Dan" /> &middot; Co-Founder</p>
                </div>
              </div>
            </div>
            <div>
              <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-3">
                <span className="w-6 h-px bg-gold" />
                Co-Founder of DKK
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none mb-5">Shihan Dan Lewis</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider rounded-sm">
                  <DanGrade text="7th Dan" />
                </span>
                {["Shihan", "Co-Founder", "Eskrima World Silver", "Unsung Hero BMA 2017"].map((badge) => (
                  <span key={badge} className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider rounded-sm">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed mb-5">
                Dan started his training in <strong className="text-white">Kyokushinkai Karate</strong> in the early 1980s under Shihan Bryan Dowler and Sensei Albert Burton. Having already developed a solid grounding in the hard side of martial arts, the change to Goju Ryu was an obvious choice. At this point he joined up with Gavin and, as their training, mindset, and teaching methods were so similar, setting up <em>Daigaku Karate Kai</em> together was a natural progression.
              </p>

              <p className="text-gray-400 leading-relaxed mb-5">
                Daniel&apos;s obsession with the arts led him to train in a wide range of different systems including <strong className="text-white">Mugendo Kick Boxing, Muay Thai, Eskrima, Ju-Jutsu, MFS (Modern Fighting System), Wing Chun</strong> and other Gung Fu systems. Like Gavin, he acknowledges the holistic nature of Goju Ryu, which encompasses elements from all of these seemingly distinct systems.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                A <strong className="text-white">British Champion in stick fighting (Eskrima)</strong>, Dan travelled to the Philippines as part of the English squad where he gained a <strong className="text-white">Silver medal at the Eskrima World Championships 2000</strong>. He also ran a security business in Bristol for nearly 20 years, working at the sharp end as a doorman. Generally the quieter of the two, Dan was presented with the <strong className="text-white">&apos;Unsung Hero&apos;</strong> award at <em>The British Martial Arts Awards</em> in 2017.
              </p>

              <Link href="/links" className="inline-flex items-center gap-2 text-brand font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                DKK Portishead <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
