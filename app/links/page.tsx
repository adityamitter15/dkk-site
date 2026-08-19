import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
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
      { title: "DKK Portishead", description: "Our sister club run by Shihan Dan Lewis. Junior and senior classes in Portishead, North Somerset.", href: "https://www.instagram.com/dkk_karate_portishead/" },
      { title: "DKK Bristol", description: "Bristol Combat Goju Ryu - our long-standing affiliate in the West Country.", href: "http://www.gojukaratebristol.co.uk/" },
      { title: "DKK Oxfordshire", description: "Run by Sensei Simon Clinch. Goju Ryu karate in Oxfordshire.", href: "https://www.gojukarateoxford.com/" },
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
      <PageHero
        variant="full"
        eyebrow="Resources"
        folio="11 / Links"
        title="Links"
        lead="DKK clubs, affiliations, instructors, authors and martial arts resources."
        image={{ src: "/images/Club/group-cross-monument.JPG", alt: "DKK group photo at the monument" }}
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="External Resources" title="Useful Links" />
          <div className="columns-1 lg:columns-2 gap-x-12 max-w-5xl">
            {linkGroups.map((group) => (
              <div key={group.category} className="mb-10 break-inside-avoid">
                <h3 className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-brand" />
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 p-4 bg-card border border-white/5 rounded-sm transition-all duration-200 group hover:border-brand/40"
                    >
                      <div>
                        <p className="text-white text-sm font-medium flex items-center gap-2">
                          {link.title}
                          <ExternalLink size={11} className="text-gray-600 group-hover:text-brand transition-colors" />
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
