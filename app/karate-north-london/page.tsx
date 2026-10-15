import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import SafeImage from "@/components/SafeImage";
import StatStrip, { StatCell } from "@/components/ui/StatStrip";
import TrackedOutbound from "@/components/TrackedOutbound";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { MapPin, Clock, ExternalLink, ChevronRight, TrainFront, Bus, MessageCircle } from "lucide-react";
import { site, shihans, joining, thursdayClass } from "@/data/site";
import { danOf, danHistory, member } from "@/lib/members";

/*
 * DKK London's Thursday class, in Totteridge. One real page for the area, in
 * the pattern of /karate-oxfordshire: the nearby districts are covered in
 * honest travel prose below, never as separate thin town pages, which would be
 * the doorway pattern. Distances are straight-line from the school's map pin
 * (Ordnance Survey place centroids via postcodes.io) and the transport lines
 * come from TfL's own stop and route data, checked 2026-10-15.
 */

const ragi = thursdayClass.instructorSlug;

export const metadata: Metadata = {
  title: "Karate in Totteridge, North London",
  description: `Adult Goju Ryu karate in Totteridge, N20, near Whetstone and Barnet. Thursdays 6:15-8pm at St Andrew's C of E School with Sensei Ragi Marmar, ${danOf(ragi)}.`,
  alternates: { canonical: thursdayClass.page },
  openGraph: { images: ["/og/home.jpg"] },
};

/* Distance leads each card so the row reads as a distance table, matching
 * /karate-oxfordshire. Every travel line here is checked against TfL data. */
const nearby = [
  { name: "Whetstone", miles: "1", dir: "East", body: "Straight along Totteridge Lane, and the 251 bus runs the whole way." },
  { name: "North Finchley", miles: "1.4", dir: "South-East", body: "Up the High Road to Whetstone, then west along Totteridge Lane." },
  { name: "Mill Hill", miles: "1.6", dir: "South-West", body: "The 251 runs from Mill Hill Broadway to Totteridge Green." },
  { name: "Barnet", miles: "1.7", dir: "North", body: "High Barnet is one stop up the Northern line from Totteridge & Whetstone." },
] as const;

export default function KarateNorthLondonPage() {
  const ragiMember = member(ragi);
  const ragiSteps = danHistory(ragi);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${thursdayClass.page}#page`,
    name: "Karate in Totteridge, North London",
    isPartOf: { "@id": `${site.url}/#organization` },
    about: { "@id": `${site.url}/#organization` },
  };

  const venueJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${site.url}${thursdayClass.page}#totteridge`,
    name: `DKK London, ${thursdayClass.venue}`,
    url: `${site.url}${thursdayClass.page}`,
    sport: "Karate",
    address: {
      "@type": "PostalAddress",
      streetAddress: thursdayClass.street,
      addressLocality: thursdayClass.locality,
      addressRegion: "London",
      postalCode: thursdayClass.postcode,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", ...thursdayClass.geo },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: thursdayClass.day,
      opens: thursdayClass.opens,
      closes: thursdayClass.closes,
    },
    parentOrganization: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }} />
      <Breadcrumbs trail={[{ name: "North London", path: thursdayClass.page }]} />

      <PageHero
        variant="split"
        eyebrow="North London"
        folio="23 / North London"
        title="Karate in Totteridge"
        lead="Okinawan Goju Ryu every Thursday on Totteridge Green, N20, between Whetstone, Barnet and Mill Hill. Part of DKK London, taught by Sensei Ragi Marmar."
        image={{
          src: "/images/Yudansha/ragi2.jpeg",
          alt: `Sensei Ragi Marmar, ${danOf(ragi)}, in a black gi in a Goju Ryu fighting stance against a black studio backdrop`,
          /* She stands right of centre in a 1045x1200 frame; anchoring right of
           * centre keeps her raised guard inside the cropped box. */
          position: "65% 0%",
        }}
        kanji="道場"
      />

      <StatStrip>
        <StatCell value="Thursday" label="6:15pm - 8:00pm" />
        <StatCell value="Ragi Marmar" label={<><DanGrade text={danOf(ragi)} /> Sensei</>} />
        <StatCell value="18+" label="Adults Only" />
        <StatCell value="N20" label="Totteridge Green" />
      </StatStrip>

      {/* Venue and how to get there */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Where We Train" title="Thursday on Totteridge Green" />
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-10">
            DKK London&apos;s Thursday class trains at {thursdayClass.venue} on Totteridge Green, in the
            London Borough of Barnet. It is the same club as Monday and Wednesday at Regent Street, on the
            same syllabus, taught by Sensei Ragi Marmar, one of DKK London&apos;s instructors.
          </p>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <div className="p-7 sm:p-9 bg-coal border border-white/10 rounded-sm hover:border-brand/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">{thursdayClass.day}</p>
                  <p className="text-brand text-sm font-semibold uppercase tracking-[0.2em] mt-3">{thursdayClass.time}</p>
                </div>
                <Clock className="text-white/15 flex-shrink-0" size={30} aria-hidden="true" />
              </div>
              <div className="h-px w-full bg-white/10 my-6" aria-hidden="true" />
              <div className="flex gap-3 items-start">
                <MapPin className="text-brand flex-shrink-0 mt-1" size={18} aria-hidden="true" />
                <div>
                  <p className="text-white font-display text-xl sm:text-2xl tracking-wide leading-none">{thursdayClass.venue}</p>
                  <a
                    href={thursdayClass.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand text-sm inline-flex items-center gap-1.5 mt-2 transition-colors"
                  >
                    {thursdayClass.address} <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 bg-coal border border-white/10 rounded-sm space-y-6">
              <div className="flex gap-3 items-start">
                <TrainFront className="text-brand flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-white font-display text-xl tracking-wide leading-none">Totteridge &amp; Whetstone</p>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                    The nearest tube, on the Northern line&apos;s High Barnet branch. Roughly a mile on foot
                    along Totteridge Lane, or one bus.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Bus className="text-brand flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-white font-display text-xl tracking-wide leading-none">Bus 251</p>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                    Runs from Totteridge &amp; Whetstone station to the Totteridge Green stop, a short walk from
                    the school, and on to Mill Hill and Edgware.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MessageCircle className="text-gold flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-white font-display text-xl tracking-wide leading-none">Message First</p>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                    The class trains in a school, so let us know before your first Thursday and we will
                    expect you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby districts: real travel context, not keyword stuffing */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Getting Here" title="Karate Near Whetstone, Barnet, Mill Hill & Finchley" />
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-10">
            Totteridge sits between four of Barnet&apos;s busiest districts. Approximate distances to the
            school, as the crow flies:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nearby.map((t) => (
              <div key={t.name} className="p-6 bg-night border border-white/10 rounded-sm hover:border-brand/40 transition-colors">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-brand tracking-wide leading-none tabular-nums">{t.miles}</span>
                  <span className="text-brand/70 text-sm font-semibold uppercase tracking-[0.15em]">mi</span>
                </div>
                <p className="font-display text-2xl text-white tracking-wide leading-none mt-4">{t.name}</p>
                <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-[0.2em] mt-1.5">{t.dir}</p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-3 max-w-2xl">
              <SectionHeading eyebrow="Your Instructor" title="Sensei Ragi Marmar" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Ragi began her Goju Ryu training in 2001 under{" "}
                <Link href="/shihan" className="link-underline text-gold">
                  Shihan Gavin Mulholland
                </Link>{" "}
                (<DanGrade text={shihans.mulholland.dan} />) at DKK&apos;s Westminster dojo, reaching{" "}
                {ragiSteps.map((s, i) => {
                  const last = i === ragiSteps.length - 1;
                  return (
                    <Fragment key={s.grade}>
                      {i > 0 && (last ? " and " : ", ")}
                      {last ? <DanGrade text={s.dan} className="text-white" /> : s.grade} in {s.year}
                    </Fragment>
                  );
                })}
                .
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                She now teaches DKK London&apos;s Thursday class in Totteridge: the same traditional,
                combat-orientated Okinawan Goju Ryu the club has taught at Regent Street since 1990.
              </p>
              {ragiMember.quote && (
                <blockquote className="border-l-2 border-gold/60 pl-5 mb-8">
                  <p className="text-white/90 text-lg leading-relaxed italic">&ldquo;{ragiMember.quote}&rdquo;</p>
                  <footer className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-3">Ragi Marmar</footer>
                </blockquote>
              )}
              <Link href={`/yudansha/${ragi}`} className="link-underline text-gold inline-flex items-center gap-1.5">
                Read Ragi&apos;s full profile <ChevronRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-2 relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden bg-card">
              <SafeImage
                src="/images/Yudansha/ragi1.jpeg"
                alt="Ragi Marmar in a black gi holding a pair of nunchaku across her body, lit against a black studio backdrop"
                fill
                className="object-cover object-[30%_0%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-black/0" />
              <p className="absolute bottom-4 left-4 text-white/80 text-[11px] uppercase tracking-[0.25em]">Kobudo</p>
            </div>
          </div>
        </div>
      </section>

      {/* What a class is like */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What To Expect" title="Your First Thursday" />
          <p className="text-gray-400 leading-relaxed mb-5">
            A Thursday session works through the same Okinawan Goju Ryu syllabus as Regent Street: kata,
            pad work, controlled kumite and ne-waza, with hard and soft technique trained for close
            quarters rather than for points. Beginners and experienced grades train on the same floor.
          </p>
          <p className="text-gray-400 leading-relaxed mb-5">
            {joining.age} No uniform needed: come in something you can move in. Message us before your
            first Thursday so we know to expect you, and{" "}
            <Link href="/contact#fees" className="link-underline text-gold">
              ask about current fees
            </Link>{" "}
            at the same time.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Want more than one night a week? The club also trains Monday and Wednesday, 6pm to 8pm, at 309
            Regent Street with Shihan {shihans.mulholland.name}.{" "}
            <Link href="/training" className="link-underline text-gold">
              See the full schedule
            </Link>
            .
          </p>
          <TrackedOutbound
            href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20to%20the%20Thursday%20class%20in%20Totteridge."
            track="/go/whatsapp"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-night px-6 py-3.5 text-sm font-semibold uppercase tracking-wide rounded-sm"
          >
            <WhatsAppIcon size={16} />
            Message us about Thursday
          </TrackedOutbound>
        </div>
      </section>

      <CTABand
        title="Train with DKK London in Totteridge"
        sub={`${thursdayClass.day} · ${thursdayClass.time} · ${thursdayClass.venue}, ${thursdayClass.address}`}
      />
    </>
  );
}
