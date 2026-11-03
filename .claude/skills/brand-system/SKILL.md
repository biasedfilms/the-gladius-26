---
name: brand-system
description: Apply The Gladius 26 visual identity, color tokens, and three official identity assets; use when implementing logos, colors, typography, section surfaces, or brand-related components.
---

# Brand System — The Gladius 26

Treat `design/design-tokens.css`, `design/DESIGN-SYSTEM.md`, and `assets/brand/ASSET-GUIDE.md` as the source of truth.

## Three supplied marks

- `the-gladius-logo.png`: primary collective emblem.
- `university-logo.png`: university mark.
- `faculty-logo.png`: faculty logo/identity artwork as supplied by the owner.

Preserve all three source files, colors, proportions, transparency, and details. Never redraw, crop, recolor, filter, trace, or regenerate the marks. Do not combine them into a new unofficial logo. Use `object-fit: contain` and explicit dimensions/aspect ratios.

The Gladius emblem is the dominant brand mark. University and faculty marks form a quiet supporting affiliation lockup and may reappear in the footer. Keep clear space; do not crowd them together. The latter two retain their original color palettes and must not be recolored to match the Gladius site.

## Color rules

- Primary blue surface: `#0E3670`.
- Alternate blue surface: `#174985`.
- Deep contrast: `#061A35` / `#0A2852`, used sparingly.
- Gold: `#D4A246`, brighter display gold: `#E7C36E`.
- Silver surfaces: `#DDE2E9` and `#F0F3F7`.
- Ink on silver: `#152033`.
- White on blue: `#F8FAFC`.

The blue must be visibly blue and not near-black. The site is mostly navy/royal blue with meaningful silver sections. Gold is an accent, not a universal heading/body color. Validate text contrast instead of assuming metallic colors are readable.

## Institutional lockup

Display the university and faculty marks with the full institutional names in a compact, aligned lockup. Preserve their native proportions and colors. Use a neutral or sufficiently contrasting surface. Never make the institutional logos visually louder than the Gladius title/emblem.

## Typography

Test one display serif and one body sans family from the design-system candidates. Use a limited number of weights. Do not use a default Inter/Roboto stack without a deliberate project-specific reason.

## Change control

If the owner supplies a new official logo or official brand specification, preserve both old and new assets until the owner confirms which is current. Do not infer an official brand color from a screenshot alone when a supplied asset or token file exists.
