"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SafeImage from "@/components/SafeImage";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  /** Vertical translate range in pixels. Bigger = more parallax. Default 80. */
  intensity?: number;
  /** Tailwind/CSS object-position string. Default "center". */
  objectPosition?: string;
  /** Optional opacity (overlay is handled by parent gradients). */
  opacity?: number;
  /** Image priority - set true for above-the-fold hero images. */
  priority?: boolean;
};

export default function ParallaxImage({
  src,
  alt = "",
  className = "object-cover object-center",
  intensity = 80,
  objectPosition,
  opacity,
  priority,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-intensity, intensity]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <SafeImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={className}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </motion.div>
    </div>
  );
}
