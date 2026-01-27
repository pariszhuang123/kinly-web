import { describe, expect, it } from "vitest";
import { GET as getAasa, HEAD as headAasa } from "../app/.well-known/apple-app-site-association/route";
import { GET as getAssetlinks, HEAD as headAssetlinks } from "../app/.well-known/assetlinks.json/route";

const CACHE_CONTROL = "public, max-age=3600, stale-while-revalidate=86400";

describe("well-known endpoints", () => {
  it("serves apple-app-site-association payload with correct scope", async () => {
    const res = getAasa();
    expect(res.status).toBe(200);
    expect(res.headers.get("cache-control")).toBe(CACHE_CONTROL);

    const json = await res.json();
    expect(json).toStrictEqual({
      applinks: {
        details: [
          {
            appID: "M7SBU9RGY5.com.makinglifeeasie.kinly",
            paths: ["/kinly/*"],
          },
        ],
      },
    });
  });

  it("serves assetlinks payload with correct fingerprint", async () => {
    const res = getAssetlinks();
    expect(res.status).toBe(200);
    expect(res.headers.get("cache-control")).toBe(CACHE_CONTROL);

    const json = await res.json();
    expect(json).toStrictEqual([
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.makinglifeeasie.kinly",
          sha256_cert_fingerprints: [
            "14:9A:0A:E7:EE:26:BF:EE:2E:94:26:AE:4B:EA:57:D2:70:94:32:8F:F9:8E:19:42:C5:5C:02:88:36:4B:EA:4D",
          ],
        },
      },
    ]);
  });

  it("HEAD responses advertise json and cache headers", () => {
    const aasaHead = headAasa();
    expect(aasaHead.status).toBe(200);
    expect(aasaHead.headers.get("content-type")).toBe("application/json");
    expect(aasaHead.headers.get("cache-control")).toBe(CACHE_CONTROL);

    const assetlinksHead = headAssetlinks();
    expect(assetlinksHead.status).toBe(200);
    expect(assetlinksHead.headers.get("content-type")).toBe("application/json");
    expect(assetlinksHead.headers.get("cache-control")).toBe(CACHE_CONTROL);
  });
});
