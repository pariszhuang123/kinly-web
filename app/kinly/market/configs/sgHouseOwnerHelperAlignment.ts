import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "Everyone in the family gives different instructions. Your helper has no idea whose version to follow.",
    subtitle: "You all committed to living under one roof. But you never aligned on how the home actually runs — and your helper absorbs the cost.",
    body: "Kinly gives the household one shared reference so your helper stops navigating three sets of conflicting expectations every day.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. In multi-generational Singapore homes with a helper, it replaces conflicting verbal instructions with one visible, agreed baseline — so your helper has a single version of the truth.",

  hero: {
    headline: "Three people. Three sets of rules. Your helper follows whichever one came last.",
    subhead: "Everyone lives here. Everyone gives instructions. Nobody agreed on which ones count.",
    body: "Kinly puts cleaning routines, kitchen preferences, shopping notes, and house rules in one place the family agrees on. Your helper checks one reference — not three people who each think they are right.",
    ctaHeading: "Agree once. Stop contradicting each other.",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "One version of what the home needs today",
      copy: "Daily routines and expectations — agreed by the family, not handed down by whoever spoke last.",
      footer: "One truth. Not three competing ones.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Change expectations together, not separately",
      copy: "When something needs updating, the family agrees once. Your helper sees the change — not a new contradiction.",
      footer: "Aligned updates. No more mixed signals.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "The household's single version of the truth",
      copy: "Routines, preferences, and house rules — negotiated by the family, visible to your helper.",
      footer: "She checks here. Not three different people with three different answers.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household routines are agreed once by the family — so your helper follows one set of expectations, not whichever came last.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping and kitchen expectations are negotiated, not contradicted — so your helper stops getting caught between competing preferences.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases have one agreed context — so nobody blames the helper for following someone else's instruction.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Surface family misalignments before your helper has to choose sides again.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Mum says one thing. Grandma says another. My helper does not know whose instructions to follow.",
    "We all have different standards — but we never sat down and agreed on one.",
    "She is not doing it wrong. We are just telling her three different versions of right.",
  ],

  rolePoints: [
    "Forces the family to agree on one baseline — so the contradictions stop before they reach your helper.",
    "Your helper follows one shared reference instead of navigating conflicting instructions from every family member.",
  ],

  formingPoints: [
    "Family dynamics shift — someone travels, grandparents visit, priorities change. The agreed baseline adapts without creating new contradictions.",
    "Weekly check-ins surface where the family has drifted apart — so your helper does not have to absorb the misalignment.",
  ],

  audience: [
    "Multi-generational Singapore households where multiple family members give conflicting instructions to a helper.",
    "Homes where the helper absorbs the cost of a family that never aligned on how things should run.",
  ],

  notList: [
    "Not surveillance.",
    "Not employee monitoring software.",
    "Not a punishment system.",
    "Not a scorecard for the helper — the alignment problem belongs to the family.",
  ],

  toolsIntro:
    "Once the family agrees on one baseline, Kinly adds simple tools that keep everyone aligned — so your helper stops paying the price for contradictions that are not hers.",

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
