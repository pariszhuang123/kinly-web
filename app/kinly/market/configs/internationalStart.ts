import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const internationalStartConfig: ScenarioConfig = {
  pageKey: "kinly_market_new_place",
  recognition: {
    heading: "You moved into someone else's home. Nobody told you how things work here.",
    subtitle: "You committed to living here. The expectations arrived unspoken.",
    body: "Kinly makes the home's expectations visible so you do not have to guess, ask repeatedly, or learn the hard way what everyone else already knows.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. When you have already committed to a new place, it shows you what the home expects — so good intentions do not get lost in guesswork.",
  hero: {
    headline: "You committed to living here. Nobody explained how.",
    subhead: "The norms exist. You just have no way to see them.",
    body: "You moved in with good intentions. Kinly shows what the home expects so you can do the right thing without guessing or asking the same person again.",
    ctaHeading: "See what the home expects from you",
  },
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What nobody thought to mention",
      copy: "Quiet hours, shared spaces, who is around tonight — the things everyone else already knows.",
      footer: "Visible answers instead of invisible expectations.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Contribute without second-guessing",
      copy: "Pick up tasks when you can. Know what is expected without waiting for someone to tell you.",
      footer: "You are always in control — nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "The unspoken rules, written down",
      copy: "Quiet hours, guests, cleaning expectations — everything that was obvious to everyone except you.",
      footer: "No more guessing. No more awkward questions.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "See the home's routines so you can contribute from day one — without waiting to be told what to do.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Know what is shared and what is personal before you get it wrong and find out the hard way.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "See what you owe and what is fair — so contributions are clear from the start, not after an awkward conversation.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Weekly check-ins let you ask how things are going — so small missteps get corrected before they become resentment.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  chips: [
    "I want to do the right thing. Nobody told me what that is.",
    "Everyone else seems to know the routine. I am still guessing.",
    "I keep asking the same person and I can tell they are tired of it.",
    "I do not want to get it wrong. I just need someone to write it down.",
  ],
  rolePoints: [
    "Shows you what the home expects so good intentions do not get lost in guesswork.",
    "Keeps contributions visible without pressure or judgement.",
  ],
  formingPoints: [
    "You already committed to being here. Kinly makes the adjustment honest instead of invisible.",
    "Missteps are normal when you are new. Visibility turns them into corrections, not conflicts.",
  ],
  audience: [
    "People who moved into a new shared home and were never told how it works.",
    "Anyone adjusting to routines that everyone else seems to already know.",
    "Housemates with good intentions who just need the expectations made visible.",
  ],
  notList: ["Not a surveillance tool.", "Not a scorecard or leaderboard.", "Not a chore boss."],
  toolsIntro:
    "You already committed to living here. Kinly makes the unspoken rules visible — so the gap between your good intentions and the home's expectations does not keep growing.",
  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
