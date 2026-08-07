import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/70">
          Copyright &copy; {year} &mdash;{" "}
          <a
            href="#home"
            className="font-medium text-white transition-colors hover:text-accent-400"
          >
            {siteConfig.name}
          </a>
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-white/70 transition-colors hover:text-accent-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
