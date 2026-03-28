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
      { title: "DKK London - Instagram", description: "Follow DKK London on Instagram for training news, photos and updates.", href: "https://www.instagram.com/dkk_karate_london" },
      { title: "DKK Bristol", description: "Our sister club run by Shihan Dan Lewis, Bristol Combat Goju Ryu.", href: "http://www.gojukaratebristol.co.uk/" },
      { title: "DKK Oxfordshire", description: "Goju Ryu karate in Oxfordshire.", href: "https://www.gojukarateoxford.com/" },
      { title: "DKK Torbay", description: "Run by Sensei Mark Salomone.", href: "#" },
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
      { title: "Nick Hughes Combatives", description: "Fight survival training with Sensei Nick Hughes.", href: "#" },
      { title: "Kingston Ju-Jitsu", description: "University Ju-Jitsu club run by Sensei Saeed Jabbar.", href: "#" },
      { title: "Eastpoint Karate Club", description: "Run by Sensei Kevin Buxey.", href: "#" },
      { title: "Nindokan Karate", description: "Run by Sensei Kurt Buxey.", href: "#" },
    ],
  },
  {
    category: "Authors & Publishers",
    links: [
      { title: "Goran Powell", description: "Author of Chojun, A Sudden Dawn and Matryoshka. Outstanding martial arts fiction.", href: "https://www.goranpowell.com" },
      { title: "Summersdale Publishers", description: "Leading UK martial arts publisher.", href: "https://www.summersdale.com" },
      { title: "YMAA Publication Center", description: "Leading US martial arts publisher.", href: "https://ymaa.com" },
      { title: "Richard Pullar Photography", description: "Photographer of Four Shades of Black.", href: "#" },
    ],
  },
  {
    category: "MMA & Goju Ryu Resources",
    links: [
      { title: "Goju Ryu.net", description: "Leading Goju Ryu forum and information hub.", href: "https://www.gojuryu.net" },
      { title: "Sherdog", description: "MMA information, fighter stats and news.", href: "https://www.sherdog.com" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0e0c]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_#1a0000_0%,_transparent_70%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Resources
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4">Links</h1>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed">DKK clubs, affiliations, instructors, authors and martial arts resources.</p>
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
                      target={link.href !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-start justify-between gap-4 p-4 bg-[#141311] border rounded-sm transition-all duration-200 group ${
                        link.href !== "#"
                          ? "border-white/5 hover:border-[#a8201a]/40 cursor-pointer"
                          : "border-white/5 opacity-40 cursor-default"
                      }`}
                    >
                      <div>
                        <p className="text-white text-sm font-medium flex items-center gap-2">
                          {link.title}
                          {link.href !== "#" && <ExternalLink size={11} className="text-gray-600 group-hover:text-[#a8201a] transition-colors" />}
                          {link.href === "#" && <span className="text-[10px] text-gray-600 font-normal uppercase tracking-wider">URL pending</span>}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-xs mt-10 max-w-xl">
            Links marked &ldquo;URL pending&rdquo; have not yet been confirmed. Contact us if you know the correct URL. DKK London is not responsible for the content of external sites.
          </p>
        </div>
      </section>
    </>
  );
}
