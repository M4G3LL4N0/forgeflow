import { SubpageVisual } from "@/components/SubpageVisual";
const tiers = [
  { name: "Startup", price: "$249/mo", points: ["One active build planner", "Supplier-ready checklist export", "Readiness scoring"] },
  { name: "Hardware Team", price: "$890/mo", points: ["Shared dashboard", "Route comparisons", "QA risk tracking"] },
  { name: "Enterprise", price: "Custom", points: ["Multi-site routing", "Procurement workflows", "Supplier governance"] },
];

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Pricing built for prototype execution, not brochureware.</h1>
        <p className="mt-4 text-base leading-7 text-steel-400">
          Pick the plan that matches how many build profiles your team needs to keep supplier-ready at once.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-2xl border border-steel-800 bg-graphite-900/70 p-6">
            <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
            <p className="mt-3 text-3xl font-semibold text-forge-300">{tier.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-steel-300">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}
