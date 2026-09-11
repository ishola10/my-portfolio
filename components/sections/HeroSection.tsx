import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-end pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="section-container w-full">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {site.role} · {site.location}
        </p>

        <h1 className="max-w-4xl font-serif text-[2.35rem] leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]">
          I build interfaces that feel considered — and hold up in production.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.name}. Currently shipping product UI at Adebayo Adeleke LLC.
          Also leading frontend at Find Cura, with ongoing open-source work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
          >
            Selected work
            <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
