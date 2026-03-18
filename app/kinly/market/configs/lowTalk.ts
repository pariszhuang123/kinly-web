import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const lowTalkConfig: ScenarioConfig = {
  pageKey: "kinly_market_low_talk",
  recognition: {
    heading: "You would rather the house just worked — without another group chat essay.",
    subtitle: "Nobody wants to nag. Nobody wants to be nagged. But someone always ends up doing it.",
    body: "Kinly keeps what the home needs visible so nobody has to be the one who remembers — or the one who reminds.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For low-talk homes, it keeps expectations clear without forcing group chats or sit-down talks.",
  hero: {
    headline: "The house stays aligned — without anyone having to say it.",
    subhead: "See what needs doing and what can wait. No group chat. No awkward reminder.",
    body: "Kinly keeps what matters visible so nobody has to remember or be the one who brings it up.",
    ctaHeading: "Let the house speak for itself",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Signal",
      headline: "What needs attention now",
      copy: "Light-touch cues for noise, guests, or a quick reset before the day starts.",
      footer: "Actionable without turning into a meeting.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Tweak without debate",
      copy: "Shift turns or pause a task when someone is slammed - no guilt trips.",
      footer: "Everyone stays informed without reminders.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "Shared clarity in one place",
      copy: "Quiet hours, guest signals, and quick norms that keep the vibe steady.",
      footer: "Signals stay visible; no speeches required.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring tasks clear so signals replace long explanations.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Surface what is needed in one place so shopping stays coordinated.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs clear so fairness stays visible without call-outs.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use short weekly check-ins to surface concerns early.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I noticed the issue but I do not want to be the one who says something. Again.",
    "If nobody brings it up, it just... stays broken.",
    "I would rather the house showed me what needs doing than wait for a group meeting.",
  ],
  rolePoints: [
    "Surfaces what matters with gentle signals, not speeches.",
    "Keeps plans fair without blame, scoreboards, or guilt.",
  ],
  formingPoints: [
    "People move in and out - Kinly keeps shared signals steady.",
    "Busy weeks happen. Pausing tasks is normal, not a failure.",
  ],
  audience: [
    "Households that want calm clarity without long conversations.",
    "Busy sharers who prefer signals over reminders.",
  ],
  notList: ["Not a scoreboard.", "Not policing.", "Not a nagging tool."],
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning shared living into a task system.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
