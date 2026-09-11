"use client";

import { Files, GitCommitHorizontal, Mail, Search } from "lucide-react";
import { useWorkspace, type ActivityId } from "./WorkspaceContext";

const items: { id: ActivityId; label: string; icon: typeof Files }[] = [
  { id: "explorer", label: "Explorer", icon: Files },
  { id: "search", label: "Search", icon: Search },
  { id: "git", label: "Source control", icon: GitCommitHorizontal },
  { id: "mail", label: "Contact", icon: Mail },
];

export function ActivityBar() {
  const { activity, setActivity, setSidebarOpen, openFile, sidebarOpen } =
    useWorkspace();

  return (
    <nav className="flex w-12 flex-col items-center border-r border-border bg-[hsl(var(--ide-activity))] py-2">
      {items.map((item) => {
        const Icon = item.icon;
        const active = activity === item.id;
        return (
          <button
            key={item.id}
            type="button"
            title={item.label}
            aria-label={item.label}
            onClick={() => {
              if (item.id === "mail") {
                openFile("contact");
                setActivity("mail");
                return;
              }
              if (item.id === "git") {
                openFile("experience");
                setActivity("git");
                setSidebarOpen(true);
                return;
              }
              if (active && sidebarOpen) {
                setSidebarOpen(false);
                return;
              }
              setActivity(item.id);
              setSidebarOpen(true);
            }}
            className={`relative flex size-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground ${
              active ? "text-foreground" : ""
            }`}
          >
            {active ? (
              <span className="absolute left-0 h-6 w-0.5 bg-primary" />
            ) : null}
            <Icon className="size-[18px]" />
          </button>
        );
      })}
    </nav>
  );
}
