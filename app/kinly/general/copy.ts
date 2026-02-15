import { LANDING_SCREEN_ASSETS } from "../shared/landingScreenAssets";

type LandingScreen = {
  title: string;
  eyebrow: string;
  headline: string;
  copy: string;
  footer: string;
  image: string;
};

type FeatureScreen = {
  title: string;
  benefit: string;
  image: string;
};

export type LandingCopy = {
  recognition: {
    heading: string;
    subhead: string;
    body: string;
  };
  hero: {
    headline: string;
    subhead: string;
    body: string;
    ctaHeading: string;
    privacyNote: string;
  };
  whatHeading: string;
  whatBody: string;
  storeLabels: { app: string; play: string };
  howHeading: string;
  featureScreens: FeatureScreen[];
  screens: LandingScreen[];
  chipsHeading: string;
  chips: string[];
  roleHeading: string;
  rolePoints: string[];
  formingHeading: string;
  formingPoints: string[];
  audienceHeading: string;
  audience: string[];
  notHeading: string;
  notList: string[];
  weeklyHeading: string;
  weeklyIntro: string;
  weeklyPoints: string[];
  toolsIntro: string;
  availabilityHeading: string;
  availabilityBody: string;
  availabilityCta: string;
  storeSectionHeading: string;
  storeSectionSubhead: string;
};

const LANDING_COPY_EN: LandingCopy = {
  recognition: {
    heading: "Shared living gets heavy.",
    subhead: "Even when no one is doing anything wrong.",
    body: "Kinly helps you notice what the home needs before anyone feels blamed.",
  },
  hero: {
    headline: "A calmer way to live together.",
    subhead: "A calm shared place to notice how the home feels before anyone has to ask.",
    body: "Open Kinly to see what matters in your home right now, without pressure or blame.",
    ctaHeading: "Ready to start",
    privacyNote: "Private by default. No ads. No surveillance.",
  },
  whatHeading: "What Kinly is",
  whatBody:
    "Kinly is a shared living app for people who live together. It keeps expectations visible and calm without turning home life into a task system.",
  storeLabels: {
    app: "Download on the App Store",
    play: "Get it on Google Play",
  },
  howHeading: "How Kinly helps in practice",
  featureScreens: [
    {
      title: "Shared flows",
      benefit: "Add context, guide links, and photos so repeat tasks are clear without reminders.",
      image:
        LANDING_SCREEN_ASSETS.en.flows,
    },
    {
      title: "Shared groceries",
      benefit: "Capture item, quantity, notes, and photos so shopping is clear for everyone.",
      image:
        LANDING_SCREEN_ASSETS.en.groceries,
    },
    {
      title: "Shared bills",
      benefit: "Split costs fairly with clear amounts, dates, and purchase context.",
      image:
        LANDING_SCREEN_ASSETS.en.bills,
    },
    {
      title: "Calm check-ins",
      benefit: "Reflect together weekly so needs are noticed early and without blame.",
      image:
        LANDING_SCREEN_ASSETS.en.checkins,
    },
  ],
  screens: [
    {
      title: "Today",
      eyebrow: "Right now",
      headline: "What needs your attention",
      copy: "Things to do, things to notice, and gentle next steps",
      footer: "Today's tasks, unfinished items, and updates from your home.",
      image:
        LANDING_SCREEN_ASSETS.en.today,
    },
    {
      title: "Manage",
      eyebrow: "Make changes",
      headline: "Change how things work",
      copy: "Edit, assign, comment on, or remove flows and shares",
      footer: "You're always in control - nothing is locked in.",
      image:
        LANDING_SCREEN_ASSETS.en.manage,
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "What matters in our home",
      copy: "Moments, norms, and shared references",
      footer: "Gratitude, house vibe, and important notes - shared by everyone.",
      image:
        LANDING_SCREEN_ASSETS.en.hub,
    },
  ],
  chipsHeading: "Does this sound like your place?",
  chips: [
    "We care about each other, but chore charts make things tense.",
    "We want to know how the house feels without assigning blame.",
    "We avoid drama but still want to be seen.",
  ],
  roleHeading: "Kinly role: reflection first",
  rolePoints: [
    "Reflects how the home is feeling before asking for action.",
    "Makes care visible without assigning responsibility.",
  ],
  formingHeading: "If your home is still forming",
  formingPoints: [
    "Uncertainty is normal, not a failure.",
    "Kinly treats figuring it out as healthy, not something to fix.",
  ],
  audienceHeading: "Who this is for",
  audience: [
    "Flatmates who did not choose each other but want calm.",
    "Homes adjusting to change or new rhythms.",
    "People who care but do not want pressure tactics.",
  ],
  notHeading: "Kinly is not...",
  notList: ["...a surveillance tool.", "...a scorecard or leaderboard.", "...a chore boss."],
  weeklyHeading: "Weekly reflection, human-paced",
  weeklyIntro: "Kinly moves on a weekly rhythm. It notices the home mood without streaks, checklists, or pressure.",
  weeklyPoints: [
    "You can check in weekly, not daily. No streaks, no pressure to keep up.",
    "Reflections are for understanding, not grading.",
    "Kinly never forces conversations. It helps you understand before you decide whether to talk.",
  ],
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools to reduce everyday friction without turning shared living into a task system.",
  availabilityHeading: "Availability",
  availabilityBody:
    "Kinly is currently available in New Zealand and Singapore. We'll email you when Kinly opens in your area. No spam.",
  availabilityCta: "Express interest when Kinly is available in your area.",
  storeSectionHeading: "When you are ready",
  storeSectionSubhead: "Kinly lives in the app. Start on iOS or Android.",
};

const LANDING_COPY_OVERRIDES: Record<string, Partial<LandingCopy>> = {
  ar: {
    recognition: {
      heading: "Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã˜Â´ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’ Ã™Å Ã˜ÂµÃ˜Â¨Ã˜Â­ Ã˜Â«Ã™â€šÃ™Å Ã™â€žÃ˜Â§Ã™â€¹.",
      subhead: "Ã˜Â­Ã˜ÂªÃ™â€° Ã˜Â¹Ã™â€ Ã˜Â¯Ã™â€¦Ã˜Â§ Ã™â€žÃ˜Â§ Ã˜Â£Ã˜Â­Ã˜Â¯ Ã™Å Ã™ÂÃ˜Â¹Ã™â€ž Ã˜Â´Ã™Å Ã˜Â¦Ã˜Â§Ã™â€¹ Ã˜Â®Ã˜Â§Ã˜Â·Ã˜Â¦Ã˜Â§Ã™â€¹.",
      body: "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯Ã™Æ’ Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™â€žÃ˜Â§Ã˜Â­Ã˜Â¸Ã˜Â© Ã™â€¦Ã˜Â§ Ã™Å Ã˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬Ã™â€¡ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž ,  Ã™â€šÃ˜Â¨Ã™â€ž Ã˜Â£Ã™â€  Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â£Ã˜Â­Ã˜Â¯ Ã˜Â¨Ã˜Â§Ã™â€žÃ™â€˜Ã™â€žÃ™Ë†Ã™â€¦.",
    },
    hero: {
      headline: "Ã˜Â·Ã˜Â±Ã™Å Ã™â€šÃ˜Â© Ã˜Â£Ã™â€¡Ã˜Â¯Ã˜Â£ Ã™â€žÃ™â€žÃ˜Â¹Ã™Å Ã˜Â´ Ã™â€¦Ã˜Â¹Ã˜Â§Ã™â€¹.",
      subhead: "Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€  Ã™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’ Ã™Ë†Ã™â€¡Ã˜Â§Ã˜Â¯Ã˜Â¦ Ã™â€žÃ™â€¦Ã™â€žÃ˜Â§Ã˜Â­Ã˜Â¸Ã˜Â© Ã™Æ’Ã™Å Ã™Â Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã™â€šÃ˜Â¨Ã™â€ž Ã˜Â£Ã™â€  Ã™Å Ã˜Â·Ã™â€žÃ˜Â¨ Ã™â€¦Ã™â€ Ã™Æ’ Ã˜Â£Ã˜Â­Ã˜Â¯ Ã˜Â£Ã™Å  Ã˜Â´Ã™Å Ã˜Â¡.",
      body: "Ã˜ÂªÃ™ÂÃ˜ÂªÃ˜Â­ Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™â€žÃ˜ÂªÃ˜Â±Ã™â€° Ã™â€¦Ã˜Â§ Ã™Å Ã™â€¡Ã™â€¦ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€  ,  Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â¶Ã˜ÂºÃ˜Â· Ã˜Â£Ã™Ë† Ã™â€¦Ã™â€žÃ˜Â§Ã˜Â­Ã™â€šÃ˜Â© Ã˜Â£Ã™Ë† Ã˜Â­Ã™Æ’Ã™â€¦.",
      ctaHeading: "Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã™â€žÃ™â€žÃ˜Â¨Ã˜Â¯Ã˜Â¡",
      privacyNote: "Ã˜Â®Ã˜Â§Ã˜Âµ Ã˜Â¨Ã˜Â´Ã™Æ’Ã™â€ž Ã˜Â§Ã™ÂÃ˜ÂªÃ˜Â±Ã˜Â§Ã˜Â¶Ã™Å . Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â¥Ã˜Â¹Ã™â€žÃ˜Â§Ã™â€ Ã˜Â§Ã˜Âª. Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã™â€¦Ã˜Â±Ã˜Â§Ã™â€šÃ˜Â¨Ã˜Â©.",
    },
    storeLabels: {
      app: "Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€¦Ã™â€  App Store",
      play: "Ã˜Â§Ã˜Â­Ã˜ÂµÃ™â€ž Ã˜Â¹Ã™â€žÃ™Å Ã™â€¡ Ã™â€¦Ã™â€  Google Play",
    },
    howHeading: "Ã™Æ’Ã™Å Ã™Â Ã™Å Ã˜Â¹Ã™â€¦Ã™â€ž Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å ",
    toolsIntro:
      "Ã˜Â¨Ã˜Â¹Ã˜Â¯ Ã˜Â£Ã™â€  Ã˜ÂªÃ˜ÂªÃ™ÂÃ™â€šÃ™Ë†Ã˜Â§ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™â€šÃ˜Â¹Ã˜Â§Ã˜ÂªÃ˜Å’ Ã™Å Ã™â€šÃ˜Â¯Ã™â€¦ Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã˜Â£Ã˜Â¯Ã™Ë†Ã˜Â§Ã˜Âª Ã˜Â¨Ã˜Â³Ã™Å Ã˜Â·Ã˜Â© Ã˜ÂªÃ™â€šÃ™â€žÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â­Ã˜ÂªÃ™Æ’Ã˜Â§Ã™Æ’Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦Ã™Å Ã˜Â© ,  Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜ÂªÃ˜Â­Ã™Ë†Ã™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã˜Â´ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’ Ã˜Â¥Ã™â€žÃ™â€° Ã™â€ Ã˜Â¸Ã˜Â§Ã™â€¦ Ã™â€¦Ã™â€¡Ã˜Â§Ã™â€¦.",
    screens: [
      {
        title: "Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦",
        eyebrow: "Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ ",
        headline: "Ã™â€¦Ã˜Â§ Ã™Å Ã˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬ Ã˜Â§Ã™â€ Ã˜ÂªÃ˜Â¨Ã˜Â§Ã™â€¡Ã™Æ’",
        copy: "Ã˜Â£Ã˜Â´Ã™Å Ã˜Â§Ã˜Â¡ Ã™â€žÃ™â€žÃ™â€šÃ™Å Ã˜Â§Ã™â€¦ Ã˜Â¨Ã™â€¡Ã˜Â§Ã˜Å’ Ã˜Â£Ã˜Â´Ã™Å Ã˜Â§Ã˜Â¡ Ã™â€žÃ™â€žÃ™â€¦Ã™â€žÃ˜Â§Ã˜Â­Ã˜Â¸Ã˜Â©Ã˜Å’ Ã™Ë†Ã˜Â®Ã˜Â·Ã™Ë†Ã˜Â§Ã˜Âª Ã™â€žÃ˜Â·Ã™Å Ã™ÂÃ˜Â© Ã™â€šÃ˜Â§Ã˜Â¯Ã™â€¦Ã˜Â©",
        footer: "Ã™â€¦Ã™â€¡Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦Ã˜Å’ Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€ Ã˜Â§Ã˜ÂµÃ˜Â± Ã˜ÂºÃ™Å Ã˜Â± Ã˜Â§Ã™â€žÃ™â€¦Ã™Æ’Ã˜ÂªÃ™â€¦Ã™â€žÃ˜Â©Ã˜Å’ Ã™Ë†Ã˜ÂªÃ˜Â­Ã˜Â¯Ã™Å Ã˜Â«Ã˜Â§Ã˜Âª Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â²Ã™â€žÃ™Æ’.",
        image:
          LANDING_SCREEN_ASSETS.ar.today,
      },
      {
        title: "Ã˜Â¥Ã˜Â¯Ã˜Â§Ã˜Â±Ã˜Â©",
        eyebrow: "Ã˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜ÂªÃ˜ÂºÃ™Å Ã™Å Ã˜Â±Ã˜Â§Ã˜Âª",
        headline: "Ã˜ÂºÃ™Å Ã™â€˜Ã˜Â± Ã™Æ’Ã™Å Ã™Â Ã˜ÂªÃ˜Â¹Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â´Ã™Å Ã˜Â§Ã˜Â¡",
        copy: "Ã˜Â¹Ã˜Â¯Ã™â€˜Ã™â€žÃ˜Å’ Ã™Ë†Ã˜Â²Ã™â€˜Ã˜Â¹Ã˜Å’ Ã˜Â¹Ã™â€žÃ™â€˜Ã™â€š Ã˜Â¹Ã™â€žÃ™â€°Ã˜Å’ Ã˜Â£Ã™Ë† Ã˜Â£Ã˜Â²Ã™â€ž Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¯Ã™ÂÃ™â€šÃ˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜Â§Ã˜Â±Ã™Æ’Ã˜Â§Ã˜Âª",
        footer: "Ã˜Â£Ã™â€ Ã˜Âª Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹ Ã™â€¦Ã˜Â³Ã™Å Ã˜Â·Ã˜Â± - Ã™â€žÃ˜Â§ Ã˜Â´Ã™Å Ã˜Â¡ Ã™â€¦Ã™â€šÃ™ÂÃ™â€ž.",
        image:
          LANDING_SCREEN_ASSETS.ar.manage,
      },
      {
        title: "Ã™â€¦Ã˜Â±Ã™Æ’Ã˜Â² Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž",
        eyebrow: "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’",
        headline: "Ã™â€¦Ã˜Â§ Ã™Å Ã™â€¡Ã™â€¦ Ã™ÂÃ™Å  Ã™â€¦Ã™â€ Ã˜Â²Ã™â€žÃ™â€ Ã˜Â§",
        copy: "Ã™â€žÃ˜Â­Ã˜Â¸Ã˜Â§Ã˜ÂªÃ˜Å’ Ã™â€šÃ™Ë†Ã˜Â§Ã˜Â¹Ã˜Â¯Ã˜Å’ Ã™Ë†Ã™â€¦Ã˜Â±Ã˜Â§Ã˜Â¬Ã˜Â¹ Ã™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’Ã˜Â©",
        footer: "Ã˜Â§Ã™â€žÃ˜Â§Ã™â€¦Ã˜ÂªÃ™â€ Ã˜Â§Ã™â€ Ã˜Å’ Ã˜Â£Ã˜Â¬Ã™Ë†Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€žÃ˜Å’ Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã™â€žÃ˜Â§Ã˜Â­Ã˜Â¸Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€¦Ã˜Â© - Ã™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’Ã˜Â© Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã™Å Ã˜Â¹.",
        image:
          LANDING_SCREEN_ASSETS.ar.hub,
      },
    ],    
    chipsHeading: "Ã™â€¡Ã™â€ž Ã™Å Ã˜Â¨Ã˜Â¯Ã™Ë† Ã™â€¡Ã˜Â°Ã˜Â§ Ã™â€¦Ã˜Â«Ã™â€ž Ã™â€¦Ã™Æ’Ã˜Â§Ã™â€ Ã™Æ’Ã˜Å¸",
    chips: [
      "Ã™â€ Ã™â€¡Ã˜ÂªÃ™â€¦ Ã˜Â¨Ã˜Â¨Ã˜Â¹Ã˜Â¶Ã˜Å’ Ã™â€žÃ™Æ’Ã™â€  Ã˜Â¬Ã˜Â¯Ã˜Â§Ã™Ë†Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã˜Â§Ã™â€¦ Ã˜ÂªÃ˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã™Ë†Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã˜ÂªÃ˜Â±Ã˜Â©.",
      "Ã™â€ Ã˜Â±Ã™Å Ã˜Â¯ Ã™â€¦Ã˜Â¹Ã˜Â±Ã™ÂÃ˜Â© Ã™Æ’Ã™Å Ã™Â Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â¥Ã™â€žÃ™â€šÃ˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ™â€žÃ™Ë†Ã™â€¦.",
      "Ã™â€ Ã˜ÂªÃ˜Â¬Ã™â€ Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â§ Ã™â€žÃ™Æ’Ã™â€ Ã™â€ Ã˜Â§ Ã™â€ Ã˜Â±Ã™Å Ã˜Â¯ Ã˜Â£Ã™â€  Ã™â€ Ã™ÂÃ˜Â±Ã™â€°.",
    ],
    roleHeading: "Ã˜Â¯Ã™Ë†Ã˜Â± Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å : Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â£Ã™â€¦Ã™â€ž Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã™â€¹",
    rolePoints: [
      "Ã™Å Ã˜Â¹Ã™Æ’Ã˜Â³ Ã™Æ’Ã™Å Ã™Â Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã™â€šÃ˜Â¨Ã™â€ž Ã˜Â·Ã™â€žÃ˜Â¨ Ã˜Â£Ã™Å  Ã˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡.",
      "Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã™â€¡Ã˜ÂªÃ™â€¦Ã˜Â§Ã™â€¦ Ã™â€¦Ã˜Â±Ã˜Â¦Ã™Å Ã˜Â§Ã™â€¹ Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜ÂªÃ˜Â­Ã˜Â¯Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â¤Ã™Ë†Ã™â€žÃ™Å Ã˜Â©.",
    ],
    formingHeading: "Ã˜Â¥Ã˜Â°Ã˜Â§ Ã™Æ’Ã˜Â§Ã™â€  Ã™â€¦Ã™â€ Ã˜Â²Ã™â€žÃ™Æ’ Ã™â€žÃ˜Â§ Ã™Å Ã˜Â²Ã˜Â§Ã™â€ž Ã™Å Ã˜ÂªÃ˜Â´Ã™Æ’Ã™â€ž",
    formingPoints: [
      "Ã˜Â¹Ã˜Â¯Ã™â€¦ Ã˜Â§Ã™â€žÃ™Å Ã™â€šÃ™Å Ã™â€  Ã˜Â·Ã˜Â¨Ã™Å Ã˜Â¹Ã™Å  ,  Ã™â€žÃ™Å Ã˜Â³ Ã™ÂÃ˜Â´Ã™â€žÃ˜Â§Ã™â€¹.",
      "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™Å Ã˜Â¹Ã˜Â§Ã™â€¦Ã™â€ž Ã˜Â§Ã™Æ’Ã˜ÂªÃ˜Â´Ã˜Â§Ã™Â Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã™Ë†Ã˜Â± Ã™Æ’Ã˜Â´Ã™Å Ã˜Â¡ Ã˜ÂµÃ˜Â­Ã™Å Ã˜Å’ Ã™â€žÃ™Å Ã˜Â³ Ã˜Â´Ã™Å Ã˜Â¦Ã˜Â§Ã™â€¹ Ã™Å Ã˜Â­Ã˜ÂªÃ˜Â§Ã˜Â¬ Ã˜Â¥Ã˜ÂµÃ™â€žÃ˜Â§Ã˜Â­.",
    ],
    audienceHeading: "Ã™â€žÃ™â€¦Ã™â€  Ã™â€¡Ã˜Â°Ã˜Â§",
    audience: [
      "Ã˜Â²Ã™â€¦Ã™â€žÃ˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â³Ã™Æ’Ã™â€  Ã˜Â§Ã™â€žÃ˜Â°Ã™Å Ã™â€  Ã™â€žÃ™â€¦ Ã™Å Ã˜Â®Ã˜ÂªÃ˜Â§Ã˜Â±Ã™Ë†Ã˜Â§ Ã˜Â¨Ã˜Â¹Ã˜Â¶Ã™â€¡Ã™â€¦ Ã™â€žÃ™Æ’Ã™â€  Ã™Å Ã˜Â±Ã™Å Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â§Ã™â€žÃ™â€¡Ã˜Â¯Ã™Ë†Ã˜Â¡.",
      "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â§Ã˜Â²Ã™â€ž Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã˜ÂªÃ˜ÂªÃ™Æ’Ã™Å Ã™Â Ã™â€¦Ã˜Â¹ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂºÃ™Å Ã™Å Ã˜Â± Ã˜Â£Ã™Ë† Ã˜Â§Ã™â€žÃ˜Â¥Ã™Å Ã™â€šÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â¯Ã™Å Ã˜Â¯Ã˜Â©.",
      "Ã˜Â§Ã™â€žÃ™â€ Ã˜Â§Ã˜Â³ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å Ã™â€  Ã™Å Ã™â€¡Ã˜ÂªÃ™â€¦Ã™Ë†Ã™â€  Ã™â€žÃ™Æ’Ã™â€  Ã™â€žÃ˜Â§ Ã™Å Ã˜Â±Ã™Å Ã˜Â¯Ã™Ë†Ã™â€  Ã˜ÂªÃ™Æ’Ã˜ÂªÃ™Å Ã™Æ’Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¶Ã˜ÂºÃ˜Â·.",
    ],
    notHeading: "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™â€žÃ™Å Ã˜Â³...",
    notList: ["...Ã˜Â£Ã˜Â¯Ã˜Â§Ã˜Â© Ã™â€¦Ã˜Â±Ã˜Â§Ã™â€šÃ˜Â¨Ã˜Â©.", "...Ã˜Â¨Ã˜Â·Ã˜Â§Ã™â€šÃ˜Â© Ã™â€ Ã™â€šÃ˜Â§Ã˜Â· Ã˜Â£Ã™Ë† Ã™â€žÃ™Ë†Ã˜Â­Ã˜Â© Ã˜ÂµÃ˜Â¯Ã˜Â§Ã˜Â±Ã˜Â©.", "...Ã˜Â±Ã˜Â¦Ã™Å Ã˜Â³ Ã™â€¦Ã™â€¡Ã˜Â§Ã™â€¦."],
    weeklyHeading: "Ã˜ÂªÃ˜Â£Ã™â€¦Ã™â€ž Ã˜Â£Ã˜Â³Ã˜Â¨Ã™Ë†Ã˜Â¹Ã™Å Ã˜Å’ Ã˜Â¨Ã˜Â¥Ã™Å Ã™â€šÃ˜Â§Ã˜Â¹ Ã˜Â¨Ã˜Â´Ã˜Â±Ã™Å ",
    weeklyIntro: "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™Å Ã˜ÂªÃ˜Â­Ã˜Â±Ã™Æ’ Ã˜Â¨Ã˜Â¥Ã™Å Ã™â€šÃ˜Â§Ã˜Â¹ Ã˜Â£Ã˜Â³Ã˜Â¨Ã™Ë†Ã˜Â¹Ã™Å . Ã™Å Ã™â€žÃ˜Â§Ã˜Â­Ã˜Â¸ Ã™â€¦Ã˜Â²Ã˜Â§Ã˜Â¬ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜Â²Ã™â€ž Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â³Ã™â€žÃ˜Â§Ã˜Â³Ã™â€ž Ã˜Â£Ã™Ë† Ã™â€šÃ™Ë†Ã˜Â§Ã˜Â¦Ã™â€¦ Ã™â€¦Ã˜Â±Ã˜Â§Ã˜Â¬Ã˜Â¹Ã˜Â© Ã˜Â£Ã™Ë† Ã˜Â¶Ã˜ÂºÃ˜Â·.",
    weeklyPoints: [
      "Ã™Å Ã™â€¦Ã™Æ’Ã™â€ Ã™Æ’ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â±Ã˜Â§Ã˜Â¬Ã˜Â¹Ã˜Â© Ã˜Â£Ã˜Â³Ã˜Â¨Ã™Ë†Ã˜Â¹Ã™Å Ã˜Â§Ã™â€¹Ã˜Å’ Ã™â€žÃ™Å Ã˜Â³ Ã™Å Ã™Ë†Ã™â€¦Ã™Å Ã˜Â§Ã™â€¹. Ã™â€žÃ˜Â§ Ã˜Â³Ã™â€žÃ˜Â§Ã˜Â³Ã™â€žÃ˜Å’ Ã™â€žÃ˜Â§ Ã˜Â¶Ã˜ÂºÃ˜Â· Ã™â€žÃ™â€žÃ™â€¦Ã˜ÂªÃ˜Â§Ã˜Â¨Ã˜Â¹Ã˜Â©.",
      "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â£Ã™â€¦Ã™â€žÃ˜Â§Ã˜Âª Ã™â€žÃ™â€žÃ™ÂÃ™â€¡Ã™â€¦Ã˜Å’ Ã™â€žÃ™Å Ã˜Â³ Ã™â€žÃ™â€žÃ˜ÂªÃ™â€šÃ™Å Ã™Å Ã™â€¦.",
      "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™â€žÃ˜Â§ Ã™Å Ã™ÂÃ˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â­Ã˜Â§Ã˜Â¯Ã˜Â«Ã˜Â§Ã˜Âª ,  Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯Ã™Æ’ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ™ÂÃ™â€¡Ã™â€¦ Ã™â€šÃ˜Â¨Ã™â€ž Ã˜Â£Ã™â€  Ã˜ÂªÃ™â€šÃ˜Â±Ã˜Â± Ã™â€¦Ã˜Â§ Ã˜Â¥Ã˜Â°Ã˜Â§ Ã™Æ’Ã™â€ Ã˜Âª Ã˜ÂªÃ˜Â±Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã˜Â¯Ã˜Â«.",
    ],
    availabilityHeading: "Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™ÂÃ˜Â±",
    availabilityBody:
      "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­ Ã˜Â­Ã˜Â§Ã™â€žÃ™Å Ã˜Â§Ã™â€¹ Ã™ÂÃ™Å  Ã™â€ Ã™Å Ã™Ë†Ã˜Â²Ã™Å Ã™â€žÃ™â€ Ã˜Â¯Ã˜Â§ Ã™Ë†Ã˜Â³Ã™â€ Ã˜ÂºÃ˜Â§Ã™ÂÃ™Ë†Ã˜Â±Ã˜Â©. Ã˜Â³Ã™â€ Ã˜Â±Ã˜Â§Ã˜Â³Ã™â€žÃ™Æ’ Ã˜Â¹Ã™â€ Ã˜Â¯Ã™â€¦Ã˜Â§ Ã™Å Ã™ÂÃ˜ÂªÃ˜Â­ Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™ÂÃ™Å  Ã™â€¦Ã™â€ Ã˜Â·Ã™â€šÃ˜ÂªÃ™Æ’ ,  Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã˜Â±Ã˜Â³Ã˜Â§Ã˜Â¦Ã™â€ž Ã™â€¦Ã˜Â²Ã˜Â¹Ã˜Â¬Ã˜Â©.",
    availabilityCta: "Ã˜Â£Ã˜Â¨Ã˜Â¯Ã™Â Ã˜Â§Ã™â€¡Ã˜ÂªÃ™â€¦Ã˜Â§Ã™â€¦Ã™Æ’ Ã˜Â¹Ã™â€ Ã˜Â¯Ã™â€¦Ã˜Â§ Ã™Å Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™ÂÃ™Å  Ã™â€¦Ã™â€ Ã˜Â·Ã™â€šÃ˜ÂªÃ™Æ’.",
    storeSectionHeading: "Ã˜Â¹Ã™â€ Ã˜Â¯Ã™â€¦Ã˜Â§ Ã˜ÂªÃ™Æ’Ã™Ë†Ã™â€  Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â²Ã˜Â§Ã™â€¹",
    storeSectionSubhead: "Ã™Æ’Ã™Å Ã™â€ Ã™â€žÃ™Å  Ã™â€¦Ã™Ë†Ã˜Â¬Ã™Ë†Ã˜Â¯ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š ,  Ã˜Â§Ã˜Â¨Ã˜Â¯Ã˜Â£ Ã˜Â¹Ã™â€žÃ™â€° iOS Ã˜Â£Ã™Ë† Android.",
  },
  es: {
    recognition: {
      heading: "Vivir juntos puede pesar.",
      subhead: "Incluso cuando nadie hace nada mal.",
      body: "Kinly te ayuda a notar lo que necesita la casa antes de que alguien se sienta culpado.",
    },
    hero: {
      headline: "Una forma mÃƒÂ¡s tranquila de vivir juntos.",
      subhead: "Un lugar compartido y calmado para notar cÃƒÂ³mo se siente la casa antes de que te pidan algo.",
      body: "Abres Kinly para ver quÃƒÂ© importa en casa ahora mismo, sin presiÃƒÂ³n, persecuciÃƒÂ³n ni juicios.",
      ctaHeading: "Listo para empezar",
      privacyNote: "Privado por defecto. Sin anuncios. Sin vigilancia.",
    },
    storeLabels: {
      app: "Descargar en App Store",
      play: "Obtener en Google Play",
    },
    howHeading: "CÃƒÂ³mo funciona Kinly",
    toolsIntro:
      "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃƒÂ³n diaria ,  sin convertir la vida compartida en un sistema de tareas.",
    screens: [
      {
        title: "Hoy",
        eyebrow: "Ahora",
        headline: "QuÃƒÂ© necesita tu atenciÃƒÂ³n",
        copy: "Cosas por hacer, cosas para notar y prÃƒÂ³ximos pasos suaves",
        footer: "Tareas de hoy, pendientes y novedades de tu hogar.",
        image:
          LANDING_SCREEN_ASSETS.es.today,
      },
      {
        title: "Gestionar",
        eyebrow: "Cambios",
        headline: "Cambia cÃƒÂ³mo funcionan las cosas",
        copy: "Editar, asignar, comentar o quitar flujos y compartidos",
        footer: "Siempre tienes el control: nada queda bloqueado.",
        image:
          LANDING_SCREEN_ASSETS.es.manage,
      },
      {
        title: "Home Hub",
        eyebrow: "Hogar",
        headline: "Lo que importa en nuestra casa",
        copy: "Momentos, normas y referencias compartidas",
        footer: "Gratitud, ambiente de la casa y notas importantes, compartido por todos.",
        image:
          LANDING_SCREEN_ASSETS.es.hub,
      },
    ],
    chipsHeading: "Ã‚Â¿Suena como tu casa?",
    chips: [
      "Nos importamos, pero las tablas de tareas tensan todo.",
      "Queremos saber cÃƒÂ³mo se siente la casa sin culpar a nadie.",
      "Evitamos el drama pero igual queremos ser vistos.",
    ],
    roleHeading: "Rol de Kinly: primero reflexiÃƒÂ³n",
    rolePoints: [
      "Refleja cÃƒÂ³mo se siente la casa antes de pedir acciÃƒÂ³n.",
      "Hace visible el cuidado sin asignar responsabilidad.",
    ],
    formingHeading: "Si tu hogar aÃƒÂºn se estÃƒÂ¡ formando",
    formingPoints: [
      "La incertidumbre es normal, no un fallo.",
      "Kinly trata el proceso de descubrirlo como algo sano, no algo que arreglar.",
    ],
    audienceHeading: "Para quiÃƒÂ©n es",
    audience: [
      "CompaÃƒÂ±eros de piso que no se eligieron pero quieren calma.",
      "Hogares ajustÃƒÂ¡ndose a cambios o nuevos ritmos.",
      "Personas que cuidan pero no quieren tÃƒÂ¡cticas de presiÃƒÂ³n.",
    ],
    notHeading: "Kinly no es...",
    notList: ["...una herramienta de vigilancia.", "...un marcador o ranking.", "...un jefe de tareas."],
    weeklyHeading: "ReflexiÃƒÂ³n semanal, a ritmo humano",
    weeklyIntro: "Kinly sigue un ritmo semanal. Nota el ÃƒÂ¡nimo del hogar sin rachas, listas ni presiÃƒÂ³n.",
    weeklyPoints: [
      "Puedes revisar semanalmente, no a diario. Sin rachas ni presiÃƒÂ³n por mantenerlas.",
      "Las reflexiones son para entender, no para calificar.",
      "Kinly nunca fuerza conversaciones; te ayuda a entender antes de decidir hablar.",
    ],
    availabilityHeading: "Disponibilidad",
    availabilityBody:
      "Kinly estÃƒÂ¡ disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu zona; sin spam.",
    availabilityCta: "AvÃƒÂ­same cuando Kinly estÃƒÂ© disponible en mi zona.",
    storeSectionHeading: "Cuando estÃƒÂ©s listo",
    storeSectionSubhead: "Kinly vive en la app ,  empieza en iOS o Android.",
  },
};

export function resolveLandingCopy(lang: string | null): LandingCopy {
  const key = lang?.split("-")[0]?.toLowerCase() ?? "en";
  const overrides = LANDING_COPY_OVERRIDES[key] ?? null;
  return overrides ? { ...LANDING_COPY_EN, ...overrides } : LANDING_COPY_EN;
}




