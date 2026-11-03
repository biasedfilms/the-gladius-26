---
name: cinematic-motion
description: Design and implement purposeful cinematic transitions for The Gladius 26; use when building the hero reveal, chapter transitions, scroll progress, emblem interaction, or motion polish.
---

# Cinematic Motion — The Gladius 26

The site needs a memorable “wow” moment, not nonstop animation. Motion should make the identity and story feel intentional.

## Primary signature sequence

Orchestrate one short hero sequence:

1. The royal-blue surface is immediately visible.
2. Oversized `THE GLADIUS` typography reveals using a refined mask/clip or restrained position/opacity choreography.
3. The separate `26` edition marker resolves into position.
4. The Gladius emblem appears as supporting artwork without changing its image or proportions.
5. The university/faculty affiliation lockup appears last.

The sequence must not block scrolling or delay access to content. Avoid a forced intro screen and avoid replaying the full sequence on every render.

## Supporting motion

- The Origins chapter may draw a connecting line from The Gladiators 23 to The Gladius 26.
- Use chapter transitions sparingly, particularly where the page changes between blue and silver surfaces.
- The emblem selector should animate only the state change that the user initiated.
- Scroll progress may use a subtle scale transform.
- Avoid repeated generic reveal animations across every paragraph.

## Implementation

- Prefer CSS for simple hover, focus, color, and divider transitions.
- If React animation sequencing materially improves quality, use the current Motion for React package (`motion`) and import from `motion/react`.
- Prefer transform and opacity; avoid animating expensive layout properties unnecessarily.
- Use a restrained easing curve; avoid elastic/bouncy movement for the heritage identity.
- Ensure animation does not cause layout shifts or hide content before hydration.
- Do not introduce GSAP or another large library unless there is a clear, demonstrated need.

## Accessibility

Respect `prefers-reduced-motion`. If Motion is installed, use its reduced-motion APIs or `MotionConfig`. Replace large spatial movement with immediate/opacity-only states, disable parallax and autoplay, and keep all content accessible. No audio autoplay, cursor trails, forced scrolling, or perpetual particle systems.

## Review

Ask: does this motion clarify the identity, reveal a relationship, or confirm an interaction? If not, remove it. Inspect the actual sequence at desktop and mobile sizes and verify the reduced-motion state.
