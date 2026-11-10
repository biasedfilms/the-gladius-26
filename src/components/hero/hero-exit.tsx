"use client";

import { m, useScroll, useTransform, type MotionStyle } from "motion/react";
import type { ReactNode } from "react";

/**
 * The hero recedes as the first silver chapter rises over it. `--exit` runs from 0
 * to 1 so the CSS can move each layer at its own rate: the title lifts away while
 * the emblem holds back. Scroll is never captured: this only reads position.
 */
export function HeroExit({ className, children }: { className?: string; children: ReactNode }) {
  const { scrollY } = useScroll();
  const exit = useTransform(scrollY, [0, 720], [0, 1]);
  const opacity = useTransform(exit, [0, 1], [1, 0.25]);

  return (
    <m.div className={className} style={{ opacity, "--exit": exit } as MotionStyle}>
      {children}
    </m.div>
  );
}
