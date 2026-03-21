import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyAdultsConfig: ScenarioConfig = {
  pageKey: "family_adults",

  recognition: {
    heading: "Everyone lives here. But nobody made the expectations visible.",
    subtitle: "It is not that they do not care — it is that the household runs on systems nobody wrote down.",
    body: "Kinly gives your household a shared structure so contributions and expectations are clear — without anyone having to be the one who brings it up.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. It keeps household expectations neutral and visible — so everyone can see what the home needs and contribute as adults.",

  hero: {
    headline: "Make the household work like adults sharing a home.",
    subhead: "Clear expectations. No awkward conversations. No pulling rank.",
    body: "Kinly shows the same household expectations to every member — bills, routines, groceries, and shared space norms. Everyone sees the same thing. Everyone can step up.",
    ctaHeading: "Give the home a shared structure",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What the home needs today",
      copy: "Bills, shared space, and small contributions — visible to every adult.",
      footer: "No one has to ask. No one has to guess.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update expectations as things change",
      copy: "Someone starts working. Someone is between jobs. Life shifts. The home adapts.",
      footer: "Fair adjustments. No confrontation.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared reference",
      headline: "One place for how the household works",
      copy: "Bills, cleaning, groceries, noise, and shared costs.",
      footer: "Neutral and visible to everyone.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household responsibilities are visible. Everyone can see what needs doing.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shared supplies are tracked. Everyone knows what is needed.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Financial contributions are visible. Clear and fair for everyone.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small things surface early — before they become tension.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Nobody is being difficult. The expectations were just never written down.",
    "Everyone assumes the home runs itself. It does not — one person carries it.",
    "We are all adults here. We just need a shared view of what the home needs.",
  ],

  rolePoints: [
    "Provides a neutral shared structure — not parent rules, but household expectations.",
    "Everyone sees the same thing. Contributions are visible without anyone having to ask.",
  ],

  formingPoints: [
    "Someone moves out. Someone moves back. The structure adapts without drama.",
    "If contributions drift, the check-in resets things calmly.",
  ],

  audience: [
    "Families with adult children sharing a home.",
    "Multi-generational households where everyone contributes.",
  ],

  notList: [
    "Not parent rules dressed up as an app.",
    "Not surveillance or monitoring.",
    "Not about proving who does more.",
    "Not a confrontation tool.",
  ],

  toolsIntro:
    "Once expectations are shared, Kinly adds simple tools so the household runs like adults sharing a home — because that is what it is.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: neutral shared structure",
    formingHeading: "When the household changes",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
