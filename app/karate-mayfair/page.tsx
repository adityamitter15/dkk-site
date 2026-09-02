import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import { CheckCircle } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Mayfair",
  description:
    "Adult Okinawan Goju Ryu karate a sixteen-minute walk from Mayfair, on Regent Street at Oxford Circus. An evening class that fits around a working week, not a fitness fad.",
  alternates: { canonical: "/karate-mayfair" },
  openGraph: { images: ["/og/home.jpg"] },
};

const reasons = [
  "A fixed Monday and Wednesday slot, not a rolling class timetable you have to chase",
  "No membership tie-in and no joining fee to commit to before you've trained once",
  "Everyone trains on the same floor regardless of grade, so there's no beginner track to sit through first",
  "Real technique, taught by a 7th Dan who has trained the same two nights a week for over three decades",
];

export default function KarateMayfairPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-mayfair#page`,
    name: "Karate Near Mayfair",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Mayfair", path: "/karate-mayfair" }]} />

      <PageHero
        variant="split"
        eyebrow="Mayfair"
        folio="17 / Mayfair"
        title="Karate Near Mayfair"
        lead="Sixteen minutes on foot from Berkeley Square. Close enough to train straight after work, on your own two feet."
        image={{ src: "/images/Club/GavPunch.jpg", alt: "Shihan Gavin Mulholland striking pads" }}
        kanji="剛柔"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="From Berkeley Square" title="Sixteen Minutes, Flat" />
          <p className="text-gray-400 leading-relaxed mb-5">
            From Berkeley Square it&apos;s 0.7 miles up Conduit Street onto Regent Street, about sixteen minutes
            on foot and entirely flat, or a few stops on the Central line from Bond Street if you&apos;d rather
            arrive fresh. Either way it&apos;s a realistic straight-after-work distance, not a Tube-and-bus
            expedition to the other side of London.
          </p>
          <p className="text-gray-400 leading-relaxed">
            DKK is Okinawan Goju Ryu, taught by <DanGrade text="7th Dan" /> instructor Shihan Gavin
            Mulholland at the University of Westminster building on Regent Street, the club&apos;s home since
            1990. It&apos;s open to the public, not just students, and a large part of the membership works
            locally rather than studies here.
          </p>
        </div>
      </section>

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why People Stay" title="What You&apos;re Actually Signing Up For" />
          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle className="text-brand mt-0.5 flex-shrink-0" size={18} aria-hidden="true" />
                <span className="text-gray-300 leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm mt-8">
            309 Regent Street, London W1B 2HW · Monday &amp; Wednesday, 6:00pm to 8:00pm ·{" "}
            <Link href="/faq" className="link-underline text-gold">
              no uniform needed for your first class
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand
        title="Come and see the dojo for yourself"
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street, W1B 2HW"
      />
    </>
  );
}
