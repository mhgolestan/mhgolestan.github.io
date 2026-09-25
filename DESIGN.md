---
name: Mohammad Hossein Golestan
description: A career seen through the petrographic microscope. One eyepiece field, two polarizer states.
colors:
  ground: "#eef0f2"
  ground-2: "#e3e7ea"
  ink: "#14161b"
  ink-2: "#454b55"
  rule: "#c3c9cf"
  tick: "rgba(20, 22, 27, .16)"
  epoxy: "#1637cc"
  epoxy-ink: "#ffffff"
  oil: "#e2a30f"
  plate-ink-2: "#d3dcff"
  ground-xpl: "#0b0c0f"
  ground-2-xpl: "#15171c"
  ink-xpl: "#eceee9"
  ink-2-xpl: "#a8aeb8"
  rule-xpl: "#2c3038"
  tick-xpl: "rgba(236, 238, 233, .12)"
  epoxy-xpl: "#f1c94a"
  epoxy-ink-xpl: "#0b0c0f"
  oil-xpl: "#b8820c"
  pore-xpl: "#050506"
  plate-xpl: "#9c2a62"
  plate-ink-2-xpl: "#f6d3e4"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 118"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 118"
  headline-mail:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 5.2vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.25
    fontVariation: "\"wdth\" 110"
  role:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 600
    fontVariation: "\"wdth\" 110"
  body-lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 100"
  body-small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  mark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 125"
  label-mono:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    fontVariation: "\"wdth\" 87.5"
  data-mono:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.9
    fontFeature: "\"tnum\""
    fontVariation: "\"wdth\" 87.5"
rounded:
  focus: "2px"
  pill: "999px"
  eyepiece: "50%"
  grain: "45% 55% 50% 40%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "24px"
  xl: "32px"
  gap: "clamp(16px, 2vw, 28px)"
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(72px, 11vw, 144px)"
components:
  button-primary:
    backgroundColor: "{colors.epoxy}"
    textColor: "{colors.epoxy-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-xpl:
    backgroundColor: "{colors.epoxy-xpl}"
    textColor: "{colors.epoxy-ink-xpl}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  link-out:
    textColor: "{colors.ink}"
    padding: "0 0 2px"
  polarizer-toggle:
    textColor: "{colors.ink}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.pill}"
    padding: "7px 12px 7px 8px"
  address-bar:
    backgroundColor: "{colors.ground}"
    height: "56px"
  eyepiece:
    backgroundColor: "{colors.epoxy}"
    rounded: "{rounded.eyepiece}"
    width: "min(100%, 80svh)"
  contact-plate:
    backgroundColor: "{colors.epoxy}"
    textColor: "{colors.epoxy-ink}"
    padding: "clamp(56px, 8vw, 112px) 0 clamp(64px, 9vw, 128px)"
  contact-plate-xpl:
    backgroundColor: "{colors.plate-xpl}"
    textColor: "{colors.epoxy-ink}"
---

# Design System: Mohammad Hossein Golestan

## Overview

**Creative North Star: "Thin Section"**

The page is a thin section of rock under a petrographic microscope, where his PhD lived. The first viewport is one eyepiece field: an illustrative agentic AI pipeline drawn as a thin section, its stages as grain-shaped nodes on blue epoxy, with amber request packets flowing between them. Everything else on the page is the lab bench around that field. It is a cool, clear ground and one monumental wide grotesk, and its only geometry is the microscope's reticle and a point-count grid of small crosses.

The system has two states, and they are the microscope's two states. Plane-polarized light (PPL) is the light theme: cool grain-white, epoxy blue, amber packets. Crossed polars (XPL) is the dark theme: the isotropic epoxy goes extinct to black and the grains flash interference colors. The polarizer toggle rotates one state into the other, and the canvas dissolves between them. Chromatic color lives in the material (the pores, the grains, the packets, the contact plate) and in the single action color, which is the epoxy itself. Reading columns stay achromatic.

Density is editorial and generous: a 12-column grid, a hairline rule above each block, and a heavy headline above a black rule to open each section. The page rejects the dark dev-portfolio hero with a gradient headline and a card grid.

**Key Characteristics:**
- One eyepiece field as the signature: a pipeline diagram drawn in thin-section material, with reticle hairlines carried across the whole hero.
- Two themes that are physical states of the instrument (PPL and XPL), not a color inversion.
- One wide variable grotesk (Archivo, width axis 100 to 125) for everything readable. Martian Mono only as the instrument's voice.
- Hairline rules and a 120px point-count grid carry the structure. There are no cards.
- Neutral shadows only, used on the eyepiece and the primary pill.

## Colors

The palette comes from a stained thin section: a cool near-white ground and graphite ink, with epoxy blue and packet amber as the only chromatic voices in PPL, swapped to epoxy gold on black with a gypsum-plate magenta in XPL.

### Primary
- **Petrographic Epoxy Blue** (`epoxy`): the blue dyed resin that fills pore space. In PPL it is the pore color on the canvas, the link color, the primary pill, the `::selection` fill, the grain-shaped list bullets, and the full-bleed contact plate. It is the only action color.
- **Extinct-Field Gold** (`epoxy-xpl`): the XPL counterpart of the action color. Links, the primary pill, selection and the focus ring turn gold on the black ground.

### Secondary
- **Request Packet Amber** (`oil` / `oil-xpl`): the request packets travelling the pipeline on the canvas, and the arrival ring a node flashes. In PPL it is also the focus ring (`--focus`). It never fills reading surfaces.
- **Gypsum Plate Magenta** (`plate-xpl`): the first-order red plate. It replaces epoxy blue as the contact plate's field under crossed polars. Its secondary text is `plate-ink-2-xpl`. In PPL the contact plate is epoxy, with `plate-ink-2` as its secondary text.

### Neutral
- **Cool Grain White** (`ground`): the page ground in PPL. `ground-2` is a reserved recessed tone, currently unused.
- **Graphite Ink** (`ink`): headings, body, the section-opening rule, and the node labels on the canvas. `ink-2` is secondary text, captions, fact labels, dates and nav labels.
- **Hairline Grey** (`rule`): 1px rules above every fact, competency, log row and certification, the eyepiece ring and the hero hairlines.
- **Point-Count Tick** (`tick`): the translucent 1px crosses of the fixed 120px grid behind the page.
- **Extinct Black** (`ground-xpl`, `ground-2-xpl`, `pore-xpl`): the XPL grounds. `pore-xpl` is the near-pure black of the extinct epoxy inside the eyepiece.
- **Ash Ink** (`ink-xpl`, `ink-2-xpl`, `rule-xpl`, `tick-xpl`): the XPL ink, secondary ink, rule and grid tick.

### Mineral Palettes (canvas)
The canvas is painted from palettes in `main.js`. They are material and never used as UI color.
- **Ground:** the `--pore` fill (epoxy in PPL, extinct pore in XPL), with a faint grain texture: `#ffffff` grains at .12 alpha in PPL, and XPL grains picked from `#ecece8`, `#c3c3bf`, `#94948f`, `#e6d27c`, `#e38a3a`, `#c23a86`, `#4a73e0`, `#2bb3a2`, `#b9d64c` at .14 alpha.
- **Nodes:** grain white `#f5f6f2` in PPL. In XPL each node takes a mineral color in order: `#ecece8`, `#e6d27c`, `#2bb3a2`, `#c3c3bf`, `#e38a3a`, `#b9d64c`, `#e6d27c`, `#ecece8`. Node titles are `#14161b`, and sublabels are `#454b55` in PPL and `rgba(11,12,15,.75)` in XPL. Nodes carry a neutral `rgba(0,0,0,.28)` drop.
- **Edges and reticle:** edges are `rgba(255,255,255,.7)` in PPL and `rgba(236,238,233,.5)` in XPL. The in-canvas reticle is `rgba(255,255,255,.4)` in PPL and `rgba(236,238,233,.28)` in XPL.
- **Packets:** `--oil` dots with a `rgba(0,0,0,.35)` outline. On the retry loop a packet turns `#ff7aa2` in PPL and `#c23a86` in XPL. The retry pinks are the `--retry` token, used on the canvas and as the matching legend dot, and never for text or surfaces.

### Named Rules
**The Cool Ground Rule.** The light ground is cool: in every PPL neutral the blue channel is equal to or greater than the red (`#eef0f2`, `#e3e7ea`, `#c3c9cf`). A warm cream ground is a different world.

**The Material-Only Rule.** Chromatic color belongs to the specimen (pores, grains, packets, the contact plate) and to the single epoxy action color. Body, captions and headings stay in ink and ink-2.

**The Ink Surname Rule.** The name, surname included, is set entirely in ink. No part of the name takes an accent color.

## Typography

**Display Font:** Archivo, variable, width 62 to 125 and weight 100 to 900 (with Helvetica Neue, Arial)
**Body Font:** Archivo at width 100
**Label/Mono Font:** Martian Mono, width 87.5, weights 400 and 500 (with ui-monospace, SFMono-Regular, Menlo)

**Character:** One monumental grotesk, widened and weighted for display and relaxed to normal width for reading. The mono is small and quiet, like the engraving on an instrument.

### Hierarchy
- **Display** (850, `clamp(3rem, 7.4vw, 6rem)`, 0.9, width 118): the name only. It is set one word per line and crosses the eyepiece ring, with a ground-colored `-webkit-text-stroke` of 0.1em under `paint-order: stroke fill` to keep it legible over the grains.
- **Headline** (800, `clamp(2.25rem, 5vw, 4rem)`, 1, width 118): section headings. Each sits on a 1px ink top rule with 20px of padding above it. The contact email uses a sibling headline (800, `clamp(1.5rem, 5.2vw, 4.5rem)`, width 112) with a 0.06em underline.
- **Title** (700, 1.3125rem, 1.25, width 110): role titles in the log. Competency terms use 1.1875rem.
- **Role** (600, `clamp(1.125rem, 1.6vw, 1.375rem)`, width 110): the hero role line.
- **Body** (400, 1.0625rem, 1.6): running text. The profile lead is `clamp(1.125rem, 1.5vw, 1.3125rem)`/1.55 at 62ch. The lede is 46ch, and the log lists are 68ch.
- **Small** (400, 0.8125rem to 0.9375rem): fact labels, captions, organizations, the footer.
- **Label mono** (400 or 500, 0.6875rem): nav address numerals and the live pipeline counts. Dates in the log use the data mono (400, 0.8125rem/1.9, tabular numerals).

### Named Rules
**The Instrument Voice Rule.** Mono is only for measurements, dates and figure labels, plus the instrument's own readouts: the nav address numerals, the PPL/XPL polarizer state, and the live pipeline counts. It is never used for headings, body text or prose.

**The Clean Heading Rule.** Headings carry no section-number labels, kickers or eyebrows. The section addresses (01 to 05) live only in the nav numerals.

## Layout

Content sits in a centered wrap with a maximum width of 1440px and inline padding of `gutter`. Grids use 12 columns with a `gap` column gap. The hero puts the text in columns 1 to 7 and the eyepiece in columns 6 to 12. They overlap on purpose, so the name crosses the field. The hero fills `calc(100svh - 56px)`. The reticle hairlines run out from the eyepiece center across the full hero width and height, and are clipped by the hero.

Sections open with `section` block padding. The contact plate is full-bleed, with a larger top margin (`clamp(96px, 12vw, 176px)`). The log rows use columns 1 to 2 for years, 3 to 6 for the head, and 7 to 12 for the list. Profile uses 1 to 7 for text and 9 to 12 for facts. Certifications are log rows without years, with the head spanning columns 3 to 13. Competencies use 2 columns.

A fixed point-count grid (a 1px cross every 120px, masked to a 5px radius at each intersection) sits behind everything at `z-index: -1`.

Breakpoints: at 960px the nav addresses hide and the multi-column rows collapse to full width, with facts in 2 columns. At 860px the hero stacks and the eyepiece centers at `min(100%, 460px)`, with the vertical hairline hidden. At 640px every grid goes to 1 column. At 560px the role line breaks and the primary pill takes its own row. Scroll padding is 72px for the sticky 56px bar.

## Elevation & Depth

The page is flat and structured by hairlines. Depth appears in two places only: under the eyepiece, which sits on a mount, and under the primary pill. The sticky bar uses translucency (`color-mix` at 88% of ground with `saturate(1.2) blur(10px)`) instead of a shadow.

### Shadow Vocabulary
- **Eyepiece mount** (`box-shadow: 0 0 0 1px var(--rule), 0 0 0 10px var(--ground), 0 0 0 11px var(--rule), 0 30px 60px -30px rgba(0, 0, 0, .4)`): a double hairline ring separated by a band of ground, over a soft neutral drop.
- **Pill rest** (`box-shadow: 0 6px 16px -8px rgba(0, 0, 0, .35)`): the primary action.
- **Pill hover** (`box-shadow: 0 10px 22px -10px rgba(0, 0, 0, .45)`): paired with a `translateY(-1px)` lift.

### Named Rules
**The Neutral Shadow Rule.** Shadows are neutral black at low alpha, never tinted, and never a colored glow.

## Shapes

The page is rectilinear, with three exceptions that come from the instrument and the material. The eyepiece is a circle (50%). Pills (999px) are used for the primary action and the polarizer toggle. List bullets are 7px grains with an irregular radius (`45% 55% 50% 40%`) in epoxy at 0.85 opacity. Pipeline nodes on the canvas are larger irregular grain blobs. The focus ring is a 2px outline with a 3px offset and a 2px radius.

## Components

### Buttons
Buttons are tactile, and there is only one kind.
- **Shape:** full pill (999px).
- **Primary:** epoxy fill with epoxy-ink text, weight 600, padding 12px 20px, with the pill rest shadow. It is used only for the hero email.
- **Hover / Focus:** lifts 1px, and the shadow deepens, over 0.25s `cubic-bezier(.16, 1, .3, 1)`. Focus uses the global ring.
- **Outbound link (`out`):** ink text at weight 600 with a 1px rule underline border and a 14px inline SVG arrow. On hover the border takes the current color and the arrow moves 2px up and to the right. On the contact plate the border is 40% plate-ink.

### Navigation
- A sticky 56px address bar holds the `MHG` wordmark (800, width 125), five address links, and the polarizer toggle.
- The links are 0.875rem in ink-2, each preceded by a mono numeral. The hover and current (`aria-current`) state is ink, and the current numeral turns epoxy.
- The addresses hide below 960px. The wordmark and toggle remain.

### Polarizer Toggle
A pill with a 1px rule border and a mono 0.75rem label (PPL/XPL). Its 20px SVG polarizer shows the analyzer line fading in (0.3s), and the icon rotates 90 degrees over 0.6s when pressed. Its hover border is ink-2. The choice persists in `localStorage` (`polars`) and sets `data-theme`. `prefers-color-scheme` is the default.

### Eyepiece (signature)
A circular canvas ringed by the eyepiece mount shadow. It draws an illustrative agentic AI pipeline in thin-section material: Documents, Docling, Embeddings, Retrieve (RAG), Claude agent (LangGraph · Bedrock) and LLM-as-a-judge, which passes requests on to Human review and Release, with a "retry" edge looping back to the agent. Nodes are irregular grain blobs labelled in Archivo (650 titles, 400 sublabels). The reticle crosshair and ticks are painted inside the canvas, under the diagram. Amber packets travel the edges on their own layer beneath the node labels, and turn retry pink on the loop back. A node flashes a 700ms ring when a packet arrives. Below the field is a centred caption with no figure label, max 54ch. The caption text is 0.9375rem ink-2 with balanced wrapping, followed by a quieter "Illustrative simulation, not a live system." note. A 1px rule separates the caption from a legend row that doubles as the live trace: an amber dot, a mono count and "released", then a retry-pink dot, a mono count and "sent back by the judge". Last in the row is a Pause/Play pill button (Archivo 600, 1px rule border, drawn pause and play icons, `aria-pressed`). The animation halts when the field is off-screen or the tab is hidden. When the polarizer changes, the previous field fades out over 700ms with a cubic ease-out. Under reduced motion a static mid-run still is drawn and the Pause control is hidden.

### Log Rows
A timeline without cards. Each row has a 1px rule top and 24px 36px of block padding. Mono dates sit on the left, and the current role's dates take the link color. Next come the title and organization, then the grain-bulleted list. The certifications variant drops the dates and list, and its title head spans columns 3 to 13 with 28px of bottom padding.

### Contact Plate
A full-bleed field in `--plate`: epoxy blue in PPL, gypsum magenta in XPL. The section rule and all text switch to plate-ink, and the secondary text is plate-ink-2. The selection inverts, and the focus outline becomes plate-ink. The background crossfades over 0.5s when the theme changes.

## Do's and Don'ts

### Do:
- **Do** keep the PPL ground cool, with blue equal to or greater than red, as in `#eef0f2`.
- **Do** set the whole name, surname included, in ink.
- **Do** open every section with the headline type on a 1px ink top rule, and separate items with 1px rule hairlines.
- **Do** use `cubic-bezier(.16, 1, .3, 1)` for movement and theme transitions (0.25s for hover, 0.5s for theme, 0.6s for rotation).
- **Do** keep chromatic color in the material and the epoxy action color. Keep the mineral palettes on the canvas.
- **Do** honor `prefers-reduced-motion`: no smooth scroll, no packet animation, no fade. Show a static still instead.

### Don't:
- **Don't** put section numbers, kickers or eyebrows in headings. The addresses belong to the nav numerals.
- **Don't** set headings, body text or prose in mono. Mono is for measurements, dates, figure labels and instrument readouts.
- **Don't** tint shadows or add colored glows. Shadows are neutral `rgba(0, 0, 0, …)`.
- **Don't** give the name or surname an accent color.
- **Don't** use a gradient headline, a card grid, or a dark dev-portfolio hero.
- **Don't** add UI geometry beyond the reticle, the point-count grid and the rules. The pipeline diagram lives inside the eyepiece only.
