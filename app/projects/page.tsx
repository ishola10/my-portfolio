"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "One Tap SOS",
    description: "A panic-friendly SOS app that allows users to send distress signals to emergency services with just one tap. Features include real-time location sharing, customizable SOS messages, and quick access to emergency contacts.",
    tech: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveUrl: "https://one-tap-sos-three.vercel.app/",
    githubUrl: "https://github.com/ishola10/one-tap-sos",
    category: "Web App, Mobile (Comming Soon...)",
  },
  {
    id: 2,
    title: "Strengthy",
    description: "A comprehensive fitness application that helps users track daily activities and provides personalized workout schedules for optimal health management. Features include progress tracking, custom workout plans, and activity reminders.",
    tech: ["React", "Node.js", "CSS", "REST API"],
    liveUrl: "https://strengthy.netlify.app/",
    githubUrl: "https://github.com/ishola10/fitness-app",
    category: "Web App",
  },
  {
    id: 3,
    title: "LinkSwift",
    description: "An advanced URL shortening application with analytics capabilities. Users can create shortened links with custom aliases, track click statistics, and manage their link collections efficiently.",
    tech: ["Vue.js", "TypeScript", "Firebase", "Axios"],
    liveUrl: "https://linkswift.netlify.app/",
    githubUrl: "https://github.com/ishola10/Link-Swift.io",
    category: "Web App",
  },
  {
    id: 4,
    title: "Vacine App",
    description: "A promotional healthcare platform designed to educate users about vaccination benefits and streamline the vaccine registration process. Clean, accessible design focused on clear communication.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vacineapp.netlify.app/",
    githubUrl: "#",
    category: "Website",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing frontend development skills. Built with performance and accessibility in mind, featuring smooth animations and clean design.",
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
              to design implementations. Each project represents a unique challenge 
              and learning opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
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
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
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

