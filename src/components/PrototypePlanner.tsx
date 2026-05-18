"use client";

import { useMemo, useState } from "react";
import {
  defaultPlannerInput,
  finishRequirements,
  geographies,
  productTypes,
  timelineUrgencies,
  type PlannerInput,
} from "@/lib/forgeflow-data";
import { evaluatePlanner, getCompatibleMethods } from "@/lib/forgeflow-engine";
import { CostEstimateBoard } from "@/components/CostEstimateBoard";
import { ManufacturingRiskPanel } from "@/components/ManufacturingRiskPanel";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { MaterialSelector } from "@/components/MaterialSelector";
import { ReadinessScoreCard } from "@/components/ReadinessScoreCard";
import { SupplierReadyChecklist } from "@/components/SupplierReadyChecklist";
import { SupplierRouteMap } from "@/components/SupplierRouteMap";
import { ToleranceInput } from "@/components/ToleranceInput";

type PrototypePlannerProps = {
  compact?: boolean;
};

export function PrototypePlanner({ compact = false }: PrototypePlannerProps) {
  const [input, setInput] = useState<PlannerInput>({ ...defaultPlannerInput });
  const compatibleMethods = useMemo(() => getCompatibleMethods(input.material), [input.material]);
  const result = useMemo(() => evaluatePlanner(input), [input]);

  const update = <K extends keyof PlannerInput>(key: K, value: PlannerInput[K]) => {
    setInput((current) => {
      const next = { ...current, [key]: value };
      if (key === "material") {
        const methods = getCompatibleMethods(value as PlannerInput["material"]);
        if (!methods.some((method) => method.id === next.manufacturingMethod)) {
          next.manufacturingMethod = methods[0]?.id ?? next.manufacturingMethod;
        }
      }
      return next;
    });
  };

  return (
    <div className={`grid gap-6 ${compact ? "" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
      <section className="rounded-2xl border border-steel-800 bg-graphite-900/70 p-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Prototype build planner</p>
        <p className="mt-2 text-sm text-steel-400">Capture the build profile suppliers need before they quote.</p>
        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Product type</span>
            <select
              value={input.productType}
              onChange={(event) => update("productType", event.target.value as PlannerInput["productType"])}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            >
              {productTypes.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <MaterialSelector value={input.material} onChange={(value) => update("material", value)} />
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Quantity</span>
            <input
              type="number"
              min={1}
              max={100}
              value={input.quantity}
              onChange={(event) => update("quantity", Number(event.target.value) || 1)}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            />
          </label>
          <ToleranceInput value={input.toleranceLevel} onChange={(value) => update("toleranceLevel", value)} />
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Timeline urgency</span>
            <select
              value={input.timelineUrgency}
              onChange={(event) => update("timelineUrgency", event.target.value as PlannerInput["timelineUrgency"])}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            >
              {timelineUrgencies.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Manufacturing method</span>
            <select
              value={input.manufacturingMethod}
              onChange={(event) => update("manufacturingMethod", event.target.value as PlannerInput["manufacturingMethod"])}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            >
              {compatibleMethods.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Finish requirement</span>
            <select
              value={input.finishRequirement}
              onChange={(event) => update("finishRequirement", event.target.value as PlannerInput["finishRequirement"])}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            >
              {finishRequirements.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-steel-400 uppercase">Geography</span>
            <select
              value={input.geography}
              onChange={(event) => update("geography", event.target.value as PlannerInput["geography"])}
              className="w-full rounded-xl border border-steel-700 bg-graphite-900 px-4 py-3 text-sm text-steel-100 outline-none focus:border-ops-400"
            >
              {geographies.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
        </div>
      </section>
      <section className="space-y-6">
        <ReadinessScoreCard score={result.readinessScore} label={result.readinessLabel} />
        <div className="rounded-2xl border border-steel-800 bg-graphite-900/80 p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Recommended route</p>
          <p className="mt-3 text-2xl font-semibold text-white">{result.recommendedRoute}</p>
          <p className="mt-3 text-sm text-steel-400">{result.materialRecommendation}</p>
          <p className="mt-2 text-sm text-steel-400">Process fallback: {result.processRecommendation}</p>
        </div>
        <CostEstimateBoard low={result.costRange.low} high={result.costRange.high} midpoint={result.costRange.midpoint} quantity={input.quantity} />
        <ManufacturingTimeline optimistic={result.leadTimeDays.optimistic} expected={result.leadTimeDays.expected} conservative={result.leadTimeDays.conservative} stages={result.timeline} />
        <SupplierRouteMap routeLabel={result.supplierRoutingPlan.routeLabel} hubs={result.supplierRoutingPlan.hubs} stages={result.supplierRoutingPlan.stages} notes={result.supplierRoutingPlan.notes} />
        <ManufacturingRiskPanel qaRiskNotes={result.qaRiskNotes} bottlenecks={result.bottlenecks} />
        <SupplierReadyChecklist items={result.checklist} />
      </section>
    </div>
  );
}
