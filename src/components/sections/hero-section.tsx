"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HiArrowDown, HiChatBubbleLeftRight, HiMapPin } from "react-icons/hi2";

import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh animate-aurora items-center overflow-hidden bg-linear-45 from-brand-600 via-violet-600 to-accent-500 bg-size-[300%_300%]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22),transparent_60%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pt-24 pb-16 text-center"
      >
        <motion.div variants={item}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={220}
            height={220}
            priority
            className="size-40 rounded-3xl bg-white/10 p-2 shadow-elevated ring-1 ring-white/30 backdrop-blur-sm sm:size-52"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg font-medium text-white/90 sm:text-2xl"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 inline-flex items-center gap-2 text-sm text-white/75"
        >
          <HiMapPin className="size-4" aria-hidden />
          {siteConfig.location}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-900 shadow-elevated transition-transform hover:scale-105"
          >
            View my work
            <HiArrowDown className="size-4" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Get in touch
            <HiChatBubbleLeftRight className="size-4" aria-hidden />
          </a>
        </motion.div>

        <motion.ul
          variants={item}
          aria-label="Technologies I work with"
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {skills.map(({ name, icon: Icon, color }, index) => (
            <li
              key={name}
              title={name}
              className="animate-float rounded-2xl border border-white/25 bg-white/30 p-3 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon
                className="size-6 sm:size-7"
                style={{ color }}
                aria-hidden
              />
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
