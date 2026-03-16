import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const liveInLandlordConfig: ScenarioConfig = {
  pageKey: "live_in_landlord",

  recognition: {
    heading: "You live with your tenants. Clear house rules matter.",
    subtitle: "You want a calm home, not awkward conversations.",
    body: "Kinly keeps house rules and routines visible so everyone knows what is okay in the home.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app. It keeps house rules, routines, and shared expectations in one place so you don't need to repeat them.",

  hero: {
    headline: "A calmer home with your tenants.",
    subhead: "Clear rules for noise, guests, and shared spaces.",
    body: "Kinly shows the same house rules to you and your tenants so everyone understands how the home works.",
    ctaHeading: "Set house rules",
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
      footer: "Simple updates. No awkward talks.",
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
      benefit: "Keep shared space routines clear for everyone.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make kitchen expectations clear.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs simple and visible.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Fix small problems early before they grow.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I want clear rules without sounding like the boss.",
    "I live here too. The home should feel fair.",
    "Noise, guests, and cleaning should be clear.",
  ],

  rolePoints: [
    "Keeps house rules visible for everyone.",
    "Reduces awkward reminders and repeated talks.",
  ],

  formingPoints: [
    "Tenants may change, but house rules stay clear.",
    "If something drifts, you reset it next week.",
  ],

  audience: [
    "Live-in landlords.",
    "Resident owners sharing their home with tenants.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once house rules are clear, Kinly adds simple tools that make shared living easier.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },

  defaultLocale: "en",
};
