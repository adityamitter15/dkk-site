import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import DanGrade from "@/components/DanGrade";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Karate in London - Common Questions",
  description:
    "Starting karate in London: what to wear, whether you need experience, where the dojo is, what a class is like, and whether you have to be a student. Answered by DKK London.",
  alternates: { canonical: "/faq" },
  openGraph: { images: ["/og/home.jpg"] },
};

/**
 * Every answer here is written in plain prose and kept short enough to be
 * quotable, because the queries this page targets ("do I need experience to
 * start karate", "what do you wear to karate", "karate london for beginners")
 * are answered in search results as often as they are clicked.
 *
 * The `answer` strings are the single source of truth: they render on the page
 * AND feed the FAQPage JSON-LD below, so the two can never drift apart. That
 * drift is exactly what Google's structured data guidelines call a violation.
 */
const faqs: { question: string; answer: string }[] = [
  {
    question: "Do I need any experience to start?",
    answer:
      "No. Most people who walk in have never trained before. Beginners are paired with experienced students and eased in during the warm-up, and there is no separate beginners class to graduate out of, you train with everybody from the first night.",
  },
  {
    question: "What should I wear to my first class?",
    answer:
      "Comfortable training clothes and nothing else. A t-shirt and tracksuit bottoms or shorts are fine. You do not need a gi to start, and you should not buy one before you have trained a few times. We train barefoot.",
  },
  {
    question: "Where exactly is the dojo?",
    answer:
      "309 Regent Street, London W1B 2HW, in the University of Westminster building. It is about a minute's walk from Oxford Circus underground station, which puts it on the Central, Victoria and Bakerloo lines.",
  },
  {
    question: "Do I have to be a University of Westminster student?",
    answer:
      "No. The club is open to the public and no student membership is required. DKK has trained at Westminster since 1990 and is the university's oldest sports club, but a large part of the membership has no connection to the university at all.",
  },
  {
    question: "When do you train?",
    answer:
      "Monday and Wednesday evenings, 6pm to 8pm, throughout the year. Turn up a few minutes early on your first night so there is time to say hello before we start.",
  },
  {
    // "karate london prices" and "daigaku karate kai london price" are both real
    // queries. The club will not publish a figure, so this answers everything
    // around it honestly and points at /contact#fees rather than saying nothing.
    question: "How much do the classes cost?",
    answer:
      "Your first class is free, so you can try a full session before committing to anything. After that we confirm current fees when you get in touch, rather than publishing a figure that goes out of date. Ask by email or WhatsApp and you will get an answer straight back. You also do not need a University of Westminster student membership, which catches a lot of people out.",
  },
  {
    question: "Is this suitable for adults?",
    answer:
      "Yes, this is an adults' club. Everyone trains together rather than being split by grade, and the club has a good mix of men and women training regularly.",
  },
  {
    question: "What actually happens in a class?",
    answer:
      "A thorough warm-up of running, stretching and conditioning, then technique work: pad work, partner drills, kata, kumite and ground work. Sessions are physically demanding, but you work at the level you are at.",
  },
  {
    question: "How is Goju Ryu different from Shotokan?",
    answer:
      "Goju Ryu is a close-quarter system. It combines hard linear striking with soft circular deflection, and unlike most karate styles it also addresses grabbing, throwing, joint manipulation and fighting on the ground. Shotokan is generally practised at longer range with a stronger competition focus.",
  },
  {
    question: "Is this sport karate or competition karate?",
    answer:
      "Neither. DKK trains for real-world effectiveness rather than for points. We do hold two club tournaments a year, but competition is an option within the club, not the reason it exists.",
  },
  {
    question: "Is karate any good for self defence?",
    answer:
      "Authentic Goju Ryu was built for it. The syllabus covers striking, grappling, throws and ground work at close range, which is where real incidents happen. Members of the club have also competed professionally in mixed martial arts.",
  },
  {
    question: "Who teaches the classes?",
    answer:
      "Shihan Gavin Mulholland, 7th Dan, founder and chief instructor, alongside the club's senior instructors. All senior instructors are trained in safeguarding and first aid.",
  },
  {
    question: "How long does it take to get a black belt?",
    answer:
      "There is no fixed answer and anyone who gives you one is guessing. Looking at the club's own dan register, the members who have made Shodan have typically trained consistently for several years first. Gradings happen when you are ready for them, not on a schedule.",
  },
  {
    question: "Do you run camps or events outside the weekly classes?",
    answer:
      "Yes. There is a summer camp in the woods near Portishead, a more technical winter camp in London each October, a black belts' camp in January, and two club tournaments a year, in April and November.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/faq#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs trail={[{ name: "Questions", path: "/faq" }]} />

      <PageHero
        variant="quiet"
        eyebrow="Before You Start"
        eyebrowTone="gold"
        folio="14 / Questions"
        title="Questions"
        lead="Everything people ask before their first night on the floor, answered plainly."
        kanji="質問"
        kanjiTone="gold"
      />

      <section className="section-reveal py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Starting Out" title="Common Questions" />

            <dl className="divide-y divide-white/10 border-t border-white/10">
              {faqs.map((f) => (
                <Reveal key={f.question} className="py-7">
                  <dt className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-tight mb-3">
                    {f.question}
                  </dt>
                  <dd className="text-gray-400 leading-relaxed">{f.answer}</dd>
                </Reveal>
              ))}
            </dl>

            <p className="text-gray-400 leading-relaxed mt-10">
              Want the current fees?{" "}
              <Link href="/contact#fees" className="link-underline text-gold">
                Ask us and we will come straight back
              </Link>
              .
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Anything not covered here, just{" "}
              <Link href="/contact" className="link-underline text-gold">
                ask us
              </Link>
              . You can also read more about{" "}
              <Link href="/training" className="link-underline text-gold">
                what we cover in training
              </Link>
              , the{" "}
              <Link href="/goju-ryu" className="link-underline text-gold">
                Goju Ryu system itself
              </Link>
              , or{" "}
              <Link href="/shihan" className="link-underline text-gold">
                Shihan Gavin Mulholland
              </Link>
              , <DanGrade text="7th Dan" />.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Your first class is free"
        sub="Monday & Wednesday · 6:00pm - 8:00pm · 309 Regent Street, London W1B 2HW"
      />
    </>
  );
}
