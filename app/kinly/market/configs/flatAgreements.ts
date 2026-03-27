import { LANDING_SCREEN_ASSETS } from "../../shared/landingScreenAssets";
import type { ScenarioConfig } from "../scenarioLanding.types";
import { getScenarioAvailabilityBody } from "../../../../lib/regionSupport";

export const flatAgreementsConfig: ScenarioConfig = {
  pageKey: "flat_agreements",

  recognition: {
    heading: "You talked about it once. Nobody remembers the same version.",
    subtitle: "The conversation happened. But what was agreed only exists in separate memories — and none of them match.",
    body: "Kinly turns spoken agreements into a shared record so everyone can see the same version — without anyone having to prove what was said.",
  },

  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app designed for people who live together. It gives your agreements a home so the gap between what was said and what was heard stops causing friction.",

  hero: {
    headline: "You agreed on the rules. Nobody wrote them down.",
    subhead: "The problem is not that you never talked about it. The problem is that the conversation disappeared the moment it ended.",
    body: "Kinly keeps what was agreed visible to everyone — so the rules do not live in one person's memory and come out only during arguments.",
    ctaHeading: "Give your agreements a shared record",
  },

  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What was actually agreed",
      copy: "Noise, guests, shared chores — the version everyone can check, not the version everyone remembers differently.",
      footer: "One record, no conflicting memories.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Adjust",
      headline: "Update agreements without re-arguing",
      copy: "When routines change, adjust what was agreed — without reopening the original conversation.",
      footer: "Agreements evolve. They do not have to be re-fought.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Reference",
      headline: "The record everyone can see",
      copy: "Noise, guests, bills, and cleaning expectations written down once — not remembered differently by each person.",
      footer: "Shared record, no more competing versions.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  featureScreens: [
    {
      title: "Shared tasks",
      benefit: "Keep agreed responsibilities visible so nobody can say they remember it differently.",
      image: LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Record shared shopping expectations so the agreement does not vanish after the conversation ends.",
      image: LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Keep cost-sharing agreements visible so fairness does not depend on one person's memory.",
      image: LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Use weekly check-ins to confirm what was agreed before mismatched memories turn into conflict.",
      image: LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],

  chips: [
    "We had the conversation. Somehow everyone remembers a different version.",
    "The rules exist — in three different heads, in three different forms.",
    "I know what we agreed. But without a record, it is my word against theirs.",
  ],

  rolePoints: [
    "Turns spoken agreements into a shared reference anyone can check.",
    "Makes updating agreements easy so they do not stay frozen in a past conversation.",
  ],

  formingPoints: [
    "New housemates see what was agreed from day one — not a retelling.",
    "If memories drift, the record is there to reset from.",
  ],

  audience: [
    "Housemates who agreed on things but have no shared record to check.",
    "Groups tired of re-arguing rules that were already settled.",
  ],

  notList: [
    "Not a legal document.",
    "Not surveillance.",
    "Not a scorecard or leaderboard.",
    "Not a chore boss.",
  ],

  toolsIntro:
    "Once your agreements are written down, Kinly offers simple tools that keep them working — without turning shared living into a task system.",

  availability: {
    body: getScenarioAvailabilityBody("en"),
  },


};
