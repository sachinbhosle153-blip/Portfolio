import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import problemListUrl from "../imports/fundrise-problem-list.png";
import lackCapitalUrl from "../imports/fundrise-lack-capital.png";
import stockMarketUrl from "../imports/fundrise-stock-market.png";
import capitalEducationUrl from "../imports/fundrise-capital-education.png";
import overviewUrl from "../imports/fundrise-overview.png";
import howItWorksUrl from "../imports/fundrise-how-it-works.png";
import continueUrl from "../imports/fundrise-continue.png";
import websiteMockUrl from "../imports/fundrise-website-mock.png";

// ─── Utility ─────────────────────────────────────────────────────────────────

const GREEN = "#22C55E";

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
  { label: "Role", value: "Founder · Concept, PRD & Landing Page" },
  { label: "Category", value: "FinTech · Proprietary Trading" },
  { label: "Stage", value: "Idea → PRD → Landing Page" },
  { label: "Model", value: "₹2,000 Challenge Fee · Up to 80% Split" },
];

const PROBLEMS = [
  { n: "01", text: "Lack of high capital to trade meaningfully." },
  { n: "02", text: "Lack of expertise or guidance to invest well." },
  { n: "03", text: "Difficulty navigating the stock market's complexity." },
  { n: "04", text: "Risk aversion born from past losses and no safety net." },
  { n: "05", text: "Absence of specialized funding solutions built for traders, not businesses." },
];

const SLIDES = [
  {
    title: "Capital Isn't the Only Wall",
    tag: "Research Finding",
    desc: "Numerous traders face insufficient funds for trading — a constraint that stops them from capitalizing on stock market opportunities and building wealth. But it compounds with a second gap: most also lack the knowledge or guidance to make informed investment choices, so uncertainty and hesitation cost them opportunities even when capital isn't the blocker.",
    image: lackCapitalUrl,
  },
  {
    title: "F&O Is a Trap, Not a Shortcut",
    tag: "Market Reality",
    desc: "Low capital requirements pull traders toward Futures & Options instead of equities — and the data is brutal: 95% of F&O traders experience losses. Meanwhile, the traditional equity investing that could actually build wealth stays out of reach, simply because their capital is too small to make it worthwhile.",
    image: stockMarketUrl,
  },
  {
    title: "Two Words: Capital + Education",
    tag: "Core Insight",
    desc: "After collecting interviews and feedback directly from traders, one thing was consistent: the primary blocker isn't ambition or skill — it's the lack of capital paired with the lack of education. Solve for both at once, and the rest of the problem starts to dissolve.",
    image: capitalEducationUrl,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Selection & Fee",
    desc: "The trader picks an account size — say ₹3,00,000 — and pays a flat fee (₹4,000 in this model) to enter the challenge. Low enough to filter for seriousness, not to gatekeep access.",
  },
  {
    step: "02",
    title: "Challenge — Phase 1",
    desc: "The trader is given specific objectives, chiefly a profit target, and trades under strict drawdown rules to prove discipline, not luck.",
  },
  {
    step: "03",
    title: "Challenge — Phase 2",
    desc: "A verification pass — the same profit target under the same rules, to confirm Phase 1 wasn't a fluke before real capital is on the line.",
  },
  {
    step: "04",
    title: "Account Activation",
    desc: "Once both phases and compliance checks clear, the funded account activates at the selected size — ₹3,00,000, fully tradable.",
  },
  {
    step: "05",
    title: "Trade the Funded Account",
    desc: "The trader trades the firm's capital, applying their own skills and strategy, with unlimited trading days and no artificial time pressure.",
  },
  {
    step: "06",
    title: "Profit Sharing",
    desc: "Profits are split per the agreed terms — up to 80% to the trader — while the firm keeps the rest as its return on the capital it fronted.",
  },
];

const ECONOMICS = [
  { v: "7.5%", l: "Phase 1 profit target · Trading Challenge" },
  { v: "5%", l: "Phase 2 profit target · Verification" },
  { v: "80/20", l: "Phase 3 profit split · Funded Trader" },
  { v: "10% / 5%", l: "Total / Daily drawdown limit, all phases" },
];

const DELIVERABLES = [
  { value: "5", label: "Problem Signals Researched", sub: "Synthesized from trader interviews & feedback" },
  { value: "6-Step", label: "Funding Flow Designed", sub: "Challenge entry through to profit payout" },
  { value: "80/20", label: "Profit Split Model", sub: "Trader keeps the majority of what they make" },
  { value: "Concept", label: "Current Stage", sub: "PRD + landing page designed, pre-build" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function FundriseCaseStudy() {
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
            Fix My Itch
          </span>
          <span className="font-['DM_Mono',monospace] text-[10px] text-white/30 tracking-widest hidden md:block">
            Fundrise · Startup Concept
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[68px]" style={{ background: "#060C09" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-25" style={{ background: `radial-gradient(ellipse at 50% 40%, ${GREEN} 0%, transparent 60%)` }} />
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
            <Label>Startup Concept · Fix My Itch</Label>
            <div className="w-10 h-px bg-[#C8A96E]/40" />
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] font-light text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              Fund the Skill,<br />Not Just the Capital
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/60 max-w-lg mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            Fundrise — a proprietary trading firm concept for India. Traders prove their edge in a funded challenge, then trade the firm's capital for up to an 80% profit split.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.07] max-w-3xl mx-auto"
          >
            {OVERVIEW.map((item) => (
              <div key={item.label} className="bg-[#060C09]/80 backdrop-blur-sm px-6 py-5 text-left">
                <Label>{item.label}</Label>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/80 mt-2 leading-snug">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28">

        {/* ── The Problem ── */}
        <FadeUp>
          <Label>The Problem</Label>
          <h2
            className="font-['Fraunces',serif] font-light text-white leading-tight mt-3 mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Skilled traders,<br />shut out by capital
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mb-14">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] max-w-2xl">
            India has no shortage of people who understand markets — what it lacks is a way for them to trade at a scale that matters without risking money they don't have. Talking to retail traders surfaced the same five walls, over and over.
          </p>
        </FadeUp>
        <div className="flex flex-col gap-[1px] bg-white/[0.07]">
          {PROBLEMS.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.06}>
              <div className="bg-[#09090B] px-8 py-6 flex items-center gap-6">
                <span className="font-['Fraunces',serif] text-[1.6rem] text-white/20 shrink-0 w-10">{p.n}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/75">{p.text}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Research Slides ── */}
        <FadeUp className="mb-14">
          <Label>Research</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            What traders actually told me
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-[2px]">
          {SLIDES.map((slide, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[1px] bg-white/[0.07]`}>
                <div className="md:w-3/5 relative overflow-hidden flex items-center justify-center p-8" style={{ minHeight: "300px", background: "#0A0A10" }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at 50% 40%, ${GREEN} 0%, transparent 70%)` }} />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 max-h-[320px] w-auto object-contain rounded-[3px] drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-['DM_Mono',monospace] text-[9px] px-3 py-1.5 border border-[#C8A96E]/30 text-[#C8A96E]/80 tracking-widest uppercase">
                      {slide.tag}
                    </span>
                  </div>
                </div>
                <div className="md:w-2/5 bg-[#09090B] p-10 flex flex-col justify-center">
                  <h3 className="font-['Fraunces',serif] font-light text-white text-[1.3rem] leading-tight mb-4">
                    {slide.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── The Model ── */}
        <FadeUp>
          <div className="border p-12 md:p-16 relative overflow-hidden" style={{ background: "#08130D", borderColor: "rgba(34,197,94,0.25)" }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${GREEN}, transparent)` }} />
            <div className="relative">
              <Label>The Model</Label>
              <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Fund the trade, share the upside
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-6">
                Fundrise provides capital to traders in exchange for a share of the profits generated. Traders apply for funding based on demonstrated trading performance and risk management — not credit history, not collateral.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                The goal is to democratize access to financial markets — giving aspiring traders the capital and resources to actually act on the skill they've already built, instead of sitting on the sidelines until they've saved enough to matter.
              </p>
              <img src={overviewUrl} alt="Fundrise overview" className="w-full max-w-2xl rounded-[3px] border border-white/10 opacity-90" />
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* ── How It Works ── */}
        <FadeUp className="mb-14">
          <Label>How It Works</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Six steps, capital to payout
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.07] mb-16">
          {PROCESS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="group bg-[#09090B] hover:bg-[#0E0E12] transition-colors duration-400 p-8 h-full relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 0% 0%, rgba(34,197,94,0.08), transparent 70%)` }}
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
        <div className="grid sm:grid-cols-2 gap-6">
          <FadeUp>
            <img src={howItWorksUrl} alt="Challenge phases" className="w-full rounded-[3px] border border-white/10 opacity-90" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <img src={continueUrl} alt="Account activation and profit sharing" className="w-full rounded-[3px] border border-white/10 opacity-90" />
          </FadeUp>
        </div>

        <Divider />

        {/* ── Product / Landing Page ── */}
        <FadeUp className="mb-10">
          <Label>The Product</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Landing page, designed
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl">
            A full landing page concept — challenge tiers from ₹2,00,000 to ₹20,00,000, transparent phase-by-phase rules, and a broker integration mock so trading with Fundrise's capital feels identical to trading your own.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="border border-white/10 rounded-[4px] overflow-hidden" style={{ background: "#0A0A10" }}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="font-['DM_Mono',monospace] text-[9px] text-white/30 tracking-widest ml-3">fundrise.in — scroll to explore</span>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "640px" }}>
              <img src={websiteMockUrl} alt="Fundrise landing page mockup" className="w-full h-auto block" />
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* ── Economics ── */}
        <FadeUp className="mb-14">
          <Label>The Economics</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Rules that keep risk honest
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {ECONOMICS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="bg-[#09090B] p-8 h-full">
                <div className="font-['Fraunces',serif] font-light leading-none mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: GREEN }}>
                  {item.v}
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/55 leading-snug">{item.l}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Where This Stands ── */}
        <FadeUp className="mb-14">
          <Label>Where This Stands</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Concept stage, on purpose
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07]">
          {DELIVERABLES.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group bg-[#09090B] hover:bg-[#0D0D12] p-10 h-full transition-colors duration-300">
                <div
                  className="font-['Fraunces',serif] font-light text-white leading-none mb-3 transition-colors duration-500"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
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

        {/* ── CTA ── */}
        <FadeUp className="text-center py-10">
          <h2 className="font-['Fraunces',serif] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            One of a few ideas I'd bet on.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
            This is a live problem, not a shipped product — if the model or the market is something you'd want to dig into together, I'd like to hear your read on it.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C8A96E] text-[#09090B] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-medium tracking-wide hover:bg-[#DFC080] transition-colors duration-300"
            >
              Let's Talk
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#C8A96E]/35 text-[#C8A96E] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] tracking-wide hover:bg-[#C8A96E] hover:text-[#09090B] transition-all duration-300"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back to Portfolio
            </Link>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
