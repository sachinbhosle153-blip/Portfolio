import { createContext, useContext, useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import { SiteHeader } from "../shared/SiteHeader";
import { ALL_PROJECTS } from "../shared/projects";
import "../shared/base.css";
import "./case.css";

// Building blocks shared by every case study, so all five pages read as one system.

type Item = { label: string; value: string };
type Zoomed = { src: string; alt: string } | null;

// Images sit in fixed-size frames; clicking one opens it at full size.
const ZoomContext = createContext<(z: Zoomed) => void>(() => {});

function Shot({ src, alt }: { src: string; alt: string }) {
  const zoom = useContext(ZoomContext);
  return (
    <button type="button" className="cs-shot" onClick={() => zoom({ src, alt })} aria-label={`View larger: ${alt}`}>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
}

function Lightbox({ zoomed, close }: { zoomed: Zoomed; close: () => void }) {
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed, close]);
  if (!zoomed) return null;
  return (
    <div className="cs-lightbox" role="dialog" aria-modal="true" aria-label={zoomed.alt} onClick={close}>
      <button type="button" className="cs-lightbox-close cv-label" onClick={close}>Close · Esc</button>
      <img src={zoomed.src} alt={zoomed.alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export function CaseStudy({
  path,
  title,
  summary,
  overview,
  cover,
  coverAlt,
  children,
}: {
  path: string;
  title: ReactNode;
  summary: string;
  overview: Item[];
  cover: string;
  coverAlt: string;
  children: ReactNode;
}) {
  const index = ALL_PROJECTS.findIndex((p) => p.to === path);
  const project = ALL_PROJECTS[index];
  const next = ALL_PROJECTS[(index + 1) % ALL_PROJECTS.length];
  const [zoomed, setZoomed] = useState<Zoomed>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.label} · Sachin Bhosle`;
  }, [project.label]);

  return (
    <ZoomContext.Provider value={setZoomed}>
    <div className="cv">
      <SiteHeader />
      <main>
        <section className="cs-hero" style={{ "--card": project.bg } as CSSProperties}>
          <div className="cv-wrap">
            <Link className="cs-back cv-label" to="/#work">← All work</Link>
            <span className="cs-eyebrow cv-label"><i />{project.label} · {project.year}</span>
            <h1>{title}</h1>
            <p className="cs-summary">{summary}</p>
            <dl className="cs-overview">
              {overview.map((o) => (
                <div key={o.label}>
                  <dt className="cv-label">{o.label}</dt>
                  <dd>{o.value}</dd>
                </div>
              ))}
            </dl>
            <figure className="cs-cover">
              <img src={cover} alt={coverAlt} />
            </figure>
          </div>
        </section>

        {children}

        <section className="cs-next">
          <div className="cv-wrap">
            <span className="cv-label">Next project</span>
            <Link className="cs-next-card" to={next.to} style={{ "--card": next.bg } as CSSProperties}>
              <div className="cs-next-text">
                <span className="cs-eyebrow cv-label"><i />{next.label} · {next.year}</span>
                <h2>{next.line}</h2>
                <span className="cs-next-go cv-label">Read case study →</span>
              </div>
              <div className="cs-next-art"><img src={next.img} alt="" loading="lazy" /></div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="cv-site-footer">
        <div className="cv-wrap cv-mono">
          <span>Bengaluru, India</span>
          <span>© {new Date().getFullYear()} Sachin Bhosle</span>
        </div>
      </footer>
      <Lightbox zoomed={zoomed} close={() => setZoomed(null)} />
    </div>
    </ZoomContext.Provider>
  );
}

export function Section({ label, title, children }: { label: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="cs-sec">
      <div className="cv-wrap">
        <div className="cs-sec-head">
          <span className="cv-label">{label}</span>
          <h2>{title}</h2>
        </div>
        <div className="cs-sec-body">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="cs-prose">{children}</div>;
}

export function Stats({ items }: { items: { value: string; label: string; sub?: string }[] }) {
  return (
    <dl className={`cs-stats cs-cols-${items.length}`}>
      {items.map((s) => (
        <div key={s.label}>
          <dt>
            <span className="cv-label">{s.label}</span>
            {s.sub && <span className="cs-stat-sub">{s.sub}</span>}
          </dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Steps({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ol className="cs-steps">
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="cv-mono">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function Cards({ items }: { items: { title: string; body: string; label?: string }[] }) {
  return (
    <div className={`cs-cards cs-cols-${items.length}`}>
      {items.map((c, i) => (
        <div key={c.title}>
          <span className="cv-label">{c.label ?? String(i + 1).padStart(2, "0")}</span>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Screens({ items }: { items: { title: string; desc: string; image: string; tag: string }[] }) {
  return (
    <div className="cs-screens">
      {items.map((s, i) => (
        <figure key={s.title} className="cs-screen">
          <div className="cs-frame"><Shot src={s.image} alt={s.title} /></div>
          <figcaption>
            <div className="cs-screen-meta">
              <span className="cv-label">{s.tag}</span>
              <span className="cv-mono">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Palette({ items }: { items: { name: string; hex: string; role: string }[] }) {
  return (
    <div className="cs-palette">
      {items.map((c) => (
        <div key={c.hex}>
          <span className="cs-swatch" style={{ background: c.hex }} />
          <b>{c.name}</b>
          <span className="cv-mono">{c.hex}</span>
          <span className="cs-role">{c.role}</span>
        </div>
      ))}
    </div>
  );
}

export function Gallery({ items, tall }: { items: { src: string; label?: string }[]; tall?: boolean }) {
  return (
    <div className={`cs-gallery cs-cols-${items.length}${tall ? " is-tall" : ""}`}>
      {items.map((g, i) => (
        <figure key={i}>
          <div className="cs-frame"><Shot src={g.src} alt={g.label ?? "Project screen"} /></div>
          {g.label && <figcaption className="cv-label">{g.label}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export function Figure({ src, alt, caption, scroll }: { src: string; alt: string; caption?: string; scroll?: boolean }) {
  return (
    <figure className="cs-figure">
      <div className={`cs-frame${scroll ? " is-scroll" : ""}`}>{scroll ? <img src={src} alt={alt} loading="lazy" /> : <Shot src={src} alt={alt} />}</div>
      {caption && <figcaption className="cv-label">{caption}</figcaption>}
    </figure>
  );
}

export function Callout({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <section className="cs-sec">
      <div className="cv-wrap">
        <div className="cs-callout">
          <span className="cv-label">{label}</span>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function BulletColumns({ columns }: { columns: { title: string; items: string[] }[] }) {
  return (
    <div className="cs-bullets">
      {columns.map((c) => (
        <div key={c.title}>
          <h3>{c.title}</h3>
          <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export function Chips({ items }: { items: string[] }) {
  return <div className="cs-chips">{items.map((c) => <span key={c}>{c}</span>)}</div>;
}

export function Closing({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cs-sec cs-closing">
      <div className="cv-wrap">
        <h2>{title}</h2>
        <div className="cs-prose">{children}</div>
      </div>
    </section>
  );
}
