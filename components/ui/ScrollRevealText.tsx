"use client";

import { useRef, useSyncExternalStore, type ElementType } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/**
 * ScrollRevealText — a statement headline whose words warm from ember to gold
 * as the block passes up through the viewport.
 *
 * Built for short display copy, not body text: splitting a long paragraph into
 * per-word spans bloats the DOM and reads as noise rather than emphasis. Keep
 * it to headline length.
 *
 * Colour, not opacity. Fading large type from near-invisible looks broken if a
 * visitor stops mid-scroll, and it puts the resting contrast below AA. Both
 * ends of this ramp clear 3:1 on bg-night, which is the bar for large text.
 */

/** Burnt amber — the unlit end. 3.7:1 on #0f0e0c. */
const EMBER = "#9a5f2c";
/** --color-gold. 8.6:1 on #0f0e0c. */
const GOLD = "#c9a96e";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getSnapshot = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerSnapshot = () => false;

/** Reactive prefers-reduced-motion flag, SSR-safe. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function ScrollRevealText({
  text,
  as: Tag = "h2" as ElementType,
  className = "",
  /** How far ahead of the block the ramp starts/ends, as viewport fractions. */
  offset = ["start 0.9", "start 0.45"] as [string, string],
}: {
  text: string;
  as?: ElementType;
  className?: string;
  offset?: [string, string];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-expect-error motion's offset tuple is stricter than the string pair we accept
    offset,
  });

  // Reduced motion: the statement simply sits lit. No ramp, no fade-in — the
  // point of the effect is the warming, and there is no honest static version.
  if (reduce) {
    return (
      <Tag ref={ref} className={className} style={{ color: GOLD }}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {/* AT reads the heading once, cleanly; the per-word spans are decorative. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          // Overlap each word's ramp with its neighbour so the warm front
          // sweeps the line instead of stepping word by word.
          const start = (i / words.length) * 0.8;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </span>
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, [EMBER, GOLD]);
  return (
    <motion.span data-reveal-word style={{ color }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}
