import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PersonJsonLd } from "@/components/seo/person-json-ld";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
