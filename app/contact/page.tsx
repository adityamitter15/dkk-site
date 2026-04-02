import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import SafeImage from "@/components/SafeImage";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DKK London. Train Okinawan Goju Ryu at 309 Regent Street, London. Monday and Wednesday evenings, 6-8pm.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero - image-based for variety */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src="/images/Club/dojo-full-class.JPG" alt="DKK London dojo" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#a8201a] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#a8201a]" />
            Get Started
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-4">Contact</h1>
          <p className="text-gray-300 text-lg max-w-lg">Your first class is free. No registration fee, no commitment. Just turn up or get in touch first.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Join the Club" title="Get In Touch" />
              <p className="text-gray-400 leading-relaxed mb-10">
                Whether you&apos;re a complete beginner or an experienced martial artist, come and visit a class. No commitment required.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 rounded-sm">
                  <Phone className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Mobile</p>
                    <a href="tel:07976411901" className="text-white font-medium hover:text-[#a8201a] transition-colors text-lg">
                      07976 411 901
                    </a>
                    <p className="text-gray-500 text-xs mt-0.5">Shihan Gavin Mulholland</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 rounded-sm">
                  <Mail className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:info@goju-karate.co.uk" className="text-white font-medium hover:text-[#a8201a] transition-colors">
                      info@goju-karate.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 rounded-sm">
                  <MapPin className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white font-medium">University of Westminster, Main Hall</p>
                    <p className="text-gray-400 text-sm">309 Regent Street, London W1B 2HW</p>
                    <p className="text-gray-500 text-xs mt-1">No student membership required</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#141311] border border-white/5 rounded-sm">
                  <Clock className="text-[#a8201a] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Class Times</p>
                    <p className="text-white font-medium">Monday &amp; Wednesday</p>
                    <p className="text-gray-400 text-sm">6:00pm – 8:00pm</p>
                    <p className="text-gray-500 text-xs mt-1">Classes continue during University breaks</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <SafeImage
                  src="/images/wusu.png"
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
      <section className="bg-[#12110f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 text-[#b08d57] text-xs font-bold uppercase tracking-[0.35em] mb-3">
              <span className="w-6 h-px bg-[#b08d57]" />
              Find Us
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide leading-none">309 Regent Street</h2>
            <p className="text-gray-400 text-sm mt-2">University of Westminster · Main Hall · London W1B 2HW</p>
          </div>
          <div className="rounded-sm overflow-hidden ring-1 ring-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5!2d-0.14267!3d51.51713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad55726b3c1%3A0x4c01d4e431b1a60!2s309%20Regent%20St%2C%20London%20W1B%202HW!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
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
              className="text-[#b08d57] text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              Open in Google Maps &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
