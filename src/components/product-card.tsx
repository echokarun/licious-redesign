"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Plus, Check } from "lucide-react";
import { unsplash, inr } from "@/lib/format";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-ink/10">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={unsplash(product.image, 700)}
          alt={product.name}
          width={700}
          height={700}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-cream">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
            {discount}% off
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1 text-xs text-muted">
          <Star className="size-3.5 fill-accent text-accent" />
          <span className="font-semibold text-ink">{product.rating}</span>
          <span>({product.reviews.toLocaleString("en-IN")})</span>
        </div>

        <h3 className="mt-2 line-clamp-1 font-semibold text-ink">
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{product.unit}</p>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-ink">
                {inr(product.price)}
              </span>
              <span className="text-xs text-muted line-through">
                {inr(product.mrp)}
              </span>
            </div>
          </div>
          <button
            onClick={() => setAdded((v) => !v)}
            className={`grid size-9 place-items-center rounded-full transition-colors ${
              added
                ? "bg-brand text-white"
                : "border border-ink/15 text-ink hover:border-brand hover:bg-brand hover:text-white"
            }`}
            aria-label={added ? "Added to cart" : "Add to cart"}
          >
            {added ? <Check className="size-4" /> : <Plus className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
