# The Gladius 26 — Website Build Kit

A Claude Code-ready project kit for building the **The Gladius 26 Digital Identity Archive**.

**Art direction:** Cinematic Heritage × Modern Editorial  
**Palette:** Visible royal navy, metallic gold, silver, and controlled deep-navy contrast  
**Hero:** Oversized THE GLADIUS typography, separate 26 edition marker, official emblem  
**Language:** Bahasa Indonesia

## What's included

```text
.
├── README.md
├── PRD.md
├── MASTER-PROMPT.md
├── CLAUDE.md
├── CONTENT-AND-FACTS.md
├── assets/brand/
│   ├── the-gladius-logo.png
│   ├── university-logo.png
│   ├── faculty-logo.png
│   └── ASSET-GUIDE.md
├── design/
│   ├── DESIGN-SYSTEM.md
│   ├── design-tokens.css
│   └── design-tokens.json
├── references/
│   └── SKILL-REFERENCES.md
└── .claude/skills/
    ├── frontend-design/SKILL.md
    ├── brand-system/SKILL.md
    ├── cinematic-motion/SKILL.md
    ├── content-integrity/SKILL.md
    ├── no-ai-slop/SKILL.md
    ├── responsive-accessibility/SKILL.md
    └── visual-qa/SKILL.md
```

## How to use with Claude Code

1. Extract this ZIP.
2. Copy the contents of the `the-gladius-26-build-kit` folder into the root of your existing website repository. Keep `.claude/skills/` at the repository root.
3. Keep `assets/brand/` as the source archive. During implementation, Claude should copy the three files into the app's public image directory without altering the originals.
4. Open the project in Claude Code.
5. Open `MASTER-PROMPT.md` and paste its full contents into Claude Code, or ask Claude Code to read and execute that file.
6. Claude Code can discover project skills from `.claude/skills/`. You can also invoke a skill explicitly, for example `/frontend-design`, `/cinematic-motion`, or `/visual-qa`.

The skills are original, project-specific instructions authored for this build kit. They use Anthropic's documented `SKILL.md` directory/frontmatter conventions and draw on official design, motion, accessibility, and Next.js documentation. They are not copied verbatim from Anthropic's reference skill.

## If you use Claude.ai rather than Claude Code

The `.claude/skills/` layout is intended for Claude Code project-level skills. Claude.ai's custom Skills upload workflow is separate; use Anthropic's current help documentation for its upload requirements. Do not assume this whole project kit ZIP is itself a single Claude.ai skill.

## Brand asset notes

- The Gladius emblem: 2048 × 2041 PNG.
- University logo: 220 × 220 PNG.
- Faculty identity artwork: 1378 × 1962 PNG.
- All three supplied assets are RGBA PNGs with transparency.
- Preserve every original; no recoloring, distortion, or generative recreation.
- The university and faculty marks keep their own original colors and remain subordinate to The Gladius emblem.

## Key design decision

The website uses a **more visible royal navy** (primary surface `#0E3670`) rather than allowing the deep navy to become almost black. Darker navy is used only for contrast. Silver sections create visual breathing room; gold is reserved for accents.

## Scope

The first release is a static, single-page digital autobiography. It does not need authentication, a database, a CMS, an admin area, or social features.

## Start here

Read `PRD.md` for the full product and visual specification, then execute `MASTER-PROMPT.md`.
