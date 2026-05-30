export type PianoVideoShowcase = {
  id: "classical-pop" | "children-pop" | "wedding-pop";
  title: string;
  strap: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string | null;
  watchUrl: string | null;
};

const PLACEHOLDER_EMBEDS = {
  classical: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0",
  children: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0",
  wedding: "https://www.youtube-nocookie.com/embed/XxVg_s8xAms?rel=0",
} as const;

type PlaceholderEmbed = (typeof PLACEHOLDER_EMBEDS)[keyof typeof PLACEHOLDER_EMBEDS];

function buildEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
}

function buildThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function buildWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function tryParseUrl(value: string): URL | null {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function extractYoutubeVideoId(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "").toLowerCase();

  if (host === "youtu.be") {
    const videoId = url.pathname.split("/").filter(Boolean)[0] ?? "";
    return videoId || null;
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
    if (url.pathname === "/watch") {
      return url.searchParams.get("v");
    }

    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts[0] === "embed" || pathParts[0] === "shorts" || pathParts[0] === "live") {
      return pathParts[1] ?? null;
    }
  }

  if (host === "youtube-nocookie.com") {
    const pathParts = url.pathname.split("/").filter(Boolean);
    if (pathParts[0] === "embed") {
      return pathParts[1] ?? null;
    }
  }

  return null;
}

export function normalizeYoutubeValue(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  if (!trimmed) return fallback;

  const parsed = tryParseUrl(trimmed);
  if (!parsed) return trimmed;

  const videoId = extractYoutubeVideoId(parsed);
  if (!videoId) return trimmed;

  return buildEmbedUrl(videoId);
}

export function getYoutubeThumbnailUrl(value: string): string | null {
  const parsed = tryParseUrl(value);
  if (!parsed) return null;

  const videoId = extractYoutubeVideoId(parsed);
  if (!videoId) return null;

  return buildThumbnailUrl(videoId);
}

export function getYoutubeWatchUrl(value: string): string | null {
  const parsed = tryParseUrl(value);
  if (!parsed) return null;

  const videoId = extractYoutubeVideoId(parsed);
  if (!videoId) return null;

  return buildWatchUrl(videoId);
}

export function getPianoLandingVideos(): PianoVideoShowcase[] {
  return [
    {
      id: "classical-pop",
      title: "From formal classical into pop energy",
      strap: "Classical to pop",
      description:
        "Show how a piece that feels stiff on the page can become playful, modern, and expressive.",
      embedUrl: normalizeYoutubeValue(
        process.env.NEXT_PUBLIC_PIANO_VIDEO_CLASSICAL_URL,
        PLACEHOLDER_EMBEDS.classical,
      ),
      thumbnailUrl: getYoutubeThumbnailUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_CLASSICAL_URL, PLACEHOLDER_EMBEDS.classical),
      ),
      watchUrl: getYoutubeWatchUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_CLASSICAL_URL, PLACEHOLDER_EMBEDS.classical),
      ),
    },
    {
      id: "children-pop",
      title: "From a children's song into something current",
      strap: "Children's song to pop",
      description:
        "Use a familiar tune to show children that imagination is part of music, not separate from it.",
      embedUrl: normalizeYoutubeValue(
        process.env.NEXT_PUBLIC_PIANO_VIDEO_CHILDREN_URL,
        PLACEHOLDER_EMBEDS.children,
      ),
      thumbnailUrl: getYoutubeThumbnailUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_CHILDREN_URL, PLACEHOLDER_EMBEDS.children),
      ),
      watchUrl: getYoutubeWatchUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_CHILDREN_URL, PLACEHOLDER_EMBEDS.children),
      ),
    },
    {
      id: "wedding-pop",
      title: "From wedding melody into a fresh arrangement",
      strap: "Wedding song to pop",
      description:
        "Show musical range by taking a well-known melody and reshaping it into a more contemporary style.",
      embedUrl: normalizeYoutubeValue(
        process.env.NEXT_PUBLIC_PIANO_VIDEO_WEDDING_URL,
        PLACEHOLDER_EMBEDS.wedding,
      ),
      thumbnailUrl: getYoutubeThumbnailUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_WEDDING_URL, PLACEHOLDER_EMBEDS.wedding),
      ),
      watchUrl: getYoutubeWatchUrl(
        normalizeYoutubeValue(process.env.NEXT_PUBLIC_PIANO_VIDEO_WEDDING_URL, PLACEHOLDER_EMBEDS.wedding),
      ),
    },
  ];
}

export function usingPlaceholderPianoVideos(videos: PianoVideoShowcase[]): boolean {
  const placeholders = new Set<PlaceholderEmbed>(Object.values(PLACEHOLDER_EMBEDS));
  return videos.some((video) => placeholders.has(video.embedUrl as PlaceholderEmbed));
}
