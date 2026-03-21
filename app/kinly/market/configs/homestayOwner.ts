import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner",

  recognition: {
    heading: "Every guest is new to your home. The expectations should not have to be.",
    subtitle: "You have explained it all before — but every guest starts from zero.",
    body: "Kinly keeps house expectations in one visible place so every guest arrives to the same clear baseline — without you having to repeat yourself.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For homestays, it keeps expectations visible and warm — so hosting stays welcoming without turning into rule enforcement.",

  hero: {
    headline: "Explain it once. Every guest sees the same thing.",
    subhead: "Your house expectations stay visible — so the welcome stays warm.",
    body: "Kinly shows guests and residents the same baseline for noise, shared spaces, and contributions. The expectations are always there — calm, clear, and consistent.",
    ctaHeading: "Give your home a visible welcome",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Welcome",
      headline: "What guests should know now",
      copy: "Quiet hours, shared spaces, and today's simple asks.",
      footer: "Clarity keeps the welcome warm.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update norms without tension",
      copy: "Tweak house rules or hosting notes as guests change.",
      footer: "One place to keep everyone aligned.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference for hosts and guests",
      copy: "Noise, guests, cleaning standards, and shared costs visible to all.",
      footer: "Welcoming, not policing.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep hosting routines visible so every guest understands the baseline from day one.",
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
      benefit: "Weekly check-ins catch small things early — keeping the hosting relationship warm.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Every new guest starts from zero. The expectations need a home, not just a conversation.",
    "I want hosting to feel warm — not like I am reading out a rulebook every time.",
    "The house runs well when everyone can see how it works. That should not depend on me explaining it.",
  ],

  rolePoints: [
    "Keeps expectations visible so hosting stays welcoming, not enforcing.",
    "Gives every guest the same calm baseline from day one.",
  ],

  formingPoints: [
    "Guests change. The baseline stays visible and consistent.",
    "If something slips, the check-in resets it warmly — no awkwardness.",
  ],

  audience: [
    "Homestay owners who want calm, visible expectations.",
    "Households hosting guests while living together.",
  ],

  notList: [
    "Not a surveillance tool.",
    "Not a legal contract.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once expectations are visible, Kinly offers simple tools that reduce everyday friction — keeping hosting warm without turning it into a task system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
