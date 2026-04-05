import { buildWithYouVersionConfig } from "../../../../lib/withyou";

export async function GET() {
  return Response.json(buildWithYouVersionConfig(), {
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  });
}
