import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://seer.pm",
  build: {
    // One small stylesheet: inlining it saves a request on the first paint.
    inlineStylesheets: "always",
  },
});
