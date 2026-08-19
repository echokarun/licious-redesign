import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock } from "lucide-react";
import { unsplash } from "@/lib/format";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Cut fresh, delivered today
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Meat, done
            <br />
            <span className="text-brand">properly.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            Hand cut chicken, mutton and seafood from farms we trust. No
            antibiotics, no shortcuts, just clean fresh meat at your door.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/20"
            >
              Shop now
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Explore categories
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-accent text-accent" />
              <span>
                <span className="font-semibold text-ink">4.8</span> from 40k
                reviews
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-brand" />
              <span>
                <span className="font-semibold text-ink">40 min</span> avg
                delivery
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-ink/10">
            <Image
              src={unsplash("photo-1544025162-d76694265947", 1200)}
              alt="Freshly grilled premium meat"
              width={1200}
              height={1200}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-8">
            <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
              <Star className="size-5 fill-brand text-brand" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">100% fresh</p>
              <p className="text-xs text-muted">Never frozen, always cold</p>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-2 animate-float rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lg backdrop-blur sm:-right-6">
            <p className="text-xs font-medium text-muted">Today&apos;s drop</p>
            <p className="text-sm font-semibold text-ink">
              Mutton Biryani Cut ₹679
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
