import Link from "next/link";
import { Github, Linkedin, Mail, X } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ishola10", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muhammed-badmus-a02303258", label: "LinkedIn" },
  { icon: X, href: "https://x.com/Atomdevv", label: "X" },
  { icon: Mail, href: "mailto:akoredeishola10@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-heading font-bold text-sm">MB</span>
              </div>
              <span className="font-heading font-semibold text-foreground">
                Muhammed Badmus<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Muhammed Badmus. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
