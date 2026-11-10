import type { CSSProperties } from "react";

import styles from "./hero.module.css";

const THE = ["T", "H", "E"];
const GLADIUS = ["G", "L", "A", "D", "I", "U", "S"];

function Letters({ letters, offset }: { letters: readonly string[]; offset: number }) {
  return letters.map((letter, index) => (
    <span key={`${letter}-${index}`} className={styles.clip}>
      <span
        className={styles.glyph}
        data-letter={letter}
        style={{ "--i": index + offset } as CSSProperties}
      >
        {letter}
      </span>
    </span>
  ));
}

/** Split into letters for the reveal; Bodoni Moda has no kerning in these pairs. */
export function TitleThe() {
  return (
    <span aria-hidden="true" className={styles.line}>
      <Letters letters={THE} offset={0} />
    </span>
  );
}

export function TitleGladius() {
  return (
    <span aria-hidden="true" className={styles.line}>
      <Letters letters={GLADIUS} offset={2} />
    </span>
  );
}
