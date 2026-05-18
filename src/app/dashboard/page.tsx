import { BuildDashboard } from "@/components/BuildDashboard";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Build command surface</h1>
        <p className="mt-4 text-base leading-7 text-steel-400">
          Track readiness, supplier routing, cost windows, lead time, and QA checklist items in one build profile.
        </p>
      </div>
      <div className="mt-10">
        <BuildDashboard />
      </div>
    </div>
  </>
  )
}
