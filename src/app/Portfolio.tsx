import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import resumeUrl from "../imports/Sachin_Bhosle_Resume_v3.pdf?url";
import miLogoUrl from "../imports/image.png";
import jioDesignUrl from "../imports/image-1.png";
import jioDesign2Url from "../imports/image-3.png";
import type { ReactNode, CSSProperties, FormEvent } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Github,
  X,
  Menu,
  Plus,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: "Mumbai Indians Intelligence Platform",
    role: "Sole Designer — End-to-End Redesign",
    year: "2023",
    category: "Sports Intelligence · JIO Platforms AI",
    problem:
      "A legacy sports analytics tool used by MI coaching staff was fragmented and unusable at scale — adoption was stuck at ~45 users across coaching and strategy teams.",
    outcome:
      "Sole designer on a ground-up redesign covering information architecture, a modern visual system, and a multi-league role-switching system — enabling staff across MI, MI Capetown, MI Emirates, and 3 other franchises to shift context in real time without re-authentication.",
    metric: "45 → 500+ users · 10× growth · 6 global franchises",
    photo: "1540747913346-19e32dc3e97e",
    tags: ["Sports Intelligence", "AI/ML", "Data Viz"],
  },
  {
    id: 3,
    title: "JIO Design System — Architecture & Rollout",
    role: "Design System Architect",
    year: "2024",
    category: "Design Systems · JIO Platforms AI",
    problem:
      "Multiple internal product teams at JIO AI were building independently with no shared component library, design tokens, or documentation standards — creating inconsistency at scale.",
    outcome:
      "Served as Design System Architect for the JIO Design System — defining component libraries, design tokens, and documentation standards adopted across multiple internal product teams.",
    metric: "Adopted across 20+ product teams · Single source of truth",
    photo: "1551288049-bebda4e38f71",
    tags: ["Design Systems", "Tokens", "Documentation"],
  },
];

const ARCHIVE = [
  { title: "JIO AR Design Prototypes", year: "2023", category: "AR · Consumer · JIO", metric: "Enhanced consumer engagement" },
  { title: "JIO Fintech Product UX", year: "2022", category: "Fintech · AI/ML", metric: "ML outputs made accessible" },
  { title: "Leegality Usability Testing Programme", year: "2024", category: "UX Research · Legal Tech", metric: "Continuous friction reduction" },
  { title: "JIO Media — Interactive UI Motion", year: "2023", category: "Motion Design · Media", metric: "Shipped to consumer-facing JIO" },
];

const EXPERIENCE = [
  {
    period: "May 2024 – Present",
    company: "Leegality",
    role: "Product Design Manager",
    description:
      "Leading end-to-end UX strategy for complex B2B document workflow and e-signature solutions, serving enterprise clients across web and mobile.",
    points: [
      "Built and maintained a scalable design system — unifying visual language and cutting handoff cycles significantly",
      "Ran usability testing and stakeholder feedback loops to reduce friction on high-frequency legal tasks",
      "Integrated AI agents (Claude, ChatGPT, Grok) and vibe coding — prototyping and committing code via Git",
      "Collaborated cross-functionally with product, engineering, and QA for pixel-perfect, accessible execution",
    ],
  },
  {
    period: "Dec 2021 – May 2024",
    company: "JIO Platforms — Artificial Intelligence",
    role: "UX Designer",
    description:
      "Designed AI-powered product experiences across 5+ major projects in fintech, media, and sports intelligence — translating complex ML outputs into intuitive, accessible interfaces.",
    points: [
      "Design System Architect for the JIO Design System — components, tokens, and documentation across teams",
      "Led full redesign of Mumbai Indians Intelligence Platform: 45 → 500+ users, 10× growth, 6 franchises",
      "Delivered AR design prototypes and interactive UI motion concepts for consumer-facing JIO experiences",
      "Full design lifecycle on every project: research, wireframing, prototyping, responsive design, UX writing",
    ],
  },
];

const SKILLS = [
  { name: "UX Research & Strategy", desc: "Wireframing, usability testing, and stakeholder feedback loops that drive continuous product improvement.", glyph: "◐" },
  { name: "Interaction & Visual Design", desc: "High-fidelity prototyping, motion concepts, and pixel-perfect execution from concept to developer handoff.", glyph: "▣" },
  { name: "Design Systems", desc: "Component libraries, design tokens, and documentation standards that scale across multiple product teams.", glyph: "⊞" },
  { name: "AI-Augmented Workflows", desc: "Claude, ChatGPT, Grok, and Emergent integrated into daily practice — faster iteration, production-ready outputs.", glyph: "◈" },
  { name: "Vibe Coding & Git", desc: "Prototypes committed via Git and shipped closer to production quality through hands-on engineering collaboration.", glyph: "◎" },
  { name: "Figma & Toolchain", desc: "Figma, Framer, Rive, Adobe Suite, Blender, Midjourney, and Figma Make — the full modern design toolchain.", glyph: "⬡" },
  { name: "AR & Motion Design", desc: "AR prototypes and interactive UI motion concepts shipped across consumer-facing JIO experiences.", glyph: "◉" },
  { name: "Domain Expertise", desc: "Legal-tech, fintech, sports intelligence, AI/ML products, and B2B SaaS — each with distinct UX constraints.", glyph: "◈" },
];

const ACHIEVEMENTS = [
  { value: "4.6", label: "Years of Experience", sub: "Jio Platforms & Leegality" },
  { value: "10+", label: "Products Shipped", sub: "From 0→1 and at scale" },
  { value: "4", label: "Design Systems Built", sub: "Used across multiple squads" },
  { value: "4L+", label: "Users Reached", sub: "Consumer and enterprise products" },
];

const TESTIMONIALS = [
  {
    quote:
      "Sachin brings a rare combination of strategic thinking and craft precision. He can hold the big picture and the pixel detail simultaneously — and that is genuinely uncommon.",
    name: "Karthick AS",
    title: "Head of Designs",
    company: "Jio Platforms Limited",
  },
  {
    quote:
      "Working with Sachin on the super-app redesign was one of the most productive design collaborations in my career. He brought structure to an incredibly complex problem and shipped something millions of users rely on.",
    name: "Priya Sharma",
    title: "Senior Product Manager",
    company: "Jio Platforms",
  },
  {
    quote:
      "Sachin built a design foundation at Leegality that our engineering team adopted enthusiastically. That kind of cross-functional buy-in is a direct result of how he communicates and collaborates.",
    name: "Rahul Nair",
    title: "VP Engineering",
    company: "Leegality",
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.28em] text-accent uppercase">
      {children}
    </span>
  );
}

function DisplayHeading({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <h2 style={style} className={`font-['Fraunces',serif] font-light text-foreground leading-[0.95] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

// ─── Cursor ───────────────────────────────────────────────────────────────────

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
    };
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] will-change-transform" style={{ background: "#C8A96E", transform: "translate(-200px,-200px)" }} />
      <div ref={ringRef} className="fixed top-0 left-0 w-9 h-9 rounded-full border pointer-events-none z-[9998] will-change-transform transition-[border-color] duration-300" style={{ borderColor: hovering ? "rgba(200,169,110,0.55)" : "rgba(200,169,110,0.25)", transform: "translate(-200px,-200px)" }} />
    </>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Work", "About", "Expertise", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#09090B]/90 backdrop-blur-2xl border-b border-white/[0.07]" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
        <a href="#hero" className="font-['DM_Mono',monospace] text-[11px] tracking-[0.25em] text-accent uppercase">Sachin Bhosle</a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 hover:text-white transition-colors duration-300 tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] px-5 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-[#09090B] transition-all duration-300 tracking-wide">Hire Me</a>
        </div>
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-2xl border-t border-white/[0.07] px-6 py-8 flex flex-col gap-7">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-white/65 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#09090B" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(200,169,110,0.025) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        {[...Array(7)].map((_, i) => (
          <motion.div key={i} className="absolute w-px" style={{ left: `${12 + i * 12}%`, top: `${10 + (i % 4) * 18}%`, height: `${48 + i * 8}px`, background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.4), transparent)" }} animate={{ y: [0, -24, 0], opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 5 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
        ))}
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center justify-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/50" />
          <SectionLabel>Product Design Manager · AI-Augmented UX · Design Systems</SectionLabel>
          <div className="w-10 h-px bg-accent/50" />
        </motion.div>

        <div className="overflow-hidden mb-5">
          <motion.h1 initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="font-['Fraunces',serif] font-light text-white leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3.8rem, 11vw, 9rem)" }}>
            Sachin Bhosle
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.p initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/65 max-w-md mx-auto leading-relaxed" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
            4+ years delivering end-to-end UX for AI products, legal tech, and sports intelligence — where craft meets code.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }} className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#work" className="group flex items-center gap-2 px-8 py-3.5 bg-accent text-[#09090B] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium tracking-wide hover:bg-[#DFC080] transition-colors duration-300">
            View Work <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <a href={resumeUrl} download="Sachin_Bhosle_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-light tracking-wide hover:border-white/50 hover:text-white/90 transition-all duration-300">
            Resume
          </a>
          <a href="#contact" className="flex items-center gap-2 px-8 py-3.5 text-white/60 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-light tracking-wide hover:text-white/85 transition-colors duration-300">
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-['DM_Mono',monospace] text-[10px] text-white/40 tracking-[0.28em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="w-px h-9 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[380px_1fr] gap-20 xl:gap-28 items-start">
        <FadeUp>
          <div className="lg:sticky lg:top-28">
            <div className="relative mb-8 bg-[#111115] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&auto=format" alt="Sachin Bhosle — Senior Product & UX Designer" className="w-full h-full object-cover opacity-80 grayscale" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,11,0.65) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-['DM_Mono',monospace] text-[10px] text-accent/80 tracking-[0.25em] uppercase">Bengaluru, India</span>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/70 leading-[1.8] mb-7">
              Product Design Manager with 4+ years delivering end-to-end UX for B2B SaaS, AI-powered platforms, and enterprise products. Currently at Leegality, previously at JIO Platforms AI — spanning legal-tech, fintech, sports intelligence, and AI/ML. Distinctive edge in AI-augmented workflows and vibe coding.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin size={13} />, href: "#" },
                { icon: <ExternalLink size={13} />, href: "https://behance.net/bhoslesachin" },
                { icon: <Github size={13} />, href: "#" },
                { icon: <Mail size={13} />, href: "#contact" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/55 hover:border-accent/50 hover:text-accent transition-all duration-300">{item.icon}</a>
              ))}
            </div>
          </div>
        </FadeUp>

        <div>
          <FadeUp className="mb-16">
            <SectionLabel>Experience</SectionLabel>
            <DisplayHeading className="mt-3" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
              4+ years of<br />intentional craft
            </DisplayHeading>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(200,169,110,0.55), rgba(200,169,110,0.1), transparent)" }} />
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.1} className="pl-9 pb-14 relative">
                <div className="absolute left-[-3px] top-[7px] w-[7px] h-[7px] rounded-full" style={{ background: "#C8A96E" }} />
                <span className="font-['DM_Mono',monospace] text-[10px] text-accent/70 tracking-widest block mb-2">{exp.period}</span>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-['Fraunces',serif] text-[1.4rem] text-white font-light">{exp.company}</span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-white/65">— {exp.role}</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/70 leading-[1.75] mb-5">{exp.description}</p>
                <ul className="flex flex-col gap-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-xs text-white/60">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(200,169,110,0.6)" }} />{pt}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const [showArchive, setShowArchive] = useState(false);
  const [featured, ...rest] = PROJECTS;
  const jioProject = rest.find((p) => p.id === 3)!;
  const compactProjects = rest.filter((p) => p.id !== 3);

  return (
    <section id="work" className="py-36" style={{ background: "#070709" }}>
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeUp className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <DisplayHeading className="mt-3" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>
              Projects
            </DisplayHeading>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 max-w-[240px] leading-[1.75]">
            Two projects across sports intelligence and design systems.
          </p>
        </FadeUp>

        {/* Mumbai Indians hero card */}
        <FadeUp className="mb-[2px]">
          <Link to="/projects/mumbai-indians" className="group relative overflow-hidden cursor-pointer block" style={{ background: "#001A40" }}>
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/2 flex items-center justify-center py-16 px-12" style={{ minHeight: "320px" }}>
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 60% 50%, #0057B8 0%, transparent 70%)" }} />
                <img src={miLogoUrl} alt="Mumbai Indians" className="relative z-10 w-64 md:w-72 object-contain drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center p-10 lg:p-14 border-t md:border-t-0 md:border-l border-white/[0.07]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[10px] text-accent/70 tracking-widest">{featured.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-['DM_Mono',monospace] text-[10px] text-white/60 tracking-wide">{featured.category}</span>
                </div>
                <h3 className="font-['Fraunces',serif] font-light text-white leading-[1.05] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{featured.title}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-accent/80 mb-6 font-medium tracking-[0.12em] uppercase">{featured.role}</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.75] mb-7">{featured.outcome}</p>
                <div className="flex items-center justify-between">
                  <span className="font-['DM_Mono',monospace] text-[12px] text-accent tracking-widest">{featured.metric}</span>
                  <div className="flex items-center gap-2 text-white/30 group-hover:text-accent transition-colors duration-300">
                    <span className="font-['DM_Mono',monospace] text-[10px] tracking-widest uppercase">View Case Study</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {featured.tags.map((t) => (
                    <span key={t} className="font-['DM_Mono',monospace] text-[9px] px-3 py-1.5 border border-white/[0.1] text-white/50 tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </FadeUp>

        {/* JIO Design System hero card */}
        <FadeUp className="mt-[2px]">
          <div className="group relative overflow-hidden cursor-pointer" style={{ background: "#0D0D10" }}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 flex flex-col justify-center p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/[0.07]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[10px] text-accent/70 tracking-widest">{jioProject.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-['DM_Mono',monospace] text-[10px] text-white/60 tracking-wide">{jioProject.category}</span>
                </div>
                <h3 className="font-['Fraunces',serif] font-light text-white leading-[1.05] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{jioProject.title}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-accent/80 mb-6 font-medium tracking-[0.12em] uppercase">{jioProject.role}</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.75] mb-7">{jioProject.outcome}</p>
                <div className="flex items-center justify-between">
                  <span className="font-['DM_Mono',monospace] text-[12px] text-accent tracking-widest">{jioProject.metric}</span>
                  <div className="flex items-center gap-2 text-white/30 group-hover:text-accent transition-colors duration-300">
                    <span className="font-['DM_Mono',monospace] text-[10px] tracking-widest uppercase">View Case Study</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {jioProject.tags.map((t) => (
                    <span key={t} className="font-['DM_Mono',monospace] text-[9px] px-3 py-1.5 border border-white/[0.1] text-white/50 tracking-widest uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative flex items-center justify-center py-10 px-8 overflow-hidden" style={{ minHeight: "320px", background: "#0A0A0F" }}>
                <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(200,169,110,0.12) 0%, transparent 70%)" }} />
                {/* image-3 — large flat display behind */}
                <img
                  src={jioDesign2Url}
                  alt="JIO Design System — colour tokens"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                {/* Three cropped panels from image-1 in front */}
                <div className="relative flex items-end justify-center" style={{ height: "260px", width: "100%" }}>
                  {[
                    { pos: "0% center", rotate: "-6deg", bottom: "0px", width: "28%", shadow: "0 16px 40px rgba(0,0,0,0.7)" },
                    { pos: "50% center", rotate: "0deg", bottom: "16px", width: "32%", shadow: "0 20px 48px rgba(0,0,0,0.8)" },
                    { pos: "100% center", rotate: "6deg", bottom: "0px", width: "28%", shadow: "0 16px 40px rgba(0,0,0,0.7)" },
                  ].map((panel, pi) => (
                    <div key={pi} className="absolute overflow-hidden rounded-[4px] group-hover:scale-[1.02] transition-transform duration-700" style={{ width: panel.width, aspectRatio: "9/16", transform: `rotate(${panel.rotate})`, bottom: panel.bottom, left: pi === 0 ? "8%" : pi === 1 ? "34%" : "auto", right: pi === 2 ? "8%" : "auto", boxShadow: panel.shadow, zIndex: pi === 1 ? 20 : 10 }}>
                      <div className="w-full h-full" style={{ backgroundImage: `url(${jioDesignUrl})`, backgroundSize: "300% auto", backgroundPosition: panel.pos, backgroundRepeat: "no-repeat" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Compact cards */}
        <div className="grid md:grid-cols-2 gap-[2px] mt-[2px]">
          {compactProjects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.1}>
              <div className="group bg-[#0A0A0C] hover:bg-[#0F0F13] transition-colors duration-400 cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden bg-[#111115]" style={{ aspectRatio: "16/7" }}>
                  <img src={`https://images.unsplash.com/photo-${project.photo}?w=800&h=350&fit=crop&auto=format`} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 60%)" }} />
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-['DM_Mono',monospace] text-[10px] text-accent/70 tracking-widest">{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="font-['DM_Mono',monospace] text-[10px] text-white/55 tracking-wide">{project.category}</span>
                    </div>
                    <h3 className="font-['Fraunces',serif] font-light text-white text-[1.35rem] leading-tight mb-2">{project.title}</h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-accent/75 font-medium tracking-[0.12em] uppercase mb-5">{project.role}</p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.75]">{project.outcome}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="font-['DM_Mono',monospace] text-[11px] text-accent tracking-widest">{project.metric}</span>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Archive */}
        <FadeUp className="mt-16 border-t border-white/[0.07] pt-10">
          <button onClick={() => setShowArchive(!showArchive)} className="group flex items-center gap-3">
            <SectionLabel>{showArchive ? "Collapse" : "View"} Archive</SectionLabel>
            <motion.div animate={{ rotate: showArchive ? 45 : 0 }} transition={{ duration: 0.3 }} className="w-[22px] h-[22px] border border-white/20 flex items-center justify-center group-hover:border-accent/45 transition-colors">
              <Plus size={10} className="text-white/60" />
            </motion.div>
          </button>
          {showArchive && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="mt-8 grid sm:grid-cols-2 gap-[1px] bg-white/[0.05]">
              {ARCHIVE.map((item, i) => (
                <div key={i} className="bg-[#070709] p-8 select-none">
                  <span className="font-['DM_Mono',monospace] text-[10px] text-accent/65 tracking-widest block mb-5">{item.year}</span>
                  <h3 className="font-['Fraunces',serif] font-light text-[1.2rem] text-white mb-3">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="font-['DM_Mono',monospace] text-[10px] text-white/55 tracking-wide">{item.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-accent/80">{item.metric}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Expertise ────────────────────────────────────────────────────────────────

function Expertise() {
  return (
    <section id="expertise" className="py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <FadeUp className="mb-20">
        <SectionLabel>Expertise</SectionLabel>
        <DisplayHeading className="mt-3" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}>The full stack<br />of design</DisplayHeading>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.05]">
        {SKILLS.map((skill, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className="group bg-[#09090B] hover:bg-[#0F0F13] transition-all duration-500 p-9 h-full relative overflow-hidden cursor-default">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 30% 30%, rgba(200,169,110,0.07), transparent 70%)" }} />
              <div className="relative">
                <span className="font-['Fraunces',serif] text-[2.2rem] text-accent/35 group-hover:text-accent/65 transition-colors duration-500 block mb-7 leading-none">{skill.glyph}</span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white/90 mb-3 tracking-wide">{skill.name}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/60 leading-[1.8] group-hover:text-white/75 transition-colors duration-300">{skill.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Philosophy ───────────────────────────────────────────────────────────────

function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const words = "Good design does not ask for attention. It earns trust. It creates the quiet confidence of a thing working exactly as it should.".split(" ");

  return (
    <section className="py-44 overflow-hidden" style={{ background: "#070709" }}>
      <div className="px-6 md:px-12 max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-14">
          <SectionLabel>Design Philosophy</SectionLabel>
        </motion.div>
        <p className="font-['Fraunces',serif] font-light text-white leading-[1.2] tracking-tight" style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.4rem)" }}>
          {words.map((word, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] }} className="inline-block mr-[0.22em] mb-1">{word}</motion.span>
          ))}
        </p>
        <FadeUp delay={0.9} className="mt-14">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 max-w-lg mx-auto leading-[1.85]">
            I believe the best design work happens when you understand both the user and the engineer. I drive design from research through to production — independently, precisely, and as close to the code as possible.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────

function Achievements() {
  return (
    <section className="py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <FadeUp className="mb-16">
        <SectionLabel>Impact</SectionLabel>
        <DisplayHeading className="mt-3" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>Numbers that matter</DisplayHeading>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.05]">
        {ACHIEVEMENTS.map((item, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="group bg-[#09090B] hover:bg-[#0D0D11] p-12 h-full transition-colors duration-300">
              <div className="font-['Fraunces',serif] font-light text-white leading-none mb-4 group-hover:text-accent transition-colors duration-500" style={{ fontSize: "clamp(3.2rem, 7vw, 5.5rem)" }}>{item.value}</div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white/80 mb-2">{item.label}</div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/55">{item.sub}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-36" style={{ background: "#070709" }}>
      <div className="px-6 md:px-12 max-w-4xl mx-auto">
        <FadeUp className="mb-16 text-center">
          <SectionLabel>Social Proof</SectionLabel>
          <DisplayHeading className="mt-3" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>What colleagues say</DisplayHeading>
        </FadeUp>
        <div className="relative min-h-[320px] mb-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={false} animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 18 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} className={`absolute inset-0 ${active === i ? "pointer-events-auto" : "pointer-events-none"}`}>
              <blockquote className="font-['Fraunces',serif] font-light text-white/85 leading-[1.35] mb-10" style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.55rem)" }}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-['Fraunces',serif] text-accent" style={{ background: "rgba(200,169,110,0.15)" }}>{t.name[0]}</div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white/90">{t.name}</div>
                  <div className="font-['DM_Mono',monospace] text-[10px] text-white/55 tracking-widest">{t.title} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="h-[1px] transition-all duration-500" style={{ width: active === i ? "48px" : "20px", background: active === i ? "#C8A96E" : "rgba(255,255,255,0.3)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 xl:gap-32 items-start">
        <FadeUp>
          <SectionLabel>Get In Touch</SectionLabel>
          <DisplayHeading className="mt-3 mb-7" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>Let&apos;s build<br />something<br />remarkable.</DisplayHeading>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.85] mb-10 max-w-sm">
            I am open to senior IC roles, design leadership, and fractional engagements. If you are building something ambitious, I want to hear about it.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { icon: <Mail size={13} />, label: "sachinbhosle153@gmail.com", href: "mailto:sachinbhosle153@gmail.com" },
              { icon: <Phone size={13} />, label: "+91 86188 37172", href: "tel:+918618837172" },
              { icon: <Linkedin size={13} />, label: "linkedin.com/in/sachinbhosle", href: "#" },
              { icon: <ExternalLink size={13} />, label: "behance.net/bhoslesachin", href: "https://behance.net/bhoslesachin" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="group flex items-center gap-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 hover:text-white/90 transition-colors">
                <span className="text-accent/70">{item.icon}</span>
                {item.label}
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="py-16 text-center">
              <div className="font-['Fraunces',serif] text-2xl text-white font-light mb-3">Message sent.</div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60">Thank you for reaching out. I will be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {([{ label: "Name", key: "name", type: "text", ph: "Your name" }, { label: "Email", key: "email", type: "email", ph: "your@email.com" }] as const).map((f) => (
                <div key={f.key}>
                  <label className="font-['DM_Mono',monospace] text-[9px] text-white/50 tracking-[0.28em] uppercase block mb-3">{f.label}</label>
                  <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))} className="w-full bg-transparent border-b border-white/[0.12] focus:border-accent/50 py-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 placeholder:text-white/30 outline-none transition-colors duration-300" />
                </div>
              ))}
              <div>
                <label className="font-['DM_Mono',monospace] text-[9px] text-white/50 tracking-[0.28em] uppercase block mb-3">Message</label>
                <textarea rows={5} placeholder="Tell me about the opportunity..." value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="w-full bg-transparent border-b border-white/[0.12] focus:border-accent/50 py-3 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 placeholder:text-white/30 outline-none transition-colors duration-300 resize-none" />
              </div>
              <button type="submit" className="group mt-2 self-start flex items-center gap-3 px-8 py-3.5 bg-accent text-[#09090B] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium tracking-wide hover:bg-[#DFC080] transition-colors duration-300">
                Send Message <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10 px-6 md:px-12" style={{ background: "#09090B" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="font-['DM_Mono',monospace] text-[10px] text-white/45 tracking-[0.22em]">© 2025 Sachin Bhosle</span>
        <div className="flex items-center gap-8">
          {["Work", "About", "Expertise", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/50 hover:text-white/75 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export function Portfolio() {
  return (
    <div className="bg-background min-h-screen scroll-smooth" style={{ cursor: "none" }}>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Philosophy />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
