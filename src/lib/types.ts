export type Category = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  count: number;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  price: number;
  mrp: number;
  unit: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  tags: string[];
};

export type Banner = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  href: string;
};
