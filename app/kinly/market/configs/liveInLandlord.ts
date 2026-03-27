import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord",

  recognition: {
    heading: "You opened your home to someone. Now you cannot relax in it.",
    subtitle: "The rules were obvious to you. You never said them out loud. Now everything feels tense.",
    body: "Kinly makes the expectations you assumed were obvious into something everyone can actually see — so you stop carrying it alone.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. You agreed to share your home — Kinly helps you agree on how. House rules, routines, and shared expectations in one place so the home stays yours without the tension.",

  hero: {
    headline: "You agreed to share your home. You never agreed on how.",
    subhead: "The things that bother you were never said out loud. That is where the tension starts.",
    body: "Kinly puts the unspoken rules into one shared place. Your tenants see the same expectations you do — so you stop repeating yourself and start feeling at home again.",
    ctaHeading: "Say it once. Everyone sees it.",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "See what was supposed to happen today",
      copy: "Quiet hours, shared spaces, and the things nobody remembered.",
      footer: "No chasing. No confrontation.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Update rules",
      headline: "Change the rules when life changes",
      copy: "New tenant, new schedule, new arrangement — update once, everyone sees it.",
      footer: "Your home, your rules. Still visible.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House rules",
      headline: "Everything you assumed was obvious — written down",
      copy: "Noise, guests, cleaning, and shared costs in one place.",
      footer: "No more hoping they just know.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Make shared space routines visible so you are not the only one who notices.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Kitchen expectations stop being a guessing game.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Shared costs stay simple so money never becomes the awkward conversation.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small frustrations surface early — before they become resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I opened my home to someone. Now I feel like a guest in it.",
    "The rules were obvious to me. I never said them out loud. Now everything is tense.",
    "We agreed to live together — but we never agreed on how.",
  ],

  rolePoints: [
    "Makes the rules you assumed were obvious into something everyone can see.",
    "Reduces the tension of repeating yourself by making expectations shared.",
  ],

  formingPoints: [
    "Tenants change, but the way your home works stays written down.",
    "If things drift, the weekly check-in surfaces it before it becomes resentment.",
  ],

  audience: [
    "Live-in landlords who opened their home and lost the peace that came with it.",
    "Resident owners who want shared expectations without awkward confrontation.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard.",
    "Not a way to control people.",
  ],

  toolsIntro:
    "Once the unspoken rules are finally said, Kinly adds simple tools that keep shared living working day to day.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
