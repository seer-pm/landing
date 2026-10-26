// Refreshes src/data/snapshot.json, the data the build falls back to when the live APIs fail.
import { readFile, writeFile } from "node:fs/promises";
import { fetchLandingData } from "../src/lib/landing-data.mjs";

const featured = JSON.parse(await readFile(new URL("../src/data/featured.json", import.meta.url), "utf8"));
const data = await fetchLandingData(featured);
const target = new URL("../src/data/snapshot.json", import.meta.url);
await writeFile(target, `${JSON.stringify(data, null, 2)}\n`);
console.log(`snapshot written: ${data.hero.question} (${data.openMarkets} open markets)`);
