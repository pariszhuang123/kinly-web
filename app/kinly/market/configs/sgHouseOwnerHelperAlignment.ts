import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "You have explained it three times this week. She still forgot.",
    subtitle: "The problem is not people — it is that nothing is written down.",
    body: "Kinly keeps house rules and routines in one place so people can check instead of relying on your memory.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a simple home app. It keeps house rules, routines, and tasks in one place so everyone knows what to do.",

  hero: {
    headline: "Write it down once. She can check Kinly instead of asking you.",
    subhead: "Your routines stay clear — even when you are not there to explain.",
    body: "Kinly keeps house rules and instructions visible so she can check instead of relying on you.",
    ctaHeading: "Explain it once, for good",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "See what needs to be done today",
      copy: "Daily tasks and reminders in one simple view.",
      footer: "Less forgetting. Less reminding.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Write house instructions once",
      copy: "Save cleaning rules, cooking habits, and routines.",
      footer: "Clear rules. Fewer mistakes.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "Keep home information in one place",
      copy: "Store routines, house rules, and useful notes.",
      footer: "Simple and easy to check.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep routines clear so people know what to do.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Keep household items organised so nothing runs out.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Track home expenses so payments stay clear and simple.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Fix small problems early before they become bigger issues.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I explained the routine on Monday. By Wednesday she forgot.",
    "Everything is in my head. If I am not home, nobody knows what to do.",
    "I want the house to run even when I am not the one reminding her.",
  ],

  rolePoints: [
    "Keeps house rules and routines in one place.",
    "Helps people check instructions instead of guessing.",
  ],

  formingPoints: [
    "Homes run smoother when rules are written down.",
    "Clear routines reduce confusion and repeated reminders.",
  ],

  audience: [
    "Singapore homes with helpers.",
    "Households that want clearer rules and fewer mistakes.",
  ],

  notList: [
    "Not surveillance.",
    "Not employee monitoring.",
    "Not punishment.",
    "Not a scorecard.",
  ],

  toolsIntro:
    "Once house rules are clear, Kinly adds simple tools that make everyday home life easier.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
