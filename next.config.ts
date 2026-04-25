import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* App Router + ISR: do not use output: "export" — use OpenNext for Cloudflare Workers/Pages. */
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap-index",
      },
    ];
  },
};

export default nextConfig;

/** Dev-only: avoids spawning workerd during `next build` (unsupported on older macOS). */
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
