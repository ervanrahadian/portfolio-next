import type { ReactNode } from "react";
import type { IconType } from "react-icons";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types/content";

interface SectionProps {
  id: SectionId;
  title: string;
  icon: IconType;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  title,
  icon: Icon,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal from="zoom" className="mb-12 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-900/5 text-brand-800 ring-1 ring-brand-900/10">
            <Icon className="size-7" aria-hidden />
          </span>
          <h2
            id={`${id}-heading`}
            className="mt-4 text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              {description}
            </p>
          ) : null}
        </Reveal>

        {children}
      </div>
    </section>
  );
}
