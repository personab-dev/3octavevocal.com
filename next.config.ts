import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/about/philosophy", destination: "/philosophy", permanent: true },
      { source: "/about/difference", destination: "/difference", permanent: true },
      { source: "/about/locations", destination: "/locations", permanent: true },
      { source: "/program/basic", destination: "/basic", permanent: true },
      { source: "/program/advanced", destination: "/advanced", permanent: true },
      { source: "/community/reviews", destination: "/reviews", permanent: true },
      { source: "/community/tips", destination: "/tips", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "cdn.imweb.me",
      },
    ],
  },
};

export default nextConfig;
