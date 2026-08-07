import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    lang: siteConfig.locale,
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: siteConfig.themeColor,
    background_color: siteConfig.backgroundColor,
    icons: [
      {
        src: "/img/ERLogo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/ERLogo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/ERLogoMaskable512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
