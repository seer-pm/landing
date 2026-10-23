// Live data for the landing, read once at build time from the public Seer and Risk Pricing APIs.
// Plain JS with JSDoc so `scripts/snapshot.mjs` can run it under Node without a TS loader.

const SEER_API = "https://app.seer.pm/.netlify/functions";
const RISK_API = "https://risk.seer.pm/api/v1/risk-pricing";
const DAY = 86_400;

/** Days before the build for each belief snapshot drawn behind the current one, newest first. */
export const SNAPSHOT_DAYS = [0, 7, 30, 90];

/**
 * @typedef {{ label: string, daysAgo: number, probabilities: (number | null)[] }} Snapshot
 * @typedef {{ name: string, probability: number }} Outcome
 * @typedef {{
 *   question: string, url: string, chainId: number, creator: string, liquidityUSD: number,
 *   outcomes: string[], snapshots: Snapshot[]
 * }} HeroMarket
 * @typedef {{ question: string, url: string, leading: Outcome }} LedgerRow
 * @typedef {{ question: string, url: string, outcomes: Outcome[] }} RankedMarket
 * @typedef {{ dao: string, code: string, title: string, url: string, opensAt: number }} Proposal
 * @typedef {{ updatedAt: number, assets: Outcome[], noDefault: number }} RiskBoard
 * @typedef {{
 *   generatedAt: number, openMarkets: number, hero: HeroMarket, ledger: LedgerRow[],
 *   manyOutcomes: RankedMarket | null, selection: RankedMarket | null, risk: RiskBoard | null,
 *   proposals: Proposal[]
 * }} LandingData
 */

async function getJson(url, init) {
  const response = await fetch(url, { ...init, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response.json();
}

function searchMarkets(body) {
  return getJson(`${SEER_API}/markets-search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // An empty chainsList means every supported chain; ["all"] would match none.
    body: JSON.stringify({ chainsList: [], ...body }),
  });
}

const marketUrl = (market) => `https://app.seer.pm/markets/${market.chainId}/${market.id}`;

/** Outcomes a market can resolve to, without the Invalid outcome every Seer market carries. */
function realOutcomes(market) {
  return market.outcomes
    .map((name, index) => ({ name: name.trim(), probability: market.odds?.[index], index }))
    .filter((outcome) => outcome.name.toLowerCase() !== "invalid");
}

const isPriced = (outcome) => typeof outcome.probability === "number";

/** Odds come as percentages; everything downstream works in [0, 1]. */
const ranked = (market) =>
  realOutcomes(market)
    .filter(isPriced)
    .map(({ name, probability }) => ({ name, probability: probability / 100 }))
    .sort((a, b) => b.probability - a.probability);

const FILLER = new Set(["will", "the", "a", "an", "what", "which", "who", "how", "many", "much", "be", "is", "are", "does", "do", "of", "in", "on", "by", "to", "if"]);

/** The first meaningful word of the question stands in for its subject ("Polymarket's" is "polymarket"). */
const subjectOf = (market) =>
  market.marketName
    .toLowerCase()
    .replace(/['’]s\b/g, "")
    .split(/[^a-z0-9]+/)
    .find((word) => word && !FILLER.has(word)) ?? market.marketName;

/** A yes/no question reads as the chance of yes; any other market reads as its leading answer. */
function headline(market) {
  const outcomes = ranked(market);
  return outcomes.find((outcome) => outcome.name.toLowerCase() === "yes") ?? outcomes[0];
}

/**
 * An outcome token pays one unit of collateral if its outcome happens, so its price in the
 * collateral is the market's probability. The pool reports each token's price in the other.
 */
function priceAt(series, outcomeToken, timestamp) {
  let point = null;
  for (const entry of series) {
    if (Number(entry.periodStartUnix) <= timestamp) point = entry;
  }
  if (!point) return null;
  const outcomeIsToken0 = point.pool.token0.id.toLowerCase() === outcomeToken.toLowerCase();
  return Number(outcomeIsToken0 ? point.token1Price : point.token0Price);
}

async function heroSnapshots(market, now) {
  const chart = await getJson(`${SEER_API}/market-chart?marketId=${market.id}&chainId=${market.chainId}`);
  const outcomes = realOutcomes(market);
  const seriesFor = (token) =>
    chart.find((series) =>
      series.some((entry) =>
        [entry.pool.token0.id, entry.pool.token1.id].some((id) => id.toLowerCase() === token.toLowerCase()),
      ),
    ) ?? [];
  return SNAPSHOT_DAYS.map((daysAgo) => ({
    label: daysAgo === 0 ? "Now" : `${daysAgo} days ago`,
    daysAgo,
    probabilities: outcomes.map((outcome) => {
      if (daysAgo === 0) return outcome.probability / 100;
      const token = market.wrappedTokens[outcome.index];
      return priceAt(seriesFor(token), token, now - daysAgo * DAY);
    }),
  }));
}

/** The most liquid open question with three to eight priced answers carries the first viewport. */
function pickHero(markets) {
  return markets.find((market) => {
    const outcomes = realOutcomes(market);
    return outcomes.length >= 3 && outcomes.length <= 8 && outcomes.every(isPriced) && market.liquidityUSD >= 5000;
  });
}

const PROPOSAL = /\b(GIP|KIP)-(\d+)/;

/** Recent DAO proposals that went through Futarchy, one market per proposal. */
async function proposals() {
  const { markets } = await searchMarkets({
    type: "Futarchy",
    orderBy: "openingTs",
    orderDirection: "desc",
    limit: 80,
  });
  const seen = new Set();
  const list = [];
  for (const market of markets) {
    const match = market.marketName.match(PROPOSAL);
    if (!match || /test/i.test(market.marketName)) continue;
    const code = `${match[1]}-${match[2]}`;
    if (seen.has(code)) continue;
    seen.add(code);
    const title = market.marketName.match(/\(([^)]+)\)/)?.[1] ?? market.marketName;
    list.push({
      dao: match[1] === "GIP" ? "GnosisDAO" : "Kleros DAO",
      code,
      title: title.replace(/^['"“]|['"”]$/g, ""),
      url: marketUrl(market),
      opensAt: Number(market.openingTs),
    });
    if (list.length === 6) break;
  }
  return list;
}

async function riskBoard() {
  const data = await getJson(RISK_API);
  return {
    updatedAt: data.updatedAt,
    assets: data.assets
      .map((asset) => ({ name: asset.name, probability: asset.pdYearly }))
      .sort((a, b) => b.probability - a.probability),
    noDefault: data.noToAll.probability,
  };
}

/** @returns {Promise<LandingData>} */
export async function fetchLandingData() {
  const now = Math.floor(Date.now() / 1000);
  const open = await searchMarkets({
    marketStatusList: ["open"],
    orderBy: "liquidityUSD",
    orderDirection: "desc",
    limit: 80,
  });
  const markets = open.markets.map((market) => ({ ...market, liquidityUSD: Number(market.liquidityUSD) || 0 }));
  const hero = pickHero(markets);
  if (!hero) throw new Error("No open market qualifies for the hero");

  const many = markets
    .filter((market) => ranked(market).length >= 20)
    .sort((a, b) => b.liquidityUSD - a.liquidityUSD)[0];
  const selection = markets.find((market) => /\bselected\b/i.test(market.marketName) && ranked(market).length >= 4);

  // Four live questions on different subjects, so a run of questions about one company does not
  // fill the list. Markets the page already shows elsewhere stay out.
  const shown = new Set([hero.id, many?.id, selection?.id]);
  const subjects = new Set([subjectOf(hero)]);
  const ledger = [];
  for (const market of markets) {
    const leading = headline(market);
    const name = market.marketName.toLowerCase();
    if (!leading || shown.has(market.id) || market.liquidityUSD < 500) continue;
    if ([...subjects].some((subject) => name.includes(subject))) continue;
    subjects.add(subjectOf(market));
    ledger.push({ question: market.marketName.trim(), url: marketUrl(market), leading });
    if (ledger.length === 4) break;
  }

  const [snapshots, futarchy, risk] = await Promise.all([
    heroSnapshots(hero, now),
    proposals().catch(() => []),
    riskBoard().catch(() => null),
  ]);

  return {
    generatedAt: now,
    openMarkets: open.count,
    hero: {
      question: hero.marketName.trim(),
      url: marketUrl(hero),
      chainId: hero.chainId,
      creator: hero.creator,
      liquidityUSD: hero.liquidityUSD,
      outcomes: realOutcomes(hero).map((outcome) => outcome.name),
      snapshots,
    },
    ledger,
    manyOutcomes: many ? { question: many.marketName.trim(), url: marketUrl(many), outcomes: ranked(many) } : null,
    selection: selection
      ? { question: selection.marketName.trim(), url: marketUrl(selection), outcomes: ranked(selection) }
      : null,
    risk,
    proposals: futarchy,
  };
}
