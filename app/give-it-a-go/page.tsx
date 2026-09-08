import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import DanGrade from "@/components/DanGrade";
import TrackedOutbound from "@/components/TrackedOutbound";
import { Calendar, Clock, MapPin, Shirt, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { giag } from "@/data/giag";

export const metadata: Metadata = {
  title: "Give It A Go: Try Karate",
  description:
    "Try a karate class in central London, Monday 21 and Wednesday 23 September, 6-8pm at 309 Regent Street. Open to everyone, not just students. No uniform needed, just turn up.",
  alternates: { canonical: "/give-it-a-go" },
  keywords: [
    "give it a go karate",
    "try karate london",
    "karate taster session london",
    "beginners karate london",
    "karate classes london september",
    "university of westminster karate",
    "adult karate london",
    "goju ryu london",
  ],
  openGraph: { images: ["/og/training.jpg"] },
  twitter: { images: ["/og/training.jpg"] },
};

export default function GiveItAGoPage() {
  const location = {
    "@type": "Place",
    name: "University of Westminster, 309 Regent Street",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    hasMap: site.googleListing,
  };

  // One Event node per session. No `offers` node anywhere: the club does not
  // publish a fee, and inventing one in structured data would be a claim it has
  // not made. Google reports that as a non-critical warning, which is the
  // correct trade here.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/give-it-a-go#page`,
        name: "Give It A Go: Try Karate",
        isPartOf: { "@id": `${site.url}/#organization` },
        about: { "@id": `${site.url}/#organization` },
      },
      ...giag.sessions.map((session) => ({
        "@type": "Event",
        "@id": `${site.url}/give-it-a-go#session-${session.start.slice(0, 10)}`,
        name: `Give It A Go Karate: ${session.day} ${session.date}`,
        description:
          "A beginner-friendly Okinawan Goju Ryu karate class at the University of Westminster, open to students and the public. No uniform or experience needed.",
        startDate: session.start,
        endDate: session.end,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location,
        organizer: { "@id": `${site.url}/#organization` },
        performer: {
          "@type": "Person",
          name: "Gavin Mulholland",
          jobTitle: "Shihan, 7th Dan",
          url: `${site.url}/shihan`,
        },
        image: [`${site.url}/images/Club/indoor-class-group.JPG`],
        url: `${site.url}/give-it-a-go`,
        inLanguage: "en-GB",
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Give It A Go", path: "/give-it-a-go" }]} />

      {/* One word, like every other hero: this row is eyebrow-left/folio-right
          and anything longer wraps into the folio at 390px. The dates are in
          the notice bar directly above and in the lead below. */}
      <PageHero
        variant="full"
        eyebrow="September"
        folio="22 / Give It A Go"
        kanji="体験"
        title="Give It A Go"
        lead={<>Two open sessions this September. Come and train a real class, not a watered-down demo, on Monday {giag.sessions[0].date} or Wednesday {giag.sessions[1].date}. You do not have to be a student, and you do not need a uniform.</>}
        image={{
          src: "/images/Club/indoor-class-group.JPG",
          alt: "A full DKK class in the main hall at 309 Regent Street",
        }}
      />

      {/* The two dates */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Dates"
            title="Two Sessions"
            subtitle="Both run the club's normal class hours in the main hall at 309 Regent Street. Come to one or come to both."
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {giag.sessions.map((session) => (
              <div
                key={session.start}
                className="p-6 sm:p-8 bg-card border border-white/10 rounded-sm"
              >
                <div className="flex items-center gap-2 text-brand text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  <Calendar size={14} aria-hidden="true" /> {session.day}
                </div>
                <p className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none mb-4">
                  {session.date}
                </p>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                    {giag.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold flex-shrink-0" aria-hidden="true" />
                    309 Regent Street, London W1B 2HW
                  </p>
                </div>
                <p className="mt-5 pt-5 border-t border-white/10 text-gray-500 text-xs leading-relaxed">
                  Westminster student?{" "}
                  <a
                    href={session.uwsuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-gold inline-flex items-center gap-1"
                  >
                    Book this one through UWSU
                    <ExternalLink size={11} aria-hidden="true" />
                  </a>
                  . Everyone else, just turn up.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not students only - the reason this page exists */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-coal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 max-w-2xl">
              <SectionHeading eyebrow="Who It's For" title="You Don't Have to Be a Student" />
              <p className="text-gray-400 leading-relaxed mb-5">
                Give It A Go is run through the Students&apos; Union, so the booking links above are for
                University of Westminster students. The class itself is not students-only and never has
                been. Roughly half of Daigaku Karate Kai has no connection to the university at all: people
                who work nearby, people who moved to London and wanted to train properly, people who did
                karate years ago and want it back.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                If you are not a student, there is nothing to book and nothing to sign up for. Come to 309
                Regent Street for 6pm on either date, say you are there for Give It A Go, and you will be
                trained alongside everyone else.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Adults of any level are welcome, including complete beginners. Read what a class actually
                involves on the{" "}
                <Link href="/training" className="link-underline text-gold">
                  training page
                </Link>
                , or see the{" "}
                <Link href="/faq" className="link-underline text-gold">
                  questions page
                </Link>{" "}
                if you would rather know everything before you walk in.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <Shirt size={14} aria-hidden="true" /> What to Wear
                </div>
                <p className="text-white text-sm leading-relaxed">
                  No uniform needed. Just turn up. Comfortable training clothes and bare feet, the same as
                  any first class here.
                </p>
              </div>
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <MapPin size={14} aria-hidden="true" /> Where
                </div>
                <p className="text-white text-sm leading-relaxed">
                  309 Regent Street, London W1B 2HW. Three minutes from{" "}
                  <Link href="/karate-oxford-circus" className="link-underline text-gold">
                    Oxford Circus
                  </Link>
                  .
                </p>
              </div>
              <div className="p-5 bg-card border border-white/5 rounded-sm">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  <Clock size={14} aria-hidden="true" /> After September
                </div>
                <p className="text-white text-sm leading-relaxed">
                  Classes carry on every Monday and Wednesday, 6-8pm, all year round. Give It A Go is just
                  a doorway in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens on the night */}
      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="On the Night"
            title="What Actually Happens"
            subtitle="Nobody sits you on the side to watch. You train, at whatever level you walk in at."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Turn Up",
                desc: "Get to 309 Regent Street for 6pm. Say it is your first time and someone will point you where you need to be.",
              },
              {
                step: "02",
                title: "Warm Up",
                desc: "Running, stretching and conditioning to start. Hard enough to be worth doing, scaled to whoever is in the room.",
              },
              {
                step: "03",
                title: "Train",
                desc: "Pad work, partner drills, kata and grappling. Beginners are paired with experienced grades who know how to look after them.",
              },
              {
                step: "04",
                title: "Come Back",
                desc: "Or do not. There is no sign-up on the night and no pressure at the end of it. The next class is the Monday or Wednesday after.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-card border border-white/10 rounded-sm"
              >
                <span className="font-display text-3xl sm:text-5xl text-brand/20 absolute top-4 right-5 leading-none">
                  {item.step}
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who teaches it */}
      <section className="section-reveal py-14 bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 leading-relaxed">
            The class is taught by <DanGrade text="7th Dan" /> instructor{" "}
            <Link href="/shihan" className="link-underline text-gold">
              Shihan Gavin Mulholland
            </Link>
            , who has led Daigaku Karate Kai since 1990. This is authentic Okinawan Goju Ryu: hard and
            soft, built for close-quarter reality rather than points. If you want to ask something first,{" "}
            <TrackedOutbound
              href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20to%20Give%20It%20A%20Go%20in%20September."
              track="/go/whatsapp"
              className="link-underline text-gold"
            >
              message the club on WhatsApp
            </TrackedOutbound>{" "}
            or use the{" "}
            <Link href="/contact" className="link-underline text-gold">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand
        title={`Give it a go, ${giag.shortDates}.`}
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street, W1B 2HW · No uniform needed"
        href="/contact"
        buttonLabel="Ask a Question"
      />
    </>
  );
}
