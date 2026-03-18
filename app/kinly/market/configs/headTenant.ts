import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const headTenantConfig: ScenarioConfig = {
  pageKey: "head_tenant_shared_responsibility",

  recognition: {
    heading: "You are the one who remembers everything — and nobody asked you to be.",
    subtitle: "If you stop reminding, things slip. If you keep going, people resent you.",
    body: "Kinly keeps house rules, tasks, and reminders in one place so the flat does not depend on your memory.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. It keeps house rules, tasks, and shared reminders in one place so you do not have to carry the flat on your own.",

  hero: {
    headline: "Put what you carry in your head somewhere everyone can see.",
    subhead: "Share the load without sounding like the boss.",
    body: "Kinly keeps house rules, tasks, and reminders visible so the flat stops depending on your memory.",
    ctaHeading: "Stop being the flat's memory",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Today",
      headline: "See what needs attention",
      copy: "Shared spaces, small tasks, and the things people forget.",
      footer: "Less chasing. Less resentment.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Write things down once",
      copy: "Keep house rules and shared jobs clear so one person is not always reminding everyone.",
      footer: "Clear rules. Less tension.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Keep everything in one place",
      copy: "House rules, shared costs, chores, and reminders in one simple view.",
      footer: "Everyone sees the same thing.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep jobs visible so one person is not stuck carrying everything.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make shared shopping needs clear so you do not need to keep reminding people.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs visible so money talks stay simple and clear.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Fix small issues early before they turn into flat tension.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "If I stop reminding people, things fall apart.",
    "I remember every bill date, every bin night, every rule we set.",
    "I want the flat to run without me carrying it all in my head.",
  ],

  rolePoints: [
    "Keeps house rules and shared jobs visible for everyone.",
    "Reduces the need for one person to keep chasing the flat.",
  ],

  formingPoints: [
    "Flat dynamics change, but the rules stay clear.",
    "Shared responsibility works better when everything is written down.",
  ],

  audience: [
    "Head tenants who keep the flat running.",
    "People doing the house admin no one else wants to do.",
  ],

  notList: [
    "Not surveillance.",
    "Not a reporting tool.",
    "Not a punishment system.",
    "Not landlord-facing.",
  ],

  toolsIntro:
    "Once house rules are clear, Kinly adds simple tools that make shared living easier every day.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
