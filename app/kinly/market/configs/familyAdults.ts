import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyAdultsConfig: ScenarioConfig = {
  pageKey: "family_adults",

  recognition: {
    heading: "Everyone lives here as adults. Nobody agreed on what that means.",
    subtitle: "It is not that anyone is being difficult. You just never sat down and defined what contribution looks like.",
    body: "Kinly gives your household the conversation it skipped — what the home needs, who does what, and how it all stays fair — without anyone having to be the one who brings it up.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for households with adults under one roof. It replaces the agreement you never made with a shared structure everyone can see — so contribution is clear without anyone pulling rank.",

  hero: {
    headline: "You all live here as adults. Nobody defined what that means.",
    subhead: "The decision to share a home happened. The conversation about how never did.",
    body: "Kinly makes contributions, routines, and shared costs visible to every adult in the household — so nobody has to guess, nobody has to nag, and nobody has to pretend the home runs itself.",
    ctaHeading: "Have the conversation the home has been missing",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What the home needs today",
      copy: "Bills, shared space, and contributions — visible to every adult, not just the one who notices.",
      footer: "Nobody has to bring it up. It is already there.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Define what contribution looks like — together",
      copy: "Someone starts working. Someone is between jobs. The agreement updates without an awkward conversation.",
      footer: "Fair adjustments. No pulling rank.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared reference",
      headline: "The agreement the household never had — in one place",
      copy: "Bills, cleaning, groceries, noise, and shared costs — defined, not assumed.",
      footer: "Neutral ground. Visible to everyone.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household responsibilities are defined and visible — not assumed by default.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shared supplies are tracked. Nobody has to be the one who always notices.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Financial contributions are explicit. No silent scorekeeping.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small imbalances surface early — before they turn into resentment nobody mentions.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Nobody is being difficult. We just never sat down and said — this is how the home works now.",
    "Everyone lives here. Nobody agreed on what contributing actually means.",
    "The home runs because one person quietly decided it had to. That was never the plan.",
  ],

  rolePoints: [
    "Replaces the agreement you never made with a shared structure everyone can see.",
    "Contributions are defined, not assumed — so nobody has to nag and nobody has to guess.",
  ],

  formingPoints: [
    "Someone moves out. Someone moves back. The agreement updates without drama.",
    "If contributions drift, the check-in brings it back — calmly, as equals.",
  ],

  audience: [
    "Families with adult children who share a home but never agreed on how.",
    "Multi-generational households where contribution was assumed but never defined.",
  ],

  notList: [
    "Not parent rules dressed up as an app.",
    "Not surveillance or monitoring.",
    "Not about proving who does more.",
    "Not a confrontation tool — it is the conversation that replaces confrontation.",
  ],

  toolsIntro:
    "Once the household has a shared agreement, Kinly adds simple tools so the home runs the way adults sharing a space actually need it to.",

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
