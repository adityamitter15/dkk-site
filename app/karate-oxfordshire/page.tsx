import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import StatStrip, { StatCell } from "@/components/ui/StatStrip";
import { MapPin, Clock, ExternalLink, ChevronRight, Instagram, Globe } from "lucide-react";
import ReelShowcase from "@/components/ui/ReelShowcase";
import { simonClinchReels, isoDuration } from "@/data/reels";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate in Oxfordshire",
  description:
    "Adult Okinawan Goju Ryu karate in Buckinghamshire, near Thame, Bicester, Aylesbury and Oxford. DKK Oxfordshire trains Monday in Oakley and Thursday in Brill, taught by Sensei Simon Clinch, 4th Dan. Beginners welcome, 16 and over.",
  alternates: { canonical: "/karate-oxfordshire" },
  openGraph: { images: ["/og/home.jpg"] },
};

const venues = [
  {
    id: "oakley-village-hall",
    day: "Monday",
    time: "7:00pm - 8:30pm",
    venue: "Oakley Village Hall",
    street: "9 Oxford Road",
    locality: "Oakley",
    postcode: "HP18 9RS",
    addressLine: "9 Oxford Road, Oakley, Bucks, HP18 9RS",
    mapUrl: "https://maps.app.goo.gl/jnqjMNQKbRCm6fmCA",
    opens: "19:00",
    closes: "20:30",
  },
  {
    id: "brill-memorial-hall",
    day: "Thursday",
    time: "7:30pm - 9:00pm",
    venue: "Brill Memorial Hall",
    street: "19 Church St",
    locality: "Brill",
    postcode: "HP18 9RT",
    addressLine: "19 Church St, Brill, Aylesbury HP18 9RT",
    mapUrl: "https://maps.app.goo.gl/JRbY289Y33ocM4sm6",
    opens: "19:30",
    closes: "21:00",
  },
] as const;

/* Distance leads each card so the section reads as a distance table at a
 * glance, the way StatStrip does elsewhere on the site, rather than as four
 * paragraphs in boxes. Mileages are approximate and the copy says so. */
const towns = [
  { name: "Thame", miles: "6", dir: "South", body: "On the Oxfordshire side of the border, and the closest of the four to both halls." },
  { name: "Bicester", miles: "8", dir: "West", body: "Along the back roads, well under twenty minutes by car." },
  { name: "Aylesbury", miles: "9", dir: "North-East", body: "Straight up the A41, the nearer of Buckinghamshire's two county towns." },
  { name: "Oxford", miles: "12", dir: "South-West", body: "Inside half an hour outside rush hour." },
] as const;

export default function KarateOxfordshirePage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/karate-oxfordshire#page`,
    name: "Karate in Oxfordshire",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  const venueJsonLd = venues.map((v) => ({
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${site.url}/karate-oxfordshire#${v.id}`,
    name: `DKK Oxfordshire, ${v.venue}`,
    url: `${site.url}/karate-oxfordshire`,
    sport: "Karate",
    address: {
      "@type": "PostalAddress",
      streetAddress: v.street,
      addressLocality: v.locality,
      addressRegion: "Buckinghamshire",
      postalCode: v.postcode,
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: v.day,
      opens: v.opens,
      closes: v.closes,
    },
    parentOrganization: { "@id": `${site.url}/#organization` },
  }));

  /* The same clips also appear on /yudansha/simon-clinch, so the @id is scoped
   * to this page. A video may legitimately sit on more than one URL; what it
   * must not do is claim the same node identity in two places. */
  const videoJsonLd = simonClinchReels.map((reel) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${site.url}/karate-oxfordshire#video-${reel.slug}`,
    name: reel.title,
    description: reel.description,
    thumbnailUrl: `${site.url}${reel.basePath}.jpg`,
    contentUrl: `${site.url}${reel.basePath}.mp4`,
    uploadDate: reel.uploadDate,
    duration: isoDuration(reel.duration),
    isFamilyFriendly: true,
    publisher: { "@id": `${site.url}/#organization` },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {venueJsonLd.map((data) => (
        <script
          key={data["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      {videoJsonLd.map((data) => (
        <script
          key={data["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Breadcrumbs trail={[{ name: "DKK Oxfordshire", path: "/karate-oxfordshire" }]} />

      <PageHero
        variant="split"
        eyebrow="DKK Oxfordshire"
        folio="21 / Oxfordshire"
        title="Karate in Oxfordshire"
        lead="Traditional Okinawan Goju Ryu in the Buckinghamshire villages of Oakley and Brill, between Thame, Bicester, Aylesbury and Oxford."
        image={{
          src: "/images/Yudansha/simon_clinch_studio.jpg",
          alt: "Sensei Simon Clinch, 4th Dan, founder of DKK Oxfordshire, in a Goju Ryu ready stance",
          /* The source is a 626x1200 portrait with his head in the top ~15%.
           * object-cover in this near-square container crops from the centre by
           * default, which cut his head off entirely and left only the belt.
           * Anchoring to the top keeps the face and the raised hand in frame. */
          position: "50% 0%",
        }}
        kanji="道場"
      />

      <StatStrip>
        <StatCell value="Mon & Thu" label="Class Nights" />
        <StatCell value="16+" label="Adults Only" />
        <StatCell value="2024" label="Branch Founded" />
        <StatCell value="Oakley & Brill" label="Bucks Villages" />
      </StatStrip>

      {/* Venues */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Where We Train" title="Two Halls, One Branch" />
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-10">
            DKK Oxfordshire trains twice a week in two neighbouring Buckinghamshire villages, about two
            miles apart on the edge of the Oxfordshire border. Run by Sensei Simon Clinch under the same
            Okinawan Goju Ryu syllabus and lineage as DKK London, founded in 1990.
          </p>
          {/* Full grid width, not capped to max-w-4xl. Capping a two-up grid
              inside a max-w-7xl shell read as truncated rather than as a
              deliberate narrow column. The prose above stays narrow, which is
              the gutter rule working as intended. Cards are bg-coal so they
              separate from the bg-night band. */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {venues.map((v) => (
              <div
                key={v.id}
                className="group relative p-7 sm:p-9 bg-coal border border-white/10 rounded-sm hover:border-brand/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">
                      {v.day}
                    </p>
                    <p className="text-brand text-sm font-semibold uppercase tracking-[0.2em] mt-3">
                      {v.time}
                    </p>
                  </div>
                  <Clock className="text-white/15 flex-shrink-0" size={30} aria-hidden="true" />
                </div>

                <div className="h-px w-full bg-white/10 my-6" aria-hidden="true" />

                <div className="flex gap-3 items-start">
                  <MapPin className="text-brand flex-shrink-0 mt-1" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-white font-display text-xl sm:text-2xl tracking-wide leading-none">
                      {v.venue}
                    </p>
                    <a
                      href={v.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand text-sm inline-flex items-center gap-1.5 mt-2 transition-colors"
                    >
                      {v.addressLine} <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby towns - real travel context, not keyword stuffing */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Getting Here" title="Karate Near Thame, Bicester, Aylesbury & Oxford" />
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-10">
            Both halls sit in open Buckinghamshire countryside on the Oxfordshire border, so most people
            drive in. Approximate distances from the towns nearest the dojo:
          </p>

          {/* These previously used bg-card ON a bg-card section with a white/5
              border, so they read as flat. The separation now comes mostly from
              the stronger white/10 border; bg-night over bg-card is only about a
              1.04:1 luminance step, so it recesses the card slightly but is not
              what makes the edge visible. */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {towns.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-night border border-white/10 rounded-sm hover:border-brand/40 transition-colors"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-brand tracking-wide leading-none tabular-nums">
                    {t.miles}
                  </span>
                  <span className="text-brand/70 text-sm font-semibold uppercase tracking-[0.15em]">mi</span>
                </div>
                <p className="font-display text-2xl text-white tracking-wide leading-none mt-4">{t.name}</p>
                <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-[0.2em] mt-1.5">
                  {t.dir}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 max-w-2xl">
              <SectionHeading eyebrow="Goju Ryu Oxfordshire" title="Sensei Simon Clinch" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Simon began training in Shotokan karate at school, reaching Shodan at eighteen. He joined
                DKK in 2008 and progressed under <DanGrade text="7th Dan" /> instructor{" "}
                <Link href="/shihan" className="link-underline text-gold">
                  Shihan Gavin Mulholland
                </Link>{" "}
                at the club&apos;s Regent Street dojo, reaching Nidan in 2013, Sandan in 2016 and{" "}
                <DanGrade text="4th Dan" className="text-white" /> in 2021.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                In 2024 he founded DKK Oxfordshire, teaching the same traditional, combat-orientated
                Okinawan Goju Ryu taught in London since 1990, two nights a week in Oakley and Brill.
              </p>
              <Link href="/yudansha/simon-clinch" className="link-underline text-gold inline-flex items-center gap-1.5">
                Read Simon&apos;s full profile <ChevronRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.gojukarateoxford.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-5 bg-card border border-white/10 rounded-sm hover:border-gold/40 transition-colors group"
              >
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                    DKK Oxfordshire&apos;s Own Site
                  </p>
                  <p className="text-white font-display text-xl tracking-wide">gojukarateoxford.com</p>
                </div>
                <Globe className="text-gray-400 group-hover:text-gold transition-colors flex-shrink-0" size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/dkkoxfordshire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-5 bg-card border border-white/10 rounded-sm hover:border-gold/40 transition-colors group"
              >
                <div>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                    Follow The Branch
                  </p>
                  <p className="text-white font-display text-xl tracking-wide">@dkkoxfordshire</p>
                </div>
                <Instagram className="text-gray-400 group-hover:text-gold transition-colors flex-shrink-0" size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technique breakdowns filmed at the two halls. Self-hosted rather than
       * embedded: the site CSP does not allow instagram.com in frame-src, and an
       * Instagram iframe would put Meta cookies on a deliberately cookieless
       * site. Self-hosting also keeps the VideoObject schema (and so the video
       * rich-result eligibility) on this page rather than handing it to Meta. */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="From the Dojo"
            title="Technique Breakdowns"
          />
          <ReelShowcase
            reels={simonClinchReels}
            intro="Short technique breakdowns filmed during class at Oakley and Brill. They are the quickest way to see how the style actually moves before you turn up."
          />
        </div>
      </section>

      {/* What a class is like */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What To Expect" title="What A Class Is Like" />
          <p className="text-gray-400 leading-relaxed mb-5">
            Every session follows the same traditional Okinawan Goju Ryu syllabus taught in London since
            1990: kata, pad work, controlled kumite and ne-waza, hard and soft technique built for
            close-quarter reality rather than points. Complete beginners train on the same floor as
            existing black belts.
          </p>
          <p className="text-gray-400 leading-relaxed">
            No uniform needed. Just turn up in something you can move in for your first session.{" "}
            <Link href="/contact#fees" className="link-underline text-gold">
              Ask about current fees
            </Link>{" "}
            rather than relying on a figure published elsewhere, and{" "}
            <Link href="/faq" className="link-underline text-gold">
              read more about what to expect
            </Link>{" "}
            before you arrive.
          </p>
        </div>
      </section>

      <CTABand
        title="Come and train with DKK Oxfordshire"
        sub="Monday · Oakley Village Hall / Thursday · Brill Memorial Hall"
      />
    </>
  );
}
