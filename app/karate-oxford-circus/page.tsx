import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import { MapPin, Clock, TrainFront } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Oxford Circus",
  description:
    "Adult Okinawan Goju Ryu karate three minutes from Oxford Circus station. Monday and Wednesday, 6-8pm, inside the University of Westminster building on Regent Street. Beginners welcome.",
  alternates: { canonical: "/karate-oxford-circus" },
  openGraph: { images: ["/og/home.jpg"] },
};

export default function KarateOxfordCircusPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-oxford-circus#page`,
    name: "Karate Near Oxford Circus",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Oxford Circus", path: "/karate-oxford-circus" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Oxford Circus"
        folio="15 / Oxford Circus"
        title="Karate at Oxford Circus"
        lead="Three minutes' walk from the station. The dojo isn't near Oxford Circus, it's on it."
        kanji="道場"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 max-w-2xl">
              <SectionHeading eyebrow="On Your Doorstep" title="Closer Than You'd Think" />
              <p className="text-gray-400 leading-relaxed mb-5">
                309 Regent Street is inside the University of Westminster building, a straight three-minute
                walk down Regent Street from Oxford Circus underground station. The exit for the Central,
                Victoria and Bakerloo lines puts you almost directly outside the door. If you work or study
                around Oxford Circus, Regent Street or the top of Bond Street, this is the closest serious
                karate club there is.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                DKK has trained in this exact building since 1990. It isn&apos;t a satellite class rented out for
                the evening, it&apos;s the club&apos;s permanent home, and it&apos;s the oldest sports club at the
                University of Westminster. Training is open to the public as well as students, and roughly
                half the club has no connection to the university at all.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Classes run Monday and Wednesday, 6pm to 8pm, easy enough to reach straight from an office
                nearby, or straight after a lecture if you&apos;re a Westminster student.{" "}
                <Link href="/faq" className="link-underline text-gold">
                  No uniform needed for your first class, just turn up.
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <TrainFront size={14} /> From the Station
                </div>
                <p className="text-white text-sm leading-relaxed">
                  Exit Oxford Circus onto Regent Street and head south. 0.1 miles, about 3 minutes on foot,
                  mostly flat.
                </p>
              </div>
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <MapPin size={14} /> Address
                </div>
                <p className="text-white text-sm leading-relaxed">
                  309 Regent Street, London W1B 2HW. University of Westminster, Regent Street campus.
                </p>
              </div>
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <Clock size={14} /> Class Times
                </div>
                <p className="text-white text-sm leading-relaxed">Monday &amp; Wednesday, 6:00pm to 8:00pm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal py-14 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 leading-relaxed">
            Taught by <DanGrade text="7th Dan" /> instructor{" "}
            <Link href="/shihan" className="link-underline text-gold">
              Shihan Gavin Mulholland
            </Link>
            , authentic Okinawan Goju Ryu: hard, soft, and built for close-quarter reality rather than
            points. Read what a class actually involves on the{" "}
            <Link href="/training" className="link-underline text-gold">
              training page
            </Link>
            . DKK also runs a branch further out in Buckinghamshire, taught by Sensei Simon Clinch -
            see{" "}
            <Link href="/karate-oxfordshire" className="link-underline text-gold">
              DKK Oxfordshire
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
