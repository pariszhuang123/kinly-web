import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyTeensConfig: ScenarioConfig = {
  pageKey: "family_teens",

  recognition: {
    heading: "They are learning to share a home — but no one showed them what that looks like.",
    subtitle: "The expectations are in your head. They cannot follow what they cannot see.",
    body: "Kinly makes household expectations visible so your teenagers can see what the home needs — without waiting to be told.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. It makes household expectations visible so everyone — including teenagers learning to contribute — can see what the home needs.",

  hero: {
    headline: "Show them how the home works. Once.",
    subhead: "Teenagers can step up when they can see what is needed.",
    body: "Kinly keeps household expectations visible for everyone — routines, shared spaces, and the small things that keep a home running. They do not need reminders. They need a system they can check.",
    ctaHeading: "Give the home a shared system",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What the home needs today",
      copy: "Bins, tidying, and shared space expectations — visible to everyone.",
      footer: "No reminders needed. It is already there.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Update",
      headline: "Adjust expectations as they grow",
      copy: "Add responsibilities as teenagers get older. Remove what no longer applies.",
      footer: "Fair and clear. Everyone sees the same thing.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House expectations",
      headline: "One place for how the home works",
      copy: "Tidying, noise, shared spaces, and contributions.",
      footer: "Everyone sees the same expectations.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household jobs are visible — everyone can see what needs doing without being told.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "The list is shared. Anyone can check it and help.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "If they contribute, it is tracked. Clear and fair for everyone.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small things surface early — before they become friction.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "The expectations are all in my head. Of course they do not follow them — they cannot see them.",
    "They are not lazy. They just do not know what the home needs unless someone says it.",
    "I want them to learn to share a home — but there is nothing showing them what that means.",
  ],

  rolePoints: [
    "Makes household expectations visible — so teenagers can see what the home needs.",
    "Builds shared responsibility as a skill, not a punishment.",
  ],

  formingPoints: [
    "As they get older, expectations grow with them. The system adjusts naturally.",
    "If something slips, the check-in catches it — calmly, not as a confrontation.",
  ],

  audience: [
    "Families with teenagers learning to contribute to the home.",
    "Households where expectations need to become visible so they can be shared.",
  ],

  notList: [
    "Not a punishment system.",
    "Not surveillance or monitoring.",
    "Not a chore chart with gold stars.",
    "Not about proving who did more.",
  ],

  toolsIntro:
    "Once expectations are visible, Kinly adds simple tools so the household runs as a shared effort — not a one-person operation.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: visible expectations",
    formingHeading: "As they grow up",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
