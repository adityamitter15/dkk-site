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
  },
};

export default nextConfig;
