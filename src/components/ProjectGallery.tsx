import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/portfolio";

const imageUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

export function ProjectGallery({ project }: { project: Project }) {
  const pictures = project.images ?? [];
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const picture = pictures[selected];

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  if (!picture) return null;

  const move = (direction: number) => {
    setSelected((current) => (current + direction + pictures.length) % pictures.length);
  };
  const arrowStyle = "rounded-md border border-slate-700 px-3 py-1.5 text-slate-300 transition-colors hover:border-emerald-500 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400";

  return (
    <div className="mt-5 min-w-0 lg:flex lg:gap-3">
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label={`Enlarge ${project.name}: ${picture.alt}`}
        className="group relative flex h-60 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950 p-3 transition-colors hover:border-emerald-500/60 focus-visible:outline-2 focus-visible:outline-emerald-400 sm:h-80 lg:h-[26rem] lg:min-w-0 lg:flex-1"
      >
        <img
          src={imageUrl(picture.src)}
          alt={`${project.name}: ${picture.alt}`}
          loading="lazy"
          className="h-full w-full object-contain"
        />
        <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-md border border-slate-700 bg-slate-900/95 px-2 py-1 text-xs text-slate-300 group-hover:text-emerald-300">
          Full size ↗
        </span>
      </button>

      <div className="lg:flex lg:h-[26rem] lg:w-52 lg:shrink-0 lg:flex-col">
      <div className="mt-3 flex items-center justify-between gap-3 text-xs lg:mb-2 lg:mt-0">
        <p aria-live="polite" className="min-w-0 truncate text-slate-300">{picture.alt}</p>
        <span className="shrink-0 tabular-nums text-slate-500">{selected + 1} / {pictures.length}</span>
      </div>

      {pictures.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 lg:mt-0 lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:pb-0 lg:pr-1" aria-label={`${project.name} screenshots`}>
          {pictures.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show ${project.name}: ${item.alt}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`w-24 shrink-0 rounded-lg border p-1.5 text-left lg:flex lg:w-full lg:items-center lg:gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-400 ${selected === index ? "border-emerald-500 bg-emerald-950/30 text-emerald-300" : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-600"}`}
            >
              <img src={imageUrl(item.src)} alt="" loading="lazy" className="h-14 w-full rounded object-contain lg:h-10 lg:w-16 lg:shrink-0" />
              <span className="mt-1.5 block truncate text-[10px] lg:mt-0 lg:min-w-0 lg:text-xs">{item.alt}</span>
            </button>
          ))}
        </div>
      )}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setExpanded(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}
        aria-label={`${project.name} image viewer`}
        className="m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-slate-950 p-0 text-slate-100 backdrop:bg-black/90 open:flex open:flex-col"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-800 px-3 py-2">
          <p className="min-w-0 truncate text-sm">
            <span className="font-medium text-emerald-400">{project.name}</span>
            <span className="text-slate-400"> · {picture.alt}</span>
          </p>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href={imageUrl(picture.src)} target="_blank" rel="noopener noreferrer" className="hidden text-xs text-emerald-400 hover:underline sm:inline">Open original ↗</a>
            {pictures.length > 1 && (
              <>
                <button type="button" onClick={() => move(-1)} className={arrowStyle} aria-label="Previous screenshot">←</button>
                <span className="text-xs tabular-nums text-slate-400">{selected + 1} / {pictures.length}</span>
                <button type="button" onClick={() => move(1)} className={arrowStyle} aria-label="Next screenshot">→</button>
              </>
            )}
            <button type="button" onClick={() => setExpanded(false)} className={arrowStyle} aria-label="Close image viewer">✕</button>
          </div>
        </div>
        {expanded && (
          <div
            className="flex min-h-0 flex-1 items-center justify-center p-2"
            onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}
          >
            <img src={imageUrl(picture.src)} alt={`${project.name}: ${picture.alt}`} className="h-full w-full object-contain" />
          </div>
        )}
      </dialog>
    </div>
  );
}
