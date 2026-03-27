import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const headTenantConfig: ScenarioConfig = {
  pageKey: "head_tenant_shared_responsibility",

  recognition: {
    heading: "You all agreed to live together. Nobody agreed on how.",
    subtitle: "Now the bin is full, the dishes are piling up, and you are the only one who seems to notice.",
    body: "Kinly makes the things you assumed everyone understood into something everyone can actually see — so the flat stops running on your patience.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. You chose to live together — Kinly helps you figure out how. House rules, tasks, and shared expectations in one place so the flat runs on a system, not on one person.",

  hero: {
    headline: "You chose to live together. You never figured out how.",
    subhead: "That is why the same things keep bothering you and nobody else seems to care.",
    body: "Kinly puts the unspoken expectations into one shared place. Everyone sees the same rules, the same tasks, the same reminders — so you stop being the person who carries it all.",
    ctaHeading: "Say it once. The flat sees it.",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Today",
      headline: "See what everyone was supposed to do today",
      copy: "Shared spaces, small tasks, and the things nobody remembered.",
      footer: "No chasing. No resentment.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Write it down once so you never have to say it again",
      copy: "House rules and shared jobs — visible to everyone, not stuck in your head.",
      footer: "Clear rules. No repeating yourself.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "Everything the flat assumes you will remember — written down",
      copy: "House rules, shared costs, chores, and reminders in one simple view.",
      footer: "No more hoping they just know.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Make jobs visible so you are not the only one who notices what needs doing.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shared shopping stops being your responsibility to track.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Shared costs stay clear so money never becomes the thing nobody talks about.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small frustrations surface early — before they turn into flat resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "We all chose to live here. I am the only one who seems to run it.",
    "Every bin night, every bill, every awkward conversation — it is all on me.",
    "We agreed to share the flat — but we never agreed on how.",
  ],

  rolePoints: [
    "Makes the things you carry alone into something the whole flat can see.",
    "Shared responsibility starts when everyone sees what the home actually needs.",
  ],

  formingPoints: [
    "Flatmates change, but the way the flat works stays written down.",
    "If things drift, the weekly check-in catches it before it becomes resentment.",
  ],

  audience: [
    "Head tenants who chose to share a flat and ended up managing it alone.",
    "Flats that agreed to live together but never agreed on how.",
  ],

  notList: [
    "Not surveillance.",
    "Not a reporting tool.",
    "Not a punishment system.",
    "Not a way to boss people around.",
  ],

  toolsIntro:
    "Once the flat's unspoken rules are finally shared, Kinly adds simple tools that keep things working day to day.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
