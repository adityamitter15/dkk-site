"use client";

import { motion, useScroll } from "motion/react";

/** 2px brand hairline under the top edge showing reading progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand origin-left z-[60] pointer-events-none print:hidden"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
