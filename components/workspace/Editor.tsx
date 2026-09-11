"use client";

import { useWorkspace } from "./WorkspaceContext";
import { AboutView } from "./views/AboutView";
import { ContactView } from "./views/ContactView";
import { ExperienceView } from "./views/ExperienceView";
import { ProjectFileView } from "./views/ProjectFileView";
import { ProjectsView } from "./views/ProjectsView";
import { ReadmeView } from "./views/ReadmeView";
import { StackView } from "./views/StackView";
import { WipView } from "./views/WipView";

export function Editor() {
  const { activeFile } = useWorkspace();

  return (
    <section className="relative min-h-0 flex-1 overflow-hidden bg-background">
      <div className="absolute inset-0">
      {activeFile.kind === "readme" && <ReadmeView />}
      {activeFile.kind === "about" && <AboutView />}
      {activeFile.kind === "projects" && <ProjectsView />}
      {activeFile.kind === "project" && activeFile.project && (
        <ProjectFileView project={activeFile.project} />
      )}
      {activeFile.kind === "wip" && <WipView />}
      {activeFile.kind === "experience" && <ExperienceView />}
      {activeFile.kind === "stack" && <StackView />}
      {activeFile.kind === "contact" && <ContactView />}
      </div>
    </section>
  );
}
