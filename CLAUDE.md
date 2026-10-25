# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A single-page React site: a private, personal proposal page addressed to "Roshni" (see [story.md](story.md) for the full script/copy and style direction — tone, line-by-line reveal structure, and the closing "Yes" / "Chaanta maarun?" buttons). The page is meant to be mobile-friendly, single-scroll, and not indexed/searchable.

The codebase is currently the unmodified Vite + React scaffold (`src/App.jsx` still renders the default "Get started" counter demo) — the actual content from story.md has not been built yet. `animejs` and `gsap` are installed as dependencies for the intended fade-in/reveal animations but are not yet used anywhere in `src/`.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured.

## Architecture

- Plain Vite + React (JS, not TS) — single entry point `src/main.jsx` mounts `src/App.jsx` into `index.html`.
- No router, no state management library, no component directory structure yet — everything currently lives in `App.jsx`.
- Styling is plain CSS (`src/App.css`, `src/index.css`), no CSS-in-JS or Tailwind.
- `public/icons.svg` holds a sprite of icons referenced via `<use href="/icons.svg#...">`.
- When implementing the real page per story.md, follow its style notes: reveal content one line at a time (fade-in), soft palette, gentle animations — `animejs`/`gsap` are the intended tools for this.
