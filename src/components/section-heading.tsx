import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  href?: string;
  action?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  href,
  action = "View all",
}: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
        >
          {action}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
