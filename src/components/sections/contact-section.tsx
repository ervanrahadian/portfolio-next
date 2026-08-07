import { HiChatBubbleLeftRight } from "react-icons/hi2";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      icon={HiChatBubbleLeftRight}
      description="I am always happy to talk about new projects and opportunities."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map(
          ({ label, handle, href, icon: Icon, className }, index) => (
            <li key={label}>
              <Reveal from="up" delay={(index % 3) * 0.1}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    "flex h-full flex-col items-center justify-center gap-3 rounded-2xl p-8 text-white shadow-elevated transition-transform hover:-translate-y-1",
                    className,
                  )}
                >
                  <Icon className="size-12" aria-hidden />
                  <span className="text-lg font-semibold">{label}</span>
                  <span className="text-sm text-white/80">{handle}</span>
                </a>
              </Reveal>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
}
