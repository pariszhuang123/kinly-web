import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const freshersConfig: ScenarioConfig = {
  pageKey: "kinly_market_freshers",
  recognition: {
    heading: "You got put together three weeks ago. Nobody said how this is supposed to work.",
    subtitle: "You chose uni. You did not choose these people. And nobody gave you a framework for sharing a home with them.",
    body: "Kinly gives your flat a shared baseline so you are not inventing the rules from scratch while also figuring out everything else.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For first-year flats, it fills the gap between being placed together and knowing how to actually live together.",
  hero: {
    headline: "You are living with strangers. Nobody explained how.",
    subhead: "You were assigned a flat. You were not given a way to run it.",
    body: "Late labs, early lectures, and people you met last month. Kinly gives your flat a structure so you do not have to invent one while everything else is already overwhelming.",
    ctaHeading: "Give your flat a starting point",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What the flat needs today",
      copy: "Quiet hours for exam weeks, bins before pickup, who is hosting tonight — visible without anyone having to ask.",
      footer: "Structure you were never given, without the awkwardness.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Switch",
      headline: "Adjust without the awkward conversation",
      copy: "If someone is on a late shift or out of cash this week, reassign quietly — no guilt, no confrontation.",
      footer: "Flexibility for people still learning how to share space.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "The framework nobody provided",
      copy: "Quiet hours, guests, cleaning, and shared costs — the basics you were expected to figure out alone.",
      footer: "A starting point, not a rulebook.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Give move-in basics and weekly routines a structure so nobody has to invent one from nothing.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Set shared food expectations early so shopping does not become a source of resentment.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs visible by week so tight budgets do not turn into silent tension.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use short weekly check-ins to surface problems before they become the thing nobody talks about.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "Someone had to make the cleaning rota. There was no system, so it ended up being me.",
    "We all want the flat to work. We just never agreed on what that looks like.",
    "Nobody told us how to share a kitchen, a bathroom, or a living room. We are just guessing.",
    "I do not know these people well enough to have the hard conversations yet.",
  ],
  rolePoints: [
    "Gives the flat a framework before anyone has to improvise one.",
    "Keeps expectations visible so new housemates do not have to guess.",
  ],
  formingPoints: [
    "New flatmates come and go. The baseline stays even when the people change.",
    "Late nights, early mornings, and tight weeks are normal — not reasons for conflict.",
  ],
  audience: ["First-year uni flats and dorm suites.", "Shared rentals near campus.", "Roommates thrown together without a playbook."],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  toolsIntro:
    "Once your flat has a shared baseline, Kinly offers simple tools that keep it working — without turning your home into a task system.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
