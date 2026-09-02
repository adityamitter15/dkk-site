import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Bloomsbury",
  description:
    "Adult Okinawan Goju Ryu karate eleven minutes from Bloomsbury by tube (Piccadilly then Central to Oxford Circus), or a twenty-four minute walk. Monday and Wednesday, 6-8pm.",
  alternates: { canonical: "/karate-bloomsbury" },
  openGraph: { images: ["/og/home.jpg"] },
};

const faqs = [
  {
    q: "Is it walkable from Bloomsbury?",
    a: "It's about 24 minutes on foot from Russell Square, a mile, mostly flat. Plenty of people do it as a warm-up before class, but the tube is quicker if you're coming straight from work or a lecture.",
  },
  {
    q: "Do I need to change lines?",
    a: "Yes, once. Piccadilly line from Russell Square to Holborn, then the Central line two stops to Oxford Circus. The whole journey is about eleven minutes door to door.",
  },
  {
    q: "Do I need to be a student to train?",
    a: "No. DKK trains at the University of Westminster but is open to the public, and a large part of the club has no university connection at all.",
  },
];

export default function KarateBloomsburyPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-bloomsbury#page`,
    name: "Karate Near Bloomsbury",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Bloomsbury", path: "/karate-bloomsbury" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Bloomsbury"
        eyebrowTone="gold"
        folio="20 / Bloomsbury"
        title="Karate Near Bloomsbury"
        lead="Eleven minutes by tube from Russell Square, one change at Holborn."
        kanji="道場"
        kanjiTone="gold"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your Route" title="Russell Square to Oxford Circus" />

          <div className="flex flex-wrap items-center gap-3 mb-3 p-6 bg-card border border-white/5 rounded-sm">
            <span className="px-3 py-1.5 rounded-sm bg-[#003688] text-white text-xs font-bold uppercase tracking-wider">
              Piccadilly
            </span>
            <ArrowRight className="text-gray-600" size={16} aria-hidden="true" />
            <span className="text-white text-sm font-medium">Holborn</span>
            <ArrowRight className="text-gray-600" size={16} aria-hidden="true" />
            <span className="px-3 py-1.5 rounded-sm bg-[#E32017] text-white text-xs font-bold uppercase tracking-wider">
              Central
            </span>
            <ArrowRight className="text-gray-600" size={16} aria-hidden="true" />
            <span className="text-white text-sm font-medium">Oxford Circus</span>
          </div>
          <p className="text-gray-500 text-sm mb-10">
            About 11 minutes door to door, one change. Regent Street is a three-minute walk from the Oxford
            Circus exit.
          </p>

          <p className="text-gray-400 leading-relaxed mb-5">
            Bloomsbury runs on UCL, the British Museum and a good chunk of London&apos;s publishing industry, and
            none of it sits especially close to a dojo, which is exactly why a fixed Monday and Wednesday
            evening class, a short tube ride away, is easier to commit to than trying to find something
            closer that fits a research or teaching schedule.
          </p>
          <p className="text-gray-400 leading-relaxed">
            DKK trains Okinawan Goju Ryu under <DanGrade text="7th Dan" /> instructor{" "}
            <Link href="/shihan" className="link-underline text-gold">
              Shihan Gavin Mulholland
            </Link>{" "}
            at the University of Westminster&apos;s Regent Street building, its home since 1990.
          </p>
        </div>
      </section>

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Before You Come" title="Quick Questions" />
          <dl className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-white font-medium mb-2">{f.q}</dt>
                <dd className="text-gray-400 text-sm leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABand
        title="Come and see the dojo for yourself"
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street, W1B 2HW"
      />
    </>
  );
}
