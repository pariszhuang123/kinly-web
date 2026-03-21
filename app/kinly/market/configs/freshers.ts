import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const freshersConfig: ScenarioConfig = {
  pageKey: "kinly_market_freshers",
  recognition: {
    heading: "Someone always ends up running the flat. Is it you?",
    subtitle: "You barely know each other yet — but somehow you are the one keeping things together.",
    body: "Kinly makes the flat baseline visible so no one person has to remember everything.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For first-year flats, it keeps expectations visible so you can set them once and refer back later without turning your place into a chore chart.",
  hero: {
    headline: "Your flat should not depend on one person's memory.",
    subhead: "See what the flat needs before someone has to chase everyone.",
    body: "Late labs, early lectures, and new roommates are messy. Kinly shows what the flat needs so nobody has to be the flat manager.",
    ctaHeading: "Give the flat a shared memory",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Quiet hours for exam weeks, bins before pickup, who is hosting tonight.",
      footer: "Things to do and notice without blame.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Swap turns without awkwardness",
      copy: "If someone is on a late shift or out of cash this week, reassign quietly.",
      footer: "You are always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "House rules everyone sees",
      copy: "Quiet hours, guests, cleaning standards, and shared costs in one calm place.",
      footer: "No surprises, no chore charts.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep move-in basics and weekly routines visible so new housemates know the baseline.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared food expectations before busy campus days so shopping stays fair.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs clear by week so tight budgets stay predictable.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use short weekly check-ins to reset after exam weeks or schedule chaos.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "Someone had to make the cleaning rota. There was no system, so it ended up being me.",
    "Quiet hours during exams — everyone wants them, but nobody made them visible.",
    "I know when the bins go out. That knowledge should not live in one person's head.",
    "We all want the flat to work. We just need a shared way to see what it needs.",
  ],
  rolePoints: [
    "Makes the flat baseline visible before conflict starts.",
    "Keeps expectations easy to check - no points, no leaderboards.",
  ],
  formingPoints: [
    "New flatmates come and go. Kinly keeps the baseline clear.",
    "Late nights, early mornings, and tight weeks are normal, not failures.",
  ],
  audience: ["First-year uni flats and dorm suites.", "Shared rentals near campus.", "Roommates who want calm, not drama."],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning your flat into a task system.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
