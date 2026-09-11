"use client";

import { site } from "@/lib/site";
import { useWorkspace } from "./WorkspaceContext";

export function StatusBar() {
  const { activeFile, setTerminalOpen, terminalOpen, setPaletteOpen } =
    useWorkspace();

  return (
    <footer className="flex h-6 items-center justify-between bg-primary/90 px-3 font-mono text-[10px] text-primary-foreground">
      <div className="flex items-center gap-3">
        <span>main*</span>
        <span className="hidden sm:inline">{site.location}</span>
        <span className="truncate">{activeFile.path}</span>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setPaletteOpen(true)} className="hidden sm:inline">
          ⌘K
        </button>
        <button type="button" onClick={() => setTerminalOpen(!terminalOpen)}>
          Terminal
        </button>
        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden md:inline">TypeScript React</span>
      </div>
    </footer>
  );
}
