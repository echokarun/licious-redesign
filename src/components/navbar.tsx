"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingBag, X, MapPin, Beef } from "lucide-react";

const links = [
  { label: "Shop", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "Why PrimeCut", href: "/#why" },
  { label: "Bestsellers", href: "/#bestsellers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
            <Beef className="size-5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            PrimeCut
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <div className="flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4">
            <MapPin className="size-4 text-brand" />
            <span className="text-sm font-medium text-ink/70">
              Deliver to Bengaluru
            </span>
          </div>
          <button
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink/70 transition-colors hover:text-ink"
          >
            <Search className="size-[18px]" />
          </button>
          <button
            aria-label="Cart"
            className="relative grid size-10 place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <ShoppingBag className="size-[18px]" />
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-ink text-[11px] font-semibold">
              0
            </span>
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid size-10 place-items-center rounded-full border border-line bg-surface md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
