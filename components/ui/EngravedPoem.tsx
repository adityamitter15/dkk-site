"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/**
 * EngravedPoem - a stanza that lights up as if a lamp were passing across
 * engraved metal: each word warms from dim bronze to a pale, almost-white
 * gold, and each line lifts a few pixels as its turn comes.
 *
 * Built for the Flecker lines on the DKK bell, which is a spent artillery
 * shell - hence bronze rather than the ember used for headline statements.
 *
 * The whole stanza shares ONE scroll range so the light sweeps down it. Giving
 * each line its own range would light all four at once, since they sit within
 * a couple of hundred pixels of each other.
 *
 * Both ends of the ramp clear 4.5:1 on black, so the words are readable at any
 * point in the sweep - a visitor who stops mid-scroll is not left squinting.
 */

/** Dim bronze - unlit. 4.9:1 on #000. */
const BRONZE = "#96754a";
/** Lit - warm near-white, the lamp directly on the engraving. */
const LIT = "#f0e6d2";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getSnapshot = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerSnapshot = () => false;
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function EngravedPoem({
  lines,
  coda,
  lineClassName = "",
  codaClassName = "",
}: {
  lines: string[];
  /** The closing inscription, revealed last. */
  coda?: string;
  lineClassName?: string;
  codaClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  // A long ramp: the sweep should feel like a slow pass of light, not a flick.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"],
  });

  const wordCounts = lines.map((l) => l.split(" ").length);
  const totalWords = wordCounts.reduce((a, b) => a + b, 0);
  // Reserve the tail of the range for the coda so it lands after the stanza.
  const stanzaSpan = coda ? 0.78 : 1;

  if (reduce) {
    return (
      <div ref={ref}>
        <blockquote className="space-y-3 max-w-2xl mx-auto">
          {lines.map((line) => (
            <p key={line} className={lineClassName} style={{ color: LIT }}>
              {line}
            </p>
          ))}
        </blockquote>
        {coda && <p className={codaClassName}>{coda}</p>}
      </div>
    );
  }

  // Prefix sums, computed without mutating across the render - a running
  // counter here trips react-hooks' reassign-after-render rule and would go
  // wrong under concurrent re-renders.
  const offsets = wordCounts.reduce<number[]>(
    (acc, n, i) => [...acc, acc[i] + n],
    [0],
  );
  const lineRanges = lines.map((line, i) => ({
    line,
    start: (offsets[i] / totalWords) * stanzaSpan,
    end: (offsets[i + 1] / totalWords) * stanzaSpan,
  }));

  return (
    <div ref={ref}>
      {/* Read as one clean stanza; the animated words are decorative. */}
      <span className="sr-only">{lines.join(" ")}</span>
      <blockquote aria-hidden="true" className="space-y-3 max-w-2xl mx-auto">
        {lineRanges.map(({ line, start, end }) => (
          <PoemLine
            key={line}
            progress={scrollYProgress}
            range={[start, end]}
            className={lineClassName}
            line={line}
            totalWords={totalWords}
            stanzaSpan={stanzaSpan}
            wordStart={start}
          />
        ))}
      </blockquote>
      {coda && (
        <Coda progress={scrollYProgress} className={codaClassName} text={coda} />
      )}
    </div>
  );
}

function PoemLine({
  line,
  progress,
  range,
  className,
  totalWords,
  stanzaSpan,
  wordStart,
}: {
  line: string;
  progress: MotionValue<number>;
  range: [number, number];
  className: string;
  totalWords: number;
  stanzaSpan: number;
  wordStart: number;
}) {
  // The line settles upward as its own words light.
  const y = useTransform(progress, range, [10, 0]);
  const words = line.split(" ");
  const per = stanzaSpan / totalWords;

  return (
    <motion.p style={{ y }} className={className}>
      {words.map((word, i) => (
        <PoemWord
          key={i}
          progress={progress}
          range={[wordStart + i * per, wordStart + (i + 1) * per]}
        >
          {word}
        </PoemWord>
      ))}
    </motion.p>
  );
}

function PoemWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, [BRONZE, LIT]);
  return (
    <motion.span data-reveal-word style={{ color }} className="inline-block mr-[0.24em]">
      {children}
    </motion.span>
  );
}

/** The inscription resolving: letters draw apart and settle as it lights. */
function Coda({
  text,
  progress,
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  className: string;
}) {
  const opacity = useTransform(progress, [0.72, 0.95], [0, 1]);
  const letterSpacing = useTransform(progress, [0.72, 0.95], ["0.5em", "0.25em"]);
  return (
    <motion.p style={{ opacity, letterSpacing }} className={className}>
      {text}
    </motion.p>
  );
}
