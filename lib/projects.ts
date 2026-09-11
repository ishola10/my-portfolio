export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  year: string;
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "One Tap SOS",
    description:
      "Emergency-first SOS product for sending distress signals in one tap, with live location sharing and customizable alerts.",
    tech: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveUrl: "https://one-tap-sos-three.vercel.app/",
    githubUrl: "https://github.com/ishola10/one-tap-sos",
    category: "Product",
    year: "2024",
  },
  {
    id: 2,
    title: "LinkSwift",
    description:
      "URL shortener with analytics, custom aliases, and click tracking — built as a compact Vue/Firebase product.",
    tech: ["Vue.js", "TypeScript", "Firebase"],
    liveUrl: "https://linkswift.netlify.app/",
    githubUrl: "https://github.com/ishola10/Link-Swift.io",
    category: "Tool",
    year: "2024",
  },
  {
    id: 3,
    title: "Strengthy",
    description:
      "Fitness tracker with activity logging and personalized workout schedules for day-to-day health management.",
    tech: ["React", "Node.js", "REST API"],
    liveUrl: "https://strengthy.netlify.app/",
    githubUrl: "https://github.com/ishola10/fitness-app",
    category: "Web App",
    year: "2023",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 4,
    title: "Vacine App",
    description:
      "Healthcare landing experience explaining vaccination benefits and guiding users through registration.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vacineapp.netlify.app/",
    githubUrl: "#",
    category: "Website",
    year: "2023",
  },
];

export const currentWork = [
  {
    title: "One Tap SOS (Mobile)",
    description:
      "Mobile version of One Tap SOS, focused on offline reliability, faster alert delivery, and an emergency-first interface.",
    tech: ["Nuxt.js", "Vue.js", "Firebase"],
    status: "In progress",
  },
  {
    title: "Unnecessary Engine",
    description:
      "Satirical product that generates useless digital artifacts through a REST API — a serious engineering exercise in API design and frontend craft.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    status: "Building",
  },
  {
    title: "Nonagon",
    description:
      "Interactive physics explorer for motion, forces, and constraints in real time. Experiments with simulation, rendering, and exploratory UI.",
    tech: ["Vue.js", "Three.js", "Canvas"],
    status: "Experimental",
  },
];
