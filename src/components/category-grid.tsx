"use client";

import { useCategories } from "@/hooks/use-categories";
import CategoryCard from "@/components/category-card";

export default function CategoryGrid() {
  const { data, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] animate-pulse rounded-3xl bg-ink/5"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {data?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
