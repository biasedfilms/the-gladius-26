# Design Blueprint — The Gladius 26

Written before implementation. Records what was decided, what was tested, and what was rejected.

## Measured from the supplied artwork

- **Gear:** exactly **26 teeth**, confirmed by alpha sampling at four radii. Centre ≈ (1026.2, 995.9) in the 2048 × 2041 source. Tooth spacing is hand-drawn and irregular (12.9°–15.3°), so anything aligned to the teeth uses measured angles, never `360 / 26`.
- **Palette:** gear body samples `#01204F`, inner disc `#02071C`. The brand's "Royal Navy" and "Deep Navy" are the emblem's own colours.
- **Faculty mark:** white and pale grey. It needs a blue surface; it would vanish on silver.
- **University mark:** 220 px source. Must stay small (≤ 88 CSS px) to stay sharp on 2× screens.

## Palette decision

Two palettes were available: the brand colours, taken from the emblem, and `design-tokens.css`, a deliberately brighter website ramp. Rendered side by side on a real hero: `#01071B` reads as black, `#01204D` reads as a true navy, `#0E3670` and `#174985` read as blue. The priority is that blue stays visible, so:

| Role | Colour | Source |
|---|---|---|
| Primary surface (hero, closing) | `#0E3670` | tokens |
| Alternate surface (Makna, emblem bench) | `#174985` | tokens |
| Light pool behind the emblem | `#245F9F` | tokens |
| Chapter surface (Asal-usul) | `#01204D` | brand |
| Header | `#0A2852` | tokens |
| Footer | `#01204D` | brand |
| Footer's last band only | `#01071B` | brand |
| Silver chapters | `#DDE2E9`, `#F0F3F7` | tokens |
| Gold rules and numerals | `#C29A5D` | brand |
| Gold on text | `#E2D6BA` | brand |
| Metal details | `#C2C3C3`, `#818385` | brand |
| Text | `#F8FAFC`, `#152033` | tokens |

All values live in one `@theme` block in `src/app/globals.css`.

## Type decision

Tested in the hero composition: **Bodoni Moda** beats Cormorant Garamond at this scale — Cormorant goes soft and loses authority across a full viewport. **Manrope** for text and UI, **IBM Plex Mono** only for chapter markers and measured annotations.

## One signature, drawn from a real fact

**The 26 teeth.** A ring of 26 fine ticks, set to the measured tooth angles, appears around the emblem in the hero, serves as the reading-progress dial in the header, counts the teeth in the emblem chapter, and closes the page. Rolled out flat, the same 26 angles become the rack on every gold rule. No unrelated decorative system is introduced.

## The page is the emblem's engineering drawing

The Gladius 26 asked for an engineering identity without circuit boards, HUDs or blueprint textures. So nothing is added as ornament: real drafting conventions take over jobs the page already had to do.

| Convention | On a drawing | On this page |
|---|---|---|
| Datum line | The line all dimensions are taken from | The hero's gold rule, drawn first; the title stands on it |
| Chain line | Long dash, short dash: reserved for axes | The gear's two centre lines, crossing at its measured centre |
| Compass circle | Set before the part is drawn | Drawn around the gear in the hero and again at the close |
| Dimension line | A span between two end ticks | Joins `Bab I · Identitas` to its sheet reference at every chapter |
| Rack | A gear rolled flat | Every gold rule carries the 26 teeth at their true, hand-drawn spacing |
| Numbered clauses | How a specification reads | Bab III's four paragraphs, `03.1`–`03.4` |
| Balloon callouts and part list | How an assembly names its parts | The five emblem elements, numbered clockwise, with leader lines |
| Title block | Who owns the drawing and who drew it | The footer: copyright and creator as separate entries |
| Column grid | Construction lines | The twelve columns the text is really set on, shown on silver chapters only |

The numbers on callouts and the tab list are mono because Bodoni's hairlines made a 4 read as a 1 at that size.

## Page flow

| Section | Job in one sentence | Composition | Surface |
|---|---|---|---|
| Hero | Be unmistakably The Gladius 26 | Monumental stacked title on a datum line, `26` as a counter, emblem top right on its centre lines | `#0E3670` |
| Bab I Identitas | Say who we are, plainly | Huge question top left, answer below, reading column offset right, one full-width statement closes it | `#DDE2E9` |
| Bab II Asal-usul | Show the lineage | `GLADIATORS` and `GLADIUS` set one above the other so the shared letters **GLADI** align; five gold strands descend as you read; the copy sits between parent and child | `#01204D` |
| Bab III Makna | The name is the sword | A silver blade engraved GLADIUS is drawn across the full width by scrolling; the text beneath is set as four numbered clauses | `#174985` |
| Bab IV Lambang | Every element means something | Assembly drawing: the emblem under a spotlight, numbered callouts, a five-part list and calibrated tap regions | `#F0F3F7` + `#174985` |
| Penutup | What to remember | Axial end card: the first centred layout on the page, like a film's final title, set to the full measure | `#0E3670` |
| Footer | Say who owns it and who made it | Title block: institutions, profiles, then copyright and creator as separate entries | `#01204D` + `#01071B` |

## Hero choreography

CSS keyframes, so it runs from server-rendered HTML with no hydration gap and no intro gate. It is staged as a drawing being made, and the title is fully readable before the first second is over.

| Time | Event |
|---|---|
| 0 ms | Royal surface already painted |
| 60 ms | The datum line rules across, its 26 teeth set along it |
| 140–600 ms | `THE`, then `GLADIUS`, stand up letter by letter (start times staggered) |
| 300 ms | The gear's centre lines draw outward from its centre |
| 560–1600 ms | The compass turns one circle; a tick is set for every 40 ms of it |
| 820 ms | `26` turns up on two counter wheels |
| 920–2420 ms | The emblem emerges backlit, then the light reaches it. It ends with no filter left on it |
| 1050–2400 ms | One line of light crosses the title, once |
| 1250–2500 ms | Tagline and affiliation lockup resolve |

The compass runs at constant speed so that pen and ticks stay in step. Lines being drawn use `--ease-draw`, the way a pen starts and settles; everything else uses `cubic-bezier(0.22, 1, 0.36, 1)`. No bounce, no overshoot.

## Motion after the hero

| Moment | What happens | Why it earns its place |
|---|---|---|
| Hero exit | `--exit` moves the title and emblem at different rates | The hero recedes in depth instead of fading flat |
| Headlines | Masked word-by-word rise | Hierarchy; body copy stays still |
| Chapter marker | The dimension line draws, then the reference is uncovered | Announces the chapter once |
| Silver chapters | The grid draws top to bottom | Shows the construction once, then stays quiet |
| Leads | One soft rise | The one line that opens each chapter's text |
| Bab II | Strands draw with a pen nib, then colour the inherited letters | Shows the lineage; tied to scroll |
| Bab III | The blade is drawn from the edge of the page | The name is the sword; tied to scroll |
| Bab IV | Callouts appear in order; the leader draws to the selected part; one marker travels the list; name, category and text arrive in that order | Confirms what the visitor did |
| Close | The hero's compass and 26 ticks run once more, and the emblem emerges | The page ends on its opening |

Three things were deliberately not added: a clock-wipe reveal of the emblem (reads as a slideshow transition), a rotating gear (the ticks are aligned to real teeth, so turning them would break the fact they show), and a toothed edge between surfaces (reads as castle walls).

## Critique before building

Rejected:

- **Emblem behind the title.** Hides the mark and doubles its wordmark.
- **Cropped emblem details as imagery.** Forbidden; the blade in Bab III is an abstract form, not part of the logo.
- **Numbered 01–04 eyebrows on their own.** Generic. `Bab I … Bab IV` stays as the natural Indonesian chapter convention; the sheet references (`01 / COLLECTIVE IDENTITY`) now sit at the far end of its dimension line, where a drawing would carry them.
- **`THE [emblem] 26 / GLADIUS` as a symmetrical lockup.** Reads as "The 26 Gladius". The `26` must follow the name.
- **A timeline in Asal-usul.** Would imply dated events that were never supplied.
- **Fade-up on every paragraph.** Only headlines get masks; body copy stays still.

## Constraints that shaped the build

- The mark is never recoloured or cropped, and the hero and closing always show it untouched. The one exception is the emblem chapter's inspection state, by design: the unselected parts sit in shadow (a temporary darkening) while the selected element stays at full, original strength.
- Institutional marks sit directly on blue with no box.
- Reduced motion shows the final state of everything immediately.
- Without JavaScript the page still shows all content.

## When JavaScript does not arrive

A reveal may only hide something that is certain to come back. `<html data-motion>` carries the state:

| State | Meaning | What the visitor gets |
|---|---|---|
| absent | JavaScript is off, or never started (set back after 10 s) | Static page: everything shown, all five meanings listed, dead controls removed, emblem at full brightness |
| `pending` | Set before first paint; scripts are loading | Reveals shown, tabs in place |
| `ready` | Scripts have started | Reveals below the fold hide and rise on scroll |

Headlines, rules, leads and the grid are CSS transitions. Each group holds `data-pending` until it is first seen, and a reveal is hidden only while `data-motion="ready"`, `data-pending` and "motion allowed" are all true. Motion for React is kept for what scroll drives directly: the hero's exit, the blade, the strands, the numeral's drift and the progress dial.

Rules that came out of testing:

- **One trigger per group.** Word-by-word headlines first used one Motion component per word, about sixty in all. On a slow phone that cost 730 ms of blocked main thread during hydration. One observer per headline with a CSS stagger costs almost nothing and looks identical.
- **A compositor-only reveal hides the page's largest image from the browser.** With only opacity and filter on the emblem, Chrome did not report it as painted until hydration repainted it, and LCP read 5.9 s for an image that had loaded in 100 ms. The widening clip makes the browser paint it as it appears.
- **A reveal never takes back what has been seen.** Anything on screen or already passed when scripts start loses `data-pending`. Without this, a deep link on a 4G phone showed a headline for two seconds, snapped it away, and raised it again.
- `data-reveal="scroll"` marks scroll-linked pieces (blade, strands). They are shown until scripts start but are never pinned, because they must follow the page.
- Late scripts still win: `ready` replaces the static page whenever it arrives.
