"use client";

import { useMemo, useState } from "react";
import { ChevronRight, FileCode2, FileJson, FileText, Folder, FolderOpen, ScrollText, TerminalSquare } from "lucide-react";
import { experiences } from "@/lib/experience";
import { fileTree, searchFiles, type TreeNode, type WorkspaceFile } from "@/lib/workspace";
import { useWorkspace } from "./WorkspaceContext";

export function Sidebar() {
  const { activity, sidebarOpen } = useWorkspace();
  if (!sidebarOpen) return null;

  return (
    <aside className="flex w-[220px] shrink-0 flex-col border-r border-border bg-[hsl(var(--ide-sidebar))] lg:w-[250px]">
      <p className="px-4 py-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
        {activity === "explorer" && "Explorer"}
        {activity === "search" && "Search"}
        {activity === "git" && "Source control"}
        {activity === "mail" && "Mail"}
      </p>
      <div className="ide-scroll min-h-0 flex-1 overflow-auto px-1 pb-4">
        {activity === "explorer" && <ExplorerList nodes={fileTree} depth={0} />}
        {activity === "search" && <SearchPanel />}
        {activity === "git" && <GitPanel />}
        {activity === "mail" && <MailPanel />}
      </div>
    </aside>
  );
}

function ExplorerList({ nodes, depth }: { nodes: TreeNode[]; depth: number }) {
  const { activeId, expanded, openFile, toggleFolder } = useWorkspace();

  return (
    <ul>
      {nodes.map((node) => {
        if (node.type === "folder") {
          const isOpen = expanded.includes(node.id);
          return (
            <li key={node.id}>
              <button
                type="button"
                onClick={() => toggleFolder(node.id)}
                style={{ paddingLeft: 10 + depth * 12 }}
                className="flex h-7 w-full items-center gap-1.5 text-left text-[13px] text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              >
                <ChevronRight
                  className={`size-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`}
                />
                {isOpen ? (
                  <FolderOpen className="size-3.5 text-primary" />
                ) : (
                  <Folder className="size-3.5 text-primary/80" />
                )}
                {node.name}
              </button>
              {isOpen ? <ExplorerList nodes={node.children} depth={depth + 1} /> : null}
            </li>
          );
        }

        const file = node.file;
        const active = activeId === file.id;
        return (
          <li key={file.id}>
            <button
              type="button"
              onClick={() => openFile(file.id)}
              style={{ paddingLeft: 26 + depth * 12 }}
              className={`flex h-7 w-full items-center gap-1.5 text-left text-[13px] ${
                active
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <FileIcon file={file} />
              {file.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function SearchPanel() {
  const { openFile } = useWorkspace();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchFiles(query), [query]);

  return (
    <div className="px-2">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search workspace"
        className="mb-2 h-8 w-full rounded border border-border bg-background px-2 font-mono text-xs outline-none"
      />
      {results.map((file) => (
        <button
          key={file.id}
          type="button"
          onClick={() => openFile(file.id)}
          className="flex w-full flex-col items-start gap-0.5 px-2 py-2 text-left hover:bg-foreground/5"
        >
          <span className="text-xs text-foreground">{file.name}</span>
          <span className="font-mono text-[10px] text-muted-foreground">{file.path}</span>
        </button>
      ))}
    </div>
  );
}

function GitPanel() {
  const { openFile } = useWorkspace();
  return (
    <div className="px-2">
      <p className="px-2 pb-2 font-mono text-[10px] text-muted-foreground">
        main · {experiences.length} commits
      </p>
      {experiences.map((exp) => (
        <button
          key={exp.id}
          type="button"
          onClick={() => openFile("experience")}
          className="flex w-full items-start gap-2 px-2 py-2 text-left hover:bg-foreground/5"
        >
          <span className="font-mono text-[10px] text-primary">{exp.hash}</span>
          <span className="text-xs text-muted-foreground">
            {exp.role} @ {exp.company}
          </span>
        </button>
      ))}
    </div>
  );
}

function MailPanel() {
  const { openFile } = useWorkspace();
  return (
    <div className="space-y-2 px-3 text-xs text-muted-foreground">
      <p>Inbox is quiet. Send a mail instead.</p>
      <button
        type="button"
        onClick={() => openFile("contact")}
        className="text-foreground underline-offset-4 hover:underline"
      >
        Open contact.sh
      </button>
    </div>
  );
}

function FileIcon({ file }: { file: WorkspaceFile }) {
  if (file.kind === "stack") return <FileJson className="size-3.5 text-[#c9b458]" />;
  if (file.kind === "contact") return <TerminalSquare className="size-3.5 text-[#a8c5a0]" />;
  if (file.kind === "experience") return <ScrollText className="size-3.5 text-primary" />;
  if (file.kind === "readme" || file.kind === "about")
    return <FileText className="size-3.5 text-[#8eb4c4]" />;
  return <FileCode2 className="size-3.5 text-primary" />;
}
