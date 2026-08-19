import { Truck, Snowflake, ShieldCheck, Leaf } from "lucide-react";

const features = [
  {
    icon: Snowflake,
    title: "Cold chain kept",
    text: "0 to 4°C from cut to doorstep",
  },
  {
    icon: Truck,
    title: "Free delivery",
    text: "On every order above ₹699",
  },
  {
    icon: ShieldCheck,
    title: "Traceable sourcing",
    text: "Know exactly where your meat comes from",
  },
  {
    icon: Leaf,
    title: "No antibiotics",
    text: "Raised clean, without shortcuts",
  },
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-4 px-6 py-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <f.icon className="size-6" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{f.title}</p>
              <p className="mt-0.5 text-sm text-muted">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
