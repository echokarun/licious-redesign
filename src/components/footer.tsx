import Link from "next/link";
import { Beef } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-3.2 1.7-4.8 4.9-4.9 1.3-.1 1.6-.1 4.8-.1zM12 5.4A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 2.2a4.4 4.4 0 1 1-4.4 4.4A4.4 4.4 0 0 1 12 7.6zm6.9-3.2a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z",
  },
  {
    label: "X",
    path: "M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L7.5 3.3h-2.2l12.3 17.3z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z",
  },
  {
    label: "Facebook",
    path: "M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7a18 18 0 0 1 2.7.2v3h-1.5a1.7 1.7 0 0 0-2 1.9v2.2h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z",
  },
];

const columns = [
  {
    title: "Shop",
    links: ["Chicken", "Mutton & Lamb", "Fish & Seafood", "Prawns", "Eggs", "Cold Cuts"],
  },
  {
    title: "Company",
    links: ["About us", "Sourcing", "Careers", "Press", "Blog"],
  },
  {
    title: "Support",
    links: ["Help centre", "Track order", "Delivery areas", "Refund policy", "Contact us"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
                <Beef className="size-5" strokeWidth={1.75} />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                PrimeCut
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/60">
              Premium meat and seafood, cut fresh and delivered cold to your
              door every single morning.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:bg-brand hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/categories"
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PrimeCut Foods Pvt. Ltd.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="#" className="hover:text-cream">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
