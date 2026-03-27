import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const lowTalkConfig: ScenarioConfig = {
  pageKey: "kinly_market_low_talk",
  recognition: {
    heading: "You all live here. Nobody wants to be the one who brings it up.",
    subtitle: "Everyone sees the same problems. Nobody says anything. The house stays broken because speaking up feels worse than the problem itself.",
    body: "Kinly makes what the home needs visible so the issue gets addressed — without anyone having to be the person who said it.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For homes where silence is easier than confrontation, it surfaces what needs attention so nobody has to break the quiet.",
  hero: {
    headline: "The house stays broken because nobody wants to say it.",
    subhead: "You all see the same problems. The cost of raising them feels higher than the cost of living with them.",
    body: "Kinly makes what needs attention visible so the house can address problems without anyone having to be the one who speaks first.",
    ctaHeading: "Let the house say what nobody will",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What everyone already sees",
      copy: "The issues that nobody mentions — noise, guests, overdue resets — surfaced without anyone having to raise them.",
      footer: "Visible problems do not need a spokesperson.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Fix things without the conversation",
      copy: "Shift turns or pause a task when someone is stretched — no guilt trips, no awkward ask.",
      footer: "Adjustments happen. Nobody had to bring it up.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "The thing nobody had to say out loud",
      copy: "Quiet hours, guest norms, and shared expectations — written down so silence does not mean acceptance.",
      footer: "Clarity without confrontation.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring responsibilities visible so problems surface without someone having to point them out.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Surface what is needed in one place so nobody has to be the one who asks.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs visible so fairness does not depend on someone being willing to say it.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use short weekly check-ins to surface what everyone already notices but nobody mentions.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I noticed the issue. I do not want to be the one who says something. Again.",
    "If nobody brings it up, it just stays broken.",
    "Everyone sees the same problem. We are all waiting for someone else to say it first.",
  ],
  rolePoints: [
    "Surfaces what needs attention so nobody has to be the one who raises it.",
    "Keeps the house fair without anyone having to call someone out.",
  ],
  formingPoints: [
    "People move in and out — Kinly keeps expectations visible regardless.",
    "Busy weeks happen. Problems get surfaced, not buried in silence.",
  ],
  audience: [
    "Households where everyone sees the problem but nobody speaks.",
    "Sharers who would rather fix things quietly than have the conversation.",
  ],
  notList: ["Not a scoreboard.", "Not policing.", "Not a nagging tool."],
  toolsIntro:
    "Once what needs attention is visible, Kinly offers simple tools to act on it — without turning shared living into a confrontation.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
