"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import JourneyTimeline from "@/components/sections/JourneyTimeline";

const values = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I believe in writing code that's not just functional, but readable and maintainable. Clean code is a form of respect for future developers.",
    },
    {
        icon: Heart,
        title: "User-First",
        description: "Every line of code I write serves the user. I build interfaces that are intuitive, accessible, and delightful to use.",
    },
    {
        icon: Rocket,
        title: "Continuous Learning",
        description: "The web evolves rapidly, and so do I. I'm constantly learning new technologies and best practices to stay at the cutting edge.",
    },
    {
        icon: BookOpen,
        title: "Knowledge Sharing",
        description: "I believe in giving back to the community through writing, mentoring, and open-source contributions.",
    },
];

export default function About() {
    return (
        <div>
            <section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                                About Me
                            </span>
                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                Badmus Muhammed
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                I'm a Frontend Developer based in Nigeria with over 2 years of experience
                                building web applications. I combine technical expertise with a deep
                                understanding of user experience to create products that people genuinely
                                enjoy using.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Beyond coding, I'm passionate about physics and enjoy exploring the
                                fascinating connections between scientific principles and frontend
                                development. This unique perspective helps me approach problems
                                creatively and build more intuitive interfaces.
                            </p>
                            <Button variant="hero" asChild>
                                <Link href="/contact" className="group">
                                    Get In Touch
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                                        <span className="text-6xl font-heading font-bold text-primary">BM</span>
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 w-16 h-16 rounded-lg bg-primary/10 animate-float" />
                                <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                            My Approach
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            What Drives Me
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            The principles and values that guide my work and define
                            how I approach every project.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-32">
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
        </div>
    );
}
