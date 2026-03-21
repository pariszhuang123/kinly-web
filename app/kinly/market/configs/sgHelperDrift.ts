import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHelperDriftConfig: ScenarioConfig = {
  pageKey: "sg_helper_drift",

  recognition: {
    heading: "You have been together for years. The small shifts were invisible — until they were not.",
    subtitle: "Nobody did anything wrong. The expectations just drifted without anyone noticing.",
    body: "Kinly helps you reset shared expectations calmly — without it feeling like a complaint or a performance review.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. For long-term employer-helper relationships, it makes expectations visible again — so a reset feels natural, not confrontational.",

  hero: {
    headline: "Reset expectations together. Without it feeling like a complaint.",
    subhead: "When routines drift slowly, no one notices until something feels off.",
    body: "Kinly makes household expectations visible to both of you — so you can recalibrate together instead of correcting from above.",
    ctaHeading: "Make the invisible visible again",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "See what the home needs today",
      copy: "Daily routines and expectations — visible and checkable by both sides.",
      footer: "Clarity without confrontation.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Recalibrate",
      headline: "Update routines as life changes",
      copy: "Children grow up. Schedules shift. Preferences evolve. The baseline adapts together.",
      footer: "Fair adjustments. No performance reviews.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared reference",
      headline: "One place for how the home works now",
      copy: "Routines, preferences, and house rules — as they are today, not as they were two years ago.",
      footer: "Both of you see the same expectations.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Routines that drifted become visible again — so both sides know the current baseline.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping and kitchen expectations stay current — not based on what was said two years ago.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases have clear context — so money conversations stay calm.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small drifts surface early — so they never build into resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Things were fine for years. Then small things started to feel off — and I could not explain when it changed.",
    "I do not want to correct someone who has been with us this long. But I also cannot say nothing.",
    "The expectations shifted for both of us. We just never talked about it.",
  ],

  rolePoints: [
    "Makes drifted expectations visible — so a reset feels like recalibration, not criticism.",
    "Both sides see the same baseline. Changes are shared, not imposed.",
  ],

  formingPoints: [
    "Life changes over years — children, schedules, preferences. The home baseline should change with it.",
    "Weekly check-ins keep things current so drift never builds up again.",
  ],

  audience: [
    "Singapore households with a long-term helper where expectations have quietly shifted.",
    "Employer-helper relationships that need a calm reset without confrontation.",
  ],

  notList: [
    "Not a performance review.",
    "Not surveillance or monitoring.",
    "Not a way to prove who was wrong.",
    "Not a replacement for the relationship — just a visible foundation for it.",
  ],

  toolsIntro:
    "Once expectations are visible again, Kinly adds simple tools that keep the household aligned — so drift does not build up over time.",

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
