"use client";

import { useEffect, useRef, useState } from "react";
import { files, searchFiles } from "@/lib/workspace";
import { site, socialLinks } from "@/lib/site";
import { experiences } from "@/lib/experience";
import { allProjects } from "@/lib/projects";
import { useWorkspace } from "./WorkspaceContext";

type Line = { type: "in" | "out"; text: string };

const helpText = `commands
  help            list commands
  ls              list files
  open <file>     open a file
  whoami          print identity
  skills          print stack
  projects        list shipped work
  git             show recent commits
  contact         open contact.sh
  hire            availability
  neofetch        system info
  clear           clear the terminal`;

export function TerminalPanel() {
  const { terminalOpen, setTerminalOpen, openFile } = useWorkspace();
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "portfolio 1.0.0 — type help to look around." },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [lines, terminalOpen]);

  if (!terminalOpen) return null;

  function run(raw: string) {
    const input = raw.trim();
    if (!input) return;
    setHistory((h) => [...h, input]);
    setHistIndex(-1);
    const [cmd, ...rest] = input.split(/\s+/);
    const arg = rest.join(" ");
    const out = exec(cmd.toLowerCase(), arg);
    setLines((current) => [
      ...current,
      { type: "in", text: input },
      ...out.map((text) => ({ type: "out" as const, text })),
    ]);
    setValue("");
  }

  function exec(cmd: string, arg: string): string[] {
    if (cmd === "help") return helpText.split("\n");
    if (cmd === "clear") {
      setLines([]);
      return [];
    }
    if (cmd === "ls") return files.map((file) => file.path);
    if (cmd === "whoami")
      return [`${site.name}`, site.role, site.location, site.email];
    if (cmd === "skills")
      return [
        "TypeScript, JavaScript",
        "React, Next.js, Vue.js, Nuxt.js",
        "Tailwind CSS, Node.js, Firebase, REST",
      ];
    if (cmd === "projects")
      return allProjects.map((p) => `${p.title}  →  ${p.liveUrl}`);
    if (cmd === "git")
      return experiences.map(
        (exp) => `${exp.hash}  ${exp.role} @ ${exp.company}`
      );
    if (cmd === "hire") return [site.availability, `mail ${site.email}`];
    if (cmd === "contact" || cmd === "mail") {
      openFile("contact");
      return [`opening ${fileMapSafe("contact")}`];
    }
    if (cmd === "neofetch") {
      return [
        `${site.name}@portfolio`,
        "---------------------",
        `Role      ${site.role}`,
        `Host      ${site.location}`,
        "Shell     zsh",
        "Editor    this website",
        "Uptime    2023 — present",
        `Mail      ${site.email}`,
      ];
    }
    if (cmd === "open" || cmd === "cat" || cmd === "code") {
      if (!arg) return ["usage: open <file>"];
      const matches = searchFiles(arg);
      if (!matches.length) return [`file not found: ${arg}`];
      openFile(matches[0].id);
      return [`opened ${matches[0].path}`];
    }
    if (cmd === "github") {
      window.open(socialLinks[0].href, "_blank");
      return ["opening github…"];
    }
    if (cmd === "exit") {
      setTerminalOpen(false);
      return ["hiding terminal. Ctrl/⌘` to restore."];
    }
    return [`command not found: ${cmd}. try help`];
  }

  return (
    <section className="flex h-44 shrink-0 flex-col border-t border-border bg-[#14110e] lg:h-52">
      <div className="flex h-7 items-center justify-between border-b border-border px-3">
        <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
          Terminal
        </p>
        <button
          type="button"
          onClick={() => setTerminalOpen(false)}
          className="font-mono text-[10px] text-muted-foreground hover:text-foreground"
        >
          hide
        </button>
      </div>
      <div
        className="ide-scroll min-h-0 flex-1 overflow-auto px-3 py-2"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, index) => (
          <p
            key={`${line.text}-${index}`}
            className={`font-mono text-[12px] leading-5 whitespace-pre-wrap ${
              line.type === "in" ? "text-primary" : "text-[#d9d0c4]"
            }`}
          >
            {line.type === "in" ? `~/portfolio $ ${line.text}` : line.text}
          </p>
        ))}
        <div className="flex items-center gap-2 font-mono text-[12px] text-[#d9d0c4]">
          <span className="text-primary">~/portfolio $</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") run(value);
              if (event.key === "ArrowUp") {
                event.preventDefault();
                if (!history.length) return;
                const next =
                  histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1);
                setHistIndex(next);
                setValue(history[next]);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                if (histIndex < 0) return;
                const idx = histIndex + 1;
                if (idx >= history.length) {
                  setHistIndex(-1);
                  setValue("");
                } else {
                  setHistIndex(idx);
                  setValue(history[idx]);
                }
              }
            }}
            className="min-w-0 flex-1 bg-transparent outline-none"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
        <div ref={endRef} />
      </div>
    </section>
  );
}

function fileMapSafe(id: string) {
  return files.find((file) => file.id === id)?.path ?? id;
}
