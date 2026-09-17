import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Mail, Shield, Database, Eye, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Daigaku Karate Kai London handles your personal information. Plain-English privacy policy for the DKK contact form and website.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "17 September 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero - shared PageHero so the anatomy matches every other page */}
      <PageHero
        variant="quiet"
        eyebrow="Legal"
        eyebrowTone="gold"
        folio="13 / Privacy"
        title="Privacy Policy"
      >
        <p className="text-gray-400 text-sm mt-4">Last updated · {lastUpdated}</p>
      </PageHero>

      <section className="py-16 sm:py-20 lg:py-28 bg-night">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 leading-relaxed mb-10">
            This page explains what information we collect from you when you use this website,
            why we collect it, and how we look after it. We keep things simple: we&apos;re a
            karate club, not a marketing operation.
          </p>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Shield, title: "No tracking", body: "No cookies and no advertising trackers. Just cookieless analytics to count visits." },
              { icon: Database, title: "Minimal data", body: "We only collect what you choose to send via the contact form." },
              { icon: Eye, title: "Never sold", body: "Your details are never shared, sold, or used for marketing." },
              { icon: UserCheck, title: "Your control", body: "Email us anytime to access or delete your information." },
            ].map((card) => (
              <div key={card.title} className="p-5 bg-card border border-white/5 rounded-sm">
                <card.icon className="text-brand mb-3" size={20} />
                <p className="font-display text-lg tracking-wide text-white mb-1">{card.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            <section aria-labelledby="who-we-are">
              <h2 id="who-we-are" className="font-display text-3xl tracking-wide text-white mb-3">
                Who we are
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Daigaku Karate Kai London (&ldquo;DKK&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an Okinawan
                Goju Ryu karate club based at the University of Westminster, 309 Regent Street,
                London W1B 2HW. You can reach us at{" "}
                <a href="mailto:info@goju-karate.co.uk" className="text-gold hover:text-white transition-colors">
                  info@goju-karate.co.uk
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="what-we-collect">
              <h2 id="what-we-collect" className="font-display text-3xl tracking-wide text-white mb-3">
                What we collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We only receive personal information when you choose to send it to us. That means:
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2 leading-relaxed">
                <li>Your name, email address, experience level and message when you fill in the contact form.</li>
                <li>Your name, email address and message if you email or WhatsApp us directly.</li>
                <li>Your phone number and preferred call time, if you ask us to call or WhatsApp you.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                We do <strong className="text-white">not</strong> use cookies, fingerprinting, or
                advertising tools on this website. We use cookieless Cloudflare Web Analytics to
                count visits, which sets no cookies and carries no advertising trackers.
              </p>
            </section>

            <section aria-labelledby="why-we-collect">
              <h2 id="why-we-collect" className="font-display text-3xl tracking-wide text-white mb-3">
                Why we use it
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Solely to reply to your enquiry and help you join a class. We will not send you
                marketing emails, add you to a mailing list, or share your details with anyone
                outside the club.
              </p>
            </section>

            <section aria-labelledby="how-its-handled">
              <h2 id="how-its-handled" className="font-display text-3xl tracking-wide text-white mb-3">
                How it is handled
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Contact form submissions are delivered to us via{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-white transition-colors"
                >
                  Formspree
                </a>
                , a third-party form-handling service. Formspree forwards messages to our inbox
                and applies basic spam filtering. Their own privacy policy governs how they handle
                the data in transit.
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                A copy of each message is also saved to a private Google Sheet that only the club
                can see, so an enquiry is not lost if an email goes astray.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The site itself is hosted as static files. The only thing running alongside it is
                Cloudflare Web Analytics, which counts visits without cookies and without
                identifying you.
              </p>
            </section>

            <section aria-labelledby="how-long">
              <h2 id="how-long" className="font-display text-3xl tracking-wide text-white mb-3">
                How long we keep it
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Enquiry emails are kept only as long as they are useful for following up. The
                saved copy of each enquiry is deleted automatically 12 months after it arrives.
              </p>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="font-display text-3xl tracking-wide text-white mb-3">
                Your rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Under UK GDPR you have the right to ask us to:
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2 leading-relaxed">
                <li>Confirm what information we hold about you.</li>
                <li>Correct anything that&apos;s wrong.</li>
                <li>Delete your information from our records.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                Just send a quick email to{" "}
                <a href="mailto:info@goju-karate.co.uk" className="text-gold hover:text-white transition-colors">
                  info@goju-karate.co.uk
                </a>{" "}
                and we&apos;ll deal with it.
              </p>
            </section>

            <section aria-labelledby="children">
              <h2 id="children" className="font-display text-3xl tracking-wide text-white mb-3">
                Children
              </h2>
              <p className="text-gray-300 leading-relaxed">
                DKK London trains adults, 18 and over, and 16 and 17 year olds in some cases by
                arrangement. The website is not directed at children and we do not knowingly
                collect information from anyone under 16.
              </p>
            </section>

            <section aria-labelledby="changes">
              <h2 id="changes" className="font-display text-3xl tracking-wide text-white mb-3">
                Changes to this policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If anything changes we&apos;ll update this page and the &ldquo;last updated&rdquo;
                date at the top.
              </p>
            </section>
          </div>

          <div className="mt-14 p-6 bg-card border border-brand/30 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Mail className="text-brand flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-display text-lg tracking-wide text-white">Questions?</p>
                <p className="text-gray-400 text-sm">
                  Email us and we&apos;ll get back to you.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand text-white text-sm font-semibold uppercase tracking-wide hover:bg-brand-hover transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
