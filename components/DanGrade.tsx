/**
 * Renders a dan-grade string with a properly-styled superscript suffix.
 *
 * The "th"/"nd"/"rd"/"st" is rendered in sans-serif + normal-case + small + raised
 * so it looks correct in any parent context (including Bebas Neue display headings
 * and uppercase captions).
 *
 *   <DanGrade text="5th Dan" /> → 5ᵗʰ Dan
 *   <DanGrade text="2nd Dan · Combat Endurance" /> → 2ⁿᵈ Dan · Combat Endurance
 */
export default function DanGrade({ text, className = "" }: { text: string; className?: string }) {
  const match = text.match(/^(.*?)(\d+)(st|nd|rd|th)(\b.*)$/i);
  if (!match) {
    return <span className={className}>{text}</span>;
  }
  const [, prefix, num, suffix, rest] = match;
  return (
    <span className={className}>
      {prefix}
      {num}
      {/* align-baseline + relative shift: `align-super` escapes the line box in
          leading-none display headings and collides with the eyebrow above */}
      <sup className="font-sans normal-case text-[0.5em] tracking-normal align-baseline relative -top-[0.55em] ml-[0.07em] mr-[0.12em] font-medium">{suffix}</sup>
      {rest}
    </span>
  );
}
