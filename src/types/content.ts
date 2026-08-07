import type { IconType } from "react-icons";

export type SectionId =
  "home" | "about" | "portfolio" | "certification" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: IconType;
}

export interface Skill {
  name: string;
  icon: IconType;
  /** Brand color of the technology, used for the icon tint. */
  color: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
}

export interface Certification {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: IconType;
  /** Tailwind classes describing the card surface for this brand. */
  className: string;
}
