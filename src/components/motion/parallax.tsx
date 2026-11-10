"use client";

import { m, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total travel in percent of the element's height, split around its resting place. */
  travel?: number;
};

/** A slow drift tied to scroll position. Scroll itself is never touched. */
export function Parallax({ children, className, travel = 14 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-travel / 2}%`, `${travel / 2}%`]);

  return (
    <div ref={ref} aria-hidden="true" className={className}>
      <m.div data-parallax style={{ y }}>
        {children}
      </m.div>
    </div>
  );
}
