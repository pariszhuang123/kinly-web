import { ScenarioScreen } from "../../ScenarioLandingClient";

export type EsCopy = {
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
  screens: ScenarioScreen[];
  chips: string[];
  rolePoints: string[];
  formingPoints: string[];
  audience: string[];
  notList: string[];
  weekly: {
    intro: string;
    points: string[];
  };
  availability?: {
    heading?: string;
    body: string;
    ctaLabel?: string;
  };
};
