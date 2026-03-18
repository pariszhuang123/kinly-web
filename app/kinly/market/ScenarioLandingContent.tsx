/* eslint-disable @next/next/no-img-element */
import {
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import type { ScenarioConfig, ScenarioFeatureScreen } from "./scenarioLanding.types";
import { resolveLandingScreenAsset } from "../shared/landingScreenAssets";
import styles from "../general/LandingClientGeneral.module.css";

const DEFAULT_WHAT_HEADING = "What Kinly is";
const DEFAULT_WHAT_BODY =
  "Kinly is a shared living app for people who live together. It keeps expectations visible and calm without turning home life into a task system.";
const DEFAULT_TOOLS_INTRO =
  "Once expectations are aligned, Kinly offers simple tools to reduce everyday friction without turning shared living into a task system.";
const DEFAULT_FEATURE_SCREEN_IMAGES = ["flows", "groceries", "bills", "checkins"] as const;
const SUPPORTING_IMAGES = {
  friction: "/images/landing/friction-shared-home.webp",
} as const;

function resolveFeatureScreens(
  config: ScenarioConfig,
): ScenarioFeatureScreen[] {
  if (config.featureScreens && config.featureScreens.length >= 4) {
    return config.featureScreens.slice(0, 4);
  }

  const titles = ["Shared tasks", "Shared groceries", "Shared bills", "Calm check-ins"];
  const benefits = [
    "Add context, guide links, and photos so repeat tasks are clear without reminders.",
    "Capture item, quantity, notes, and photos so shopping is clear for everyone.",
    "Split costs fairly with clear amounts, dates, and purchase context.",
    "Needs are noticed early and without blame.",
  ];

  return DEFAULT_FEATURE_SCREEN_IMAGES.map((key, index) => ({
    title: titles[index],
    benefit: benefits[index] ?? benefits[0],
    image: resolveLandingScreenAsset("en", key),
  }));
}

type ScenarioLandingContentProps = {
  config: ScenarioConfig;
};

export default function ScenarioLandingContent({ config }: ScenarioLandingContentProps) {
  const heroScreens = config.screens.slice(0, 3);
  const featureScreens = resolveFeatureScreens(config);

  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>{config.recognition.heading}</KinlyHeading>
              <KinlyText variant="bodyMedium" tone="muted">
                {config.recognition.subtitle}
              </KinlyText>
              <KinlyText variant="bodyMedium">{config.recognition.body}</KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <KinlyStack direction="vertical" gap="l">
                  <KinlyStack direction="horizontal" gap="s" align="center">
                    <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                    <KinlyHeading level={2}>{config.hero.headline}</KinlyHeading>
                  </KinlyStack>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {config.hero.subhead}
                  </KinlyText>
                  <KinlyText variant="bodyMedium">{config.hero.body}</KinlyText>
                  <KinlyText variant="bodyMedium" tone="muted">
                    {config.hero.privacyNote ?? "Private by default. No ads. No surveillance."}
                  </KinlyText>
                </KinlyStack>
              </div>

              <div className={styles.heroVisual}>
                {heroScreens[0] ? (
                  <div className={styles.deviceFrame}>
                    <div className={styles.deviceScreen}>
                      <img src={heroScreens[0].image} alt={`${heroScreens[0].title} screen`} loading="lazy" />
                    </div>
                  </div>
                ) : null}

                {heroScreens.length > 1 ? (
                  <div className={styles.deviceThumbs}>
                    {heroScreens.slice(1).map((screen) => (
                      <div key={screen.title} className={styles.deviceThumb}>
                        <img src={screen.image} alt={`${screen.title} screen`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel} ${styles.sectionHighlight}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.soundsLikeYou ?? "Does this sound like your place?"}
              </KinlyHeading>
              <div className={styles.listGrid}>
                {config.chips.map((chip) => (
                  <KinlyCard key={chip} variant="surfaceContainer">
                    <KinlyText variant="bodyMedium">{chip}</KinlyText>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>{config.whatHeading ?? DEFAULT_WHAT_HEADING}</KinlyHeading>
              <div className={styles.storyImage} aria-hidden="true">
                <img src={SUPPORTING_IMAGES.friction} alt="" loading="lazy" />
              </div>
              <KinlyText variant="bodyMedium">{config.whatBody ?? DEFAULT_WHAT_BODY}</KinlyText>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.howItWorks ?? "How Kinly helps in practice"}
              </KinlyHeading>
              <KinlyText variant="bodyMedium">{config.toolsIntro ?? DEFAULT_TOOLS_INTRO}</KinlyText>
              <div className={styles.featureRailWrap}>
                <div className={styles.featureRail}>
                  {featureScreens.map((feature) => (
                    <div key={feature.title} className={styles.featureRailItem}>
                      <KinlyCard variant="surfaceContainerHigh">
                        <div className={styles.featureCard}>
                          <KinlyText variant="labelMedium" as="div">
                            {feature.title}
                          </KinlyText>
                          <div className={styles.featureImage} aria-hidden="true">
                            <img src={feature.image} alt="" loading="lazy" />
                          </div>
                          <KinlyText variant="bodyMedium">{feature.benefit}</KinlyText>
                        </div>
                      </KinlyCard>
                    </div>
                  ))}
                </div>
              </div>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.roleHeading ?? "Kinly role: reflection first"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {config.rolePoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.formingHeading ?? "If your home is still forming"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {config.formingPoints.map((point) => (
                  <li key={point} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{point}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.audienceHeading ?? "Who this is for"}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {config.audience.map((entry) => (
                  <li key={entry} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{entry}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={`${styles.section} ${styles.sectionPanel}`}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>
                {config.sectionHeadings?.notListHeading ?? "Kinly is not..."}
              </KinlyHeading>
              <ul className={styles.bulletList}>
                {config.notList.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <KinlyText variant="bodyMedium">{item}</KinlyText>
                  </li>
                ))}
              </ul>
            </KinlyStack>
          </section>

          <section className={styles.contactSection}>
            <KinlyText variant="bodyMedium" tone="muted">
              <a className={styles.contactLink} href="mailto:paris.zhuang@makinglifeeasie.com">
                Contact us
              </a>
            </KinlyText>
          </section>
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}
