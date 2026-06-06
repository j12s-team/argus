# Argus — Marketing Website

The public-facing marketing site for [Argus](https://argus-olive.vercel.app), an autonomous AI security startup for DeFi protocols. Built by the j12s team (Rivaldo Janneh + Antonio Jeremias) in São Paulo.

## Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS with custom Argus design tokens (CSS variables)
- **Routing:** React Router v6 (SPA, `vercel.json` handles rewrites)
- **Animation:** Framer Motion (scroll reveals + typewriter)
- **Icons:** lucide-react line icons
- **Meta:** react-helmet-async
- **Fonts:** Inter (display + body) + JetBrains Mono (eyebrows + code) — both loaded from Google Fonts

## Design System

This project uses a design system defined in `DESIGN.md`.

- Use only colors, fonts, and spacing values defined in `DESIGN.md`.
- Do not invent new values or use framework defaults.
- Match component states to patterns in `DESIGN.md`.

Before editing any visual or layout code, read `DESIGN.md` in full. The brand has explicit anti-slop constraints there — most common AI failure modes (default serifs, drop shadows, container soup, gradient hero text, filled buttons) are forbidden.

## Project layout

```
src/
  App.jsx                main router + global layout
  main.jsx               entry — wraps in ThemeProvider
  styles/globals.css     Tailwind base + Argus design tokens (CSS variables)
  data/                  single source of truth for copy — never inline copy
    contact.js           email, schedule URL, GitHub
    products.js          the four products (Protocol Guardian, SolGuard, Mosaic, Aivenstu)
    team.js              founders + open roles
    traction.js          loop steps, stats, inbound signals
  components/
    layout/              Navbar (scroll behaviour), Footer (4-column)
    ui/                  Button, Card, Badge, AccentBox, SectionLabel (eyebrow),
                         Terminal, LiveFeed, EyeIcon, EyeMark, ThemeProvider,
                         ThemeToggle, AvatarMonogram, Reveal, Typewriter
    sections/            Hero (centred), Problem, Solution, Products, Traction,
                         WhyNow, TeamTeaser, CTA, ProductHero, ProductCTA, TechStack
  pages/
    Landing.jsx          /
    ProtocolGuardian.jsx /protocol-guardian
    SolGuard.jsx         /solguard
    Mosaic.jsx           /mosaic
    Aivenstu.jsx         /aivenstu
    Team.jsx             /team
    NotFound.jsx
public/
  favicon.svg            Argus eye glyph
  og.svg                 Open Graph card
  team/                  founder photos (rivaldo.jpeg, antonio.jpeg)
```

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deployment

The site is hosted on Vercel at https://argus-olive.vercel.app. Every push to `main` auto-redeploys via the Vercel GitHub integration.

```bash
git add .
git commit -m "..."
git push
```

`vercel.json` configures Vite build + SPA rewrites. No env vars required.

## Editing copy

All marketing copy lives in `src/data/`. Touch nothing in components for content changes:

- **Contact / email / Cal.com link** → `src/data/contact.js`
- **Product details, contract addresses, hackathon status** → `src/data/products.js`
- **Founder bios, open roles** → `src/data/team.js`
- **Inbound signals, stats, problem-stats, loop steps** → `src/data/traction.js`

## Brand voice (non-negotiable)

- Never say "hack-proof", "fully secure", or "prevents all exploits". Use *mitigation, monitoring, response orchestration, risk reduction, blast radius reduction*.
- Never hype AI. Use *adaptive heuristics, behavioural intelligence, anomaly detection, contextual classification*.
- All hackathon submissions are **under review** — never imply wins.
- Inbound traction is the headline. Keep it loud: KeeperHub partner channel, Locus collaboration request, The Blockrunner Podcast invitation.

## Theming

Dark / light themes flip via a single `[data-theme="light"]` selector on `<html>`. CSS variables drive every Tailwind utility (`bg-argus-bg`, `text-argus-accent`, etc.). An inline `<script>` in `index.html` sets `data-theme` before paint, eliminating the dark→light flash on reload. Theme persists in `localStorage` under `argus-theme` and respects `prefers-color-scheme` on first visit.

**Always-dark surfaces:** `Terminal`, `LiveFeed`, and `EyeIcon` use a separate `--argus-code-*` token set that's defined once in `:root` and never overridden. Code displays and brand mark stay dark in both themes — this is intentional. See `DESIGN.md` § Surface model.

## Founder photos

Drop JPGs at `public/team/<name>.jpeg` (the team data file references `.jpeg` paths). If a file is missing, `AvatarMonogram` falls back to a branded RJ / AJ monogram automatically.

---

© 2026 Argus · Built by j12s · São Paulo, Brazil
