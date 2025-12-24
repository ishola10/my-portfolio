"use client";
import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Vue.js", category: "Framework" },
  { name: "Nuxt.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Sass/SCSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs", category: "Integration" },
  { name: "Firebase", category: "Backend" },
  { name: "Git", category: "Tooling" },
  { name: "Figma", category: "Design" },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The modern development stack I use to build performant, 
            scalable, and maintainable applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="tech-badge cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
