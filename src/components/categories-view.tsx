"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useCategories } from "@/hooks/use-categories";
import CategoryDetailCard from "@/components/category-detail-card";

export default function CategoriesView() {
  const { data, isLoading } = useCategories();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q),
    );
  }, [data, query]);

  return (
    <div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Browse the range
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              All categories
            </h1>
            <p className="mt-3 max-w-md text-muted">
              Every cut, catch and convenience kit we sell, all in one place.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories"
              className="h-12 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-sm text-ink outline-none transition-shadow placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[5/4] animate-pulse rounded-3xl bg-ink/5"
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface py-20 text-center">
            <p className="font-display text-2xl font-semibold">No matches</p>
            <p className="mt-2 text-muted">
              Try searching for chicken, mutton or seafood.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((category) => (
              <CategoryDetailCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
