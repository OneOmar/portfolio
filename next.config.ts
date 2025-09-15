import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // for static export
  // basePath: "/portfolio",      // repo name
  // assetPrefix: "/portfolio/",  // repo name
  typescript: {
    ignoreBuildErrors: true,   // skip TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // skip ESLint checks at build time
  },
};

export default nextConfig;
