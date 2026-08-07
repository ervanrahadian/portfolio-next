import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting serves the prerendered files in `out/` as a static site.
  output: "export",
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server, which static hosting has none of.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
