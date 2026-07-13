import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  sub?: string;
  href?: string;
  buttonLabel?: string;
};

/** Full-width red call-to-action band used at the bottom of most pages. */
export default function CTABand({
  title,
  sub,
  href = "/contact",
  buttonLabel = "Get In Touch",
}: Props) {
  return (
    <section className="py-16 bg-brand print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-3xl sm:text-4xl text-white tracking-wide">{title}</p>
          {sub && <p className="text-white/70 text-sm mt-1">{sub}</p>}
        </div>
        <Link
          href={href}
          className="px-8 py-4 bg-white text-brand font-bold uppercase tracking-wider text-sm hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-sm flex-shrink-0 inline-flex items-center gap-2"
        >
          {buttonLabel} <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}
