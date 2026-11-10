import { LinkedCopy } from "@/components/links/external-link";
import { ChapterMarker } from "@/components/motion/chapter-marker";
import { MaskedLines } from "@/components/motion/masked-lines";
import { Reveal } from "@/components/motion/reveal";
import { meaning } from "@/content/meaning";

import { Blade } from "./blade";
import styles from "./meaning-chapter.module.css";

export function MeaningChapter() {
  return (
    <section
      aria-labelledby="makna-title"
      className="relative overflow-clip bg-royal-alt pt-(--section-space) pb-(--section-space) text-white"
    >
      <div className="page-shell">
        <ChapterMarker
          chapter={meaning.chapter}
          label={meaning.label}
          annotation={meaning.annotation}
          className="text-gold-pale"
        />
        <MaskedLines
          id="makna-title"
          lines={meaning.headline}
          narrowLines={meaning.headlineNarrow}
          className="display chapter-title mt-7"
        />
      </div>

      <div className="mt-[clamp(3rem,7vw,5.5rem)]">
        <Blade />
      </div>

      {/* Set as numbered clauses, the way a specification reads. */}
      <div className="page-shell mt-[clamp(3rem,7vw,5.5rem)]">
        <Reveal>
          <p className="editorial text-[clamp(2.25rem,5.2vw,4.25rem)] text-gold-pale">
            {meaning.lead}
          </p>
        </Reveal>
        <ol className={styles.clauses}>
          {meaning.paragraphs.map((paragraph, index) => (
            <li key={paragraph} className={styles.clause}>
              <span aria-hidden="true" className={`meta ${styles.number}`}>
                03.{index + 1}
              </span>
              <p>
                <LinkedCopy text={paragraph} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
