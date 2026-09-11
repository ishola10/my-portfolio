"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fileFromRoute, fileMap, files, type WorkspaceFile } from "@/lib/workspace";

export type ActivityId = "explorer" | "search" | "git" | "mail";

type WorkspaceContextValue = {
  activeId: string;
  activeFile: WorkspaceFile;
  openTabs: string[];
  sidebarOpen: boolean;
  terminalOpen: boolean;
  paletteOpen: boolean;
  activity: ActivityId;
  preview: boolean;
  expanded: string[];
  openFile: (id: string) => void;
  closeTab: (id: string) => void;
  setSidebarOpen: (open: boolean) => void;
  setTerminalOpen: (open: boolean) => void;
  setPaletteOpen: (open: boolean) => void;
  setActivity: (id: ActivityId) => void;
  setPreview: (value: boolean) => void;
  toggleFolder: (id: string) => void;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileParam = searchParams.get("file");
  const routeId = fileFromRoute(pathname, fileParam);

  const [openTabs, setOpenTabs] = useState<string[]>(() => [routeId]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activity, setActivity] = useState<ActivityId>("explorer");
  const [preview, setPreview] = useState(true);
  const [expanded, setExpanded] = useState<string[]>([
    "about-folder",
    "work-folder",
    "wip-folder",
  ]);

  const activeId = fileMap[routeId] ? routeId : "readme";
  const activeFile = fileMap[activeId] ?? files[0];

  const openFile = useCallback(
    (id: string) => {
      const file = fileMap[id];
      if (!file) return;
      setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
      setPaletteOpen(false);
      if (file.kind === "contact") setActivity("mail");
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setSidebarOpen(false);
      }
      router.push(file.route, { scroll: false });
    },
    [router]
  );

  const closeTab = useCallback(
    (id: string) => {
      setOpenTabs((tabs) => {
        const next = tabs.filter((tab) => tab !== id);
        if (id === activeId) {
          const fallback = next.at(-1) ?? "readme";
          const file = fileMap[fallback];
          if (file) router.push(file.route, { scroll: false });
        }
        return next.length ? next : ["readme"];
      });
    },
    [activeId, router]
  );

  const toggleFolder = useCallback((id: string) => {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }, []);

  const value = useMemo(
    () => ({
      activeId,
      activeFile,
      openTabs: openTabs.includes(activeId) ? openTabs : [...openTabs, activeId],
      sidebarOpen,
      terminalOpen,
      paletteOpen,
      activity,
      preview,
      expanded,
      openFile,
      closeTab,
      setSidebarOpen,
      setTerminalOpen,
      setPaletteOpen,
      setActivity,
      setPreview,
      toggleFolder,
    }),
    [
      activeId,
      activeFile,
      openTabs,
      sidebarOpen,
      terminalOpen,
      paletteOpen,
      activity,
      preview,
      expanded,
      openFile,
      closeTab,
      toggleFolder,
    ]
  );

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error("useWorkspace must be used within WorkspaceProvider");
  return ctx;
}
