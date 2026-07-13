import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** brand = red (club/action), gold = heritage/cultural */
  tone?: "brand" | "gold";
  /** Rule marks: a single dash on the left, or one on each side (for centered headings) */
  rule?: "left" | "both";
  centered?: boolean;
  className?: string;
};

/** The uppercase tracked label with dash rule(s) used above headings site-wide. */
export default function Eyebrow({
  children,
  tone = "brand",
  rule = "left",
  centered = false,
  className = "",
}: Props) {
  const color = tone === "gold" ? "text-gold" : "text-brand";
  const bar = tone === "gold" ? "bg-gold" : "bg-brand";

  return (
    <p
      className={`inline-flex items-center gap-2 ${color} text-xs font-bold uppercase tracking-[0.35em] ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      <span className={`w-6 h-px ${bar}`} aria-hidden="true" />
      {children}
      {rule === "both" && <span className={`w-6 h-px ${bar}`} aria-hidden="true" />}
    </p>
  );
}
