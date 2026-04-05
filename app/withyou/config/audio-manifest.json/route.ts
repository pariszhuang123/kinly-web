import { buildWithYouAudioManifest } from "../../../../lib/withyou";

export async function GET() {
  return Response.json(buildWithYouAudioManifest(), {
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  });
}
