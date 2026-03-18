import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const takeawayBudgetFlatsConfig: ScenarioConfig = {
  pageKey: "takeaway_budget_flats",

  recognition: {
    heading: "You know who paid last time. Nobody else does.",
    subtitle: "When money is tight, being the one who tracks everything feels heavier than the bills.",
    body: "Kinly keeps shared costs and expectations visible so one person does not have to remember what everyone owes.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For tight-budget flats, it keeps fairness clear without turning your home into a budgeting spreadsheet.",

  hero: {
    headline: "You track every shared cost in your head. That is the real burden.",
    subhead: "When money is tight, the person who remembers who owes what carries the heaviest load.",
    body: "Kinly keeps shared costs and expectations visible so one person does not have to be the house accountant.",
    ctaHeading: "Stop tracking it all in your head",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What's stressing the house this week?",
      copy: "Groceries, heating, power, and the little things that quietly add up.",
      footer: "Notice friction early, before it turns into an argument.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Reset",
      headline: "Set the baseline once",
      copy: "What counts as shared, how to handle uneven usage, and how to adjust when someone is stretched.",
      footer: "Less blaming. More clarity. Everyone stays on the same page.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared norms",
      headline: "Make expectations easy to see",
      copy: "Simple house standards, so nobody has to hint, nag, or keep score.",
      footer: "Fairness feels lighter when it's visible.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring home standards visible so uneven weeks do not turn into blame.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared grocery expectations before shops so spending stays fair.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so budget pressure feels manageable.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset money tension early.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I know exactly who has not paid their share. Nobody else is keeping track.",
    "I remember what we spent last week. They do not.",
    "If I stop tracking, it just becomes unfair — and I am the one who notices.",
  ],

  rolePoints: [
    "Makes shared expectations visible so you don't have to call people out.",
    "Helps the house adjust fairly when someone is week-to-week.",
  ],

  formingPoints: [
    "New flatmates and changing schedules, the baseline stays clear.",
    "If it slips, you reset next week without shame or blame.",
  ],

  audience: [
    "Student flats living week-to-week.",
    "Shared homes where groceries, heating, or power cause repeated tension.",
  ],

  notList: [
    "Not a budgeting app.",
    "Not a debt tracker.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning shared living into a task system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
