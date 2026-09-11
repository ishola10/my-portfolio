import { allProjects, currentWork, type Project } from "@/lib/projects";

export type FileKind =
  | "readme"
  | "about"
  | "projects"
  | "project"
  | "wip"
  | "experience"
  | "stack"
  | "contact";

export type WorkspaceFile = {
  id: string;
  name: string;
  path: string;
  kind: FileKind;
  route: string;
  keywords: string[];
  project?: Project;
};

export type TreeNode =
  | { type: "file"; file: WorkspaceFile }
  | { type: "folder"; id: string; name: string; children: TreeNode[] };

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const projectFiles: WorkspaceFile[] = allProjects.map((project) => ({
  id: slugify(project.title),
  name: `${project.title.replace(/\s+/g, "")}.tsx`,
  path: `work/${project.title.replace(/\s+/g, "")}.tsx`,
  kind: "project",
  route: `/projects?file=${slugify(project.title)}`,
  keywords: [project.title, ...project.tech, project.category],
  project,
}));

export const files: WorkspaceFile[] = [
  {
    id: "readme",
    name: "README.md",
    path: "README.md",
    kind: "readme",
    route: "/",
    keywords: ["home", "intro", "readme", "muhammed"],
  },
  {
    id: "about",
    name: "me.md",
    path: "about/me.md",
    kind: "about",
    route: "/about",
    keywords: ["about", "bio", "me"],
  },
  {
    id: "projects",
    name: "index.ts",
    path: "work/index.ts",
    kind: "projects",
    route: "/projects",
    keywords: ["work", "projects", "portfolio"],
  },
  ...projectFiles,
  {
    id: "wip",
    name: "now.ts",
    path: "work/wip/now.ts",
    kind: "wip",
    route: "/projects?file=wip",
    keywords: ["wip", "building", "now", ...currentWork.map((w) => w.title)],
  },
  {
    id: "experience",
    name: "experience.log",
    path: "experience.log",
    kind: "experience",
    route: "/about?file=experience",
    keywords: ["experience", "git", "work history", "jobs"],
  },
  {
    id: "stack",
    name: "package.json",
    path: "package.json",
    kind: "stack",
    route: "/about?file=stack",
    keywords: ["stack", "tech", "tools", "skills"],
  },
  {
    id: "contact",
    name: "contact.sh",
    path: "contact.sh",
    kind: "contact",
    route: "/contact",
    keywords: ["contact", "email", "hire", "social"],
  },
];

export const fileMap = Object.fromEntries(files.map((file) => [file.id, file]));

export const fileTree: TreeNode[] = [
  { type: "file", file: fileMap.readme },
  {
    type: "folder",
    id: "about-folder",
    name: "about",
    children: [
      { type: "file", file: fileMap.about },
      { type: "file", file: fileMap.experience },
      { type: "file", file: fileMap.stack },
    ],
  },
  {
    type: "folder",
    id: "work-folder",
    name: "work",
    children: [
      { type: "file", file: fileMap.projects },
      ...projectFiles.map((file) => ({ type: "file" as const, file })),
      {
        type: "folder",
        id: "wip-folder",
        name: "wip",
        children: [{ type: "file", file: fileMap.wip }],
      },
    ],
  },
  { type: "file", file: fileMap.contact },
];

export function fileFromRoute(pathname: string, fileParam: string | null) {
  if (fileParam && fileMap[fileParam]) return fileParam;
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "readme";
}

export function searchFiles(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return files;
  return files.filter((file) => {
    const haystack = [file.name, file.path, file.id, ...file.keywords]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
