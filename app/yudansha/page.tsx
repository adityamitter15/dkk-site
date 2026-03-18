import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Yudansha — Black Belts",
  description: "The black belts of DKK London. Meet the yudansha who have earned their dan grades through years of demanding training.",
};

type Member = {
  name: string;
  portrait: string | null;
  action: string | null;
  bio?: string;
  quote?: string;
};

const grades: { grade: string; dan: string; members: Member[] }[] = [
  {
    grade: "Godan",
    dan: "5th Dan",
    members: [
      {
        name: "Tunde Oladimeji",
        portrait: "/images/Yudansha/Tundepot.gif",
        action: "/images/Yudansha/tundeact.gif",
        bio: "Tunde began karate training in 1998 during his final year as an undergraduate at the University of Westminster. While primarily trained in Goju Ryu, he has studied under multiple karate systems. Shodan 2004 · 30 Man Kumite & Nidan 2007 · Sandan 2011 · Yondan 2017 · Godan.",
        quote: "I believe one should train to the point where the whole combat process becomes natural and its application seemingly 'planned' and 'calculated'. I consider it a privilege to train with the calibre of people in the club.",
      },
    ],
  },
  {
    grade: "Yondan",
    dan: "4th Dan",
    members: [
      {
        name: "David Urquhart",
        portrait: "/images/Yudansha/davepot.gif",
        action: "/images/Yudansha/daveact.gif",
        bio: "David began his karate journey in 1998 under Sensei Mulholland at the old Meidokan dojo in West Hampstead. Shodan 2004 · 30 Man Kumite & Nidan 2007 · Sandan 2013 · Yondan 2017.",
        quote: "Training to me is a totally positive and life-affirming experience, learning skills and attitudes applicable and beneficial to all aspects of life.",
      },
      {
        name: "Ragi Marmar",
        portrait: "/images/Yudansha/ragi1.jpeg",
        action: "/images/Yudansha/ragi2.jpeg",
        bio: "Ragi began her Goju Ryu training in 2001 under Sensei Gavin Mulholland at Daigaku's Westminster Dojo. Shodan-Ho 2009 · Shodan 2010 · 30 Man Kumite & Nidan 2013 · Sandan 2016 · Yondan 2021.",
        quote: "Karate is a major part of my life and has had a positive impact on the way it is shaped. Through karate I have learnt that nothing is too difficult or distant for the mind that dares to believe.",
      },
      {
        name: "Simon Clinch",
        portrait: "/images/Yudansha/simon_clinch1.jpg",
        action: "/images/Yudansha/simon_clinch2.jpg",
        bio: "Simon began karate at his school's Shotokan club, achieving Shodan at age 18. After joining DKK in 2008, he progressed steadily through the ranks. Shodan-Ho 2009 · Shodan 2010 · 30 Man Kumite & Nidan 2013 · Sandan 2016 · Yondan 2021.",
        quote: "Training with the DKK has broadened my understanding of what it means to be a martial artist. Shihan Mulholland has shown that one must constantly learn from others.",
      },
      {
        name: "Simon Kluth",
        portrait: null,
        action: null,
        bio: "Simon began training in Wado Ryu Karate in 1985, earning his Brown Belt within three years. He later studied Goju Ryu with Chris Rowen, progressing to Sandan before joining DKK in 2000. Sandan DKK 2018 · Yondan 2021.",
        quote: "Two things inspire me at DKK: the vast knowledge base and holistic approach to combat — encompassing grappling, strikes, kicks and armed combat.",
      },
    ],
  },
  {
    grade: "Sandan",
    dan: "3rd Dan",
    members: [
      {
        name: "Daniel Bard",
        portrait: "/images/Yudansha/danny2.jpg",
        action: null,
        bio: "Daniel commenced Goju Ryu training at DKK under Sensei Mulholland beginning in 2000. Shodan-Ho Summer Camp 2007 · Shodan 2008 · 30 Man Kumite & Nidan Summer Camp 2014 · Sandan 2018.",
        quote: "Karate is something I began by chance and I am glad to have done so. I consider it to be an extremely positive influence on my life in many ways.",
      },
      {
        name: "Juha Makinen",
        portrait: "/images/Yudansha/juha1.jpg",
        action: "/images/Yudansha/juha2.jpg",
        bio: "Juha started karate in 1987 in Finland, earning 1st Dan in Wado Ryu by 1991. On relocating to London he joined DKK at the University of Westminster. Shodan-Ho 2011 · Shodan 2012 · 30 Man Kumite & Nidan 2014 · Sandan.",
        quote: "I found Goju Ryu to be based on more realistic self-defence and combat-style focused training, with harder physical workouts and sparring compared with my previous martial arts experiences.",
      },
      {
        name: "Karen Sheldon",
        portrait: "/images/Alumni/karen.jpg",
        action: "/images/Alumni/karenact.jpg",
        bio: "Karen began her karate training in October 1993 under Sensei Gavin Mulholland, maintaining continuous training from that day. Shodan June 2000 · Nidan June 2003 · Sandan April 2022.",
        quote: "Karate means different things to different martial artists. But for me, it has always been about my own personal struggle — mentally to beat the demons from within, and physically to improve my natural abilities.",
      },
      {
        name: "Laila Al-Minyawi",
        portrait: "/images/Yudansha/laila.jpeg",
        action: null,
        bio: "Laila began karate as a child and rejoined at university in 2005 with a Shotokan club, transferring to DKK in 2007. Shodan-Ho Summer 2013 · Shodan 2014 · 30 Man Kumite & Nidan Winter Camp 2016 · Sandan April 2022.",
        quote: "I wanted to train where my fitness was challenged while learning self-protection. DKK provided that and taught me control, inner strength, resilience, and how to surpass my own limits.",
      },
      {
        name: "Mark Salomone",
        portrait: "/images/Alumni/mark.gif",
        action: "/images/Alumni/markact.gif",
        bio: "Mark started boxing in the early 1990s and began Shotokan shortly after. He transitioned to Goju Ryu under Sensei Mulholland in 1994, training until 2002. Shodan June 1998 · Nidan Summer Camp 2001 · Sandan. He now runs Torbay Goju Ryu Karate under the DKK banner.",
        quote: undefined,
      },
      {
        name: "Mike Thornton",
        portrait: "/images/Yudansha/mike_website1.jpg",
        action: "/images/Yudansha/mike_website2.jpg",
        bio: "Mike joined DKK in 2007 with a prior black belt in Taekwondo from New Zealand. Shodan-Ho 2009 · Shodan 2010 · 30 Man Kumite & Nidan 2015 · Sandan.",
        quote: "I was impressed with the student calibre and Sensei Mulholland's teaching. Goju Karate presents the ongoing challenge of mastering the hard/soft relationship in training.",
      },
      {
        name: "Richard Gaillard",
        portrait: "/images/Yudansha/richgaypot.gif",
        action: "/images/Yudansha/rich.jpg",
        bio: "Richard began martial arts at age 15 under Hanshi Steve Arneil (Kyokushinkai), later training in Wado-Ryu and Shorinji Kempo before joining DKK under Shihan Dan Lewis, then Shihan Mulholland in London. Shodan-Ho 2005 · Shodan June 2006 · Sandan 2015.",
        quote: "Through DKK, I have been given the opportunity to push myself beyond what I thought were my limits and achieve what I thought was beyond me.",
      },
    ],
  },
  {
    grade: "Nidan",
    dan: "2nd Dan",
    members: [
      {
        name: "Catherine Sandwell",
        portrait: "/images/Yudansha/catherine1.jpg",
        action: "/images/Yudansha/catherine2.jpg",
        bio: "Catherine began karate at age 12 in Shotokan, earning her first black belt at 18. After discovering DKK in her final year at university she attended the 2011 Summer School, later returning to London. Shodan-Ho 2015 · Shodan 2016 · 30 Man Kumite & Nidan Summer 2019.",
        quote: "Of all the places I've trained, nowhere else have I been surrounded by so many people who work so hard to push each other past what they thought were their limits.",
      },
      {
        name: "Daniel Bradley",
        portrait: "/images/Yudansha/photo1.JPG",
        action: "/images/Yudansha/photo2.JPG",
        bio: "Daniel trained in Judo as a child before exploring various karate clubs as an adult. He joined DKK in 2007. Shodan-Ho Summer 2013 · Shodan 2014 · 30 Man Kumite & Nidan 2017.",
        quote: "From the first class, training with DKK was a kick to the gut — both literally and metaphorically. The sweet thrill of fear I feel walking into the dojo is a big part of what I love about it.",
      },
      {
        name: "Luke Wilcox",
        portrait: "/images/Yudansha/luke.jpg",
        action: null,
        bio: "Luke began martial arts at age 10 with judo and shokokai karate, later becoming an instructor in wing chun. After a hiatus he discovered Okinawan Goju through DKK in 2016. DKK badge 2017 · Shodan-Ho 2021 · Shodan 2022 · 30 Man Kumite & Nidan Summer 2025.",
        quote: "In DKK and Shihan Mulholland, I found exactly what I was looking for in a martial arts association. The people who make up DKK are just a joy to spend time with.",
      },
      {
        name: "Marianette Violeta",
        portrait: "/images/Yudansha/marianette2.jpg",
        action: null,
        bio: "Marianette began karate in 2000 seeking fitness and martial arts training. After earning her 1st Dan in combined Shotokan and Goju, she explored taekwondo, Wing Chun and kickboxing before joining DKK. Shodan-Ho 2015 · Shodan 2016 · 30 Man Kumite & Nidan 2019.",
        quote: "DKK has taught me so much about myself, my life and my indomitable spirit, where my perseverance and integrity is tested every time.",
      },
      {
        name: "Seki Lynch",
        portrait: "/images/Yudansha/seki.jpg",
        action: null,
        bio: "Seki began training with DKK London and progressed steadily through the ranks. Shodan-Ho \u00b7 Shodan \u00b7 30 Man Kumite & Nidan Summer 2025.",
        quote: undefined,
      },
      {
        name: "Mizuki Murai",
        portrait: "/images/Yudansha/miki1.jpg",
        action: "/images/Yudansha/miki2.jpg",
        bio: "Mizuki began training in 2006 under Sensei Lewis at DKK Bristol while at the University of Bristol, relocating to London and joining DKK London. Shodan-Ho Summer Camp 2010 · Shodan Summer Camp 2014 · Nidan 2021.",
        quote: "Having come from a background in ballet, I wanted to try something completely different. DKK has been a fundamental part of my life ever since. The breadth of Goju Ryu and the depth to which we study it fascinates me.",
      },
    ],
  },
  {
    grade: "Shodan",
    dan: "1st Dan",
    members: [
      {
        name: "Alex Haslehurst",
        portrait: null,
        action: null,
      },
      {
        name: "Alexey Kryazhev",
        portrait: "/images/Yudansha/ak_kata.jpeg",
        action: "/images/Yudansha/ak_kata2.jpeg",
        bio: "Alexey first experienced Okinawan karate in the Channel Islands and joined DKK as a white belt the day after returning to London in autumn 2016. Shodan-Ho 2023 · Shodan Summer Camp 2024.",
        quote: undefined,
      },
      {
        name: "Glenn Malpass",
        portrait: null,
        action: null,
        bio: "Glenn began training in Goju Ryu at age 14 in Canvey Island. At the University of Westminster he connected with Sensei Mulholland and earned Shodan-Ho in 1998. After relocating to Oxford his training became sporadic until resuming contact during pandemic online sessions. Full Shodan Summer Camp 2021.",
        quote: "Training was always meaningful, hard, and developed spirit. The skills I learnt augmented my physical techniques in every other sport I still play today.",
      },
      {
        name: "Mark Haslehurst",
        portrait: "/images/Yudansha/mark_haslehurst1.jpeg",
        action: "/images/Yudansha/mark_haslehurst2.jpeg",
        bio: "Mark started training under Shihan Lewis between 2006 and 2010 while studying in Bristol and rejoined DKK as a 10th Kyu under Shihan Mulholland in 2017. He was badged into DKK in the summer of 2018 and achieved the rank of Shodan in 2023.",
        quote: undefined,
      },
      {
        name: "Sidney Ushurhe",
        portrait: "/images/Yudansha/sidney1.jpg",
        action: "/images/Yudansha/sidney2.jpg",
        bio: "Sidney began training in Goju Ryu karate in 2005, joining DKK London that year. He describes his first class as transformative despite initial nerves about sparring with a much larger partner. Shodan-Ho 2020 · Full Shodan Summer Camp 2022.",
        quote: "The fight-or-flee rush of my first class isn't one I'll easily ever forget. I found myself replaying every movement in my head over and over again like a movie.",
      },
    ],
  },
];

function MemberCard({ member, dan }: { member: Member; dan: string }) {
  const hasImage = member.portrait || member.action;
  const primaryImg = member.portrait || member.action;
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <div className="bg-[#111] border border-white/5 hover:border-[#c0392b]/30 transition-all duration-300 rounded-sm overflow-hidden group">
      {/* Image area */}
      <div className="relative bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: "4/5" }}>
        {hasImage && primaryImg ? (
          <>
            <SafeImage
              src={primaryImg}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {member.action && member.action !== primaryImg && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SafeImage
                  src={member.action}
                  alt={`${member.name} — action`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
            <span className="font-['Bebas_Neue'] text-5xl text-[#c0392b]/30 tracking-widest">{initials}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#c0392b] rounded-sm">
          <span className="text-white text-[10px] font-bold uppercase tracking-wider">{dan}</span>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-white font-semibold text-sm leading-tight mb-1">{member.name}</p>
        {member.bio && (
          <p className="text-gray-500 text-[11px] leading-relaxed">{member.bio}</p>
        )}
        {member.quote && (
          <p className="text-gray-600 text-[11px] italic mt-1.5 leading-relaxed border-l border-[#c0392b]/40 pl-2">&ldquo;{member.quote}&rdquo;</p>
        )}
        {!member.bio && member.action && member.portrait && (
          <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-0.5">Hover to see action</p>
        )}
      </div>
    </div>
  );
}

export default function YudanshaPage() {
  const tunde = grades[0].members[0];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Black Belts
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-2">Yudansha</h1>
          <p className="font-['Bebas_Neue'] text-3xl text-[#c0392b]/40 tracking-widest mb-6">有段者</p>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <SectionHeading eyebrow="Dan Grades" title="The Black Belts of DKK London" />
            <p className="text-gray-400 leading-relaxed">
              Yudansha (有段者) refers to those holding a dan grade. At DKK London, grades are earned on genuine ability — not time served. Every name below represents years of demanding training under Shihan Mulholland&apos;s exacting standards.
            </p>
          </div>

          {/* Featured Godan */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-8 bg-[#c0392b] rounded-sm" />
              <div>
                <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[0.2em]">Godan</p>
                <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">5th Dan</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0 bg-[#111] border border-[#c0392b]/20 rounded-sm overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                {tunde.portrait && (
                  <SafeImage src={tunde.portrait} alt={tunde.name} fill className="object-cover object-center" />
                )}
              </div>
              <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#c0392b] text-white text-xs font-bold uppercase tracking-wider rounded-sm">5th Dan</span>
                  <span className="text-[#c0392b] text-xs uppercase tracking-wider">Godan</span>
                </div>
                <p className="font-['Bebas_Neue'] text-4xl text-white tracking-wide mb-4">{tunde.name}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{tunde.bio}</p>
                {tunde.quote && (
                  <blockquote className="border-l-2 border-[#c0392b] pl-4">
                    <p className="text-gray-300 text-sm italic leading-relaxed">&ldquo;{tunde.quote}&rdquo;</p>
                  </blockquote>
                )}
              </div>
            </div>
          </div>

          {/* Remaining grades */}
          {grades.slice(1).map((tier) => (
            <div key={tier.grade} className="mb-14">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-2 h-8 bg-[#c0392b]/60 rounded-sm" />
                <div>
                  <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[0.2em]">{tier.grade}</p>
                  <h2 className="font-['Bebas_Neue'] text-3xl text-white tracking-wide">{tier.dan}</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {tier.members.map((member) => (
                  <MemberCard key={member.name} member={member} dan={tier.dan} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#c0392b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-white tracking-wide">Start your journey</p>
            <p className="text-white/70 text-sm mt-1">Every Yudansha above started exactly where you are now.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 px-8 py-4 bg-white text-[#c0392b] font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors rounded-sm inline-flex items-center gap-2">
            Join Now <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
