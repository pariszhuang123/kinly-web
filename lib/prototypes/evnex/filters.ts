import type { EvnexRecord } from "./data";

export type ActionFilters = {
  country: string;
  city: string;
  ownerTeam: string;
  severity: string;
  lifecycleStage: string;
  salesRep: string;
  technician: string;
  product: string;
};

export type FilterDefinition = {
  key: keyof ActionFilters;
  label: string;
  options: string[];
};

export const emptyActionFilters: ActionFilters = {
  country: "",
  city: "",
  ownerTeam: "",
  severity: "",
  lifecycleStage: "",
  salesRep: "",
  technician: "",
  product: "",
};

export function parseActionFilters(searchParams?: Record<string, string | string[] | undefined>): ActionFilters {
  const getValue = (key: keyof ActionFilters) => {
    const raw = searchParams?.[key];
    if (Array.isArray(raw)) return raw[0] ?? "";
    return raw ?? "";
  };

  return {
    country: getValue("country"),
    city: getValue("city"),
    ownerTeam: getValue("ownerTeam"),
    severity: getValue("severity"),
    lifecycleStage: getValue("lifecycleStage"),
    salesRep: getValue("salesRep"),
    technician: getValue("technician"),
    product: getValue("product"),
  };
}

export function applyActionFilters(records: EvnexRecord[], filters: ActionFilters) {
  return records.filter((record) => {
    if (filters.country && record.country !== filters.country) return false;
    if (filters.city && record.city !== filters.city) return false;
    if (filters.ownerTeam && record.ownerTeam !== filters.ownerTeam) return false;
    if (filters.severity && record.severity !== filters.severity) return false;
    if (filters.lifecycleStage && record.lifecycleStage !== filters.lifecycleStage) return false;
    if (filters.salesRep && record.salesRep !== filters.salesRep) return false;
    if (filters.technician && record.technician !== filters.technician) return false;
    if (filters.product && record.product !== filters.product) return false;
    return true;
  });
}

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((left, right) => left.localeCompare(right));
}

export function buildFilterDefinitions(records: EvnexRecord[]): FilterDefinition[] {
  return [
    { key: "country", label: "Country", options: uniqueSorted(records.map((record) => record.country)) },
    { key: "city", label: "City", options: uniqueSorted(records.map((record) => record.city)) },
    { key: "ownerTeam", label: "Owner team", options: uniqueSorted(records.map((record) => record.ownerTeam)) },
    { key: "severity", label: "Severity", options: uniqueSorted(records.map((record) => record.severity)) },
    {
      key: "lifecycleStage",
      label: "Lifecycle stage",
      options: uniqueSorted(records.map((record) => record.lifecycleStage)),
    },
    { key: "salesRep", label: "Sales rep", options: uniqueSorted(records.map((record) => record.salesRep)) },
    {
      key: "technician",
      label: "Technician",
      options: uniqueSorted(records.map((record) => record.technician)),
    },
    { key: "product", label: "Product", options: uniqueSorted(records.map((record) => record.product)) },
  ];
}
