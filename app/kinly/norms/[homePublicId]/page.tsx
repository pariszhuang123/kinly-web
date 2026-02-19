import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { KinlyCard, KinlyDivider, KinlyHeading, KinlyShell, KinlyStack, KinlyText } from "../../../../components";
import { resolvePublicNorms } from "../../../../lib/houseNormsPublic";

type Params = Promise<{
  homePublicId: string;
}>;

type JsonObject = Record<string, unknown>;

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

function extractSections(content: JsonObject): Array<{ title: string; text: string }> {
  const sectionsValue = content.sections;
  const sectionObject = asObject(sectionsValue);
  const sectionEntries = Array.isArray(sectionsValue)
    ? sectionsValue
    : sectionObject
      ? Object.values(sectionObject)
      : [];

  return sectionEntries
    .map((entry) => asObject(entry))
    .filter((entry): entry is JsonObject => entry !== null)
    .map((entry) => {
      const title = asString(entry.title) ?? asString(entry.title_key) ?? "Section";
      const text = asString(entry.text) ?? "";
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
  const result = await resolvePublicNorms(resolvedParams.homePublicId, "en");

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
  const result = await resolvePublicNorms(resolvedParams.homePublicId, "en");

  if (!result.available) {
    notFound();
  }

  const content = result.data.publishedContent;
  const summary = extractSummary(content);
  const contextLine = extractContext(content);
  const sections = extractSections(content);

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
