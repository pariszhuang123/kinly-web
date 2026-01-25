import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000",
    trace: "retain-on-failure",
  },

  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run start",
        url: "http://127.0.0.1:3000",
        reuseExistingServer: !process.env.CI,
      },

  reporter: [["list"], ["html", { open: "never" }]],
});
