# seer.pm

The Seer homepage: an Astro site in `landing/`, built to static HTML and deployed on Netlify
(`netlify.toml` sets `base = "landing"`). Product context lives in `PRODUCT.md`.

## Develop

```bash
cd landing
npm install
LANDING_DATA=snapshot npm run dev   # skip the network and use the committed snapshot
npm run build                       # reads live data, falls back to the snapshot
```

## Data

The page reads live data once, at build time, in `src/lib/landing-data.mjs`:

- `app.seer.pm/.netlify/functions/markets-search`: open markets, the hero question and the
  examples for the Seer app, Deep and Opportunity Markets rows.
- `app.seer.pm/.netlify/functions/market-chart`: price history for the hero's belief snapshots
  (now, 7, 30 and 90 days ago). An outcome token's price in its collateral is its probability.
- `markets-search` with `type: "Futarchy"`: recent GnosisDAO (GIP) and Kleros DAO (KIP) proposals.
- `risk.seer.pm/api/v1/risk-pricing`: yearly default estimates per asset.

If any request fails the build still succeeds with `src/data/snapshot.json`, which carries its own
`generatedAt` date. Refresh it with `npm run snapshot` and commit the result.

The figures are only as fresh as the last build. Rebuild on a schedule (a Netlify build hook called
daily) so the hero and the examples stay current.

## Brand

Tokens, the lockup, the footer markup and the line motif come from `@seer-pm/ui-kit`, which lives in
the `seer-pm` monorepo (`packages/seer-pm-ui-kit`). Change brand values there, not here.

## Before the first production deploy

- `@seer-pm/ui-kit` is not on npm yet. `landing/vendor/seer-pm-ui-kit-0.1.0.tgz` is the packed
  package; once 0.1.0 is published, depend on `"@seer-pm/ui-kit": "0.1.0"` and delete `vendor/`.
- The Netlify site currently publishes `landing/` as static files with no build command. The new
  `netlify.toml` replaces those settings; check the first deploy preview, including
  `/airdrop`, `/markets/100/<id>` and `/#/markets/100/<id>`.
- Add the daily build hook.
