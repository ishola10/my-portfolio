"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const currentWork = [
  {
    title: "One Tap SOS (Mobile)",
    description:
      "Currently building the mobile version of One Tap SOS with improved offline reliability, faster alert delivery, and a refined emergency-first user experience.",
    tech: [
      "Nuxt.js",
      "Vue.js",
      "Tailwind CSS",
      "Firebase",
      "Location Services",
    ],
    status: "In Progress",
  },
  {
    title: "Unnecessary Engine",
    description:
      "A beautifully designed, fully functional web platform that generates completely useless digital artifacts via a RESTful API. A polished satire of solution-in-search-of-a-problem startup culture, built with serious engineering to showcase backend, frontend, API design, and creative coding skills.",
    tech: [
      "Next.js",
      "TypeScript",
      "REST API",
      "Node.js",
      "Creative Coding",
    ],
    status: "Building",
  },
  {
    title: "Nonagon",
    description:
      "An interactive physics explorer that visualizes motion, forces, and constraints in real time. Built to experiment with simulation logic, rendering performance, and user-driven exploration of physical systems.",
    tech: [
      "JavaScript",
      "Vue.js",
      "Canvas / WebGL",
      "Tailwind CSS",
      "Three.js",
      "Firebase",
      "Physics Simulation",
      "Math",
      "Interactive UI",
    ],
    status: "Experimental",
  },
];


const allProjects = [
  {
    id: 1,
    title: "One Tap SOS",
    description:
      "A panic-friendly SOS app that allows users to send distress signals to emergency services with just one tap. Features include real-time location sharing, customizable SOS messages, and quick access to emergency contacts.",
    tech: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveUrl: "https://one-tap-sos-three.vercel.app/",
    githubUrl: "https://github.com/ishola10/one-tap-sos",
    category: "Web App, Mobile (Coming Soon...)",
  },
  {
    id: 2,
    title: "Strengthy",
    description:
      "A comprehensive fitness application that helps users track daily activities and provides personalized workout schedules for optimal health management.",
    tech: ["React", "Node.js", "CSS", "REST API"],
    liveUrl: "https://strengthy.netlify.app/",
    githubUrl: "https://github.com/ishola10/fitness-app",
    category: "Web App",
  },
  {
    id: 3,
    title: "LinkSwift",
    description:
      "An advanced URL shortening application with analytics capabilities. Users can create shortened links with custom aliases and track click statistics.",
    tech: ["Vue.js", "TypeScript", "Firebase", "Axios"],
    liveUrl: "https://linkswift.netlify.app/",
    githubUrl: "https://github.com/ishola10/Link-Swift.io",
    category: "Web App",
  },
  {
    id: 4,
    title: "Vacine App",
    description:
      "A promotional healthcare platform designed to educate users about vaccination benefits and streamline the vaccine registration process.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vacineapp.netlify.app/",
    githubUrl: "#",
    category: "Website",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing frontend development skills with smooth animations and clean design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://badmusmuhammed.vercel.app/",
    githubUrl: "https://github.com/ishola10/my-portfolio",
    category: "Website",
  },
];

export default function Projects() {
  return (
    <div>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              My Work
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of projects I've built, ranging from web applications
              to design implementations. Each project represents a unique
              challenge and learning opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-heading text-3xl font-bold mb-8"
          >
            What I’m Working On
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {currentWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
    relative rounded-2xl p-8
    bg-white/5 dark:bg-white/10
    backdrop-blur-xl
    border border-white/10
    shadow-lg shadow-black/5
    hover:shadow-xl hover:shadow-primary/10
    hover:-translate-y-1
    transition-all duration-300
  "
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {work.status}
                </span>

                <h3 className="font-heading text-xl font-semibold mb-3">
                  {work.title}
                </h3>

                <p className="text-muted-foreground mb-5">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-heading text-3xl font-bold mb-8"
          >
            Completed Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-muted"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}