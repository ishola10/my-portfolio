"use client";
import { TechStack } from "@/components/sections/TechStack";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTASection } from "@/components/sections/CTASection";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSnapshot />
      <section className="py-16 lg:py-24">
                      <div className="section-container">
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="max-w-3xl mx-auto text-center"
                          >
                              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                                  My Journey
                              </span>
                              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                  Experience & Background
                              </h2>
                              <div>
                                  <JourneyTimeline />
                              </div>
                          </motion.div>
                      </div>
                  </section>
      <TechStack />
      <FeaturedProjects />
      <CTASection />
    </main>
  );
}
