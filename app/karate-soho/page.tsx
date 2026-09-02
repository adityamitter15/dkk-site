import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import StatStrip, { StatCell } from "@/components/ui/StatStrip";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Soho",
  description:
    "Adult Okinawan Goju Ryu karate a nine-minute walk from Carnaby Street and Soho, on Regent Street at Oxford Circus. Monday and Wednesday, 6-8pm. No uniform needed to start.",
  alternates: { canonical: "/karate-soho" },
  openGraph: { images: ["/og/home.jpg"] },
};

export default function KarateSohoPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-soho#page`,
    name: "Karate Near Soho",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Soho", path: "/karate-soho" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Soho"
        folio="16 / Soho"
        title="Karate Near Soho"
        lead="Nine minutes from Carnaby Street, straight up Regent Street to Oxford Circus."
        kanji="道場"
      />

      <StatStrip>
        <StatCell value="9 min" label="On Foot From Carnaby St" />
        <StatCell value="0.4 mi" label="Distance" />
        <StatCell value="Mon & Wed" label="Class Nights" />
        <StatCell value="6-8pm" label="Class Time" />
      </StatStrip>

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="A Short Walk North" title="Soho to the Dojo" />
          <p className="text-gray-400 leading-relaxed mb-5">
            Soho sits right across Regent Street from the club. From Carnaby Street it&apos;s a flat nine-minute
            walk up Argyll Street onto Regent Street and straight to Oxford Circus, an easy distance to
            cover between finishing work and the 6pm start, with no tube journey needed at all if you&apos;re
            already in W1.
          </p>
          <p className="text-gray-400 leading-relaxed mb-5">
            A lot of Soho works late and works odd hours, in hospitality, production, media and retail, which
            makes an evening class with a fixed 6-8pm slot easier to plan around than a rolling gym
            timetable. You don&apos;t need any martial arts background, and you don&apos;t need a gi for your first few
            sessions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            DKK is Okinawan Goju Ryu: a close-quarter, hard-and-soft system built around real technique
            rather than a workout dressed up as one. Everyone trains together regardless of grade, from
            complete beginners through to black belts.{" "}
            <Link href="/goju-ryu" className="link-underline text-gold">
              Read more about the style itself
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-reveal py-14 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 leading-relaxed">
            Led by <DanGrade text="7th Dan" /> instructor{" "}
            <Link href="/shihan" className="link-underline text-gold">
              Shihan Gavin Mulholland
            </Link>
            , training at the University of Westminster since 1990. See what a typical session covers on the{" "}
            <Link href="/training" className="link-underline text-gold">
              training page
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
