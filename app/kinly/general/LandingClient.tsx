"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import {
  KinlyButton,
  KinlyCard,
  KinlyHeading,
  KinlyShell,
  KinlyStack,
  KinlyText,
} from "../../../components";
import styles from "./LandingClient.module.css";

type InterestMarker = {
  country_code?: string;
  ui_locale?: string;
  captured_at?: string;
};

type LandingClientProps = {
  detectedCountryCode?: string | null;
};

const SUPPORTED_REGIONS = ["NZ", "SG"];
const APP_STORE_URL =
  (process.env.NEXT_PUBLIC_IOS_STORE_URL?.trim() || "https://apps.apple.com/app/kinly/id6756508378") as string;
const PLAY_STORE_URL =
  (process.env.NEXT_PUBLIC_ANDROID_STORE_URL?.trim() ||
    "https://play.google.com/store/apps/details?id=com.makinglifeeasie.kinly") as string;

function readInterestMarker(): InterestMarker | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("kinly_interest_status");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as InterestMarker;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      country_code: parsed.country_code ? String(parsed.country_code).toUpperCase() : undefined,
      ui_locale: parsed.ui_locale ? String(parsed.ui_locale) : undefined,
      captured_at: parsed.captured_at ? String(parsed.captured_at) : undefined,
    };
  } catch {
    return null;
  }
}

export default function LandingClient({ detectedCountryCode = null }: LandingClientProps) {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // Mark hydration complete so client-only reads (localStorage, navigator) happen after first paint.
    setHasHydrated(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const interestMarker = useMemo<InterestMarker | null>(
    () => (hasHydrated ? readInterestMarker() : null),
    [hasHydrated],
  );

  const interestCountry = interestMarker?.country_code ?? null;
  const regionCountry = useMemo(
    () => (interestCountry ? interestCountry : detectedCountryCode ? detectedCountryCode.toUpperCase() : null),
    [detectedCountryCode, interestCountry],
  );

  const suppressStoreCtas = useMemo(() => {
    if (!regionCountry) return false;
    return !SUPPORTED_REGIONS.includes(regionCountry);
  }, [regionCountry]);

  const appScreens = useMemo(
    () => [
      {
        title: "Today",
        eyebrow: "Right now",
        headline: "What needs your attention",
        copy: "Things to do, things to notice, and gentle next steps",
        footer: "Today's tasks, unfinished items, and updates from your home.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
      },
      {
        title: "Manage",
        eyebrow: "Make changes",
        headline: "Change how things work",
        copy: "Edit, assign, comment on, or remove flows and shares",
        footer: "You're always in control - nothing is locked in.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
      },
      {
        title: "Home Hub",
        eyebrow: "Shared home",
        headline: "What matters in our home",
        copy: "Moments, norms, and shared references",
        footer: "Gratitude, house vibe, and important notes - shared by everyone.",
        image: "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
      },
    ],
    [],
  );

  return (
    <main className={styles.page}>
      {/* IMPORTANT:
          The previous always-mounted backdrop was intercepting clicks (e.g. store badges).
          If you want a visual backdrop, keep it but ensure CSS uses pointer-events: none.
          Otherwise, remove it entirely.
      */}
      <div className={styles.backdrop} aria-hidden="true" />

      <KinlyShell as="section">
        <KinlyStack direction="vertical" gap="xl">
          <section className={styles.recognition}>
            <KinlyStack direction="vertical" gap="xs">
              <KinlyHeading level={1}>Shared living gets heavy.</KinlyHeading>
              <KinlyText variant="bodyLarge" tone="muted">
                Even when no one is doing anything wrong.
              </KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.hero}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyStack direction="horizontal" gap="s" align="center">
                <img src="/logo-kinly.svg" alt="Kinly logo" className={styles.logo} />
                <KinlyHeading level={2}>Together feels lighter.</KinlyHeading>
              </KinlyStack>
              <KinlyText variant="bodyLarge" tone="muted">
                A calm, shared place to notice how the home feels before anyone asks you to do anything.
              </KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="m">
              <KinlyHeading level={2}>How Kinly works</KinlyHeading>
              <div className={styles.screenGrid}>
                {appScreens.map((screen) => (
                  <KinlyCard key={screen.title} variant="surfaceContainer">
                    <div className={styles.screen}>
                      <div className={styles.screenHeader}>
                        <KinlyText variant="labelSmall" tone="muted" as="div">
                          {screen.eyebrow}
                        </KinlyText>
                        <KinlyText variant="labelSmall" tone="muted" as="div">
                          {screen.title}
                        </KinlyText>
                      </div>
                      <div className={styles.screenImage}>
                        <img src={screen.image} alt={`${screen.title} screen`} loading="lazy" />
                      </div>
                      <KinlyStack direction="vertical" gap="s">
                        <KinlyHeading level={3}>{screen.headline}</KinlyHeading>
                        <KinlyText variant="bodyMedium">{screen.copy}</KinlyText>
                        <div className={styles.screenFooter}>
                          <KinlyText variant="labelSmall" tone="muted" as="div">
                            {screen.footer}
                          </KinlyText>
                        </div>
                      </KinlyStack>
                    </div>
                  </KinlyCard>
                ))}
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Does this sound like your place?</KinlyHeading>
              <div className={styles.chips}>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We care about each other, but chore charts make things tense.
                  </KinlyText>
                </KinlyCard>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We want to know how the house feels without assigning blame.
                  </KinlyText>
                </KinlyCard>
                <KinlyCard variant="surface">
                  <KinlyText variant="bodyMedium">
                    We avoid drama, but we still want to be seen.
                  </KinlyText>
                </KinlyCard>
              </div>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Kinly role: reflection first</KinlyHeading>
              <KinlyText variant="bodyMedium">
                Kinly reflects how a home is feeling and makes care visible without asking for work. It lowers emotional
                load before it asks for action.
              </KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>If your home is still forming</KinlyHeading>
              <KinlyText variant="bodyMedium">
                It is normal to be unsure. Kinly treats figuring it out as healthy, not a problem to fix.
              </KinlyText>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Who this is for</KinlyHeading>
              <KinlyStack direction="vertical" gap="xs">
                <KinlyText variant="bodyMedium">Flatmates who did not choose each other but want calm.</KinlyText>
                <KinlyText variant="bodyMedium">Homes adjusting to change or new rhythms.</KinlyText>
                <KinlyText variant="bodyMedium">People who care but do not want pressure tactics.</KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Kinly is not...</KinlyHeading>
              <KinlyStack direction="vertical" gap="xxs">
                <KinlyText variant="bodyMedium">...a surveillance tool.</KinlyText>
                <KinlyText variant="bodyMedium">...a scorecard or leaderboard.</KinlyText>
                <KinlyText variant="bodyMedium">...a chore boss.</KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          <section className={styles.section}>
            <KinlyStack direction="vertical" gap="s">
              <KinlyHeading level={2}>Weekly reflection, human-paced</KinlyHeading>

              <KinlyText variant="bodyMedium">
                Kinly moves on weekly rhythm. It notices the home mood without streaks, checklists, or pressure.
              </KinlyText>

              <KinlyStack direction="vertical" gap="xs">
                <KinlyText variant="bodyMedium">
                  You can check in weekly, not daily. No streaks, no pressure to keep up.
                </KinlyText>
                <KinlyText variant="bodyMedium">
                  Reflections are for understanding, not grading.
                </KinlyText>
              </KinlyStack>
            </KinlyStack>
          </section>

          {suppressStoreCtas && (
            <section className={styles.section}>
              <KinlyCard variant="surfaceContainer">
                <KinlyStack direction="vertical" gap="s">
                  <KinlyHeading level={2}>Availability</KinlyHeading>
                  <KinlyText variant="bodyMedium">
                    Kinly is currently available in New Zealand and Singapore. If you are elsewhere, we will let you in
                    when Kinly opens in your area.
                  </KinlyText>
                  <KinlyButton variant="outlined" href="/kinly/get">
                    Express interest when Kinly is available in your area.
                  </KinlyButton>
                </KinlyStack>
              </KinlyCard>
            </section>
          )}

        {!suppressStoreCtas && (
          <section className={styles.storeSection}>
            <KinlyCard variant="surfaceContainerHigh">
              <KinlyStack direction="vertical" gap="m">
                <KinlyHeading level={2}>When you are ready</KinlyHeading>

                <KinlyStack direction="horizontal" gap="s" wrap>
                  <a
                    className={styles.storeBadgeLink}
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                  >
                    <img
                      src="/apple-store.svg"
                      alt="Download on the App Store"
                      className={styles.storeBadge}
                    />
                  </a>

                  <a
                    className={styles.storeBadgeLink}
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      src="/google-play.svg"
                      alt="Get it on Google Play"
                      className={styles.storeBadge}
                    />
                  </a>
                </KinlyStack>
              </KinlyStack>
            </KinlyCard>
          </section>
        )}
        </KinlyStack>
      </KinlyShell>
    </main>
  );
}




