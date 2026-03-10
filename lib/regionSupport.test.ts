import { describe, expect, it } from "vitest";
import {
  formatSupportedRegions,
  getGeneralAvailabilityBody,
  getScenarioAvailabilityBody,
  getSupportedRegionCodes,
  isSupportedRegion,
} from "./regionSupport";

describe("regionSupport", () => {
  it("exposes supported region codes as uppercase ISO values", () => {
    expect(getSupportedRegionCodes()).toEqual(["SG", "MY"]);
  });

  it("checks support case-insensitively", () => {
    expect(isSupportedRegion("NZ")).toBe(false);
    expect(isSupportedRegion("sg")).toBe(true);
    expect(isSupportedRegion("MY")).toBe(true);
    expect(isSupportedRegion("US")).toBe(false);
    expect(isSupportedRegion(null)).toBe(false);
  });

  it("includes the shared supported-region list in availability copy", () => {
    const listEn = formatSupportedRegions("en");
    const listEs = formatSupportedRegions("es");

    expect(getGeneralAvailabilityBody("en")).toContain(listEn);
    expect(getScenarioAvailabilityBody("en")).toContain(listEn);
    expect(getGeneralAvailabilityBody("es")).toContain(listEs);
    expect(getScenarioAvailabilityBody("es")).toContain(listEs);
  });
});
