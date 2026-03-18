"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  label: string;
};

function parse(value: string): { leading: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)/);
  if (match) return { leading: parseInt(match[1]), suffix: match[2] };
  return null;
}

export default function CountUpStat({ value, label }: Props) {
  const parsed = parse(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed) return;
    const target = parsed.leading;

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
  }, [parsed?.leading]);

  const display = parsed ? `${count}${parsed.suffix}` : value;

  return (
    <div ref={ref} className="py-6 px-6 text-center">
      <p className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-white tracking-wide tabular-nums">{display}</p>
      <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{label}</p>
    </div>
  );
}
