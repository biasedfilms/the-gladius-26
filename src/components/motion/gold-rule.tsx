import type { CSSProperties } from "react";

import { ToothRack } from "@/components/emblem/tooth-rack";

import { OnView } from "./on-view";

type GoldRuleProps = {
  className?: string;
  /** Seconds to wait once it has been seen. */
  delay?: number;
};

/**
 * The gold bar from the emblem's wordmark with the gear's rim set along it. It
 * draws once at each change of surface, from the left, like a ruled line.
 */
export function GoldRule({ className = "", delay = 0 }: GoldRuleProps) {
  return (
    <OnView aria-hidden="true" className={`relative h-[9px] ${className}`} amount={0.5}>
      <div
        data-reveal="wipe"
        className="absolute inset-0"
        style={{ "--delay": `${delay}s` } as CSSProperties}
      >
        <span className="absolute inset-x-0 top-0 h-px bg-gold" />
        <ToothRack className="absolute inset-x-0 top-0 h-1.5 w-full text-gold" />
        <span className="absolute -top-[2.5px] right-0 size-1.5 rotate-45 bg-gold" />
      </div>
    </OnView>
  );
}
