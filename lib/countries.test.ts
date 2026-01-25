import { describe, it, expect } from "vitest";
import { getCountries, type Country } from "./countries";

describe("getCountries", () => {
  it("returns an array of countries", () => {
    const countries = getCountries();
    expect(Array.isArray(countries)).toBe(true);
    expect(countries.length).toBeGreaterThan(0);
  });

  it("each country has code and name properties", () => {
    const countries = getCountries();
    countries.forEach((country: Country) => {
      expect(country).toHaveProperty("code");
      expect(country).toHaveProperty("name");
      expect(typeof country.code).toBe("string");
      expect(typeof country.name).toBe("string");
    });
  });

  it("country codes are 2-letter ISO codes", () => {
    const countries = getCountries();
    countries.forEach((country: Country) => {
      expect(country.code).toMatch(/^[A-Z]{2}$/);
    });
  });

  it("returns countries sorted alphabetically by name", () => {
    const countries = getCountries();
    const names = countries.map((c) => c.name);
    const sortedNames = [...names].sort((a, b) =>
      a.localeCompare(b, "en", { sensitivity: "base" })
    );
    expect(names).toEqual(sortedNames);
  });

  it("includes common countries", () => {
    const countries = getCountries();
    const codes = countries.map((c) => c.code);
    expect(codes).toContain("US");
    expect(codes).toContain("GB");
    expect(codes).toContain("DE");
    expect(codes).toContain("FR");
    expect(codes).toContain("JP");
  });

  it("respects locale parameter for display names", () => {
    const englishCountries = getCountries("en");
    const germany = englishCountries.find((c) => c.code === "DE");
    expect(germany?.name).toBe("Germany");
  });

  it("respects locale parameter for sorting", () => {
    const countries = getCountries("de");
    const names = countries.map((c) => c.name);
    const sortedNames = [...names].sort((a, b) =>
      a.localeCompare(b, "de", { sensitivity: "base" })
    );
    expect(names).toEqual(sortedNames);
  });
});
