import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const familyTeensConfig: ScenarioConfig = {
  pageKey: "family_teens",

  recognition: {
    heading: "They live under this roof. But nobody showed them what sharing a home actually looks like.",
    subtitle: "The expectations are all in your head. Of course they do not meet them — they have never seen them.",
    body: "Kinly takes the unspoken rules out of your head and puts them somewhere your teenagers can actually see — so they can step up without waiting to be told.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for families. It turns the expectations you have been carrying in your head into something your teenagers can see and follow — so the home stops depending on you saying it out loud every time.",

  hero: {
    headline: "They live under this roof. Nobody showed them what that means.",
    subhead: "You expected them to know. But you never made it visible.",
    body: "Kinly surfaces the routines, shared spaces, and small responsibilities that you assumed they understood — so they can see what the home needs without you having to say it again.",
    ctaHeading: "Show them what the home needs",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What the home needs today",
      copy: "Bins, tidying, and shared space expectations — finally somewhere they can see them.",
      footer: "No repeating yourself. It is already there.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Update",
      headline: "Adjust expectations as they grow up",
      copy: "What a thirteen-year-old handles is different from a seventeen-year-old. The system grows with them.",
      footer: "Fair and clear. Everyone sees the same thing.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House expectations",
      headline: "The expectations that were never written down — in one place",
      copy: "Tidying, noise, shared spaces, and contributions — out of your head and onto shared ground.",
      footer: "They can see it. You do not have to say it.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "The things you expected them to just know — now visible and clear.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "The list is shared. They can check it without asking you.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "If they contribute, it is tracked. No ambiguity about what counts.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Small things surface before they become the argument you have had ten times.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "The expectations are all in my head. Of course they do not follow them — they have never seen them.",
    "They are not difficult. I just expected them to know things I never actually showed them.",
    "I live with them every day. But we never once talked about how the home is supposed to work.",
  ],

  rolePoints: [
    "Takes the expectations out of your head and puts them where your teenagers can see them.",
    "Teaches them to share a home — not by punishment, but by making the home visible.",
  ],

  formingPoints: [
    "As they get older, expectations grow with them. What you show them adjusts naturally.",
    "If something slips, the check-in catches it — calmly, not as a lecture.",
  ],

  audience: [
    "Families with teenagers who share a home but were never shown what that means.",
    "Households where the expectations exist — they just live in one person's head.",
  ],

  notList: [
    "Not a punishment system.",
    "Not surveillance or monitoring.",
    "Not a chore chart with gold stars.",
    "Not about catching them out — it is about showing them in.",
  ],

  toolsIntro:
    "Once they can see what the home needs, Kinly adds simple tools so they can actually participate — instead of waiting to be told.",

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
