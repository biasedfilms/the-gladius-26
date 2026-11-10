/**
 * Guards what must never drift: the supplied brand files, the emblem's structure,
 * the official links and the credits.
 * Runs on Node's built-in test runner with no extra dependencies.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

import { TOOTH_ANGLES, TOP_TOOTH_INDEX } from "../src/components/emblem/geometry.ts";
import { emblemChapter, emblemElements } from "../src/content/emblem.ts";
import { meaning } from "../src/content/meaning.ts";
import { origins } from "../src/content/origins.ts";
import { brandAssets, credits, externalLinks, navigation } from "../src/content/site.ts";

const root = join(import.meta.dirname, "..");
const read = (path: string) => readFileSync(join(root, path), "utf8");

function sourceFiles(directory: string): string[] {
  return readdirSync(join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}

test("public brand files are byte-identical to the supplied originals", () => {
  const manifest = JSON.parse(read("assets/brand/asset-manifest.json")) as {
    assets: { file: string; sha256: string }[];
  };
  assert.equal(manifest.assets.length, 3);
  for (const { file, sha256 } of manifest.assets) {
    const bytes = readFileSync(join(root, "public/images/brand", file));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), sha256, file);
  }
});

test("declared logo sizes match the manifest, so nothing is distorted", () => {
  const manifest = JSON.parse(read("assets/brand/asset-manifest.json")) as {
    assets: { file: string; width: number; height: number }[];
  };
  for (const asset of Object.values(brandAssets)) {
    const entry = manifest.assets.find(({ file }) => asset.src.endsWith(file));
    assert.ok(entry, asset.src);
    assert.equal(asset.width, entry.width);
    assert.equal(asset.height, entry.height);
  }
});

test("narrow headline breaks use the same words in the same order", () => {
  for (const chapter of [origins, meaning, emblemChapter]) {
    assert.equal(chapter.headlineNarrow.join(" "), chapter.headline.join(" "));
  }
});

test("all five emblem elements keep their order, name and category", () => {
  const expected = [
    ["pedang", "Pedang", "PEDANG / IDENTITAS"],
    ["helm", "Helm", "HELM / WARISAN"],
    ["rantai", "Rantai", "RANTAI / PERSAUDARAAN"],
    ["perisai", "Perisai", "PERISAI / KESATUAN"],
    ["gear", "Roda Gear", "RODA GEAR / ANGKATAN 26"],
  ];
  assert.deepEqual(
    emblemElements.map(({ id, name, category }) => [
      id,
      name,
      `${name.toUpperCase()} / ${category.toUpperCase()}`,
    ]),
    expected,
  );
});

test("the gear calibration has one measured angle for each of the 26 teeth", () => {
  assert.equal(TOOTH_ANGLES.length, 26);
  assert.equal(new Set(TOOTH_ANGLES).size, 26);
  assert.ok(Math.abs(TOOTH_ANGLES[TOP_TOOTH_INDEX] - 270) < 1, "12 o'clock tooth");
  const counts = emblemElements.flatMap(({ count }) => (count ? [count.value] : []));
  assert.deepEqual(counts, [4, 26]);
});

test("external links are exactly the official destinations", () => {
  assert.deepEqual(
    Object.values(externalLinks).map(({ href }) => href),
    [
      "https://www.instagram.com/thegladius_26/",
      "https://www.instagram.com/thegladiators_23/",
      "https://unikadelasalle.ac.id/",
      "https://www.instagram.com/fatek.ukdlsm/",
    ],
  );
  const link = read("src/components/links/external-link.tsx");
  assert.ok(link.includes('target="_blank"'));
  // Hidden link text inside a sentence would be copied and indexed as part of it.
  const copy = read("src/components/links/external-link.tsx").split("export function LinkedCopy")[1];
  assert.ok(!copy.includes("hiddenText"), "LinkedCopy must not add hidden text");
  assert.ok(link.includes('rel="noopener noreferrer"'));
  // Everything else goes through that one component, and no other domain appears.
  for (const path of sourceFiles("src")) {
    if (path.endsWith("external-link.tsx")) continue;
    assert.ok(!read(path).includes('target="_blank"'), `${path} opens a tab by itself`);
    if (path.endsWith("site.ts") || path.endsWith("metadata.ts")) continue;
    assert.ok(!/href="https?:/.test(read(path)), `${path} hard-codes a link`);
  }
});

test("copyright and creator credit each name the right party", () => {
  assert.equal(credits.copyright, "© 2026 The Gladius. All rights reserved.");
  assert.equal(credits.creator, "Made by Mikael Kalesaran.");
  assert.ok(!credits.copyright.includes("Mikael"));
  assert.ok(!credits.creator.includes("Gladius"));
});

test("nothing unconfirmed has been invented", () => {
  const unconfirmed = [
    // The four study programs are not named until The Gladius 26 confirms them.
    /Teknik\s+(Sipil|Informatika|Mesin|Elektro|Arsitektur|Industri|Komputer|Kimia|Lingkungan|Perkapalan)/i,
    /Program Studi\s+[A-Z]/,
    // No founders, ceremonies or awards.
    /\b(pendiri|didirikan|diresmikan|penghargaan|prestasi|juara)\b/i,
  ];
  for (const path of sourceFiles("src")) {
    const source = read(path)
      // The emblem's approved sentence mentions "empat Program Studi di Fakultas".
      .replaceAll("Program Studi di Fakultas", "");
    for (const pattern of unconfirmed) {
      assert.ok(!pattern.test(source), `${path} matches ${pattern}`);
    }
  }
});

test("the only year stated anywhere in the content is 2026", () => {
  for (const path of sourceFiles("src/content")) {
    // Logo sizes such as `width: 2048` are pixels, not years.
    const text = read(path).replace(/\b(width|height): \d+/g, "");
    const years = text.match(/\b(19|20)\d{2}\b/g) ?? [];
    assert.deepEqual([...new Set(years)].filter((year) => year !== "2026"), [], path);
  }
});

test("every navigation link has a chapter to land on", () => {
  const sources = [...sourceFiles("src/components"), "src/app/page.tsx"].map(read).join("\n");
  for (const { id } of navigation) {
    assert.ok(new RegExp(`\\b(id|anchorId)="${id}"`).test(sources), `no target for "${id}"`);
  }
});

// Motion writes its starting positions into the server's HTML. An element it can
// hide without declaring `data-reveal` stays hidden for good if a script fails.
test("nothing hidden depends on JavaScript to come back", () => {
  // What Motion writes into the HTML: scroll-linked pieces, released by a CSS rule.
  const hides = /<m\.\w+[^>]*?(?:initial=|style=\{\{ (?:x|scaleY) \}\})[^>]*>/g;
  let found = 0;
  for (const path of sourceFiles("src/components")) {
    for (const [element] of read(path).matchAll(hides)) {
      found += 1;
      assert.match(element, /data-reveal="scroll"/, `${path}: ${element}`);
    }
  }
  assert.ok(found >= 2, "the pattern no longer matches the components");
  const css = read("src/app/globals.css");
  assert.match(css, /html:not\(\[data-motion="ready"\]\) \[data-reveal="scroll"\]/);

  // Everything else is hidden by CSS, and only while scripts are running to undo it.
  const hidingRules = [...css.matchAll(/^.*\[data-reveal="(?:word|rise|wipe|drop)"\] \{$/gm)]
    .map(([rule]) => rule.trim())
    .filter((rule) => rule.includes("data-pending"));
  assert.equal(hidingRules.length, 4);
  for (const rule of hidingRules) {
    assert.ok(rule.startsWith('html[data-motion="ready"] [data-pending]'), rule);
  }
});
