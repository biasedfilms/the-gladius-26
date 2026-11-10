import type { Viewport } from "next";
import type { ReactNode } from "react";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";

import { siteMetadata } from "@/lib/metadata";

import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#0e3670",
};

/**
 * Runs before the first paint and decides which page the visitor gets.
 * No JavaScript: `data-motion` is never set and the static layout stays.
 * JavaScript that never starts, because a script failed to load: the static
 * layout returns after ten seconds. MotionRoot sets "ready" when all is well.
 * The rules for each state are in globals.css.
 */
const motionWatchdog = `(function(r){r.dataset.motion="pending";setTimeout(function(){if(r.dataset.motion==="pending")delete r.dataset.motion},1e4)})(document.documentElement)`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${bodoni.variable} ${manrope.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionWatchdog }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Lewati ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
