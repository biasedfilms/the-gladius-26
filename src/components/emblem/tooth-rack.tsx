import type { CSSProperties } from "react";

import { TOOTH_ANGLES } from "./geometry";

type ToothRackProps = {
  className?: string;
  tickClassName?: string;
};

/**
 * The gear's rim rolled out flat: 26 ticks at the measured angle of each tooth,
 * read left to right as 0–360°. A straight gear is called a rack, and this one
 * keeps the artwork's hand-drawn spacing, so every rule on the page is the real
 * gear rather than an even ruler.
 */
export function ToothRack({ className = "", tickClassName = "" }: ToothRackProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 10"
      preserveAspectRatio="none"
      className={`block ${className}`}
    >
      {TOOTH_ANGLES.map((angle, index) => (
        <line
          key={angle}
          x1={angle}
          x2={angle}
          y1={0}
          y2={10}
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          className={tickClassName}
          style={{ "--tick": index } as CSSProperties}
        />
      ))}
    </svg>
  );
}
