interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#a8201a] text-xs font-semibold uppercase tracking-[0.2em] mb-2">{eyebrow}</p>
      )}
      <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none text-white">
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
