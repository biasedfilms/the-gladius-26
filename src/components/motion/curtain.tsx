"use client";

import { useEffect, useRef, type ReactNode } from "react";

type CurtainProps = {
  /** The chapter's navigation target. See the note below. */
  anchorId: string;
  children: ReactNode;
};

/**
 * Lets the next chapter slide over this one. The chapter scrolls normally until
 * its last line reaches the bottom of the screen, then holds while the following
 * surface rises across it. Plain `position: sticky`: scroll is never captured.
 *
 * The anchor must stay outside the sticky element. An id inside it is measured
 * at its stuck position, so a link back up to the chapter would barely scroll.
 */
export function Curtain({ anchorId, children }: CurtainProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      element.style.top = `${Math.min(0, window.innerHeight - element.offsetHeight)}px`;
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <span id={anchorId} tabIndex={-1} data-anchor className="block" />
      <div ref={ref} className="sticky">
        {children}
      </div>
    </>
  );
}
