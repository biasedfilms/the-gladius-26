import type { CSSProperties } from "react";

import { OnView } from "./on-view";

type ChapterMarkerProps = {
  chapter: string;
  label: string;
  /** The sheet reference at the far end of the line. */
  annotation: string;
  className?: string;
};

/**
 * `Bab I · Identitas`, the Indonesian book convention, joined to its sheet
 * reference by a dimension line: the two end ticks and a span, as measured on a
 * drawing. The line draws first and the reference is uncovered behind it.
 */
export function ChapterMarker({ chapter, label, annotation, className = "" }: ChapterMarkerProps) {
  return (
    <OnView className={`chapter-marker meta ${className}`} amount={0.6}>
      <p className="chapter-marker-name">
        <span>{chapter}</span>
        <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
        <span>{label}</span>
      </p>
      <span
        data-reveal="wipe"
        aria-hidden="true"
        className="chapter-marker-span"
        style={{ "--delay": "0.1s", "--duration": "1.1s" } as CSSProperties}
      />
      <span
        data-reveal="wipe"
        aria-hidden="true"
        className="chapter-marker-reference"
        style={{ "--delay": "0.75s", "--duration": "0.8s" } as CSSProperties}
      >
        {annotation}
      </span>
    </OnView>
  );
}
