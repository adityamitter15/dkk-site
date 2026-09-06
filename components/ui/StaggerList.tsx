"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * StaggerList / StaggerItem - a list whose rows arrive in sequence as the block
 * enters view, rather than the whole block appearing at once.
 *
 * Used on the dan register, where it suits the nafuda name-board it is modelled
 * on: names going up one at a time.
 *
 * Timing follows the standard list-stagger guidance - 0.04s per row, which
 * stays lively for a two-name tier and does not turn a ten-name tier into a
 * queue. Anything past ~0.1s per row reads as sluggish.
 *
 * `once: true` means a row never re-animates on scroll-back. Re-triggering a
 * register the reader has already passed is noise, not feedback.
 *
 * Reduced motion is handled here, in the component. An earlier note claimed a
 * MotionConfig at the app level did it; there has never been one, so the
 * variants ran regardless of the setting. `useReducedMotion` now short-circuits
 * to plain elements, matching how Reveal behaves.
 */

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerList({
  children,
  className,
  as: Tag = "ul",
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    const Plain = Tag;
    return <Plain className={className}>{children}</Plain>;
  }

  const M = Tag === "ol" ? motion.ol : Tag === "div" ? motion.div : motion.ul;
  return (
    <M
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </M>
  );
}

export function StaggerItem({
  children,
  className,
  as: Tag = "li",
}: {
  children: ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    const Plain = Tag;
    return <Plain className={className}>{children}</Plain>;
  }

  const M = Tag === "div" ? motion.div : motion.li;
  return (
    <M data-stagger-item variants={item} className={className}>
      {children}
    </M>
  );
}
