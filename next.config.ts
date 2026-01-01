import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // Ensure proper hot reloading
  reactStrictMode: true,
};

export default nextConfig;
