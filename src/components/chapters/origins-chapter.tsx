import { LinkedCopy } from "@/components/links/external-link";
import { ChapterMarker } from "@/components/motion/chapter-marker";
import { MaskedLines } from "@/components/motion/masked-lines";
import { Reveal } from "@/components/motion/reveal";
import { origins } from "@/content/origins";

import { Lineage } from "./lineage";

export function OriginsChapter() {
  return (
    <section
      id="asal-usul"
      tabIndex={-1}
      aria-labelledby="asal-usul-title"
      className="relative overflow-clip bg-navy py-(--section-space) text-white"
    >
      <div className="page-shell">
        <ChapterMarker
          chapter={origins.chapter}
          label={origins.label}
          annotation={origins.annotation}
          className="text-gold"
        />

        <MaskedLines
          id="asal-usul-title"
          lines={origins.headline}
          narrowLines={origins.headlineNarrow}
          className="display chapter-title mt-7"
        />

        <Reveal className="mt-6" delay={0.35}>
          <p className="editorial text-[clamp(1.625rem,3.4vw,2.75rem)] text-gold-pale">
            {origins.lead}
          </p>
        </Reveal>

        <div className="mt-[clamp(3.5rem,9vw,7rem)]">
          <Lineage>
            <div className="space-y-5">
              {origins.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <LinkedCopy text={paragraph} />
                </p>
              ))}
            </div>
          </Lineage>
        </div>

        <Reveal className="mt-[clamp(3rem,7vw,5.5rem)] max-w-[48rem] lg:ml-auto lg:text-right">
          <p className="editorial text-[clamp(1.875rem,4.4vw,3.5rem)]">{origins.closingLine}</p>
        </Reveal>
      </div>
    </section>
  );
}
