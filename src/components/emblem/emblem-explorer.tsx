"use client";

import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

import { LinkedCopy } from "@/components/links/external-link";
import { OnView } from "@/components/motion/on-view";
import { emblemElements, type EmblemElementId } from "@/content/emblem";
import { brandAssets } from "@/content/site";

import {
  BALLOON_RADIUS,
  EMBLEM_REGIONS,
  REGION_ORDER,
  calloutGeometry,
  regionMaskUrl,
} from "./geometry";
import { ToothRing } from "./tooth-ring";
import styles from "./emblem-explorer.module.css";

const { emblem } = brandAssets;
const SIZES = "(min-width: 1024px) 48vw, 92vw";

function panelId(id: EmblemElementId) {
  return `elemen-${id}`;
}

function tabId(id: EmblemElementId) {
  return `tab-${id}`;
}

/** Counts up once when an element with a stated number is opened. */
function Count({ value, unit, active }: { value: number; unit: string; active: boolean }) {
  const reduced = useReducedMotion();
  const output = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = output.current;
    if (!node || !active || reduced) return;
    const duration = Math.min(44 * value + 200, 1350);
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      node.textContent = String(Math.round(1 + (value - 1) * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(frame);
      node.textContent = String(value);
    };
  }, [active, reduced, value]);

  return (
    <p className={`meta ${styles.count}`}>
      <span ref={output} className={styles.countValue}>
        {value}
      </span>{" "}
      {unit}
    </p>
  );
}

/**
 * One part called out on the drawing: a numbered circle outside the gear and a
 * leader line that draws to the element when it is selected.
 */
function Callout({
  id,
  number,
  on,
  onPreview,
  onSelect,
}: {
  id: EmblemElementId;
  number: number;
  on: boolean;
  onPreview: (id: EmblemElementId) => void;
  onSelect: (id: EmblemElementId) => void;
}) {
  const { balloon, anchor, start } = calloutGeometry(id);
  return (
    <g
      className={styles.callout}
      data-on={on}
      style={{ "--order": number } as CSSProperties}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onPreview(id);
      }}
      onClick={() => onSelect(id)}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={anchor.x}
        y2={anchor.y}
        pathLength={1}
        className={styles.leader}
      />
      <circle cx={anchor.x} cy={anchor.y} r={13} className={styles.anchor} />
      <circle cx={balloon.x} cy={balloon.y} r={BALLOON_RADIUS} className={styles.balloon} />
      <text x={balloon.x} y={balloon.y} className={styles.balloonNumber}>
        {number}
      </text>
    </g>
  );
}

/**
 * The emblem as an assembly drawing: a numbered part list and the same numbers
 * called out on the artwork, under a spotlight. Five tabs are the primary,
 * keyboard-accessible control; tapping the artwork selects the same tabs.
 * All five explanations stay in the DOM, stacked in one cell. On a wide screen that
 * cell keeps its height, so the page never jumps. On a narrow one the explanations
 * differ by several screens' worth of lines, so the cell follows the selected one
 * and no empty field is left under a short meaning.
 */
export function EmblemExplorer() {
  const [active, setActive] = useState<EmblemElementId>(emblemElements[0].id);
  const [preview, setPreview] = useState<EmblemElementId | null>(null);
  const tabs = useRef(new Map<EmblemElementId, HTMLButtonElement>());
  const panels = useRef<HTMLDivElement>(null);
  const lit = preview ?? active;
  const activeIndex = emblemElements.findIndex((element) => element.id === active);

  useEffect(() => {
    const container = panels.current;
    const panel = container?.querySelector<HTMLElement>('[data-on="true"]');
    if (!container || !panel) return;
    const update = () => container.style.setProperty("--panel-height", `${panel.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [active]);

  const select = (id: EmblemElementId) => {
    setActive(id);
    setPreview(null);
  };

  const onTabKeyDown = (event: KeyboardEvent, index: number) => {
    const last = emblemElements.length - 1;
    const next = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowRight: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const element = emblemElements[next];
    setActive(element.id);
    tabs.current.get(element.id)?.focus();
  };

  return (
    <div className={styles.bench}>
      <div aria-hidden="true" className={styles.light} />
      <div className={`page-shell ${styles.layout}`}>
        <OnView className={styles.stage} data-lit={lit}>
          <Image
            src={emblem.src}
            alt={emblem.alt}
            width={emblem.width}
            height={emblem.height}
            quality={90}
            sizes={SIZES}
            className={styles.base}
          />

          {emblemElements.map((element) => (
            <Image
              key={element.id}
              src={emblem.src}
              alt=""
              aria-hidden="true"
              width={emblem.width}
              height={emblem.height}
              quality={90}
              sizes={SIZES}
              className={styles.spot}
              data-on={lit === element.id}
              style={{
                maskImage: regionMaskUrl(element.id),
                WebkitMaskImage: regionMaskUrl(element.id),
              }}
            />
          ))}

          <ToothRing
            className={styles.ring}
            tickClassName={styles.tick}
            innerRadius={996}
            outerRadius={1046}
            strokeWidth={7}
          />

          <svg
            aria-hidden="true"
            viewBox={`0 0 ${emblem.width} ${emblem.height}`}
            className={styles.hit}
            onPointerLeave={() => setPreview(null)}
            data-js-only
          >
            {REGION_ORDER.map((id) => (
              <path
                key={id}
                d={EMBLEM_REGIONS[id]}
                fillRule="evenodd"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setPreview(id);
                }}
                onClick={() => select(id)}
              />
            ))}
            {emblemElements.map((element, index) => (
              <Callout
                key={element.id}
                id={element.id}
                number={index + 1}
                on={lit === element.id}
                onPreview={setPreview}
                onSelect={select}
              />
            ))}
          </svg>
        </OnView>

        <div className={styles.controls}>
          <div
            role="tablist"
            aria-label="Lima elemen lambang"
            className={styles.tablist}
            style={{ "--index": activeIndex } as CSSProperties}
            data-js-only
          >
            {emblemElements.map((element, index) => {
              const selected = element.id === active;
              return (
                <button
                  key={element.id}
                  ref={(node) => {
                    if (node) tabs.current.set(element.id, node);
                    else tabs.current.delete(element.id);
                  }}
                  id={tabId(element.id)}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={panelId(element.id)}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(element.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={styles.tab}
                >
                  <span aria-hidden="true" className={styles.tabNumber}>
                    {index + 1}
                  </span>
                  <span className={styles.tabName}>{element.name}</span>
                  <span aria-hidden="true" className={styles.tabCategory}>
                    {element.category}
                  </span>
                </button>
              );
            })}
          </div>

          <div ref={panels} className={styles.panels}>
            {emblemElements.map((element) => {
              const selected = element.id === active;
              return (
                <div
                  key={element.id}
                  id={panelId(element.id)}
                  role="tabpanel"
                  aria-labelledby={tabId(element.id)}
                  aria-hidden={!selected}
                  tabIndex={selected ? 0 : -1}
                  className={styles.panel}
                  data-emblem-panel
                  data-on={selected}
                >
                  <h3 className={styles.panelTitle}>
                    <span className={styles.panelMask}>
                      <span className={styles.panelName}>{element.name}</span>
                    </span>{" "}
                    <span className={`meta ${styles.category}`}>{element.category}</span>
                  </h3>
                  <p className={styles.meaning}>
                    <LinkedCopy text={element.meaning} />
                  </p>
                  {element.count ? (
                    <Count
                      value={element.count.value}
                      unit={element.count.unit}
                      active={selected}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
