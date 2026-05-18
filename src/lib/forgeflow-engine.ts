import {
  finishRequirements,
  geographies,
  manufacturingMethods,
  materialMethodMap,
  materials,
  productTypes,
  supplierRoutes,
  timelineUrgencies,
  toleranceLevels,
  type PlannerInput,
  type PlannerResult,
} from "./forgeflow-data";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundCurrency(value: number) {
  return Math.round(value / 5) * 5;
}

export function getCompatibleMethods(materialId: PlannerInput["material"]) {
  const allowed = materialMethodMap[materialId] ?? [];
  return manufacturingMethods.filter((method) => allowed.includes(method.id));
}

export function recommendMethod(input: PlannerInput) {
  const compatible = getCompatibleMethods(input.material);
  const tolerance = toleranceLevels.find((item) => item.id === input.toleranceLevel);
  const scored = compatible
    .map((method) => {
      const toleranceFit = method.toleranceFit * (tolerance?.score ?? 0.5);
      const urgencyBoost = input.timelineUrgency === "rush" && method.leadBase <= 10 ? 0.15 : 0;
      return { method, score: toleranceFit + urgencyBoost - method.costBase / 10000 };
    })
    .sort((a, b) => b.score - a.score);
  return scored[0]?.method ?? compatible[0] ?? manufacturingMethods[0];
}

export function evaluatePlanner(input: PlannerInput): PlannerResult {
  const product = productTypes.find((item) => item.id === input.productType)!;
  const material = materials.find((item) => item.id === input.material)!;
  const method =
    manufacturingMethods.find((item) => item.id === input.manufacturingMethod) ??
    recommendMethod(input);
  const tolerance = toleranceLevels.find((item) => item.id === input.toleranceLevel)!;
  const urgency = timelineUrgencies.find((item) => item.id === input.timelineUrgency)!;
  const finish = finishRequirements.find((item) => item.id === input.finishRequirement)!;
  const geography = geographies.find((item) => item.id === input.geography)!;
  const route = supplierRoutes[geography.route];

  const quantityFactor = input.quantity <= 3 ? 1.45 : input.quantity <= 10 ? 1.15 : input.quantity <= 25 ? 1 : 0.92;
  const toleranceMismatch = tolerance.score > method.toleranceFit ? tolerance.score - method.toleranceFit : 0;
  const setupCost = method.costBase * material.costFactor * geography.costFactor * finish.costFactor;
  const unitCost = setupCost * 0.35 * quantityFactor;
  const low = roundCurrency(setupCost + unitCost * input.quantity * 0.88);
  const high = roundCurrency(setupCost * 1.22 + unitCost * input.quantity * 1.18);
  const midpoint = roundCurrency((low + high) / 2);

  const baseLead = method.leadBase + finish.leadDays + (input.quantity > 10 ? 4 : 0);
  const optimistic = Math.max(4, Math.round(baseLead * geography.leadFactor * urgency.multiplier));
  const expected = Math.round(optimistic * 1.18 + toleranceMismatch * 8);
  const conservative = Math.round(expected * 1.25 + (input.timelineUrgency === "rush" ? 5 : 0));

  const readinessBase = 82;
  const readinessPenalty =
    urgency.readinessPenalty +
    toleranceMismatch * 24 +
    (material.family === "metal" && method.id.includes("printing") ? 18 : 0) +
    (input.quantity > 25 && method.id === "injection-molding" ? -6 : 0);
  const readinessScore = clamp(Math.round(readinessBase - readinessPenalty), 34, 96);
  const readinessLabel =
    readinessScore >= 85 ? "Supplier-ready" : readinessScore >= 68 ? "Needs DFM cleanup" : "High rework risk";

  const qaRiskNotes = [
    `${product.label} at ${tolerance.label} pushes ${method.label} into ${tolerance.risk} inspection load.`,
    finish.id !== "as-machined"
      ? `${finish.label} adds cosmetic acceptance criteria before release.`
      : "As-machined finish keeps cosmetic QA scope narrow.",
    toleranceMismatch > 0.15
      ? "Selected process is softer than tolerance target; plan for secondary ops or revised drawings."
      : "Tolerance target aligns with the selected process window.",
  ];

  const bottlenecks = [
  toleranceMismatch > 0.2 ? "Tolerance stack exceeds comfortable process window for first article." : null,
    input.timelineUrgency === "rush" && expected > 14 ? "Rush target conflicts with finish and inbound QA lead." : null,
    input.quantity > 15 && method.id.includes("printing") ? "Quantity outpaces additive throughput without batching." : null,
    geography.route === "offshore" && input.timelineUrgency !== "standard"
      ? "Offshore route adds freight buffer that rush schedules rarely absorb."
      : null,
  ].filter(Boolean) as string[];

  const checklist = [
    {
      id: "drawings",
      label: "Release STEP + PDF with hole callouts and finish notes",
      required: true,
      status: tolerance.score > 0.65 ? "attention" : "ready",
    },
    {
      id: "material-cert",
      label: "Attach material spec and acceptable alternates",
      required: material.family === "metal",
      status: material.family === "metal" ? "attention" : "ready",
    },
    {
      id: "tolerance-map",
      label: "Mark critical-to-function dimensions for first article",
      required: true,
      status: tolerance.risk === "critical" ? "blocked" : "attention",
    },
    {
      id: "finish-spec",
      label: `Document ${finish.label} acceptance and masking rules`,
      required: finish.id !== "as-machined",
      status: finish.id === "as-machined" ? "ready" : "attention",
    },
    {
      id: "quantity-plan",
      label: `Confirm ${input.quantity}-unit pilot scope and spares policy`,
      required: true,
      status: input.quantity > 20 ? "attention" : "ready",
    },
    {
      id: "route-approval",
      label: `Lock supplier route through ${route.label}`,
      required: true,
      status: geography.route === "offshore" ? "attention" : "ready",
    },
  ] as PlannerResult["checklist"];

  const timeline = route.stages.map((stage, index) => ({
    stage,
    days: Math.max(2, Math.round(expected / route.stages.length + index)),
    status: index === 0 ? "active" : index === 1 ? "upcoming" : "upcoming",
  })) as PlannerResult["timeline"];

  return {
    readinessScore,
    readinessLabel,
    recommendedRoute: `${method.label} via ${route.label}`,
    costRange: { low, high, midpoint },
    leadTimeDays: { optimistic, expected, conservative },
    supplierRoutingPlan: {
      routeLabel: route.label,
      hubs: [...route.hubs],
      stages: [...route.stages],
      notes: [
        `Primary geography: ${geography.label}`,
        `Pilot quantity: ${input.quantity} units of ${material.label}`,
        bottlenecks[0] ?? "No single hard blocker detected in routing plan.",
      ],
    },
    qaRiskNotes,
    bottlenecks,
    checklist,
    materialRecommendation: `${material.label} is a ${material.family} route with machinability score ${Math.round(material.machinability * 100)}%.`,
    processRecommendation: recommendMethod(input).label,
    timeline,
  };
}
