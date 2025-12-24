"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Available for new opportunities</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-xl sm:text-2xl text-muted-foreground mb-4"
                    >
                        Hi, I'm <span className="text-primary font-semibold">Muhammed</span> 👋
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        Software Engineer{" "}
                        <span className="block text-muted-foreground text-base font-normal mt-2">
                            (I speak fluent frontend, know some mobile lingo, and backend whispers)
                        </span>

                        <span className="block text-gradient">
                            building scalable,
                        </span>{" "}
                        <span className="block text-muted-foreground mt-2">
                            user-focused
                        </span>{" "}
                        <span className="block ">
                            web applications.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                    >
                        I craft performant, accessible, and maintainable web experiences
                        with a focus on product thinking and user outcomes.
                        Based in Nigeria, working globally.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button variant="hero" size="lg" asChild>
                            <Link href="/projects" className="group">
                                View Projects
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <Link href="/contact">
                                <Code2 className="w-5 h-5" />
                                Contact Me
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-border/50"
                    >
                        {[
                            { value: "2+", label: "Years Experience" },
                            { value: "10+", label: "Projects Completed" },
                            { value: "5+", label: "Happy Clients" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground">{stat.value}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
