export const ORDERS_TO_CAPACITY_BASE_PATH = "/portfolio/orders-to-capacity";

export type OrdersToCapacityMetric = {
  label: string;
  value: string;
  note: string;
};

export type WorkCentreRow = {
  workCentre: string;
  availableHours: number;
  plannedHours: number;
  utilisation: string;
  variance: string;
  issue: string;
};

export type VarianceRow = {
  measure: string;
  current: string;
  plan: string;
  variance: string;
  implication: string;
};

export type RecommendationItem = {
  owner: string;
  action: string;
};

export type EntityCard = {
  title: string;
  body: string;
};

export const landingProofPoints = [
  "Translates role requirements into a first reporting model",
  "Narrows scope to the most decision-critical measures",
  "Shows how Sales, Finance, Inventory, and Production fit together",
  "Treats variance analysis as a management tool, not only a chart",
];

export const executiveMetrics: OrdersToCapacityMetric[] = [
  {
    label: "Forecast revenue vs plan",
    value: "-4.1%",
    note: "Mock shortfall driven by late machining output and deferred dispatches.",
  },
  {
    label: "Open order value",
    value: "$2.84M",
    note: "Open demand still scheduled inside the next eight weeks.",
  },
  {
    label: "Orders at risk",
    value: "17",
    note: "Orders whose required dates are exposed by current capacity pressure.",
  },
  {
    label: "Capacity utilisation",
    value: "93.6%",
    note: "Average across constrained work centres for the next four weeks.",
  },
  {
    label: "Inventory value",
    value: "$1.92M",
    note: "Mock on-hand value across raw material, WIP, and finished goods.",
  },
  {
    label: "Aged inventory",
    value: "$318K",
    note: "Stock with low recent movement and weak near-term demand coverage.",
  },
  {
    label: "Primary bottleneck",
    value: "Machining",
    note: "The first work centre where planned hours exceed stable available hours.",
  },
  {
    label: "Lead time variability",
    value: "+6 days",
    note: "Average slippage against standard cycle time in the current mock period.",
  },
];

export const workCentreRows: WorkCentreRow[] = [
  {
    workCentre: "Casting",
    availableHours: 240,
    plannedHours: 214,
    utilisation: "89.2%",
    variance: "+26h",
    issue: "Stable.",
  },
  {
    workCentre: "Extrusion",
    availableHours: 180,
    plannedHours: 188,
    utilisation: "104.4%",
    variance: "-8h",
    issue: "Overloaded during demand spike.",
  },
  {
    workCentre: "Machining",
    availableHours: 320,
    plannedHours: 356,
    utilisation: "111.3%",
    variance: "-36h",
    issue: "Primary bottleneck. Late jobs now stacking.",
  },
  {
    workCentre: "Quality",
    availableHours: 140,
    plannedHours: 132,
    utilisation: "94.3%",
    variance: "+8h",
    issue: "Tight, but manageable if upstream flow improves.",
  },
];

export const varianceRows: VarianceRow[] = [
  {
    measure: "Forecast revenue",
    current: "$5.76M",
    plan: "$6.01M",
    variance: "-$250K",
    implication: "Delivery timing pressure is suppressing near-term revenue recognition.",
  },
  {
    measure: "Production output",
    current: "1,184 units",
    plan: "1,260 units",
    variance: "-76 units",
    implication: "Machining and extrusion overload reduce output against schedule.",
  },
  {
    measure: "Inventory aged over 90 days",
    current: "$318K",
    plan: "$250K",
    variance: "+$68K",
    implication: "Cash is tied up in slow-moving lines not aligned to current demand mix.",
  },
  {
    measure: "On-time order completion",
    current: "88%",
    plan: "95%",
    variance: "-7 pts",
    implication: "Customer delivery risk is rising before financial plan recovers.",
  },
];

export const recommendations: RecommendationItem[] = [
  {
    owner: "Production",
    action: "Review machining overload in weeks 3 to 5 and decide whether to add overtime or resequence lower-priority jobs.",
  },
  {
    owner: "Supply Chain",
    action: "Investigate aged stock concentrated in low-demand product families before raising replenishment on adjacent SKUs.",
  },
  {
    owner: "Finance",
    action: "Track revenue timing impact separately from demand weakness so management can distinguish execution variance from market variance.",
  },
];

export const inventorySignals = [
  "Stock cover is healthy for high-volume families but weak for one fast-moving line expected to spike next month.",
  "Aged inventory is concentrated in two families with declining historical usage.",
  "Recommended action is review-first, not blanket replenishment, because capacity and mix are changing together.",
];

export const scenarioSignals = [
  "If demand rises 10% with no extra machining hours, the weekly capacity gap widens from 36 to 68 hours.",
  "If machining downtime improves by one shift per week, at-risk orders fall before inventory needs materially increase.",
  "If alloy cost rises 6%, gross margin pressure appears even if revenue stays near forecast.",
];

export const dataModelCards: EntityCard[] = [
  {
    title: "Sales Orders",
    body: "Demand signal, required dates, order value, and customer-facing delivery commitment.",
  },
  {
    title: "Production Jobs",
    body: "Scheduled workload, actual hours, process stage, and delay reasons used to explain output variance.",
  },
  {
    title: "Inventory",
    body: "Current stock, value, movement recency, and usage assumptions used to detect ageing and stock risk.",
  },
  {
    title: "Work Centres",
    body: "Available hours, downtime, utilisation, and bottleneck pressure by process area.",
  },
  {
    title: "Finance Forecast",
    body: "Budget, forecast, and cost signals used to connect operational variance with financial impact.",
  },
];

export const alignmentCards: EntityCard[] = [
  {
    title: "Why this aligns with the role",
    body: "The prototype is centered on the exact questions highlighted in the role: production planning, inventory management, financial forecasting, scenario planning, and reporting consistency.",
  },
  {
    title: "Why the scope is intentionally narrow",
    body: "A stronger first version shows judgement in metric selection. It is more convincing to define eight useful measures well than to present four broad dashboards without clear business logic.",
  },
  {
    title: "Why variance analysis is central",
    body: "The role is not only about reporting totals. It is about comparing plan, forecast, and actual performance and turning the gap into a management conversation.",
  },
];
