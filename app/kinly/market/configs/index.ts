import { ScenarioConfig } from "../ScenarioLandingClient";
import { freshersConfig } from "./freshers";
import { internationalStartConfig } from "./internationalStart";
import { takeawayBudgetFlatsConfig } from "./takeawayBudget";
import { lowTalkConfig } from "./lowTalk";
import { studentWellbeingInfrastructureConfig } from "./studentWellbeingInfrastructure";
import { liveInLandlordConfig } from "./liveInLandlord";
import { homestayOwnerConfig } from "./homestayOwner";
import { headTenantConfig } from "./headTenant";
import { flatAgreementsConfig } from "./flatAgreements";

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
