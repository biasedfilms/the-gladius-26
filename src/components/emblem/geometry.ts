import type { EmblemElementId } from "@/content/emblem";

/**
 * Calibration of the supplied emblem, in source pixels (2048 × 2041).
 * Measured by sampling the PNG's alpha channel and colours. Nothing here is
 * drawn as part of the mark: these shapes only place light, hit areas and ticks.
 */
export const EMBLEM_WIDTH = 2048;
export const EMBLEM_HEIGHT = 2041;
export const GEAR_CENTER = { x: 1026.2, y: 995.9 } as const;

/**
 * Centre of each of the 26 teeth in degrees, clockwise from the +x axis.
 * The artwork is hand-drawn: spacing runs from 12.9° to 15.3°.
 */
export const TOOTH_ANGLES = [
  6.1, 19.1, 32.3, 45.6, 59.7, 75, 90, 105.1, 120.4, 134.5, 147.8, 161, 174,
  187.3, 200.2, 213.2, 226.4, 240, 254.8, 269.9, 285, 299.9, 313.6, 326.9,
  339.8, 352.7,
] as const;

/** Index of the tooth at 12 o'clock, so sequences can start from the top. */
export const TOP_TOOTH_INDEX = 19;

const round = (value: number) => Math.round(value * 100) / 100;

export function polar(angleDegrees: number, radius: number) {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: round(GEAR_CENTER.x + radius * Math.cos(radians)),
    y: round(GEAR_CENTER.y + radius * Math.sin(radians)),
  };
}

function polygon(points: ReadonlyArray<readonly [number, number]>) {
  return `M${points.map(([x, y]) => `${x} ${y}`).join("L")}Z`;
}

function ring(outer: number, inner: number) {
  const { x, y } = GEAR_CENTER;
  const circle = (r: number) =>
    `M${x - r} ${y}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0Z`;
  return `${circle(outer)}${circle(inner)}`;
}

function shield([left, top, right, bottom]: readonly [number, number, number, number]) {
  const middle = (left + right) / 2;
  const height = bottom - top;
  return polygon([
    [left, top + height * 0.1],
    [middle, top],
    [right, top + height * 0.1],
    [right, top + height * 0.56],
    [middle, bottom],
    [left, top + height * 0.56],
  ]);
}

const SWORD_HILT = polygon([
  [975, 560],
  [1078, 560],
  [1078, 660],
  [1195, 660],
  [1195, 748],
  [850, 748],
  [850, 660],
  [975, 660],
]);

const SWORD_BLADE = polygon([
  [936, 932],
  [1116, 932],
  [1116, 1440],
  [1024, 1826],
  [936, 1440],
]);

const HELMET = polygon([
  [986, 142],
  [1072, 142],
  [1082, 286],
  [1152, 392],
  [1152, 524],
  [1094, 624],
  [958, 624],
  [894, 524],
  [890, 392],
  [976, 286],
]);

const SHIELDS = [
  shield([566, 946, 738, 1218]),
  shield([750, 940, 1012, 1272]),
  shield([1040, 940, 1298, 1272]),
  shield([1312, 946, 1482, 1218]),
];

/** Regions light the element and double as its pointer and touch target. */
export const EMBLEM_REGIONS: Record<EmblemElementId, string> = {
  gear: ring(976, 816),
  rantai: ring(806, 688),
  pedang: `${SWORD_HILT}${SWORD_BLADE}`,
  perisai: SHIELDS.join(""),
  helm: HELMET,
};

/** Stacking for hit testing: inner, smaller elements win over the outer rings. */
export const REGION_ORDER: readonly EmblemElementId[] = [
  "gear",
  "rantai",
  "pedang",
  "perisai",
  "helm",
];

type Point = { x: number; y: number };

/** Radius of a numbered callout circle, in source pixels. */
export const BALLOON_RADIUS = 74;
const BALLOON_DISTANCE = 1156;

/**
 * Where each element is called out, as on an assembly drawing: a numbered circle
 * outside the gear and a leader line ending on the part. The circles run clockwise
 * in reading order. Anchors sit on the regions above.
 */
const CALLOUTS: Record<EmblemElementId, { angle: number; anchor: Point }> = {
  pedang: { angle: 118, anchor: { x: 986, y: 1560 } },
  helm: { angle: 242, anchor: { x: 962, y: 330 } },
  rantai: { angle: 320, anchor: polar(320, 747) },
  perisai: { angle: 15, anchor: { x: 1396, y: 1070 } },
  gear: { angle: 60, anchor: polar(60, 896) },
};

export function calloutGeometry(id: EmblemElementId) {
  const { angle, anchor } = CALLOUTS[id];
  const balloon = polar(angle, BALLOON_DISTANCE);
  const length = Math.hypot(anchor.x - balloon.x, anchor.y - balloon.y);
  const start = {
    x: round(balloon.x + ((anchor.x - balloon.x) / length) * BALLOON_RADIUS),
    y: round(balloon.y + ((anchor.y - balloon.y) / length) * BALLOON_RADIUS),
  };
  return { balloon, anchor, start };
}

/** A soft-edged mask of one region, ready for the CSS `mask-image` property. */
export function regionMaskUrl(id: EmblemElementId) {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${EMBLEM_WIDTH} ${EMBLEM_HEIGHT}' preserveAspectRatio='none'>` +
    `<filter id='s' x='-10%' y='-10%' width='120%' height='120%'><feGaussianBlur stdDeviation='9'/></filter>` +
    `<path filter='url(#s)' fill='#fff' fill-rule='evenodd' d='${EMBLEM_REGIONS[id]}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
