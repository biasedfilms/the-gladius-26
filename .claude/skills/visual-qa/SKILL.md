---
name: visual-qa
description: Run visual, responsive, content, accessibility, and production checks on The Gladius 26; use before declaring the website complete or handing it off.
---

# Visual QA — The Gladius 26

Do not accept a successful build as proof of a good design. Inspect the actual rendered page wherever browser tooling is available.

## Visual review matrix

Review at:

- 1440px desktop.
- 1024px laptop/tablet landscape.
- 768px tablet.
- 390px mobile.
- 320px narrow mobile.

Inspect:

- Hero headline hierarchy, line breaks, and spacing.
- Whether the main blue is clearly visible and not near-black.
- Contrast between the Gladius emblem and its background.
- Correct placement and hierarchy of the university and faculty marks.
- Original logo color, aspect ratio, and transparency.
- Silver chapter readability.
- Consistent spacing and editorial rhythm.
- No generic card repetition or filler sections.
- Emblem interaction behavior.
- Navigation and chapter anchor behavior.
- Reduced-motion rendering.
- Footer identity lockup.

## Content audit

Compare all history, name meaning, and five emblem meanings with `CONTENT-AND-FACTS.md`. Flag any unsupported detail. Check that the four study-program names have not been guessed.

## Technical checks

Run the repository's actual commands for:

- Lint.
- Typecheck.
- Unit/integration tests if present.
- Production build.

Also verify:

- No broken internal links or missing assets.
- No console errors or hydration warnings in tested flows.
- No horizontal overflow.
- Metadata and social preview configuration.
- Appropriate image sizing and no layout shift caused by missing dimensions.

## Honest reporting

Record which checks were actually run and their outcomes. If browser screenshots, accessibility automation, or performance measurements were unavailable, say so. Never claim a Lighthouse score, WCAG certification, device test, or screenshot review that did not happen.

## Final critique

List the three weakest aspects of the current UI, fix them if possible, then re-check the affected viewports. The project is complete only when the PRD acceptance criteria are met or remaining blockers are explicitly documented.
