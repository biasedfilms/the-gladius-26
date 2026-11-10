"use client";

import { m, useScroll } from "motion/react";
import { useId } from "react";

import { TOOTH_ANGLES } from "@/components/emblem/geometry";
import { site } from "@/content/site";

const SIZE = 44;
const CENTER = SIZE / 2;
const INNER = 15.5;
const OUTER = 20;

function point(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.round((CENTER + radius * Math.cos(radians)) * 100) / 100,
    y: Math.round((CENTER + radius * Math.sin(radians)) * 100) / 100,
  };
}

function Ticks() {
  return TOOTH_ANGLES.map((angle) => {
    const from = point(angle, INNER);
    const to = point(angle, OUTER);
    return <line key={angle} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
  });
}

/**
 * Reading progress as the gear's 26 teeth, lit one by one around the 26.
 * The position is also available from the page itself, so this is decorative.
 */
export function ProgressDial() {
  const maskId = useId();
  const { scrollYProgress } = useScroll();

  return (
    <span aria-hidden="true" data-js-only className="relative block size-11 shrink-0">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="size-full">
        <mask id={maskId}>
          <m.circle
            cx={CENTER}
            cy={CENTER}
            r={18}
            fill="none"
            stroke="#fff"
            strokeWidth={12}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
            style={{ pathLength: scrollYProgress }}
          />
        </mask>
        <g stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" opacity={0.3}>
          <Ticks />
        </g>
        <g
          stroke="var(--color-gold)"
          strokeWidth={1.5}
          strokeLinecap="round"
          mask={`url(#${maskId})`}
        >
          <Ticks />
        </g>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-[0.8125rem] leading-none font-semibold">
        {site.edition}
      </span>
    </span>
  );
}
