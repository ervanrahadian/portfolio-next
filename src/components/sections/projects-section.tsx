import Image from "next/image";
import { HiDocumentText } from "react-icons/hi2";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="portfolio"
      title="Portfolio"
      icon={HiDocumentText}
      description="A selection of the applications, websites and design work I have built."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ slug, title, description, image, tags }, index) => (
          <li key={slug} className="h-full">
            <Reveal from="up" delay={(index % 3) * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-elevated">
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
