"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import DanGrade from "@/components/DanGrade";
import { testimonials } from "@/data/testimonials";
import { EASE, DUR } from "@/lib/motion";

export default function TestimonialRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setActive((index + testimonials.length) % testimonials.length);
  }, []);

  const prev = () => goTo(active - 1);
  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);

  // Auto-rotate only when not paused, not hovered/focused, and motion is allowed (WCAG 2.2.2)
  useEffect(() => {
    if (reduced || paused || hovered) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, reduced, paused, hovered]);

  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-divider mb-0" />
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <p className="inline-flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-[0.35em] mb-10 justify-center">
          <span className="w-6 h-px bg-brand" />
          What Members Say
          <span className="w-6 h-px bg-brand" />
        </p>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: DUR.fast, ease: EASE }}
            >
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-snug tracking-wide mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-brand" />
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <span className="text-brand text-xs uppercase tracking-widest"><DanGrade text={t.grade} /></span>
                <div className="w-8 h-px bg-brand" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-brand/40 transition-colors"
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
                    ? "w-6 h-1.5 bg-brand"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-brand/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-brand/40 transition-colors"
            aria-label={paused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
