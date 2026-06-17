import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    // Im Dev-Modus braucht Next.js (React Fast Refresh) 'unsafe-eval'.
    // In Produktion bleibt die Policy ohne 'unsafe-eval' streng.
    const isDev = process.env.NODE_ENV !== "production";
    const devEval = isDev ? " 'unsafe-eval'" : "";

    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${devEval} https://vercel.live https://www.paypal.com https://www.sandbox.paypal.com https://*.paypalobjects.com`,
      "style-src 'self' 'unsafe-inline' https://vercel.live",
      "img-src 'self' data: blob: https://images.unsplash.com https://*.tile.openstreetmap.org https://vercel.live https://vercel.com https://*.paypal.com https://*.paypalobjects.com",
      "font-src 'self' data: https://vercel.live",
      "media-src 'self' blob:",
      "frame-src https://www.openstreetmap.org https://www.paypal.com https://www.sandbox.paypal.com https://vercel.live",
      "connect-src 'self' https://vercel.live https://*.pusher.com wss://*.pusher.com https://www.paypal.com https://www.sandbox.paypal.com https://api-m.paypal.com https://api-m.sandbox.paypal.com https://*.paypal.com",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          { key: "Content-Security-Policy", value: csp },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
