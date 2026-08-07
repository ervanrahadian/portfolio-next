import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiWhatsapp, SiTiktok } from "react-icons/si";

import type { Social } from "@/types/content";

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "@ervanrahadian",
    href: "https://github.com/ervanrahadian",
    icon: SiGithub,
    className: "bg-[#1f1f1f]",
  },
  {
    label: "LinkedIn",
    handle: "Ervan Rahadian Hakim",
    href: "https://www.linkedin.com/in/ervanrahadianhakim",
    icon: FaLinkedin,
    className: "bg-[#006192]",
  },
  {
    label: "TikTok",
    handle: "Ervan Rahadian",
    href: "https://www.tiktok.com/@ervanrahadian_",
    icon: SiTiktok,
    className: "bg-[#000000]",
  },
  {
    label: "WhatsApp",
    handle: "+62 877 5757 5717",
    href: "https://wa.me/6287757575717",
    icon: SiWhatsapp,
    className: "bg-[#4ac959]",
  },
  {
    label: "Email",
    handle: "ervanrahadian@gmail.com",
    href: "mailto:ervanrahadian@gmail.com",
    icon: SiGmail,
    className: "bg-[#4285f4]",
  },
];
