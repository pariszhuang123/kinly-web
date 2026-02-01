// @vitest-environment jsdom
import { expect, test } from "vitest";
import { validateItem, QrItemV1 } from "../app/tools/qr/_types";

test("validateItem returns valid for correct item", () => {
  const item: QrItemV1 = {
    qr_id: "test_id",
    pageKey: "test_page",
    utm_campaign: "test_campaign",
    utm_medium: "qr",
    utm_source: "test_source",
    url: "https://go.makinglifeeasie.com/kinly/market/test_page?utm_campaign=test_campaign&utm_medium=qr&utm_source=test_source",
  };

  const result = validateItem(item);
  expect(result.valid).toBe(true);
  expect(result.errors).toHaveLength(0);
});

test("validateItem returns errors for missing qr_id", () => {
  const item = {
    pageKey: "test",
    utm_campaign: "test",
    utm_medium: "qr",
    utm_source: "test",
    url: "https://go.makinglifeeasie.com/kinly/market/test?utm_campaign=test&utm_medium=qr&utm_source=test",
  } as unknown as QrItemV1;

  const result = validateItem(item);
  expect(result.valid).toBe(false);
  expect(result.errors).toContain("Missing qr_id");
});

test("validateItem returns errors for wrong host", () => {
  const item: QrItemV1 = {
    qr_id: "test",
    pageKey: "test",
    utm_campaign: "test",
    utm_medium: "qr",
    utm_source: "test",
    url: "https://wrong.com/kinly/market/test?utm_campaign=test&utm_medium=qr&utm_source=test",
  };

  const result = validateItem(item);
  expect(result.valid).toBe(false);
  expect(result.errors[0]).toContain("URL must start with https://go.makinglifeeasie.com/kinly/market/");
});

test("validateItem returns errors for missing utm params", () => {
  const item: QrItemV1 = {
    qr_id: "test",
    pageKey: "test",
    utm_campaign: "test",
    utm_medium: "qr",
    utm_source: "test",
    url: "https://go.makinglifeeasie.com/kinly/market/test",
  };

  const result = validateItem(item);
  expect(result.valid).toBe(false);
  expect(result.errors).toContain("URL missing utm_medium=qr");
  expect(result.errors).toContain("URL missing utm_campaign");
  expect(result.errors).toContain("URL missing utm_source");
});

test("validateItem returns errors for non-https", () => {
  const item: QrItemV1 = {
    qr_id: "test",
    pageKey: "test",
    utm_campaign: "test",
    utm_medium: "qr",
    utm_source: "test",
    url: "http://go.makinglifeeasie.com/kinly/market/test?utm_campaign=test&utm_medium=qr&utm_source=test",
  };

  const result = validateItem(item);
  expect(result.valid).toBe(false);
  expect(result.errors).toContain("URL must be https");
});
