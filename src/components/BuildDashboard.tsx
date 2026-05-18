"use client";

import { useMemo, useState } from "react";
import { defaultPlannerInput, type PlannerInput } from "@/lib/forgeflow-data";
import { evaluatePlanner } from "@/lib/forgeflow-engine";
import { CostEstimateBoard } from "@/components/CostEstimateBoard";
import { ManufacturingRiskPanel } from "@/components/ManufacturingRiskPanel";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { PrototypePlanner } from "@/components/PrototypePlanner";
import { ReadinessScoreCard } from "@/components/ReadinessScoreCard";
import { SupplierReadyChecklist } from "@/components/SupplierReadyChecklist";
import { SupplierRouteMap } from "@/components/SupplierRouteMap";

export function BuildDashboard() {
  const [input] = useState<PlannerInput>({ ...defaultPlannerInput, quantity: 8, timelineUrgency: "accelerated" });
  const result = useMemo(() => evaluatePlanner(input), [input]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ReadinessScoreCard score={result.readinessScore} label={result.readinessLabel} />
        <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Material / process recommendation</p>
          <p className="mt-4 text-lg font-medium text-white">{result.materialRecommendation}</p>
          <p className="mt-2 text-sm text-steel-400">Recommended process path: {result.processRecommendation}</p>
          <p className="mt-4 text-sm text-steel-300">{result.recommendedRoute}</p>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <SupplierRouteMap routeLabel={result.supplierRoutingPlan.routeLabel} hubs={result.supplierRoutingPlan.hubs} stages={result.supplierRoutingPlan.stages} notes={result.supplierRoutingPlan.notes} />
        <CostEstimateBoard low={result.costRange.low} high={result.costRange.high} midpoint={result.costRange.midpoint} quantity={input.quantity} />
      </div>
      <ManufacturingTimeline optimistic={result.leadTimeDays.optimistic} expected={result.leadTimeDays.expected} conservative={result.leadTimeDays.conservative} stages={result.timeline} />
      <div className="grid gap-6 xl:grid-cols-2">
        <ManufacturingRiskPanel qaRiskNotes={result.qaRiskNotes} bottlenecks={result.bottlenecks} />
        <SupplierReadyChecklist items={result.checklist} />
      </div>
      <PrototypePlanner compact />
    </div>
  );
}
