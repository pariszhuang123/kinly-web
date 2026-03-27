import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const sgHelperOnboardingConfig: ScenarioConfig = {
  pageKey: "sg_helper_onboarding",

  recognition: {
    heading: "You welcomed someone into your home. Now you realise the way it works was never written down.",
    subtitle: "Your previous helper knew everything. That knowledge walked out the door with her — and none of it was ever documented.",
    body: "Kinly helps you externalise your home's invisible operating system so your new helper has a real reference — not just whatever you can remember to say out loud.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. For Singapore homes welcoming a new helper, it turns the hundreds of routines in your head into a visible, shared reference — so onboarding does not depend on your memory.",

  hero: {
    headline: "Your home runs on hundreds of invisible routines. Your new helper cannot see any of them.",
    subhead: "You committed to bringing someone new into your household. Now you realise how much was never written down.",
    body: "Kinly gives you a place to capture cleaning routines, kitchen preferences, shopping notes, and house rules — so your helper has something to check instead of guessing or asking again.",
    ctaHeading: "Write down what was always in your head",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Daily view",
      headline: "What the home needs today — documented",
      copy: "Daily routines your previous helper just knew, now visible and checkable for your new one.",
      footer: "No more relying on memory. No more repeating yourself.",
      image: LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "House rules",
      headline: "Capture routines as you remember them",
      copy: "You will not think of everything on day one. Add and adjust as gaps surface — the reference grows with you.",
      footer: "Document once. Stop explaining forever.",
      image: LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "House info",
      headline: "Your home's operating system, externalised",
      copy: "Routines, preferences, and house rules — finally outside your head and visible to your helper.",
      footer: "Everything she needs. One place to find it.",
      image: LANDING_SCREEN_ASSETS.en.hub,
    },
  ],

  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Household routines that were never documented now have a home — so your helper checks instead of asks.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Shopping preferences and brand choices your last helper memorised — now written down for this one.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Household purchases have clear context — so your new helper does not have to guess what is expected.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Weekly check-ins",
      benefit: "Surface what was missed or misunderstood early — before gaps harden into habits.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "My previous helper knew everything. Now I realise none of it was ever written down.",
    "I want her to feel confident — not constantly checking with me because nothing is documented.",
    "I keep saying things like 'not that one, the other brand' — and I can hear how exhausting it is for both of us.",
  ],

  rolePoints: [
    "Turns the invisible knowledge your last helper carried into a visible reference for this one.",
    "Your new helper gets clarity from day one — instead of piecing things together from scattered conversations.",
  ],

  formingPoints: [
    "The first weeks expose every gap. Kinly lets you capture routines as you discover they were never documented.",
    "As your helper settles in, the reference grows — so the home's operating system finally exists outside your head.",
  ],

  audience: [
    "Singapore households welcoming a new helper and realising how much was never written down.",
    "Families where a previous helper left and took the household knowledge with her.",
  ],

  notList: [
    "Not surveillance or monitoring software.",
    "Not a performance tracker.",
    "Not a punishment system.",
    "Not a replacement for conversation — just the documentation your home never had.",
  ],

  toolsIntro:
    "Once your home's invisible routines are documented, Kinly adds simple tools that keep the household running — so your new helper does not have to rely on memory alone.",

  sectionHeadings: {
    soundsLikeYou: "Does this sound like your home?",
    roleHeading: "Kinly role: visible onboarding",
    formingHeading: "As your helper settles in",
    audienceHeading: "Who this is for",
  },

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },
};
