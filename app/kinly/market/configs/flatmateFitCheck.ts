import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const flatmateFitCheckConfig: ScenarioConfig = {
  pageKey: "flatmate_fit_check",
  action: {
    href: "/kinly/fit-check",
    label: "Start the fit check",
  },

  recognition: {
    heading: "You are about to invite someone into your home. The interview will not show you where the friction will be.",
    subtitle: "The real mismatches are invisible in conversation. They only surface once someone is already living there.",
    body: "Kinly's Flatmate Fit Check gives head tenants and lived-in landlords a calm, anonymous way to surface day-to-day differences before anyone commits — so the friction you would feel at week three is visible before move-in.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. The Flatmate Fit Check is an owner-first screening tool that surfaces the everyday friction an interview will never reveal — before you commit to sharing your home.",

  hero: {
    headline: "You are about to commit to living together. The interview will not tell you how.",
    subhead: "The household answers first. The applicant answers the same four scenarios anonymously.",
    body: "Kinly turns those responses into the friction points that only show up after move-in — so you can see them now, while the decision is still yours.",
    ctaHeading: "See the friction before you commit",
  },

  screens: [
    {
      title: "Flat vibe",
      eyebrow: "Owner first",
      headline: "Capture how your home actually runs",
      copy: "Record the daily rhythms around cleanliness, noise, chores, and small tensions that no interview question will reach.",
      footer: "A lived-in baseline, not a personality score.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Anonymous share",
      eyebrow: "Applicant flow",
      headline: "Send one simple link",
      copy: "Applicants answer the same behavioural scenarios anonymously — revealing how they would actually live, not how they present in an interview.",
      footer: "Day-to-day honesty before anyone commits.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Interview briefing",
      eyebrow: "Preparation",
      headline: "See what the interview would miss",
      copy: "Kinly highlights the friction points that only surface after move-in — so you can explore them in person while there is still time.",
      footer: "Briefing first. No rankings or auto-rejections.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared norms",
      benefit: "Reuse owner answers later when shaping house norms, so the expectations you surfaced before move-in carry forward into daily life.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Visible rhythm",
      benefit: "Surface the routine clashes around noise, sleep, and quiet hours that would otherwise take weeks of living together to discover.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
    {
      title: "Expectation gaps",
      benefit: "Spot where cleaning and chore assumptions will collide — the kind of mismatch that feels minor in conversation but corrosive in daily life.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "App handoff",
      benefit: "After the questionnaire, Kinly gives both sides a clear next step into the app when they are ready.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
  ],

  chips: [
    "The interview sounds fine. The day-to-day is where things fall apart.",
    "I need more than gut feel before I commit to sharing my home.",
    "I do not want to find out we are mismatched after they have already moved in.",
  ],

  rolePoints: [
    "Surfaces the daily friction that interviews never reach — before you commit to living together.",
    "Gives applicants a lightweight, anonymous way to show how they actually live, not how they interview.",
  ],

  formingPoints: [
    "Use the fit check before a viewing, interview, or final decision — while the commitment is still reversible.",
    "If things progress, Kinly can later support shared norms and expectations inside the app.",
  ],

  audience: [
    "Head tenants about to invite someone in and not sure the interview will be enough.",
    "Lived-in landlords who know the real friction only shows up after move-in.",
    "Applicants who want to show how they actually live before either side commits.",
  ],

  notList: [
    "Not a ranking system.",
    "Not a background check.",
    "Not a replacement for conversation.",
    "Not a reason to auto-accept or auto-reject someone.",
  ],

  toolsIntro:
    "The Flatmate Fit Check reveals the friction you would feel after move-in — before anyone commits. It helps both sides see the day-to-day reality first, then hands off to Kinly if they want a clearer shared-living system afterward.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
