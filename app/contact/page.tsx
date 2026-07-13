import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import SafeImage from "@/components/SafeImage";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DKK London. Train Okinawan Goju Ryu at 309 Regent Street, London. Monday and Wednesday evenings, 6-8pm.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="full"
        eyebrow="Get Started"
        folio="12 / Contact"
        kanji="道場"
        title="Contact"
        lead="Come and try a class. No commitment. Just turn up or get in touch first."
        image={{ src: "/images/Club/dojo-full-class.JPG", alt: "A full class training in the main hall" }}
      />

      <section className="section-reveal py-20 lg:py-28 bg-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Join the Club" title="Get In Touch" />
              <p className="text-gray-400 leading-relaxed mb-10">
                Whether you&apos;re a complete beginner or an experienced martial artist, come and visit a class. No commitment required.
              </p>

              <div className="space-y-4 mb-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="tel:07976411901"
                    className="flex gap-4 items-start p-5 bg-card border border-white/10 hover:border-brand/40 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    <Phone className="text-brand flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Call</p>
                      <p className="text-white font-medium text-lg leading-tight">07976 411 901</p>
                      <p className="text-gray-500 text-xs mt-0.5">Shihan Gavin</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20and%20try%20a%20class%20at%20DKK%20London."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 items-start p-5 bg-card border border-white/10 hover:border-[#25D366]/40 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
                  >
                    <MessageCircle className="text-[#25D366] flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">WhatsApp</p>
                      <p className="text-white font-medium text-lg leading-tight">Quick chat</p>
                      <p className="text-gray-500 text-xs mt-0.5">Usually replies same day</p>
                    </div>
                  </a>
                </div>

                <a
                  href="mailto:info@goju-karate.co.uk"
                  className="flex gap-4 items-start p-5 bg-card border border-white/10 hover:border-brand/40 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <Mail className="text-brand flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white font-medium leading-tight">info@goju-karate.co.uk</p>
                    <p className="text-gray-500 text-xs mt-0.5">Replies within 48 hours</p>
                  </div>
                </a>

                <div className="flex gap-4 items-start p-5 bg-card border border-white/10 rounded-sm">
                  <MapPin className="text-brand flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white font-medium leading-tight">University of Westminster, Main Hall</p>
                    <p className="text-gray-400 text-sm mt-0.5">309 Regent Street, London W1B 2HW</p>
                    <p className="text-gray-500 text-xs mt-1">No student membership required</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-card border border-white/10 rounded-sm">
                  <Clock className="text-brand flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Class Times</p>
                    <p className="text-white font-medium leading-tight">Monday &amp; Wednesday</p>
                    <p className="text-gray-400 text-sm mt-0.5">6:00pm – 8:00pm</p>
                    <p className="text-gray-500 text-xs mt-1">Classes continue during University breaks</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <SafeImage
                  src="/images/uwsu.png"
                  alt="Westminster Students' Union"
                  width={120}
                  height={50}
                  className="object-contain opacity-60"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ───────────────────────────────────────── */}
      <section className="bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.35em] mb-3">
              <span className="w-6 h-px bg-gold" />
              Find Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">309 Regent Street</h2>
            <p className="text-gray-400 text-sm mt-2">University of Westminster · Main Hall · London W1B 2HW</p>
          </div>
          <div className="rounded-sm overflow-hidden ring-1 ring-white/10 h-[280px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5!2d-0.14267!3d51.51713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad55726b3c1%3A0x4c01d4e431b1a60!2s309%20Regent%20St%2C%20London%20W1B%202HW!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DKK London location - 309 Regent Street, London W1B 2HW"
            />
          </div>
          <p className="mt-3 text-right">
            <a
              href="https://www.google.com/maps/place/309+Regent+St,+London+W1B+2HW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Open in Google Maps &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
