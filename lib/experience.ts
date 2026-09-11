export type Experience = {
  id: string;
  hash: string;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    id: "adebayo-llc",
    hash: "4a2f1c8",
    company: "Adebayo Adeleke LLC",
    role: "Frontend Developer",
    period: "2024 — Present",
    location: "USA · Remote",
    points: [
      "Shipped and refined production UI used by 1,000+ monthly active users.",
      "Built responsive, accessible components with cross-functional teams.",
      "Raised code quality through reviews, cutting recurring bugs by ~30%.",
    ],
  },
  {
    id: "adebayo-intern",
    hash: "9c81ab2",
    company: "Adebayo Adeleke LLC",
    role: "Frontend Developer Intern",
    period: "2023 — 2024",
    location: "USA · Remote",
    points: [
      "Implemented core UI for an internal logistics tracking tool.",
      "Integrated REST APIs and managed state with React and Redux.",
      "Worked in sprint planning, stand-ups, and iterative delivery.",
    ],
  },
  {
    id: "build-together",
    hash: "3e01d44",
    company: "Build Together",
    role: "Frontend Developer",
    period: "2023",
    location: "Nigeria",
    points: [
      "Helped ship a collaboration platform for 500+ tech professionals.",
      "Designed dashboards and team communication surfaces.",
      "Implemented authentication flows and product update surfaces.",
    ],
  },
  {
    id: "find-cura",
    hash: "b17e9a0",
    company: "Find Cura",
    role: "Lead Frontend Developer",
    period: "Ongoing",
    location: "Nigeria",
    points: [
      "Leading the frontend for a patient–pharmacy connection product.",
      "Building the web app in Next.js and Tailwind CSS.",
      "Partnering with backend on inventory APIs and realtime flows.",
    ],
  },
  {
    id: "open-source",
    hash: "c0ffee1",
    company: "Open Source",
    role: "Frontend Contributor",
    period: "Ongoing",
    location: "Remote",
    points: [
      "Contributed UI fixes and reviews across open-source frontend work.",
      "Focused on accessibility, performance, and maintainable patterns.",
    ],
  },
];
