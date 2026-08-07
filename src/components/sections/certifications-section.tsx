import Image from "next/image";
import { HiAcademicCap, HiArrowTopRightOnSquare } from "react-icons/hi2";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";

export function CertificationsSection() {
  return (
    <Section
      id="certification"
      title="Certification"
      icon={HiAcademicCap}
      className="bg-white"
      description="Courses and assessments I have completed along the way."
    >
      <ul className="flex flex-col gap-14">
        {certifications.map(
          ({ slug, title, description, image, href }, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <li
                key={slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <Reveal
                  from={imageFirst ? "left" : "right"}
                  className={cn(imageFirst ? "md:order-1" : "md:order-2")}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-elevated"
                  >
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={560}
                      sizes="(min-width: 768px) 33rem, 90vw"
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </Reveal>

                <Reveal
                  from={imageFirst ? "right" : "left"}
                  className={cn(imageFirst ? "md:order-2" : "md:order-1")}
                >
                  <h3 className="text-2xl font-semibold text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {description}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-brand-700"
                  >
                    View certificate
                    <HiArrowTopRightOnSquare className="size-4" aria-hidden />
                  </a>
                </Reveal>
              </li>
            );
          },
        )}
      </ul>
    </Section>
  );
}
