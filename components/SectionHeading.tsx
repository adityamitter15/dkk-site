interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#c0392b] text-xs font-semibold uppercase tracking-[0.2em] mb-2">{eyebrow}</p>
      )}
      <h2 className={`font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none ${light ? "text-white" : "text-white"}`}>
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
