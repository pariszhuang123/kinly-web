import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "go.makinglifeeasie.com";
const COUNTRY_REGEX = /^[A-Z]{2}$/;

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  // Enforce canonical host only in production.
  if (!isLocal && !isPreview && host && host !== CANONICAL_HOST) {
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  const reqGeo = (request as unknown as { geo?: { country?: string } }).geo;
  const country =
    reqGeo?.country ||
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-country-code") ||
    request.headers.get("cf-ipcountry");

  const requestHeaders = new Headers(request.headers);
  if (country && COUNTRY_REGEX.test(country)) {
    requestHeaders.set("x-kinly-country", country.toUpperCase());
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};
