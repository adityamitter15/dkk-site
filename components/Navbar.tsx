"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/shihan", label: "Shihan" },
  { href: "/goju-ryu", label: "Goju Ryu" },
  { href: "/history", label: "History" },
  { href: "/yudansha", label: "Yudansha" },
  { href: "/fighters", label: "Fighters" },
  { href: "/university", label: "University" },
  { href: "/gallery", label: "Gallery" },
  { href: "/books", label: "Books" },
  { href: "/links", label: "Links" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="font-['Bebas_Neue'] text-xl tracking-widest text-white leading-none">Daigaku Karate Kai</p>
              <p className="text-[#a8201a] text-[9px] uppercase tracking-[0.25em] leading-none mt-0.5">London</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 ml-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`px-2 xl:px-2.5 py-2 text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  pathname === link.href
                    ? "text-[#a8201a]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 bg-[#a8201a] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#c62828] transition-colors duration-200 rounded-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Join Now
            </Link>
          </div>

          {/* Spacer to keep mobile hamburger on the right */}
          <div className="flex-1 lg:hidden" />

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-3 -mr-1 text-gray-300 hover:text-white active:text-white transition-colors min-w-11 min-h-11 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-black/98 backdrop-blur-sm border-t border-white/10`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`px-4 py-3 text-base font-medium tracking-wide border-b border-white/5 transition-colors focus:outline-none focus-visible:bg-white/5 ${
                pathname === link.href
                  ? "text-[#a8201a]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 px-4 py-3 bg-[#a8201a] text-white text-center font-semibold tracking-wide uppercase hover:bg-[#c62828] transition-colors rounded-sm"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
