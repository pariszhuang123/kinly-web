import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHelperOnboardingConfig: ScenarioConfig = {
  pageKey: "sg_helper_onboarding",

  recognition: {
    heading: "Your home runs on hundreds of small routines. They are invisible until you try to explain them to someone new.",
    subtitle: "A new helper cannot learn your household from conversations alone — there is too much to remember.",
    body: "Kinly puts your home routines in one visible place so your new helper has a reference from day one — not just your memory.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. For Singapore homes welcoming a new helper, it keeps household routines and expectations visible — so onboarding is calm and complete.",

  hero: {
    headline: "Write it down once. Your new helper can check it anytime.",
    subhead: "A visible baseline means fewer repeated explanations in the first weeks.",
    body: "Kinly keeps cleaning routines, kitchen preferences, shopping notes, and house rules in one place. Your helper can check instead of ask — and you can stop repeating yourself.",
    ctaHeading: "Give your helper a visible starting point",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "What the home needs today",
      copy: "Daily routines, shopping notes, and small reminders — all checkable.",
      footer: "Less guessing. Less asking. Less repeating.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Keep routines current as they settle in",
      copy: "Update cleaning, kitchen, or shopping routines as your helper learns the home.",
      footer: "Simple adjustments. No awkward corrections.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "One shared reference for the home",
      copy: "Routines, preferences, and house rules your helper can check from day one.",
      footer: "Everything in one place. Nothing lost in conversation.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household routines are visible and checkable — so your helper can refer back without asking again.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping preferences and supply notes in one place — so the right things come home.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases and costs are tracked — clear context for both sides.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Catch small misunderstandings early — before they become patterns.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "There are hundreds of small routines in this home. I cannot explain them all in the first week.",
    "My previous helper knew everything. Now I realise none of it was written down.",
    "I want my new helper to feel confident — not constantly checking with me.",
  ],

  rolePoints: [
    "Gives your new helper a visible reference instead of relying on memory and repetition.",
    "Makes onboarding calmer for both of you — expectations are clear from day one.",
  ],

  formingPoints: [
    "The first weeks are the hardest. A visible baseline makes them smoother.",
    "As your helper settles in, routines evolve together — and the reference stays current.",
  ],

  audience: [
    "Singapore households welcoming a new helper.",
    "Families where a previous helper left and the household knowledge left with them.",
  ],

  notList: [
    "Not surveillance or monitoring software.",
    "Not a performance tracker.",
    "Not a punishment system.",
    "Not a replacement for conversation — just a foundation for it.",
  ],

  toolsIntro:
    "Once expectations are visible, Kinly adds simple tools that help the household settle in — without turning the home into a command system.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: visible onboarding",
    formingHeading: "As your helper settles in",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
