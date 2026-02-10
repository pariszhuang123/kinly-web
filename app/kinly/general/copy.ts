type LandingScreen = {
  title: string;
  eyebrow: string;
  headline: string;
  copy: string;
  footer: string;
  image: string;
};

type HowStep = {
  title: string;
  body: string;
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
  howSubhead: string;
  howSteps: HowStep[];
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
  toolsHeading: string;
  toolsIntro: string;
  toolsList: string[];
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
  howHeading: "How Kinly works",
  howSubhead: "Three simple steps to keep everyone aligned.",
  howSteps: [
    {
      title: "Agree expectations with photos",
      body: "Snap a photo of what done looks like in shared areas so everyone sees the same standard.",
    },
    {
      title: "Reset weekly, lightly",
      body: "Once a week, surface what feels off and choose what matters. No streaks, no pressure.",
    },
    {
      title: "Keep shared visibility",
      body: "Everyone can see gentle notes and updates about the home, so needs are clear without blame.",
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
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
    },
    {
      title: "Manage",
      eyebrow: "Make changes",
      headline: "Change how things work",
      copy: "Edit, assign, comment on, or remove flows and shares",
      footer: "You're always in control - nothing is locked in.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
    },
    {
      title: "Home Hub",
      eyebrow: "Shared home",
      headline: "What matters in our home",
      copy: "Moments, norms, and shared references",
      footer: "Gratitude, house vibe, and important notes - shared by everyone.",
      image:
        "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
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
  toolsHeading: "Supported by practical tools",
  toolsIntro:
    "Once expectations are aligned, Kinly offers simple tools to reduce everyday friction without turning shared living into a task system.",
  toolsList: [
    "Shared flows (with assignments if you want) so repeat tasks stay clear without policing.",
    "Shared bills so due dates and amounts are visible without chasing.",
    "Calm check-ins that keep everyone seen and supported without pointing fingers.",
  ],
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
      heading: "Ø§Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ ÙŠØµØ¨Ø­ Ø«Ù‚ÙŠÙ„Ø§Ù‹.",
      subhead: "Ø­ØªÙ‰ Ø¹Ù†Ø¯Ù…Ø§ Ù„Ø§ Ø£Ø­Ø¯ ÙŠÙØ¹Ù„ Ø´ÙŠØ¦Ø§Ù‹ Ø®Ø§Ø·Ø¦Ø§Ù‹.",
      body: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ Ù…Ù„Ø§Ø­Ø¸Ø© Ù…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡ Ø§Ù„Ù…Ù†Ø²Ù„ â€” Ù‚Ø¨Ù„ Ø£Ù† ÙŠØ´Ø¹Ø± Ø£Ø­Ø¯ Ø¨Ø§Ù„Ù‘Ù„ÙˆÙ….",
    },
    hero: {
      headline: "Ø·Ø±ÙŠÙ‚Ø© Ø£Ù‡Ø¯Ø£ Ù„Ù„Ø¹ÙŠØ´ Ù…Ø¹Ø§Ù‹.",
      subhead: "Ù…ÙƒØ§Ù† Ù…Ø´ØªØ±Ùƒ ÙˆÙ‡Ø§Ø¯Ø¦ Ù„Ù…Ù„Ø§Ø­Ø¸Ø© ÙƒÙŠÙ ÙŠØ´Ø¹Ø± Ø§Ù„Ù…Ù†Ø²Ù„ Ù‚Ø¨Ù„ Ø£Ù† ÙŠØ·Ù„Ø¨ Ù…Ù†Ùƒ Ø£Ø­Ø¯ Ø£ÙŠ Ø´ÙŠØ¡.",
      body: "ØªÙØªØ­ ÙƒÙŠÙ†Ù„ÙŠ Ù„ØªØ±Ù‰ Ù…Ø§ ÙŠÙ‡Ù… ÙÙŠ Ø§Ù„Ù…Ù†Ø²Ù„ Ø§Ù„Ø¢Ù† â€” Ø¨Ø¯ÙˆÙ† Ø¶ØºØ· Ø£Ùˆ Ù…Ù„Ø§Ø­Ù‚Ø© Ø£Ùˆ Ø­ÙƒÙ….",
      ctaHeading: "Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¨Ø¯Ø¡",
      privacyNote: "Ø®Ø§Øµ Ø¨Ø´ÙƒÙ„ Ø§ÙØªØ±Ø§Ø¶ÙŠ. Ø¨Ø¯ÙˆÙ† Ø¥Ø¹Ù„Ø§Ù†Ø§Øª. Ø¨Ø¯ÙˆÙ† Ù…Ø±Ø§Ù‚Ø¨Ø©.",
    },
    storeLabels: {
      app: "ØªØ­Ù…ÙŠÙ„ Ù…Ù† App Store",
      play: "Ø§Ø­ØµÙ„ Ø¹Ù„ÙŠÙ‡ Ù…Ù† Google Play",
    },
    howHeading: "ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ ÙƒÙŠÙ†Ù„ÙŠ",
    howSubhead: "Ø«Ù„Ø§Ø« Ø®Ø·ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªØ¨Ù‚ÙŠ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø¹Ù„Ù‰ ØªÙˆØ§ÙÙ‚.",
    howSteps: [
      {
        title: "Ø§ØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ø¨Ø§Ù„ØµÙˆØ±",
        body: "Ø§Ù„ØªÙ‚Ø· ØµÙˆØ±Ø© Ø³Ø±ÙŠØ¹Ø© Ù„Ù…Ø§ ÙŠØ¨Ø¯Ùˆ Ø¹Ù„ÙŠÙ‡ \"Ø§Ù„Ø¥Ù†Ø¬Ø§Ø²\" ÙÙŠ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ù„ÙŠØ±Ù‰ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ù†ÙØ³ Ø§Ù„Ù…Ø¹ÙŠØ§Ø±.",
      },
      {
        title: "Ø¥Ø¹Ø§Ø¯Ø© Ø¶Ø¨Ø· Ø£Ø³Ø¨ÙˆØ¹ÙŠØ© ÙˆØ®ÙÙŠÙØ©",
        body: "Ù…Ø±Ø© ÙÙŠ Ø§Ù„Ø£Ø³Ø¨ÙˆØ¹ØŒ Ø£Ø¸Ù‡Ø±ÙˆØ§ Ù…Ø§ ÙŠØ²Ø¹Ø¬ÙƒÙ… ÙˆØ§Ø®ØªØ§Ø±ÙˆØ§ Ù…Ø§ ÙŠÙ‡Ù… â€” Ø¨Ø¯ÙˆÙ† Ø³Ù„Ø§Ø³Ù„ Ø£Ùˆ Ø¶ØºØ·.",
      },
      {
        title: "Ø­Ø§ÙØ¸ÙˆØ§ Ø¹Ù„Ù‰ ÙˆØ¶ÙˆØ­ Ù…Ø´ØªØ±Ùƒ",
        body: "ÙŠÙ…ÙƒÙ† Ù„Ù„Ø¬Ù…ÙŠØ¹ Ø±Ø¤ÙŠØ© Ù…Ù„Ø§Ø­Ø¸Ø§Øª ÙˆØªØ­Ø¯ÙŠØ«Ø§Øª Ù„Ø·ÙŠÙØ© Ø¹Ù† Ø§Ù„Ù…Ù†Ø²Ù„ØŒ Ù„ØªÙƒÙˆÙ† Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¨Ù„Ø§ Ù„ÙˆÙ….",
      },
    ],
    toolsHeading: "Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ø£Ø¯ÙˆØ§Øª Ø¹Ù…Ù„ÙŠØ©",
    toolsIntro:
      "Ø¨Ø¹Ø¯ Ø£Ù† ØªØªÙÙ‚ÙˆØ§ Ø¹Ù„Ù‰ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§ØªØŒ ÙŠÙ‚Ø¯Ù… ÙƒÙŠÙ†Ù„ÙŠ Ø£Ø¯ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØ§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© â€” Ø¨Ø¯ÙˆÙ† ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹ÙŠØ´ Ø§Ù„Ù…Ø´ØªØ±Ùƒ Ø¥Ù„Ù‰ Ù†Ø¸Ø§Ù… Ù…Ù‡Ø§Ù….",
    toolsList: [
      "ØªØ¯ÙÙ‘Ù‚Ø§Øª Ù…Ø´ØªØ±ÙƒØ© (Ù…Ø¹ ØªØ¹ÙŠÙŠÙ†Ø§Øª Ø¥Ø°Ø§ Ø£Ø±Ø¯ØªÙ…) Ù„ØªØ¨Ù‚Ù‰ Ø§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„Ù…ØªÙƒØ±Ø±Ø© ÙˆØ§Ø¶Ø­Ø© Ø¨Ø¯ÙˆÙ† Ø±Ù‚Ø§Ø¨Ø©.",
      "ÙÙˆØ§ØªÙŠØ± Ù…Ø´ØªØ±ÙƒØ© Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù…Ø¨Ø§Ù„Øº ÙˆØ§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯ Ø¨Ø¯ÙˆÙ† Ù…Ù„Ø§Ø­Ù‚Ø©.",
      "Ù…Ø±Ø§Ø¬Ø¹Ø§Øª Ù‡Ø§Ø¯Ø¦Ø© ØªØ¬Ø¹Ù„ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ù…Ø±Ø¦ÙŠÙŠÙ† ÙˆÙ…Ø¯Ø¹ÙˆÙ…ÙŠÙ† Ø¨Ø¯ÙˆÙ† ØªÙˆØ¬ÙŠÙ‡ Ø£ØµØ§Ø¨Ø¹ Ø§Ù„Ø§ØªÙ‡Ø§Ù….",
    ],
    screens: [
      {
        title: "Ø§Ù„ÙŠÙˆÙ…",
        eyebrow: "Ø§Ù„Ø¢Ù†",
        headline: "Ù…Ø§ ÙŠØ­ØªØ§Ø¬ Ø§Ù†ØªØ¨Ø§Ù‡Ùƒ",
        copy: "Ø£Ø´ÙŠØ§Ø¡ Ù„Ù„Ù‚ÙŠØ§Ù… Ø¨Ù‡Ø§ØŒ Ø£Ø´ÙŠØ§Ø¡ Ù„Ù„Ù…Ù„Ø§Ø­Ø¸Ø©ØŒ ÙˆØ®Ø·ÙˆØ§Øª Ù„Ø·ÙŠÙØ© Ù‚Ø§Ø¯Ù…Ø©",
        footer: "Ù…Ù‡Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ØŒ Ø§Ù„Ø¹Ù†Ø§ØµØ± ØºÙŠØ± Ø§Ù„Ù…ÙƒØªÙ…Ù„Ø©ØŒ ÙˆØªØ­Ø¯ÙŠØ«Ø§Øª Ù…Ù† Ù…Ù†Ø²Ù„Ùƒ.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
      },
      {
        title: "Ø¥Ø¯Ø§Ø±Ø©",
        eyebrow: "Ø¥Ø¬Ø±Ø§Ø¡ ØªØºÙŠÙŠØ±Ø§Øª",
        headline: "ØºÙŠÙ‘Ø± ÙƒÙŠÙ ØªØ¹Ù…Ù„ Ø§Ù„Ø£Ø´ÙŠØ§Ø¡",
        copy: "Ø¹Ø¯Ù‘Ù„ØŒ ÙˆØ²Ù‘Ø¹ØŒ Ø¹Ù„Ù‘Ù‚ Ø¹Ù„Ù‰ØŒ Ø£Ùˆ Ø£Ø²Ù„ Ø§Ù„ØªØ¯ÙÙ‚Ø§Øª ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙƒØ§Øª",
        footer: "Ø£Ù†Øª Ø¯Ø§Ø¦Ù…Ø§Ù‹ Ù…Ø³ÙŠØ·Ø± - Ù„Ø§ Ø´ÙŠØ¡ Ù…Ù‚ÙÙ„.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
      },
      {
        title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ù†Ø²Ù„",
        eyebrow: "Ø§Ù„Ù…Ù†Ø²Ù„ Ø§Ù„Ù…Ø´ØªØ±Ùƒ",
        headline: "Ù…Ø§ ÙŠÙ‡Ù… ÙÙŠ Ù…Ù†Ø²Ù„Ù†Ø§",
        copy: "Ù„Ø­Ø¸Ø§ØªØŒ Ù‚ÙˆØ§Ø¹Ø¯ØŒ ÙˆÙ…Ø±Ø§Ø¬Ø¹ Ù…Ø´ØªØ±ÙƒØ©",
        footer: "Ø§Ù„Ø§Ù…ØªÙ†Ø§Ù†ØŒ Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ù…Ù†Ø²Ù„ØŒ ÙˆØ§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ù…Ù‡Ù…Ø© - Ù…Ø´ØªØ±ÙƒØ© Ù…Ù† Ø§Ù„Ø¬Ù…ÙŠØ¹.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
      },
    ],    
    chipsHeading: "Ù‡Ù„ ÙŠØ¨Ø¯Ùˆ Ù‡Ø°Ø§ Ù…Ø«Ù„ Ù…ÙƒØ§Ù†ÙƒØŸ",
    chips: [
      "Ù†Ù‡ØªÙ… Ø¨Ø¨Ø¹Ø¶ØŒ Ù„ÙƒÙ† Ø¬Ø¯Ø§ÙˆÙ„ Ø§Ù„Ù…Ù‡Ø§Ù… ØªØ¬Ø¹Ù„ Ø§Ù„Ø£Ù…ÙˆØ± Ù…ØªÙˆØªØ±Ø©.",
      "Ù†Ø±ÙŠØ¯ Ù…Ø¹Ø±ÙØ© ÙƒÙŠÙ ÙŠØ´Ø¹Ø± Ø§Ù„Ù…Ù†Ø²Ù„ Ø¨Ø¯ÙˆÙ† Ø¥Ù„Ù‚Ø§Ø¡ Ø§Ù„Ù„ÙˆÙ….",
      "Ù†ØªØ¬Ù†Ø¨ Ø§Ù„Ø¯Ø±Ø§Ù…Ø§ Ù„ÙƒÙ†Ù†Ø§ Ù†Ø±ÙŠØ¯ Ø£Ù† Ù†ÙØ±Ù‰.",
    ],
    roleHeading: "Ø¯ÙˆØ± ÙƒÙŠÙ†Ù„ÙŠ: Ø§Ù„ØªØ£Ù…Ù„ Ø£ÙˆÙ„Ø§Ù‹",
    rolePoints: [
      "ÙŠØ¹ÙƒØ³ ÙƒÙŠÙ ÙŠØ´Ø¹Ø± Ø§Ù„Ù…Ù†Ø²Ù„ Ù‚Ø¨Ù„ Ø·Ù„Ø¨ Ø£ÙŠ Ø¥Ø¬Ø±Ø§Ø¡.",
      "ÙŠØ¬Ø¹Ù„ Ø§Ù„Ø§Ù‡ØªÙ…Ø§Ù… Ù…Ø±Ø¦ÙŠØ§Ù‹ Ø¨Ø¯ÙˆÙ† ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ©.",
    ],
    formingHeading: "Ø¥Ø°Ø§ ÙƒØ§Ù† Ù…Ù†Ø²Ù„Ùƒ Ù„Ø§ ÙŠØ²Ø§Ù„ ÙŠØªØ´ÙƒÙ„",
    formingPoints: [
      "Ø¹Ø¯Ù… Ø§Ù„ÙŠÙ‚ÙŠÙ† Ø·Ø¨ÙŠØ¹ÙŠ â€” Ù„ÙŠØ³ ÙØ´Ù„Ø§Ù‹.",
      "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØ¹Ø§Ù…Ù„ Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ø£Ù…ÙˆØ± ÙƒØ´ÙŠØ¡ ØµØ­ÙŠØŒ Ù„ÙŠØ³ Ø´ÙŠØ¦Ø§Ù‹ ÙŠØ­ØªØ§Ø¬ Ø¥ØµÙ„Ø§Ø­.",
    ],
    audienceHeading: "Ù„Ù…Ù† Ù‡Ø°Ø§",
    audience: [
      "Ø²Ù…Ù„Ø§Ø¡ Ø§Ù„Ø³ÙƒÙ† Ø§Ù„Ø°ÙŠÙ† Ù„Ù… ÙŠØ®ØªØ§Ø±ÙˆØ§ Ø¨Ø¹Ø¶Ù‡Ù… Ù„ÙƒÙ† ÙŠØ±ÙŠØ¯ÙˆÙ† Ø§Ù„Ù‡Ø¯ÙˆØ¡.",
      "Ø§Ù„Ù…Ù†Ø§Ø²Ù„ Ø§Ù„ØªÙŠ ØªØªÙƒÙŠÙ Ù…Ø¹ Ø§Ù„ØªØºÙŠÙŠØ± Ø£Ùˆ Ø§Ù„Ø¥ÙŠÙ‚Ø§Ø¹Ø§Øª Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©.",
      "Ø§Ù„Ù†Ø§Ø³ Ø§Ù„Ø°ÙŠÙ† ÙŠÙ‡ØªÙ…ÙˆÙ† Ù„ÙƒÙ† Ù„Ø§ ÙŠØ±ÙŠØ¯ÙˆÙ† ØªÙƒØªÙŠÙƒØ§Øª Ø§Ù„Ø¶ØºØ·.",
    ],
    notHeading: "ÙƒÙŠÙ†Ù„ÙŠ Ù„ÙŠØ³...",
    notList: ["...Ø£Ø¯Ø§Ø© Ù…Ø±Ø§Ù‚Ø¨Ø©.", "...Ø¨Ø·Ø§Ù‚Ø© Ù†Ù‚Ø§Ø· Ø£Ùˆ Ù„ÙˆØ­Ø© ØµØ¯Ø§Ø±Ø©.", "...Ø±Ø¦ÙŠØ³ Ù…Ù‡Ø§Ù…."],
    weeklyHeading: "ØªØ£Ù…Ù„ Ø£Ø³Ø¨ÙˆØ¹ÙŠØŒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø¨Ø´Ø±ÙŠ",
    weeklyIntro: "ÙƒÙŠÙ†Ù„ÙŠ ÙŠØªØ­Ø±Ùƒ Ø¨Ø¥ÙŠÙ‚Ø§Ø¹ Ø£Ø³Ø¨ÙˆØ¹ÙŠ. ÙŠÙ„Ø§Ø­Ø¸ Ù…Ø²Ø§Ø¬ Ø§Ù„Ù…Ù†Ø²Ù„ Ø¨Ø¯ÙˆÙ† Ø³Ù„Ø§Ø³Ù„ Ø£Ùˆ Ù‚ÙˆØ§Ø¦Ù… Ù…Ø±Ø§Ø¬Ø¹Ø© Ø£Ùˆ Ø¶ØºØ·.",
    weeklyPoints: [
      "ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© Ø£Ø³Ø¨ÙˆØ¹ÙŠØ§Ù‹ØŒ Ù„ÙŠØ³ ÙŠÙˆÙ…ÙŠØ§Ù‹. Ù„Ø§ Ø³Ù„Ø§Ø³Ù„ØŒ Ù„Ø§ Ø¶ØºØ· Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©.",
      "Ø§Ù„ØªØ£Ù…Ù„Ø§Øª Ù„Ù„ÙÙ‡Ù…ØŒ Ù„ÙŠØ³ Ù„Ù„ØªÙ‚ÙŠÙŠÙ….",
      "ÙƒÙŠÙ†Ù„ÙŠ Ù„Ø§ ÙŠÙØ±Ø¶ Ù…Ø­Ø§Ø¯Ø«Ø§Øª â€” ÙŠØ³Ø§Ø¹Ø¯Ùƒ Ø¹Ù„Ù‰ Ø§Ù„ÙÙ‡Ù… Ù‚Ø¨Ù„ Ø£Ù† ØªÙ‚Ø±Ø± Ù…Ø§ Ø¥Ø°Ø§ ÙƒÙ†Øª ØªØ±ÙŠØ¯ Ø§Ù„ØªØ­Ø¯Ø«.",
    ],
    availabilityHeading: "Ø§Ù„ØªÙˆÙØ±",
    availabilityBody:
      "ÙƒÙŠÙ†Ù„ÙŠ Ù…ØªØ§Ø­ Ø­Ø§Ù„ÙŠØ§Ù‹ ÙÙŠ Ù†ÙŠÙˆØ²ÙŠÙ„Ù†Ø¯Ø§ ÙˆØ³Ù†ØºØ§ÙÙˆØ±Ø©. Ø³Ù†Ø±Ø§Ø³Ù„Ùƒ Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙØªØ­ ÙƒÙŠÙ†Ù„ÙŠ ÙÙŠ Ù…Ù†Ø·Ù‚ØªÙƒ â€” Ø¨Ø¯ÙˆÙ† Ø±Ø³Ø§Ø¦Ù„ Ù…Ø²Ø¹Ø¬Ø©.",
    availabilityCta: "Ø£Ø¨Ø¯Ù Ø§Ù‡ØªÙ…Ø§Ù…Ùƒ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªÙˆÙØ± ÙƒÙŠÙ†Ù„ÙŠ ÙÙŠ Ù…Ù†Ø·Ù‚ØªÙƒ.",
    storeSectionHeading: "Ø¹Ù†Ø¯Ù…Ø§ ØªÙƒÙˆÙ† Ø¬Ø§Ù‡Ø²Ø§Ù‹",
    storeSectionSubhead: "ÙƒÙŠÙ†Ù„ÙŠ Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ â€” Ø§Ø¨Ø¯Ø£ Ø¹Ù„Ù‰ iOS Ø£Ùˆ Android.",
  },
  es: {
    recognition: {
      heading: "Vivir juntos puede pesar.",
      subhead: "Incluso cuando nadie hace nada mal.",
      body: "Kinly te ayuda a notar lo que necesita la casa antes de que alguien se sienta culpado.",
    },
    hero: {
      headline: "Una forma mÃ¡s tranquila de vivir juntos.",
      subhead: "Un lugar compartido y calmado para notar cÃ³mo se siente la casa antes de que te pidan algo.",
      body: "Abres Kinly para ver quÃ© importa en casa ahora mismo, sin presiÃ³n, persecuciÃ³n ni juicios.",
      ctaHeading: "Listo para empezar",
      privacyNote: "Privado por defecto. Sin anuncios. Sin vigilancia.",
    },
    storeLabels: {
      app: "Descargar en App Store",
      play: "Obtener en Google Play",
    },
    howHeading: "CÃ³mo funciona Kinly",
    howSubhead: "Tres pasos simples que mantienen a todos alineados.",
    howSteps: [
      {
        title: "Acordar expectativas con fotos",
        body: "Toma una foto rÃ¡pida de cÃ³mo se ve \"listo\" en las Ã¡reas compartidas para que todos vean el mismo estÃ¡ndar.",
      },
      {
        title: "Reajuste semanal, sin presiÃ³n",
        body: "Una vez por semana, pongan sobre la mesa lo que incomoda y elijan quÃ© importa â€” sin rachas ni presiÃ³n.",
      },
      {
        title: "Mantener visibilidad compartida",
        body: "Todos pueden ver notas y actualizaciones suaves sobre el hogar, asÃ­ las necesidades son claras sin culpas.",
      },
    ],
    toolsHeading: "Apoyado por herramientas prÃ¡cticas",
    toolsIntro:
      "Cuando ya acordaron expectativas, Kinly ofrece herramientas sencillas que reducen la fricciÃ³n diaria â€” sin convertir la vida compartida en un sistema de tareas.",
    toolsList: [
      "Flujos compartidos (con asignaciones si quieren) para que las tareas repetidas estÃ©n claras sin vigilar.",
      "Cuentas compartidas para ver montos y fechas sin andar persiguiendo pagos.",
      "Revisiones calmadas para que todos se sientan vistos y apoyados sin seÃ±alar a nadie.",
    ],
    screens: [
      {
        title: "Hoy",
        eyebrow: "Ahora",
        headline: "QuÃ© necesita tu atenciÃ³n",
        copy: "Cosas por hacer, cosas para notar y prÃ³ximos pasos suaves",
        footer: "Tareas de hoy, pendientes y novedades de tu hogar.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/today.png",
      },
      {
        title: "Gestionar",
        eyebrow: "Cambios",
        headline: "Cambia cÃ³mo funcionan las cosas",
        copy: "Editar, asignar, comentar o quitar flujos y compartidos",
        footer: "Siempre tienes el control: nada queda bloqueado.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/explore.png",
      },
      {
        title: "Home Hub",
        eyebrow: "Hogar",
        headline: "Lo que importa en nuestra casa",
        copy: "Momentos, normas y referencias compartidas",
        footer: "Gratitud, ambiente de la casa y notas importantes, compartido por todos.",
        image:
          "https://ggbbywcyallstetvtgcw.supabase.co/storage/v1/object/public/Kinly%20Assets/Kinly%20Web/EN/hub.png",
      },
    ],
    chipsHeading: "Â¿Suena como tu casa?",
    chips: [
      "Nos importamos, pero las tablas de tareas tensan todo.",
      "Queremos saber cÃ³mo se siente la casa sin culpar a nadie.",
      "Evitamos el drama pero igual queremos ser vistos.",
    ],
    roleHeading: "Rol de Kinly: primero reflexiÃ³n",
    rolePoints: [
      "Refleja cÃ³mo se siente la casa antes de pedir acciÃ³n.",
      "Hace visible el cuidado sin asignar responsabilidad.",
    ],
    formingHeading: "Si tu hogar aÃºn se estÃ¡ formando",
    formingPoints: [
      "La incertidumbre es normal, no un fallo.",
      "Kinly trata el proceso de descubrirlo como algo sano, no algo que arreglar.",
    ],
    audienceHeading: "Para quiÃ©n es",
    audience: [
      "CompaÃ±eros de piso que no se eligieron pero quieren calma.",
      "Hogares ajustÃ¡ndose a cambios o nuevos ritmos.",
      "Personas que cuidan pero no quieren tÃ¡cticas de presiÃ³n.",
    ],
    notHeading: "Kinly no es...",
    notList: ["...una herramienta de vigilancia.", "...un marcador o ranking.", "...un jefe de tareas."],
    weeklyHeading: "ReflexiÃ³n semanal, a ritmo humano",
    weeklyIntro: "Kinly sigue un ritmo semanal. Nota el Ã¡nimo del hogar sin rachas, listas ni presiÃ³n.",
    weeklyPoints: [
      "Puedes revisar semanalmente, no a diario. Sin rachas ni presiÃ³n por mantenerlas.",
      "Las reflexiones son para entender, no para calificar.",
      "Kinly nunca fuerza conversaciones; te ayuda a entender antes de decidir hablar.",
    ],
    availabilityHeading: "Disponibilidad",
    availabilityBody:
      "Kinly estÃ¡ disponible en Nueva Zelanda y Singapur. Te avisaremos cuando abra en tu zona; sin spam.",
    availabilityCta: "AvÃ­same cuando Kinly estÃ© disponible en mi zona.",
    storeSectionHeading: "Cuando estÃ©s listo",
    storeSectionSubhead: "Kinly vive en la app â€” empieza en iOS o Android.",
  },
};

export function resolveLandingCopy(lang: string | null): LandingCopy {
  const key = lang?.split("-")[0]?.toLowerCase() ?? "en";
  const overrides = LANDING_COPY_OVERRIDES[key] ?? null;
  return overrides ? { ...LANDING_COPY_EN, ...overrides } : LANDING_COPY_EN;
}


