import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner",

  recognition: {
    heading: "Tired of explaining the same house rules to every new guest?",
    subtitle: "You have said it all before — but nobody remembers unless you repeat it.",
    body: "Kinly keeps house expectations visible so you do not have to be the one who reminds everyone.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It keeps homestay expectations clear and calm without turning hosting into rule enforcement.",

  hero: {
    headline: "Explain it once. Kinly remembers for every guest after.",
    subhead: "Your house rules stay visible — so you stop repeating yourself.",
    body: "Kinly shows guests and residents the same expectations for noise, shared spaces, and contributions — without you having to say it again.",
    ctaHeading: "Stop repeating yourself",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Welcome",
      headline: "What guests should know now",
      copy: "Quiet hours, shared spaces, and today's simple asks.",
      footer: "Clarity keeps the welcome warm.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update norms without tension",
      copy: "Tweak house rules or hosting notes as guests change.",
      footer: "One place to keep everyone aligned.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for hosts and guests",
      copy: "Noise, guests, cleaning standards, and shared costs visible to all.",
      footer: "Welcoming, not policing.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit:
        "Keep hosting routines and house norms visible so guests understand the baseline from day one.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared kitchen and supply expectations so requests stay simple.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared contributions clear so conversations stay fair and warm.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to reset small friction early.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I have explained the same rules to five different guests this year.",
    "I remember every preference and boundary. They forget by day two.",
    "I do not want to chase people for shared costs. I just want it written down.",
  ],

  rolePoints: [
    "Keeps expectations visible so you are not the enforcer.",
    "Gives guests a calm reference without formal rules.",
  ],

  formingPoints: [
    "Guests change; the baseline stays clear.",
    "If something slips, you reset next week without awkwardness.",
  ],

  audience: [
    "Homestay owners and hosts who want calm clarity.",
    "Households hosting guests while living together.",
  ],

  notList: [
    "Not a surveillance tool.",
    "Not a legal contract.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday friction, without turning hosting into a task system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};

