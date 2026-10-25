import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*
   * Allow phones and other devices on the LAN to load dev-only resources
   * (HMR, fonts). Next.js blocks these by default, which prevents the client
   * from hydrating when the dev server is opened via a non-localhost host.
   */
  allowedDevOrigins: ["192.168.1.2"],
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  experimental: {
    /*
     * First-visit optimization: keep the Tailwind stylesheet in the HTML
     * instead of making the browser request it before first paint. Measured
     * LCP improvement: 544ms -> 440ms at 4x CPU / 1.6Mbps. Trade-off: the CSS
     * is duplicated in the RSC payload, so HTML gzip grows from ~18KB to ~39KB.
     */
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/opengraph-image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/twitter-image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
