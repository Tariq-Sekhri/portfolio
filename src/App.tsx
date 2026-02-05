import { portfolio } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-6">
        {/* Hero */}
        <header className="mb-24">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-lg text-slate-400 leading-relaxed">
            {portfolio.about}
          </p>
        </header>

        <div className="space-y-12">
          {/* Skills */}
          <section id="skills">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Skills
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="space-y-6">
                {Object.entries(portfolio.skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="mb-2 text-sm text-slate-500">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-sm text-slate-300"
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
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Projects
            </h2>
            <div className="space-y-4">
              {portfolio.featuredProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-xl border border-slate-800 border-l-4 border-l-amber-500/60 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
                >
                  <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-amber-400 hover:text-amber-300 focus:outline-none focus:underline"
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
                          className="text-sm text-slate-500 hover:text-amber-400/90 focus:outline-none focus:underline"
                        >
                          {project.demoLabel ?? "Watch demo video"}
                        </a>
                      </>
                    )}
                  </div>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
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
                className="text-sm text-amber-400 hover:text-amber-300 focus:outline-none focus:underline"
              >
                More on GitHub →
              </a>
            </p>
          </section>

          {/* Experience */}
          <section id="experience">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Experience
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <ul className="space-y-8">
                {portfolio.experience.map((job) => (
                  <li key={`${job.company}-${job.role}`}>
                    <p className="font-medium text-white">
                      {job.role}
                      <span className="font-normal text-slate-500"> at {job.company}</span>
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">{job.period}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-amber-500/80">·</span>
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
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Education
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <ul className="space-y-2">
                {portfolio.education.map((edu) => (
                  <li key={edu.school}>
                    <span className="font-medium text-white">{edu.school}</span>
                    <span className="text-slate-400"> — {edu.degree}</span>
                    <span className="text-slate-500"> ({edu.period})</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section id="contact">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
              Contact
            </h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
                      className="text-amber-400 hover:text-amber-300 focus:outline-none focus:underline"
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
          © {new Date().getFullYear()} {portfolio.name}
        </footer>
      </div>
    </div>
  );
}

export default App;
