import { LinkedCopy } from "@/components/links/external-link";
import { ChapterMarker } from "@/components/motion/chapter-marker";
import { GoldRule } from "@/components/motion/gold-rule";
import { MaskedLines } from "@/components/motion/masked-lines";
import { Parallax } from "@/components/motion/parallax";
import { PrecisionGrid } from "@/components/motion/precision-grid";
import { Reveal } from "@/components/motion/reveal";
import { identity } from "@/content/identity";
import { site } from "@/content/site";

export function IdentityChapter() {
  return (
    <section
      aria-labelledby="identitas-title"
      className="surface-silver relative isolate overflow-clip bg-silver-200 text-ink"
    >
      <PrecisionGrid />

      <Parallax className="absolute -top-[1vw] -right-[2vw] -z-10 hidden lg:block">
        <span
          data-bleed
          className="block font-display text-[38vw] leading-none font-medium tracking-tight text-transparent [-webkit-text-stroke:1px_var(--color-steel)] opacity-45"
        >
          {site.edition}
        </span>
      </Parallax>

      <GoldRule className="absolute inset-x-0 top-0" />

      <div className="page-shell pt-(--section-space)">
        <ChapterMarker
          chapter={identity.chapter}
          label={identity.label}
          annotation={identity.annotation}
          className="text-royal"
        />

        <MaskedLines
          id="identitas-title"
          lines={identity.headline}
          className="display mt-7 text-[clamp(5rem,23vw,17rem)] leading-[0.86]"
        />

        <div className="mt-[clamp(3rem,7vw,6rem)] grid gap-8 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-6">
            <p className="editorial text-[clamp(2.25rem,5.2vw,4.25rem)] text-royal">
              {identity.lead}
            </p>
          </Reveal>
          <div className="measure space-y-5 lg:col-span-5 lg:col-start-8 lg:pt-3">
            {identity.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <LinkedCopy text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="page-shell pt-[clamp(4rem,9vw,7.5rem)] pb-[clamp(4rem,8vw,6.5rem)] [container-type:inline-size]">
        <GoldRule />
        <MaskedLines
          as="p"
          linked
          lines={identity.closingLine}
          className="display mt-7 text-[clamp(1.875rem,9.4vw,3rem)] leading-[1.06] lg:text-[5.35cqw] lg:whitespace-nowrap"
        />
      </div>
    </section>
  );
}
