"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-800/80 bg-graphite-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-forge-500/40 bg-forge-500/10 text-sm font-semibold text-forge-300">
            FF
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-steel-100">ForgeFlow</p>
            <p className="text-xs text-steel-400">Prototype execution</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-steel-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden rounded-full border border-steel-700 px-4 py-2 text-sm text-steel-200 transition hover:border-steel-500 hover:text-white sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Run planner
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-forge-500 px-3 py-2 text-xs font-medium text-graphite-950 transition hover:bg-forge-400 sm:px-4 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-steel-700 text-steel-200 md:hidden"
            aria-expanded={open}
            aria-controls="forgeflow-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="forgeflow-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-steel-800 px-4 py-4 sm:px-6 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-sm text-steel-300 hover:bg-steel-900/60"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
