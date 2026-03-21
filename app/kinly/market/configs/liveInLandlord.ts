import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord",

  recognition: {
    heading: "The house rules exist — but only in your head.",
    subtitle: "You live here too. The expectations should be visible to everyone, not carried by one person.",
    body: "Kinly puts house rules in one shared place so everyone can see them — and you can stop repeating yourself.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. It keeps house rules, routines, and shared expectations visible to everyone — so the home runs on a shared system, not on one person's memory.",

  hero: {
    headline: "Write the rules down once. Everyone sees them.",
    subhead: "When house rules are visible, people follow them without being reminded.",
    body: "Kinly shows the same house rules to you and your tenants. The expectations are clear, so conversations stay calm and nobody has to chase anyone.",
    ctaHeading: "Give the home a shared reference",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "See what needs attention today",
      copy: "Quiet hours, shared spaces, and small reminders.",
      footer: "Clear without confrontation.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Update rules",
      headline: "Change house rules easily",
      copy: "Adjust rules when schedules or tenants change.",
      footer: "Simple updates. Everyone stays aligned.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House rules",
      headline: "Keep house rules in one place",
      copy: "Noise, guests, cleaning, and shared costs.",
      footer: "Everyone sees the same rules.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep shared space routines visible for everyone.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make kitchen expectations clear and shared.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs simple and visible for everyone.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small things surface early — before they grow into problems.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "The rules are clear to me — but they were never written down for anyone else.",
    "I live here too. I should not have to carry every house rule in my head.",
    "It is not that they do not care. They just cannot see what I see.",
  ],

  rolePoints: [
    "Keeps house rules visible for everyone — not just the person who set them.",
    "Reduces awkward reminders by making expectations shared.",
  ],

  formingPoints: [
    "Tenants may change, but house rules stay visible.",
    "If something drifts, the weekly check-in resets it calmly.",
  ],

  audience: [
    "Live-in landlords sharing their home with tenants.",
    "Resident owners who want visible shared expectations.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once house rules are visible, Kinly adds simple tools that make shared living easier for everyone.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
