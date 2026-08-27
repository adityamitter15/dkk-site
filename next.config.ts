import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    // Baked at build time. Seeds the year components so server HTML and the
    // first client render agree; the client then corrects from its own clock.
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
    // Cloudflare Web Analytics site token. NOT a secret - it ships in the HTML
    // of every page by design. Committed here rather than in a .env file
    // because .env* is gitignored, so a fresh clone would otherwise build with
    // analytics silently switched off. An env var still overrides it.
    NEXT_PUBLIC_CF_ANALYTICS_TOKEN:
      process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN ?? "b600949a3e934ed399164ce714a494f9",
  },
};

export default nextConfig;
