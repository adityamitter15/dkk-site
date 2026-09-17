import { isValidElement, ReactNode } from "react";

type Props = {
  /** Lines of the heading. Each line animates in with stagger. */
  lines: ReactNode[];
  /** Accessible name for the heading. Falls back to the flattened text of all lines. */
  label?: string;
  className?: string;
  /** Per-line delay step in seconds. Default 0.12. */
  stagger?: number;
  /** Initial delay before first line. Default 0.1. */
  initialDelay?: number;
};

function flatten(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flatten).join("");
  if (isValidElement(node)) return flatten((node.props as { children?: ReactNode }).children);
  return "";
}

export default function KineticHeadline({
  lines,
  label,
  className = "",
  stagger = 0.12,
  initialDelay = 0.1,
}: Props) {
  return (
    <h1 className={className} aria-label={label ?? lines.map(flatten).join(" ").trim()}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" aria-hidden="true">
          <span
            className="block kinetic-line"
            style={{ animationDelay: `${initialDelay + i * stagger}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
