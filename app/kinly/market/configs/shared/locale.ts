import type { ScenarioFeatureScreen, ScenarioScreen } from "../../ScenarioLandingClient";

/**
 * Type for locale-specific copy. Used to enforce complete translations
 * for any language (es, zh, fr, etc.).
 */
export type LocaleCopy = {
  recognition: {
    heading: string;
    subtitle: string;
    body: string;
  };
  whatHeading?: string;
  whatBody?: string;
  hero: {
    headline: string;
    subhead: string;
    body: string;
    ctaHeading?: string;
    privacyNote?: string;
  };
  featureScreens?: ScenarioFeatureScreen[];
  screens: ScenarioScreen[];
  chips: string[];
  rolePoints: string[];
  formingPoints: string[];
  audience: string[];
  notList: string[];
  weekly: {
    intro: string;
    points: string[];
    heading?: string;
  };
  toolsIntro?: string;
  sectionHeadings?: {
    howItWorks?: string;
    soundsLikeYou?: string;
    roleHeading?: string;
    formingHeading?: string;
    audienceHeading?: string;
    notListHeading?: string;
    readyHeading?: string;
    readySubtitle?: string;
  };
  availability?: {
    heading?: string;
    body: string;
    ctaLabel?: string;
  };
};
