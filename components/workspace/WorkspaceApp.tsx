"use client";

import { Suspense } from "react";
import { WorkspaceProvider } from "./WorkspaceContext";
import { Workbench } from "./Workbench";

export function WorkspaceApp() {
  return (
    <Suspense fallback={<div className="h-dvh bg-background" />}>
      <WorkspaceProvider>
        <Workbench />
      </WorkspaceProvider>
    </Suspense>
  );
}
