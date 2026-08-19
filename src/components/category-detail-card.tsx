import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { unsplash } from "@/lib/format";
import type { Category } from "@/lib/types";

export default function CategoryDetailCard({
  category,
}: {
  category: Category;
}) {
  return (
    <Link
      id={category.slug}
      href={`/#categories`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="aspect-[5/4] overflow-hidden">
        <Image
          src={unsplash(category.image, 900)}
          alt={category.name}
          width={900}
          height={720}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold text-ink">
            {category.name}
          </h3>
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
            {category.count} items
          </span>
        </div>
        <p className="mt-2 text-sm text-muted">{category.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Explore
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
