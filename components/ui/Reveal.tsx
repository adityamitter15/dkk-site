"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE, DUR } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds for sequenced siblings. Default 0. */
  delay?: number;
};

/**
 * Quiet single-fade entrance on scroll. One per section - the restraint is
 * the point. Respects prefers-reduced-motion.
 */
export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: DUR.base, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
