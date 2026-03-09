import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { KinlyCard, KinlyDivider, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../../../../components";
import { resolvePublicNorms } from "../../../../lib/houseNormsPublic";

type Params = Promise<{
  homePublicId: string;
}>;

type JsonObject = Record<string, unknown>;
type Section = { title: string; text: string };

const CANONICAL_SECTION_ORDER = [
  "norms_rhythm_quiet",
  "norms_shared_spaces",
  "norms_guests_social",
  "norms_responsibility_flow",
  "norms_repair_style",
  "norms_home_identity",
] as const;

const CANONICAL_SECTION_INDEX = new Map<string, number>(
  CANONICAL_SECTION_ORDER.map((key, index) => [key, index]),
);

function asObject(value: unknown): JsonObject | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as JsonObject;
}

function asString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function resolveLocaleBase(preferredLanguage: string | null): string {
  const first = preferredLanguage?.split(",")[0]?.trim().toLowerCase() ?? "en";
  const normalized = first.split(";")[0]?.trim().replace(/_/g, "-") ?? "en";
  const base = normalized.split("-")[0] ?? "en";
  return /^[a-z]{2}$/.test(base) ? base : "en";
}

function extractSummary(content: JsonObject) {
  const summary = asObject(content.summary) ?? {};
  return {
    title: asString(summary.title) ?? "House norms",
    subtitle: asString(summary.subtitle) ?? "A shared starting point - not a rulebook.",
    framing: asString(summary.framing) ?? null,
  };
}

function extractContext(content: JsonObject): string | null {
  const context = content.context;
  if (typeof context === "string") return asString(context);
  const contextObject = asObject(context);
  if (!contextObject) return null;
  return asString(contextObject.line) ?? asString(contextObject.text) ?? null;
}

function extractSections(content: JsonObject): Section[] {
  type RawSection = { key: string | null; order: number; value: JsonObject };
  const sectionsValue = content.sections;
  const rawSections: RawSection[] = [];

  if (Array.isArray(sectionsValue)) {
    sectionsValue.forEach((entry, index) => {
      const section = asObject(entry);
      if (!section) return;
      const key = asString(section.section_key) ?? asString(section.id);
      rawSections.push({ key, order: index, value: section });
    });
  } else {
    const sectionsMap = asObject(sectionsValue);
    if (!sectionsMap) return [];

    Object.entries(sectionsMap).forEach(([key, value], index) => {
      const section = asObject(value);
      if (!section) return;
      rawSections.push({ key, order: index, value: section });
    });
  }

  return rawSections
    .sort((a, b) => {
      const aIndex = a.key ? CANONICAL_SECTION_INDEX.get(a.key) : undefined;
      const bIndex = b.key ? CANONICAL_SECTION_INDEX.get(b.key) : undefined;

      if (aIndex !== undefined && bIndex !== undefined) return aIndex - bIndex;
      if (aIndex !== undefined) return -1;
      if (bIndex !== undefined) return 1;
      return a.order - b.order;
    })
    .map(({ value }) => {
      const title = asString(value.title) ?? "Section";
      const text = asString(value.text) ?? "";
      return { title, text };
    })
    .filter((entry) => entry.text.length > 0);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const requestHeaders = await headers();
  const localeBase = resolveLocaleBase(requestHeaders.get("accept-language"));
  const result = await resolvePublicNorms(resolvedParams.homePublicId, localeBase);

  if (!result.available) {
    return {
      title: "House norms unavailable | Kinly",
      description: "This house norms page is unavailable.",
    };
  }

  const summary = extractSummary(result.data.publishedContent);
  return {
    title: `${summary.title} | Kinly`,
    description: summary.subtitle,
  };
}

export default async function PublicNormsPage({
  params,
}: {
  params: Params;
}) {
  const resolvedParams = await params;
  const requestHeaders = await headers();
  const localeBase = resolveLocaleBase(requestHeaders.get("accept-language"));
  const result = await resolvePublicNorms(resolvedParams.homePublicId, localeBase);

  if (!result.available) {
    notFound();
  }

  const content = result.data.publishedContent;
  const summary = extractSummary(content);
  const contextLine = extractContext(content);
  const sections = extractSections(content);
  const hasRenderableContent = Boolean(summary.framing || contextLine || sections.length > 0);

  if (!hasRenderableContent) {
    notFound();
  }

  return (
    <main>
      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="l">
          <KinlyStack direction="vertical" gap="xs">
            <KinlyHeading level={1}>{summary.title}</KinlyHeading>
            <KinlyText variant="bodyMedium" tone="muted">
              {summary.subtitle}
            </KinlyText>
            {summary.framing ? (
              <KinlyText variant="bodyMedium">{summary.framing}</KinlyText>
            ) : null}
          </KinlyStack>

          {contextLine ? (
            <KinlyCard variant="surface">
              <KinlyText variant="bodySmall" tone="muted">
                {contextLine}
              </KinlyText>
            </KinlyCard>
          ) : null}

          <KinlyDivider />

          <KinlyStack direction="vertical" gap="m">
            {sections.map((section) => (
              <KinlyCard key={`${section.title}-${section.text.slice(0, 20)}`} variant="surface">
                <KinlyStack direction="vertical" gap="xs">
                  <KinlyHeading level={3}>{section.title}</KinlyHeading>
                  <KinlyText variant="bodyMedium">{section.text}</KinlyText>
                </KinlyStack>
              </KinlyCard>
            ))}
          </KinlyStack>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
