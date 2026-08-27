import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-brand text-xs font-semibold uppercase tracking-[0.2em] mb-2.5">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
