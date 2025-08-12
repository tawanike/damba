import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Bypass Next.js image optimizer to avoid 404s on /_next/image
    // Remote Unsplash images will be requested directly by the browser.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
