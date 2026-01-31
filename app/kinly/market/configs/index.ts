import { ScenarioConfig } from "../ScenarioLandingClient";
import { freshersConfig } from "./freshers";
import { internationalStartConfig } from "./internationalStart";
import { takeawayBudgetConfig } from "./takeawayBudget";
import { thriftFirstConfig } from "./thriftFirst";
import { lowTalkConfig } from "./lowTalk";

export const scenarioConfigs: Record<string, ScenarioConfig> = {
  freshers: freshersConfig,
  "new-place": internationalStartConfig,
  "takeaway-budget": takeawayBudgetConfig,
  "thrift-first": thriftFirstConfig,
  "low-talk": lowTalkConfig,
};

export const ENTRY_TO_SCENARIO: Record<string, keyof typeof scenarioConfigs> = {
  freshers: "freshers",
  "new-place": "new-place",
  "takeaway-budget": "takeaway-budget",
  "thrift-first": "thrift-first",
  "low-talk": "low-talk",
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
