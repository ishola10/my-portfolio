"use client";

import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ActivityBar } from "./ActivityBar";
import { CommandPalette } from "./CommandPalette";
import { Editor } from "./Editor";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import { TerminalPanel } from "./TerminalPanel";
import { Titlebar } from "./Titlebar";
import { useWorkspace } from "./WorkspaceContext";

export function Workbench() {
  const { sidebarOpen, setSidebarOpen, setTerminalOpen } = useWorkspace();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
      setTerminalOpen(false);
    }
  }, [isMobile, setSidebarOpen, setTerminalOpen]);

  return (
    <div className="grid h-dvh grid-rows-[40px_1fr_24px] overflow-hidden bg-background text-foreground">
      <Titlebar />
      <div className="relative grid min-h-0 grid-cols-[48px_1fr]">
        <ActivityBar />
        <div className="relative flex min-w-0 min-h-0">
          {isMobile && sidebarOpen ? (
            <button
              type="button"
              className="absolute inset-0 z-20 bg-black/50"
              aria-label="Close explorer"
              onClick={() => setSidebarOpen(false)}
            />
          ) : null}
          <div
            className={
              isMobile
                ? `absolute inset-y-0 left-0 z-30 ${sidebarOpen ? "" : "hidden"}`
                : sidebarOpen
                  ? ""
                  : "hidden"
            }
          >
            <Sidebar />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <TabBar />
            <Editor />
            <TerminalPanel />
          </div>
        </div>
      </div>
      <StatusBar />
      <CommandPalette />
    </div>
  );
}
