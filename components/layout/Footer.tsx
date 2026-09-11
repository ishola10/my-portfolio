import Link from "next/link";
import { navItems, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-lg text-foreground">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Frontend engineer. Interfaces that hold up in production.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground md:text-right">
            <a
              href={`mailto:${site.email}`}
              className="text-foreground transition-colors hover:text-primary"
            >
              {site.email}
            </a>
            <p className="mt-2">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
