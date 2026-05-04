import path from "node:path";
import { loadCsv } from "../../shared/csv-loader";

export type EvnexRecord = {
  leadId: string;
  customer: string;
  country: string;
  city: string;
  salesRep: string;
  technician: string;
  product: string;
  quoteValue: number;
  quoteStatus: string;
  leadCreatedDate: string;
  quoteSentDate: string;
  quoteAcceptedDate: string;
  invoiceDate: string;
  paymentDate: string;
  orderReleaseDate: string;
  buildDate: string;
  shipDate: string;
  scheduledDate: string;
  installDate: string;
  activationDate: string;
  lifecycleStage: string;
  issueType: string;
  ownerTeam: string;
  severity: string;
  recommendedAction: string;
  isException: boolean;
  valueAtRisk: number;
  daysDelayed: number;
  daysLeadToQuote: number;
  daysQuoteToPayment: number;
  daysPaymentToInstall: number;
  daysInstallToActive: number;
  daysLeadToActive: number;
};

let cachedRecordsPromise: Promise<EvnexRecord[]> | null = null;

function toNumber(value: string) {
  if (!value) return 0;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function mapRecord(row: Record<string, string>): EvnexRecord {
  return {
    leadId: row.lead_id,
    customer: row.customer,
    country: row.country,
    city: row.city,
    salesRep: row.sales_rep,
    technician: row.technician,
    product: row.product,
    quoteValue: toNumber(row.quote_value),
    quoteStatus: row.quote_status,
    leadCreatedDate: row.lead_created_date,
    quoteSentDate: row.quote_sent_date,
    quoteAcceptedDate: row.quote_accepted_date,
    invoiceDate: row.invoice_date,
    paymentDate: row.payment_date,
    orderReleaseDate: row.order_release_date,
    buildDate: row.build_date,
    shipDate: row.ship_date,
    scheduledDate: row.scheduled_date,
    installDate: row.install_date,
    activationDate: row.activation_date,
    lifecycleStage: row.lifecycle_stage,
    issueType: row.issue_type,
    ownerTeam: row.owner_team,
    severity: row.severity,
    recommendedAction: row.recommended_action,
    isException: row.is_exception === "YES",
    valueAtRisk: toNumber(row.value_at_risk),
    daysDelayed: toNumber(row.days_delayed),
    daysLeadToQuote: toNumber(row.days_lead_to_quote),
    daysQuoteToPayment: toNumber(row.days_quote_to_payment),
    daysPaymentToInstall: toNumber(row.days_payment_to_install),
    daysInstallToActive: toNumber(row.days_install_to_active),
    daysLeadToActive: toNumber(row.days_lead_to_active),
  };
}

export async function getEvnexRecords() {
  if (!cachedRecordsPromise) {
    const filePath = path.join(process.cwd(), "data", "prototypes", "evnex", "quote_to_active_lifecycle_view.csv");
    cachedRecordsPromise = loadCsv(filePath).then((rows) => rows.map(mapRecord));
  }

  return cachedRecordsPromise;
}
