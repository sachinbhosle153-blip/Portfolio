import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import miLogoUrl from "../imports/image.png";
import jioDesignUrl from "../imports/image-1.png";

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
    <span className="font-['DM_Mono',monospace] text-[10px] tracking-[0.28em] text-[#C8A96E] uppercase">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="w-full h-px bg-white/[0.07] my-24" />;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const OVERVIEW = [
  { label: "Role", value: "Sole Designer" },
  { label: "Client", value: "Mumbai Indians · JIO Platforms AI" },
  { label: "Platform", value: "Web · Multi-league" },
  { label: "Outcome", value: "45 → 500+ users · 10×" },
];

const PROCESS = [
  {
    step: "01",
    title: "Research",
    desc: "Shadowed coaches and strategy staff across two franchises to understand how decisions were made and where the existing tool broke down.",
  },
  {
    step: "02",
    title: "Define",
    desc: "Synthesised research into a clear problem statement: staff needed contextual, role-aware data without switching tools or re-authenticating between leagues.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Built a new information architecture, visual system, and the multi-league role-switching layer — iterating through 4 rounds of concept reviews with coaching staff.",
  },
  {
    step: "04",
    title: "Ship",
    desc: "Delivered production-ready specs and collaborated directly with engineering through to launch. Platform went live across 6 franchises.",
  },
];

const INSIGHTS = [
  {
    number: "01",
    title: "Data overload, not data scarcity",
    body: "Staff had access to too much raw data with no hierarchy. The platform needed to surface the right insight at the right moment — not dump everything on screen.",
  },
  {
    number: "02",
    title: "Context switching was the silent killer",
    body: "Users managing multiple leagues were logging out and back in multiple times per session. Each switch cost 4–6 minutes of lost context.",
  },
  {
    number: "03",
    title: "Trust in the data was low",
    body: "Coaches distrusted outputs they could not trace. Every data point needed a visible source and update timestamp to earn credibility.",
  },
  {
    number: "04",
    title: "Mobile use was an afterthought",
    body: "Staff in the dugout needed quick access on phones. The legacy tool was desktop-only. Responsive design was non-negotiable.",
  },
];

const SCREENS = [
  {
    title: "Command Centre Dashboard",
    desc: "Real-time match overview with live player metrics, formation data, and performance scores surfaced in a single view. Priority-ranked so the most urgent information reads first.",
    photo: "1551288049-bebda4e38f71",
    tag: "Core Experience",
  },
  {
    title: "Player Performance Profile",
    desc: "Deep-dive into individual player data across seasons, formats, and opposition. Visualised with progressive charts that reveal trend lines without overwhelming the reader.",
    photo: "1460925895917-afdab827c52f",
    tag: "Analytics Layer",
  },
  {
    title: "Multi-League Role Switcher",
    desc: "The key innovation: a persistent context panel that lets staff shift active league and role without leaving the current screen — no re-authentication, no workflow interruption.",
    photo: "1518709268805-4e9042af9f23",
    tag: "System Feature",
  },
];

const RESULTS = [
  { value: "45 → 500+", label: "Active users", sub: "10× growth post-launch" },
  { value: "6", label: "Franchises live", sub: "MI, MI Capetown, MI Emirates + 3 more" },
  { value: "0", label: "Re-authentications needed", sub: "Eliminated by role-switching system" },
  { value: "Daily", label: "Active use", sub: "Auction strategy, scouting & game planning" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function MICaseStudy() {
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
          <span className="font-['DM_Mono',monospace] text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase hidden md:block">
            Case Study
          </span>
          <span className="font-['DM_Mono',monospace] text-[10px] text-white/30 tracking-widest hidden md:block">
            Mumbai Indians · 2023
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[68px]" style={{ background: "#001630" }}>
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 40%, #0057B8 0%, transparent 60%)" }} />
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
            <div className="w-10 h-px bg-[#C8A96E]/40" />
            <Label>Featured Project · JIO Platforms AI</Label>
            <div className="w-10 h-px bg-[#C8A96E]/40" />
          </motion.div>

          {/* MI Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-10"
          >
            <img src={miLogoUrl} alt="Mumbai Indians" className="w-40 md:w-52 object-contain drop-shadow-2xl" />
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] font-light text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Cricket Intelligence<br />Platform
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/60 max-w-lg mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            A ground-up redesign of a legacy sports analytics tool — built for coaching staff across
            6 global franchises and used daily for auction strategy, player scouting, and game planning.
          </motion.p>

          {/* Overview strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.07] max-w-3xl mx-auto"
          >
            {OVERVIEW.map((item) => (
              <div key={item.label} className="bg-[#001630]/80 backdrop-blur-sm px-6 py-5 text-left">
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
            A tool with critical data<br />that nobody wanted to use
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] mb-6">
              The Mumbai Indians coaching and strategy staff were sitting on a goldmine of performance data — but the legacy analytics platform had an adoption rate of just ~45 users. Staff actively avoided it, falling back to spreadsheets and manual research.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85]">
              As the sole designer on this project within JIO Platforms AI, I was responsible for understanding why, and redesigning from the ground up — covering information architecture, visual system, and a first-of-its-kind multi-league role-switching system.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="grid grid-cols-2 gap-[1px] bg-white/[0.07]">
            {[
              { stat: "~45", detail: "Active users at project start" },
              { stat: "4–6min", detail: "Lost per cross-league context switch" },
              { stat: "0%", detail: "Mobile support in legacy tool" },
              { stat: "3 yrs", detail: "Since last meaningful design update" },
            ].map((item, i) => (
              <div key={i} className="bg-[#09090B] p-7">
                <div className="font-['Fraunces',serif] font-light text-[#C8A96E] mb-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                  {item.stat}
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/50 leading-snug">{item.detail}</p>
              </div>
            ))}
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
              <div className="group bg-[#09090B] hover:bg-[#0E0E12] transition-colors duration-400 p-8 h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 0% 0%, rgba(200,169,110,0.06), transparent 70%)" }}
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

        {/* ── Discovery ── */}
        <FadeUp className="mb-14">
          <Label>Discovery & Research</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            What the research revealed
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.07]">
          {INSIGHTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-[#09090B] p-10 h-full">
                <span className="font-['DM_Mono',monospace] text-[10px] text-[#C8A96E]/60 tracking-widest block mb-5">
                  {item.number}
                </span>
                <h3 className="font-['Fraunces',serif] font-light text-white text-[1.25rem] mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Design Language ── */}
        <FadeUp className="mb-14">
          <Label>Design Language</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Built on the JIO Design System
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <FadeUp>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-8">
              The platform was designed using the JIO Design System — a token-based system I served as architect for. This ensured visual consistency with Jio's product ecosystem while allowing the MI platform to have its own distinct identity through colour application and motion.
            </p>
            <div className="space-y-4">
              {[
                { name: "Deep Navy", hex: "#001A40", role: "Primary background" },
                { name: "JIO Blue", hex: "#0057B8", role: "Brand accent" },
                { name: "Gold", hex: "#C8A96E", role: "Interactive emphasis" },
                { name: "Charcoal", hex: "#1A1A22", role: "Surface elevation" },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[3px] flex-shrink-0 border border-white/10" style={{ background: c.hex }} />
                  <div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 block">{c.name}</span>
                    <span className="font-['DM_Mono',monospace] text-[10px] text-white/35 tracking-widest">{c.hex} · {c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          {/* JIO Design System collage */}
          <FadeUp delay={0.2}>
            <div className="relative flex items-end justify-center gap-4" style={{ height: "320px" }}>
              {[
                { pos: "0% center",   rotate: "-6deg", bottom: "0px",  width: "30%", z: 10 },
                { pos: "50% center",  rotate: "0deg",  bottom: "20px", width: "34%", z: 20 },
                { pos: "100% center", rotate: "6deg",  bottom: "0px",  width: "30%", z: 10 },
              ].map((panel, pi) => (
                <div
                  key={pi}
                  className="absolute overflow-hidden rounded-[4px]"
                  style={{
                    width: panel.width,
                    aspectRatio: "9/16",
                    transform: `rotate(${panel.rotate})`,
                    bottom: panel.bottom,
                    left: pi === 0 ? "6%" : pi === 1 ? "33%" : "auto",
                    right: pi === 2 ? "6%" : "auto",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
                    zIndex: panel.z,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${jioDesignUrl})`,
                      backgroundSize: "300% auto",
                      backgroundPosition: panel.pos,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <Divider />

        {/* ── Key Screens ── */}
        <FadeUp className="mb-14">
          <Label>Key Screens</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            The experience in detail
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-[2px]">
          {SCREENS.map((screen, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[1px] bg-white/[0.07]`}>
                {/* Image */}
                <div className="md:w-3/5 relative overflow-hidden bg-[#0A0A10]" style={{ minHeight: "280px" }}>
                  <img
                    src={`https://images.unsplash.com/photo-${screen.photo}?w=900&h=500&fit=crop&auto=format`}
                    alt={screen.title}
                    className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700"
                    style={{ minHeight: "280px" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,22,48,0.5) 0%, transparent 60%)" }} />
                  <div className="absolute top-5 left-5">
                    <span className="font-['DM_Mono',monospace] text-[9px] px-3 py-1.5 border border-[#C8A96E]/30 text-[#C8A96E]/80 tracking-widest uppercase">
                      {screen.tag}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-2/5 bg-[#09090B] p-10 flex flex-col justify-center">
                  <span className="font-['DM_Mono',monospace] text-[10px] text-[#C8A96E]/60 tracking-widest block mb-4">
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

        {/* ── Multi-League System ── */}
        <FadeUp>
          <div className="bg-[#001220] border border-[#0057B8]/20 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0057B8, transparent)" }} />
            <div className="relative">
              <Label>Key Innovation</Label>
              <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                The Multi-League Role-Switching System
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                Staff managing multiple franchises — MI, MI Capetown, MI Emirates, and others — previously had to log out and log back in when switching between leagues. Each switch destroyed their working context and took 4–6 minutes to restore.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                I designed a persistent context panel — always accessible from the top chrome — that lets users shift active league and role in a single interaction. Permissions update in real time, data refreshes in the background, and the user stays exactly where they were.
              </p>
              <div className="grid sm:grid-cols-3 gap-[1px] bg-white/[0.07] max-w-xl">
                {[
                  { v: "6", l: "Leagues supported" },
                  { v: "1-click", l: "Context switching" },
                  { v: "0s", l: "Re-authentication time" },
                ].map((item) => (
                  <div key={item.l} className="bg-[#001220] px-6 py-5">
                    <div className="font-['Fraunces',serif] font-light text-[#C8A96E] text-[1.8rem] mb-1">{item.v}</div>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* ── Results ── */}
        <FadeUp className="mb-14">
          <Label>Impact</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Results after launch
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {RESULTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group bg-[#09090B] hover:bg-[#0D0D12] p-10 h-full transition-colors duration-300">
                <div
                  className="font-['Fraunces',serif] font-light text-white leading-none mb-3 group-hover:text-[#C8A96E] transition-colors duration-500"
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

        <FadeUp className="mt-6">
          <div className="border border-white/[0.08] bg-white/[0.02] px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 leading-relaxed">
              Due to confidentiality, some project details may not be fully visible here. View the complete case study on Behance —
            </span>
            <a
              href="https://www.behance.net/gallery/195188123/Cricket-Intelligence-Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 font-['DM_Mono',monospace] text-[11px] text-[#C8A96E] tracking-widest hover:text-white transition-colors duration-200"
            >
              View on Behance <ExternalLink size={11} />
            </a>
          </div>
        </FadeUp>

        <Divider />

        {/* ── Thank you / CTA ── */}
        <FadeUp className="text-center py-10">
          <img src={miLogoUrl} alt="Mumbai Indians" className="w-24 mx-auto mb-8 opacity-60" />
          <h2 className="font-['Fraunces',serif] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Thank you for scrolling along.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
            This project reminded me that great design is not about aesthetics — it is about earning trust through clarity, consistency, and craft that serves the people using the product.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#C8A96E]/35 text-[#C8A96E] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] tracking-wide hover:bg-[#C8A96E] hover:text-[#09090B] transition-all duration-300"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Portfolio
          </Link>
        </FadeUp>

      </div>
    </div>
  );
}
