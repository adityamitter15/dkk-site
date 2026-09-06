import { ReactNode } from "react";
import SafeImage from "@/components/SafeImage";
import ParallaxImage from "@/components/ParallaxImage";
import Eyebrow from "@/components/ui/Eyebrow";
import KanjiWatermark from "@/components/ui/KanjiWatermark";

type Variant = "full" | "split" | "archive" | "quiet";

type Props = {
  variant: Variant;
  eyebrow: string;
  eyebrowTone?: "brand" | "gold";
  title: ReactNode;
  lead?: ReactNode;
  /** Chapter marker, e.g. "02 / Training" - makes pages read like one publication */
  folio?: string;
  image?: { src: string; alt?: string; position?: string };
  /** Heritage watermark glyphs, e.g. "稽古" */
  kanji?: string;
  kanjiTone?: "white" | "gold" | "brand";
  /** Small caption under the lead (archive variant: a dated note) */
  caption?: string;
  /** Extra content below the lead (CTAs etc.) */
  children?: ReactNode;
};

/**
 * The site-wide hero system. Four variants so page tops stop looking identical:
 * - full:    full-bleed image, headline low-left, parallax
 * - split:   asymmetric editorial grid, image bleeds to the right edge, no heavy overlay
 * - archive: sepia-graded photograph, dated caption - for history-facing pages
 * - quiet:   no image; whitespace, kanji and a gold rule carry it
 */
export default function PageHero({
  variant,
  eyebrow,
  eyebrowTone = "brand",
  title,
  lead,
  folio,
  image,
  kanji,
  kanjiTone = "white",
  caption,
  children,
}: Props) {
  const folioEl = folio ? (
    <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.3em] tabular-nums">{folio}</p>
  ) : null;

  if (variant === "quiet") {
    return (
      <section className="relative pt-32 pb-14 sm:pt-44 sm:pb-20 overflow-hidden bg-night print:hidden">
        {kanji && <KanjiWatermark glyphs={kanji} tone={kanjiTone} />}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-stagger">
          <div className="flex items-center justify-between mb-4">
            <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
            {folioEl}
          </div>
          <h1 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] text-white tracking-wide leading-[0.95] mb-5">
            {title}
          </h1>
          <div className={`h-px w-24 mb-6 ${eyebrowTone === "gold" ? "bg-gold/60" : "bg-brand/70"}`} aria-hidden="true" />
          {lead && <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">{lead}</p>}
          {children}
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="relative pt-24 sm:pt-32 overflow-hidden bg-night print:hidden">
        {kanji && <KanjiWatermark glyphs={kanji} tone={kanjiTone} className="lg:right-[44%]" />}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-0 items-end">
            <div className="lg:col-span-7 pb-10 sm:pb-16 hero-stagger relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
                {folioEl}
              </div>
              <h1 className="font-display text-[clamp(3.5rem,7.5vw,6.75rem)] text-white tracking-wide leading-[0.95] mb-5 lg:-mr-24">
                {title}
              </h1>
              <div className={`h-px w-24 mb-6 ${eyebrowTone === "gold" ? "bg-gold/60" : "bg-brand/70"}`} aria-hidden="true" />
              {lead && <p className="text-gray-300 text-lg max-w-xl font-light leading-relaxed">{lead}</p>}
              {children}
            </div>
            <div className="lg:col-span-5 relative">
              {image && (
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[34rem] lg:-mr-[calc((100vw-80rem)/2+2rem)] xl:-mr-[calc((100vw-80rem)/2+2rem)]">
                  <SafeImage
                    src={image.src}
                    alt={image.alt ?? ""}
                    fill
                    priority
                    className="object-cover"
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                  {/* Edge blends only - zero-alpha stops, never the `transparent` keyword
                      (oklab interpolation turns it into a heavy black veil) */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night to-night/0 lg:hidden" />
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-night to-night/0" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // full + archive share the bleed structure; archive adds the sepia grade and caption styling
  const archive = variant === "archive";
  return (
    <section className="relative pt-28 pb-16 sm:pt-44 sm:pb-24 overflow-hidden print:hidden">
      <div className="absolute inset-0 bg-black" />
      {image && (
        <div className={`absolute inset-0 ${archive ? "opacity-75" : "opacity-90"}`}>
          <ParallaxImage
            src={image.src}
            alt={image.alt ?? ""}
            priority
            intensity={40}
            className={`object-cover ${archive ? "img-archive" : ""}`}
            objectPosition={image.position}
          />
        </div>
      )}
      {/* Bottom-anchored scrim carries the headline; the upper image (where faces sit)
          stays bright. Zero-alpha stops only - the `transparent` keyword blackens in oklab */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/0" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-night to-night/0" />
      {kanji && <KanjiWatermark glyphs={kanji} tone={kanjiTone} />}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-stagger">
        <div className="flex items-center justify-between mb-4">
          <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
          {folioEl}
        </div>
        <h1 className="font-display text-[clamp(4rem,10vw,9rem)] text-white tracking-wide leading-[0.92] mb-5">
          {title}
        </h1>
        {lead && <p className="text-gray-300 text-lg max-w-2xl font-light leading-relaxed">{lead}</p>}
        {caption && (
          <p className={`mt-5 text-[11px] uppercase tracking-[0.3em] ${archive ? "text-gold/60" : "text-white/40"}`}>
            {caption}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
