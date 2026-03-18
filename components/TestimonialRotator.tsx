"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "From the first class, training with DKK was a kick to the gut — both literally and metaphorically. The sweet thrill of fear I feel walking into the dojo is a big part of what I love about it.",
    name: "Daniel Bradley",
    grade: "2nd Dan",
  },
  {
    quote: "Of all the places I've trained, nowhere else have I been surrounded by so many people who work so hard to push each other past what they thought were their limits.",
    name: "Catherine Sandwell",
    grade: "2nd Dan",
  },
  {
    quote: "I wanted to train where my fitness was challenged while learning self-protection. DKK provided that and taught me control, inner strength, resilience, and how to surpass my own limits.",
    name: "Laila Al-Minyawi",
    grade: "3rd Dan",
  },
  {
    quote: "Through DKK, I have been given the opportunity to push myself beyond what I thought were my limits and achieve what I thought was beyond me.",
    name: "Richard Gaillard",
    grade: "3rd Dan",
  },
  {
    quote: "In DKK and Shihan Mulholland, I found exactly what I was looking for in a martial arts association. The people who make up DKK are just a joy to spend time with.",
    name: "Luke Wilcox",
    grade: "2nd Dan",
  },
  {
    quote: "The fight-or-flee rush of my first class isn't one I'll easily ever forget. I found myself replaying every movement in my head over and over again like a movie.",
    name: "Sidney Ushurhe",
    grade: "1st Dan",
  },
  {
    quote: "The breadth of Goju Ryu and the depth to which we study it fascinates me. DKK has been a fundamental part of my life ever since my first class.",
    name: "Mizuki Murai",
    grade: "2nd Dan",
  },
  {
    quote: "I consider it a privilege to train with the calibre of people in the club.",
    name: "Tunde Oladimeji",
    grade: "5th Dan",
  },
];

export default function TestimonialRotator() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 300);
  }, []);

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-[#0d0d0d]">
      <div className="section-divider mb-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 text-[#c0392b] text-xs font-bold uppercase tracking-[0.35em] mb-10 justify-center">
          <span className="w-6 h-px bg-[#c0392b]" />
          What Members Say
          <span className="w-6 h-px bg-[#c0392b]" />
        </p>

        <div
          className="transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <p className="font-['Bebas_Neue'] text-2xl sm:text-3xl lg:text-4xl text-white leading-snug tracking-wide mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#c0392b]" />
            <p className="text-white font-semibold text-sm">{t.name}</p>
            <span className="text-[#c0392b] text-xs uppercase tracking-widest">{t.grade}</span>
            <div className="w-8 h-px bg-[#c0392b]" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#c0392b]/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-6 h-1.5 bg-[#c0392b]"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#c0392b]/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
