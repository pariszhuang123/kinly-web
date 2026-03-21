import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "Everyone in the family gives different instructions. Your helper has no single source of truth.",
    subtitle: "It is not that your helper is confused — it is that the household has no shared reference.",
    body: "Kinly puts household expectations in one visible place so every family member and your helper see the same thing.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. In Singapore homes with a helper and multiple family members, it keeps expectations in one shared place — so instructions are consistent and clear.",

  hero: {
    headline: "One household. One shared reference. No conflicting instructions.",
    subhead: "When everyone sees the same expectations, the home runs calmer for everyone — including your helper.",
    body: "Kinly keeps cleaning routines, kitchen preferences, shopping notes, and house rules visible to all. Your helper checks one reference — not three different people with three different answers.",
    ctaHeading: "Give your home one shared baseline",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "What the home needs today",
      copy: "Daily routines and expectations — the same view for every family member and your helper.",
      footer: "One source. No conflicting instructions.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Update expectations in one place",
      copy: "When something changes, update it once. Everyone sees the change — including your helper.",
      footer: "Consistent expectations. No mixed signals.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "One shared reference for the whole household",
      copy: "Routines, preferences, and house rules — agreed once, visible to all.",
      footer: "Your helper checks here. Not three different people.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household routines are defined once — so your helper follows one set of expectations, not three.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping and kitchen expectations are shared — so preferences are clear without conflicting requests.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases have shared context — so everyone is aligned on what was bought and why.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Surface small misalignments early — before they become frustration for anyone.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Mum says one thing. Grandma says another. My helper does not know whose instructions to follow.",
    "We all have different standards — but we never sat down and agreed on one baseline.",
    "It is not fair to our helper. She gets different instructions from different people every day.",
  ],

  rolePoints: [
    "Gives the whole household one shared reference — so instructions are consistent.",
    "Your helper follows one baseline, not conflicting directions from multiple family members.",
  ],

  formingPoints: [
    "Family dynamics shift — someone travels, grandparents visit, routines change. The reference stays current.",
    "Weekly check-ins keep the household aligned so small conflicts do not build up.",
  ],

  audience: [
    "Singapore households where multiple family members give instructions to a helper.",
    "Multi-generational homes that need one consistent household baseline.",
  ],

  notList: [
    "Not surveillance.",
    "Not employee monitoring software.",
    "Not a punishment system.",
    "Not a scorecard.",
  ],

  toolsIntro:
    "Once the household has one shared baseline, Kinly adds simple tools that keep everyone aligned — without turning the home into a command system.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: one shared baseline",
    formingHeading: "When the household shifts",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
