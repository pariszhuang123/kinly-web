import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import { ScenarioConfig } from "../ScenarioLandingClient";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHouseOwnerHelperAlignmentConfig: ScenarioConfig = {
  pageKey: "sg_house_owner_helper_alignment",

  recognition: {
    heading: "You already explained it three times this week. You should not need to say it again.",
    subtitle: "When the household baseline lives only in your head, every correction sounds harsher than you meant.",
    body: "Kinly keeps home expectations visible so your helper can check the same baseline instead of waiting for another reminder from you.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. In Singapore homes with a helper, it keeps household expectations visible so you can write them once and refer back later.",

  hero: {
    headline: "Set the household baseline once. Stop repeating the same home routines every few days.",
    subhead: "Shared visibility keeps routines clear without another awkward employer-helper exchange.",
    body: "Kinly keeps cleaning routines, kitchen expectations, shopping notes, and house rules in one place so your helper can check instead of ask again.",
    ctaHeading: "Explain it once, for good",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "See what needs attention today",
      copy: "Daily routines, shopping notes, and small resets in one calm view people can check before asking again.",
      footer: "Less forgetting. Less repeating.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Keep routines current without another talk",
      copy: "Update cleaning, kitchen, guest, or shopping routines as life shifts so expectations stay clear without another correction.",
      footer: "Clear baseline. Fewer corrections.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "One shared reference for the home",
      copy: "Routines, house rules, and useful notes in one place your helper can check before asking the same question again.",
      footer: "Simple to see. Easy to refer back to.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep recurring household routines visible so your helper can refer back instead of waiting for another reminder.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify kitchen, shopping, and supply expectations so the same issues do not keep coming back.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep household costs and purchase context visible so money conversations stay shorter and calmer.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Use weekly resets to catch small tensions early before they turn into another repeated conversation.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I explained the kitchen routine on Monday. By Wednesday I was explaining it again.",
    "If I am not there to remind, the same household details slip.",
    "I want the home baseline somewhere my helper can check without coming back to me every time.",
  ],

  rolePoints: [
    "Keeps household expectations visible in one place for both employer and helper.",
    "Helps your helper check the baseline instead of guessing or waiting for another reminder.",
  ],

  formingPoints: [
    "Homes run calmer when repeated routines are written down once and easy to check later.",
    "Visible expectations reduce confusion, awkwardness, and repeated reminders across the home.",
  ],

  audience: [
    "Singapore home employers living with a helper and repeating the same household routines.",
    "Homes that want calmer handovers and fewer repeated corrections.",
  ],

  notList: [
    "Not surveillance.",
    "Not employee monitoring software.",
    "Not punishment.",
    "Not a scorecard.",
  ],

  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools that reduce everyday household friction without turning the home into a command system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
