import { describe, expect, it } from "vitest";

import { resolveStoreBadges } from "./storeBadges";

describe("resolveStoreBadges", () => {
  it("falls back to defaults when language is missing", () => {
    expect(resolveStoreBadges(null)).toEqual({
      apple: "/apple-store.svg",
      play: "/google-play.svg",
    });
  });

  it("falls back to defaults for unsupported locale", () => {
    expect(resolveStoreBadges("fr-FR")).toEqual({
      apple: "/apple-store.svg",
      play: "/google-play.svg",
    });
  });

  it("uses localized badges for known language", () => {
    expect(resolveStoreBadges("es-MX")).toEqual({
      apple: "/apple-store-es.svg",
      play: "/google-play-es.svg",
    });
  });
});
