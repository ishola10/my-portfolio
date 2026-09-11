"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-tight text-foreground">
              {site.name}
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link flex items-baseline gap-2 text-sm ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {item.index}
                </span>
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="hidden text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline lg:inline"
            >
              {site.email}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="section-container flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-baseline gap-3 py-3 text-lg ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <span className="font-mono text-xs tracking-widest">
                  {item.index}
                </span>
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-4 text-sm text-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
