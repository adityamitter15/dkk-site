import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daigaku Karate Kai London",
    short_name: "DKK London",
    description: "Okinawan Goju Ryu karate in central London. Combat-orientated training under Shihan Gavin Mulholland, 7th Dan.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f0e0c",
    theme_color: "#0f0e0c",
    icons: [
      { src: "/icon.png", sizes: "96x96", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Maskable carries ~20% padding so Android's circle crop cannot clip the crest's outer ring.
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    categories: ["sports", "fitness", "education"],
  };
}
