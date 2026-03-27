import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const homestayOwnerConfig: ScenarioConfig = {
  pageKey: "homestay_owner",

  recognition: {
    heading: "You opened your home to guests. Every new one starts from zero — and you start explaining all over again.",
    subtitle: "The commitment to host was the easy part. The repetition is what wears you down.",
    body: "Kinly keeps your house expectations in one visible place so every guest arrives to the same clear baseline — without you having to say it all again.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. For homestays, it absorbs the repetition that comes after the decision to host — so every guest sees the same expectations without you carrying that load each time.",

  hero: {
    headline: "You chose to host. You did not choose to repeat yourself every time.",
    subhead: "Your house expectations stay visible — so the welcome does not depend on your energy that day.",
    body: "Kinly shows every guest the same baseline for noise, shared spaces, and contributions. You explain it once. The home remembers for you.",
    ctaHeading: "Stop repeating yourself to every new guest",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Welcome",
      headline: "What this guest needs to know now",
      copy: "Quiet hours, shared spaces, and today's expectations — visible without you having to say them again.",
      footer: "The welcome stays warm because you are not exhausted by repetition.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update once, not once per guest",
      copy: "When house expectations change, update them in one place. Every current and future guest sees the same thing.",
      footer: "One update replaces a dozen conversations.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "One calm reference that outlasts any single guest",
      copy: "Noise, guests, cleaning standards, and shared costs visible to everyone — without you standing in the kitchen explaining it again.",
      footer: "Hosting, not lecturing.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep hosting routines visible so you do not have to walk each new guest through the same expectations from scratch.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Clarify shared kitchen and supply expectations once — so the same question does not come up with every new arrival.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep shared contributions clear so you are not having the same money conversation every time someone moves in.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Weekly check-ins catch small things early — before they become the kind of issue you have already dealt with three guests ago.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "Every new guest starts from zero. I am tired of explaining the same things.",
    "I want hosting to feel warm — not like reading out a rulebook every time someone arrives.",
    "I chose to open my home. I did not choose to become a broken record.",
  ],

  rolePoints: [
    "Absorbs the repetition so hosting stays welcoming instead of draining.",
    "Gives every new guest the same clear baseline without depending on your energy.",
  ],

  formingPoints: [
    "Guests change. The expectations stay visible — you do not start over each time.",
    "If something slips, the check-in catches it before you have to repeat the conversation yourself.",
  ],

  audience: [
    "Homestay owners worn down by explaining the same expectations to every new guest.",
    "Households hosting guests who want the welcome to stay warm without the repetition.",
  ],

  notList: [
    "Not a surveillance tool.",
    "Not a legal contract.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once you have said it once, Kinly holds it for every guest after. These tools reduce the repetition that comes after the commitment to host — keeping it warm without wearing you out.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
