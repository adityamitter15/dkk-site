import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Analytics from "@/components/Analytics";
import { site } from "@/data/site";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 16-glyph Noto Serif JP subset (6.5KB) — used only for the heritage kanji watermarks
const kanji = localFont({
  src: "./fonts/kanji-subset.woff2",
  variable: "--font-kanji-src",
  display: "swap",
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "serif"],
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f0e0c",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Daigaku Karate Kai London - Okinawan Goju Ryu",
    template: "%s | DKK London",
  },
  description: "Okinawan Goju Ryu karate for adults in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan. Monday & Wednesday, 309 Regent Street.",
  alternates: { canonical: "/" },
  keywords: ["karate", "goju ryu", "okinawan karate", "martial arts london", "DKK", "daigaku karate kai", "gavin mulholland", "combat karate", "self defence london"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Daigaku Karate Kai London",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Daigaku Karate Kai London - Okinawan Goju Ryu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/home.jpg"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "DKK London",
    statusBarStyle: "black-translucent",
  },
  verification: {
    // Bing Webmaster Tools site ownership. Bing's own note: leave it in place
    // even after verification succeeds, or the property un-verifies.
    other: { "msvalidate.01": "0C0DD422BC190BE8AF769F8E9EE055F5" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "SportsClub", "Organization"],
    name: "Daigaku Karate Kai London",
    alternateName: "DKK London",
    description: "Okinawan Goju Ryu karate for adults in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan.",
    url: site.url,
    logo: `${site.url}/images/DKKCircularLogo.jpg`,
    foundingDate: "1990",
    telephone: "+447976411901",
    email: "info@goju-karate.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "309 Regent Street",
      addressLocality: "London",
      postalCode: "W1B 2HW",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5171,
      longitude: -0.1419,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "18:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "18:00", closes: "20:00" },
    ],
    sport: "Karate",
    image: `${site.url}/images/Club/dojo-full-class.JPG`,
    sameAs: [
      "https://www.instagram.com/dkk_karate_london",
      "https://www.facebook.com/groups/24449490051/",
    ],
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${kanji.variable}`}>
      <body className="bg-night text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
