import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <SectionHeading
            index="01"
            title="Selected work"
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {featuredProjects.map((project, index) => (
            <li key={project.id}>
              <article className="group grid gap-6 py-8 lg:grid-cols-[4rem_1fr_auto] lg:items-start lg:gap-10 lg:py-10">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-wide text-muted-foreground">
                    {project.tech.join("  ·  ")}
                  </p>
                </div>

                <div className="flex gap-5 text-sm lg:flex-col lg:items-end lg:pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
                  >
                    Live
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  {project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Source
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
