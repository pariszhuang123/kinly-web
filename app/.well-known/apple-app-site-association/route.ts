import { NextResponse } from "next/server";

const CACHE_CONTROL = "public, max-age=3600, stale-while-revalidate=86400";

const AASA_PAYLOAD = {
  applinks: {
    details: [
      {
        appID: "M7SBU9RGY5.com.makinglifeeasie.kinly",
        paths: ["/kinly/*"],
      },
    ],
  },
} as const;

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(AASA_PAYLOAD, {
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
