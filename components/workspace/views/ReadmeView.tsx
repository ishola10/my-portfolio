"use client";

import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { C, CodeFrame, K, S } from "../CodeFrame";
import { projectFiles } from "@/lib/workspace";
import { useWorkspace } from "../WorkspaceContext";

export function ReadmeView() {
  const { preview, openFile } = useWorkspace();

  if (!preview) {
    return (
      <CodeFrame>
        <><C>{`# ${site.name}`}</C></>
        <><C>Frontend Engineer · Nigeria</C></>
        <></>
        <>I build interfaces that feel considered and hold up in production.</>
        <></>
        <>Currently at Adebayo Adeleke LLC. Leading frontend at Find Cura.</>
        <></>
        <><K>open</K> <S>work/</S> <C>{"// selected projects"}</C></>
        <><K>open</K> <S>about/me.md</S></>
        <><K>open</K> <S>contact.sh</S></>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto px-6 py-8 lg:px-12 lg:py-10">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        README.md
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {site.name} builds interfaces you can feel working.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Frontend engineer in {site.location}. This site is the portfolio — a
        small IDE you can search, click, and type into. Start in the explorer,
        hit Ctrl/⌘K, or use the terminal below.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => openFile("projects")}
          className="rounded-md bg-foreground px-4 py-2 text-sm text-background"
        >
          Open work/
        </button>
        <button
          type="button"
          onClick={() => openFile("contact")}
          className="rounded-md border border-border px-4 py-2 text-sm"
        >
          Run contact.sh
        </button>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projectFiles
          .filter((file) => file.project)
          .slice(0, 3)
          .map((file) => (
          <button
            key={file.id}
            type="button"
            onClick={() => openFile(file.id)}
            className="group rounded-md border border-border bg-[hsl(var(--ide-sidebar))] p-4 text-left transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <p className="font-mono text-[10px] text-primary">{file.project?.year}</p>
            <h2 className="mt-2 font-serif text-2xl">{file.project?.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {file.project?.description}
            </p>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground">
              {file.project?.tech.join(" · ")}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
        <button type="button" onClick={() => openFile("about")} className="hover:text-foreground">
          about/me.md
        </button>
        <button type="button" onClick={() => openFile("experience")} className="hover:text-foreground">
          experience.log
        </button>
        <button type="button" onClick={() => openFile("stack")} className="hover:text-foreground">
          package.json
        </button>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          {site.email}
          <ArrowUpRight className="size-3" />
        </a>
      </div>
    </div>
  );
}
