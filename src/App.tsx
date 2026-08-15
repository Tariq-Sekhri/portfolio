import { useEffect, useState } from "react";
import { portfolio } from "./data/portfolio";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a
            href="#top"
            className="shrink-0 text-lg font-semibold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            {portfolio.name}
            <span className="text-emerald-400/90">.</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={portfolio.resumeUrl}
            download="Tariq-Sekhri-Resume.pdf"
            className="shrink-0 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 text-sm font-medium text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-950/60 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            Resume
          </a>
        </div>
        <nav
          className="flex gap-1 overflow-x-auto border-t border-slate-800/50 px-5 py-2 md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-3 py-1 text-xs text-slate-400 hover:bg-slate-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:px-6 md:pt-24">
        <div className="space-y-12">
          <section
            aria-label="Overview"
            className="grid gap-4 md:grid-cols-2 md:items-stretch"
          >
            <article
              id="experience"
              className="flex h-full scroll-mt-28 flex-col rounded-xl border border-slate-800 border-t-sky-500/30 bg-slate-900/50 p-6 md:scroll-mt-24"
            >
              <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-sky-400">
                Experience
              </h2>
              <ul className="space-y-6">
                {portfolio.experience.map((job) => (
                  <li key={`${job.company}-${job.role}`}>
                    <p className="text-xl font-medium sm:text-2xl">
                      <span className="text-sky-400">{job.role}</span>
                      <span className="font-normal text-slate-500">
                        {" "}
                        at {job.company}
                      </span>
                    </p>
                    <p className="mt-2 text-base text-slate-400 sm:text-lg">
                      {job.period}
                    </p>
                    <ul className="mt-4 space-y-2 text-base text-slate-300 sm:text-lg">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-sky-400/80">·</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </article>

            <article
              id="education"
              className="flex h-full scroll-mt-28 flex-col rounded-xl border border-slate-800 border-t-violet-500/30 bg-slate-900/50 p-6 md:scroll-mt-24"
            >
              <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">
                Education
              </h2>
              <ul className="space-y-4">
                {portfolio.education.map((edu) => (
                  <li key={edu.school}>
                    <p className="text-xl font-medium text-violet-300 sm:text-2xl">
                      {edu.school}
                    </p>
                    <p className="mt-2 text-base text-slate-300 sm:text-lg">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-base text-slate-500">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section id="skills" className="scroll-mt-28 md:scroll-mt-24">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-sky-400">
              Skills
            </h2>
            <div className="rounded-xl border border-slate-800 border-t-sky-500/20 bg-slate-900/50 p-6">
              <div className="space-y-6">
                {Object.entries(portfolio.skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="mb-2 text-sm text-sky-400/90">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-slate-700 border-sky-900/50 bg-slate-800 px-2.5 py-1 text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-28 md:scroll-mt-24">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-emerald-400">
              Projects
            </h2>
            <div className="space-y-4">
              {portfolio.featuredProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-xl border border-slate-800 border-l-4 border-l-emerald-500/60 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
                >
                  <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-400 hover:text-emerald-300 focus:outline-none focus:underline"
                    >
                      {project.name}
                    </a>
                    {project.demoUrl && (
                      <>
                        <span className="text-slate-600">·</span>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-500 hover:text-emerald-400/90 focus:outline-none focus:underline"
                        >
                          {project.name === "TikTok Archiver" ? (
                            <>
                              <span className="sr-only">
                                {project.demoLabel ?? "Watch demo video"}
                              </span>
                              <svg
                                aria-hidden="true"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </>
                          ) : (
                            project.demoLabel ?? "Watch demo video"
                          )}
                        </a>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-emerald-600/80">
                    {project.tech.join(" / ")}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-4">
              <a
                href={portfolio.moreProjectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-400 hover:text-emerald-300 focus:outline-none focus:underline"
              >
                More on GitHub →
              </a>
            </p>
          </section>

          <section id="contact" className="scroll-mt-28 md:scroll-mt-24">
            <div className="rounded-2xl border border-slate-800 border-t-violet-500/40 bg-gradient-to-b from-violet-950/40 to-slate-900/50 px-6 py-14 sm:px-10 sm:py-16">
              <h2 className="text-sm font-medium uppercase tracking-widest text-violet-400">
                Contact
              </h2>
              <p className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let&apos;s connect
              </p>
              <p className="mt-3 max-w-lg text-base text-slate-400 sm:text-lg">
                Reach out by email or find me on GitHub and LinkedIn.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {portfolio.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex h-full flex-col items-start justify-center rounded-xl border border-violet-500/30 bg-violet-950/40 px-5 py-6 text-left transition-colors hover:border-violet-500/50 hover:bg-violet-950/60 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                    >
                      <span className="text-lg font-medium text-violet-200 sm:text-xl">
                        {link.label}
                      </span>
                      <span className="mt-2 break-all text-sm text-slate-400">
                        {link.href.replace(/^mailto:/, "")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-500/80">{portfolio.name}</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
