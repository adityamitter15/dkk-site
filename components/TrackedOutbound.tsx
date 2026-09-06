"use client";

import { trackOutbound } from "@/lib/track";

type Props = {
  href: string;
  track: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  external?: boolean;
};

/**
 * A plain outbound link (WhatsApp, mailto, Google review, ...) that also fires
 * a virtual page view via `trackOutbound` so the click shows up in Cloudflare
 * Web Analytics. Navigation is never prevented - only the tracking call is
 * added on top of the normal anchor behaviour.
 */
export default function TrackedOutbound({
  href,
  track,
  children,
  className,
  "aria-label": ariaLabel,
  external = !href.startsWith("mailto:"),
}: Props) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => trackOutbound(track)}
    >
      {children}
    </a>
  );
}
