import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const takeawayBudgetFlatsConfig: ScenarioConfig = {
  pageKey: "takeaway_budget_flats",

  recognition: {
    heading: "You agreed to split everything. Nobody agreed on what fair looks like.",
    subtitle: "The decision to share costs was easy. Living inside that decision — tracking, reminding, absorbing the gaps — is the part nobody planned for.",
    body: "Kinly keeps shared costs and expectations visible so the person who tracks everything does not have to carry it alone.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For tight-budget flats, it closes the gap between agreeing to split costs and actually splitting them fairly.",

  hero: {
    headline: "You split the costs. You carry the tracking.",
    subhead: "You all agreed to share. But only one person knows what that actually means week to week.",
    body: "Kinly keeps shared costs visible to everyone so fairness does not depend on one person remembering, chasing, and absorbing the difference.",
    ctaHeading: "Make fair visible to everyone",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What is adding up this week",
      copy: "Groceries, heating, power, and the costs that quietly become one person's problem.",
      footer: "Shared costs stay shared when everyone can see them.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Agree on what fair means",
      copy: "What counts as shared, how to handle uneven weeks, and how to adjust when someone is stretched.",
      footer: "Fair stops being a feeling. It becomes something you can point to.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "The agreement everyone can check",
      copy: "What is shared, what is not, and how the house adjusts — visible so nobody has to keep score in their head.",
      footer: "Fairness works when it is not one person's job to enforce it.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring responsibilities visible so uneven effort does not quietly become resentment.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make shared grocery expectations clear before the shop so the bill does not surprise anyone.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so the person tracking everything can finally stop.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to address money tension before it turns into the thing nobody talks about.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "We said we would split things. I am the only one who remembers what that means.",
    "I know who owes what. Nobody else is keeping count.",
    "The agreement was to share. The reality is that I track and they forget.",
  ],

  rolePoints: [
    "Makes the cost-sharing agreement visible so one person does not have to enforce it.",
    "Helps the house adjust fairly when someone is week-to-week.",
  ],

  formingPoints: [
    "New flatmates and changing schedules — the agreement stays visible.",
    "If it slips, you reset next week without shame or blame.",
  ],

  audience: [
    "Student flats where splitting costs sounded simple but became one person's burden.",
    "Shared homes where groceries, heating, or power cause repeated tension.",
  ],

  notList: [
    "Not a budgeting app.",
    "Not a debt tracker.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once the agreement is visible, Kinly offers simple tools that keep it working — without turning shared living into a spreadsheet.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
