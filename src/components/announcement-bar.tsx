const items = [
  "Free delivery on orders above ₹699",
  "Cut fresh and delivered cold every morning",
  "100% traceable, antibiotic free sourcing",
  "No artificial preservatives, ever",
];

export default function AnnouncementBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-ink text-cream overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-2 text-xs font-medium tracking-wide uppercase">
            <span className="size-1.5 rounded-full bg-brand" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
