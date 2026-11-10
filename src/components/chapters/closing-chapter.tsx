import Image from "next/image";

import { PitchCircle } from "@/components/emblem/construction";
import { ToothRing } from "@/components/emblem/tooth-ring";
import { LinkedCopy } from "@/components/links/external-link";
import { MaskedLines } from "@/components/motion/masked-lines";
import { OnView } from "@/components/motion/on-view";
import { Reveal } from "@/components/motion/reveal";
import { closing } from "@/content/closing";
import { brandAssets } from "@/content/site";

import styles from "./closing-chapter.module.css";

export function ClosingChapter() {
  const { emblem } = brandAssets;
  return (
    <section
      id="penutup"
      aria-labelledby="penutup-title"
      className={styles.closing}
    >
      <div aria-hidden="true" className={styles.light} />
      <div className={`page-shell ${styles.inner}`}>
        <OnView className={styles.emblem} amount={0.45}>
          <PitchCircle className={styles.pitch} circleClassName={styles.pitchCircle} />
          <Image
            src={emblem.src}
            alt={emblem.alt}
            width={emblem.width}
            height={emblem.height}
            quality={90}
            sizes="(min-width: 768px) 24rem, 60vw"
            className={styles.mark}
          />
          <ToothRing className={styles.ring} tickClassName={styles.tick} />
        </OnView>

        <MaskedLines
          id="penutup-title"
          lines={[closing.headline.lead]}
          className={styles.headline}
        />

        <div className={styles.lines}>
          {closing.lines.map((line, index) => (
            <Reveal key={line} delay={0.15 + index * 0.16}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>

        <span aria-hidden="true" className={styles.point} />
        <p className={`meta ${styles.signature}`}>
          <LinkedCopy text={closing.signature} />
        </p>
      </div>
    </section>
  );
}
