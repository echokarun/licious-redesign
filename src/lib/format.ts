export function unsplash(id: string, w = 800): string {
  return `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export function inr(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}
