import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";

/** Structured data so search engines can identify the site owner. */
export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    email: siteConfig.email,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
    },
    sameAs: socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
