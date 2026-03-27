import { getSupportedRegionCodes } from "../../../lib/regionSupport";

export const OWNER_PAGE_KEY = "kinly_fit_check_owner";
export const CANDIDATE_JOIN_PAGE_KEY = "kinly_fit_check_candidate_join";
export const CANDIDATE_RESULT_PAGE_KEY = "kinly_fit_check_candidate_result";

export const fitCheckCopy = {
  owner: {
    eyebrow: "Owner-first screening tool",
    title: "Run a quick flatmate fit check before the interview.",
    subtitle:
      "Capture the household vibe, generate a share link, and keep the full applicant inbox for the app.",
    intro:
      "Answer the same four behavioural questions your applicants will see. On web you can create the draft and share the link. In app you unlock the applicant inbox and candidate briefings.",
    resume: "Draft found on this browser. You can update it and keep the same share link.",
    summaryTitle: "Your home vibe summary",
    shareTitle: "Share this applicant link",
    shareHelp: "Applicants answer anonymously. The full inbox stays in the app.",
    copyLink: "Copy link",
    copied: "Copied",
    continueTitle: "See applicant briefings in the app",
    continueBody:
      "The web flow stops at draft creation. Claim the fit check in Kinly to unlock the full applicant inbox and candidate briefings.",
    submit: "Create fit check link",
    update: "Update fit check",
    missingAnswers: "Answer all four questions to continue.",
  },
  candidate: {
    title: "Share how you live day to day.",
    subtitle:
      "This is a quick, anonymous vibe check before the viewing or interview. Your answers help the household know what to ask next.",
    displayNameLabel: "First name or nickname",
    displayNameHint: "This is how the household will recognize your submission.",
    displayNamePlaceholder: "e.g. Alex",
    locationTitle: "Add your location",
    locationBody: "Choose your country and city before you send your answers.",
    countryLabel: "Country",
    countryHint: "You can change the pre-selected country if it looks wrong.",
    cityLabel: "City",
    cityHint: "Choose a city from the list for your selected country.",
    cityPlaceholder: "Search for your city",
    cityEmpty: "No matching cities for that country yet.",
    continueToLocation: "Continue to location",
    submit: "Send my answers",
    invalidLink: "This fit check link is unavailable.",
    invalidHelp: "If the household still wants your answers, ask them for a fresh link.",
    missingLocation: "Choose your country and city before continuing.",
  },
  result: {
    title: "Your flatmate fit check is complete.",
    subtitle:
      "This page reflects only your own answers. It does not compare you with the household or other applicants.",
    appTitle: "Keep this in Kinly",
    appBody:
      "Download the app if you want to keep your living-style profile handy for future homes and shared-living conversations.",
    learnMore: "Learn more about Kinly",
    unavailable: "This personalized result is not available on this device.",
    locationPrefix: "Location:",
  },
  app: {
    iosLabel: "Download on the App Store",
    androidLabel: "Get it on Google Play",
    fallbackTitle: "Availability",
    fallbackBody: `Kinly is currently available in ${getSupportedRegionCodes().join(", ")}.`,
  },
};
