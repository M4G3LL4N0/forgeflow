export const productTypes = [
  { id: "enclosure", label: "Enclosure / housing", description: "Sheet metal, plastic shells, sealed boxes" },
  { id: "bracket", label: "Bracket / mount", description: "Structural mounts and fixturing" },
  { id: "heat-sink", label: "Thermal part", description: "Heat sinks, cold plates, thermal paths" },
  { id: "connector-housing", label: "Connector housing", description: "Cable exits, strain relief, mating features" },
  { id: "wearable-shell", label: "Wearable shell", description: "Ergonomic shells and wearable housings" },
  { id: "robotics-link", label: "Robotics link", description: "Arms, joints, end-effector hardware" },
] as const;

export const materials = [
  { id: "aluminum-6061", label: "Aluminum 6061", family: "metal", machinability: 0.9, costFactor: 1.1 },
  { id: "aluminum-7075", label: "Aluminum 7075", family: "metal", machinability: 0.75, costFactor: 1.35 },
  { id: "stainless-304", label: "Stainless 304", family: "metal", machinability: 0.55, costFactor: 1.5 },
  { id: "abs", label: "ABS", family: "polymer", machinability: 0.95, costFactor: 0.85 },
  { id: "pc", label: "Polycarbonate", family: "polymer", machinability: 0.8, costFactor: 1.05 },
  { id: "nylon-12", label: "Nylon 12", family: "polymer", machinability: 0.7, costFactor: 1.15 },
  { id: "peek", label: "PEEK", family: "polymer", machinability: 0.45, costFactor: 2.4 },
  { id: "titanium-grade-5", label: "Titanium Grade 5", family: "metal", machinability: 0.35, costFactor: 3.2 },
] as const;

export const manufacturingMethods = [
  { id: "cnc-milling", label: "CNC milling", leadBase: 12, costBase: 420, toleranceFit: 0.95 },
  { id: "cnc-turning", label: "CNC turning", leadBase: 10, costBase: 360, toleranceFit: 0.9 },
  { id: "sheet-metal", label: "Sheet metal fab", leadBase: 14, costBase: 280, toleranceFit: 0.7 },
  { id: "injection-molding", label: "Injection molding", leadBase: 28, costBase: 1800, toleranceFit: 0.85 },
  { id: "fdm-printing", label: "FDM printing", leadBase: 5, costBase: 95, toleranceFit: 0.45 },
  { id: "sla-printing", label: "SLA printing", leadBase: 6, costBase: 140, toleranceFit: 0.65 },
  { id: "urethane-casting", label: "Urethane casting", leadBase: 16, costBase: 520, toleranceFit: 0.75 },
  { id: "die-casting", label: "Die casting", leadBase: 35, costBase: 2400, toleranceFit: 0.8 },
] as const;

export const toleranceLevels = [
  { id: "loose", label: "Loose (±0.5 mm)", score: 0.2, risk: "low" },
  { id: "standard", label: "Standard (±0.2 mm)", score: 0.45, risk: "medium" },
  { id: "tight", label: "Tight (±0.1 mm)", score: 0.7, risk: "high" },
  { id: "precision", label: "Precision (±0.05 mm)", score: 0.9, risk: "critical" },
] as const;

export const timelineUrgencies = [
  { id: "standard", label: "Standard", multiplier: 1, readinessPenalty: 0 },
  { id: "accelerated", label: "Accelerated", multiplier: 0.75, readinessPenalty: 8 },
  { id: "rush", label: "Rush", multiplier: 0.55, readinessPenalty: 18 },
] as const;

export const finishRequirements = [
  { id: "as-machined", label: "As machined", costFactor: 1, leadDays: 0 },
  { id: "bead-blast", label: "Bead blast", costFactor: 1.08, leadDays: 2 },
  { id: "anodize-type-ii", label: "Anodize Type II", costFactor: 1.18, leadDays: 5 },
  { id: "powder-coat", label: "Powder coat", costFactor: 1.14, leadDays: 4 },
  { id: "passivation", label: "Passivation", costFactor: 1.1, leadDays: 3 },
  { id: "vapor-polish", label: "Vapor polish", costFactor: 1.22, leadDays: 3 },
] as const;

export const geographies = [
  { id: "us-west", label: "US West", leadFactor: 1, costFactor: 1.12, route: "domestic-west" },
  { id: "us-midwest", label: "US Midwest", leadFactor: 0.95, costFactor: 1.05, route: "domestic-midwest" },
  { id: "mexico", label: "Mexico", leadFactor: 1.1, costFactor: 0.88, route: "nearshore" },
  { id: "china", label: "China", leadFactor: 1.35, costFactor: 0.72, route: "offshore" },
  { id: "germany", label: "Germany", leadFactor: 1.15, costFactor: 1.28, route: "eu-precision" },
  { id: "vietnam", label: "Vietnam", leadFactor: 1.25, costFactor: 0.78, route: "offshore-alt" },
] as const;

export const materialMethodMap: Record<string, string[]> = {
  "aluminum-6061": ["cnc-milling", "cnc-turning", "sheet-metal", "die-casting"],
  "aluminum-7075": ["cnc-milling", "cnc-turning"],
  "stainless-304": ["cnc-milling", "cnc-turning", "sheet-metal"],
  abs: ["fdm-printing", "injection-molding", "urethane-casting"],
  pc: ["cnc-milling", "sla-printing", "injection-molding"],
  "nylon-12": ["fdm-printing", "sla-printing", "injection-molding"],
  peek: ["cnc-milling", "fdm-printing"],
  "titanium-grade-5": ["cnc-milling", "cnc-turning"],
};

export const supplierRoutes = {
  "domestic-west": {
    label: "Domestic West",
    stages: ["DFM review", "CNC programming", "First article", "Finish + QA", "Ship"],
    hubs: ["San Jose", "Portland", "Phoenix"],
  },
  "domestic-midwest": {
    label: "Domestic Midwest",
    stages: ["Quote lock", "Tooling prep", "Production run", "Inspection", "Freight"],
    hubs: ["Chicago", "Detroit", "Minneapolis"],
  },
  nearshore: {
    label: "Nearshore",
    stages: ["Bilingual spec pack", "Border freight", "Pilot lot", "Secondary finish", "Inbound QA"],
    hubs: ["Tijuana", "Monterrey", "Querétaro"],
  },
  offshore: {
    label: "Offshore",
    stages: ["Supplier shortlist", "Tooling deposit", "T1 samples", "Mass pilot", "Air freight buffer"],
    hubs: ["Shenzhen", "Dongguan", "Suzhou"],
  },
  "eu-precision": {
    label: "EU precision",
    stages: ["Tolerance audit", "Machine booking", "CMM report", "Surface finish", "DHL express"],
    hubs: ["Munich", "Stuttgart", "Prague"],
  },
  "offshore-alt": {
    label: "Offshore alt",
    stages: ["Route qualification", "Pilot machining", "Finish partner", "Consolidation", "Sea-air blend"],
    hubs: ["Hanoi", "Ho Chi Minh City", "Da Nang"],
  },
} as const;

export const defaultPlannerInput = {
  productType: "enclosure",
  material: "aluminum-6061",
  quantity: 5,
  toleranceLevel: "standard",
  timelineUrgency: "standard",
  manufacturingMethod: "cnc-milling",
  finishRequirement: "bead-blast",
  geography: "us-west",
} as const;

export type ProductTypeId = (typeof productTypes)[number]["id"];
export type MaterialId = (typeof materials)[number]["id"];
export type ManufacturingMethodId = (typeof manufacturingMethods)[number]["id"];
export type ToleranceLevelId = (typeof toleranceLevels)[number]["id"];
export type TimelineUrgencyId = (typeof timelineUrgencies)[number]["id"];
export type FinishRequirementId = (typeof finishRequirements)[number]["id"];
export type GeographyId = (typeof geographies)[number]["id"];

export type PlannerInput = {
  productType: ProductTypeId;
  material: MaterialId;
  quantity: number;
  toleranceLevel: ToleranceLevelId;
  timelineUrgency: TimelineUrgencyId;
  manufacturingMethod: ManufacturingMethodId;
  finishRequirement: FinishRequirementId;
  geography: GeographyId;
};

export type PlannerResult = {
  readinessScore: number;
  readinessLabel: string;
  recommendedRoute: string;
  costRange: { low: number; high: number; midpoint: number };
  leadTimeDays: { optimistic: number; expected: number; conservative: number };
  supplierRoutingPlan: {
    routeLabel: string;
    hubs: string[];
    stages: string[];
    notes: string[];
  };
  qaRiskNotes: string[];
  bottlenecks: string[];
  checklist: { id: string; label: string; required: boolean; status: "ready" | "attention" | "blocked" }[];
  materialRecommendation: string;
  processRecommendation: string;
  timeline: { stage: string; days: number; status: "complete" | "active" | "upcoming" }[];
};
