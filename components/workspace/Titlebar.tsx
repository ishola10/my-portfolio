"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { files, searchFiles } from "@/lib/workspace";
import { useWorkspace } from "./WorkspaceContext";

export function Titlebar() {
  const {
    openFile,
    setPaletteOpen,
    sidebarOpen,
    setSidebarOpen,
    terminalOpen,
    setTerminalOpen,
  } = useWorkspace();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () => (query.trim() ? searchFiles(query).slice(0, 7) : files.slice(0, 6)),
    [query]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const meta = event.metaKey || event.ctrlKey;
      if (meta && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
      if (meta && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }
      if (meta && event.key === "`") {
        event.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
      if (event.key === "/" && !isTypingTarget(event.target)) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setPaletteOpen, setSidebarOpen, setTerminalOpen, sidebarOpen, terminalOpen]);

  function submit(id?: string) {
    const target = id ? results.find((item) => item.id === id) : results[active];
    if (!target) return;
    openFile(target.id);
    setQuery("");
    setFocused(false);
    inputRef.current?.blur();
  }

  return (
    <header className="grid h-10 grid-cols-[1fr_minmax(0,32rem)_1fr] items-center border-b border-border bg-[hsl(var(--ide-title))] px-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="size-3 rounded-full bg-[#ef6b5e]"
          aria-label="Toggle sidebar"
        />
        <button
          type="button"
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="size-3 rounded-full bg-[#f0c04a]"
          aria-label="Toggle terminal"
        />
        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          className="size-3 rounded-full bg-[#5ccb6a]"
          aria-label="Open command palette"
        />
        <span className="ml-3 hidden font-mono text-[11px] text-muted-foreground sm:inline">
          muhammed.dev
        </span>
      </div>

      <div className="relative">
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((i) => Math.min(i + 1, results.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            }
            if (event.key === "Enter") {
              event.preventDefault();
              submit();
            }
            if (event.key === "Escape") {
              setQuery("");
              inputRef.current?.blur();
            }
          }}
          placeholder="Search files, projects, commands…"
          className="h-7 w-full rounded-md border border-border bg-background/80 px-3 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50"
        />
        {focused ? (
          <div className="absolute top-[calc(100%+6px)] z-50 w-full overflow-hidden rounded-md border border-border bg-[hsl(var(--ide-sidebar))] shadow-2xl">
            {results.map((file, index) => (
              <button
                key={file.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => submit(file.id)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs ${
              index === active ? "bg-foreground/10 text-foreground" : "text-muted-foreground"
                }`}
              >
                <span className="font-mono">{file.name}</span>
                <span className="text-[10px]">{file.path}</span>
              </button>
            ))}
            <p className="border-t border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
              Enter to open · Esc to dismiss · Ctrl/⌘K for palette
            </p>
          </div>
        ) : null}
      </div>

      <div className="hidden justify-end font-mono text-[10px] text-muted-foreground md:flex">
        Ctrl/⌘K
      </div>
    </header>
  );
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}
