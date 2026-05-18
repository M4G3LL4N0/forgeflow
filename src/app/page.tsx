import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { PrototypePlanner } from "@/components/PrototypePlanner";

const workflow = [
  "Capture product type, material, tolerance, and finish requirements",
  "Map compatible manufacturing methods and supplier routes",
  "Estimate prototype cost range and lead-time windows",
  "Flag QA risk, bottlenecks, and missing supplier packet items",
];

const useCases = [
  { title: "Hardware startup pilot", body: "Pressure-test a first enclosure build before locking a contract manufacturer." },
  { title: "Mechanical design review", body: "See whether tolerance targets survive the process you picked on the drawing." },
  { title: "Sourcing handoff", body: "Package a supplier-ready checklist instead of forwarding a loose STEP file." },
];

const faqs = [
  { q: "Does ForgeFlow replace my CM?", a: "No. It prepares the manufacturing plan, risk profile, and supplier packet your team or CM still executes." },
  { q: "Are the estimates binding quotes?", a: "No. They are planning ranges built from process, geography, finish, and quantity inputs." },
  { q: "Can I compare supplier routes?", a: "Yes. Geography selection changes route hubs, lead-time windows, and checklist requirements." },
];

const pricing = [
  { name: "Startup", price: "$249/mo", detail: "One active build planner, supplier packet export, and readiness scoring." },
  { name: "Hardware Team", price: "$890/mo", detail: "Shared dashboard, route comparisons, and QA risk tracking across programs." },
  { name: "Enterprise", price: "Custom", detail: "Multi-site routing, procurement workflows, and supplier governance." },
];

export default function HomePage() {
  return (
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />
    <div>
      <section className="pipeline-grid border-b border-steel-800/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-forge-300 uppercase">ForgeFlow</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn messy product specs into supplier-ready manufacturing plans.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-300">
              Estimate prototype risk, supplier paths, machining complexity, and lead times before the first PO is sent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="rounded-full bg-forge-500 px-5 py-3 text-sm font-medium text-graphite-950 hover:bg-forge-400">
                Run the planner
              </Link>
              <Link href="/dashboard" className="rounded-full border border-steel-700 px-5 py-3 text-sm text-steel-100 hover:border-steel-500">
                View build dashboard
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Live product preview</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-steel-800 bg-graphite-950/80 p-4">
                <p className="text-sm text-steel-400">Prototype readiness</p>
                <p className="mt-2 text-3xl font-semibold text-ops-300">82 / 100</p>
                <p className="mt-2 text-sm text-steel-300">Needs DFM cleanup before supplier release</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-steel-800 bg-graphite-950/80 p-4">
                  <p className="text-xs text-steel-500">Cost range</p>
                  <p className="mt-2 text-lg font-medium text-white">$4,180 – $5,420</p>
                </div>
                <div className="rounded-2xl border border-steel-800 bg-graphite-950/80 p-4">
                  <p className="text-xs text-steel-500">Lead time</p>
                  <p className="mt-2 text-lg font-medium text-white">12–18 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Problem</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Prototype planning still lives in spreadsheets and supplier threads.</h2>
          <p className="mt-4 text-base leading-7 text-steel-400">
            Teams ship drawings before they know whether the process, tolerance stack, finish spec, or geography can actually hit the date they promised.
          </p>
        </div>
      </section>

      <section className="border-y border-steel-800/80 bg-graphite-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Workflow</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-steel-800 bg-graphite-950/70 p-5">
                <p className="text-sm font-semibold text-forge-300">0{index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-steel-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Use cases</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-steel-800 bg-graphite-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-steel-800/80 bg-graphite-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Dashboard preview</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">One build command surface for readiness, routing, cost, and QA.</h2>
          </div>
          <div className="mt-10">
            <PrototypePlanner compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Pricing</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-steel-800 bg-graphite-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-3 text-3xl font-semibold text-forge-300">{tier.price}</p>
              <p className="mt-4 text-sm leading-6 text-steel-400">{tier.detail}</p>
              <Link href="/pricing" className="mt-6 inline-flex text-sm text-ops-300 hover:text-ops-400">
                Compare plans
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steel-800/80 bg-graphite-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">FAQ</p>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-steel-800 bg-graphite-950/70 p-5">
                <h3 className="text-lg font-medium text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-steel-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-forge-500/20 bg-gradient-to-br from-forge-500/10 via-graphite-900 to-ops-500/10 p-8 sm:p-10">
          <h2 className="text-3xl font-semibold text-white">Ship the supplier packet before the schedule slips.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-steel-300">
            Run the prototype build planner and walk into sourcing with cost ranges, route options, and QA risk already mapped.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demo" className="rounded-full bg-forge-500 px-5 py-3 text-sm font-medium text-graphite-950 hover:bg-forge-400">
              Start with the demo
            </Link>
            <Link href="/contact" className="rounded-full border border-steel-700 px-5 py-3 text-sm text-steel-100 hover:border-steel-500">
              Talk with the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
