"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type MouseEvent } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { navItems, sectionIds } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(24);
  const activeSection = useActiveSection(sectionIds);
  const prefersReducedMotion = useReducedMotion();

  /**
   * Drives the scroll explicitly instead of relying on fragment navigation, so
   * it cannot be cancelled by the menu closing in the same click, and so the
   * reduced motion preference is honoured.
   */
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-brand-950/90 shadow-elevated backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5"
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="text-lg font-bold text-white"
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                aria-current={activeSection === id ? "true" : undefined}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeSection === id
                    ? "bg-white/10 text-accent-400"
                    : "text-white/80 hover:bg-white/10 hover:text-accent-400",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-1 text-white transition-colors hover:text-accent-400 lg:hidden"
        >
          {menuOpen ? (
            <HiXMark className="size-8" aria-hidden />
          ) : (
            <HiBars3 className="size-8" aria-hidden />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            /**
             * Animating `height: auto` would make Motion measure the element,
             * and its measurement restores the document scroll position, which
             * cancels the scroll triggered by tapping a link. The header is
             * fixed, so opacity and transform are enough here.
             */
            className="lg:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 pb-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => handleNavClick(event, id)}
                    aria-current={activeSection === id ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      activeSection === id
                        ? "bg-white/10 text-accent-400"
                        : "text-white/85 hover:bg-white/10 hover:text-accent-400",
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
