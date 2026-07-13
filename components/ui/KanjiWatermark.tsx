type Props = {
  /** The glyphs to render, e.g. "剛柔流". Purely decorative. */
  glyphs: string;
  /** Tint of the watermark. Default white. */
  tone?: "white" | "gold" | "brand";
  className?: string;
};

const TONES = {
  white: "text-white/[0.045]",
  gold: "text-gold/[0.06]",
  brand: "text-brand/[0.07]",
};

/**
 * Large vertical kanji watermark anchored to the right edge of a hero/section.
 * Decorative only — hidden from assistive tech. Parent needs relative + overflow-hidden.
 */
export default function KanjiWatermark({ glyphs, tone = "white", className = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 lg:right-12 font-kanji leading-none ${TONES[tone]} text-[clamp(8rem,22vh,16rem)] ${className}`}
      style={{ writingMode: "vertical-rl", fontFamily: "var(--font-kanji)" }}
    >
      {glyphs}
    </span>
  );
}
