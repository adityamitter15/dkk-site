"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`hidden lg:flex fixed bottom-6 right-6 z-40 items-center justify-center w-11 h-11 rounded-full bg-[#141311]/90 backdrop-blur border border-white/15 text-gray-300 hover:text-white hover:border-[#a8201a]/60 hover:bg-[#a8201a]/20 shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </button>
  );
}
