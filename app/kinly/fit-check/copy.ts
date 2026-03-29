import { getSupportedRegionCodes } from "../../../lib/regionSupport";

export const OWNER_PAGE_KEY = "kinly_fit_check_owner";
export const CANDIDATE_JOIN_PAGE_KEY = "kinly_fit_check_candidate_join";
export const CANDIDATE_RESULT_PAGE_KEY = "kinly_fit_check_candidate_result";

export const fitCheckCopy = {
  owner: {
    eyebrow: "Free flatmate screening tool",
    title: "Know what to ask before the interview.",
    subtitle:
      "Bad flatmate picks usually come down to everyday habits — not first impressions.",
    intro:
      "Answer four quick questions about how your home runs. Share the link with your shortlisted applicants and spot where living styles match or clash — before anyone walks through the door.",
    statText: "Nearly half of renters report a negative housemate experience",
    statSource: "Flatmates.com.au",
    statUrl: "https://flatmates.com.au/info/sharing-a-home",
    resume: "Draft found on this browser. You can update it and keep the same share link.",
    summaryTitle: "Example: what a match looks like",
    summarySubtitle: "Here's a preview using a simulated applicant — so you can see how results compare before sharing the link.",
    matchLabel: "Match",
    closeLabel: "Close",
    clashLabel: "Different",
    youLabel: "You",
    applicantLabel: "Applicant",
    questionsTitle: "Questions worth asking in the interview",
    questionsSubtitle: "Targeted to where your living styles differ — so you know what to dig into.",
    bonusTitle: "Other questions people wish they'd asked",
    bonusSubtitle: "Sourced from flatmates and landlords who learned the hard way.",
    shareTitle: "Share this applicant link",
    shareHelp: "Applicants answer anonymously. The full inbox stays in the app.",
    copyLink: "Copy link",
    copied: "Copied",
    signInTitle: "Match against real applicants",
    signInBody:
      "Sign in to send your fit check to potential flatmates and see how their answers compare to yours.",
    signInGoogle: "Continue with Google",
    signInApple: "Continue with Apple",
    successTitle: "Your fit check is ready!",
    successBody: "Share the link below with your shortlisted applicants.",
    submit: "Create fit check link",
    update: "Update fit check",
    missingAnswers: "Answer all four questions to continue.",
    next: "Next",
    back: "Back",
    progressLabel: "Step",
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
    priorityCitiesTitle: "Priority cities",
    otherCitiesTitle: "Other cities",
    cityEmpty: "No matching cities for that country yet.",
    continueToLocation: "Continue to location",
    submit: "Send my answers",
    invalidLink: "This fit check link is unavailable.",
    invalidHelp: "If the household still wants your answers, ask them for a fresh link.",
    missingLocation: "Choose your country and city before continuing.",
    next: "Next",
    back: "Back",
    progressLabel: "Step",
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
