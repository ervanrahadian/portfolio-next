"use client";

import { AnimatePresence, motion } from "motion/react";
import { HiChevronUp } from "react-icons/hi2";

import { useScrolled } from "@/hooks/use-scrolled";

export function BackToTop() {
  const visible = useScrolled(320);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full bg-brand-900 text-white shadow-elevated transition-colors hover:bg-accent-500"
        >
          <HiChevronUp className="size-6" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
