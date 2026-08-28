"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE, DUR } from "@/lib/motion";

/**
 * The belt spine on a member's journey timeline, drawn rather than simply
 * present: it grows from the first milestone down to the last as the block
 * enters view, so the rail arrives ahead of the dots that sit on it.
 *
 * The gradient is the grading itself - white at the top (white belt) fading
 * into the black of the page (black belt) - so drawing it downward reads as
 * the member progressing, which is the one place on these pages where motion
 * carries meaning instead of decoration.
 *
 * Reduced motion gets the finished rail, no draw.
 */
export default function JourneySpine() {
  const reduced = useReducedMotion();

  const className =
    "absolute left-[-0.5px] top-[6px] bottom-[6px] w-[2px] bg-gradient-to-b from-white/90 via-white/35 to-white/0";

  if (reduced) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={`${className} origin-top`}
      aria-hidden="true"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: DUR.slow, ease: EASE }}
    />
  );
}
