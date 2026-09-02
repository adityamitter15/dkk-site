import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate Near Fitzrovia",
  description:
    "Adult Okinawan Goju Ryu karate a nine-minute walk south from Fitzrovia, on Regent Street at Oxford Circus. Monday and Wednesday, 6-8pm.",
  alternates: { canonical: "/karate-fitzrovia" },
  openGraph: { images: ["/og/home.jpg"] },
};

const steps = [
  { step: "01", text: "Leave Charlotte Street heading south, through the quieter streets of Fitzrovia." },
  { step: "02", text: "Cross Oxford Street at Oxford Circus, the busiest few seconds of the walk." },
  { step: "03", text: "Straight onto Regent Street. 309 is a couple of minutes further down, on the left." },
];

export default function KarateFitzroviaPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-fitzrovia#page`,
    name: "Karate Near Fitzrovia",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Karate Near Fitzrovia", path: "/karate-fitzrovia" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Fitzrovia"
        eyebrowTone="gold"
        folio="18 / Fitzrovia"
        title="Karate Near Fitzrovia"
        lead="Nine minutes south, straight down through Fitzrovia and across Oxford Circus."
        kanji="道場"
        kanjiTone="gold"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading eyebrow="The Walk" title="Three Turns, Nine Minutes" />
              <ol className="space-y-6">
                {steps.map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <span className="font-display text-2xl text-gold/70 leading-none flex-shrink-0 pt-0.5">
                      {s.step}
                    </span>
                    <span className="text-gray-300 leading-relaxed pt-0.5">{s.text}</span>
                  </li>
                ))}
              </ol>
              <p className="text-gray-500 text-sm mt-8">0.4 miles from Charlotte Street. Flat throughout.</p>
            </div>

            <div>
              <SectionHeading eyebrow="Fitzrovia to the Floor" title="An Evening Class That Actually Fits" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Fitzrovia runs on media, advertising, tech and medicine (UCLH and the Harley Street corridor
                are a few minutes further north again), and none of that keeps office hours that suit a
                daytime gym slot. A fixed 6pm start twice a week is easier to hold onto than a class
                timetable that changes every month.
              </p>
              <p className="text-gray-400 leading-relaxed">
                DKK trains Okinawan Goju Ryu under <DanGrade text="7th Dan" /> instructor{" "}
                <Link href="/shihan" className="link-underline text-gold">
                  Shihan Gavin Mulholland
                </Link>{" "}
                : close-quarter, hard-and-soft, built for real use rather than points. No experience needed,
                and no need to buy a gi before you&apos;ve trained a few times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Come and see the dojo for yourself"
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street, W1B 2HW"
      />
    </>
  );
}
