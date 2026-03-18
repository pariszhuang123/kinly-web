export type ScenarioScreen = {
  title: string;
  eyebrow: string;
  headline: string;
  copy: string;
  footer: string;
  image: string;
};

export type ScenarioFeatureScreen = {
  title: string;
  benefit: string;
  image: string;
};

export type ScenarioConfig = {
  pageKey: string;
  recognition: {
    heading: string;
    subtitle: string;
    body: string;
  };
  hero: {
    headline: string;
    subhead: string;
    body: string;
    ctaHeading?: string;
    privacyNote?: string;
  };
  whatHeading?: string;
  whatBody?: string;
  featureScreens?: ScenarioFeatureScreen[];
  screens: ScenarioScreen[];
  chips: string[];
  rolePoints: string[];
  formingPoints: string[];
  audience: string[];
  notList: string[];
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
