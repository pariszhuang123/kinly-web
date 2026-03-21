import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyConfig: ScenarioConfig = {
  pageKey: "family",

  recognition: {
    heading: "You are both trying. But somehow it all still falls on one person.",
    subtitle: "You should not have to carry every house rule, every reminder, and every unspoken expectation in your head.",
    body: "Kinly makes the invisible work of running a home visible — so you can actually share it.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. It keeps household expectations visible and calm — so no one has to be the reminder system.",

  hero: {
    headline: "Make the invisible visible. Share the load for real.",
    subhead: "Your household runs on systems only one of you can see. Kinly changes that.",
    body: "Kinly shows the same expectations to everyone in the home — routines, groceries, bills, and the small things that build up when no one notices.",
    ctaHeading: "Stop carrying it alone",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "See what the home needs today",
      copy: "Groceries, routines, and small reminders — visible to both of you.",
      footer: "No one has to ask. It is already there.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Together",
      headline: "Adjust how the home works",
      copy: "Update expectations as life changes — without a difficult conversation.",
      footer: "Simple changes. No scorekeeping.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared view",
      headline: "One place for how the home runs",
      copy: "Routines, contributions, and the things that usually live in one person's head.",
      footer: "Both of you see the same picture.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household routines are visible — not trapped in one person's memory.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "The list is shared. No one has to ask what is needed.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Contributions are clear. No awkward conversations about money.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small things get noticed before they become resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "If I do not say it, it does not get done. But I am tired of always being the one who says it.",
    "They help when I ask — but I should not have to ask every single time.",
    "I carry every routine, every deadline, every unwritten rule in my head. No one else even knows they exist.",
  ],

  rolePoints: [
    "Makes household expectations visible to everyone — not just the person who remembers them.",
    "Replaces the invisible mental load with a shared system both of you can see.",
  ],

  formingPoints: [
    "Life changes — new routines, new pressures. The home adjusts together.",
    "If something drifts, the weekly check-in catches it before it becomes a fight.",
  ],

  audience: [
    "Couples and partners sharing a home.",
    "Families where the household load falls silently on one person.",
  ],

  notList: [
    "Not a chore chart or a scorecard.",
    "Not marriage counselling.",
    "Not surveillance or tracking.",
    "Not about blame — it is about making the system visible.",
  ],

  toolsIntro:
    "Once expectations are visible, Kinly adds simple tools so the home runs without everything going through one person.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: shared visibility",
    formingHeading: "When life changes",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
