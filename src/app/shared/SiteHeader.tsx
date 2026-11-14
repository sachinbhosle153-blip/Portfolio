import { useEffect, useState } from "react";
import { Link } from "react-router";
import resumeUrl from "../../imports/Sachin_Bhosle_Resume_v3.pdf?url";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth > 640) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`cv-header${open ? " is-open" : ""}`}>
      <div className="cv-wrap">
        <Link className="cv-file" to="/" aria-label="Sachin Bhosle, home" onClick={close}>
          <span className="cv-logo" aria-hidden="true">SB</span>
          <b>Sachin Bhosle</b>
        </Link>
        <button
          className="cv-menu-btn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="cv-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open
              ? <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" strokeWidth="1.6" />
              : <path d="M3 6h14M3 10h14M3 14h14" fill="none" stroke="currentColor" strokeWidth="1.6" />}
          </svg>
        </button>
        <nav className="cv-nav" id="cv-nav" aria-label="Main">
          <a href="/#work" onClick={close}>Work</a>
          <a href="/#about" onClick={close}>About</a>
          <a href="/#contact" onClick={close}>Contact</a>
          <a href={resumeUrl} download="Sachin_Bhosle_Resume.pdf" onClick={close}>Download resume</a>
        </nav>
      </div>
    </header>
  );
}
