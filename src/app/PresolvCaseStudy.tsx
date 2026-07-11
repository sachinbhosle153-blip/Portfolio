import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";
import presolvLogoUrl from "../imports/presolv-logo.png";
import presolvLoginUrl from "../imports/presolv-login.png";
import presolvDashboardUrl from "../imports/presolv-dashboard.png";
import presolvRaiseTypeUrl from "../imports/presolv-raise-01-type.png";
import presolvRaisePartiesUrl from "../imports/presolv-raise-02-parties.png";
import presolvRaiseAmountUrl from "../imports/presolv-raise-03-amount.png";
import presolvRaiseDetailsUrl from "../imports/presolv-raise-04-details.png";
import presolvRaiseReviewUrl from "../imports/presolv-raise-05-review.png";
import presolvDocumentUploadUrl from "../imports/presolv-document-upload.png";
import presolvDisputeDetailsUrl from "../imports/presolv-dispute-details.png";
import presolvOutcomeUrl from "../imports/presolv-outcome.png";

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
  { label: "Role", value: "Solo Designer · Design Challenge" },
  { label: "Brief", value: "Presolv360 · UI/UX Designer Assignment" },
  { label: "Platform", value: "Web · Legal Tech · ODR" },
  { label: "Scope", value: "10 screens · Sign-in to Case Closure" },
];

const PROCESS = [
  {
    step: "01",
    title: "Unpack the Brief",
    desc: "Reframed the five requested screens around one constraint: most claimants have never filed a legal case before and don't know what mediation or arbitration actually involves. Every screen had to explain itself.",
  },
  {
    step: "02",
    title: "Map the Full Loop",
    desc: "Added a sign-in and a case dashboard the brief didn't ask for — a filing flow with nowhere to land afterward isn't a product, it's a form.",
  },
  {
    step: "03",
    title: "Break the Hardest Screen Into Steps",
    desc: "The brief's single 'Raise a Dispute' screen became a 5-step wizard — Type, Parties, Amount, Details, Review — each with its own validation and a persistent progress bar.",
  },
  {
    step: "04",
    title: "Prototype End-to-End",
    desc: "Delivered a clickable Figma prototype covering the full case lifecycle: sign-in, dashboard, filing, document upload, case tracking, and resolution.",
  },
];

const INSIGHTS = [
  {
    number: "01",
    title: "One form is one too many asks",
    body: "A single intake form asking for case type, parties, claim amount, and evidence all at once is the fastest way to lose a first-time filer. Splitting it into five focused steps means only one decision per screen.",
  },
  {
    number: "02",
    title: "Status has to read at a glance",
    body: "‘Mediation’, ‘Arbitration’, and ‘Hearing Scheduled’ mean nothing to someone filing their first case. A five-stage stepper — Filed → Review → Mediation → Hearing → Resolved — sits on every case page so status never needs explaining.",
  },
  {
    number: "03",
    title: "Evidence needs structure, not a folder",
    body: "A dedicated Document Upload screen categorizes files — Agreements, Invoices, Payment Proofs, Notices, Identity Proof — and shows per-file OCR status, so both parties always know exactly what's on record.",
  },
  {
    number: "04",
    title: "Closure should feel final",
    body: "The Outcome screen states the settlement amount, payment schedule, and a legally-binding notice up front, plus a full case timeline recap — so a resolution never feels ambiguous.",
  },
];

const PALETTE = [
  { name: "Trust Blue", hex: "#2563EB", role: "Primary actions & brand" },
  { name: "Deep Indigo", hex: "#1E3A8A", role: "Hero gradient, authority" },
  { name: "Success Green", hex: "#16A34A", role: "Resolution & confirmation" },
  { name: "Alert Amber", hex: "#F59E0B", role: "Pending / attention states" },
];

const SCREENS = [
  {
    title: "Sign In — Trust Before Task",
    desc: "A split layout puts reassurance on one side and the task on the other — bank-grade encryption, real-time tracking, and “Trusted by 10,000+ users” sit beside the form itself, because filing a legal claim is an anxious first move, not a routine login.",
    image: presolvLoginUrl,
    tag: "Entry Point",
  },
  {
    title: "Case Dashboard",
    desc: "The screen the brief didn't ask for. Total cases, pending reviews, scheduled hearings, and a filed-vs-resolved trend sit above a prioritized list of active disputes, so a returning user lands on progress, not a blank slate.",
    image: presolvDashboardUrl,
    tag: "Home Base",
  },
  {
    title: "Raise a Dispute — Guided Filing Wizard",
    desc: "What the brief called one screen became five: Type, Parties, Amount, Details, and Review, each behind its own progress step. Inline reassurance (“Payment disputes typically resolve within 2–4 weeks”) keeps first-time filers moving instead of second-guessing.",
    image: presolvRaiseTypeUrl,
    tag: "5-Step Flow",
  },
  {
    title: "Document Upload",
    desc: "A standalone, categorized upload centre — Agreements, Invoices, Payment Proofs, Notices, Identity Proof — with per-file OCR status and upload stats, so evidence never sits in an undifferentiated pile.",
    image: presolvDocumentUploadUrl,
    tag: "Evidence Management",
  },
  {
    title: "Dispute Details & Resolution Room",
    desc: "The single source of truth for a case in progress: a five-stage resolution stepper, every participant including the assigned mediator, documents and an activity timeline, and a direct “Enter Resolution Room” action for the live mediation or arbitration session.",
    image: presolvDisputeDetailsUrl,
    tag: "Case Tracking",
  },
  {
    title: "Outcome Screen",
    desc: "Settlement amount, payment schedule, and a legally-binding notice, stated plainly, plus a case timeline recap and a feedback prompt — so both parties leave with a clear, final record, not just a status change.",
    image: presolvOutcomeUrl,
    tag: "Closure",
  },
];

const WIZARD_STEPS = [
  { label: "Type", image: presolvRaiseTypeUrl },
  { label: "Parties", image: presolvRaisePartiesUrl },
  { label: "Amount", image: presolvRaiseAmountUrl },
  { label: "Details", image: presolvRaiseDetailsUrl },
  { label: "Review", image: presolvRaiseReviewUrl },
];

const DELIVERABLES = [
  { value: "10", label: "Screens delivered", sub: "Sign-in through case closure" },
  { value: "5-Step", label: "Filing Wizard", sub: "Replacing a single dense intake form" },
  { value: "Solo", label: "Designer", sub: "Brief interpretation to hi-fi prototype" },
  { value: "Figma", label: "Clickable Prototype", sub: "Full desktop flow, ready to walk through" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PresolvCaseStudy() {
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
            Presolv360 · Design Challenge
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[68px]" style={{ background: "#0A0F24" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 40%, #2563EB 0%, transparent 60%)" }} />
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
            <Label>Design Challenge · UI/UX Assignment</Label>
            <div className="w-10 h-px bg-[#C8A96E]/40" />
          </motion.div>

          {/* Presolv360 Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-10"
          >
            <img src={presolvLogoUrl} alt="Presolv360" className="w-40 md:w-48 object-contain drop-shadow-2xl" />
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] font-light text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Online Dispute<br />Resolution, Simplified
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/60 max-w-lg mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            A response to Presolv360's UI/UX design challenge — a complete case-filing-to-resolution
            experience for people who have never dealt with mediation or arbitration before.
          </motion.p>

          {/* Overview strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.07] max-w-3xl mx-auto"
          >
            {OVERVIEW.map((item) => (
              <div key={item.label} className="bg-[#0A0F24]/80 backdrop-blur-sm px-6 py-5 text-left">
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
            Legal process,<br />designed for people who dread it
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] mb-6">
              Presolv360 is a real online dispute resolution (ODR) platform — legal disputes settled through mediation, arbitration, and negotiation, without a courtroom. The design brief was direct: most people who reach this platform have never filed a legal claim and have no idea what "arbitration" actually involves. They arrive anxious, not curious.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85]">
              The assignment asked for five screens — Raise a Dispute, Document Upload, Case Dashboard, Resolution Room, and an Outcome screen. I treated it as one connected product instead of five isolated screens: what does someone need to see the moment they land, and what do they need to feel the moment their case closes?
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="grid grid-cols-2 gap-[1px] bg-white/[0.07]">
            {[
              { stat: "10", detail: "Screens designed, sign-in to closure" },
              { stat: "5", detail: "Steps in the guided filing wizard" },
              { stat: "3", detail: "Resolution paths — Mediation, Arbitration, Negotiation" },
              { stat: "Solo", detail: "Brief interpretation through to hi-fi prototype" },
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

        {/* ── Design Decisions ── */}
        <FadeUp className="mb-14">
          <Label>Design Decisions</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Four calls that shaped the flow
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

        {/* ── Visual Language ── */}
        <FadeUp className="mb-14">
          <Label>Visual Language</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Confidence, without noise
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-10 max-w-2xl">
            The palette leans on a single confident blue for trust and action, with status colour strictly reserved for case-state feedback — never decoration — so a user scanning a dashboard of a dozen disputes can tell instantly which ones need them.
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
            The experience in detail
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-[2px]">
          {SCREENS.map((screen, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[1px] bg-white/[0.07]`}>
                {/* Image */}
                <div className="md:w-3/5 relative overflow-hidden flex items-center justify-center p-8" style={{ minHeight: "340px", background: "#0A0A10" }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 40%, #2563EB 0%, transparent 70%)" }} />
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="relative z-10 max-h-[380px] w-auto object-contain drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 z-20">
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

        {/* ── Key Innovation: The Filing Wizard ── */}
        <FadeUp>
          <div className="bg-[#0A0F24] border border-[#2563EB]/25 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />
            <div className="relative">
              <Label>Key Innovation</Label>
              <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                The 5-Step Filing Wizard
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-6">
                The brief's single "Raise a Dispute" requirement was the highest-risk screen in the whole flow — the moment a first-time user either commits or bounces. I broke it into five short, sequential steps instead of one long form, each validated independently, with a persistent progress bar so users always know how much is left.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                Small details carry the weight: a 700-character cap keeps issue summaries scannable for whoever reviews the case next, and contextual tips — "Payment disputes typically resolve within 2–4 weeks through mediation or arbitration" — give first-time filers a sense of what happens after they hit submit.
              </p>

              {/* Wizard filmstrip */}
              <div className="grid grid-cols-5 gap-2 mb-10 max-w-2xl">
                {WIZARD_STEPS.map((s, i) => (
                  <div key={s.label} className="flex flex-col gap-2">
                    <div className="relative overflow-hidden rounded-[3px] border border-white/10" style={{ aspectRatio: "4/3", background: "#0A0A10" }}>
                      <img src={s.image} alt={s.label} className="w-full h-full object-cover object-top" />
                    </div>
                    <span className="font-['DM_Mono',monospace] text-[9px] text-white/40 text-center tracking-widest">
                      {String(i + 1).padStart(2, "0")} {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-[1px] bg-white/[0.07] max-w-xl">
                {[
                  { v: "5", l: "Guided steps, not 1 form" },
                  { v: "700", l: "Character cap keeps summaries scannable" },
                  { v: "3", l: "Resolution paths to choose from" },
                ].map((item) => (
                  <div key={item.l} className="bg-[#0A0F24] px-6 py-5">
                    <div className="font-['Fraunces',serif] font-light text-[#C8A96E] text-[1.8rem] mb-1">{item.v}</div>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

        <Divider />

        {/* ── Thank you / CTA ── */}
        <FadeUp className="text-center py-10">
          <img src={presolvLogoUrl} alt="Presolv360" className="w-28 mx-auto mb-8 opacity-60" />
          <h2 className="font-['Fraunces',serif] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Thank you for scrolling along.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
            This challenge was a good reminder that legal products don't need to feel legal — just clear, calm, and honest about exactly where you stand.
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
