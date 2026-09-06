"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { navLinks as links, mobileNavLinks as mobileLinks } from "@/data/site";

export default function Navbar() {
  // The menu stores WHICH route it was opened on, not a plain boolean, so a
  // route change closes it on its own. Closing it from an effect keyed to
  // pathname would be a setState in an effect body: a second render every
  // navigation, for something the render can simply derive.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    // NOTE: keep backdrop-filter/transform OFF this element - they would become
    // the containing block for the fixed full-screen mobile overlay below.
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Bar background (blur lives here, on its own layer) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled || open ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      />
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="flex items-center h-16 lg:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/images/DKKCircularLogo.jpg"
                alt="Daigaku Karate Kai"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-xl tracking-widest text-white leading-none">Daigaku Karate Kai</p>
              <p className="text-brand text-[9px] uppercase tracking-[0.25em] leading-none mt-0.5">London</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 ml-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`relative px-2 xl:px-2.5 py-2 text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  pathname === link.href
                    ? "text-brand after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-px after:bg-brand"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 bg-brand text-white text-sm font-semibold tracking-wide uppercase hover:bg-brand-hover transition-colors duration-200 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Join Now
            </Link>
          </div>

          {/* Spacer to keep mobile hamburger on the right */}
          <div className="flex-1 lg:hidden" />

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-3 -mr-1 text-gray-300 hover:text-white active:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center relative z-50"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full-screen overlay, staggered entrance, inert while closed */}
      <div
        id="mobile-nav"
        inert={!open}
        className={`lg:hidden fixed inset-0 -z-10 bg-night/[0.985] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Heritage watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-24 right-4 leading-none text-white/[0.04] text-[9rem]"
          style={{ writingMode: "vertical-rl", fontFamily: "var(--font-kanji)" }}
        >
          道場
        </span>

        <div className="h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
          <ul className="flex-1">
            {mobileLinks.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(12px)",
                  transitionDelay: open ? `${80 + i * 35}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`flex items-baseline gap-4 py-3.5 focus:outline-none focus-visible:bg-white/5 ${
                    pathname === link.href ? "text-brand" : "text-white"
                  }`}
                >
                  <span className="text-white/25 text-[10px] font-semibold tracking-[0.25em] tabular-nums w-6" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl tracking-wide leading-none">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="pt-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(12px)",
              transitionDelay: open ? `${80 + mobileLinks.length * 35 + 60}ms` : "0ms",
            }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-4 bg-brand text-white text-center font-bold uppercase tracking-widest text-sm hover:bg-brand-hover transition-colors rounded-sm"
            >
              Join Now <ChevronRight size={16} />
            </Link>
            <p className="mt-5 text-gray-500 text-xs text-center tracking-wide">
              Mon &amp; Wed · 6–8pm · 309 Regent Street, London W1B 2HW
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
