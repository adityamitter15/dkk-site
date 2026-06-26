import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import BackToTop from "@/components/BackToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f0e0c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goju-karate.co.uk"),
  title: {
    default: "Daigaku Karate Kai London - Okinawan Goju Ryu",
    template: "%s | DKK London",
  },
  description: "Okinawan Goju Ryu karate for adults in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan. Monday & Wednesday, 309 Regent Street.",
  keywords: ["karate", "goju ryu", "okinawan karate", "martial arts london", "DKK", "daigaku karate kai", "gavin mulholland", "combat karate", "self defence london"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Daigaku Karate Kai London",
    images: [
      {
        url: "/images/Club/dojo-full-class.JPG",
        width: 1200,
        height: 630,
        alt: "Daigaku Karate Kai London - Okinawan Goju Ryu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Club/dojo-full-class.JPG"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "DKK London",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Daigaku Karate Kai London",
    description: "Okinawan Goju Ryu karate for adults in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan.",
    url: "https://www.goju-karate.co.uk",
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
    image: "/images/Club/dojo-full-class.JPG",
  };

  return (
    <html lang="en">
      <body className="bg-[#0f0e0c] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <BackToTop />
      </body>
    </html>
  );
}
