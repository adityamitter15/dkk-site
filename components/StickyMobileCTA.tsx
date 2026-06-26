"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      // Hide when near footer to avoid competing with footer CTA
      const nearFooter = scrolled + viewport > docHeight - 360;
      setShow(scrolled > 240 && !nearFooter);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  // Don't show on contact (redundant) or yudansha individual pages (would compete with their nav)
  if (pathname === "/contact") return null;

  return (
    <div
      className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
      }}
    >
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-5 py-3 bg-[#a8201a] text-white font-bold uppercase tracking-widest text-[13px] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_30px_-8px_rgba(168,32,26,0.5)] active:scale-[0.97] transition-transform"
      >
        Come and Train
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}
