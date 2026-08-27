"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

type Props = {
  value: string;
  label: string;
};

function parse(value: string): { leading: number; suffix: string; grouped: boolean } | null {
  const match = value.match(/^([\d,]*\d)(.*)/);
  if (match) {
    return {
      leading: parseInt(match[1].replace(/,/g, ""), 10),
      suffix: match[2],
      grouped: match[1].includes(","),
    };
  }
  return null;
}

export default function CountUpStat({ value, label }: Props) {
  const parsed = parse(value);
  const target = parsed?.leading ?? null;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    // Reduced motion is handled by rendering the target directly rather than by
    // setting state here, so this effect never writes state synchronously.
    if (target === null || reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, reduced]);

  const shown = reduced && target !== null ? target : count;
  const display = parsed
    ? `${parsed.grouped ? shown.toLocaleString("en-GB") : shown}${parsed.suffix}`
    : value;

  return (
    <div ref={ref} className="py-5 px-3 sm:py-6 sm:px-6 text-center">
      <p className="font-display text-xl sm:text-3xl text-white tracking-wide tabular-nums leading-tight">{display}</p>
      <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}
