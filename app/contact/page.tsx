"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "akoredeishola10@gmail.com",
    href: "mailto:akoredeishola10@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@ishola10",
    href: "https://github.com/ishola10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Badmus Muhammed",
    href: "https://linkedin.com/in/muhammed-badmus-a02303258",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@Atomdevv",
    href: "https://x.com/Atomdevv",
  },
];

export default function Contact() {
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
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something great together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium">{method.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8">
                Connect With Me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {social.label}
                      </div>
                      <div className="text-lg font-medium group-hover:text-primary transition-colors">
                        {social.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Prefer email?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Drop me a line anytime. I typically respond within 24-48 hours.
                </p>
                <a
                  href="mailto:akoredeishola10@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
