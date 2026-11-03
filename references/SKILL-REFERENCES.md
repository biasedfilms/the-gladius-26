# Skill and implementation research references

Research checked for this build kit on **4 November 2026**. Official documentation is preferred. These sources inform the custom skills and the technical recommendations; the included skills are original, project-specific instructions rather than verbatim copies.

## Claude Agent Skills format and use

1. **Anthropic — Agent Skills overview**  
   https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview  
   Documents the skill directory format, required `SKILL.md`, YAML frontmatter fields (`name` and `description`), discovery/use, and security considerations. The kit uses small, purpose-specific skills so their instructions can be loaded when relevant.

2. **Anthropic — Public Agent Skills repository**  
   https://github.com/anthropics/skills  
   Official examples and patterns for skills packaged as folders containing `SKILL.md` plus optional supporting resources.

3. **Anthropic — Official frontend-design skill**  
   https://github.com/anthropics/skills/tree/main/skills/frontend-design  
   Reference for grounding visual choices in subject matter, planning and critiquing before building, purposeful motion, and avoiding generic default layouts. This build kit does not copy its source file; it creates a Gladius-specific skill.

4. **Anthropic — Improving frontend design through Skills**  
   https://claude.com/resources/articles/improving-frontend-design-through-skills  
   Explains why under-specified frontend prompting tends to converge on generic visual patterns, and how specialized design guidance can steer typography, color, motion, and backgrounds toward more distinctive work.

## Motion and accessibility

5. **Motion for React — Documentation**  
   https://motion.dev/docs/react  
   Current React usage and animation primitives. The PRD recommends the `motion` package and `motion/react` imports when Motion is useful.

6. **Motion for React — Accessibility**  
   https://motion.dev/docs/react-accessibility  
   Documents reduced-motion support and the `useReducedMotion` / `MotionConfig` approaches.

7. **W3C WAI — Understanding WCAG 2.2 Success Criterion 2.3.3: Animation from Interactions**  
   https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions  
   Explains why users need control over non-essential movement and why operating-system reduced-motion preferences should be respected.

## Next.js implementation

8. **Next.js — Font optimization**  
   https://nextjs.org/docs/app/getting-started/fonts  
   Current guidance for `next/font`, font loading, and reducing external font requests/layout shifts.

9. **Next.js — Metadata and OG images**  
   https://nextjs.org/docs/app/getting-started/metadata-and-og-images  
   Guidance for page metadata and social sharing previews.

10. **Next.js — Image optimization**  
    https://nextjs.org/docs/pages/getting-started/images  
    Guidance on correctly sized image delivery and layout stability. Apply the matching current App Router API when implementing.

## How these references were applied

- Skills use Anthropic's directory + `SKILL.md` + YAML frontmatter convention.
- Frontend design skill forces subject-specific art direction, a plan/critique gate, and a signature moment.
- No-AI-slop skill turns generic aesthetic anti-patterns into explicit project constraints.
- Motion skill limits animation to the hero sequence and story-led interactions, while requiring reduced-motion support.
- Responsive/accessibility and QA skills require real device-width checks, keyboard use, contrast, and truthful test reporting.
- Technical recommendations defer to the current repository and current official docs rather than hard-coding outdated framework versions.
