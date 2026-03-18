import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const internationalStartConfig: ScenarioConfig = {
  pageKey: "kinly_market_new_place",
  recognition: {
    heading: "Moved somewhere new and nobody told you how things work here?",
    subtitle: "You want to do the right thing — but you should not have to guess.",
    body: "Kinly shows what the home expects so you do not have to keep asking or figure it out alone.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. When you move into a new place, it keeps expectations clear without turning the home into a checklist.",
  hero: {
    headline: "See how the home works — without waiting for someone to explain.",
    subhead: "The norms are already there. You just need a way to see them.",
    body: "New routines, new people, new expectations. Kinly shows what matters so you do not have to guess or keep asking.",
    ctaHeading: "Know what is expected from day one",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours, shared meals, who is around tonight.",
      footer: "Things to notice without needing to ask.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Contribute at your own pace",
      copy: "Pick up tasks when you can, swap when life changes.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Norms everyone can see",
      copy: "Quiet hours, guests, cleaning expectations - all in one calm place.",
      footer: "No surprises, no awkward questions.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Surface home routines so new housemates can contribute without awkward guesswork.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify what is shared and what is personal before shopping.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep contributions visible so fairness is clear in a new home.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset expectations as routines settle.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "I want to help but nobody told me what is expected.",
    "I keep asking the same person — and I can tell they are tired of it.",
    "I do not want to get it wrong. I just need it written down.",
    "Everyone else seems to know the routine. I am still guessing.",
  ],
  rolePoints: [
    "Surfaces norms so you do not have to ask.",
    "Keeps contributions visible without pressure or judgement.",
  ],
  formingPoints: [
    "Settling in takes time. Kinly keeps the baseline clear as you adjust.",
    "New routines are normal, not failures.",
  ],
  audience: [
    "People settling into a new shared home.",
    "Anyone adjusting to unfamiliar routines.",
    "Housemates who want calm clarity, not awkward conversations.",
  ],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning shared living into a task system.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};

