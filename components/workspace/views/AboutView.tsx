"use client";

import DashPortrait from "@/components/sections/DashPortrait";
import { site } from "@/lib/site";
import { C, CodeFrame, K, S } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function AboutView() {
  const { preview, openFile } = useWorkspace();

  if (!preview) {
    return (
      <CodeFrame>
        <><C># {site.name}</C></>
        <><C>Frontend Engineer · {site.location}</C></>
        <></>
        <>I design and implement product UI — from design-system work to</>
        <>production features — with React, Vue, and TypeScript.</>
        <></>
        <>Currently at Adebayo Adeleke LLC. Lead frontend at Find Cura.</>
        <>Physics on the side. It keeps me honest about systems.</>
        <></>
        <><K>see also:</K> <S>experience.log</S> <S>package.json</S></>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto">
      <div className="grid min-h-full items-start gap-8 px-6 py-8 lg:grid-cols-[1fr_280px] lg:px-12 lg:py-10">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
            about/me.md
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Frontend engineer based in {site.location}. I design and implement
            product UI — from design-system work to production features — with
            React, Vue, and TypeScript.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I currently work remotely with Adebayo Adeleke LLC. On the side I
            lead frontend at Find Cura and contribute to open source. Physics is
            the other long-running interest; it shows up in how I think about
            motion and constraints.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <button
              type="button"
              onClick={() => openFile("experience")}
              className="rounded-md border border-border px-3 py-2 hover:border-primary/40"
            >
              git log
            </button>
            <button
              type="button"
              onClick={() => openFile("stack")}
              className="rounded-md border border-border px-3 py-2 hover:border-primary/40"
            >
              package.json
            </button>
          </div>
        </div>
        <div className="overflow-hidden border border-border bg-[#0c0b0a]">
          <DashPortrait />
        </div>
      </div>
    </div>
  );
}
