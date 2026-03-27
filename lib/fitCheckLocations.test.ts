import { describe, expect, test } from "vitest";
import {
  getFitCheckCityOptions,
  getFitCheckCountryOptions,
  getFitCheckLocationLabel,
  isValidFitCheckCity,
} from "./fitCheckLocations";

describe("fitCheckLocations", () => {
  test("returns supported countries only", () => {
    const countries = getFitCheckCountryOptions("en");
    expect(countries.some((country) => country.code === "NZ")).toBe(true);
    expect(countries.some((country) => country.code === "FR")).toBe(false);
  });

  test("filters city options by country and query", () => {
    expect(getFitCheckCityOptions("NZ")).toContain("Auckland");
    expect(getFitCheckCityOptions("NZ", "well")).toEqual(["Wellington"]);
    expect(getFitCheckCityOptions("FR")).toEqual([]);
  });

  test("validates and formats location labels across fallback cases", () => {
    expect(isValidFitCheckCity("NZ", "Auckland")).toBe(true);
    expect(isValidFitCheckCity("NZ", "")).toBe(false);
    expect(getFitCheckLocationLabel(null, null)).toBe("");
    expect(getFitCheckLocationLabel("NZ", null)).toMatch(/New Zealand|NZ/);
    expect(getFitCheckLocationLabel(null, "Auckland")).toBe("Auckland");
  });
});
