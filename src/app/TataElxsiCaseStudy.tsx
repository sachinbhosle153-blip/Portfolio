import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";
import tataLoginUrl from "../imports/tataelxsi-login.png";
import tataLandingUrl from "../imports/tataelxsi-landing.jpg";
import tataDashboardUrl from "../imports/tataelxsi-dashboard.jpg";
import tataExperimentationUrl from "../imports/tataelxsi-experimentation.jpg";

// ─── Utility ─────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.28em] text-[#5EEAD4] uppercase">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="w-full h-px bg-white/[0.07] my-24" />;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const OVERVIEW = [
  { label: "Role", value: "Solo Designer · Interview Design Challenge" },
  { label: "Brief", value: "Tata Elxsi · AI Product Design Assignment" },
  { label: "Platform", value: "Web · Healthcare AI" },
  { label: "Scope", value: "Research through to hi-fi prototype" },
];

const PROCESS = [
  {
    step: "01",
    title: "Research the Trust Gap",
    desc: "Before touching a screen, I studied why healthcare AI adoption lags its own hype — secondary research into investment trends and a competitive scan of the AI-health landscape shaped every decision that followed.",
  },
  {
    step: "02",
    title: "Meet Four Very Different Users",
    desc: "The brief named doctors, patients, physicians, and nurses in one sentence. I ran structured interviews and refused to treat them as one audience — they don't trust AI for the same reasons or fear it for the same reasons.",
  },
  {
    step: "03",
    title: "Architect a System, Not a Screen Set",
    desc: "The brief asked for a concept. I designed the full IA a real AI-health product would need — authentication, a discovery landing page, a personalised dashboard, a model library, privacy governance, training content, and a working experimentation sandbox.",
  },
  {
    step: "04",
    title: "Prototype the Hardest Screen First",
    desc: "The experimentation workspace — a multi-planar medical image viewer with live segmentation overlays — was the highest-risk, highest-effort screen in the system. I built it first, because if that didn't work, nothing else mattered.",
  },
];

const PERSONAS = [
  {
    name: "Dr. Nitin",
    role: "Physician persona",
    goals: "Reach a confident diagnosis faster, without a black-box tool making the call for him.",
    pain: "Fragmented tooling and AI outputs he can't trace back to a reason — which means he can't defend them in front of a patient or a tumour board.",
    frustration: "Any tool that asks him to trust a result he can't inspect.",
  },
  {
    name: "Alia",
    role: "Patient persona",
    goals: "Understand her own condition in plain language and know exactly what happens to her scans and data.",
    pain: "Medical jargon, and no visibility into how an algorithm — not a doctor — is involved in her care.",
    frustration: "Feeling like a data point moving through an automated system with no human context.",
  },
];

const HMW_DOCTORS = [
  "How might we make AI reasoning visible, not just its output?",
  "How might we fit into an existing diagnostic workflow instead of replacing it?",
  "How might we let a doctor verify a result before it reaches a patient?",
];

const HMW_PATIENTS = [
  "How might we explain AI involvement in plain, non-clinical language?",
  "How might we make data handling visible and reassuring, not hidden in a policy page?",
  "How might we keep a human thread running through an automated experience?",
];

const PALETTE = [
  { name: "Clinical Teal", hex: "#5EEAD4", role: "Primary actions & AI signal" },
  { name: "Deep Space", hex: "#0B0F14", role: "Background, clinical calm" },
  { name: "Segment Red", hex: "#B33A3A", role: "Diagnostic overlays & annotations" },
  { name: "Alert Amber", hex: "#F5A623", role: "Risk flags & critical callouts" },
];

const SCREENS = [
  {
    title: "Sign In — Calm Before Complexity",
    desc: "A single, unhurried screen — no marketing noise, no distractions. Everything after this point gets progressively more complex, so the entry point had to feel like the simplest room in the building.",
    image: tataLoginUrl,
    tag: "Entry Point",
  },
  {
    title: "Landing Page — Make the Abstract Concrete",
    desc: "AI in healthcare is easy to say and hard to picture. The landing page grounds it in six named, explorable tools — Medical Image Analysis, Personalised Treatment, Diagnosis Support and more — plus \"AI Genius,\" a conversational entry point for anyone who'd rather ask a question than browse a catalogue.",
    image: tataLandingUrl,
    tag: "Discovery",
  },
  {
    title: "Dashboard — Personalised, Not Generic",
    desc: "\"For You\" surfaces the tools most relevant to the signed-in user's role, while \"Recently Explored\" shows real diagnostic imagery in progress — including a disease heat-map overlay and an annotated cystic fibrosis scan — so the dashboard reads as a working clinical tool, not a template.",
    image: tataDashboardUrl,
    tag: "Home Base",
  },
  {
    title: "Experimentation Workspace — Where the Real Work Happens",
    desc: "A full multi-planar CT viewer: axial, sagittal, and coronal views in sync, a live lung-segmentation overlay, scrubbable slice control, and an annotation toolbar (crop, brush, zoom, split view). This is the screen the brief never explicitly asked for — and the one that mattered most.",
    image: tataExperimentationUrl,
    tag: "Core Interaction",
  },
];

const SYSTEM_MAP = [
  "Dashboard",
  "All Models",
  "Blogs",
  "Privacy & Security",
  "Training & Tutorials",
  "Support",
];

const DELIVERABLES = [
  { value: "4", label: "User Types Researched", sub: "Doctors, patients, physicians, nurses" },
  { value: "2", label: "Core Personas Defined", sub: "Dr. Nitin & Alia" },
  { value: "7", label: "System Sections Designed", sub: "Auth through experimentation sandbox" },
  { value: "Solo", label: "Designer", sub: "Research through to hi-fi prototype" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function TataElxsiCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#09090B", cursor: "default" }}>

      {/* ── Nav ── */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#09090B]/85 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-['DM_Mono',monospace] text-[11px] text-white/50 hover:text-white tracking-[0.2em] uppercase transition-colors duration-300"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Portfolio
          </Link>
          <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.25em] text-[#5EEAD4] uppercase hidden md:block">
            Case Study
          </span>
          <span className="font-['DM_Mono',monospace] text-[10px] text-white/30 tracking-widest hidden md:block">
            Tata Elxsi · Design Challenge
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[68px]" style={{ background: "#070C0F" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(ellipse at 50% 35%, #5EEAD4 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 inset-x-0 h-48" style={{ background: "linear-gradient(to top, #09090B, transparent)" }} />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="w-10 h-px bg-[#5EEAD4]/40" />
            <Label>Design Challenge · Tata Elxsi Interview Assignment</Label>
            <div className="w-10 h-px bg-[#5EEAD4]/40" />
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] font-light text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)" }}
            >
              AI-Powered System:<br />Redefining Healthcare
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/60 max-w-xl mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            A response to a Tata Elxsi interview design challenge — a full AI-model discovery and
            experimentation platform that lets doctors, patients, and researchers safely explore
            what AI can actually do in healthcare, from first login to hands-on model testing.
          </motion.p>

          {/* Overview strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.07] max-w-3xl mx-auto"
          >
            {OVERVIEW.map((item) => (
              <div key={item.label} className="bg-[#070C0F]/80 backdrop-blur-sm px-6 py-5 text-left">
                <Label>{item.label}</Label>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 mt-2 leading-snug">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28">

        {/* ── The Challenge ── */}
        <FadeUp>
          <Label>The Challenge</Label>
          <h2
            className="font-['Fraunces',serif] font-light text-white leading-tight mt-3 mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            A one-line brief hiding<br />a four-persona problem
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] mb-6">
              The brief was deliberately open: design a novel, frugal AI application concept for healthcare — one that lets medical practitioners, researchers, and patients safely discover, experiment with, and apply AI within their work. No fixed screen list, no wireframes to fill in. Just a problem.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85]">
              The hard part wasn't the AI — it was the audience. "Medical practitioners, researchers, and patients" is one sentence that hides at least four groups with almost nothing in common: a doctor who needs to trust a diagnosis, a researcher who needs to interrogate a model, and a patient who just wants to know what's happening to them. I couldn't design one interface and hope it worked for all three.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="grid grid-cols-2 gap-[1px] bg-white/[0.07]">
            {[
              { stat: "4", detail: "Distinct user types named in the brief" },
              { stat: "7", detail: "System sections designed end-to-end" },
              { stat: "1", detail: "Working experimentation sandbox, not a mockup" },
              { stat: "Solo", detail: "Research, IA, and hi-fi prototype" },
            ].map((item, i) => (
              <div key={i} className="bg-[#09090B] p-7">
                <div className="font-['Fraunces',serif] font-light text-[#5EEAD4] mb-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                  {item.stat}
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/50 leading-snug">{item.detail}</p>
              </div>
            ))}
          </FadeUp>
        </div>

        <Divider />

        {/* ── Research ── */}
        <FadeUp className="mb-14">
          <Label>Research</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Earning the right to design this
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-[1px] bg-white/[0.07] mb-14">
          <FadeUp className="bg-[#09090B] p-9">
            <span className="font-['DM_Mono',monospace] text-[10px] text-[#5EEAD4]/60 tracking-widest block mb-4">SECONDARY</span>
            <h3 className="font-['Fraunces',serif] font-light text-white text-[1.15rem] mb-4 leading-snug">A market moving faster than trust</h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
              Healthcare AI has been one of the fastest-growing corners of applied AI for years — investment has consistently outpaced almost every other sector. That growth curve became the opening argument for why this problem was worth solving carefully, not quickly.
            </p>
          </FadeUp>
          <FadeUp delay={0.08} className="bg-[#09090B] p-9">
            <span className="font-['DM_Mono',monospace] text-[10px] text-[#5EEAD4]/60 tracking-widest block mb-4">COMPETITIVE</span>
            <h3 className="font-['Fraunces',serif] font-light text-white text-[1.15rem] mb-4 leading-snug">Capital is here. Products aren't.</h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
              A scan of active investors and early-stage healthcare-AI companies showed heavy capital flowing into the space, but most products still treated AI as a black-box feature bolted onto existing tools — rather than a trust relationship that needed its own design.
            </p>
          </FadeUp>
          <FadeUp delay={0.16} className="bg-[#09090B] p-9">
            <span className="font-['DM_Mono',monospace] text-[10px] text-[#5EEAD4]/60 tracking-widest block mb-4">PRIMARY</span>
            <h3 className="font-['Fraunces',serif] font-light text-white text-[1.15rem] mb-4 leading-snug">The gap only interviews could find</h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
              Structured interviews with doctors and patients surfaced the real fault line: doctors doubted AI because they couldn't see its reasoning; patients doubted it because no one explained it to them at all. Two very different trust problems, wearing the same label.
            </p>
          </FadeUp>
        </div>

        <Divider />

        {/* ── Personas ── */}
        <FadeUp className="mb-14">
          <Label>Personas</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Two trust problems, not one
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.07]">
          {PERSONAS.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.1}>
              <div className="bg-[#09090B] p-10 h-full">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-['Fraunces',serif] text-[#5EEAD4] text-lg shrink-0" style={{ background: "rgba(94,234,212,0.12)" }}>
                    {p.name[0]}
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[15px] text-white/90">{p.name}</div>
                    <div className="font-['DM_Mono',monospace] text-[10px] text-white/45 tracking-widest uppercase">{p.role}</div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <span className="font-['DM_Mono',monospace] text-[9px] text-[#5EEAD4]/70 tracking-widest uppercase block mb-1.5">Goal</span>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.75]">{p.goals}</p>
                  </div>
                  <div>
                    <span className="font-['DM_Mono',monospace] text-[9px] text-[#5EEAD4]/70 tracking-widest uppercase block mb-1.5">Pain Point</span>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.75]">{p.pain}</p>
                  </div>
                  <div>
                    <span className="font-['DM_Mono',monospace] text-[9px] text-[#5EEAD4]/70 tracking-widest uppercase block mb-1.5">Common Frustration</span>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.75]">{p.frustration}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── HMW ── */}
        <FadeUp className="mb-14">
          <Label>Synthesis</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            From personas to design direction
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.07]">
          <FadeUp className="bg-[#09090B] p-9">
            <h3 className="font-['Fraunces',serif] font-light text-white text-[1.2rem] mb-6">How might we help doctors?</h3>
            <ul className="space-y-4">
              {HMW_DOCTORS.map((h) => (
                <li key={h} className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[#5EEAD4]/60">
                  {h}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.08} className="bg-[#09090B] p-9">
            <h3 className="font-['Fraunces',serif] font-light text-white text-[1.2rem] mb-6">How might we help patients?</h3>
            <ul className="space-y-4">
              {HMW_PATIENTS.map((h) => (
                <li key={h} className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/65 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[#5EEAD4]/60">
                  {h}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <Divider />

        {/* ── Design Process ── */}
        <FadeUp className="mb-14">
          <Label>Design Process</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Four stages, one through-line
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {PROCESS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group bg-[#09090B] hover:bg-[#0E1210] transition-colors duration-400 p-8 h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 0% 0%, rgba(94,234,212,0.06), transparent 70%)" }}
                />
                <span className="font-['Fraunces',serif] text-[3rem] text-white/[0.04] leading-none block mb-5 select-none">
                  {p.step}
                </span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-white/90 mb-3 tracking-wide">
                  {p.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/55 leading-[1.8]">
                  {p.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Visual Language ── */}
        <FadeUp className="mb-14">
          <Label>Visual Language</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Clinical calm, with signal intact
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-10 max-w-2xl">
            A near-black canvas keeps diagnostic imagery — the actual content that matters — as the brightest thing on any screen. A single teal carries every action and AI-related signal; red and amber are reserved strictly for clinical meaning, like a segmentation mask or a risk flag, so colour never competes with the data.
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {PALETTE.map((c) => (
            <FadeUp key={c.hex}>
              <div className="bg-[#09090B] p-7">
                <div className="w-10 h-10 rounded-[3px] mb-4 border border-white/10" style={{ background: c.hex }} />
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 block mb-1">{c.name}</span>
                <span className="font-['DM_Mono',monospace] text-[10px] text-white/35 tracking-widest block">{c.hex}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45 block mt-2 leading-snug">{c.role}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Key Screens ── */}
        <FadeUp className="mb-14">
          <Label>Key Screens</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            The system in detail
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-[2px]">
          {SCREENS.map((screen, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[1px] bg-white/[0.07]`}>
                {/* Image */}
                <div className="md:w-3/5 relative overflow-hidden flex items-center justify-center p-8" style={{ minHeight: "340px", background: "#0A0A10" }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 40%, #5EEAD4 0%, transparent 70%)" }} />
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="relative z-10 max-h-[380px] w-auto max-w-full object-contain rounded-md drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-['DM_Mono',monospace] text-[9px] px-3 py-1.5 border border-[#5EEAD4]/30 text-[#5EEAD4]/80 tracking-widest uppercase">
                      {screen.tag}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-2/5 bg-[#09090B] p-10 flex flex-col justify-center">
                  <span className="font-['DM_Mono',monospace] text-[10px] text-[#5EEAD4]/60 tracking-widest block mb-4">
                    {String(i + 1).padStart(2, "0")} / {String(SCREENS.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-['Fraunces',serif] font-light text-white text-[1.4rem] leading-tight mb-4">
                    {screen.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
                    {screen.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Key Innovation: The Experimentation Sandbox ── */}
        <FadeUp>
          <div className="bg-[#0A1412] border border-[#5EEAD4]/25 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #5EEAD4, transparent)" }} />
            <div className="relative">
              <Label>Key Innovation</Label>
              <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                The Experimentation Workspace
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-6">
                Every other screen in this system exists to get a user to this one. It's a working multi-planar medical image viewer — axial, sagittal, and coronal views held in sync, a live segmentation overlay marking lung tissue in a CT scan, and a full annotation toolbar for cropping, brushing, and zooming into a region of interest.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                Nothing in the brief required this level of fidelity. I built it anyway, because "experiment with AI" is an empty promise if the experimentation screen is just a static mockup — this had to look and behave like a tool a radiologist could actually trust their eyes to.
              </p>

              <div className="grid sm:grid-cols-3 gap-[1px] bg-white/[0.07] max-w-xl">
                {[
                  { v: "3", l: "Synced planar views — axial, sagittal, coronal" },
                  { v: "1", l: "Live segmentation overlay on real imaging" },
                  { v: "6", l: "Annotation tools — grid, split, crop, brush, zoom" },
                ].map((item) => (
                  <div key={item.l} className="bg-[#0A1412] px-6 py-5">
                    <div className="font-['Fraunces',serif] font-light text-[#5EEAD4] text-[1.8rem] mb-1">{item.v}</div>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* ── System Map ── */}
        <FadeUp className="mb-14">
          <Label>Beyond the Screens</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            A full product, not a demo
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
            Past the dashboard sits the rest of the IA a real AI-health product would need to earn trust at scale — a searchable model library, a dedicated Privacy &amp; Security section, and Training &amp; Tutorials content so a first-time user isn't left to figure out a clinical AI tool alone.
          </p>
        </FadeUp>
        <FadeUp className="flex flex-wrap gap-3">
          {SYSTEM_MAP.map((s) => (
            <span
              key={s}
              className="font-['DM_Mono',monospace] text-[11px] text-white/60 tracking-widest uppercase px-4 py-2.5 border border-white/10 hover:border-[#5EEAD4]/40 hover:text-[#5EEAD4] transition-colors duration-300"
            >
              {s}
            </span>
          ))}
        </FadeUp>

        <Divider />

        {/* ── Reception ── */}
        <FadeUp className="mb-14">
          <Label>Reception</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            What came back from the room
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] max-w-2xl">
            This system was walked through in the final round of Tata Elxsi's design interview process, and stress-tested informally with a few non-designers standing in for patients. The response was consistently positive on two specific points: how far the research phase went to justify a two-persona split instead of one generic user, and how much further the experimentation workspace went than a typical assignment response — closer to a working prototype than a concept screen.
          </p>
        </FadeUp>

        <Divider />

        {/* ── Deliverables ── */}
        <FadeUp className="mb-14">
          <Label>Outcome</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            What the challenge produced
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {DELIVERABLES.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group bg-[#09090B] hover:bg-[#0D0D12] p-10 h-full transition-colors duration-300">
                <div
                  className="font-['Fraunces',serif] font-light text-white leading-none mb-3 group-hover:text-[#5EEAD4] transition-colors duration-500"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
                >
                  {item.value}
                </div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white/75 mb-1.5">{item.label}</div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/35">{item.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Thank you / CTA ── */}
        <FadeUp className="text-center py-10">
          <h2 className="font-['Fraunces',serif] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Thank you for scrolling along.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
            The biggest lesson from this one: when a brief gives you room to define the problem, the ambition is in refusing to stop at the screens it named.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#5EEAD4]/35 text-[#5EEAD4] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] tracking-wide hover:bg-[#5EEAD4] hover:text-[#09090B] transition-all duration-300"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Portfolio
          </Link>
        </FadeUp>

      </div>
    </div>
  );
}
