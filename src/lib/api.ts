import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { banners } from "@/data/banners";
import type { Category, Product, Banner } from "@/lib/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchCategories(): Promise<Category[]> {
  await delay(350);
  return categories;
}

export async function fetchProducts(): Promise<Product[]> {
  await delay(450);
  return products;
}

export async function fetchProductsByCategory(
  categoryId: string,
): Promise<Product[]> {
  await delay(300);
  return products.filter((p) => p.categoryId === categoryId);
}

export async function fetchBanners(): Promise<Banner[]> {
  await delay(250);
  return banners;
}
