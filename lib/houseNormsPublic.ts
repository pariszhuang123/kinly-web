type JsonObject = Record<string, unknown>;

const HOME_PUBLIC_ID_REGEX = /^[a-z0-9]{8,32}$/;
const PUBLISHED_VERSION_REGEX = /^v[0-9]{6}$/;
const LOCALE_BASE_REGEX = /^[a-z]{2}$/;
const ISO_TIMESTAMP_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

type PublicNormsManifest = {
  home_public_id: string;
  published_at: string;
  published_version: string;
  latest_snapshot_path: string;
};

type PublicNormsSnapshot = {
  home_public_id: string;
  published_at: string;
  published_version: string;
  template_key: string;
  locale_base: string;
  published_content: JsonObject;
};

type PublicNormsRpcResponse = {
  available: boolean;
  home_public_id?: string;
  doc_locale_base?: string;
  house_norms_public?: {
    status?: string;
    published_content?: unknown;
    published_at?: string;
    published_version?: string;
  } | null;
};

export type ResolvedPublicNormsData = {
  homePublicId: string;
  publishedAt: string;
  publishedVersion: string;
  localeBase: string;
  templateKey?: string;
  publishedContent: JsonObject;
};

export type ResolvedPublicNormsResult =
  | {
      available: true;
      source: "storage" | "rpc";
      data: ResolvedPublicNormsData;
    }
  | {
      available: false;
    };

function isJsonObject(value: unknown): value is JsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isIsoTimestamp(value: string): boolean {
  if (!ISO_TIMESTAMP_REGEX.test(value)) return false;
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString() === value;
}

function asHomePublicId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  return HOME_PUBLIC_ID_REGEX.test(normalized) ? normalized : null;
}

function asPublishedVersion(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return PUBLISHED_VERSION_REGEX.test(normalized) ? normalized : null;
}

function asLocaleBase(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  return LOCALE_BASE_REGEX.test(normalized) ? normalized : null;
}

function asIsoTimestamp(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return isIsoTimestamp(normalized) ? normalized : null;
}

function normalizeSupabaseBaseUrl(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return trimmed.replace(/\/+$/, "");
}

function getStorageBaseUrl(): string | null {
  const base = normalizeSupabaseBaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  if (!base) return null;
  return `${base}/storage/v1/object/public/households`;
}

function parseManifest(payload: unknown, expectedHomePublicId: string): PublicNormsManifest | null {
  if (!isJsonObject(payload)) return null;

  const homePublicId = asHomePublicId(payload.home_public_id);
  const publishedAt = asIsoTimestamp(payload.published_at);
  const publishedVersion = asPublishedVersion(payload.published_version);
  const latestSnapshotPath =
    typeof payload.latest_snapshot_path === "string" ? payload.latest_snapshot_path.trim() : "";

  if (!homePublicId || homePublicId !== expectedHomePublicId) return null;
  if (!publishedAt || !publishedVersion) return null;
  if (!latestSnapshotPath.startsWith(`public_norms/home/${expectedHomePublicId}/published_`)) return null;
  if (!latestSnapshotPath.endsWith(".json")) return null;

  return {
    home_public_id: homePublicId,
    published_at: publishedAt,
    published_version: publishedVersion,
    latest_snapshot_path: latestSnapshotPath,
  };
}

function parseSnapshot(payload: unknown, expectedHomePublicId: string): PublicNormsSnapshot | null {
  if (!isJsonObject(payload)) return null;

  const homePublicId = asHomePublicId(payload.home_public_id);
  const publishedAt = asIsoTimestamp(payload.published_at);
  const publishedVersion = asPublishedVersion(payload.published_version);
  const localeBase = asLocaleBase(payload.locale_base);
  const templateKey = typeof payload.template_key === "string" ? payload.template_key.trim() : "";
  const publishedContent = payload.published_content;

  if (!homePublicId || homePublicId !== expectedHomePublicId) return null;
  if (!publishedAt || !publishedVersion || !localeBase || !templateKey) return null;
  if (!isJsonObject(publishedContent)) return null;

  return {
    home_public_id: homePublicId,
    published_at: publishedAt,
    published_version: publishedVersion,
    template_key: templateKey,
    locale_base: localeBase,
    published_content: publishedContent,
  };
}

function parseRpcResponse(payload: unknown, expectedHomePublicId: string): ResolvedPublicNormsData | null {
  if (!isJsonObject(payload)) return null;

  const response = payload as PublicNormsRpcResponse;
  if (!response.available || !response.house_norms_public) return null;
  if (!isJsonObject(response.house_norms_public)) return null;

  const homePublicId = asHomePublicId(response.home_public_id);
  const localeBase = asLocaleBase(response.doc_locale_base) ?? "en";
  const publishedVersion = asPublishedVersion(response.house_norms_public.published_version);
  const publishedAt = asIsoTimestamp(response.house_norms_public.published_at);
  const status = response.house_norms_public.status;
  const publishedContent = response.house_norms_public.published_content;

  if (!homePublicId || homePublicId !== expectedHomePublicId) return null;
  if (!publishedVersion || !publishedAt) return null;
  if (status !== "published") return null;
  if (!isJsonObject(publishedContent)) return null;

  return {
    homePublicId,
    publishedAt,
    publishedVersion,
    localeBase,
    publishedContent,
  };
}

async function readJson(url: string): Promise<unknown | null> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).catch(() => null);

  if (!response || !response.ok) return null;
  return response.json().catch(() => null);
}

async function resolveFromStorage(homePublicId: string): Promise<ResolvedPublicNormsData | null> {
  const storageBaseUrl = getStorageBaseUrl();
  if (!storageBaseUrl) return null;

  const manifestUrl = `${storageBaseUrl}/public_norms/home/${homePublicId}/manifest.json`;
  const manifestPayload = await readJson(manifestUrl);
  const manifest = parseManifest(manifestPayload, homePublicId);
  if (!manifest) return null;

  const snapshotUrl = `${storageBaseUrl}/${manifest.latest_snapshot_path}`;
  const snapshotPayload = await readJson(snapshotUrl);
  const snapshot = parseSnapshot(snapshotPayload, homePublicId);
  if (!snapshot) return null;

  return {
    homePublicId: snapshot.home_public_id,
    publishedAt: snapshot.published_at,
    publishedVersion: snapshot.published_version,
    localeBase: snapshot.locale_base,
    templateKey: snapshot.template_key,
    publishedContent: snapshot.published_content,
  };
}

async function resolveFromRpc(homePublicId: string, localeBase: string): Promise<ResolvedPublicNormsData | null> {
  const supabaseUrl = normalizeSupabaseBaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !anonKey) return null;

  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/house_norms_get_public_by_home_public_id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({
      p_home_public_id: homePublicId,
      p_locale: localeBase,
    }),
    cache: "no-store",
  }).catch(() => null);

  if (!response || !response.ok) return null;
  const payload = await response.json().catch(() => null);

  return parseRpcResponse(payload, homePublicId);
}

export async function resolvePublicNorms(
  homePublicIdRaw: string,
  localeBase = "en",
): Promise<ResolvedPublicNormsResult> {
  const homePublicId = asHomePublicId(homePublicIdRaw);
  const normalizedLocale = asLocaleBase(localeBase) ?? "en";

  if (!homePublicId) {
    return { available: false };
  }

  const fromStorage = await resolveFromStorage(homePublicId);
  if (fromStorage) {
    return {
      available: true,
      source: "storage",
      data: fromStorage,
    };
  }

  const fromRpc = await resolveFromRpc(homePublicId, normalizedLocale);
  if (fromRpc) {
    return {
      available: true,
      source: "rpc",
      data: fromRpc,
    };
  }

  return { available: false };
}
