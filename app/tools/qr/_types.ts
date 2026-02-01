export type QrItemV1 = {
  qr_id: string;
  pageKey: string;
  utm_campaign: string;
  utm_medium: "qr";
  utm_source: string;
  url: string;
  valueStatement?: string;
  notes?: string;
};

export type PageKeyOption = {
  key: string;
  valueStatement: string;
};

export type QrOptions = {
  pageKeys: PageKeyOption[];
  utm_campaigns: string[];
  utm_sources: string[];
};

export type QrCatalogV1 = {
  version: "v1.0";
  generatedAt: string;
  options?: QrOptions;
  items: QrItemV1[];
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export const CATALOG_URL = "/qr/qr_catalog.json";
export const ALLOWED_PREFIXES = ["go.makinglifeeasie.com/kinly/market/"];

export function validateItem(item: QrItemV1): ValidationResult {
  const errors: string[] = [];
  
  // Basic Fields
  if (!item.qr_id) errors.push("Missing qr_id");
  if (item.qr_id && item.qr_id !== item.qr_id.toLowerCase()) errors.push("qr_id must be lowercase");
  
  // URL validation
  try {
    const url = new URL(item.url);
    const isValidPrefix = ALLOWED_PREFIXES.some(prefix => 
      url.toString().startsWith(`https://${prefix}`)
    );
    
    if (!isValidPrefix) {
      errors.push(`URL must start with https://${ALLOWED_PREFIXES[0]}`);
    }
    
    if (url.protocol !== "https:") {
      errors.push("URL must be https");
    }
    const params = url.searchParams;
    if (params.get("utm_medium") !== "qr") errors.push("URL missing utm_medium=qr");
    if (!params.get("utm_campaign")) errors.push("URL missing utm_campaign");
    if (!params.get("utm_source")) errors.push("URL missing utm_source");
  } catch {
    errors.push("Invalid URL format");
  }

  return { valid: errors.length === 0, errors };
}
