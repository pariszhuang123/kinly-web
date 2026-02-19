import { expect, test } from "vitest";
import { resolveFallbackContent, resolveFallbackLocale } from "../app/fallback/copy";

test("resolveFallbackLocale returns es for Spanish accept-language", () => {
  expect(resolveFallbackLocale("es-ES,es;q=0.9")).toBe("es");
});

test("resolveFallbackLocale returns ar for Arabic accept-language", () => {
  expect(resolveFallbackLocale("ar-SA,ar;q=0.9")).toBe("ar");
});

test("resolveFallbackLocale defaults to en for unsupported language", () => {
  expect(resolveFallbackLocale("fr-FR,fr;q=0.9")).toBe("en");
});

test("resolveFallbackContent defaults to en and ltr when language is missing", () => {
  const resolved = resolveFallbackContent(null);
  expect(resolved.isRtl).toBe(false);
  expect(resolved.copy.goKinly).toBe("Go to Kinly");
});

test("resolveFallbackContent returns rtl copy for Arabic", () => {
  const resolved = resolveFallbackContent("ar-EG,ar;q=0.9");
  expect(resolved.isRtl).toBe(true);
  expect(resolved.copy.goKinly).not.toBe("Go to Kinly");
});
