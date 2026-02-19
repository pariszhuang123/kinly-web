import { beforeEach, describe, expect, it, vi } from "vitest";
import { resolvePublicNorms } from "../lib/houseNormsPublic";

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

describe("resolvePublicNorms", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key";
  });

  it("resolves from storage when manifest and snapshot are valid", async () => {
    fetchMock
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000001",
          latest_snapshot_path: "public_norms/home/abc12345/published_v000001.json",
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000001",
          template_key: "house_norms_v1",
          locale_base: "en",
          published_content: {
            summary: {
              title: "House norms",
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");

    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("storage");
      expect(result.data.publishedVersion).toBe("v000001");
      expect(result.data.homePublicId).toBe("abc12345");
    }
  });

  it("falls back to RPC when manifest is missing", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse({ message: "not found" }, 404))
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000002",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");

    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
      expect(result.data.publishedVersion).toBe("v000002");
    }
  });

  it("falls back to RPC when snapshot is malformed", async () => {
    fetchMock
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000003",
          latest_snapshot_path: "public_norms/home/abc12345/published_v000003.json",
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000003",
          template_key: "house_norms_v1",
          locale_base: "en",
          published_content: [],
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000003",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");

    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
    }
  });

  it("returns unavailable when storage fails and RPC returns unavailable", async () => {
    fetchMock
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: false,
          home_public_id: "abc12345",
          house_norms_public: null,
        }),
      );

    const result = await resolvePublicNorms("abc12345");

    expect(result).toEqual({ available: false });
  });

  it("returns unavailable when storage fails and RPC request fails", async () => {
    fetchMock
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce(jsonResponse({ message: "error" }, 500));

    const result = await resolvePublicNorms("abc12345");

    expect(result).toEqual({ available: false });
  });

  it("returns unavailable and skips fetch for invalid public id", async () => {
    const result = await resolvePublicNorms("INVALID");

    expect(result).toEqual({ available: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses en fallback locale when locale input and rpc doc locale are invalid", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse({ message: "not found" }, 404))
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "english",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000010",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345", "english");

    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
      expect(result.data.localeBase).toBe("en");
    }
  });

  it("falls back to RPC when manifest snapshot path is invalid", async () => {
    fetchMock
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000011",
          latest_snapshot_path: "public_norms/home/abc12345/manifest.json",
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000011",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");
    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
    }
  });

  it("falls back to RPC when snapshot template key is empty", async () => {
    fetchMock
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000012",
          latest_snapshot_path: "public_norms/home/abc12345/published_v000012.json",
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          home_public_id: "abc12345",
          published_at: "2026-02-17T00:00:00.000Z",
          published_version: "v000012",
          template_key: " ",
          locale_base: "en",
          published_content: {
            summary: {
              title: "House norms",
            },
          },
        }),
      )
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000012",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");
    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
    }
  });

  it("returns unavailable when rpc payload status is not published", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse({ message: "not found" }, 404))
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "out_of_date",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000013",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");
    expect(result).toEqual({ available: false });
  });

  it("returns unavailable when rpc home_public_id mismatches", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse({ message: "not found" }, 404))
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "def67890",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000014",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");
    expect(result).toEqual({ available: false });
  });

  it("returns unavailable when rpc request throws", async () => {
    fetchMock
      .mockResolvedValueOnce(jsonResponse({ message: "not found" }, 404))
      .mockRejectedValueOnce(new Error("rpc down"));

    const result = await resolvePublicNorms("abc12345");
    expect(result).toEqual({ available: false });
  });

  it("falls back to RPC when manifest JSON is invalid", async () => {
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => {
          throw new Error("bad json");
        },
      })
      .mockResolvedValueOnce(
        jsonResponse({
          ok: true,
          available: true,
          home_public_id: "abc12345",
          doc_locale_base: "en",
          house_norms_public: {
            status: "published",
            published_at: "2026-02-17T00:00:00.000Z",
            published_version: "v000015",
            published_content: {
              summary: {
                title: "House norms",
              },
            },
          },
        }),
      );

    const result = await resolvePublicNorms("abc12345");
    expect(result.available).toBe(true);
    if (result.available) {
      expect(result.source).toBe("rpc");
    }
  });

  it("returns unavailable when Supabase env is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const result = await resolvePublicNorms("abc12345");

    expect(result).toEqual({ available: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
