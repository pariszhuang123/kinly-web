import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "You should not have to repeat the same house instructions every week.",
    subtitle: "Many home tensions start when standards are assumed, not written down.",
    body: "Kinly helps make routines, preferences, and boundaries visible in one shared place so fewer things are forgotten, misunderstood, or taken personally.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared home app for people living together. For Singapore homes with helpers, it gives everyone one clear reference point for routines, expectations, and household coordination so the home can run more smoothly with less repeated explaining.",

  hero: {
    headline: "Explain house standards once. Kinly remembers them.",
    subhead: "Reduce repeated instructions, avoidable mistakes, and everyday tension at home.",
    body: "When routines and expectations live in one shared place, it becomes easier to refer back, reset calmly, and keep the household running without turning every correction into a personal confrontation.",
    ctaHeading: "Set clearer house standards",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily clarity",
      headline: "See what needs attention before frustration builds",
      copy: "Keep daily routines, reminders, and shared household needs visible in one place.",
      footer: "Fewer missed steps. Less repeated reminding.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House standards",
      headline: "Write down expectations instead of repeating them",
      copy: "Capture recurring instructions and household preferences once so people can refer back instead of guessing.",
      footer: "Clearer standards. Fewer avoidable mistakes.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared reference",
      headline: "Keep routines, boundaries, and household info in one place",
      copy: "Use one shared reference point for how the home works, what matters, and how things should be done.",
      footer: "Less confusion. More consistency.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring routines visible so household standards are easier to follow without constant reminding.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Make supply expectations clear so household requests stay simple, practical, and easier to act on.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep household costs and due items visible so coordination stays factual and organized.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Create a simple rhythm to catch misalignment early before small frustrations harden into repeated conflict.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I keep repeating the same instructions.",
    "Standards exist, but they are not written down clearly.",
    "I want fewer misunderstandings at home.",
  ],

  rolePoints: [
    "Creates one clear reference point for routines, preferences, and boundaries.",
    "Helps reduce repeated explaining by making expectations easier to refer back to.",
  ],

  formingPoints: [
    "Household routines are easier to follow when expectations are visible, not implied.",
    "Small issues are easier to reset early when people can refer to shared standards.",
  ],

  audience: [
    "Singapore homes with helpers where expectations are often verbal, repeated, or assumed.",
    "Households that want smoother routines, fewer avoidable mistakes, and less tension around daily standards.",
  ],

  notList: [
    "Not surveillance.",
    "Not a punishment tool.",
    "Not a scorecard.",
    "Not a reporting system built around blame.",
  ],

  weekly: {
    intro: "Kinly uses a weekly rhythm so households can reset expectations before frustration keeps building.",
    points: [
      "Catch repeated friction before it turns into scolding or resentment.",
      "Refer back to shared expectations instead of relying only on memory.",
      "Keep the home running with more consistency and less emotional strain.",
    ],
  },

  toolsIntro:
    "Once expectations are clearer, Kinly adds simple household tools that reduce everyday friction without making the home feel like a workplace.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};