"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Target,
    title: "Product-Minded",
    description: "I approach development with a focus on user outcomes and business value, not just code."
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Building fast, accessible experiences that work smoothly across all devices and connections."
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Tackling complex frontend challenges with clean, maintainable, and scalable solutions."
  },
];

export function AboutSnapshot() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A developer who cares about the{" "}
              <span className="text-gradient">details</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm Badmus Muhammed, a Frontend Developer based in Nigeria with 2+ years 
              of experience building web applications, apps and all. I combine technical expertise 
              with a deep understanding of user experience to create products that 
              people genuinely enjoy using.
            </p>
            <Button variant="heroOutline" asChild>
              <Link href="/about" className="group">
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
