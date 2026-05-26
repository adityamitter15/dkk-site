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
      { src: "/icon.png", sizes: "48x48", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
    categories: ["sports", "fitness", "education"],
  };
}
