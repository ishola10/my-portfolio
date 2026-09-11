import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="section-container">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          05 — Next
        </p>
        <h2 className="max-w-2xl font-serif text-3xl tracking-tight text-foreground sm:text-5xl">
          {site.availability}.
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-1.5 text-base text-foreground underline-offset-4 hover:underline sm:text-lg"
        >
          {site.email}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
