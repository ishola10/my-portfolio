"use client";

import { useState } from "react";

const experiences = [
  {
    id: "adebayo-llc",
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
    id: "volunteer",
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

export default function JourneyTimeline() {
  const [active, setActive] = useState(experiences[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
      <div className="flex gap-2 overflow-x-auto border-b border-border lg:flex-col lg:overflow-visible lg:border-b-0">
        {experiences.map((exp) => {
          const isActive = active.id === exp.id;
          return (
            <button
              key={exp.id}
              type="button"
              onClick={() => setActive(exp)}
              className={`shrink-0 border-b-2 px-1 py-3 text-left text-sm transition-colors lg:border-b-0 lg:border-l-2 lg:px-4 ${
                isActive
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {exp.company}
            </button>
          );
        })}
      </div>

      <div key={active.id}>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {active.period} · {active.location}
        </p>
        <h3 className="mt-3 font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
          {active.role}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{active.company}</p>

        <ul className="mt-8 space-y-3">
          {active.points.map((point) => (
            <li
              key={point}
              className="border-l border-border pl-4 text-[15px] leading-relaxed text-muted-foreground"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
