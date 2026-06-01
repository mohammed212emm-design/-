# AGENTS.md — Yemen Market Architecture

## Project Overview

Static HTML/CSS/JS e-commerce frontend for the Yemeni market. No framework, no build step — served directly by Netlify as static files.

## Key Directories & Files

```
/
├── index.html      # Main store page (all products, filters, cart sidebar)
├── login.html      # Auth UI (login + register tabs, client-side validation only)
├── netlify.toml    # publish = "." — root is the public dir
└── README.md
```

## Architecture Decisions

- **No framework**: User explicitly requested plain HTML + Tailwind CDN + Vanilla JS. Adding a framework would contradict the requirements.
- **Tailwind via CDN**: No build pipeline; Tailwind is loaded from `cdn.tailwindcss.com`. For production, consider switching to the Tailwind CLI build.
- **Products as JS array**: All product data lives in the `products` const inside `index.html`. This is intentional — the user requested a populated data structure for later migration to a real backend.
- **RTL**: Both pages use `dir="rtl" lang="ar"` and the Tajawal Arabic font from Google Fonts.
- **Auth is UI-only**: The login/register forms are frontend-only with simulated loading states. No backend auth is wired up. To add real auth, integrate Netlify Identity (see `/opt/buildhome/.claude/skills/netlify-identity/SKILL.md`).

## Color System (CSS variables in index.html)

```
--clr-dark   #181818   Background
--clr-card   #222222   Card backgrounds
--clr-red    #c0392b   Primary action / brand
--clr-red-lt #e74c3c   Hover/price highlight
--clr-gold   #d4af37   Eid section accent
--clr-muted  #888888   Secondary text
--clr-border #2e2e2e   Borders/dividers
```

## Product Categories

Filter values map to `category` array items on each product:
- `all` — show everything
- `eid` — Eid al-Adha sale items (time-limited, countdown to 2026-06-11)
- `women` — women's section
- `men` — men's section
- `kids` — children's section
- `home` — home & accessories

## Adding Backend Features

- **Persistent cart / user data**: Use Netlify Database (`netlify-database` skill)
- **Real authentication**: Use Netlify Identity (`netlify-identity` skill)
- **Image uploads**: Use Netlify Blobs (`netlify-blobs` skill)
- **Server-side logic**: Add Netlify Functions under `netlify/functions/`
