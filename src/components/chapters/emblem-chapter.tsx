import { EmblemExplorer } from "@/components/emblem/emblem-explorer";
import { LinkedCopy } from "@/components/links/external-link";
import { ChapterMarker } from "@/components/motion/chapter-marker";
import { MaskedLines } from "@/components/motion/masked-lines";
import { PrecisionGrid } from "@/components/motion/precision-grid";
import { emblemChapter } from "@/content/emblem";

export function EmblemChapter() {
  return (
    <section
      id="lambang"
      tabIndex={-1}
      aria-labelledby="lambang-title"
      className="surface-silver relative bg-silver-100 text-ink"
    >
      <div className="relative isolate">
        <PrecisionGrid />
        <div className="page-shell grid gap-8 pt-(--section-space) pb-[clamp(3rem,7vw,5.5rem)] lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-12">
            <ChapterMarker
              chapter={emblemChapter.chapter}
              label={emblemChapter.label}
              annotation={emblemChapter.annotation}
              className="text-royal"
            />
            <MaskedLines
              id="lambang-title"
              lines={emblemChapter.headline}
              narrowLines={emblemChapter.headlineNarrow}
              className="display chapter-title mt-7"
            />
          </div>
          <p className="measure lg:col-span-5 lg:col-start-8">
            <LinkedCopy text={emblemChapter.introduction} />
          </p>
        </div>
      </div>

      <EmblemExplorer />
    </section>
  );
}
