# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output, in this repository (`seer-landing`), deployed on Netlify (decided 2026-10-22).
Shared Electric Foundation tokens, brand assets and cross-site UI come from `@seer-pm/ui-kit`,
published to npm from the `seer-pm` monorepo, the same way Deep, Futarchy, Opportunity Markets
and Risk Pricing consume it. The deploy must keep the two legacy entry points working: hash and
path links of the form `/markets/<chainId>/<marketId>` redirect to `app.seer.pm`, and `/airdrop`
redirects to `app.seer.pm/airdrop`.

## Users

Two audiences, served equally:

- **Information seekers**, the people asking the question: a DAO weighing a proposal, a funding
  team triaging a large field of grant proposals, reviewers choosing among submissions, someone
  assessing DeFi protocol risk, builders of AI agents. They want to know what a market says and how
  to use that signal without first becoming traders.
- **Traders**, human and AI agents, who supply the information by taking positions.

The homepage is the first stop for both, and routes each visitor to the application that fits
their question.

## Product Purpose

Seer is information finance infrastructure: start from something people need to know, then design
a market that draws that information out. The homepage introduces Seer as the protocol beneath its
applications and shows how they fit together in one ecosystem.

Success: a visitor can tell who is asking the question, what the market is actually pricing, and how
to use the signal, and can understand why a market exists and what they can learn from it without
trading.

## Positioning

Seer frames itself as information finance, not as a prediction market venue. It is one protocol
with several purpose-built applications on top, not a single trading front end, and it is explicitly
not a Polymarket or Kalshi reskin. The direction it builds toward is the agentic economy, with AI
agents as traders and as consumers of market signals.

## Operating Context

The ecosystem the homepage must explain (source: `DESIGN_CONTEST.md` in the monorepo):

- **Seer app** (`app.seer.pm`): the general explorer for all Seer markets, to find and trade across
  market types; Seer's equivalent of Etherscan.
- **Deep** (`deep.seer.pm`): questions with many possible outcomes, including markets designed for
  AI agents, e.g. forecasting how human evaluators would assess a large field of grant proposals.
- **Futarchy** (`futarchy.seer.pm`, the canonical URL): conditional markets forecasting a chosen
  success measure if a proposal passes versus if it does not, as input to a DAO's decision rather
  than the decision. Each market yields the token's price conditional on pass and on fail, not a
  full distribution.
- **Opportunity Markets** (`opportunity.seer.pm`): forecasts of which submissions are likely to be
  selected, a signal for reviewers who keep the final say.
- **Risk Pricing** (`risk.seer.pm`, source in `~/sites/risk-pricing-ui`): market estimates of
  default risk across protocols, compared side by side instead of read as a single yes or no price.

Protocol facts: markets are categorical, multi-categorical, scalar and multi-scalar, plus
conditional markets. Outcomes are Conditional Tokens (ERC1155) wrapped as ERC20. Questions resolve
through Reality.eth with Kleros as arbitrator. Markets exist on Gnosis, Ethereum, Optimism and Base.
Docs: `seer-3.gitbook.io/seer-documentation`. Blog: `seer-pm.medium.com`.

## Capabilities and Constraints

- Real market data is reachable from the Seer app API (`markets-search`, `get-market`,
  `market-chart` Netlify functions on `app.seer.pm`), and through `@seer-pm/sdk`. `markets-search`
  takes `chainsList: []` for every chain; `["all"]` matches none.
- Risk Pricing publishes `GET https://risk.seer.pm/api/v1/risk-pricing` (per-asset quarterly and
  yearly probability of default, plus the chance that no listed asset defaults), `/markets` and
  `/history`, open to any origin.
- No analytics or tracking on the landing (decided 2026-10-22).

## Brand Commitments

- Electric Foundation is the identity (Figma: Seer Branding, node 118-16652). Core colours:
  purple `#7D33FF`, ink `#141223`, white. The app's implementation of the kit lives in
  `web/src/styles/brand.css` and `radii.css` in the monorepo.
- Official symbol and wordmark: `web/public/assets/brand/` in the monorepo.
- Line motif: tapered lines converge toward the right, as the contest brief requires (the
  reverse of the first-round kit). The stacked-curve motif is also part of the kit.
- Typeface: Open Sans across the whole ecosystem, a deliberate departure from the kit's PP Neue
  Montreal and Suisse Intl Mono (decided 2026-10-22), so the landing and the apps read as one.
- Voice: "Seer, decision infrastructure"; calm authority; information finance over prediction
  market vocabulary.

## Evidence on Hand

- Real example markets per type, linked from the current landing (`landing/index.html`).
- Real past questions with their market estimates (`landing/index.js`); they date from 2025 and are
  stale as live examples.
- "Secured by Kleros" asset, social links (GitHub, X, Telegram, Discord, Medium), `info@seer.pm`,
  and a public branding folder on Google Drive.
- Askers Seer can name publicly: **GnosisDAO** and **Kleros DAO**, through their Futarchy markets
  on Gnosis (GnosisDAO GIPs such as GIP-153 and GIP-151, Kleros KIPs such as KIP-88 and KIP-90).
- Absent and not to be fabricated: usage or volume figures, TVL, any other customer or partner
  names, case studies, testimonials, and agent adoption numbers.

## Product Principles

1. The asker comes first, without shortchanging the trader: every market shown names who wants to
   know and what they will do with the answer.
2. Show the signal, then the trade: lead with what the market currently says and what it prices.
3. One protocol, many applications: the homepage is a map, and each application is a route out of
   it.
4. Prove it with live markets, never with invented numbers.

## Accessibility & Inclusion

The October 2026 audit of seer.pm found no heading structure, an unnamed dismiss button, and 8px
text on mobile from viewport-scaled type. The new site must fix all three. No formal conformance
level has been set.
