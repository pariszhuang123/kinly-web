import { afterEach, describe, expect, test } from "vitest";

import { getYoutubeThumbnailUrl, normalizeYoutubeValue } from "../lib/pianoLanding";

const fallback = "https://www.youtube-nocookie.com/embed/fallback?rel=0";

afterEach(() => {
  delete process.env.NEXT_PUBLIC_PIANO_VIDEO_CLASSICAL_URL;
  delete process.env.NEXT_PUBLIC_PIANO_VIDEO_CHILDREN_URL;
  delete process.env.NEXT_PUBLIC_PIANO_VIDEO_WEDDING_URL;
});

describe("normalizeYoutubeValue", () => {
  test("returns the fallback when no value is provided", () => {
    expect(normalizeYoutubeValue(undefined, fallback)).toBe(fallback);
  });

  test("converts a normal watch url to an embed url", () => {
    expect(normalizeYoutubeValue("https://www.youtube.com/watch?v=abc123XYZ", fallback)).toBe(
      "https://www.youtube-nocookie.com/embed/abc123XYZ?rel=0",
    );
  });

  test("converts a youtu.be url to an embed url", () => {
    expect(normalizeYoutubeValue("https://youtu.be/abc123XYZ", fallback)).toBe(
      "https://www.youtube-nocookie.com/embed/abc123XYZ?rel=0",
    );
  });

  test("keeps a non-youtube url unchanged", () => {
    expect(normalizeYoutubeValue("https://example.com/video", fallback)).toBe(
      "https://example.com/video",
    );
  });

  test("derives a thumbnail url from an embed url", () => {
    expect(getYoutubeThumbnailUrl("https://www.youtube-nocookie.com/embed/abc123XYZ?rel=0")).toBe(
      "https://i.ytimg.com/vi/abc123XYZ/hqdefault.jpg",
    );
  });
});
