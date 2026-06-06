---
version: 1.0
name: argus-design-system
description: |
  Argus is an autonomous AI security startup for DeFi protocols, named after Argus
  Panoptes — the hundred-eyed giant of Greek myth who never sleeps. The web surface
  reads as security infrastructure, not SaaS marketing: a near-black canvas broken
  by a single signature mint accent (#00FFB2), Inter weight 400 throughout with
  aggressive negative letter-spacing on display sizes, JetBrains Mono uppercase
  tracked for code-comment eyebrows, pill-shaped CTAs, hairline-bordered flat cards,
  and "console viewport" surfaces (eye motif, mempool live feed, terminal contract
  addresses) that stay dark even in light mode. The system applies xAI's stark
  discipline to a mint identity — engineered-cosmic with a single brand colour.

colors:
  # Brand
  primary: "#00FFB2"          # Argus mint — the signature accent, occupies xAI's "white" slot
  primary-dim: "#00CC8E"      # Hover / pressed state
  on-primary: "#0A0A0A"       # Dark text on mint-filled pills

  # Canvas (dark theme — default)
  canvas: "#0A0A0A"           # Page background — near-black
  canvas-soft: "#1A1C20"      # Hovered nav items, tooltips
  canvas-card: "#191919"      # Card / panel surface
  canvas-card-2: "#1E1E1E"    # Nested card surface
  canvas-mid: "#363A3F"       # Mid-dark — bright hairlines, separators

  # Text (dark theme)
  ink: "#FFFFFF"              # Primary text on canvas
  body: "#DADBDF"             # Body copy, lead paragraphs
  mute: "#7D8187"             # Captions, fine print, muted labels

  # Hairlines & borders
  hairline: "#212327"         # 1px dividers, card borders — the brand's elevation system

  # Always-dark "console viewport" tokens (used by Terminal, LiveFeed, EyeIcon
  # backdrop — these surfaces stay dark even when the site is in light mode).
  code-bg: "#0A0A0A"
  code-bg-2: "#191919"
  code-fg: "#FFFFFF"
  code-muted: "#7D8187"
  code-border: "#212327"

  # Light theme — xAI is dark-only; Argus opts to provide light for product reasons.
  # Mint shifts darker to keep AA contrast on white surfaces.
  light-canvas: "#F8FAFC"     # slate-50
  light-canvas-soft: "#F1F5F9"
  light-canvas-card: "#FFFFFF"
  light-hairline: "#E2E8F0"   # slate-200
  light-ink: "#0F172A"        # slate-900
  light-body: "#1E293B"       # slate-800
  light-mute: "#64748B"       # slate-500
  light-primary: "#00AE7C"    # vibrant mint — AA on white

  # Semantic (sparingly — only on status indicators)
  red: "#E24B4A"              # Critical / blocked
  yellow: "#EF9F27"           # Warning / under-review
  blue: "#378ADD"             # Info / watch
  purple: "#9945FF"           # Solana chain badge only

typography:
  display-xl:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 80px            # Hero headlines — capped at 80px to one-line 22-char headlines in 1280px container
    fontWeight: 400
    lineHeight: 80px
    letterSpacing: -0.025em
  display-lg:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 72px
    fontWeight: 400
    lineHeight: 72px
    letterSpacing: -1.8px
  display-md:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 48px            # Section headlines
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: -1.2px
  display-sm:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 32px            # Card cluster headings
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.6px
  display-xs:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  body-lg:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 18px            # Lead paragraphs under hero
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px            # Default body
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px            # Secondary body, card detail
    fontWeight: 400
    lineHeight: 20px
  caption-mono:
    fontFamily: '"JetBrains Mono", "Geist Mono", ui-monospace, monospace'
    fontSize: 14px            # Section eyebrow — UPPERCASE, +1.4px tracking
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1.4px
    textTransform: uppercase
  caption-mono-sm:
    fontFamily: '"JetBrains Mono", "Geist Mono", ui-monospace, monospace'
    fontSize: 12px            # Card eyebrow, trust signals
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px
    textTransform: uppercase
  code:
    fontFamily: '"JetBrains Mono", ui-monospace, monospace'
    fontSize: 13px            # Terminal/console body
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Inter, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px           # Card interior padding
  2xl: 32px
  3xl: 48px
  4xl: 64px          # Section padding (desktop)

rounded:
  none: 0px
  sm: 8px            # Cards, inputs, code surfaces
  md: 8px
  pill: 9999px       # Every interactive element — buttons, badges, theme toggle
  full: 9999px

layout:
  container-max: 1280px        # Marketing centres at 1280px
  container-padding-mobile: 20px
  container-padding-desktop: 48px
  hero-vertical-padding: 96px  # pt-32 = 128px; pb-24 = 96px
  section-vertical-padding: 64px
  card-padding: 24px
  containers-max-nest-levels: 2

elevation:
  flat:
    description: Default. No shadow, no border.
  hairline:
    description: 1px solid hairline border. Used for cards, button outlines, dividers.
    value: "1px solid {colors.hairline}"
  hover-accent:
    description: |
      Border colour shifts to mint at 60% opacity on card hover.
      Replaces the old drop-shadow glow — flat geometry only.
    value: "1px solid {colors.primary}/60"

components:
  nav-bar:
    backgroundColor: "{colors.canvas}/85 backdrop-blur"
    borderBottom: "{colors.hairline}"
    height: 64px
    padding: "0 {layout.container-padding-desktop}"
    behavior: |
      Transparent on hero, solid with hairline border on scroll (>24px).

  nav-link:
    typography: "{typography.caption-mono-sm}"
    color: "{colors.body}"
    hoverColor: "{colors.ink}"

  wordmark:
    typography: "{typography.caption-mono-sm}"
    fontSize: 13px
    letterSpacing: 0.18em
    color: "{colors.ink}"
    paired-with: EyeMark (22px mint glyph)

  button-primary:
    description: The rare mint-filled pill. Only used for the headline CTA on each page.
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding-sizes:
      sm: "8px 12px"
      md: "10px 16px"
      lg: "12px 20px"
    hover: backgroundColor "{colors.primary-dim}"

  button-secondary:
    description: The canonical pill — transparent fill, hairline border, ink text.
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    hover:
      borderColor: "{colors.primary}/70"
      textColor: "{colors.primary}"

  button-ghost:
    description: Inline link-like pill. No border by default.
    backgroundColor: transparent
    textColor: "{colors.body}"
    borderColor: transparent
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    hover:
      textColor: "{colors.ink}"

  button-outline:
    description: Accent-coloured outline. Used for "Apply" / "Submission" anchors.
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}/50"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    hover:
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"

  card:
    description: |
      Flat hairline-bordered surface. No shadow. Mint border tint on hover.
      Optional 2px mint accent bar at the top — the Argus signature element.
    backgroundColor: "{colors.canvas-card}"
    borderColor: "{colors.hairline}"
    borderRadius: "{rounded.sm}"
    padding: "{spacing.xl}"
    accentBar:
      placement: top
      height: 2px
      colour: "linear-gradient(90deg, transparent, {colors.primary}, transparent)"
    hover:
      borderColor: "{colors.primary}/60"

  badge:
    description: Mono uppercase pill chip. Used for status (LIVE, UNDER REVIEW, FLAGSHIP).
    shape: pill
    typography: "{typography.caption-mono-sm}"
    border: "1px solid {tone}/40"
    background: "{tone}/10"
    textColor: "{tone}"
    optional-dot:
      size: 6px
      colour: "{tone}"
      pulse: "animation when status === LIVE"

  eyebrow:
    description: The brand's signature label. Code-comment voice above every section.
    typography: "{typography.caption-mono}"
    textTransform: uppercase
    color: "{colors.ink}"
    optional-dot:
      size: 6px
      colour: "{colors.primary}"
      placement: before

  accent-box:
    description: The brand's "callout" element. Left mint stripe, faint accent background.
    backgroundColor: "{colors.primary}/[0.06]"
    borderLeftWidth: 4px
    borderLeftColor: "{colors.primary}"
    borderColor: "{colors.hairline}"
    borderRadius: "{rounded.sm}"
    padding: "{spacing.lg} {spacing.xl}"

  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"

  divider:
    description: Solid 1px hairline. NOT a gradient.
    height: 1px
    background: "{colors.hairline}"

  hero-band:
    description: |
      Centred composition. Eyebrow → display-xl headline → body-lg lead → CTA row
      → trust signals row → eye motif + live feed in 2-col grid underneath.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    textAlign: center
    paddingTop: "128px"
    paddingBottom: "96px"
    headline-max-width: full container
    body-max-width: 640px

  content-band:
    description: Standard content section. Left-aligned headline.
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.4xl} {spacing.xl}"
    eyebrow-then-headline: "caption-mono → display-md"

  loop-card:
    description: |
      The 4-step "Monitor / Classify / Simulate / Act" pattern.
      Eyebrow with step number, sentence-case display-sm headline, body-sm detail.
    inherits: card
    eyebrow-template: "Step {n}"
    headline-style: sentence-case display-sm (32px Inter 400 with -0.02em tracking)
    indicator: 6px pulsing mint dot in top-right corner

  terminal:
    description: |
      Always-dark code surface. Used for contract addresses, command output.
      Keeps the dark "console" aesthetic even when site is in light mode —
      code reads better dark.
    backgroundColor: "{colors.code-bg}"
    borderColor: "{colors.code-border}"
    headerBackground: "{colors.code-bg-2}"
    rounded: "{rounded.sm}"
    chrome: macOS-style three traffic-light dots in header (red/yellow/green)
    typography: "{typography.code}"
    textColor: "{colors.code-muted}"
    accentColor: "{colors.primary}"

  live-feed:
    description: |
      Simulated mempool feed shown ambient in the hero. Same always-dark code
      surface as Terminal. Rows scroll on a 1.4s timer. Each row has a state
      column (OK/WATCH/ALERT/BLOCK), tx address, method, ms latency, risk score.
    inherits: terminal
    status-colours:
      OK: "{colors.primary}"
      WATCH: "{colors.blue}"
      ALERT: "{colors.yellow}"
      BLOCK: "{colors.red}"

  eye-icon:
    description: |
      The Argus brand mark. SVG. Always-dark "console viewport" — a soft radial
      dark backdrop (#08080C) fades to transparent at edges. Inside: mint outer
      rings, mint iris radial-gradient, dark void pupil, white specular highlights,
      mint crosshair ticks. Pulse animation on the halo.
      Identity holds across themes — like a logo, not a UI element.
    palette-locked: true     # Never theme-flips
    sizes: [32px sm, 56px md, 120px lg, 240px xl]

  eye-mark:
    description: |
      Compact 22px version for navbar / footer logo lockup. Iris uses currentColor
      (inherits from .text-argus-accent on parent), so it tints mint in both themes.
    palette-flows-from-parent: true

  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"
    columns: 4 (logo+blurb | products | company | contact)

  theme-toggle:
    description: Circular pill button with morphing Sun ↔ Moon icon. Top-right of navbar.
    shape: "{rounded.pill}"
    size: "32-36px"
    border: "{colors.hairline}"
    persistence: localStorage key "argus-theme"
    initial: respects prefers-color-scheme

---

# Argus Design System

## Identity

Argus is named after **Argus Panoptes**, the hundred-eyed giant of Greek myth who never sleeps. The product is an autonomous AI agent for DeFi runtime security. The brand voice is **engineered-cosmic**: precise, sparse, technical — a research lab announcing its work rather than a SaaS marketing site.

The visual system applies xAI's stark discipline to a single mint identity. Where xAI uses white-on-near-black as its entire chromatic vocabulary, Argus uses **mint-on-near-black** with white as the secondary ink. The mint is non-negotiable — it's the brand.

**Two voices in tension:**
1. **Inter weight 400** carries every display headline at sizes up to 80px with -2.5% letter-spacing. Tracking does the emphasis work; the brand never bolds.
2. **JetBrains Mono uppercase** carries every eyebrow, label, and code surface at +1.4px tracking — eyebrows read as code comments, not marketing labels.

Every interactive element is a **pill** (`rounded-pill`, 9999px). The pill is the entire shape system for buttons, badges, and the theme toggle. Cards are tight 8px-rounded rectangles. Bands are full-bleed (no radius).

## Surface model

The site has three surface registers:

1. **Page canvas** (#0A0A0A in dark, #F8FAFC in light) — the default.
2. **Canvas card** (#191919 in dark, #FFFFFF in light) — every Card, AccentBox, and content panel sits one shade up from the page.
3. **Always-dark code surface** (#0A0A0A pure, never theme-flips) — used by Terminal, LiveFeed, and the EyeIcon backdrop. These read as "console viewports" — windows into dark machinery even when the surrounding page is light. This is intentional: code displays read better dark, and the eye motif is a brand mark, not a UI element.

Hairlines (#212327) carry all elevation. **Drop shadows are forbidden.** The brand never lifts a surface with a shadow — only with a 1px border colour or a subtle background tint.

## Typography in practice

The display ladder caps at **80px** for hero headlines (not the full 96px of xAI's display-xl) because Argus hero headlines run 22 characters ("The Hundred-Eyed Guard") and need to one-line in a 1280px container. The 80px choice is a deliberate compromise.

Section headlines are **48px** display-md. Card-cluster headings are **32px** display-sm. Body lead is **18px**, default body 16px, secondary body 14px.

Eyebrows are always JetBrains Mono uppercase at 14px (or 12px for `caption-mono-sm`) with a leading mint dot. The dot is a 6px filled circle.

Hero headline uses a typewriter effect (~36ms/character) on first paint. This is animation in service of voice ("watching is happening") — not animation for delight.

## Layout

The marketing centre is **1280px** with 20px mobile / 48px desktop padding. Section vertical padding is **64px**. **Containers nest at most 2 levels deep** — if a third level of containment is tempting, the design is wrong.

The hero is **centred**. Every other section is left-aligned (eyebrow → headline → body → cards). Mobile collapses 2-up / 4-up grids to single column with the same vertical padding.

## Component states

- **Buttons** have only two states beyond rest: hover (border or background colour shift) and focus-visible (2px mint outline, 2px offset). No depressed state. No disabled state styling unless contextually required.
- **Cards** have only one hover state: border colour shifts to `mint/60`. No transform, no shadow, no scale.
- **Live indicators** (status dots) use a **pulse animation** only when status === "live". For "under review" / "review" they're static. Pulse is the brand's only loop animation outside the typewriter.
- **Theme toggle** morphs Sun ↔ Moon via opacity + rotation (no scale).

## Anti-slop constraints

These are the patterns Argus does **not** use, even when AI-generated UI suggests them:

1. **No default serifs** (Playfair, EB Garamond, etc.). Display is Inter; mono is JetBrains Mono. The two-face system is the brand voice.
2. **No "blinking status dots" as decoration.** Pulse is reserved for genuinely-live state (mempool feed, "LIVE on Sepolia" badge). Static dots are static.
3. **No emoji icons.** Iconography is lucide-react line icons or branded SVG only.
4. **No gradient backgrounds.** The only gradients are: the radial mint hero glow (very subtle, <12% alpha), the 2px mint accent-bar at the top of cards (transparent → mint → transparent), and the iris of the eye motif. No section-spanning gradients, no gradient text fills.
5. **No drop shadows.** Hairlines carry elevation. Light mode adds a single very-subtle Card lift only because mint glow reads as a render glitch on white — this is not "elevation," it's solving a perception problem.
6. **No filled buttons broadly.** The mint-filled primary pill is the rare exception — used once or twice per page for the headline CTA. Every other button is an outline pill.
7. **No bolded display headlines.** Weight 400 throughout. If text needs more emphasis, scale it up — don't bold it.
8. **No "container soup" / nested-card-in-card.** Containers nest at most 2 levels (a Card inside a Section inside a Page). If a third level of containment is tempting, the design is wrong.
9. **No marketing platitudes.** Argus never claims to "prevent all exploits" or be "hack-proof." Use *mitigation, monitoring, response orchestration, risk reduction, blast radius reduction.* Never hype AI — say *adaptive heuristics, behavioural intelligence, anomaly detection, contextual classification*.
10. **No purple decorative accents, no rainbow, no auto-generated illustrations.** xAI's secondary palette (sunset, dusk, twilight, breeze) is **not adopted** for Argus. Mint is the only colour. The Solana chain badge is the single exception — purple is forced by partner brand.
11. **Light mode is not "white with a mint splash."** The whole palette flips together (canvas, card, hairline, ink, body, muted, accent — all shift). Code surfaces stay dark on purpose. No half-flipped state.
12. **The eye motif never gets re-skinned per page.** It is a brand mark with a locked palette. Don't tint it per chain, don't make it "playful," don't add eyelashes.

## File map (where to apply this spec)

```
src/styles/globals.css          → CSS variables for every token here
tailwind.config.js              → Tailwind colour + font + radius + maxWidth tokens
src/components/ui/              → Button, Card, Badge, AccentBox, SectionLabel
                                  (eyebrow), Terminal, LiveFeed, EyeIcon, EyeMark,
                                  ThemeToggle, AvatarMonogram, Reveal, Typewriter
src/components/layout/          → Navbar (scroll behaviour), Footer (4-column)
src/components/sections/        → Hero (centred), Problem, Solution (loop cards),
                                  Products, Traction, WhyNow, TeamTeaser, CTA
src/pages/                      → Landing, ProtocolGuardian, SolGuard, Mosaic,
                                  Aivenstu, Team, NotFound
src/data/                       → All copy lives here — contact, products, team,
                                  traction. Never inline copy in components.
```

Touching any of these without first reading this document is the most common failure mode for AI-assisted edits. Read the file map. Use the tokens. Don't invent values.

---

© 2026 Argus · Built by j12s · São Paulo, Brazil
