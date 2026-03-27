import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const studentWellbeingInfrastructureConfig: ScenarioConfig = {
  pageKey: "student_wellbeing_infrastructure",

  recognition: {
    heading: "You signed up to support the house. Now you are the only one who notices when things are not okay.",
    subtitle: "The caring role you chose has become an invisible one-person operation.",
    body: "Kinly makes the house baseline visible to everyone — so support does not depend on you holding every tension point in your head.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It makes expectations visible across the house so the responsibility you took on does not quietly become yours alone to carry.",

  hero: {
    headline: "You took responsibility for the house. Nobody else sees what you see.",
    subhead: "Shared visibility means the house can hold itself — instead of depending on you to hold everything.",
    body: "Kinly makes quiet hours, shared-space expectations, and weekly resets visible to everyone — so care is a shared baseline, not a solo burden you carry room by room.",
    ctaHeading: "Make the house see what you see",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Signals",
      headline: "What the house should notice without you",
      copy: "Quiet hours, shared spaces, and small resets — visible to the whole house, not just the person who always remembers.",
      footer: "The house notices. You do not have to be the only one.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update the baseline without going room by room",
      copy: "When expectations shift, update them once. The whole house sees the change — you do not have to repeat it in every conversation.",
      footer: "Shared context, not individual reminders.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One reference the whole house can lean on",
      copy: "Noise, guests, shared expectations, and weekly resets — visible to everyone, not stored in your memory alone.",
      footer: "Care made shared, not carried solo.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep routines visible so residents can see what needs doing — instead of waiting for you to remind them.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Keep shared supplies visible so contributions happen without you chasing people down one by one.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared costs transparent so the fairness conversation does not sit on your shoulders every time.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Weekly check-ins surface tension early — so issues come to light before they become another difficult follow-up only you would have caught.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "I keep checking in room by room because if I do not, small issues just sit there.",
    "I do not want support to depend entirely on me remembering every tension point.",
    "I signed up to help. I did not sign up to be the only one who sees what is going wrong.",
  ],

  rolePoints: [
    "Makes the house baseline visible so care does not depend on one person's memory.",
    "Reduces the invisible load that turns a support role into a solo operation.",
  ],

  formingPoints: [
    "Cohorts change, but the baseline stays visible — so you do not have to rebuild it from scratch each time.",
    "If things drift, the house can reset together next week without blame or you carrying it alone.",
  ],

  audience: [
    "Resident leads who signed up to support the house and ended up carrying it alone.",
    "Student homes where the caring role has quietly become a one-person burden.",
  ],

  notList: [
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
    "Not a reporting tool.",
  ],

  toolsIntro:
    "You took on the responsibility. Kinly makes sure you do not carry it alone. These tools share the visibility across the house — so support is infrastructure, not one person's quiet effort.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
