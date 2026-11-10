import type { CSSProperties } from "react";

import { EMBLEM_HEIGHT, EMBLEM_WIDTH, TOOTH_ANGLES, TOP_TOOTH_INDEX, polar } from "./geometry";

type ToothRingProps = {
  className?: string;
  tickClassName?: string;
  /** Distance of the ticks from the gear's centre, in source pixels. */
  innerRadius?: number;
  outerRadius?: number;
  strokeWidth?: number;
};

/**
 * The site's one signature: 26 ticks set to the measured angle of each tooth.
 * It sits outside the artwork and never touches the mark itself.
 * Each tick exposes `--tick`, its position counted clockwise from 12 o'clock.
 */
export function ToothRing({
  className = "",
  tickClassName = "",
  innerRadius = 1004,
  outerRadius = 1044,
  strokeWidth = 5,
}: ToothRingProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${EMBLEM_WIDTH} ${EMBLEM_HEIGHT}`}
      className={`pointer-events-none absolute inset-0 size-full overflow-visible ${className}`}
    >
      {TOOTH_ANGLES.map((angle, index) => {
        const from = polar(angle, innerRadius);
        const to = polar(angle, outerRadius);
        const order = (index - TOP_TOOTH_INDEX + TOOTH_ANGLES.length) % TOOTH_ANGLES.length;
        return (
          <line
            key={angle}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={tickClassName}
            style={{ "--tick": order } as CSSProperties}
          />
        );
      })}
    </svg>
  );
}
