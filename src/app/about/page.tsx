import { SubpageVisual } from "@/components/SubpageVisual";
export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">About</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Manufacturing planning for hardware teams that cannot afford a late prototype.</h1>
      <div className="mt-8 space-y-5 text-base leading-7 text-steel-300">
        <p>ForgeFlow helps hardware startups and industrial teams estimate prototype cost, lead time, manufacturing methods, materials, supplier routes, tolerance risk, and supplier-ready build packets.</p>
        <p>The product is planning software only. It does not provide weapons guidance, restricted hardware instructions, or dangerous fabrication steps.</p>
      </div>
    </div>
  </>
  )
}
