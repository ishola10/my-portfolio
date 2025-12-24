"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "adebayo-llc",
    company: "Adebayo Adeleke LLC",
    role: "Frontend Developer",
    period: "2024 – Present",
    location: "USA (Remote)",
    points: [
      "Collaborated in the development and enhancement of user interfaces, optimizing usability and engagement for over 1,000 monthly active users.",
      "Worked closely with cross-functional teams to implement responsive, accessible, and scalable frontend components.",
      "Participated in code reviews, improving overall code quality and reducing bugs by approximately 30%."
    ],
  },
  {
    id: "adebayo-intern",
    company: "Adebayo Adeleke LLC",
    role: "Frontend Developer Intern",
    period: "2023 – 2024",
    location: "USA (Remote)",
    points: [
      "Assisted in implementing core UI features for an internal logistics tracking tool.",
      "Improved data visibility and operational efficiency through intuitive frontend solutions.",
      "Worked in agile environments including sprint planning and daily stand-ups.",
      "Integrated REST APIs and managed application state using React and Redux."
    ],
  },
  {
    id: "build-together",
    company: "Build Together",
    role: "Frontend Developer",
    period: "2023",
    location: "Nigeria",
    points: [
      "Helped develop a collaboration platform connecting over 500 tech professionals.",
      "Designed and implemented dashboards and team communication interfaces.",
      "Implemented authentication flows and update mechanisms to enhance productivity."
    ],
  },
  {
    id: "volunteer",
    company: "Find Cura",
    role: "Volunteer Frontend Developer",
    period: "Ongoing",
    location: "Nigeria",
    points: [
      "Working as a lead frontend dev in building a platform for patients to connect with pharmacies.",
      "Leading the development of a responsive web application using Next.js and Tailwind CSS.",
      "Collaborating with backend engineers to design and integrate robust API endpoints for real-time inventory tracking.",
    ],
  },
  {
    id: "open-source",
    company: "Open Source & Community",
    role: "Volunteer Frontend Contributor",
    period: "Ongoing",
    location: "Global",
    points: [
      "Contributed UI improvements and bug fixes to open-source frontend projects.",
      "Collaborated with developers globally through pull requests and reviews.",
      "Focused on accessibility, performance, and clean UI patterns."
    ],
  },
];

export default function JourneyTimeline() {
  const [active, setActive] = useState(experiences[0]);

  return (
    <div className="grid lg:grid-cols-[1fr_auto_2fr] gap-10 items-start mt-6">
      <div>
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setActive(exp)}
            className={`relative w-full text-left px-4 py-4 border-b transition-colors
              ${
                active.id === exp.id
                  ? "border-primary text-primary"
                  : "border-border text-foreground hover:text-primary"
              }`}
          >
            {active.id === exp.id && (
              <span className="absolute left-0 top-0 h-full w-[2px] bg-primary" />
            )}
            <p className="pl-3 font-medium">{exp.company}</p>
          </button>
        ))}
      </div>

      <div className="hidden lg:block w-px bg-border h-full" />

      <motion.div
        key={active.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:col-span-1 text-left"
      >
        <div className="mb-6">
          <h3 className="font-heading text-2xl font-bold">
            {active.role}
          </h3>
          <p className="text-muted-foreground">
            {active.company} • {active.location}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {active.period}
          </p>
        </div>

        <ul className="space-y-4">
          {active.points.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
              <p className="text-muted-foreground leading-relaxed">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
