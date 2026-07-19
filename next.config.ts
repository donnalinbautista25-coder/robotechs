import type { NextConfig } from "next";

/**
 * Portable Next.js config — works on Vercel and any Node host.
 * Avoid Vercel-only APIs so the app can move to Docker, Railway,
 * Render, Netlify (with Next runtime), or a VPS with `next start`.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Uncomment for Docker / self-hosting with a smaller runtime image:
  // output: "standalone",
};

export default nextConfig;
