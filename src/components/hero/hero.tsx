import Image from "next/image";
import type { CSSProperties } from "react";

import { PitchCircle } from "@/components/emblem/construction";
import { ToothRack } from "@/components/emblem/tooth-rack";
import { ToothRing } from "@/components/emblem/tooth-ring";
import { InstitutionalLockup } from "@/components/institutional-lockup/institutional-lockup";
import { brandAssets, site } from "@/content/site";

import { HeroExit } from "./hero-exit";
import { TitleGladius, TitleThe } from "./hero-title";
import styles from "./hero.module.css";

/** Each digit of the edition turns up on its own wheel, like a mechanical counter. */
function EditionWheels() {
  return site.edition.split("").map((digit, index) => (
    <span
      key={index}
      className={styles.wheel}
      style={{ "--digit": digit, "--wheel": index } as CSSProperties}
    >
      <span className={styles.wheelSizer}>{digit}</span>
      <span className={styles.reel}>
        {Array.from({ length: Number(digit) + 1 }, (_, value) => (
          <span key={value}>{value}</span>
        ))}
      </span>
    </span>
  ));
}

export function Hero() {
  const { emblem } = brandAssets;

  return (
    <section id="beranda" tabIndex={-1} aria-labelledby="hero-title" className={styles.hero}>
      <div aria-hidden="true" className={styles.light} />

      <HeroExit className={styles.stage}>
        <h1 id="hero-title" className={styles.title}>
          <span className="sr-only">{site.name}</span>
          <span className={styles.theRow}>
            <TitleThe />
          </span>
          <span className={styles.nameRow}>
            <TitleGladius />
            <span aria-hidden="true" className={styles.edition}>
              <span className={styles.editionNumber}>
                <EditionWheels />
              </span>
              <span className={styles.editionLabel}>{site.editionLabel}</span>
            </span>
          </span>
        </h1>

        <div className={styles.emblem}>
          <div className={styles.emblemFrame}>
            <span aria-hidden="true" className={styles.axisX} />
            <span aria-hidden="true" className={styles.axisY} />
            <PitchCircle className={styles.pitch} circleClassName={styles.pitchCircle} />
            <div className={styles.emblemIris}>
              <Image
                src={emblem.src}
                alt={emblem.alt}
                width={emblem.width}
                height={emblem.height}
                loading="eager"
                fetchPriority="high"
                quality={90}
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 56vw, 78vw"
                className="size-full object-contain"
              />
            </div>
            <ToothRing className={styles.ring} tickClassName={styles.tick} />
          </div>
        </div>

        <div aria-hidden="true" className={styles.rule}>
          <span className={styles.ruleLine} />
          <ToothRack className={styles.rack} tickClassName={styles.rackTick} />
        </div>

        <div className={styles.foot}>
          <div className={styles.statement}>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={`meta ${styles.archive}`}>{site.archiveLabel}</p>
          </div>
          <InstitutionalLockup eager markHeight={52} className={styles.lockup} />
        </div>
      </HeroExit>
    </section>
  );
}
