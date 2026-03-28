import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f0e0c]">
      <div className="text-center px-6">
        <p className="font-['Bebas_Neue'] text-[8rem] sm:text-[12rem] text-[#a8201a]/20 leading-none">404</p>
        <h1 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white tracking-wide -mt-6 mb-4">Page Not Found</h1>
        <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage or get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-[#a8201a] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#c62828] transition-colors rounded-sm inline-flex items-center justify-center gap-2"
          >
            Homepage <ChevronRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#a8201a] hover:bg-[#a8201a]/10 transition-all rounded-sm inline-flex items-center justify-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
