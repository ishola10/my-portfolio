import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutSnapshot() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            03 — About
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Product-minded frontend, without the theatrics.
          </h2>
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I care about the unglamorous parts of frontend: accessibility,
            performance budgets, and interfaces that stay coherent as products
            grow. Most of my work sits at the overlap of design systems, React
            or Vue, and shipping with a team.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Outside of work I study physics — it shows up in how I reason about
            motion, constraints, and systems.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:underline"
          >
            More about me
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
