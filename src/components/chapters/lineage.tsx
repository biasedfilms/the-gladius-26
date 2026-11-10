"use client";

import { m, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { ExternalArrow, ExternalLink } from "@/components/links/external-link";
import { origins } from "@/content/origins";
import { externalLinks } from "@/content/site";

import styles from "./lineage.module.css";

const { parent, child, sharedStem } = origins.lineage;
const STEM_LENGTH = sharedStem.length;
/** Colour the shared letters take on once the strands reach them. */
const WHITE = "#f8fafc";
const PALE_GOLD = "#e2d6ba";

function Strand({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = index * 0.05;
  const end = 0.72 + start;
  const scaleY = useTransform(progress, [start, end], [0, 1]);
  // The point of the pen, travelling with the line and gone once it arrives.
  const y = useTransform(progress, [start, end], ["0%", "100%"]);
  const opacity = useTransform(progress, [start, start + 0.02, end - 0.02, end], [0, 1, 1, 0]);
  return (
    <>
      <m.i data-reveal="scroll" className={styles.strand} style={{ scaleY }} />
      <m.i className={styles.nib} style={{ y, opacity }} />
    </>
  );
}

function InheritedLetter({
  letter,
  index,
  progress,
}: {
  letter: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.74 + index * 0.05;
  const color = useTransform(progress, [start, start + 0.06], [WHITE, PALE_GOLD]);
  return (
    <m.span className={`${styles.letter} ${styles.inherited}`} style={{ color }}>
      {letter}
    </m.span>
  );
}

function Letters({ text, from, className }: { text: string; from: number; className?: string }) {
  return text
    .slice(from)
    .split("")
    .map((letter, index) => (
      <span
        key={`${letter}-${index}`}
        className={`${styles.letter} ${className ?? ""} ${
          // The only pair in these names that the font kerns: A–T.
          text.slice(from + index, from + index + 2) === "AT" ? styles.kernAT : ""
        }`}
      >
        {letter}
      </span>
    ));
}

/**
 * Parent above, offspring below, in the same size and the same position, so the
 * letters both names share line up exactly. Strands descend between them as the
 * visitor reads. The chapter's copy sits between the two generations.
 */
export function Lineage({ children }: { children: React.ReactNode }) {
  const strands = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: strands,
    offset: ["start 78%", "end 62%"],
  });

  return (
    <div className={styles.lineage}>
      <div className={styles.parent}>
        <ExternalLink target={externalLinks.gladiators} className={styles.nameLink} hiddenText="name">
          <span aria-hidden="true" className={styles.name}>
            <span className={styles.article}>{parent.article}</span>
            <Letters text={parent.name.slice(0, STEM_LENGTH)} from={0} />
            <Letters text={parent.name} from={STEM_LENGTH} className={styles.ghost} />
            <span className={styles.edition}>{parent.edition}</span>
          </span>
          <span aria-hidden="true" className={`meta ${styles.visit}`}>
            {externalLinks.gladiators.service}
            <ExternalArrow />
          </span>
        </ExternalLink>
      </div>

      <div ref={strands} aria-hidden="true" className={styles.strands}>
        <span className={styles.article} />
        {sharedStem.split("").map((letter, index) => (
          <span key={letter} className={styles.strandLetter}>
            {letter}
            <Strand index={index} progress={scrollYProgress} />
          </span>
        ))}
      </div>

      <div className={styles.copy}>{children}</div>

      <div className={styles.child}>
        <ExternalLink target={externalLinks.gladius} className={styles.nameLink} hiddenText="name">
          <span aria-hidden="true" className={styles.name}>
            <span className={styles.article}>{child.article}</span>
            {sharedStem.split("").map((letter, index) => (
              <InheritedLetter
                key={letter}
                letter={letter}
                index={index}
                progress={scrollYProgress}
              />
            ))}
            <Letters text={child.name} from={STEM_LENGTH} />
            <span className={`${styles.edition} ${styles.editionChild}`}>{child.edition}</span>
          </span>
          <span aria-hidden="true" className={`meta ${styles.visit}`}>
            {externalLinks.gladius.service}
            <ExternalArrow />
          </span>
        </ExternalLink>
      </div>
    </div>
  );
}
