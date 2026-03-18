import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Daigaku Karate Kai London — Okinawan Goju Ryu",
    template: "%s | DKK London",
  },
  description: "Okinawan Goju Ryu karate for adults in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan. Monday & Wednesday, 309 Regent Street.",
  keywords: ["karate", "goju ryu", "okinawan karate", "martial arts london", "DKK", "daigaku karate kai", "gavin mulholland", "combat karate", "self defence london"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Daigaku Karate Kai London",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
