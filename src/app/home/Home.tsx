import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import resumeUrl from "../../imports/Sachin_Bhosle_Resume_v3.pdf?url";
import profileImg from "../../assets/home/profile.webp";
import { SiteHeader } from "../shared/SiteHeader";
import { PROJECTS, SIDE_PROJECT } from "../shared/projects";
import type { Project } from "../shared/projects";
import "../shared/base.css";
import "./home.css";

const EMAIL = "sachinbhosle153@gmail.com";

const SKILLS = ["Product strategy", "User research", "Interaction design", "Design systems", "AI prototyping", "Motion & AR"];

// Pixel icons drawn on an 8×8 grid: each string is a row, "#" is a filled cell.
const STATS = [
  { label: "Years of experience", value: "5+", icon: ["#######.", "#.#.#.#.", "#######.", "#.....#.", "#.##..#.", "#.....#.", "#######.", "........"] },
  { label: "Products shipped", value: "10+", icon: ["..####..", ".#....#.", "#.####.#", "#.#..#.#", "#.####.#", "#......#", ".######.", "........"] },
  { label: "Design systems shaped", value: "4", icon: ["###.###.", "#.#.#.#.", "###.###.", "........", "###.###.", "#.#.#.#.", "###.###.", "........"] },
  { label: "Users reached", value: "10M+", icon: [".##..##.", "#..##..#", "#..##..#", ".##..##.", "........", "###..###", "###..###", "........"] },
];

function PixelIcon({ cells }: { cells: string[] }) {
  return (
    <svg width="22" height="22" viewBox="0 0 8 8" aria-hidden="true" shapeRendering="crispEdges">
      {cells.flatMap((row, y) => [...row].map((c, x) => (c === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--select)" /> : null)))}
    </svg>
  );
}

function Handles() {
  return (
    <>
      <span className="cv-h cv-h1" />
      <span className="cv-h cv-h2" />
      <span className="cv-h cv-h3" />
      <span className="cv-h cv-h4" />
    </>
  );
}

function FrameIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 0v12M9 0v12M0 3h12M0 9h12" stroke={color} />
    </svg>
  );
}

function Caret() {
  return (
    <svg className="cv-caret" width="9" height="9" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M3 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// "messy", set slightly askew letter by letter; the letters snap into line when the headline is hovered.
const MESS: [number, number, number][] = [[-0.03, -0.08, -7], [0.02, 0.06, 6], [-0.02, -0.04, -3], [0.03, 0.07, 8], [-0.01, -0.06, -5]];
function Messy() {
  return (
    <em className="cv-messy">
      <span className="cv-sr">messy</span>
      {[..."messy"].map((c, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ "--x": `${MESS[i][0]}em`, "--y": `${MESS[i][1]}em`, "--r": `${MESS[i][2]}deg`, "--i": i } as CSSProperties}
        >
          {c}
        </span>
      ))}
    </em>
  );
}

// A collaborator-style cursor that glides in and "selects" the word.
function Cursor() {
  return (
    <span className="cv-cursor" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18"><path d="M2 1.5l5.2 14 2.1-5.9 5.9-2.1z" fill="var(--select)" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" /></svg>
      <b>Sachin</b>
    </span>
  );
}

function SelectedWord({ children, cursor = false }: { children: ReactNode; cursor?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState("");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const b = el.getBoundingClientRect();
      setSize(`${Math.round(b.width)} × ${Math.round(b.height)}`);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);
  return (
    <span className={`cv-sel${cursor ? " is-hero" : ""}`} ref={ref}>
      {children}
      <Handles />
      {size && <span className="cv-dim" aria-hidden="true">{size}</span>}
      {cursor && <Cursor />}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="cv-card" to={p.to} style={{ "--card": p.bg } as CSSProperties}>
      <div className="cv-card-art">
        <img src={p.img} alt={p.alt} loading="lazy" />
        <span className="cv-card-badge" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M5 11L11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
        </span>
        <span className="cv-card-corner" aria-hidden="true" />
      </div>
      <div className="cv-card-meta">
        <span className="cv-card-label"><i />{p.label}</span>
        <span className="cv-card-year">→ {p.year} ←</span>
      </div>
    </Link>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="cv-contact" id="contact">
      <div className="cv-wrap">
        <span className="cv-mono">Contact</span>
        <h2>Got a <em>messy</em> problem? Leave a comment.</h2>
        <div className="cv-thread">
          <div className="cv-comment">
            <div className="cv-pin" aria-hidden="true">SB</div>
            <div className="cv-bubble">
              <div className="cv-who"><b>Sachin Bhosle</b><span className="cv-mono">replies within a day</span></div>
              <div className="cv-addr">{EMAIL}</div>
              <div className="cv-actions">
                <button className="cv-btn is-primary" type="button" onClick={copy}>{copied ? "Copied" : "Copy email"}</button>
                <a className="cv-btn" href="https://linkedin.com/in/sachin-bhosle-1810/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="cv-btn" href="https://behance.net/bhoslesachin" target="_blank" rel="noreferrer">Behance</a>
                <a className="cv-btn" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
              </div>
            </div>
          </div>
        </div>
        <footer className="cv-footer cv-mono">
          <span>Bengaluru, India</span>
          <span>© {new Date().getFullYear()} Sachin Bhosle</span>
        </footer>
      </div>
    </section>
  );
}

export function Home() {
  // Links like /#work arrive before the section exists; scroll once it has rendered.
  useEffect(() => {
    document.title = "Sachin Bhosle · Product Design Manager";
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
  }, []);

  return (
    <div className="cv">
      <SiteHeader />

      <main>
        <section className="cv-hero-canvas" aria-label="Introduction">
          <div className="cv-glow" aria-hidden="true" />
          <div className="cv-wrap cv-hero">
            <h1>
              <span className="cv-line">I turn <Messy /> problems into</span>
              <span className="cv-line"><SelectedWord cursor>products</SelectedWord> people actually use.</span>
            </h1>
            <p className="cv-lede">
              Hi, I'm <b>Sachin</b>. 5 years untangling AI platforms, legal tech and sports intelligence at <b>JIO</b> and <b>Leegality</b>, until the confusing part becomes obvious.
            </p>
          </div>
          <a className="cv-scroll" href="#work" aria-label="Scroll to work">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l6 6 6-6M6 12l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>

        <section className="cv-wrap cv-sec" id="work">
          <div className="cv-sec-title">
            <h2>Work, <em>untangled.</em></h2>
          </div>
          <div className="cv-cards">
            {PROJECTS.map((p) => <ProjectCard key={p.to} p={p} />)}
          </div>

          <div className="cv-side">
            <ProjectCard p={SIDE_PROJECT} />
            <div className="cv-side-text">
              <span className="cv-mono">Side project</span>
              <p>I also build my own ideas. Fundrise started from one number: 95% of F&amp;O traders lose money. I wrote the concept and PRD and designed the landing page.</p>
            </div>
          </div>
        </section>

        <section className="cv-beliefs cv-canvas" aria-label="Beliefs and numbers">
          <div className="cv-wrap cv-beliefs-grid">
            <div className="cv-beliefs-text">
              <span className="cv-mono cv-eyebrow">Aim <span aria-hidden="true">✱</span> Beliefs</span>
              <h2>Make the complex feel <SelectedWord><em>obvious</em></SelectedWord></h2>
              <p>I work where products get hard: dense data, legal workflows, systems that many teams share. My job is to find the one structure that makes the confusion go away.</p>
              <p>Good design is the reason a coach opens the app again tomorrow, or a first-timer finishes filing a dispute. I judge my work by whether people keep using it.</p>
            </div>
            <dl className="cv-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt>
                    <PixelIcon cells={s.icon} />
                    <span className="cv-mono">{s.label}</span>
                  </dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="cv-wrap">
          <div className="cv-skills" aria-label="Skills">
            {SKILLS.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>

        <section className="cv-wrap cv-sec" id="about">
          <div className="cv-sec-title"><h2>About <em>me.</em></h2></div>
          <div className="cv-about">
            <div className="cv-photo">
              <img src={profileImg} alt="Portrait of Sachin Bhosle" loading="lazy" />
              <Handles />
              <span className="cv-dim">sachin.jpg</span>
            </div>
            <div>
              <p className="cv-bio">
                I design for the hard middle of products: dense data, legal workflows, systems that many teams share. I prototype with AI, ship through Git, and stay close to engineering.
              </p>
              <div className="cv-layers">
                <div className="cv-layers-head cv-mono"><span>Layers</span><span>Experience</span></div>
                <details open>
                  <summary><Caret /><FrameIcon color="var(--select)" /><span>Leegality · Product Design Manager</span><span className="cv-mono">2024 – now</span></summary>
                  <div className="cv-layer"><b>T</b><span>Own UX strategy and the design system for document workflow and e-signature products.</span></div>
                  <div className="cv-layer"><b>T</b><span>Standardised the system across product lines and sped up handoff to engineering.</span></div>
                  <div className="cv-layer"><b>T</b><span>Brought AI agents into prototyping, so prototypes ship closer to production code.</span></div>
                </details>
                <details>
                  <summary><Caret /><FrameIcon color="var(--select)" /><span>JIO Platforms AI · UX Designer</span><span className="cv-mono">2021 – 2024</span></summary>
                  <div className="cv-layer"><b>T</b><span>Owned design across 5+ AI products in fintech, media and sports intelligence.</span></div>
                  <div className="cv-layer"><b>T</b><span>Core contributor to SOI, JIO's design system, used by 20+ teams.</span></div>
                  <div className="cv-layer"><b>T</b><span>Grew the Mumbai Indians platform 10×, from 45 to 500+ daily users.</span></div>
                  <div className="cv-layer"><b>T</b><span>Also: AR prototypes, UI motion for JIO Media, fintech UX.</span></div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}
