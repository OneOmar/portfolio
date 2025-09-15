import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // for static export
  typescript: {
    ignoreBuildErrors: true,   // skip TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // skip ESLint checks at build time
  },
};

export default nextConfig;
