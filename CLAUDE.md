# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is the personal portfolio/CV site for Mohammad Hossein Golestan. It is plain static HTML/CSS/JS with no build step, hosted on GitHub Pages at https://mhgolestan.github.io/.

## Commands

- Preview locally: `python -m http.server` from the repo root, then open http://localhost:8000.
- Deploy: push to `main`. GitHub Pages must be set to serve from **main / (root)** under Settings → Pages. The old `gh-pages` branch belongs to the retired Create React App build.

## Architecture

- `index.html` holds all site content. The source of truth is the CV, recorded in `PRODUCT.md`. Edit the copy directly in this file.
- `styles.css` is the whole design system. Tokens live on `:root`. The dark theme ("crossed polars") is defined twice, once under `prefers-color-scheme` and once under `[data-theme="dark"]`, so keep the two blocks in sync.
- `main.js` does three things:
  - the polarizer theme toggle, which saves the choice in localStorage under `polars`
  - the nav's current-section highlight
  - the Fig. 1 canvas: an illustrative agentic pipeline (Docling → embeddings → RAG → Claude agent → LLM-as-a-judge gate with retry loop → human review → release) drawn over a faint thin-section grain field, with a Pause control
- Product rules live in `PRODUCT.md`: no phone number, city only, LinkedIn and GitHub are the only socials, no skill bars. The visual direction lives in `DESIGN.md` and `.impeccable/surfaces/`.
