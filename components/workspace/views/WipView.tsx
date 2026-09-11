"use client";

import { currentWork } from "@/lib/projects";
import { CodeFrame, F, K, S } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function WipView() {
  const { preview } = useWorkspace();

  if (!preview) {
    return (
      <CodeFrame>
        <><K>const</K> <F>now</F> = [</>
        {currentWork.map((work) => (
          <span key={work.title}>
            {"  "}{"{"} <F>title</F>: <S>&quot;{work.title}&quot;</S>, <F>status</F>: <S>&quot;{work.status}&quot;</S> {"}"},
          </span>
        ))}
        <>]</>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto px-6 py-8 lg:px-12">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        work/wip/now.ts
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">On the bench</h1>
      <div className="mt-8 space-y-4">
        {currentWork.map((work) => (
          <article key={work.title} className="rounded-md border border-border p-5">
            <p className="font-mono text-[10px] text-primary">{work.status}</p>
            <h2 className="mt-2 font-serif text-2xl">{work.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {work.description}
            </p>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground">
              {work.tech.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
