import { HiUser } from "react-icons/hi2";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

// const highlights = [
//   {
//     title: "Software Engineer",
//     description: "",
//   },
//   {
//     title: "Videographer",
//     description: "",
//   },
//   {
//     title: "Drone Pilot",
//     description: "",
//   },
// ];

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      icon={HiUser}
      className="bg-white"
      description="A short introduction to who I am and what I enjoy building."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal from="left">
          <p className="leading-relaxed text-slate-600">
            Hello, and welcome to my personal website. My name is{" "}
            <strong className="font-semibold text-brand-900">
              {siteConfig.name}
            </strong>
            . I am a Full-Stack Software Engineer with hands-on experience 
            building modern applications using React.js for the front-end and Node.js 
            (Express.js, Nest.js) for the back-end. My focus is on delivering scalable, 
            maintainable, and user-friendly solutions across the entire stack.
          </p>
        </Reveal>

        <Reveal from="right">
          <p className="leading-relaxed text-slate-600">
            Beyond coding, I am also passionate about visual storytelling. As a 
            Videographer and Drone Pilot, I enjoy capturing unique perspectives 
            using the DJI Osmo Action 5 Pro and DJI Mini 4 Pro. My creative work 
            has been recognized—most notably, I won the 2025 Event 8.8 Content 
            Challenge from Delta Force Indonesia.
          </p>
        </Reveal>
      </div>

      {/* <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ title, description }, index) => (
          <Reveal key={title} from="up" delay={index * 0.1}>
            <article className="h-full rounded-2xl border border-slate-200 bg-surface p-6 transition-shadow hover:shadow-elevated">
              <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          </Reveal>
        ))}
      </div> */}
    </Section>
  );
}
