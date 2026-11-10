"use client";

import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import styles from "./blade.module.css";

/**
 * The name, drawn. An abstract blade (not part of the logo) slides out from the
 * edge of the page as the visitor scrolls past it, engraved with its own name.
 * One line of light runs along the metal as it clears the edge, tied to scroll.
 */
export function Blade() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 30%"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-58%", "0%"]);
  const glint = useTransform(scrollYProgress, [0.35, 1], ["-120%", "520%"]);

  return (
    <div ref={ref} aria-hidden="true" className={styles.track}>
      <m.div data-reveal="scroll" className={styles.sword} style={{ x }}>
        <span className={styles.guard} />
        <div className={styles.blade}>
          <div className={styles.face}>
            <m.span className={styles.glint} style={{ x: glint }} />
            <span className={styles.name}>GLADIUS</span>
          </div>
        </div>
      </m.div>
    </div>
  );
}
