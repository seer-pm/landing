---
name: Seer Landing
description: The seer.pm homepage. Electric Foundation fields, with the brand's curves drawn from live market data.
colors:
  brand-purple: "#7d33ff"
  brand-purple-hover: "#6925df"
  brand-purple-on-ink: "#8f55f7"
  brand-ink: "#141223"
  brand-lavender: "#bfbfe6"
  brand-white: "#ffffff"
  on-ink: "#f2edff"
  on-ink-muted: "#b9b1ca"
  ink-border: "#39314a"
  accent-soft: "#efe9fc"
  accent-text: "#6c2bd9"
  accent-soft-dark: "#241e33"
  accent-text-dark: "#b18aff"
  page: "#f7f7f9"
  surface: "#ffffff"
  surface-raised: "#f1f1f4"
  text: "#17171c"
  muted: "#5c5c66"
  border: "#e2e2e9"
  hill-1: "#6a35cf"
  hill-2: "#50289c"
  hill-3: "#3b1e70"
typography:
  display:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.1rem + 3.7vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline-sm:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 600
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body-lg:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  caption:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  button:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
  figure:
    fontFamily: "'Open Sans Variable', 'Open Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.9rem + 1.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  code:
    fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "10px"
  full: "9999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 10vw, 144px)"
  column-gap: "clamp(40px, 6vw, 96px)"
  row-dense: "12px"
components:
  button-primary:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.brand-white}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.brand-purple-hover}"
  button-primary-large:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.brand-white}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-secondary-on-ink:
    backgroundColor: "{colors.accent-soft-dark}"
    textColor: "{colors.accent-text-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  text-link:
    textColor: "{colors.accent-text}"
  nav-link-on-ink:
    textColor: "{colors.on-ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "40px"
  nav-link-on-ink-hover:
    textColor: "{colors.on-ink}"
  snapshot-option:
    textColor: "{colors.on-ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
  snapshot-option-selected:
    backgroundColor: "{colors.brand-lavender}"
    textColor: "{colors.brand-ink}"
    rounded: "{rounded.full}"
  data-panel:
    backgroundColor: "{colors.page}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 2.5vw, 32px)"
  facts-panel:
    backgroundColor: "{colors.brand-ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 3vw, 32px)"
  apps-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "8px"
    width: "420px"
  code-chip:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  bar-track:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.full}"
    height: "6px"
  bar-fill:
    backgroundColor: "{colors.brand-purple}"
    rounded: "{rounded.full}"
    height: "6px"
---

# Design System: Seer Landing

## Overview

**Creative North Star: "The Live Poster"**

The homepage takes the Electric Foundation posters (ink and purple fields at page scale, lavender display type, stacked curves, converging lines) and draws their motifs from live market data. The first viewport is an ink field where a real question's answers stand as hills, one per answer, stacked across the last 90 days. Between the fields, light sections carry the reading: hairline-ruled rows on a 5/7 split, set in Open Sans at two weights.

Density is calm. Each section makes one point, sections breathe at 72 to 144px of padding, and running text holds to 40 to 60 characters. Every graphic is either market data or a brand motif; the page has no photography, illustration, gradient wash or grid of feature cards. It refuses the category default of a hero claim over feature cards and leads with a live market's belief instead, and each application in the ecosystem is shown through the shape of its own data.

**Who owns what.** Color, radius, font, motion, the button, the brand lockup, the footer icons, the ecosystem footer and the line-motif generator `convergencePaths()` belong to `@seer-pm/ui-kit` (`packages/seer-pm-ui-kit` in the seer-pm monorepo, consumed here as version 0.1.0 through `--seer-*` custom properties and the kit's classes). The frontmatter mirrors those values so tools can read them; if the two disagree, the kit is right and this file is stale. Shared values change in the kit, never in this site. What this site owns: the type scale, the layout tokens, the receding hill colors and the components described below.

**Departures from the Electric Foundation brand kit**, all deliberate:

- Open Sans replaces PP Neue Montreal and Suisse Intl Mono, so the landing and the apps read as one system (user decision).
- The stacked-curve motif is drawn from live market data: one hill per answer, its height the probability the market gives that answer.
- The line motif converges toward the right, as the rebrand brief requires. The kit's generator has no option to mirror it.

**Key Characteristics:**

- Full-bleed color fields (ink, page, white, purple, ink) mark the sections; no borders or gaps between them.
- Lavender is the display voice on ink; Electric Purple is the action and the current market value on light grounds.
- One family, two weights (400 and 600), tracking that tightens as size grows, tabular figures for every number.
- Flat surfaces: depth comes from field contrast and one tonal step for panels.
- Peer items sit in hairline-ruled rows, not cards.
- Charts are real data with plain-language captions and a hidden table; diagrams carry no numbers.

## Colors

A two-pole palette, Foundation Ink and Electric Purple, with Poster Lavender as the voice on ink and a cool light-grey reading ground between them. Every value except the three receding hill colors comes from `@seer-pm/ui-kit`'s `tokens.css`.

### Primary

- **Electric Purple** (`brand-purple`, `--seer-brand-purple`): the primary action fill, the full Protocol field, and the marks that stand for a market on light grounds: ranked bars, the compact hills, the Futarchy fork, the leading odds in the market ledger and the current figure in the read guide. White text on it reads at 5.5:1.
- **Pressed Purple** (`brand-purple-hover`): the primary button's hover fill and nothing else.

### Secondary

- **Poster Lavender** (`brand-lavender`): the voice of ink fields. The hero H1, the closing headline and wordmark, the footer statement, the hills' value figures, fact terms on the ink panel, the "Open this market" link and the selected snapshot option. 10.4:1 on ink.
- **Signal Purple** (`brand-purple-on-ink`): the purple that reads on ink. It draws the current snapshot's hills (`--hill-0`) and that snapshot's swatch.
- **Link Violet** (`accent-text`) and **Lilac Wash** (`accent-soft`): text links, code chips, the secondary button, text selection and the focus ring on light grounds.
- **Bright Violet** (`accent-text-dark`) and **Ink Wash** (`accent-soft-dark`): the same roles inside ink fields, which set `data-theme="dark"` so the kit resolves them. The secondary button on ink and the focus ring on ink use them.

### Tertiary

- **Receding Hills** (`hill-1`, `hill-2`, `hill-3`, local to this site as `--hill-1..3` in `global.css`): older belief snapshots sink toward the ink ground, as the stacked curves do on the posters. Against ink they read at 2.6:1, 1.9:1 and 1.4:1, so they are legible only behind the snapshot control, which redraws the chosen snapshot in lavender at full opacity.

### Neutral

- **Foundation Ink** (`brand-ink`): the header and hero field, the closing field, the footer, the facts panel inside the purple field and the convergence wedges. Also the `theme-color`.
- **Lilac White** (`on-ink`): body text and the question on ink.
- **Dusk Grey** (`on-ink-muted`): secondary text on ink, nav links at rest, chart labels, captions.
- **Ink Hairline** (`ink-border`): rules and the chart baseline on ink.
- **Cool Paper** (`page`): ground of the Read and Builders sections, and the fill of data panels inside the white Ecosystem section.
- **Surface White** (`surface`) and **White** (`brand-white`): the Ecosystem ground and the Apps menu; text on the purple field and on the primary button.
- **Raised Grey** (`surface-raised`): bar tracks and menu row hover.
- **Near Black** (`text`), **Slate** (`muted`) and **Hairline Grey** (`border`): headings, supporting copy (6.2:1 on Cool Paper) and every rule on light grounds.

The page does not follow the OS color scheme. Light sections always use the kit's light values; ink and purple fields are dark by construction.

### Named Rules

**The Fixed Field Rule.** Ink and purple fields keep their color in both themes. An ink field sets `data-theme="dark"` so kit controls inside it take the dark accents, and a light overlay opened from it (the Apps menu) sets `data-theme="light"`.

**The Lavender Voice Rule.** On ink, display type, value figures and the selected state are lavender; reading text is Lilac White or Dusk Grey. Lavender never appears on a light ground.

**The Purple Is the Market Rule.** On light grounds, Electric Purple fills only the primary action and the marks that stand for a market. Past values and supporting text stay Slate.

## Typography

**Display Font:** Open Sans Variable (with Open Sans, ui-sans-serif, system-ui)
**Body Font:** Open Sans Variable, the same family
**Label/Mono Font:** none for interface text. Literal code strings only use the system monospace stack.

**Character:** One humanist sans at every size, so the landing reads as the same system as the apps. Hierarchy comes from size, weight 600 against 400, and tracking that tightens as the type grows; never from a second family or from case.

The family is self-hosted by the kit (`@fontsource-variable/open-sans`, full weight axis). This site owns the scale below as custom properties in `global.css` (`--text-h2`, `--text-h3`, `--text-lead`) plus per-component values.

### Hierarchy

- **Display** (600, `clamp(2.5rem, 1.1rem + 3.7vw, 4.75rem)`, line-height 1.02, -0.035em): the hero H1 only, lavender, held to 16ch.
- **Headline** (600, `clamp(2rem, 1.35rem + 2.4vw, 3.5rem)`, 1.08, -0.03em): every section H2 (`.h2`), held to 11 to 14ch. Lavender on ink, white on purple, Near Black on light.
- **Headline small** (600, `clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)`, 1.1, -0.03em): the application names in the ecosystem rows.
- **Title** (600, `clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)`, -0.01em): read-guide terms, builder entries, the convergence label and the footer statement.
- **Lead** (400, `clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)`, 1.55): the paragraph under a headline, 40 to 56ch, Slate on light and Dusk Grey on ink. Steps down to 1rem in the stacked hero.
- **Body large** (400, 1.0625rem, 1.6): read-guide answers and application summaries, 40 to 60ch.
- **Body** (400, 1rem, 1.6): the document default.
- **Label** (400, 14px): chart notes, question meta, the snapshot legend and options, answer names under the hills, bar names.
- **Caption** (400, 13px): the hero's price stamp, fork labels, proposal DAO and date, the "Who asks" label (at 600).
- **Figure** (600, `clamp(1.25rem, 0.9rem + 1.4vw, 2rem)`, 1.1, -0.02em, tabular): the probability under each hill. The read guide's then-and-now shift is the large case (`clamp(2.5rem, 1.6rem + 3vw, 4rem)`, line-height 1, -0.035em); ledger odds sit at 1.375rem and bar values at 15px, all 600.
- **Button** (600, 14px, 1.2, from the kit): 15px on the large hero and closing buttons.

### Named Rules

**The Two Weights Rule.** 400 for reading, 600 for anything that names or quantifies. No other weight ships.

**The Tabular Figure Rule.** Every probability, price, date, count and address is set with tabular numerals (`.numeric`), so figures align and do not jitter between snapshots.

**The Tightening Rule.** Tracking scales with size: -0.035em at display and the large figure, -0.03em at headlines, -0.02em at figures, -0.01em at titles and the hero question, 0 at body. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

## Layout

The page is a vertical sequence of full-bleed fields: ink (header and hero), Cool Paper (Read), white (Ecosystem), purple (Protocol), Cool Paper (Builders), ink (Closing), ink (footer). Content sits in a centered container 1280px wide plus a gutter of `clamp(16px, 4vw, 40px)` on each side. Sections pad `clamp(72px, 10vw, 144px)` top and bottom; the Protocol and Closing fields pad only the top, because their motif and wordmark run to the bottom edge.

Inside light sections the grid is a two-column split, heading column against content column, with a gap of `clamp(40px, 6vw, 96px)` (24px at the low end in Ecosystem). The hero uses 3fr/2fr: headline, lead and actions on the left, the live question aligned to the bottom of the right column under an ink hairline, and the belief chart spanning both columns below. Protocol uses 6fr/5fr. The read-guide heading stays in view (sticky, 40px from the top) while its rows scroll past.

Rows inside lists pad 24 to 28px for text entries and 12px for dense data rows; ecosystem rows pad `clamp(32px, 4vw, 56px)`. Smaller spacing steps are literal pixel values on a loose 4px rhythm (4, 8, 12, 16, 20, 24, 28, 32).

Breakpoints: at 900px every split grid stacks to one column and the read-guide heading stops being sticky; at 720px the convergence label hides; at 640px the header compacts to 68px with Docs and Blog moving into the Apps menu, hill strokes thin to 5px, answer names drop to 12px, snapshot options shorten to "7d", "30d", "90d", and the kit footer stacks; at 520px ranked bars and the proposal list reflow to two lines per item.

### Named Rules

**The 5/7 Rule.** A light section splits into a 5fr heading column and a 7fr content column (Read, the Ecosystem head and every application row, Builders), and stacks at 900px.

**The Full-Bleed Field Rule.** A section is a full-width field of one color. The change of field is the section boundary; no divider, gap or rounded band sits between sections.

## Elevation & Depth

Flat. Depth comes from the contrast between fields and from one tonal step for panels: a Cool Paper panel inside the white Ecosystem section, an ink panel inside the purple field. Stacking in the belief chart is drawn, not shadowed: older snapshots recede by color toward the ink ground.

### Shadow Vocabulary

- **Overlay** (`box-shadow: 0 18px 40px -12px rgb(8 6 20 / 0.55)`): the Apps menu panel, the only element that floats over other content.

### Named Rules

**The Flat Field Rule.** Surfaces are flat at rest and on hover. A shadow marks only an overlay that sits above the page.

## Shapes

Corners follow the kit's three radii: 4px (`sm`) for buttons, nav targets, menu rows, code chips and the skip link; 10px (`md`) for panels and the Apps menu; full pills for the snapshot control, its swatches and the bar tracks. Fields are square and full-bleed.

Lines are 1px hairlines in Hairline Grey on light and Ink Hairline on ink. Data strokes use round caps and `vector-effect: non-scaling-stroke`, so a chart stretched to the container keeps its stroke weight: 9px for the hero hills (5px under 640px), 4px for the Futarchy fork, 2px for compact hills.

Two silhouettes recur and both come from the brand. The hill is a cubic rise and fall inside its own column, inset 6% from each column edge, with control points at 45% of the half-width for the soft shoulders of the poster curves. The convergence wedge is a straight-edged triangle from the left edge to a single focus point on the right.

### Named Rules

**The Square Field Rule.** Radius belongs to things inside a field, never to the field.

**The Soft Shoulder Rule.** Every hill returns to the baseline between columns. Unordered answers never join into one continuous curve, because a line would claim an order the answers do not have.

## Components

### Buttons

Solid, compact and quiet: the kit's `.seer-button`, with no border, shadow or motion beyond a color change.

- **Shape:** gently squared (4px).
- **Primary:** Electric Purple with white text, 600 14px, 40px tall, 16px side padding. The hero and closing actions are the large size: 48px tall, 22px padding, 15px text (44px, 16px and 14px in the stacked hero).
- **Hover / Focus:** hover fills Pressed Purple over 150ms on the kit's ease-out. Focus is the kit's ring: 2px solid accent outline, 3px offset (Bright Violet on ink).
- **Secondary:** Lilac Wash with Link Violet text on light; Ink Wash with Bright Violet text on ink. Hover mixes 14% Electric Purple into the wash. Secondary always pairs with a primary, never stands alone.
- **Text link:** 600 in Link Violet, underlined at 1px with a 4px offset at 40% of the text color, full color on hover; an optional 14px north-east arrow drawn as an inline SVG at 1.6 stroke. On ink the hero link is lavender. Links inside data panels take Near Black with a 30% underline.

### Chips

- **Code chip:** Lilac Wash with Link Violet text in the system monospace at 14px, 4px by 8px padding, 4px radius. Only for a literal install command, endpoint or host in the Builders list.

### Cards / Containers

There are no cards. Containers hold a whole visualization or list, never one item.

- **Data panel:** Cool Paper on the white Ecosystem ground, 10px radius, `clamp(20px, 2.5vw, 32px)` padding, no border or shadow. Holds each application's visual with a 14px Slate note above and an optional 14px foot.
- **Facts panel:** Foundation Ink inside the purple field, 10px radius, `clamp(20px, 3vw, 32px)` padding. Terms in lavender 600, details in Dusk Grey, rows split by Ink Hairline.
- **Apps menu:** a light-theme overlay from the ink header. White, 10px radius, 8px padding, up to 420px wide, the overlay shadow, entering over 180ms with a 4px drop and fade. Rows pad 10px by 12px at 4px radius and hover to Raised Grey; each row is the app name at 600 over its summary in 14px Slate.

### Navigation

- **Header:** an ink band, 80px tall (68px under 640px), not sticky. The kit lockup (bird and wordmark masks in Lilac White) at left; Apps, Docs and Blog at 15px in Dusk Grey, each a 40px target with 12px padding, brightening to Lilac White on hover and while the menu is open; the primary "Open app" button pinned right.
- **Apps menu:** a native `<details>` disclosure, so it works without JavaScript. Script only adds outside-click and Escape dismissal. Its 12px chevron rotates 180 degrees when open. Under 640px it becomes a fixed panel spanning the gutters and absorbs Docs and Blog.
- **Footer:** the kit's ecosystem footer markup, ink in both themes, rendered without React. This site drops the lockup (the closing wordmark sits directly above), promotes the tagline to a lavender statement at title size held to 18ch, aligns the inner width to the page container, draws the divider across the content width only, and appends a Contact group. Group titles are 12px 600 Dusk Grey, links 14px with 5px block padding, socials and Kleros badge in 40px targets.
- **Skip link:** hidden above the viewport, drops to 12px from the top on focus as a white 4px-radius tab.

### Belief Hills (signature)

The page's own chart and the brand's stacked-curve motif in one. Each answer owns one column and one hill whose height is its probability (`hillPaths()` in `src/lib/hills.mjs`). The hero variant stacks up to four snapshots, newest on top (now, 7, 30 and 90 days ago), stroked Signal Purple then the three Receding Hills, over a 1px baseline (Ink Hairline on ink, Hairline Grey inside a light panel via `--hills-base`). Under each column: the answer name in 14px Dusk Grey and its probability as a lavender figure.

The compact variant draws only the newest snapshot as a 2px Electric Purple line, without labels; with `scale="leader"` the tallest hill fills the frame so a long tail of small answers still shows its shape (the Deep row, 78 answers).

Every instance carries a visually hidden caption in plain language and a hidden table of every value. On load, the hero's snapshots sweep in from the left over 1100ms, oldest first in 120ms steps, so the current view lands last. This is the page's one authored motion moment, and it runs only without a reduced-motion preference.

### Snapshot Control (signature)

A radio group in a pill track (`rgb(255 255 255 / 0.06)` on ink, 4px padding) labelled "The market's view". Options are 14px Dusk Grey pills at 8px by 12px, each led by a 14 by 4px swatch in that snapshot's hill color, so the control is also the chart's legend. The checked option fills lavender with ink text at 600; focus shows a 2px lavender outline. Choosing an older snapshot is pure CSS through `:has()`: every other snapshot drops to 30% opacity, the chosen one redraws in lavender at full opacity, and the figures under the hills switch to its values.

### Convergence Band (signature)

The brand's line motif from the kit's `convergencePaths()`: seven ink wedges leave the left edge and meet at a single focus point toward the right of a 1440 by 360 frame, filling a full-bleed band (`clamp(170px, 24vw, 340px)` tall) at the foot of the purple field. The label "One price per answer" sits just right of the focus in white at title size, and nothing covers the point itself. The label hides under 720px.

### Ruled Rows

Peer items (read-guide answers, builder entries, ecosystem rows, the market ledger, the proposal list, the facts) stack as rows divided by 1px hairlines. The read-guide and builder lists also close with a bottom hairline; lists inside a panel drop the first row's top rule.

### Ranked Bars

A label column, a 6px pill track in Raised Grey with an Electric Purple fill scaled to the largest value (never below 6px), and the exact value at 15px 600 right-aligned. Rows are at least 36px tall. Under 520px the bar drops under its name and value.

### Closing Wordmark

The closing ink field ends on the kit wordmark at the full container width in lavender, pulled 3% below the section's edge so the field crops it, as the posters do.

### Named Rules

**The Ruled Row Rule.** Peers are separated by hairlines, not boxed. A panel wraps a whole visualization or list, never a single item.

**The Own Shape Rule.** Each application is shown through the shape of its own data: a ledger of live markets for the Seer app, a long-tail hill line for Deep, the pass/fail fork and real proposals for Futarchy, ranked bars for Opportunity Markets and Risk Pricing. A new application gets a new shape, not a shared card.

**The Control Is the Key Rule.** A chart with selectable series keys them through its own control. The swatch in each option is the series' stroke color, and no separate legend is drawn.

## Do's and Don'ts

### Do:

- **Do** take every shared color, radius, font and motion value from `@seer-pm/ui-kit` (`var(--seer-*)`), and change shared values in the kit's package in the seer-pm monorepo, not in this site.
- **Do** draw the stacked-curve motif from data: one hill per answer, height equal to probability, back to the baseline between columns.
- **Do** draw the line motif with `convergencePaths()`, converging toward the right.
- **Do** set `data-theme="dark"` on every ink field and `data-theme="light"` on a light overlay opened from one.
- **Do** set every number with tabular figures at weight 600.
- **Do** give every chart a plain-language caption and a visually hidden table of its values.
- **Do** keep standalone controls at least 40px tall (buttons, header nav links, footer icons).
- **Do** move state changes over 150ms on the kit's ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), keep one authored motion moment per page, and honor reduced motion.

### Don't:

- **Don't** use PP Neue Montreal, Suisse Intl Mono or a second display family. Open Sans is the only typeface; the system monospace is for literal code strings only.
- **Don't** join hills into one continuous curve across answers, or mirror the convergence motif so it opens to the right.
- **Don't** put lavender on a light ground, or Electric Purple on reading text.
- **Don't** use the receding hill colors for a mark that must be read on its own; at 1.9:1 and 1.4:1 against ink they work only behind the snapshot control.
- **Don't** put numbers on a mechanism diagram. The Futarchy fork carries labels only, and every figure on the page comes from build-time market data.
- **Don't** box list items as cards or add shadows to surfaces at rest.
- **Don't** add literal radii or round a full-bleed field; use 4px, 10px or a full pill.
- **Don't** put a small label above a section heading; sections open on the heading itself.
