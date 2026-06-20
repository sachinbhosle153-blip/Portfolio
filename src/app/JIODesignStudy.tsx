import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import watchHomeUrl from "../imports/jio-watch-home.png";
import watchMapDarkUrl from "../imports/jio-watch-map-dark.png";
import watchMapLightUrl from "../imports/jio-watch-map-light.png";
import watchActivityUrl from "../imports/jio-watch-activity.png";
import chartStepsUrl from "../imports/jio-chart-steps.png";
import chartTargetUrl from "../imports/jio-chart-target.png";
import chartDailyUrl from "../imports/jio-chart-daily.png";
import tvBlueUrl from "../imports/jio-tv-blue.jpg";
import tvPinkUrl from "../imports/jio-tv-pink.jpg";
import tvGreenUrl from "../imports/jio-tv-green.jpg";

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
  { label: "Role", value: "Design System Architect" },
  { label: "Platform", value: "Watch · TV · Mobile · Web" },
  { label: "Outcome", value: "Adopted across 20+ teams" },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit",
    desc: "Catalogued UI patterns across all JIO product surfaces — mobile, TV, watch, and web — to map inconsistencies and identify the gaps a shared system needed to close.",
  },
  {
    step: "02",
    title: "Foundation",
    desc: "Defined the token architecture: colour roles, typography scale, spacing increments, elevation layers, and motion curves — all mapped to light and dark modes.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Built component libraries and surface-specific UI kits for wearables, large-screen TV experiences, and mobile — each sharing the same token foundation.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Documented standards, ran onboarding sessions with product teams, and provided hands-on support through adoption across 20+ internal squads.",
  },
];

const INSIGHTS = [
  {
    number: "01",
    title: "Every team had its own colour definitions",
    body: "Across 20+ product teams, colour was hardcoded differently everywhere. There were no shared tokens — the same brand blue had seven different hex values across surfaces.",
  },
  {
    number: "02",
    title: "Watch and TV were afterthoughts",
    body: "Mobile-first thinking had left wearable and large-screen experiences with no proper design guidance. Each was being solved ad-hoc by individual engineers.",
  },
  {
    number: "03",
    title: "Dark mode was inconsistent",
    body: "Light and dark mode handling was patchwork. Some products inverted, some had separate designs, and none used a shared semantic token layer to stay in sync.",
  },
  {
    number: "04",
    title: "Data visualisation had no standards",
    body: "Charts, graphs, and health metrics looked completely different product to product. There were no chart type conventions, colour mappings, or accessibility guidelines.",
  },
];

const RESULTS = [
  { value: "20+", label: "Product teams adopted", sub: "Single source of truth across JIO AI" },
  { value: "5", label: "Platforms covered", sub: "Watch, TV, Mobile, Tablet, Web" },
  { value: "4", label: "Design systems built", sub: "With tokens, docs & component libraries" },
  { value: "0→1", label: "Watch & TV design language", sub: "Built from scratch for both surfaces" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function JIODesignStudy() {
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
            JIO Platforms AI · 2022–2024
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-[68px]" style={{ background: "#06060F" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(ellipse at 50% 40%, #1A0A7A 0%, transparent 65%)" }} />
          <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(ellipse at 80% 60%, #E91E8C 0%, transparent 50%)" }} />
          <div className="absolute bottom-0 inset-x-0 h-48" style={{ background: "linear-gradient(to top, #09090B, transparent)" }} />
          <div
            className="absolute inset-0 opacity-[0.03]"
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
            <Label>Design Systems · JIO Platforms AI</Label>
            <div className="w-10 h-px bg-[#C8A96E]/40" />
          </motion.div>

          {/* JIO wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="font-['DM_Mono',monospace] text-[11px] tracking-[0.5em] text-white/30 uppercase px-6 py-3 border border-white/10">
              JIO Platforms · Artificial Intelligence
            </div>
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] font-light text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            >
              JIO Design System<br />Architecture & Rollout
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-white/60 max-w-lg mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            Building a cross-platform design language from the ground up — covering wearables,
            large-screen TV, AR concepts, data visualisation, and colour theory — adopted
            across 20+ product teams at JIO AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.07] max-w-3xl mx-auto"
          >
            {OVERVIEW.map((item) => (
              <div key={item.label} className="bg-[#06060F]/80 backdrop-blur-sm px-6 py-5 text-left">
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
          <h2 className="font-['Fraunces',serif] font-light text-white leading-tight mt-3 mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            20+ teams building in silos<br />with no shared language
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85] mb-6">
              When I joined JIO Platforms AI, multiple product teams were building independently — each with their own colour definitions, component patterns, and no documentation standards. The result was visual and experiential fragmentation across one of India's largest tech platforms.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/65 leading-[1.85]">
              As Design System Architect, I was responsible for auditing the existing landscape, defining the token foundation, building platform-specific UI kits, and driving adoption across 20+ internal squads — covering mobile, wearable, TV, and web surfaces.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="grid grid-cols-2 gap-[1px] bg-white/[0.07]">
            {[
              { stat: "20+", detail: "Teams building independently" },
              { stat: "5", detail: "Platforms with no shared tokens" },
              { stat: "7×", detail: "Brand blue defined differently" },
              { stat: "0", detail: "Watch & TV design guidelines" },
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 0% 0%, rgba(200,169,110,0.06), transparent 70%)" }} />
                <span className="font-['Fraunces',serif] text-[3rem] text-white/[0.04] leading-none block mb-5 select-none">{p.step}</span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-white/90 mb-3 tracking-wide">{p.title}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/55 leading-[1.8]">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Discovery ── */}
        <FadeUp className="mb-14">
          <Label>Discovery & Research</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            What the audit revealed
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.07]">
          {INSIGHTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-[#09090B] p-10 h-full">
                <span className="font-['DM_Mono',monospace] text-[10px] text-[#C8A96E]/60 tracking-widest block mb-5">{item.number}</span>
                <h3 className="font-['Fraunces',serif] font-light text-white text-[1.25rem] mb-4 leading-snug">{item.title}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/60 leading-[1.8]">{item.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Wearable UI ── */}
        <FadeUp className="mb-14">
          <Label>Wearable Design</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            JIO Watch — built from zero
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-6">
              JIO's wearable platform had no design language of its own. I built it from scratch — defining interaction patterns, touch target rules, typography hierarchy for tiny screens, and a complete set of UI kits covering smart home control, navigation, and health & fitness tracking.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-8">
              Both light and dark mode variants were designed in full, with the JIO brand colour system adapted to meet contrast and legibility requirements specific to watch displays.
            </p>
            <div className="grid grid-cols-3 gap-[1px] bg-white/[0.07]">
              {[
                { v: "3", l: "UI kits" },
                { v: "2", l: "Colour modes" },
                { v: "40+", l: "Watch screens" },
              ].map((item) => (
                <div key={item.l} className="bg-[#09090B] px-5 py-5">
                  <div className="font-['Fraunces',serif] font-light text-[#C8A96E] text-[1.8rem] mb-1">{item.v}</div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45">{item.l}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          {/* Watch screens collage */}
          <FadeUp delay={0.2}>
            <div className="relative flex items-end justify-center" style={{ height: "360px" }}>
              {[
                { src: watchMapDarkUrl, rotate: "-8deg", bottom: "0px", left: "2%", width: "32%", z: 10 },
                { src: watchHomeUrl, rotate: "0deg", bottom: "24px", left: "32%", width: "36%", z: 20 },
                { src: watchMapLightUrl, rotate: "8deg", bottom: "0px", right: "2%", width: "32%", z: 10 },
              ].map((panel, pi) => (
                <div
                  key={pi}
                  className="absolute overflow-hidden rounded-[32px]"
                  style={{
                    width: panel.width,
                    aspectRatio: "9/16",
                    transform: `rotate(${panel.rotate})`,
                    bottom: panel.bottom,
                    left: panel.left,
                    right: panel.right,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                    zIndex: panel.z,
                  }}
                >
                  <img src={panel.src} alt="JIO Watch UI" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <Divider />

        {/* ── Data Visualisation ── */}
        <FadeUp className="mb-14">
          <Label>Data Visualisation</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Charts that work on a 45mm screen
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: chartStepsUrl, label: "Step Activity" },
                { src: chartTargetUrl, label: "Target Ring" },
                { src: chartDailyUrl, label: "Daily Activity" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-full overflow-hidden rounded-[20px] border border-white/[0.08]" style={{ aspectRatio: "3/4" }}>
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-['DM_Mono',monospace] text-[9px] text-white/35 tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] mb-6">
              Health and fitness data on wearables demands extreme clarity at tiny scale. I designed a standardised data visualisation library for JIO Watch — covering line charts for trends, donut rings for goal tracking, and bar charts for daily activity comparisons.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85]">
              Each chart type was defined with a colour role system, accessible contrast ratios, and interaction states — ensuring that data communicated meaning even on the smallest screen in the product ecosystem.
            </p>
          </FadeUp>
        </div>

        <Divider />

        {/* ── TV & Ambient AR ── */}
        <FadeUp className="mb-14">
          <Label>Large Screen & Ambient AR</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Colour theory at living-room scale
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mb-10">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl">
            For JIO's streaming platform, I explored ambient lighting — an AR concept that extends the on-screen content into the physical room through dynamic background colour. Each theme was derived from the JIO colour system and validated against the brand's accessibility standards.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-[2px]">
          {[
            { src: tvBlueUrl, label: "Focus Mode", colour: "#1565C0", desc: "Cool blue — deep focus, cinematic viewing" },
            { src: tvGreenUrl, label: "Natural Mode", colour: "#2E7D32", desc: "Biophilic green — relaxed, ambient tone" },
            { src: tvPinkUrl, label: "Vivid Mode", colour: "#AD1457", desc: "JIO Magenta — high energy, brand-forward" },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group relative overflow-hidden cursor-default">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,11,0.85) 0%, transparent 50%)" }} />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.colour }} />
                    <span className="font-['DM_Mono',monospace] text-[9px] text-white/60 tracking-widest uppercase">{item.label}</span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/50">{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Divider />

        {/* ── Token System callout ── */}
        <FadeUp>
          <div className="bg-[#06060F] border border-[#E91E8C]/15 p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E91E8C, transparent)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #1A0A7A, transparent)" }} />
            <div className="relative">
              <Label>Key Innovation</Label>
              <h2 className="font-['Fraunces',serif] font-light text-white mt-3 mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                One token layer. Every surface.
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-6">
                The core architectural decision was a semantic token layer that sat between raw colour values and component usage. Instead of hardcoding colours per platform, every component referenced a semantic role — <code className="font-['DM_Mono',monospace] text-[#C8A96E] text-[12px]">color.interactive.primary</code>, <code className="font-['DM_Mono',monospace] text-[#C8A96E] text-[12px]">color.surface.elevated</code> — that resolved differently per platform and mode.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/65 leading-[1.85] max-w-2xl mb-10">
                This meant a single token update could propagate consistently across watch, TV, mobile, and web simultaneously — cutting the effort for mode switches, rebrands, and new platform rollouts from weeks to hours.
              </p>
              <div className="grid sm:grid-cols-3 gap-[1px] bg-white/[0.07] max-w-xl">
                {[
                  { v: "1-layer", l: "Semantic token architecture" },
                  { v: "5×", l: "Platforms from one source" },
                  { v: "Hours", l: "To roll out a full rebrand" },
                ].map((item) => (
                  <div key={item.l} className="bg-[#06060F] px-6 py-5">
                    <div className="font-['Fraunces',serif] font-light text-[#C8A96E] text-[1.8rem] mb-1">{item.v}</div>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/45">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* ── Watch activity full-width ── */}
        <FadeUp className="mb-14">
          <Label>Wearable · Health Tracking</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Health at a glance
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex justify-center gap-6 flex-wrap">
            {[watchActivityUrl, chartStepsUrl, chartTargetUrl].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-[32px] border border-white/[0.08]" style={{ width: "180px", aspectRatio: "3/4" }}>
                <img src={src} alt="JIO Watch health screen" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </FadeUp>

        <Divider />

        {/* ── Results ── */}
        <FadeUp className="mb-14">
          <Label>Impact</Label>
          <h2 className="font-['Fraunces',serif] font-light text-white mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Results after rollout
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

        <Divider />

        {/* ── Thank you / CTA ── */}
        <FadeUp className="text-center py-10">
          <div className="font-['DM_Mono',monospace] text-[10px] tracking-[0.5em] text-white/20 uppercase mb-8">JIO Platforms AI</div>
          <h2 className="font-['Fraunces',serif] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Thank you for scrolling along.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
            A design system is never finished — it is a living contract between teams. The real work was not building the components, it was earning the trust that made adoption possible.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#C8A96E]/35 text-[#C8A96E] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] tracking-wide hover:bg-[#C8A96E] hover:text-[#09090B] transition-all duration-300"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back to Portfolio
            </Link>
            <a
              href="https://behance.net/bhoslesachin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white/50 font-['Plus_Jakarta_Sans',sans-serif] text-[13px] tracking-wide hover:border-white/40 hover:text-white/80 transition-all duration-300"
            >
              More on Behance <ExternalLink size={13} />
            </a>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
