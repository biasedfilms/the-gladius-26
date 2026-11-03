---
name: responsive-accessibility
description: Ensure the Gladius 26 archive works across mobile, tablet, desktop, keyboard, and reduced-motion settings; use for layout implementation and accessibility review.
---

# Responsive Accessibility — The Gladius 26

Design for small screens as deliberately as desktop. Target WCAG 2.2 AA where practical.

## Responsive requirements

Test at minimum: 320px, 375/390px, 768px, 1024px, and 1440px.

- No horizontal page overflow.
- Hero title wraps intentionally and remains legible.
- The separate 26 marker never collides with the title or logo.
- All three identity marks preserve aspect ratio and remain readable.
- The university/faculty lockup may stack on small screens.
- Silver and blue chapter layouts recompose instead of simply shrinking.
- Emblem explanations are touch-friendly and do not depend on hover.
- Avoid fixed heights that clip translated or wrapped content.
- Use fluid type and spacing, e.g. `clamp()` where appropriate.

## Accessibility requirements

- Semantic landmarks, one clear page-level h1, logical h2/h3 hierarchy.
- Keyboard-accessible navigation and emblem selection.
- Clear focus-visible states.
- Buttons and links have meaningful accessible names.
- Images have meaningful alt text; decorative imagery uses empty alt text.
- Do not encode meaning through color alone.
- Maintain sufficient contrast on both blue and silver surfaces.
- Ensure sticky headers do not cover anchor targets; use `scroll-margin-top` where needed.
- Use comfortable touch targets (aim for 44×44 CSS pixels where practical).

## Reduced motion

Honor `prefers-reduced-motion: reduce` in CSS and any animation library. Remove large movement, parallax, and autoplay. Do not hide or delay content in the reduced-motion state. Keep state changes understandable without motion.

## Testing

Check keyboard-only use, tab order, focus visibility, zoom/reflow, mobile stacking, contrast, image sizing, and reduced-motion behavior. Do not claim a formal WCAG audit unless one was actually completed.
