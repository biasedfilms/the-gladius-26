"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * A reveal never takes back what the visitor can already see. A reload or a deep
 * link lands mid-page with headlines on screen, and on a slow connection they
 * have been readable for seconds by now: hiding one to rise again reads as a fault.
 */
function keepWhatHasBeenSeen() {
  document.querySelectorAll("[data-pending]").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.removeAttribute("data-pending");
    }
  });
}

// Loaded after the first paint: the hero is pure CSS and never waits for this.
const loadFeatures = () =>
  import("./motion-features").then((module) => {
    keepWhatHasBeenSeen();
    // Reveals may only hide from here on: something is running to bring them back.
    document.documentElement.dataset.motion = "ready";
    return module.default;
  });

/** Applies the visitor's reduced-motion preference to every Motion animation. */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
