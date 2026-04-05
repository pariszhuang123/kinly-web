import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDetectedCountryCode } from "../../../lib/geo";
import { getDetectedPlatform } from "../../../lib/platform";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import { getWithYouScenarioConfig, withYouRouteSlugs } from "../../../lib/withyou";
import WithYouLanding from "../WithYouLanding";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return withYouRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getWithYouScenarioConfig(slug);

  if (!config) {
    return buildPublicMetadata({
      title: "withYou",
      description: "Believable audio call flows for moments when you want more distance or more presence.",
      path: `/withyou/${slug}`,
      siteName: "withYou by MakingLifeEasie",
    });
  }

  return buildPublicMetadata({
    title: { absolute: `withYou | ${config.title.en}` },
    description: config.problemFraming.en,
    path: `/withyou/${slug}`,
    siteName: "withYou by MakingLifeEasie",
  });
}

export default async function WithYouScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getWithYouScenarioConfig(slug);

  if (!config) {
    notFound();
  }

  const [detectedPlatform, detectedCountryCode] = await Promise.all([
    getDetectedPlatform(),
    getDetectedCountryCode(),
  ]);

  return (
    <WithYouLanding
      config={config}
      detectedPlatform={detectedPlatform}
      detectedCountryCode={detectedCountryCode}
    />
  );
}
