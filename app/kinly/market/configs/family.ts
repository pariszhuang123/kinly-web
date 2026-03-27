import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyConfig: ScenarioConfig = {
  pageKey: "family",

  recognition: {
    heading: "You built a life together. Somewhere along the way, one of you ended up running it alone.",
    subtitle: "They are not neglectful. It was just never made visible — who carries what, how the home actually works.",
    body: "Kinly makes the unspoken structure of your home something both of you can finally see — so sharing it becomes possible.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for couples and partners. It turns the invisible operating system of your home into something both of you can see — so the person who has been running it alone does not have to anymore.",

  hero: {
    headline: "You built a life together. One of you runs it alone.",
    subhead: "You decided to share a home. You never decided how.",
    body: "Kinly surfaces the routines, groceries, bills, and small daily decisions that one partner quietly absorbed — so both of you can see the home the same way.",
    ctaHeading: "Make the home something you both run",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "See what the home needs today",
      copy: "The routines and small tasks that one of you has been carrying — now visible to both.",
      footer: "Nobody has to remind. It is already there.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Together",
      headline: "Decide how the home works — together",
      copy: "The conversation you never had about who does what. Made simple and low-pressure.",
      footer: "No scorekeeping. Just a shared agreement.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared view",
      headline: "One place for how the home actually runs",
      copy: "Every routine, every expectation — out of one person's head and into a place you both see.",
      footer: "Same home. Same picture. Finally.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "The routines one partner memorised are now visible to both of you.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "The list lives in one place. Nobody has to be the one who always remembers.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Who pays what is clear. No silent resentment over money.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small imbalances surface before they harden into resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I carry every routine in my head. They do not even know they exist.",
    "We decided to build a life together. We never decided how the home would actually work.",
    "They are a good partner. They just never see what I see — because nobody made it visible.",
  ],

  rolePoints: [
    "Surfaces the home's operating system so both partners can finally see it — not just the one who built it.",
    "Turns the unspoken into something shared, so running the home is no longer a solo job.",
  ],

  formingPoints: [
    "Life shifts — new pressures, new routines. The home adapts as a partnership, not a silent handoff.",
    "If the balance drifts, the weekly check-in catches it before it becomes a fight.",
  ],

  audience: [
    "Couples and partners who built a life together but never agreed on how the home runs.",
    "Homes where one person quietly became the manager without either of you choosing that.",
  ],

  notList: [
    "Not a chore chart or a scorecard.",
    "Not marriage counselling.",
    "Not surveillance or tracking.",
    "Not about blame — it is about making the agreement you never had.",
  ],

  toolsIntro:
    "Once you can both see how the home runs, Kinly adds simple tools so it stops being one person's job to keep everything going.",

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
