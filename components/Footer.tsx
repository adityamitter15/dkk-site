import Link from "next/link";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
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
                <p className="text-[#a8201a] text-[9px] uppercase tracking-[0.25em] leading-none mt-0.5">London</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Okinawan Goju Ryu. Combat-orientated karate for adults of all levels. Training at the University of Westminster since 1990. The oldest sports club at Westminster.
            </p>
            <div className="mt-4">
              <SafeImage
                src="/images/uwsu.png"
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
                { href: "/university", label: "University" },
                { href: "/gallery", label: "Gallery" },
                { href: "/books", label: "Books" },
                { href: "/links", label: "Links" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#a8201a] text-sm transition-colors">
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
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#a8201a] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#c62828] transition-colors rounded-sm"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/447976411901?text=Hi%2C%20I%27d%20like%20to%20come%20and%20try%20a%20class%20at%20DKK%20London."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Shihan Gavin"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white text-sm font-semibold uppercase tracking-wide hover:border-[#25D366] hover:text-[#25D366] transition-colors rounded-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/dkk_karate_london"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DKK London on Instagram"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/groups/24449490051/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DKK London on Facebook"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Daigaku Karate Kai London. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Okinawan Goju Ryu</span>
            <span aria-hidden="true">·</span>
            <Link href="/goju-ryu" className="hover:text-[#a8201a] transition-colors">Learn more</Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-[#a8201a] transition-colors">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
