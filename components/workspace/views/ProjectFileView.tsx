"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { CodeFrame, F, K, N, S, T } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function ProjectFileView({ project }: { project: Project }) {
  const { preview } = useWorkspace();

  if (!preview) {
    return (
      <CodeFrame>
        <><K>export function</K> <F>{project.title.replace(/\s+/g, "")}</F>() {"{"}</>
        <>  <K>return</K> (</>
        <>    &lt;<T>Project</T></>
        <>      <F>title</F>=<S>&quot;{project.title}&quot;</S></>
        <>      <F>year</F>={"{"}<N>{project.year}</N>{"}"}</>
        <>      <F>stack</F>={"{"}[<S>{project.tech.map((t) => `"${t}"`).join(", ")}</S>]{"}"}</>
        <>    /&gt;</>
        <>  )</>
        <>{"}"}</>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto p-6 lg:p-10">
      <div className="overflow-hidden rounded-lg border border-border bg-[hsl(var(--ide-sidebar))]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2">
          <span className="size-2.5 rounded-full bg-[#ef6b5e]" />
          <span className="size-2.5 rounded-full bg-[#f0c04a]" />
          <span className="size-2.5 rounded-full bg-[#5ccb6a]" />
          <p className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
            {project.liveUrl.replace(/^https?:\/\//, "")}
          </p>
        </div>
        <div className="p-6 lg:p-8">
          <p className="font-mono text-[11px] text-primary">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            {project.tech.join("  ·  ")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-foreground px-4 py-2 text-background"
            >
              Open live
              <ArrowUpRight className="size-3.5" />
            </a>
            {project.githubUrl !== "#" ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2"
              >
                Source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
