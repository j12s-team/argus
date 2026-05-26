# Argus — Marketing Website

The public face of **Argus**, an autonomous AI security startup for DeFi protocols. Built by [j12s](https://github.com/j12s-team).

> "The hundred-eyed guard that never sleeps."

This repo is a production-ready Vite + React + Tailwind site covering the landing page, four product pages (Protocol Guardian, SolGuard, Mosaic, Aivenstu), and a team page.

---

## Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS (custom Argus design tokens)
- **Routing:** React Router v6 (SPA)
- **Animation:** Framer Motion (scroll reveals, counters)
- **Icons:** lucide-react
- **Meta:** react-helmet-async
- **Fonts:** Inter (body) · Space Mono (display) · JetBrains Mono (terminal) — Google Fonts

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deploying

Already configured for **Vercel** — `vercel.json` sets up Vite build + SPA rewrites. Just point a Vercel project at this repo and deploy. The whole site is static.

## Project layout

```
src/
  App.jsx                main router + global layout
  main.jsx               entry
  styles/globals.css     Tailwind + Argus design tokens
  data/                  single source of truth for copy
    contact.js           email, schedule URL, GitHub
    products.js          the four products
    team.js              founders + open roles
    traction.js          loop steps, stats, inbound signals
  components/
    layout/              Navbar, Footer
    ui/                  Button, Card, Badge, EyeIcon, Typewriter, ...
    sections/            Hero, Problem, Solution, Products, ...
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
```

## Editing copy

Every piece of marketing copy lives in `src/data/`. Touch nothing in components for content changes:

- **Contact / email / Cal.com link** → `src/data/contact.js`
- **Product details, contract addresses, hackathon status** → `src/data/products.js`
- **Founder bios, open roles** → `src/data/team.js`
- **Inbound signals, stats, problem-stats** → `src/data/traction.js`

## Founder photos

Founder photos render as monogram avatars by default. To swap in real photos:

1. Drop the image at e.g. `public/team/rivaldo.jpg`.
2. In `src/data/team.js`, set `photo: '/team/rivaldo.jpg'`.

That's it — `AvatarMonogram` keeps the same border treatment with a photo.

## Design tokens

Defined in `tailwind.config.js` under `colors.argus` and as CSS classes in `globals.css`:

| Token | Value |
| --- | --- |
| `bg-argus-bg` | `#0A0A0F` (background) |
| `text-argus-accent` | `#00FFB2` (electric mint — signature) |
| `bg-argus-card` | `#12121A` |
| `border-argus-border` | `#1E1E30` |
| `text-argus-muted` | `#8888AA` |

Section helpers: `.section`, `.wrap`, `.eyebrow`, `.h-display`, `.h-section`, `.card-base`, `.accent-bar`, `.link-arrow`.

## Brand notes

- Never say "hack-proof", "fully secure", or "prevents all exploits". Use *mitigation, monitoring, response orchestration, risk reduction, blast radius reduction*.
- Never hype AI. Use *adaptive heuristics, behavioral intelligence, anomaly detection, contextual classification*.
- All hackathon submissions are **under review** — never imply wins.
- Inbound traction is the headline. Keep it loud.

---

© 2026 Argus · Built by j12s · São Paulo, Brazil
