import type { Metadata } from "next";
import { KinlyButton, KinlyCard, KinlyHeading, KinlyStack, KinlyText, PageIntro } from "../../../components";
import { buildPublicMetadata } from "../../../lib/publicMetadata";
import { EVNEX_BASE_PATH } from "../../../lib/prototypes/evnex/lifecycle";
import styles from "../../../components/prototypes/evnex/EvnexControlTower.module.css";

export const metadata: Metadata = buildPublicMetadata({
  title: { absolute: "Kinly | Evnex Quote-to-Active Control Tower" },
  description:
    "A prototype for turning EV charger sales, installation, and activation data into clear operational actions.",
  path: EVNEX_BASE_PATH,
  siteName: "Kinly by MakingLifeEasie",
});

export default function EvnexControlTowerLandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <KinlyStack direction="vertical" gap="xl">
          <PageIntro
            eyebrow="Portfolio prototype"
            title="Quote-to-Active Control Tower"
            subtitle="A prototype for turning EV charger sales, installation, and activation data into clear operational actions."
            asideTitle="What this prototype answers"
            asideBody="What is stuck, where it is stuck, why it matters, who owns it, what should happen next, and which exact records need action."
            actions={
              <>
                <KinlyButton href={`${EVNEX_BASE_PATH}/summary`}>View Summary</KinlyButton>
                <KinlyButton href={`${EVNEX_BASE_PATH}/why-this-prototype`} variant="outlined">
                  Why This Prototype
                </KinlyButton>
                <KinlyButton href={`${EVNEX_BASE_PATH}/actions`} variant="ghost">
                  Open Action Centre
                </KinlyButton>
              </>
            }
          />

          <KinlyCard variant="surfaceContainerHigh">
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <KinlyHeading level={2}>Problem statement</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  In an EV charger business the sale is only the beginning. The real operational challenge is getting
                  from accepted quote to paid invoice, released order, completed installation, and active working
                  device.
                </KinlyText>
              </div>
            </div>
          </KinlyCard>

          <div className={styles.twoColumnGrid}>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Prototype scope</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  This prototype uses mock data across CRM, invoice, ERP, build, shipping, installation, and device
                  activation layers.
                </KinlyText>
              </div>
            </KinlyCard>
            <KinlyCard variant="surfaceContainer">
              <div className={styles.sectionCard}>
                <KinlyHeading level={3}>Interview story</KinlyHeading>
                <KinlyText variant="bodyMedium">
                  I built this because an EV charger company is not just managing sales. It is managing a quote-to-active
                  operating flow. The risk is not only whether customers buy. The risk is whether accepted quotes turn
                  into paid invoices, paid invoices turn into released orders, released orders turn into scheduled
                  installs, and installed chargers become active working devices.
                </KinlyText>
                <KinlyText variant="bodyMedium">
                  So the prototype focuses on exceptions, ownership, and recommended actions rather than only dashboard
                  metrics. The goal is to help the business move from reporting what happened to acting on what is
                  stuck.
                </KinlyText>
              </div>
            </KinlyCard>
          </div>
        </KinlyStack>
      </div>
    </main>
  );
}
