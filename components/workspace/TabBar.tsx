"use client";

import { X } from "lucide-react";
import { fileMap } from "@/lib/workspace";
import { useWorkspace } from "./WorkspaceContext";

export function TabBar() {
  const { openTabs, activeId, openFile, closeTab, preview, setPreview, activeFile } =
    useWorkspace();
  const showPreview = ["readme", "about", "project", "stack", "contact"].includes(
    activeFile.kind
  );

  return (
    <div className="flex h-9 items-stretch border-b border-border bg-[hsl(var(--ide-tab))]">
      <div className="flex min-w-0 flex-1 overflow-x-auto">
        {openTabs.map((id) => {
          const file = fileMap[id];
          if (!file) return null;
          const active = id === activeId;
          return (
            <div
              key={id}
              className={`group flex shrink-0 items-center border-r border-border ${
                active
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <button
                type="button"
                onClick={() => openFile(id)}
                className="h-9 px-3 font-mono text-[11px]"
              >
                {file.name}
              </button>
              <button
                type="button"
                onClick={() => closeTab(id)}
                className="mr-1 rounded p-0.5 opacity-0 hover:bg-foreground/10 group-hover:opacity-100"
                aria-label={`Close ${file.name}`}
              >
                <X className="size-3" />
              </button>
            </div>
          );
        })}
      </div>
      {showPreview ? (
        <div className="flex items-center gap-1 px-2 font-mono text-[10px]">
          <button
            type="button"
            onClick={() => setPreview(false)}
            className={`rounded px-2 py-1 ${!preview ? "bg-foreground/10 text-foreground" : "text-muted-foreground"}`}
          >
            Source
          </button>
          <button
            type="button"
            onClick={() => setPreview(true)}
            className={`rounded px-2 py-1 ${preview ? "bg-foreground/10 text-foreground" : "text-muted-foreground"}`}
          >
            Preview
          </button>
        </div>
      ) : null}
    </div>
  );
}
