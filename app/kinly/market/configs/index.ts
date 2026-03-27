import type { ScenarioConfig } from "../scenarioLanding.types";
import { freshersConfig } from "./freshers";
import { internationalStartConfig } from "./internationalStart";
import { takeawayBudgetFlatsConfig } from "./takeawayBudget";
import { lowTalkConfig } from "./lowTalk";
import { studentWellbeingInfrastructureConfig } from "./studentWellbeingInfrastructure";
import { liveInLandlordConfig } from "./liveInLandlord";
import { homestayOwnerConfig } from "./homestayOwner";
import { headTenantConfig } from "./headTenant";
import { flatAgreementsConfig } from "./flatAgreements";
import { flatmateFitCheckConfig } from "./flatmateFitCheck";
import { sgHouseOwnerHelperAlignmentConfig } from "./sgHouseOwnerHelperAlignment";
import { familyConfig } from "./family";
import { familyTeensConfig } from "./familyTeens";
import { familyAdultsConfig } from "./familyAdults";
import { sgHelperOnboardingConfig } from "./sgHelperOnboarding";
import { sgHelperDriftConfig } from "./sgHelperDrift";

export const scenarioConfigs: Record<string, ScenarioConfig> = {
  freshers: freshersConfig,
  "new-place": internationalStartConfig,
  "takeaway-budget": takeawayBudgetFlatsConfig,
  "low-talk": lowTalkConfig,
  "student-wellbeing-infrastructure": studentWellbeingInfrastructureConfig,
  "live-in-landlord": liveInLandlordConfig,
  "homestay-owner": homestayOwnerConfig,
  "head-tenant": headTenantConfig,
  "flat-agreements": flatAgreementsConfig,
  "flatmate-fit-check": flatmateFitCheckConfig,
  "sg-helper-alignment": sgHouseOwnerHelperAlignmentConfig,
  family: familyConfig,
  "family-teens": familyTeensConfig,
  "family-adults": familyAdultsConfig,
  "sg-helper-onboarding": sgHelperOnboardingConfig,
  "sg-helper-drift": sgHelperDriftConfig,
};

export const ENTRY_TO_SCENARIO: Record<string, keyof typeof scenarioConfigs> = {
  freshers: "freshers",
  "new-place": "new-place",
  "takeaway-budget": "takeaway-budget",
  "low-talk": "low-talk",
  "student-wellbeing-infrastructure": "student-wellbeing-infrastructure",
  "live-in-landlord": "live-in-landlord",
  "homestay-owner": "homestay-owner",
  "head-tenant": "head-tenant",
  "flat-agreements": "flat-agreements",
  "flatmate-fit-check": "flatmate-fit-check",
  "sg-helper-alignment": "sg-helper-alignment",
  family: "family",
  "family-teens": "family-teens",
  "family-adults": "family-adults",
  "sg-helper-onboarding": "sg-helper-onboarding",
  "sg-helper-drift": "sg-helper-drift",
};

export function getScenarioConfig(entry?: string | string[] | null): ScenarioConfig | null {
  if (!entry) return null;
  const value = Array.isArray(entry) ? entry[0] : entry;
  if (!value) return null;
  const key = value.trim().toLowerCase();
  const scenarioKey = ENTRY_TO_SCENARIO[key];
  if (!scenarioKey) return null;
  return scenarioConfigs[scenarioKey] ?? null;
}
