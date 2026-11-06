import { portfolio } from "./data/portfolio";
import { ProjectGallery } from "./components/ProjectGallery";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#experience">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="wordmark">{portfolio.name}<span aria-hidden="true"> /</span></a>
          <nav aria-label="Primary">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
          <a href={portfolio.resumeUrl} download="Tariq-Sekhri-Resume.pdf" className="resume-link">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <main id="top" className="page-shell">
        <div className="intro">
          <h1>Full stack software developer.</h1>
          <p>Desktop, web, and Android applications. From the interface to the systems behind it.</p>
        </div>

        <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
          <div className="section-heading"><span className="section-number" aria-hidden="true">01</span><h2 id="experience-heading">Experience</h2></div>
          <div className="experience-list">{portfolio.experience.map(job => (
            <article className="job" key={job.company}>
              <div className="job-meta"><p className="company">{job.company}</p><h3>{job.role}</h3><p className="period">{job.period}</p></div>
              <ul className="contributions">{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}</div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <div className="section-heading"><span className="section-number" aria-hidden="true">02</span><h2 id="projects-heading">Selected projects</h2><a className="section-link" href={portfolio.moreProjectsUrl} target="_blank" rel="noopener noreferrer">All repositories ↗</a></div>
          <div className="project-grid">{portfolio.featuredProjects.map((project, index) => (
            <article className="project" key={project.name}>
              <div className="project-copy">
                <div className="project-title"><span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{project.name}</h3>{project.url && <a className="repo-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>}</div>
                <ul className="tech-stack" aria-label={`${project.name} tech stack`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
                <p className="project-description">{project.description}</p>
              </div>
              <ProjectGallery project={project} />
              <div className="project-details"><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">{project.demoLabel ?? "Watch demo"} ↗</a>}</div>
            </article>
          ))}</div>
        </section>

        <section id="education" className="section education" aria-labelledby="education-heading">
          <div className="section-heading"><span className="section-number" aria-hidden="true">03</span><h2 id="education-heading">Education</h2></div>
          {portfolio.education.map(edu => <div className="education-entry" key={edu.school}><div><h3>{edu.school}</h3><p>{edu.degree}</p></div><p className="period">{edu.period}</p></div>)}
        </section>
        <section id="contact" className="section contact" aria-labelledby="contact-heading">
          <div className="section-heading"><span className="section-number" aria-hidden="true">04</span><h2 id="contact-heading">Contact</h2></div>
          <div className="contact-links">{portfolio.contact.map(link => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}><span>{link.label} ↗</span><span className="contact-address">{link.href.replace(/^(mailto:|https?:\/\/(www\.)?)/, "")}</span></a>)}</div>
        </section>
        <footer>© {new Date().getFullYear()} {portfolio.name}</footer>
      </main>
    </>
  );
}
export default App;
