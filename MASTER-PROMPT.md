# MASTER PROMPT — BUILD THE GLADIUS 26 WEBSITE

You are acting as a senior creative director, product designer, and senior frontend engineer. Your job is to implement the complete **The Gladius 26 Digital Identity Archive** in the current repository.

This is an execution task. Do not stop after writing a plan, wireframe, or recommendations. Inspect the repository, design the experience, implement it, run it, review it visually, fix issues, and leave the project in a production-ready state.

## 0. Read the project kit first

Before changing files, read:

1. `PRD.md` — definitive product requirements and approved copy.
2. `CONTENT-AND-FACTS.md` — factual source of truth and forbidden assumptions.
3. `design/DESIGN-SYSTEM.md` and `design/design-tokens.css` — visual system.
4. `CLAUDE.md` — always-on project constraints.
5. Every applicable skill in `.claude/skills/`, especially `frontend-design`, `brand-system`, `cinematic-motion`, `content-integrity`, `no-ai-slop`, `responsive-accessibility`, and `visual-qa`.
6. `references/SKILL-REFERENCES.md` when you need to understand the research basis or consult current official documentation.

Use the skills as working instructions, not as text to summarize back to the user.

## 1. Inspect before you build

- Inspect the existing repository, package manager, framework, scripts, installed dependencies, and current implementation.
- Do not overwrite a working project or replace its stack without a clear reason.
- If the repository is empty, scaffold the preferred baseline from the PRD: Next.js App Router, React, TypeScript, Tailwind CSS, and Motion for React (`motion` package; use `motion/react` imports).
- Confirm that all three supplied brand assets are present in `assets/brand/`:
  - `the-gladius-logo.png`
  - `university-logo.png`
  - `faculty-logo.png`
- Preserve the source originals. Copy them into the app's public asset directory if needed; do not modify the source files.
- Verify their dimensions, transparency, aspect ratios, and actual appearance before placing them.
- Do not infer official logo names, mascot names, or new symbolic meanings that are not in the brief.

If an essential file is genuinely missing, explain the blocker and continue with all parts that can be implemented. Do not ask for information that is already in the kit.

## 2. Product understanding

The Gladius 26 is the collective representing the 2026 Faculty of Engineering students at Universitas Katolik De La Salle Manado.

The Gladius 26 was born from The Gladiators 23. The collective describes The Gladiators as its parents and The Gladius as their offspring. The name Gladius was chosen because it refers to the Gladiators' sword and expresses the intention to carry forward their *warisan* and *genetika*.

The site answers four questions:

1. Who are The Gladius?
2. What does the name The Gladius mean?
3. Who were The Gladius born from?
4. What does the official emblem mean?

The emblem's five meanings are fixed in the PRD: Pedang, Helm, Rantai, Perisai, and Roda Gear. Preserve the wording and meaning. Do not make up founder names, dates, study-program names, events, achievements, or history.

## 3. Visual direction — non-negotiable

**Cinematic Heritage × Modern Editorial.**

The visual identity must be distinctive, elegant, monumental, and restrained. This is a digital autobiography and identity archive, not a SaaS dashboard, gaming site, fantasy medieval landing page, or generic university template.

### Color

Use the supplied Gladius emblem as the primary palette reference, but make the website's blue more visible and more saturated than the deepest blue in the emblem.

Use the exact tokens from `design/design-tokens.css`. In particular:

- Main surface: visible royal navy around `#0E3670`.
- Supporting blue: `#174985` and `#245F9F`.
- Deep contrast only: `#061A35` / `#0A2852`.
- Gold: `#D4A246` and `#E7C36E`.
- Silver: `#BFC8D4`, `#DDE2E9`, and `#F0F3F7`.

The page is mostly navy/blue with purposeful silver sections. Do not turn the whole site black. Do not use random purple, neon, teal, or generic gradients.

### Three brand assets

All three marks are required:

- The Gladius emblem: primary identity and dominant hero artwork.
- University logo: supporting institutional identity.
- Faculty logo/identity artwork: supporting faculty identity.

Retain the original colors, transparency, artwork, and aspect ratios. Do not redraw, regenerate, recolor, crop, flatten, or distort them. Do not merge them into a new unofficial logo. The university/faculty marks should be a carefully spaced affiliation lockup in the hero or nearby metadata area and in the footer. The Gladius emblem remains visually dominant.

### Hero

The user's chosen hero direction is **oversized THE GLADIUS typography**. The headline is the first and strongest visual statement. Show `26` as a separate editorial edition marker; do not alter the official logo to add the number. The main emblem supports the title rather than replacing it.

### Typography

Choose a distinctive, readable display serif and a modern sans-serif. Suggested starting candidates are Bodoni Moda or Cormorant Garamond for selected display lines, paired with Manrope or DM Sans for body/UI. Test them in the real composition; do not blindly use all candidates. Use a mono face only for occasional metadata, not every label. Do not use Inter/Roboto as automatic defaults.

### Composition

Use oversized type, strong grid discipline, asymmetric editorial layouts, broad negative space, and carefully measured image placement. Avoid identical rounded cards, card grids for every chapter, generic icon rows, default gradient blobs, generic glassmorphism, and repetitive eyebrow labels.

## 4. Avoid AI-slop patterns

The finished result must not look like a generic AI-generated template. In particular:

- No SaaS dashboard layout, pricing tables, fake stats, testimonials, or feature grids.
- No random gradient blobs, glass cards, purple gradients, or neon accents.
- No decorative circuit-board motifs or generic technology stock imagery.
- No generic medieval stock imagery to stand in for the actual story.
- No decorative use of fake Latin, fake dates, fake quotations, or fake historical facts.
- No repeated fade-up animation on every item.
- No excessive capsule labels, unnecessary pills, arbitrary icons, or giant empty sections that do not improve the story.
- No filler copy. Use the approved Indonesian copy in the PRD.
- Do not invent content to make sections look fuller. Use whitespace and typography instead.

## 5. Signature motion — make it memorable, not noisy

Create one exceptional, coherent hero sequence and a small number of supporting transitions.

The hero sequence should stage the oversized words `THE GLADIUS`, then the `26` marker, then the primary emblem and finally the university/faculty affiliation marks. The sequence should be short, controlled, and skippable by normal scrolling. It must not block content or create a loading gate.

Use Motion for React (`motion` package, imports from `motion/react`) if it makes the sequence meaningfully better. CSS is preferred for simpler decorative transitions. Motion must have clear choreography, purposeful easing, and good performance.

Other motion should support the narrative:

- A restrained lineage line or connection reveal in the Origins chapter.
- Deliberate chapter boundary transitions.
- A well-designed, accessible interactive treatment for the five emblem explanations.
- A subtle reading-progress indicator if it helps navigation.

Respect `prefers-reduced-motion`. In reduced-motion mode, remove large transforms, parallax, and autoplay; preserve content and clarity with immediate states or subtle opacity changes.

No scroll hijacking, cursor trails, autoplay sound, endless particles, or heavy video backgrounds.

## 6. UX and responsive requirements

- Primary language: Bahasa Indonesia.
- Single-page editorial experience.
- Navigation anchors: Beranda, Identitas, Asal-usul, Makna, Lambang.
- The four identity questions must be answered clearly.
- All five emblem explanations must be available on desktop, touch, and keyboard.
- Make mobile a designed composition, not a squeezed desktop layout.
- Support viewport widths from 320px upward.
- Prevent horizontal overflow, clipped headings, and cropped marks.
- Keep interactive touch targets comfortable (aim for at least 44×44 CSS pixels).
- Provide semantic markup, visible focus, logical headings, meaningful alt text, and strong contrast.

## 7. Implementation quality

- Keep content separate from presentation.
- Use reusable components with clear responsibilities.
- Avoid overengineering: no backend, authentication, database, or admin panel for this MVP.
- Use explicit image dimensions/aspect ratios and appropriate Next image handling.
- Use `next/font` if Next.js is the project framework.
- Do not install dependencies that the actual implementation does not need.
- Use correct, current package APIs; do not use outdated examples.
- Keep the console clean and avoid hydration errors.
- Follow the repository's existing lint/typecheck/test conventions.

## 8. Required execution workflow

### Phase A — Audit

Inspect the repo and assets. Identify what exists and what must be created. Report a short implementation plan in the work log or progress update, then continue.

### Phase B — Design plan and critique

Before coding, create a compact design blueprint that includes:

- Page flow and section order.
- Desktop and mobile composition notes.
- Color/type tokens.
- Hero choreography (time/order/easing intent).
- Treatment of the three logos.
- One distinctive visual signature rooted in the real Gladius identity.

Critique the blueprint against the PRD. Reject generic or unnecessary decisions before implementation.

### Phase C — Build

Implement the complete site, not a static mockup. All navigation, chapter interactions, and emblem explanations must work. Use the approved copy.

### Phase D — Visual QA

Run the site and inspect real rendered screenshots if a browser or screenshot tool is available. Review at minimum:

- 1440px desktop.
- 1024px tablet/small laptop.
- 768px tablet.
- 390px mobile.
- 320px narrow mobile.

Look specifically for: the blue reading as too dark/black, poor logo contrast, logos being too small or crowded, hero typography overflow, generic repeated sections, inconsistent spacing, silver text contrast, awkward mobile stacking, and animations that feel ornamental rather than purposeful.

Make corrections based on the actual renders. If browser screenshot inspection is unavailable, do not pretend it happened; use the strongest available checks and state the limitation in the handoff.

### Phase E — Validation

Run available checks: lint, typecheck, tests, and production build. Resolve all errors introduced by the implementation. Verify all assets, links, navigation, reduced-motion behavior, and mobile layout.

### Phase F — Handoff

Provide a concise handoff with:

- What was implemented.
- Main files/components changed.
- Commands to run locally.
- Validation commands and their actual results.
- Any remaining unknown content requiring owner confirmation.
- Any limitation that could not be checked.

## 9. Definition of success

A first-time visitor should immediately recognize THE GLADIUS 26, understand its connection to The Gladiators 23, learn the meaning behind its name, and explore the five official emblem meanings.

The website should feel like a premium, cinematic, historically grounded identity archive with visible royal-blue surfaces, carefully used gold, silver chapter breaks, beautiful typography, and a memorable but accessible animation sequence.

**Do the work. Do not return only a plan.**
