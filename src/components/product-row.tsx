"use client";

import { useProducts } from "@/hooks/use-products";
import ProductCard from "@/components/product-card";

export default function ProductRow({ limit = 8 }: { limit?: number }) {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="aspect-[3/4] animate-pulse rounded-3xl bg-ink/5" />
        ))}
      </div>
    );
  }

  const items = data?.slice(0, limit) ?? [];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
