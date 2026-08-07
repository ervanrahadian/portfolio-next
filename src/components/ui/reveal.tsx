"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

const OFFSET = 32;

const variantsByDirection: Record<RevealDirection, Variants> = {
  up: { hidden: { opacity: 0, y: OFFSET }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -OFFSET }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -OFFSET }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: OFFSET }, visible: { opacity: 1, x: 0 } },
  zoom: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface RevealProps {
  children: ReactNode;
  /** Edge the content animates in from. */
  from?: RevealDirection;
  delay?: number;
  className?: string;
}

/** Animates its children into view the first time they are scrolled to. */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variantsByDirection[from]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
