import { PrototypePlanner } from "@/components/PrototypePlanner";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function DemoPage() {
  return (
    <>
    <SubpageVisual variant="demo" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Demo</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Prototype Build Planner</h1>
        <p className="mt-4 text-base leading-7 text-steel-400">
          Estimate prototype risk, supplier paths, machining complexity, and lead times before the first PO is sent.
        </p>
      </div>
      <div className="mt-10">
        <PrototypePlanner />
      </div>
    </div>
  </>
  )
}
