import { ClosingChapter } from "@/components/chapters/closing-chapter";
import { EmblemChapter } from "@/components/chapters/emblem-chapter";
import { IdentityChapter } from "@/components/chapters/identity-chapter";
import { MeaningChapter } from "@/components/chapters/meaning-chapter";
import { OriginsChapter } from "@/components/chapters/origins-chapter";
import { SiteFooter } from "@/components/footer/site-footer";
import { Hero } from "@/components/hero/hero";
import { Curtain } from "@/components/motion/curtain";
import { MotionRoot } from "@/components/motion/motion-root";
import { SiteHeader } from "@/components/navigation/site-header";

export default function Home() {
  return (
    <MotionRoot>
      <SiteHeader />
      <main id="konten">
        <Hero />
        {/* Rises over the hero, which stays in place behind it. */}
        <div className="relative z-10">
          <Curtain anchorId="identitas">
            <IdentityChapter />
          </Curtain>
          <OriginsChapter />
          <Curtain anchorId="makna">
            <MeaningChapter />
          </Curtain>
          <EmblemChapter />
          <ClosingChapter />
        </div>
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
