# THE GLADIUS 26 — Product Requirements Document

**Document:** Product Requirements Document + Visual Design Specification  
**Version:** 2.0  
**Project edition:** 2026  
**Product:** The Gladius 26 Digital Identity Archive  
**Institution:** Universitas Katolik De La Salle Manado  
**Faculty:** Fakultas Teknik  
**Primary language:** Bahasa Indonesia  
**Art direction:** Cinematic Heritage × Modern Editorial  
**Status:** Ready for implementation

---

## 1. Executive summary

The Gladius 26 is a focused, single-page digital autobiography for the collective representing the 2026 students of the Faculty of Engineering at Universitas Katolik De La Salle Manado.

The website introduces the collective and preserves the story behind its identity through four essential questions:

1. Who are The Gladius?
2. What does the name The Gladius mean?
3. Who were The Gladius born from?
4. What does the official The Gladius emblem represent?

The central narrative is generational inheritance: **The Gladius 26 was born from The Gladiators 23.** The Gladius identifies itself as the offspring of The Gladiators and as a generation meant to carry forward their *warisan* and *genetika* (heritage and inherited identity, as expressed by the collective).

This is not a student portal, faculty dashboard, news site, or conventional organization template. It is an editorial identity archive. The story and the three supplied identity assets should be the visual and editorial foundation.

### Product thesis

**Born from a Legacy. United as One.**

This is a proposed editorial tagline expressing the confirmed relationship and unity symbolism. It is not presented as an officially adopted historical motto.

## 2. Goals and non-goals

### Goals

- Explain The Gladius 26's identity to someone encountering it for the first time.
- Document its relationship with The Gladiators 23 accurately.
- Explain why the name Gladius was chosen, using the collective's own account.
- Explain all five elements of the official emblem without changing their meanings.
- Acknowledge the university and faculty identity marks in a clear, respectful way.
- Create a visually memorable, responsive experience that feels considered and timeless.
- Preserve the content in a structure that can be expanded later without rebuilding the site.

### Non-goals for the first release

- Authentication, accounts, or member profiles.
- An admin panel or CMS.
- News, events, announcements, or a blog.
- A public forum, comments, chat, or user submissions.
- A database or backend API.
- Claims about awards, achievements, founder names, founding dates, or activities that have not been supplied and confirmed.

## 3. Audience

**Primary:** The Gladius 26 members and the Faculty of Engineering community.  
**Secondary:** The Gladiators 23, other university communities, future cohorts, and visitors who want to understand the identity.

A visitor should understand the site's purpose within the first screen and be able to read the complete story without creating an account or learning a complicated interface.

## 4. Confirmed source of truth

The following facts are confirmed by the project owner and must be preserved:

- The Gladius 26 is a collective representing the 2026 Faculty of Engineering students at Universitas Katolik De La Salle Manado.
- The Gladius 26 was born from The Gladiators 23.
- The Gladius considers The Gladiators its parents and itself their offspring.
- The name Gladius was chosen because it refers to the Gladiators' sword; the name expresses the parent–offspring relationship and the intention to carry forward their *warisan* and *genetika*.
- The official emblem has five explained elements: Pedang, Helm, Rantai, Perisai, and Roda Gear.
- Four shields represent the four study programs in the Faculty of Engineering, united toward one goal and looking after one another.
- The gear has 26 teeth, representing the 2026 Faculty of Engineering cohort — The Gladius.
- Three identity assets were supplied: The Gladius emblem, the university logo, and the faculty logo/identity artwork.

### Unknowns — do not invent

- The names of the four study programs.
- The names of founders, organizers, or individual members.
- The exact date, place, and circumstances of the naming or formation.
- Detailed events or activities in The Gladiators 23's history.
- Official institutional rules governing logo placement, clear space, or minimum size.
- Any official motto beyond the supplied identity descriptions.

When these details become available, add them only after confirmation by the project owner or an authorized representative.

## 5. Brand and art direction

### 5.1 Creative direction

**Cinematic Heritage × Modern Editorial.**

The site should feel like a contemporary, carefully art-directed identity publication. Heritage comes from the real emblem and the generational story—not from fake medieval props or fantasy styling. Modernity comes from strong typography, confident composition, generous spacing, a visible royal-blue palette, restrained metallic accents, and a small number of intentional motion sequences.

Desired qualities:

- Elegant and prestigious, without looking like a luxury-product template.
- Cinematic and memorable, without melodrama.
- Strong and engineering-aware, without generic circuit-board graphics.
- Minimal and readable, without feeling empty or unfinished.
- Distinctive to The Gladius, not interchangeable with another brand.

### 5.2 Color palette

The palette is based on the supplied Gladius emblem. The main blue is deliberately brighter and more visible than the emblem's darkest navy so the website reads as royal blue rather than near-black. The darker values are supporting colors only.

| Token | Hex | Intended use |
|---|---|---|
| `gladius-blue-950` | `#061A35` | Small areas of deep contrast; never the dominant page background |
| `gladius-blue-900` | `#0A2852` | Deep navy section, footer, overlays |
| `gladius-blue-800` | `#0E3670` | Primary royal-navy surface and hero base |
| `gladius-blue-700` | `#174985` | Alternate blue surface and large visual fields |
| `gladius-blue-600` | `#245F9F` | Interactive accents and subtle blue highlights |
| `gladius-gold-500` | `#D4A246` | Primary gold accent, key rules, selected states |
| `gladius-gold-300` | `#E7C36E` | Brighter gold for larger display text and highlights |
| `gladius-silver-400` | `#BFC8D4` | Silver text, lines, and medium silver surfaces |
| `gladius-silver-200` | `#DDE2E9` | Main silver chapter surface |
| `gladius-silver-100` | `#F0F3F7` | Light silver surface |
| `gladius-ink` | `#152033` | Text on silver/light surfaces |
| `gladius-black` | `#03070D` | Image framing only when visually required |
| `gladius-white` | `#F8FAFC` | Main text on blue backgrounds |

Suggested visual balance across the page: approximately 65–75% blue/navy surfaces, 20–30% silver/light surfaces, and 5% gold accents. Adjust by composition; this is not a pixel-count rule.

**Important color rules:**

- Keep blue visibly blue. Do not drift into near-black as the default background.
- Use `#0E3670` and `#174985` as prominent brand surfaces; reserve `#061A35` and `#0A2852` for contrast and depth.
- Gold is an accent, not a body-text color by default. Check contrast before using it at small sizes.
- Use dark ink text on silver surfaces and white text on blue surfaces.
- Avoid unrelated purple, neon, teal, or generic gradient palettes.
- Do not recolor the university or faculty marks to match the Gladius palette.

### 5.3 Institutional identity marks

The three assets have different roles:

1. `the-gladius-logo.png` — primary collective emblem; dominant visual identity.
2. `university-logo.png` — official university mark; supporting institutional identity.
3. `faculty-logo.png` — faculty identity artwork supplied by the project owner; supporting faculty identity.

Preserve each asset exactly as supplied:

- Maintain aspect ratio and original colors.
- Do not redraw, simplify, filter, colorize, or crop essential parts.
- Do not invent additional meanings or official names for the faculty artwork.
- Keep the university and faculty marks visually subordinate to The Gladius emblem.
- Present the university and faculty marks together in a restrained institutional lockup, ideally near the hero's affiliation details and again in the footer.
- Use enough clear space around each asset. Never squeeze all three logos into a crowded row.
- The supplied PNG assets have transparency. Use `object-fit: contain`; do not add an opaque box unless a specific contrast problem requires it.
- Because the university and faculty marks contain their own colors, choose a neutral/light or sufficiently contrasting placement. Do not force them into monochrome.

### 5.4 Typography

Use a distinctive, editorial pairing rather than a default SaaS font stack.

Recommended starting direction (test and refine in the actual layout):

- **Display:** `Bodoni Moda` or `Cormorant Garamond` for selected large editorial statements. Choose one, not both by default. Use carefully so the result feels institutional rather than fashion-magazine imitation.
- **Body/UI:** `Manrope` or `DM Sans`. Choose one primary sans-serif for paragraphs, navigation, labels, and controls.
- **Metadata:** a restrained mono face such as `IBM Plex Mono`, used sparingly for chapter markers and technical annotations only.

Use `next/font` for self-hosted/optimized font delivery if the project uses Next.js. Avoid loading unnecessary weights. The hero's `THE GLADIUS` title should remain expressive and legible at mobile widths.

### 5.5 Layout and composition

- Max content width: approximately 1240–1320px.
- Use a disciplined 12-column desktop grid where it helps composition.
- Long-form text measure: approximately 60–75 characters per line.
- Desktop gutters: approximately 48–80px, adjusted to the viewport.
- Mobile gutters: approximately 20–24px.
- Prefer editorial split layouts, oversized type, full-width chapter fields, and intentional asymmetry.
- Avoid a grid of generic cards for the main story.
- Use borders and chapter markers only when they clarify structure.
- Border radii should be restrained and consistent; do not round every section or image.

## 6. Information architecture

Single-page experience with five narrative chapters, plus opening and closing moments.

| Order | Section | Core question | Surface |
|---|---|---|---|
| Opening | Hero | What is The Gladius 26? | Royal blue |
| 01 | Who We Are | Who are The Gladius? | Silver/light |
| 02 | Our Origins | Who were The Gladius born from? | Royal/deep blue |
| 03 | The Meaning | What does the name mean? | Royal blue with silver contrast |
| 04 | The Emblem | What does each logo element mean? | Silver/light, with emblem on a blue field |
| Closing | Legacy | What should visitors remember? | Royal blue |

Navigation labels in Indonesian:

- Beranda
- Identitas
- Asal-usul
- Makna
- Lambang

The header should be compact and clear. A sticky header is acceptable if it does not dominate the screen or obscure anchor targets. A subtle active-section marker may follow the visitor's position.

## 7. Content specification and approved copy

Primary language: Bahasa Indonesia. Use consistent, natural Indonesian. Do not translate names such as The Gladius 26 or The Gladiators 23.

### Opening / hero

**Main title:** THE GLADIUS  
**Edition:** 26 / 2026  
**Affiliation:** FAKULTAS TEKNIK · UNIVERSITAS KATOLIK DE LA SALLE MANADO  
**Tagline:** Born from a Legacy. United as One.  
**Indonesian rendering:** Lahir dari Warisan. Bersatu sebagai Satu.

The tagline is proposed editorial copy; do not call it an official historical motto.

The hero must prioritize oversized `THE GLADIUS` typography. The separate `26` edition marker should be prominent but must not be merged into or painted over the supplied logo. Place the Gladius emblem as the supporting visual, not as a replacement for the headline.

Show the university and faculty identity marks in a compact, well-spaced affiliation lockup. Their colors must remain original.

### Chapter 01 — Who We Are / Identitas

**Headline:** SIAPA KAMI?  
**Lead:** Kami adalah The Gladius.

**Approved copy:**

The Gladius 26 merupakan kolektif mahasiswa Fakultas Teknik Universitas Katolik De La Salle Manado angkatan 2026.

Kami hadir sebagai satu identitas yang merepresentasikan mahasiswa Teknik dalam sebuah angkatan.

Identitas kami tidak berdiri tanpa asal-usul. Ada sebuah generasi yang menjadi bagian dari kelahiran kami, sebuah nama yang membawa makna, dan sebuah lambang yang merepresentasikan siapa kami.

**Closing line:** THE GLADIUS 26. SATU IDENTITAS. SATU ANGKATAN.

Do not add a member count, founder names, study-program names, achievements, or claims about internal structure.

### Chapter 02 — Our Origins / Asal-usul

**Headline:** KAMI TIDAK LAHIR TANPA ASAL-USUL.  
**Lead:** Kami lahir dari The Gladiators.

**Approved copy:**

The Gladius 26 lahir dari The Gladiators 23.

The Gladiators 23 merupakan orang tua dari The Gladius dalam sebuah hubungan generasi yang menjadi dasar asal-usul dan identitas kami.

Sebagai generasi penerus, The Gladius membawa warisan dan genetika dari generasi yang melahirkannya.

Hubungan tersebut menjadi bagian penting dari identitas kami. Nama yang kami bawa bukan sekadar sebuah sebutan, melainkan representasi dari generasi yang menjadi asal-usul kami.

Kami adalah The Gladius, anak dari The Gladiators.

**Visual:** A simple generational connection showing `THE GLADIATORS 23` leading to `THE GLADIUS 26`. Treat the parent/offspring language as the collective's own heritage metaphor. Do not present it as biological genealogy.

Do not invent dates, places, founders, conversations, or specific events.

### Chapter 03 — The Meaning / Makna

**Headline:** SEBUAH NAMA. SEBUAH WARISAN.  
**Lead:** Pedang milik para Gladiator.

**Approved copy:**

Nama Gladius merujuk pada pedang yang menjadi bagian dari identitas seorang Gladiator.

Karena The Gladius merupakan anak dari The Gladiators, nama Gladius dipilih sebagai representasi dari pedang milik para Gladiator.

Nama tersebut menjadi simbol hubungan antara generasi yang melahirkan dan generasi yang dilahirkan.

The Gladius bukan sekadar nama yang kami gunakan, melainkan identitas yang membawa warisan dari generasi sebelumnya.

Keep the interpretation tied to the explanation supplied by the collective. Do not add unapproved claims about courage, conquest, discipline, or historical Latin usage.

### Chapter 04 — The Emblem / Lambang

**Headline:** SETIAP ELEMEN MEMILIKI MAKNA.

**Introduction:**

Logo The Gladius 26 bukan sekadar identitas visual. Setiap elemen yang terdapat di dalamnya merepresentasikan asal-usul, warisan, persaudaraan, kesatuan, dan identitas angkatan kami.

**01 — PEDANG / IDENTITAS**

Melambangkan identitas The Gladius yang berarti mahasiswa Teknik yang tajam dan satu. Ditempa dan dilahirkan dari The Gladiators.

**02 — HELM / WARISAN**

Warisan dari The Gladiators yang menandakan bahwa The Gladius adalah anak dari The Gladiators.

**03 — RANTAI / PERSAUDARAAN**

Rantai yang berputar dan terikat melambangkan tali persaudaraan The Gladius sebagai angkatan.

**04 — PERISAI / KESATUAN**

Empat perisai melambangkan empat Program Studi di Fakultas Teknik yang bersatu, satu tujuan, dan saling menjaga satu sama lain.

Do not list the four program names until the owner supplies and confirms them.

**05 — RODA GEAR / ANGKATAN 26**

Diambil dari filosofi mahasiswa Teknik yang solid, satu tujuan dan satu arah. Terdapat 26 mata gear yang mengartikan Angkatan 26 Mahasiswa Fakultas Teknik — The Gladius.

### Closing

**Headline:** KAMI ADALAH THE GLADIUS.

**Copy:**

Lahir dari sebuah warisan.  
Dipertemukan dalam satu identitas.  
Menjadi bagian dari sebuah generasi.

**Signature:** THE GLADIUS 26 · FAKULTAS TEKNIK · UNIVERSITAS KATOLIK DE LA SALLE MANADO

This is editorial closing copy, not an additional historical claim.

## 8. Signature visual moments and animation requirements

The experience should create a genuine “wow” moment through choreographed, purposeful motion—not dozens of unrelated effects.

### 8.1 Hero sequence (primary signature moment)

Suggested sequence, with total duration kept short:

1. The royal-blue hero surface is already present; no blocking intro screen.
2. `THE` and `GLADIUS` reveal through a refined mask/clip or carefully staged opacity-and-position transition.
3. The `26` edition marker settles into place with a restrained movement.
4. The official emblem appears as a clear supporting reveal, using its original PNG and proportions.
5. University/faculty affiliation marks and supporting copy resolve last.

The sequence must be skippable by scrolling, must not delay access to content, and must not replay unnecessarily on every render.

### 8.2 Chapter transitions

- Use a small number of distinctive transitions between blue and silver chapters.
- Consider a thin gold line drawing or a surface-color transition at chapter boundaries.
- Use editorial image/text reveals only where they improve reading hierarchy.
- Avoid applying the same fade-up animation to every paragraph and heading.

### 8.3 Generational connection

The origins chapter may draw a connecting line from The Gladiators 23 to The Gladius 26. This should be a visual explanation of the confirmed lineage, not a fabricated timeline.

### 8.4 Emblem exploration

Present the emblem prominently, then provide five selectable explanations. Prefer a well-built accessible tab/accordion pattern. If accurate clickable regions are created, they must be calibrated against the supplied artwork, work on touch, and have an equivalent keyboard-accessible control list.

### 8.5 Motion performance and accessibility

- Prefer transform and opacity animation over layout-thrashing properties.
- Respect `prefers-reduced-motion` and use the Motion `useReducedMotion` capability if Motion is installed.
- Reduced-motion mode should remove large translations, scaling, parallax, and autoplay; content must remain fully available.
- Do not hijack scroll.
- Avoid heavy background video, cursor trails, constant floating particles, or perpetual animation.
- No sound autoplay.
- Aim for a stable, smooth experience on mid-range mobile devices.

## 9. UX and responsive behavior

### Desktop

- Oversized type and deliberate asymmetry.
- Visible royal-blue surfaces.
- Silver chapters with deep ink text.
- Two-column editorial layouts where useful.
- Compact sticky navigation if it improves orientation.

### Tablet

- Recompose split layouts before they become cramped.
- Reduce hero scale fluidly.
- Maintain generous spacing around marks.

### Mobile

- Design intentionally at 320px and above.
- One-column content flow.
- Hero text must wrap cleanly and never overflow.
- Emblem uses `object-fit: contain` with no crop.
- University and faculty marks stack or use a compact affiliation strip.
- Emblem explanation uses a full-width accordion or tabs with touch targets at least 44×44 CSS pixels where practical.
- No horizontal scroll.
- No hover-only information.

## 10. Technical direction

### Preferred baseline (when starting from an empty repository)

- Next.js App Router.
- React and TypeScript.
- Tailwind CSS (use the installed/current major version; do not mix configuration conventions).
- Motion for React via the `motion` package and `motion/react` imports for orchestrated React animations.
- Next.js `next/font` for optimized/self-hosted font loading.
- Next.js Image for image sizing/optimization where appropriate.
- Lucide React only if icons are actually needed; do not add an icon library for decorative filler.

If the repository already has a working stack, inspect it first and preserve it unless there is a compelling technical reason to migrate. Do not rewrite an existing app just to match this recommendation.

### Static content

The first release requires no backend or database. Keep copy and emblem data in typed content modules or MDX so it can be revised without changing layout components.

### Suggested structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    navigation/
    hero/
    chapters/
    emblem/
    institutional-lockup/
    motion/
  content/
    identity.ts
    origins.ts
    meaning.ts
    emblem.ts
  lib/
    metadata.ts
public/
  images/
    brand/
      the-gladius-logo.png
      university-logo.png
      faculty-logo.png
```

The build kit also preserves source originals in `assets/brand/`. During implementation, copy them into `public/images/brand/` without altering the originals.

### Content architecture

Create one typed data source for the five emblem elements. Suggested fields:

- `id`
- `name`
- `category`
- `meaning`
- optional `editorialNote` (only if it is a careful restatement of the confirmed source)

Do not place duplicated hard-coded descriptions in multiple components.

## 11. SEO, sharing, accessibility, and performance

### SEO and share previews

- Descriptive page title and meta description in Indonesian.
- Open Graph and social share metadata.
- A purpose-designed OG image using the actual Gladius emblem and approved title.
- Semantic page landmarks and a logical heading structure.
- Descriptive alt text for all three identity marks.
- No invented domain or social handles.

### Accessibility

Target WCAG 2.2 AA where practical:

- Semantic headings, sections, navigation, and footer.
- Keyboard-accessible navigation and emblem controls.
- Visible focus states.
- Sufficient text contrast.
- Text alternatives for identity marks.
- Reduced-motion support.
- No meaning conveyed through color alone.

### Performance

- Preserve the PNG originals; create optimized derivatives only when visual comparison confirms no damage.
- Use explicit image dimensions/aspect ratios to prevent layout shift.
- Load below-the-fold imagery lazily.
- Avoid unnecessary client components.
- Avoid heavy decorative libraries.
- Optimize fonts and only load required weights.
- No large video background in the MVP.

Suggested Lighthouse targets (validate, do not assume): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.

## 12. Asset inventory

The build kit includes:

| File | Role | Source dimensions | Handling |
|---|---|---:|---|
| `assets/brand/the-gladius-logo.png` | Primary Gladius emblem | 2048 × 2041 | Preserve full artwork and transparency |
| `assets/brand/university-logo.png` | University logo | 220 × 220 | Preserve full color and proportions |
| `assets/brand/faculty-logo.png` | Faculty logo / identity artwork supplied by owner | 1378 × 1962 | Preserve full artwork and proportions |

All three supplied files are RGBA PNGs with transparent pixels. Confirm transparency in the actual rendering environment; do not assume a black background merely because a preview tool displays transparency against black.

Do not alter, recolor, vectorize, or use generative image tools to recreate any of the marks.

## 13. Quality gates and acceptance criteria

### Content integrity

- [ ] All four identity questions are answered.
- [ ] The Gladius 26 is correctly identified as the 2026 Faculty of Engineering collective.
- [ ] The relationship with The Gladiators 23 is represented accurately.
- [ ] The five emblem explanations preserve the owner's meanings.
- [ ] No unsupported dates, names, study-program labels, achievements, or historical events have been invented.

### Brand and visual design

- [ ] All three supplied identity assets are used in appropriate roles.
- [ ] The Gladius mark is dominant; institutional marks are supporting.
- [ ] The royal blue is visibly blue and is not so dark that it reads as black.
- [ ] Silver sections provide meaningful contrast and breathing room.
- [ ] Gold is restrained and purposeful.
- [ ] Institutional marks retain original colors and proportions.
- [ ] The hero uses oversized THE GLADIUS typography.
- [ ] Design feels specific to The Gladius and not like a generic template.

### Motion and usability

- [ ] Hero sequence is polished, short, and does not block content.
- [ ] Motion supports the story rather than decorating everything.
- [ ] Reduced-motion mode works.
- [ ] Navigation and emblem explanations work with keyboard and touch.
- [ ] No scroll hijacking or audio autoplay.

### Responsive and technical

- [ ] Works at 320px, 375px, 768px, 1024px, and wide desktop widths.
- [ ] No horizontal overflow.
- [ ] No distorted or cropped logo assets.
- [ ] No broken links or missing images.
- [ ] No runtime or console errors in the tested flows.
- [ ] Typecheck, lint, tests (if present), and production build pass.
- [ ] README explains setup and deployment.

## 14. Implementation phases

1. **Repository and asset audit:** inspect the current codebase, identify existing tools, verify all three image files, and read this PRD and project skills.
2. **Design direction:** produce a short design plan, layout sketch, type/color tokens, hero composition, institutional-mark treatment, and motion storyboard. Critique this plan against the brief before coding.
3. **Foundation:** configure design tokens, typography, page shell, and responsive grid.
4. **Story implementation:** implement the hero, four chapters, emblem explorer, and closing section with approved copy.
5. **Motion:** implement the hero signature sequence and a small number of story-led transitions.
6. **Quality assurance:** inspect real browser renders at desktop and mobile widths, correct visual regressions, test accessibility and reduced motion, run code quality checks, and build for production.
7. **Handoff:** document how to run, build, and deploy the site; list any facts still awaiting confirmation.

## 15. Definition of done

A first-time visitor can quickly identify The Gladius 26, understand that it was born from The Gladiators 23, understand why it carries the name Gladius, and explore the meanings of all five emblem elements.

The website works across screen sizes, respects accessibility preferences, uses all three supplied identity assets appropriately, and presents the story through a distinctive cinematic-heritage visual system.

**THE GLADIUS 26 — BORN FROM A LEGACY. UNITED AS ONE.**
