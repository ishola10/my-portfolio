"use client";

import { useEffect, useMemo, useState } from "react";
import { searchFiles } from "@/lib/workspace";
import { useWorkspace } from "./WorkspaceContext";

export function CommandPalette() {
  const { paletteOpen, setPaletteOpen, openFile, setTerminalOpen, terminalOpen } =
    useWorkspace();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items = useMemo(() => {
    const commands = [
      {
        id: "cmd-terminal",
        name: terminalOpen ? "Hide terminal" : "Show terminal",
        path: "command",
        run: () => setTerminalOpen(!terminalOpen),
      },
      {
        id: "cmd-readme",
        name: "Go to README",
        path: "command",
        run: () => openFile("readme"),
      },
    ];
    const fileItems = searchFiles(query).map((file) => ({
      id: file.id,
      name: file.name,
      path: file.path,
      run: () => openFile(file.id),
    }));
    const filteredCommands = query.trim()
      ? commands.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      : commands;
    return [...filteredCommands, ...fileItems].slice(0, 10);
  }, [query, openFile, setTerminalOpen, terminalOpen]);

  useEffect(() => {
    if (!paletteOpen) {
      setQuery("");
      setActive(0);
    }
  }, [paletteOpen]);

  useEffect(() => {
    if (!paletteOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, setPaletteOpen]);

  if (!paletteOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/50 pt-[15vh] px-4">
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Close palette"
        onClick={() => setPaletteOpen(false)}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-border bg-[hsl(var(--ide-sidebar))] shadow-2xl">
        <input
          autoFocus
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((i) => Math.min(i + 1, items.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            }
            if (event.key === "Enter" && items[active]) {
              items[active].run();
              setPaletteOpen(false);
            }
          }}
          placeholder="Type a file or command…"
          className="h-12 w-full border-b border-border bg-transparent px-4 font-mono text-sm outline-none"
        />
        <ul className="max-h-80 overflow-auto py-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  item.run();
                  setPaletteOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm ${
                  index === active
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <span>{item.name}</span>
                <span className="font-mono text-[10px]">{item.path}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
