"use client";

import type { CSSProperties, RefObject } from "react";

import { ExternalLink, splitNames, targetFor } from "@/components/links/external-link";

import { useSeen } from "./use-seen";

type MaskedLinesProps = {
  lines: readonly string[];
  /** The same words broken for narrow screens, used below the `lg` breakpoint. */
  narrowLines?: readonly string[];
  id?: string;
  as?: "h2" | "p";
  className?: string;
  /** One class for every line, or one per line. */
  lineClassName?: string | readonly string[];
  delay?: number;
  /** Turn the full names into links. Those lines are read as they are shown. */
  linked?: boolean;
};

type LinesProps = Pick<MaskedLinesProps, "lineClassName" | "delay" | "linked"> & {
  lines: readonly string[];
};

/** Seconds between one word and the next, across the whole headline. */
const STAGGER = 0.075;

/** Words of one line, with a full name kept together as a single piece. */
function pieces(line: string, linked = false) {
  if (!linked) return line.split(" ").map((text) => ({ text, isName: false }));
  return splitNames(line).flatMap((part, index) =>
    index % 2 === 1
      ? [{ text: part, isName: true }]
      : part
          .split(" ")
          .filter(Boolean)
          .map((text) => ({ text, isName: false })),
  );
}

function Lines({ lines, lineClassName, delay = 0, linked }: LinesProps) {
  const lineWords = lines.map((line) => pieces(line, linked));

  return lineWords.map((words, lineIndex) => {
    const before = lineWords.slice(0, lineIndex).reduce((sum, { length }) => sum + length, 0);
    return (
      <span
        key={lines[lineIndex]}
        className={`mask-line ${
          typeof lineClassName === "string" ? lineClassName : (lineClassName?.[lineIndex] ?? "")
        }`}
      >
        {words.map(({ text, isName }, wordIndex) => {
          const target = isName ? targetFor(text) : undefined;
          return (
            <span key={`${text}-${wordIndex}`}>
              <span
                data-reveal="word"
                className="inline-block"
                style={{ "--delay": `${delay + (before + wordIndex) * STAGGER}s` } as CSSProperties}
              >
                {target ? (
                  <ExternalLink target={target} className="name-link">
                    {text}
                  </ExternalLink>
                ) : (
                  text
                )}
              </span>{" "}
            </span>
          );
        })}
      </span>
    );
  });
}

/**
 * Display type rising word by word from behind its own baseline.
 * Reserved for headlines; body copy never animates.
 * The in-view check watches the wrapper because a translated word sits outside
 * its clipped mask and would never be reported as visible.
 */
export function MaskedLines({
  lines,
  narrowLines,
  id,
  as: Tag = "h2",
  className,
  lineClassName,
  delay,
  linked,
}: MaskedLinesProps) {
  const { ref, pending } = useSeen<HTMLElement>(0.4);
  const shared = { lineClassName, delay, linked };
  const root = {
    id,
    className,
    ref: ref as RefObject<HTMLHeadingElement>,
    "data-pending": pending,
  };

  if (linked) {
    return (
      <Tag {...root}>
        <Lines lines={lines} {...shared} />
      </Tag>
    );
  }

  return (
    <Tag {...root}>
      <span className="sr-only">{lines.join(" ")}</span>
      {narrowLines ? (
        <>
          <span aria-hidden="true" className="block lg:hidden">
            <Lines lines={narrowLines} {...shared} />
          </span>
          <span aria-hidden="true" className="hidden lg:block">
            <Lines lines={lines} {...shared} />
          </span>
        </>
      ) : (
        <span aria-hidden="true" className="block">
          <Lines lines={lines} {...shared} />
        </span>
      )}
    </Tag>
  );
}
