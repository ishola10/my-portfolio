"use client";

import { projectFiles } from "@/lib/workspace";
import { currentWork } from "@/lib/projects";
import { CodeFrame, F, K, S, T } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function ProjectsView() {
  const { preview, openFile } = useWorkspace();

  if (!preview) {
    return (
      <CodeFrame>
        <><K>export const</K> <F>work</F> = [</>
        {projectFiles.map((file) => (
          <span key={file.id}>
            {"  "}<S>&quot;{file.project?.title}&quot;</S>,
          </span>
        ))}
        <>] <K>satisfies</K> <T>Project[]</T></>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto px-6 py-8 lg:px-12">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        work/index.ts
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Selected work</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Open a file from the tree, or click a module below. WIP lives in{" "}
        <button type="button" className="text-foreground underline-offset-4 hover:underline" onClick={() => openFile("wip")}>
          work/wip/now.ts
        </button>
        .
      </p>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {projectFiles.map((file, index) => (
          <button
            key={file.id}
            type="button"
            onClick={() => openFile(file.id)}
            className="flex w-full items-start gap-6 py-5 text-left hover:bg-foreground/5"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">
              <span className="block font-serif text-2xl">{file.project?.title}</span>
              <span className="mt-1 block max-w-2xl text-sm text-muted-foreground">
                {file.project?.description}
              </span>
              <span className="mt-3 block font-mono text-[11px] text-primary">
                {file.name}
              </span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {file.project?.year}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-mono text-[11px] text-muted-foreground uppercase">In progress</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {currentWork.map((work) => (
            <button
              key={work.title}
              type="button"
              onClick={() => openFile("wip")}
              className="rounded-md border border-border p-4 text-left hover:border-primary/40"
            >
              <p className="font-mono text-[10px] text-primary">{work.status}</p>
              <p className="mt-2 font-serif text-xl">{work.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
