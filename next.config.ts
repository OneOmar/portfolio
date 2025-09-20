import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // for static export
  output: "export",

  // skip TS errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // skip ESLint checks at build time
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
