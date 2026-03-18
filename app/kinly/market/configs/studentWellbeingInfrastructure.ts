import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const studentWellbeingInfrastructureConfig: ScenarioConfig = {
  pageKey: "student_wellbeing_infrastructure",

  recognition: {
    heading: "You keep checking in on every room. Nobody should have to hold that much in their head.",
    subtitle: "When one person is the only one noticing tension, support starts to feel lonely.",
    body: "Kinly keeps shared expectations visible so the house can rely less on one person's memory and more on a calm shared baseline.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps expectations visible and calm so support does not depend on one person repeating the same reminders.",

  hero: {
    headline: "Support lands better when the house can see the baseline for itself.",
    subhead: "Shared visibility lowers the need for constant check-ins, repeated reminders, and awkward follow-ups.",
    body: "Kinly makes quiet hours, shared-space expectations, and weekly resets visible so care feels shared instead of carried by one resident lead.",
    ctaHeading: "Share the load across the house",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signals",
      headline: "What the house needs now",
      copy: "Quiet hours, shared spaces, and small resets the house can notice without waiting for another reminder.",
      footer: "Calm support, no pressure.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update the baseline when the house shifts",
      copy: "Adjust noise, guests, or cleaning expectations as residents change so nobody has to repeat the same conversation room by room.",
      footer: "Shared context, no singling out.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for everyone",
      copy: "Noise, guests, shared expectations, and weekly reset points in one place, without scores or surveillance vibes.",
      footer: "Care made visible, not monitored.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep shared routines visible with context so residents can refer back instead of waiting to be reminded.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Keep shared supplies visible in one place so contribution feels easy and does not depend on one person chasing.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent with simple context so fairness stays clear without repeated money conversations.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to surface pressure early so support happens before tension turns into another difficult follow-up.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I keep checking in room by room because if I do not, small issues sit there.",
    "I do not want support to depend on me remembering every tension point.",
    "If the house could see the baseline clearly, I would not need to repeat the same reminders.",
  ],

  rolePoints: [
    "Keeps expectations visible without turning care into monitoring.",
    "Reduces the need for one person to carry every reminder and follow-up.",
  ],

  formingPoints: [
    "Cohorts change, but the baseline stays visible.",
    "If things drift, the house can reset next week without blame or public call-outs.",
  ],

  audience: [
    "Resident leads carrying the emotional load of shared living across a student home.",
    "Student homes that want calm visibility before tension grows.",
  ],

  notList: [
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
    "Not a reporting tool.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning student wellbeing into monitoring.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
