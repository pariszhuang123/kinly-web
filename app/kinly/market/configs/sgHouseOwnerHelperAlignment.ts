import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "You want a calm home, but standards stay unspoken.",
    subtitle: "Different habits and cultures can create silent resentment.",
    body: "Kinly makes expectations visible and shared so feedback feels clearer, earlier, and less personal.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It helps households align expectations and feedback in a neutral way without turning home life into policing.",

  hero: {
    headline: "Shared clarity for Singapore homes with helpers.",
    subhead: "Make expectations discussable before tension builds.",
    body: "Kinly gives everyone the same reference point for routines, boundaries, and weekly feedback so misalignment is surfaced early and reset calmly.",
    ctaHeading: "Align expectations calmly",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "Notice friction before it hardens",
      copy: "Daily rhythms, shared spaces, and small tensions in one neutral view.",
      footer: "Early clarity lowers emotional load.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Alignment",
      headline: "Make expectations explicit, not assumed",
      copy: "Capture household standards once so feedback is about alignment, not blame.",
      footer: "Less guessing, less resentment.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "Keep boundaries and agreements visible",
      copy: "One shared reference for routines, boundaries, and communication tone.",
      footer: "Clarity first, pressure lower.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring standards visible so expectations are clear before reminders feel personal.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make household supply expectations explicit so requests stay practical and respectful.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so money conversations remain factual and calm.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use a weekly feedback rhythm to surface misalignment early and reset without confrontation.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Standards exist, but no one says them clearly.",
    "Cultural differences make feedback emotionally uncomfortable.",
    "I want alignment, not silent resentment.",
  ],

  rolePoints: [
    "Creates one neutral reference point for expectations and boundaries.",
    "Supports clearer feedback without turning anyone into the enforcer.",
  ],

  formingPoints: [
    "Household dynamics shift; explicit expectations keep everyone aligned.",
    "Small misalignments are easier to reset when feedback is regular and calm.",
  ],

  audience: [
    "Homes where expectations are implied but not clearly shared.",
    "Households balancing different routines, norms, and communication styles.",
  ],

  notList: [
    "Not surveillance.",
    "Not a punishment system.",
    "Not a reporting tool.",
    "Not a scorecard.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so expectation alignment and feedback stay human.",
    points: [
      "Check in weekly so tensions do not stack up in silence.",
      "Reset expectations with shared wording, not personal blame.",
      "Keep the home steady with clear boundaries and calmer conversations.",
    ],
  },

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction without turning household life into enforcement.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
