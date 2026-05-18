import { SubpageVisual } from "@/components/SubpageVisual";
export default function ContactPage() {
  return (
    <>
    <SubpageVisual variant="contact" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Talk with the ForgeFlow team</h1>
      <p className="mt-4 text-base leading-7 text-steel-400">
        Share your build profile, supplier constraints, and target ship date. We will route you to the right onboarding path.
      </p>
      <form className="mt-8 space-y-4 rounded-2xl border border-steel-800 bg-graphite-900/70 p-6">
        <label className="block text-sm text-steel-300">Name<input className="mt-2 w-full rounded-xl border border-steel-700 bg-graphite-950 px-4 py-3" /></label>
        <label className="block text-sm text-steel-300">Work email<input type="email" className="mt-2 w-full rounded-xl border border-steel-700 bg-graphite-950 px-4 py-3" /></label>
        <label className="block text-sm text-steel-300">Build summary<textarea rows={5} className="mt-2 w-full rounded-xl border border-steel-700 bg-graphite-950 px-4 py-3" /></label>
        <button type="button" className="rounded-full bg-forge-500 px-5 py-3 text-sm font-medium text-graphite-950">Send request</button>
      </form>
    </div>
  </>
  )
}
