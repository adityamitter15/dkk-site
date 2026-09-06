import { ReactNode } from "react";

/** Standard cell for StatStrip - Bebas value over a tracked uppercase label. */
export function StatCell({ value, label }: { value: ReactNode; label: ReactNode }) {
  return (
    <div className="py-5 px-3 sm:py-6 sm:px-6 text-center">
      <p className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-tight">{value}</p>
      <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

/**
 * Red full-width stats band. 2-col on mobile, 4-col on desktop, with hairline
 * dividers between cells. Pass StatCell (or CountUpStat) children.
 */
export default function StatStrip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`bg-brand ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 [&>*:nth-child(2)]:border-l [&>*:nth-child(4)]:border-l [&>*:nth-child(3)]:border-t [&>*:nth-child(4)]:border-t lg:[&>*]:border-t-0 lg:[&>*:not(:first-child)]:border-l [&>*]:border-white/20">
          {children}
        </div>
      </div>
    </section>
  );
}
