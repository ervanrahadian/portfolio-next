import {
  HiAcademicCap,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiHome,
  HiUser,
} from "react-icons/hi2";

import type { NavItem, SectionId } from "@/types/content";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: HiHome },
  { id: "about", label: "About", icon: HiUser },
  { id: "portfolio", label: "Portfolio", icon: HiDocumentText },
  { id: "certification", label: "Certification", icon: HiAcademicCap },
  { id: "contact", label: "Contact", icon: HiChatBubbleLeftRight },
];

export const sectionIds: SectionId[] = navItems.map((item) => item.id);
