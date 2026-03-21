import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const flatAgreementsConfig: ScenarioConfig = {
  pageKey: "flat_agreements",

  recognition: {
    heading: "The flat agreed on things once. But the agreements were never visible.",
    subtitle: "It is not that people forgot — it is that the rules only existed in one conversation.",
    body: "Kinly keeps housemate agreements visible so everyone can check what was agreed — without anyone having to remember it all.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps agreements visible and calm without turning your shared home into contract talk.",

  hero: {
    headline: "Stop carrying the flat in your head.",
    subhead: "One place for house norms, shared costs, and expectations — so you are not the only one who knows.",
    body: "Kinly lets housemates see the same baseline for noise, guests, cleaning, and shared costs — without relying on one person to remember it all.",
    ctaHeading: "Let the flat remember for itself",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs attention",
      copy: "Noise, guests, shared chores and quick resets ,without sounding bossy.",
      footer: "Clear signals, no policing.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Keep agreements current",
      copy: "Tweak quiet hours, guest rules, or cleaning standards as people and routines change.",
      footer: "Everyone stays aligned, nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference",
      copy: "Noise, guests, bills, and cleaning expectations in one place ,no group-chat essays.",
      footer: "Shared clarity, human tone.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring standards visible so agreements stay clear without reminders.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared shopping expectations so everyone sees the same baseline.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so fairness stays calm.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset guests, noise, or cleaning expectations before friction grows.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "We agreed on the rules once. But nobody wrote them down.",
    "The guest rules exist — they are just not visible to everyone.",
    "Nobody wants to be the one who brings things up. So nobody does.",
  ],

  rolePoints: [
    "Keeps agreements visible without turning anyone into the enforcer.",
    "Makes adjustments easy when people and routines change.",
  ],

  formingPoints: [
    "New housemates can see the baseline on day one.",
    "If it drifts, you reset next week without blame.",
  ],

  audience: [
    "Housemates aligning home norms without heavy paperwork.",
    "Groups who want clarity on guests/noise/cleaning without policing.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning shared living into a task system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
