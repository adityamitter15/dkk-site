"use client";

import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  /** Maximum pull distance in px. Default 8. */
  strength?: number;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = LinkProps | ButtonProps;

export default function MagneticButton(props: Props) {
  const { children, className = "", strength = 8 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced) return;
    // Bail on touch devices - no cursor to attract, just dead JS
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setDelta({ x: x * strength, y: y * strength });
  };

  const onMouseLeave = () => setDelta({ x: 0, y: 0 });

  const inner =
    "href" in props && props.href ? (
      <Link href={props.href} className={className}>
        {children}
      </Link>
    ) : (
      <button type={(props as ButtonProps).type ?? "button"} onClick={(props as ButtonProps).onClick} className={className}>
        {children}
      </button>
    );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: delta.x, y: delta.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
