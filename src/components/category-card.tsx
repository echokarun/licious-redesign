import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { unsplash } from "@/lib/format";
import type { Category } from "@/lib/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories#${category.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={unsplash(category.image, 800)}
          alt={category.name}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-surface/90 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="size-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-medium text-cream/70">
          {category.count} products
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-cream">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
