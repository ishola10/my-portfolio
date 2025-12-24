"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Open for collaboration</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Interested in working{" "}
            <span className="text-gradient">together?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of something great. Let's build 
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact" className="group">
                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:akoredeishola10@gmail.com">
                akoredeishola10@gmail.com
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
