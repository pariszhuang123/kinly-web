import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  use: {
    // CI will inject this
    // Local dev fallback works automatically
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000",
    trace: "retain-on-failure",
  },

  reporter: [["list"], ["html", { open: "never" }]],
});
