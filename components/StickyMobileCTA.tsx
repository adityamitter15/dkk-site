"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight, MessageCircle } from "lucide-react";
import TrackedOutbound from "@/components/TrackedOutbound";

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
  if (pathname === "/contact" || /^\/yudansha\/.+/.test(pathname)) return null;

  return (
    <div
      className={`lg:hidden print:hidden fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
      }}
    >
      <div className="flex items-center gap-2">
        <TrackedOutbound
          href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20and%20try%20a%20class%20at%20DKK%20London."
          track="/go/whatsapp"
          aria-label="WhatsApp Shihan Gavin"
          className="inline-flex items-center gap-2 px-4 py-3 bg-whatsapp text-night font-bold uppercase tracking-widest text-[13px] rounded-full shadow-dock active:scale-[0.97] transition-transform"
        >
          <MessageCircle size={16} />
          WhatsApp
        </TrackedOutbound>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-3 bg-brand text-white font-bold uppercase tracking-widest text-[13px] rounded-full shadow-dock active:scale-[0.97] transition-transform"
        >
          Come and Train
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
