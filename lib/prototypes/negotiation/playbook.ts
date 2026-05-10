export const playbookSections = [
  {
    id: "position",
    label: "Position",
  },
  {
    id: "phases",
    label: "Phases",
  },
  {
    id: "ranges",
    label: "Ranges",
  },
  {
    id: "depth",
    label: "Depth",
  },
  {
    id: "questions",
    label: "Questions",
  },
  {
    id: "levers",
    label: "Levers",
  },
  {
    id: "guardrails",
    label: "Guardrails",
  },
  {
    id: "close",
    label: "Close",
  },
] as const;

export const controlBar = {
  preferredStructure: "3-month visibility-first structure",
  fallbackStructure: "Financial foundation first, broader domains staged next",
  currentConcern: "Phases 2 to 5 cost, 3-month contract shape, and practical dashboard coverage",
  steeringLine:
    "We can absolutely get the reporting landscape into one place. The key is deciding how much automation and drill-through depth we want in the first 3 months.",
  ceoGoal: "One place to view the business clearly",
};

export const recommendedPosition = {
  summary:
    "Recommend a 3-month visibility-first structure: deliver the CEO and financial foundation properly, bring the broader reporting domains into one centralised environment, automate where source data and logic are ready, add drill-through first in the most mature areas, and use discovery during the contract to prioritise deeper operational maturity next.",
  callout: "Everything visible first. Not everything equally mature first.",
};

export const phaseCards = [
  {
    title: "Phase 1",
    body: "Foundation plus core executive and financial reporting.",
  },
  {
    title: "Phases 2 to 5",
    body: "Inventory, KPI control, manufacturing, supply chain, people, and other broader reporting domains.",
  },
  {
    title: "3-month option",
    body: "Bring much of that broader coverage forward at visibility level, while automation and drill-through mature over time.",
  },
] as const;

export const indicativeRanges = [
  {
    phase: "Phase 2",
    name: "Inventory & Working Capital",
    range: "NZD $8k-15k",
  },
  {
    phase: "Phase 3",
    name: "KPI Control Tower",
    range: "NZD $10k-20k",
  },
  {
    phase: "Phase 4",
    name: "Manufacturing Performance",
    range: "NZD $15k-35k",
  },
  {
    phase: "Phase 5",
    name: "Supply Chain & Fulfilment",
    range: "NZD $10k-25k",
  },
] as const;

export const depthRows = [
  {
    domain: "CEO Summary",
    visible: "Yes",
    automated: "Likely yes",
    drillable: "Selectively",
  },
  {
    domain: "Finance",
    visible: "Yes",
    automated: "Likely yes",
    drillable: "Likely yes",
  },
  {
    domain: "Inventory / Working Capital",
    visible: "Yes",
    automated: "Likely yes",
    drillable: "Maybe",
  },
  {
    domain: "Sales",
    visible: "Yes",
    automated: "Maybe",
    drillable: "Maybe",
  },
  {
    domain: "Manufacturing",
    visible: "Yes",
    automated: "Selectively",
    drillable: "Limited initially",
  },
  {
    domain: "Supply Chain",
    visible: "Yes",
    automated: "Selectively",
    drillable: "Limited initially",
  },
  {
    domain: "People & Culture",
    visible: "Yes",
    automated: "Maybe",
    drillable: "Limited initially",
  },
] as const;

export const questionCards = [
  {
    question: "Can all of this be done in 3 months?",
    shortAnswer:
      "Yes, I think a 3-month contract can absolutely be structured to get the dashboards and reporting landscape into one place.",
    why: "The main variable is not whether the domains can appear. The main variable is how much automation and drill-through depth we commit to across each domain in that first window.",
    commercialMeaning:
      "Use the 3 months to centralise the reporting environment properly, deliver the executive and financial foundation strongly, and bring the broader reporting areas in at a useful visibility level.",
    redirect:
      "Would you like the first 3 months optimised around getting the whole reporting landscape visible, or around taking fewer areas deeper straight away?",
  },
  {
    question: "What do phases 2 to 5 cost?",
    shortAnswer:
      "I can absolutely outline them commercially, but I would treat them as indicative ranges at this stage.",
    why: "Those phases represent the broader domain coverage beyond the core financial foundation. What changes is the depth of automation and drill-through, not whether the domains can appear at all.",
    commercialMeaning:
      "They should be treated as investment ranges, with variability increasing in the more operationally complex areas.",
    redirect:
      "Do you want those broader areas brought into the first 3 months at visibility level, or treated as deeper follow-on layers?",
  },
  {
    question: "Why are later phases more expensive?",
    shortAnswer:
      "Because the further we move into operational areas, the more effort depends on business logic and source consistency rather than just dashboard build.",
    why: "Finance is usually closer to existing board reporting logic. Manufacturing, supply chain, and some people metrics often require more definition work, reconciliation, and process-level interpretation.",
    commercialMeaning:
      "The domains themselves can still appear early. The variable cost is usually how far we take automation and drill-through.",
    redirect:
      "That is why I’d separate the goal of getting everything visible from the goal of making everything equally mature on day one.",
  },
  {
    question: "Can this stay commercially sensible relative to our current Power BI spend?",
    shortAnswer:
      "Yes, if we structure the first 3 months around visibility first and stage the deeper maturity sensibly.",
    why: "The comparison is not just software cost versus contractor cost. It is whether leadership gets one usable reporting environment that reduces admin and improves clarity.",
    commercialMeaning:
      "Keep it sensible by getting the reporting landscape visible first, then deepening the harder areas progressively.",
    redirect:
      "Is the bigger priority to keep the initial spend tighter, or to use the 3 months to get the broader reporting environment in place quickly?",
  },
  {
    question: "Can we do this as a 3-month contract?",
    shortAnswer: "Yes, absolutely.",
    why: "A 3-month structure is enough to build the executive and financial foundation, bring the wider dashboard landscape into one place, and then push automation and drill-through as far as practical.",
    commercialMeaning: "That is the strongest balance between commitment and realism.",
    redirect:
      "Do you want the first 3 months centred on broad visibility, or on deeper maturity in fewer areas?",
  },
  {
    question: "What would you recommend?",
    shortAnswer: "I would recommend a 3-month visibility-first structure.",
    why: "It gets leadership the practical outcome first, which is being able to see the business in one place, while keeping the more variable operational depth commercially honest.",
    commercialMeaning: "Strongest balance of commitment, usability, and flexibility.",
    redirect:
      "If we took that route, which operational areas would you want deepest in the first pass?",
  },
] as const;

export const structureOptions = [
  {
    name: "Fixed Phase 1 + Scoped Expansion",
    body: "Best for tighter early spend certainty. Build the financial foundation first and shape later domains separately.",
  },
  {
    name: "3-Month Visibility-First",
    body: "Best overall fit. Build the executive and financial core, then bring the broader reporting landscape into one place during the same contract.",
  },
  {
    name: "Embedded 3-Month Model",
    body: "Best for flexibility. Useful if priorities may move, but it needs tighter boundary management.",
  },
] as const;

export const commercialLevers = {
  tradeFirst: [
    "Reduce first-pass drill-through depth.",
    "Reduce first-pass automation scope.",
    "Bring manufacturing and supply chain in at visibility level first.",
    "Stage commentary-heavy or less mature areas later.",
    "Adjust the 3-month shape between broad visibility and deeper maturity.",
  ],
  doNotTradeFirst: [
    "Owning every moving part without clear boundaries.",
    "Fixing messy source data for free.",
    "Changing scope inside a fixed commitment.",
    "Treating all reporting areas as if they can mature at the same speed.",
  ],
};

export const privateGuardrails = [
  "My minimum acceptable rate or monthly number",
  "My preferred contract shape",
  "What would make the number go up",
  "What extra work I am not taking on for free",
  "What would make this too broad for the structure",
] as const;

export const closeScripts = [
  {
    title: "If he wants speed",
    script:
      "Yes, I think we can absolutely use the 3 months to get the broader reporting landscape into one place quickly. My recommendation would be to centralise the visibility first, then deepen the automation and drill-through where the maturity supports it.",
  },
  {
    title: "If he wants explanation",
    script:
      "The reason I’d structure it that way is that it gets leadership the practical outcome first, which is being able to see the business in one place, while keeping the more variable implementation depth commercially honest.",
  },
  {
    title: "If he wants budget control",
    script:
      "The best way to keep this commercially sensible is to bring the reporting landscape together first, then stage the heavier automation and drill-through work rather than forcing all of that maturity into one early commitment.",
  },
] as const;
