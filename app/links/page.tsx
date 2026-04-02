import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Links",
  description: "Useful links and resources for DKK clubs, martial arts instructors, authors, and Goju Ryu resources.",
};

const linkGroups = [
  {
    category: "DKK Clubs",
    links: [
      { title: "DKK London - Facebook", description: "Join the DKK London Facebook group for news, discussion and updates.", href: "https://www.facebook.com/groups/24449490051/" },
      { title: "DKK London - Instagram", description: "Follow DKK London on Instagram for training news, photos and updates.", href: "https://www.instagram.com/dkk_karate_london" },
      { title: "DKK Bristol", description: "Our sister club run by Shihan Dan Lewis, Bristol Combat Goju Ryu.", href: "http://www.gojukaratebristol.co.uk/" },
      { title: "DKK Oxfordshire", description: "Run by Sensei Simon Clinch. Goju Ryu karate in Oxfordshire.", href: "https://www.gojukarateoxford.com/" },
      { title: "DKK Switzerland", description: "DKK Schweiz in Lucerne, run by Sensei Catherine Sandwell.", href: "https://www.goju-karate.ch/" },
      { title: "DKK Portishead", description: "DKK Bristol junior and senior classes in Portishead, North Somerset.", href: "https://www.instagram.com/dkk_karate_portishead/" },
    ],
  },
  {
    category: "Affiliations",
    links: [
      { title: "Westminster Students' Union", description: "DKK London's affiliation at the University of Westminster.", href: "https://www.uwsu.com" },
    ],
  },
  {
    category: "Martial Arts Instructors",
    links: [
      { title: "Iain Abernethy", description: "Leading practical karate writer and instructor. Essential resource for bunkai and applied karate.", href: "https://iainabernethy.co.uk" },
      { title: "Geoff Thompson", description: "One of the world's foremost karate and self-defence authors and instructors.", href: "https://www.geoffthompson.com" },
      { title: "Nick Hughes Combatives", description: "Fight survival training with Sensei Nick Hughes.", href: "https://www.nickhughescombatives.com" },
    ],
  },
  {
    category: "Authors & Publishers",
    links: [
      { title: "Goran Powell", description: "Author of Chojun, A Sudden Dawn, Matryoshka and Waking Dragons. British Martial Arts Awards Writer of the Year 2017.", href: "https://www.goranpowell.com" },
      { title: "Summersdale Publishers", description: "Leading UK martial arts publisher.", href: "https://www.summersdale.com" },
      { title: "YMAA Publication Center", description: "Leading US martial arts publisher.", href: "https://ymaa.com" },
    ],
  },
  {
    category: "Podcasts & Interviews",
    links: [
      { title: "\"Karate Doesn't Exist\" - WOMA", description: "Shihan Mulholland on Goju Ryu history and the meaning of karate.", href: "https://www.worldofmartialarts.tv/karate-doesnt-exist-gavin-mulholland-goju-ryu-interview/" },
      { title: "Kung-fu Kingdom Interview", description: "Comprehensive biographical interview with Shihan Mulholland.", href: "https://kungfukingdom.com/interview-with-gavin-mulholland/" },
      { title: "MartialFocus Podcast Ep. 60", description: "Training philosophy and the DKK approach.", href: "https://martialfocus.podbean.com/e/episode-sixty-gavin-mulholland/" },
    ],
  },
  {
    category: "MMA & Goju Ryu Resources",
    links: [
      { title: "Goju Ryu.net", description: "Leading Goju Ryu forum and information hub.", href: "https://www.gojuryu.net" },
      { title: "Sherdog", description: "MMA information, fighter stats and news.", href: "https://www.sherdog.com" },
      { title: "Neil Grove - Sherdog", description: "Fight record for DKK's Neil \"Goliath\" Grove. 12-8-1 pro MMA record.", href: "https://www.sherdog.com/fighter/Neil-Grove-23219" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <SafeImage src="/images/Camp/summer-camp-group.JPG" alt="" fill className="object-cover opacity-40" style={{ objectPosition: "center 25%" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Resources
          </p>
          <h1 className="font-['Bebas_Neue'] text-7xl sm:text-8xl lg:text-[9rem] text-white tracking-wide leading-none mb-4">Links</h1>
          <p className="text-gray-300 text-lg max-w-lg font-light leading-relaxed">DKK clubs, affiliations, instructors, authors and martial arts resources.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="External Resources" title="Useful Links" />
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            {linkGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-[#a8201a] text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#a8201a]" />
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 p-4 bg-[#141311] border border-white/5 rounded-sm transition-all duration-200 group hover:border-[#a8201a]/40"
                    >
                      <div>
                        <p className="text-white text-sm font-medium flex items-center gap-2">
                          {link.title}
                          <ExternalLink size={11} className="text-gray-600 group-hover:text-[#a8201a] transition-colors" />
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-10 max-w-xl">
            DKK London is not responsible for the content of external sites.
          </p>
        </div>
      </section>
    </>
  );
}
