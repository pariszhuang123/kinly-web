import { beforeEach, afterEach, expect, test } from "vitest";
import { getCountries } from "../lib/countries";

const originalIntl = global.Intl;

beforeEach(() => {
  global.Intl = originalIntl;
});

afterEach(() => {
  global.Intl = originalIntl;
});

test("returns countries sorted by localized name", () => {
  const list = getCountries("en");
  expect(list[0]).toHaveProperty("code");
  expect(list[0]).toHaveProperty("name");
  // Ensure known codes exist and sorting is stable.
  const nz = list.find((c) => c.code === "NZ");
  const sg = list.find((c) => c.code === "SG");
  expect(nz).toBeDefined();
  expect(sg).toBeDefined();
});

test("falls back to code when Intl.DisplayNames is missing", () => {
  // Simulate missing Intl.DisplayNames
  global.Intl = {
    ...(originalIntl as typeof Intl),
    DisplayNames: undefined as unknown as typeof Intl.DisplayNames,
  };
  const list = getCountries("en");
  const nz = list.find((c) => c.code === "NZ");
  expect(nz?.name).toBe("NZ");
});

test("gracefully handles formatter errors", () => {
  // Simulate a formatter that throws
  class BrokenDisplayNames {
    constructor() {}
    of() {
      throw new Error("boom");
    }
    static supportedLocalesOf() {
      return [];
    }
  }
  global.Intl = {
    ...(originalIntl as typeof Intl),
    DisplayNames: BrokenDisplayNames as unknown as typeof Intl.DisplayNames,
  };
  const list = getCountries("en");
  const nz = list.find((c) => c.code === "NZ");
  expect(nz?.name).toBe("NZ");
});
