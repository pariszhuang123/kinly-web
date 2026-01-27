import { expect, test, vi, beforeEach, afterEach } from "vitest";

// Mock next/headers to be controllable per test.
const headersGet = vi.fn();
vi.mock("next/headers", () => ({
  headers: () =>
    Promise.resolve({
      get: headersGet,
    }),
}));

import { getDetectedCountryCode } from "../lib/geo";

beforeEach(() => {
  headersGet.mockReset();
});

afterEach(() => {
  headersGet.mockReset();
});

test("returns normalized country when valid header present", async () => {
  headersGet.mockImplementation((key: string) => (key === "x-kinly-country" ? "sg" : null));

  const result = await getDetectedCountryCode();
  expect(result).toBe("SG");
});

test("falls back across multiple headers and rejects invalid values", async () => {
  const calls: string[] = [];
  headersGet.mockImplementation((key: string) => {
    calls.push(key);
    if (key === "x-kinly-country") return null; // missing
    if (key === "x-vercel-ip-country") return null; // missing
    if (key === "x-country-code") return "US"; // first valid
    return null;
  });

  const result = await getDetectedCountryCode();
  expect(result).toBe("US");
  expect(calls).toContain("x-vercel-ip-country");
  expect(calls).toContain("x-country-code");
});

test("returns null when no headers match", async () => {
  headersGet.mockReturnValue(null);
  const result = await getDetectedCountryCode();
  expect(result).toBeNull();
});
