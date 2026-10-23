/** A probability in [0, 1] as the app writes it: whole percent above 10%, one decimal below. */
export function percent(probability) {
  const value = probability * 100;
  if (value > 0 && value < 0.1) return "<0.1%";
  return `${value >= 10 ? Math.round(value) : value.toFixed(1)}%`;
}

/** The price of an outcome token in its collateral, which is the same number as its probability. */
export const price = (probability) => probability.toFixed(2);

export const shortAddress = (address) => `${address.slice(0, 6)}…${address.slice(-4)}`;

const CHAINS = { 1: "Ethereum", 10: "Optimism", 100: "Gnosis", 8453: "Base" };
export const chainName = (chainId) => CHAINS[chainId] ?? `chain ${chainId}`;

export const usd = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(
    value,
  );

export const count = (value) => new Intl.NumberFormat("en-US").format(value);

export const day = (unixSeconds) =>
  new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    unixSeconds * 1000,
  );

export const month = (unixSeconds) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(unixSeconds * 1000);
