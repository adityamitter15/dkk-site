import type { ReactNode } from "react";
import { giagOverAtBuild } from "@/lib/giag";

/**
 * Give It A Go "before" and "after" copy. A build made after the last session
 * ships only `finished`, unwrapped. A build made before it ships both, in
 * classless wrappers that app/globals.css shows or hides from <html data-past>,
 * which the pre-paint script in app/layout.tsx sets from the visitor's clock.
 * A stale build therefore flips to the finished copy before first paint, with
 * no layout shift and no client JS. Keep the wrappers classless: the CSS
 * restores them with `display: revert`, which would discard any display utility.
 */
export default function GiagPhase({
  upcoming,
  finished,
  inline = false,
}: {
  upcoming: ReactNode;
  finished: ReactNode;
  inline?: boolean;
}) {
  if (giagOverAtBuild) return <>{finished}</>;
  const Tag = inline ? "span" : "div";
  return (
    <>
      <Tag data-giag="upcoming">{upcoming}</Tag>
      <Tag data-giag="finished">{finished}</Tag>
    </>
  );
}
