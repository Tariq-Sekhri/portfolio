import { portfolio } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-6">
        {/* Hero */}
        <header className="mb-24">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {portfolio.name}
            <span className="text-emerald-400/90">.</span>
          </h1>
          <p className="mt-5 max-w-lg text-slate-400 leading-relaxed">
            {portfolio.about}
          </p>
        </header>

        <div className="space-y-12">
          {/* Skills */}
          <section id="skills">
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

          {/* Projects */}
          <section id="projects">
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
                          {project.demoLabel ?? "Watch demo video"}
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

          {/* Experience */}
          <section id="experience">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-sky-400">
              Experience
            </h2>
            <div className="rounded-xl border border-slate-800 border-t-sky-500/20 bg-slate-900/50 p-6">
              <ul className="space-y-8">
                {portfolio.experience.map((job) => (
                  <li key={`${job.company}-${job.role}`}>
                    <p className="font-medium">
                      <span className="text-sky-400">{job.role}</span>
                      <span className="font-normal text-slate-500"> at {job.company}</span>
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">{job.period}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
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
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">
              Education
            </h2>
            <div className="rounded-xl border border-slate-800 border-t-violet-500/20 bg-slate-900/50 p-6">
              <ul className="space-y-2">
                {portfolio.education.map((edu) => (
                  <li key={edu.school}>
                    <span className="font-medium text-violet-300">{edu.school}</span>
                    <span className="text-slate-400"> — {edu.degree}</span>
                    <span className="text-slate-500"> ({edu.period})</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section id="contact">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">
              Contact
            </h2>
            <div className="rounded-xl border border-slate-800 border-t-violet-500/20 bg-slate-900/50 p-6">
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
                {portfolio.contact.map((link, i) => (
                  <li key={link.label} className="flex items-center gap-x-2">
                    {i > 0 && (
                      <span className="text-slate-600" aria-hidden>
                        ·
                      </span>
                    )}
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-md border border-violet-500/30 bg-violet-950/40 px-3 py-1.5 text-violet-300 hover:border-violet-500/50 hover:bg-violet-950/60 hover:text-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                    >
                      {link.label}
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
