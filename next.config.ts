import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* App Router + ISR: do not use output: "export" — use OpenNext for Cloudflare Workers/Pages. */
};

export default nextConfig;

/** Dev-only: avoids spawning workerd during `next build` (unsupported on older macOS). */
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
