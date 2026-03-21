import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const headTenantConfig: ScenarioConfig = {
  pageKey: "head_tenant_shared_responsibility",

  recognition: {
    heading: "The flat runs on systems only you can see.",
    subtitle: "It is not that nobody cares — it is that the expectations were never made visible.",
    body: "Kinly keeps house rules, tasks, and reminders in one shared place so the flat stops depending on one person's memory.",
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
    "The flat works because I carry it in my head. That is not sustainable.",
    "Every bill date, every bin night, every rule — it is all invisible to everyone but me.",
    "I want the flat to run on a shared system, not on my memory.",
  ],

  rolePoints: [
    "Makes the flat's invisible systems visible to everyone.",
    "Shared responsibility works when everyone can see what the home needs.",
  ],

  formingPoints: [
    "Flat dynamics change, but the rules stay clear.",
    "Shared responsibility works better when everything is written down.",
  ],

  audience: [
    "Head tenants carrying the flat's invisible admin.",
    "Flats that want shared responsibility, not one person managing everything.",
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
