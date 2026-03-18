import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <SafeImage
                  src="/images/DKKCircularLogo.jpg"
                  alt="Daigaku Karate Kai"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-['Bebas_Neue'] text-xl tracking-widest text-white leading-none">Daigaku Karate Kai</p>
                <p className="text-[#c0392b] text-[9px] uppercase tracking-[0.25em] leading-none mt-0.5">London</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Okinawan Goju Ryu — combat-orientated karate for adults of all levels. Founded in the late 1980s by Shihan Gavin Mulholland 7th Dan.
            </p>
            <div className="mt-4">
              <SafeImage
                src="/images/wusu.png"
                alt="Westminster Students' Union"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-lg tracking-widest text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/training", label: "Training" },
                { href: "/shihan", label: "Shihan" },
                { href: "/goju-ryu", label: "Goju Ryu" },
                { href: "/history", label: "History" },
                { href: "/yudansha", label: "Yudansha" },
                { href: "/fighters", label: "DKK Fighters" },
                { href: "/gallery", label: "Gallery" },
                { href: "/books", label: "Books" },
                { href: "/links", label: "Links" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c0392b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-lg tracking-widest text-white mb-4">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Interested in training? Whether you&apos;re a complete beginner or an experienced martial artist, we welcome you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-[#c0392b] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#e74c3c] transition-colors rounded-sm"
            >
              Contact Us
            </Link>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/dkklondon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @dkklondon
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Daigaku Karate Kai London. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Okinawan Goju Ryu &mdash; <Link href="/goju-ryu" className="hover:text-[#c0392b] transition-colors">Learn more</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
