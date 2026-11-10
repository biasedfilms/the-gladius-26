import type { NextConfig } from "next";

/**
 * Next.js refuses its development connection to any address but localhost, and
 * without it the page never hydrates: the "Network" address, or a phone on the
 * same Wi-Fi, shows a dead page. Private ranges rather than this machine's
 * current address, which changes with DHCP while the server keeps running.
 * Development only: this has no effect on the production build.
 */
const PRIVATE_NETWORKS = [
  "192.168.*.*",
  "10.*.*.*",
  // 172.16–31: includes the 172.20.10.x of an iPhone hotspot.
  ...Array.from({ length: 16 }, (_, index) => `172.${16 + index}.*.*`),
  "*.local",
];

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: PRIVATE_NETWORKS,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // 90 keeps the fine chain and helmet detail of the emblem clean.
    qualities: [75, 90],
  },
  turbopack: {
    rules: {
      "*.css": {
        // CSS Modules must stay modules: without this they lose their class map.
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
