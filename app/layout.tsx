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
    // Lead with the phrase people type, not the brand nobody searches for.
    // Every club on page one of "karate london" does this; DKK did not.
    default: "Karate in Central London | Daigaku Karate Kai",
    template: "%s | DKK Karate London",
  },
  description: "Adult karate classes in central London since 1990. Authentic Okinawan Goju Ryu, combat-orientated, under Shihan Gavin Mulholland, 7th Dan. Monday and Wednesday, 6-8pm, one minute from Oxford Circus. First class free.",
  alternates: { canonical: "/" },
  // Google ignores the keywords meta entirely. Kept only because Bing and some
  // smaller engines still read it, and it costs nothing.
  keywords: ["karate london", "karate classes london", "adult karate london", "goju ryu london", "okinawan karate", "martial arts london", "self defence london", "karate near oxford circus", "university of westminster karate club", "daigaku karate kai", "gavin mulholland", "DKK karate"],
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
  // Icons are declared explicitly from /public rather than via the app/ file
  // convention, because that convention appends a content hash as a query
  // string (/favicon.ico?favicon.7d791c6d.ico). Google's favicon documentation
  // asks for a STABLE url it does not have to re-fetch, and the hash changes on
  // every redeploy. These urls never change.
  //
  // The 96px PNG is listed first because Google requires the icon it picks to
  // be a square multiple of 48px; a 32x32 .ico is not one, so the .ico trails
  // as the legacy browser fallback.
  icons: {
    icon: [
      { url: "/icon.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
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
    // Stable @id so the Person and Breadcrumb graphs on other pages can point
    // at this entity rather than describing a second, unrelated organisation.
    "@id": `${site.url}/#organization`,
    founder: {
      "@type": "Person",
      name: "Gavin Mulholland",
      jobTitle: "Shihan, 7th Dan",
      url: `${site.url}/shihan`,
    },
    // Local-intent signals. areaServed is what ties the club to "karate london"
    // style queries; publicAccess and isAccessibleForFree answer the two things
    // every enquiry asks before turning up.
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Greater London" },
    ],
    // The club's actual Google Maps entity, not a search link. Pointing hasMap
    // and sameAs at the real place ties this site to that listing, which is the
    // thing that ranks in the local pack.
    hasMap: "https://maps.google.com/?cid=13776758326457460286",
    publicAccess: true,
    isAccessibleForFree: false,
    currenciesAccepted: "GBP",
    knowsAbout: [
      "Okinawan Goju Ryu",
      "Karate",
      "Kata",
      "Kumite",
      "Ne-waza",
      "Okinawan kobudo",
      "Self defence",
    ],
    // audienceType only. The site says "open to all adults" but never states a
    // minimum age, and inventing one in structured data would be a claim the
    // club has not made. Ask them, then add suggestedMinAge.
    audience: {
      "@type": "Audience",
      audienceType: "Adults",
    },
    slogan: "Real karate. No compromises.",
    sameAs: [
      "https://maps.google.com/?cid=13776758326457460286",
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
