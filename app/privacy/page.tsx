import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Shield, Database, Eye, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Daigaku Karate Kai London handles your personal information. Plain-English privacy policy for the DKK contact form and website.",
};

const lastUpdated = "16 June 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden bg-[#0f0e0c] border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a8201a]/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c9a96e] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c9a96e]" />
            Legal
          </p>
          <h1 className="font-['Bebas_Neue'] text-5xl sm:text-6xl text-white tracking-wide leading-none mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated · {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#0f0e0c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 leading-relaxed mb-10">
            This page explains what information we collect from you when you use this website,
            why we collect it, and how we look after it. We keep things simple: we&apos;re a
            karate club, not a marketing operation.
          </p>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: Shield, title: "No tracking", body: "No cookies, analytics, or third-party trackers on this site." },
              { icon: Database, title: "Minimal data", body: "We only collect what you choose to send via the contact form." },
              { icon: Eye, title: "Never sold", body: "Your details are never shared, sold, or used for marketing." },
              { icon: UserCheck, title: "Your control", body: "Email us anytime to access or delete your information." },
            ].map((card) => (
              <div key={card.title} className="p-5 bg-[#141311] border border-white/5 rounded-sm">
                <card.icon className="text-[#a8201a] mb-3" size={20} />
                <p className="font-['Bebas_Neue'] text-lg tracking-wide text-white mb-1">{card.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            <section aria-labelledby="who-we-are">
              <h2 id="who-we-are" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                Who we are
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Daigaku Karate Kai London (&ldquo;DKK&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an Okinawan
                Goju Ryu karate club based at the University of Westminster, 309 Regent Street,
                London W1B 2HW. You can reach us at{" "}
                <a href="mailto:info@goju-karate.co.uk" className="text-[#c9a96e] hover:text-white transition-colors">
                  info@goju-karate.co.uk
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="what-we-collect">
              <h2 id="what-we-collect" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                What we collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We only receive personal information when you choose to send it to us. That means:
              </p>
              <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2 leading-relaxed">
                <li>Your name, email address, experience level and message when you fill in the contact form.</li>
                <li>Your name, email address and message if you email or WhatsApp us directly.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                We do <strong className="text-white">not</strong> use cookies, analytics, fingerprinting, or
                advertising tools on this website.
              </p>
            </section>

            <section aria-labelledby="why-we-collect">
              <h2 id="why-we-collect" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                Why we use it
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Solely to reply to your enquiry and help you join a class. We will not send you
                marketing emails, add you to a mailing list, or share your details with anyone
                outside the club.
              </p>
            </section>

            <section aria-labelledby="how-its-handled">
              <h2 id="how-its-handled" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                How it is handled
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Contact form submissions are delivered to us via{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a96e] hover:text-white transition-colors"
                >
                  Formspree
                </a>
                , a third-party form-handling service. Formspree forwards messages to our inbox
                and applies basic spam filtering. Their own privacy policy governs how they handle
                the data in transit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The site itself is hosted as static files and stores nothing about you.
              </p>
            </section>

            <section aria-labelledby="how-long">
              <h2 id="how-long" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                How long we keep it
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Enquiry emails are kept only as long as they are useful for following up.
                We&apos;ll delete them on request, or as part of routine inbox housekeeping.
              </p>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
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
                <a href="mailto:info@goju-karate.co.uk" className="text-[#c9a96e] hover:text-white transition-colors">
                  info@goju-karate.co.uk
                </a>{" "}
                and we&apos;ll deal with it.
              </p>
            </section>

            <section aria-labelledby="children">
              <h2 id="children" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                Children
              </h2>
              <p className="text-gray-300 leading-relaxed">
                DKK London trains adults only. The website is not directed at children and we do
                not knowingly collect information from anyone under 16.
              </p>
            </section>

            <section aria-labelledby="changes">
              <h2 id="changes" className="font-['Bebas_Neue'] text-3xl tracking-wide text-white mb-3">
                Changes to this policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If anything changes we&apos;ll update this page and the &ldquo;last updated&rdquo;
                date at the top.
              </p>
            </section>
          </div>

          <div className="mt-14 p-6 bg-[#141311] border border-[#a8201a]/30 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <Mail className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-['Bebas_Neue'] text-lg tracking-wide text-white">Questions?</p>
                <p className="text-gray-400 text-sm">
                  Email us and we&apos;ll get back to you.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#a8201a] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#c62828] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141311]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
