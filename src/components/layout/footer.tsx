"use client";

import { useRouter, usePathname } from "next/navigation";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (pathname !== "/") {
      // Navigate to home page with hash
      window.location.href = `/${href}`;
    } else {
      // We're on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background mt-auto">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="gradient-text">NM</span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={link.name}
                >
                  <span className="text-sm font-medium">{link.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resume */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Get in Touch
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{SITE_CONFIG.email}</p>
              <p>{SITE_CONFIG.location}</p>
            </div>
            <div className="pt-2">
              <MagneticButton
                href={SITE_CONFIG.resumeUrl}
                variant="outline"
                size="sm"
                download
              >
                Download Resume
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>{SITE_CONFIG.copyright}</p>
          <p className="mt-1 text-xs">{SITE_CONFIG.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
