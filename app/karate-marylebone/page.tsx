import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Marylebone",
  description:
    "Adult Okinawan Goju Ryu karate a fifteen-minute walk from Marylebone High Street, on Regent Street at Oxford Circus. Monday and Wednesday, 6-8pm.",
  alternates: { canonical: "/karate-marylebone" },
  openGraph: { images: ["/og/home.jpg"] },
};

export default function KarateMaryleboneePage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-marylebone#page`,
    name: "Karate Near Marylebone",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Marylebone", path: "/karate-marylebone" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Marylebone"
        folio="19 / Marylebone"
        title="Karate Near Marylebone"
        lead="Fifteen minutes down through Marylebone and along Weymouth Street to Regent Street."
        kanji="道場"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-2 border-brand/50 pl-6 mb-10">
            <p className="font-display text-3xl sm:text-4xl tracking-wide leading-tight text-white">
              Fifteen minutes from Marylebone High Street. Flat, direct, and done before you&apos;ve thought
              about it.
            </p>
          </blockquote>

          <p className="text-gray-400 leading-relaxed mb-10">
            Marylebone High Street to 309 Regent Street is 0.6 miles, about fifteen minutes down Weymouth
            Street or New Cavendish Street, past the Harley Street clinics, and onto Regent Street at Oxford
            Circus. Straightforward enough to do straight from a clinic or an office without needing to plan
            around it.
          </p>

          <SectionHeading eyebrow="What You'll Find" title="A Serious Class, Not a Workout" />

          <p className="text-gray-400 leading-relaxed mb-5">
            DKK is Okinawan Goju Ryu under <DanGrade text="7th Dan" /> instructor{" "}
            <Link href="/shihan" className="link-underline text-gold">
              Shihan Gavin Mulholland
            </Link>
            , training at the University of Westminster since 1990 and open to the public as well as
            students. Everyone trains together on the same floor regardless of grade: there&apos;s no
            beginners&apos; track to sit through before you join in properly.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Monday and Wednesday, 6:00pm to 8:00pm.{" "}
            <Link href="/faq" className="link-underline text-gold">
              No uniform needed for your first class
            </Link>
            , and no University of Westminster affiliation required.
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
