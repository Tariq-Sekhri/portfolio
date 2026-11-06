import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/portfolio";

const imageUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

export function ProjectGallery({ project }: { project: Project }) {
  const pictures = project.images ?? [];
  const [selected, setSelected] = useState(() => {
    try {
      const saved = sessionStorage.getItem(`portfolio:gallery:${project.name}`);
      const index = saved ? pictures.findIndex(item => item.src === saved) : 0;
      return Math.max(0, index);
    } catch { return 0; }
  });
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const picture = pictures[selected];

  useEffect(() => {
    if (!picture) return;
    try { sessionStorage.setItem(`portfolio:gallery:${project.name}`, picture.src); } catch { /* Storage may be disabled. */ }
  }, [picture, project.name]);

  useEffect(() => {
    if (!expanded) return;
    const viewer = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    viewer?.showModal();
    return () => {
      viewer?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  if (!picture) return null;
  const move = (direction: number) => setSelected(current => (current + direction + pictures.length) % pictures.length);
  const companion = project.portraitImages && pictures.length > 1 ? pictures[(selected + 1) % pictures.length] : undefined;

  return (
    <div className="gallery">
      <div className={`gallery-stage ${project.portraitImages ? "portrait-stage" : ""}`}>
        <button type="button" className="screenshot" onClick={() => setExpanded(true)} aria-label={`Enlarge ${project.name}: ${picture.alt}`}>
          <img src={imageUrl(picture.src)} alt={`${project.name}: ${picture.alt}`} loading="lazy" />
          <span className="expand-icon" aria-hidden="true">⤢</span>
        </button>
        {companion && <button type="button" className="screenshot companion" onClick={() => { move(1); setExpanded(true); }} aria-label={`Enlarge ${project.name}: ${companion.alt}`}><img src={imageUrl(companion.src)} alt={`${project.name}: ${companion.alt}`} loading="lazy" /><span className="expand-icon" aria-hidden="true">⤢</span></button>}
      </div>
      <div className="gallery-caption"><p aria-live="polite">{picture.alt}</p>{pictures.length > 1 && <div className="gallery-controls"><button type="button" onClick={() => move(-1)} aria-label={`Previous ${project.name} screenshot`}>←</button><span>{selected + 1} / {pictures.length}</span><button type="button" onClick={() => move(1)} aria-label={`Next ${project.name} screenshot`}>→</button></div>}</div>
      {pictures.length > 1 && <div className="thumbnails" role="group" aria-label={`${project.name} screenshots`}>{pictures.map((item, index) => <button key={item.src} type="button" aria-label={`Show ${project.name}: ${item.alt}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><img src={imageUrl(item.src)} alt="" loading="lazy" /></button>)}</div>}
      <dialog ref={dialog} className="image-viewer" aria-label={`${project.name} image viewer`} onClose={() => setExpanded(false)} onClick={event => { if (event.target === event.currentTarget) setExpanded(false); }} onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
        <div className="viewer-toolbar"><p>{project.name}<span> / {picture.alt}</span></p><div><a className="original-link" href={imageUrl(picture.src)} target="_blank" rel="noopener noreferrer">Original ↗</a>{pictures.length > 1 && <><button type="button" onClick={() => move(-1)} aria-label="Previous screenshot">←</button><span>{selected + 1} / {pictures.length}</span><button type="button" onClick={() => move(1)} aria-label="Next screenshot">→</button></>}<button type="button" onClick={() => setExpanded(false)} aria-label="Close image viewer">✕</button></div></div>
        {expanded && <div className="viewer-image" onClick={event => { if (event.target === event.currentTarget) setExpanded(false); }}><img src={imageUrl(picture.src)} alt={`${project.name}: ${picture.alt}`} /></div>}
      </dialog>
    </div>
  );
}
