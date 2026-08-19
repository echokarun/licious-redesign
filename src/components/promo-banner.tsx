"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useBanners } from "@/hooks/use-banners";
import { unsplash } from "@/lib/format";

export default function PromoBanner() {
  const { data, isLoading } = useBanners();

  if (isLoading) {
    return <div className="h-72 animate-pulse rounded-[2rem] bg-ink/5" />;
  }

  const banner = data?.[0];
  if (!banner) return null;

  return (
    <section className="overflow-hidden rounded-[2rem] bg-ink text-cream">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {banner.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {banner.title}
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-cream/70">
            {banner.subtitle}
          </p>
          <Link
            href={banner.href}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {banner.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="relative min-h-64">
          <Image
            src={unsplash(banner.image, 1000)}
            alt={banner.title}
            width={1000}
            height={600}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
