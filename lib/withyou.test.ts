import { describe, expect, test } from "vitest";
import {
  buildWithYouAudioManifest,
  getWithYouPreviewAssetPath,
  getWithYouPreviewClips,
  getWithYouScenarioConfig,
  withYouRouteSlugs,
} from "./withyou";

describe("withYou scenario registry", () => {
  test("maps every public route slug to a config", () => {
    for (const slug of withYouRouteSlugs) {
      expect(getWithYouScenarioConfig(slug)).not.toBeNull();
    }
  });

  test("uses canonical clip ids per family", () => {
    expect(getWithYouPreviewClips("presence")).toEqual(["primary"]);
    expect(getWithYouPreviewClips("social_pull")).toEqual(["stage_1", "stage_2", "stage_3"]);
    expect(getWithYouPreviewClips("exit_pressure")).toEqual(["stage_1", "stage_2", "stage_3"]);
  });

  test("resolves preview assets by canonical family, not route slug", () => {
    expect(getWithYouPreviewAssetPath("en", "presence", "primary")).toBe(
      "/withyou/assets/audio-preview/en/presence/primary.m4a",
    );
    expect(getWithYouPreviewAssetPath("zh", "social_pull", "stage_2")).toBe(
      "/withyou/assets/audio-preview/zh/social_pull/stage_2.m4a",
    );
  });
});

describe("withYou manifest", () => {
  test("includes preview and downloadable languages", () => {
    const manifest = buildWithYouAudioManifest();

    expect(manifest.preview_languages).toEqual(["en", "zh"]);
    expect(manifest.packs.map((pack) => pack.language)).toEqual(["en", "zh", "ko"]);
  });

  test("declares all canonical families for each pack", () => {
    const manifest = buildWithYouAudioManifest();

    for (const pack of manifest.packs) {
      expect(Object.keys(pack.scenarios)).toEqual(["presence", "social_pull", "exit_pressure"]);
    }
  });
});
