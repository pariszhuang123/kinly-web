import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["lib/**/*.test.ts", "tests/**/*.test.{ts,tsx}"],
    exclude: [
      "tests/**/*.spec.{ts,tsx}", // Playwright / e2e live in spec files
      "tests/**/*integration*.{ts,tsx}",
    ],
    coverage: {
      provider: "v8",
      include: ["lib/**/*.ts"],
      exclude: [
        "lib/**/*.test.ts",
        "tests/**/*.test.{ts,tsx}", // don't count test files toward coverage %
        "tests/**/*.spec.{ts,tsx}",
        "tests/**/*integration*.{ts,tsx}",
        "lib/useTheme.ts",
      ],
      reporter: ["text", "json", "json-summary", "html"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
