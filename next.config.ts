import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.youtube.com",
        port: "",
        pathname: "/embed/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Performance optimizations
  compress: true,

  // Production optimizations
  reactStrictMode: true,

  // Output
  output: "standalone",

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Headers for security and caching
  async headers() {
    return [
      // Image caching headers
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Static assets caching (fonts, icons, etc.)
      {
        source: "/:all*(svg|jpg|png|webp|avif|ico|woff|woff2|ttf|eot))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
