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
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,_#1a0000_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0392b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-4">
            <span className="w-6 h-px bg-[#c0392b]" />
            Get Started
          </p>
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide leading-none mb-6">Contact</h1>
          <div className="w-16 h-1 bg-[#c0392b]" />
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Join the Club" title="Get In Touch" />
              <p className="text-gray-400 leading-relaxed mb-10">
                Whether you&apos;re a complete beginner or an experienced martial artist — come and visit a class. No commitment required.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm">
                  <Phone className="text-[#c0392b] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Mobile</p>
                    <a href="tel:07976411901" className="text-white font-medium hover:text-[#c0392b] transition-colors text-lg">
                      07976 411 901
                    </a>
                    <p className="text-gray-500 text-xs mt-0.5">Shihan Gavin Mulholland</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm">
                  <Mail className="text-[#c0392b] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:info@goju-karate.co.uk" className="text-white font-medium hover:text-[#c0392b] transition-colors">
                      info@goju-karate.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm">
                  <MapPin className="text-[#c0392b] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white font-medium">University of Westminster — Main Hall</p>
                    <p className="text-gray-400 text-sm">309 Regent Street, London W1B 2HW</p>
                    <p className="text-gray-500 text-xs mt-1">No student membership required</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 bg-[#111] border border-white/5 rounded-sm">
                  <Clock className="text-[#c0392b] flex-shrink-0 mt-0.5" size={20} />
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
    </>
  );
}
