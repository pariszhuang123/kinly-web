import { NextResponse } from "next/server";

const CACHE_CONTROL = "public, max-age=3600, stale-while-revalidate=86400";

const ASSETLINKS_PAYLOAD = [
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
] as const;

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(ASSETLINKS_PAYLOAD, {
    headers: { "Cache-Control": CACHE_CONTROL },
  });
}

export function HEAD() {
  return new NextResponse(null, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
