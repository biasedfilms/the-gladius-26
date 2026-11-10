import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * No production domain has been supplied, so none is invented here. Set
 * NEXT_PUBLIC_SITE_URL when one is confirmed; Vercel's own URL is used otherwise.
 */
function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

const title = `${site.name} — ${site.archiveLabel}`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};
