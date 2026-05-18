import Link from "next/link";

const links = [
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-steel-800/80 bg-graphite-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-steel-100 uppercase">ForgeFlow</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-steel-400">
            Turn rough product specs into supplier-ready manufacturing plans, cost ranges, lead-time forecasts, and risk
            reports before the first PO leaves your inbox.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Product</p>
            <div className="mt-3 flex flex-col gap-2">
              {links.slice(0, 3).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-steel-300 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Company</p>
            <div className="mt-3 flex flex-col gap-2">
              {links.slice(3).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-steel-300 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-steel-500 uppercase">Safety</p>
            <p className="mt-3 text-sm leading-6 text-steel-400">
              Manufacturing planning only. No weapons, restricted hardware, or dangerous fabrication guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}