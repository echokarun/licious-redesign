import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchCategories, fetchProducts, fetchBanners } from "@/lib/api";
import Hero from "@/components/hero";
import FeatureStrip from "@/components/feature-strip";
import SectionHeading from "@/components/section-heading";
import CategoryGrid from "@/components/category-grid";
import ProductRow from "@/components/product-row";
import PromoBanner from "@/components/promo-banner";

export default async function Home() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["categories"],
      queryFn: fetchCategories,
    }),
    queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
    }),
    queryClient.prefetchQuery({
      queryKey: ["banners"],
      queryFn: fetchBanners,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hero />

      <FeatureStrip />

      <section id="categories" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Shop by category"
          title="Everything you need for dinner"
          subtitle="From everyday chicken to weekend lamb roasts, all cut to order."
          href="/categories"
          action="View all categories"
        />
        <CategoryGrid />
      </section>

      <section
        id="bestsellers"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
      >
        <SectionHeading
          eyebrow="Customer favourites"
          title="Bestsellers this week"
          subtitle="The cuts our customers reorder most, rated by the people who cook them."
        />
        <ProductRow limit={8} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <PromoBanner />
      </section>
    </HydrationBoundary>
  );
}
