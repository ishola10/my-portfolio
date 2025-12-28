"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "One Tap SOS",
    description: "A panic-friendly SOS app that allows users to send distress signals to emergency services with just one tap. Features include real-time location sharing, customizable SOS messages, and quick access to emergency contacts.",
    tech: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveUrl: "https://one-tap-sos-three.vercel.app/",
    githubUrl: "https://github.com/ishola10/one-tap-sos",
    category: "Web App, Mobile (Comming Soon...)",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "LinkSwift",
    description: "An advanced URL shortening application with analytics, enabling users to create shortened links with custom tracking capabilities.",
    tech: ["Vue.js", "TypeScript", "Firebase", "Axios"],
    liveUrl: "https://linkswift.netlify.app/",
    githubUrl: "https://github.com/ishola10/Link-Swift.io",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Vacine App",
    description: "A promotional healthcare platform designed to educate users about vaccination benefits and streamline the vaccine registration process.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vacineapp.netlify.app/",
    githubUrl: "#",
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>
          <Button variant="heroOutline" asChild>
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
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

                  <div className="flex gap-3 lg:flex-col">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
