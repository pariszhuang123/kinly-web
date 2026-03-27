import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHelperDriftConfig: ScenarioConfig = {
  pageKey: "sg_helper_drift",

  recognition: {
    heading: "You have been together for years. Somewhere along the way, the expectations stopped matching.",
    subtitle: "The way things worked slowly stopped being the way things work. Neither of you can point to when it changed.",
    body: "Kinly helps you name what drifted and rebuild a shared baseline — without it feeling like blame or a performance review.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. For long-term employer-helper relationships, it makes the invisible drift visible — so you can recalibrate together instead of letting friction build.",

  hero: {
    headline: "You both stayed. The expectations drifted without either of you noticing.",
    subhead: "Years of small shifts created a gap between what you expect and what actually happens.",
    body: "Kinly surfaces what changed so you can agree on a new baseline together — instead of correcting in silence or pretending everything is fine.",
    ctaHeading: "Name the drift. Rebuild together.",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "See what the home actually needs today",
      copy: "Not what was agreed two years ago — what matters now, visible and checkable by both sides.",
      footer: "The current baseline. Not the old one.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Recalibrate",
      headline: "Adjust routines as the household evolves",
      copy: "Children grew up. Schedules shifted. Preferences changed. The baseline never caught up — until now.",
      footer: "Honest adjustments. Not overdue corrections.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared reference",
      headline: "One place for how the home works now",
      copy: "Routines, preferences, and house rules — updated to reflect reality, not memory.",
      footer: "Both of you see the same version of the truth.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Routines that quietly changed become explicit again — so both sides know what counts today.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping and kitchen expectations reflect the household now — not habits from years ago.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases have clear, current context — so money conversations do not carry old tension.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small drifts surface before they harden — so friction never becomes the new normal.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Things were fine for years. Then small things started feeling off — and neither of us could say when it changed.",
    "I do not want to correct someone who has been with us this long. But I also cannot keep pretending everything is fine.",
    "We both adjusted without telling each other. Now neither of us knows what the actual expectations are.",
  ],

  rolePoints: [
    "Surfaces the gap between old expectations and current reality — so a reset feels like recalibration, not criticism.",
    "Both sides rebuild the baseline together. Changes are agreed, not imposed after years of silence.",
  ],

  formingPoints: [
    "Drift did not happen overnight — it built up over years of unspoken changes. The new baseline accounts for that.",
    "Weekly check-ins catch future drift early — so you never end up here again.",
  ],

  audience: [
    "Singapore households with a long-term helper where the way things worked quietly stopped being the way things work.",
    "Employer-helper relationships where years of invisible drift created friction neither side can name.",
  ],

  notList: [
    "Not a performance review.",
    "Not surveillance or monitoring.",
    "Not a way to prove who drifted first.",
    "Not a replacement for the relationship — just a way to see what changed.",
  ],

  toolsIntro:
    "Once the drift is visible, Kinly adds simple tools that keep the household aligned — so years of invisible friction do not build up again.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: calm recalibration",
    formingHeading: "As life keeps changing",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
