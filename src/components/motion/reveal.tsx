import type { CSSProperties, ReactNode } from "react";

import { OnView } from "./on-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait once it has been seen. */
  delay?: number;
};

/**
 * One soft rise, for the single line that opens a chapter's text.
 * Reading copy is never wrapped in this: paragraphs stay still.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <OnView className={className} amount={0.5}>
      <div data-reveal="rise" style={{ "--delay": `${delay}s` } as CSSProperties}>
        {children}
      </div>
    </OnView>
  );
}
