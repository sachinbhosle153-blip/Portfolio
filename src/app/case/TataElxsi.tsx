import { CaseStudy, Section, Prose, Stats, Steps, Cards, Screens, Palette, BulletColumns, Chips, Callout, Closing } from "./CaseKit";
import tataLoginUrl from "../../imports/tataelxsi-login.png";
import tataLandingUrl from "../../imports/tataelxsi-landing.jpg";
import tataDashboardUrl from "../../imports/tataelxsi-dashboard.jpg";
import tataExperimentationUrl from "../../imports/tataelxsi-experimentation.jpg";

export function TataElxsi() {
  return (
    <CaseStudy
      path="/projects/tata-elxsi-ai-healthcare"
      title="AI-powered system: redefining healthcare"
      summary="A response to a Tata Elxsi interview design challenge: an AI-model discovery and experimentation platform that lets doctors, patients and researchers safely explore what AI can do in healthcare, from first login to hands-on model testing."
      overview={[
        { label: "Role", value: "Solo designer · Interview challenge" },
        { label: "Brief", value: "Tata Elxsi AI product assignment" },
        { label: "Platform", value: "Web · Healthcare AI" },
        { label: "Scope", value: "Research to hi-fi prototype" },
      ]}
      cover={tataExperimentationUrl}
      coverAlt="Multi-planar medical image experimentation workspace"
    >
      <Section label="The challenge" title="A one-line brief hiding a four-persona problem">
        <Prose>
          <p>
            The brief was deliberately open: design a novel, frugal AI application concept for healthcare that lets practitioners, researchers and patients safely discover, experiment with and apply AI. No screen list, no wireframes to fill in. Just a problem.
          </p>
          <p>
            The hard part wasn't the AI, it was the audience. That one sentence hides at least four groups with almost nothing in common: a doctor who needs to trust a diagnosis, a researcher who needs to interrogate a model, and a patient who just wants to know what's happening to them. One interface couldn't serve them all.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "4", label: "User types in the brief" },
            { value: "7", label: "System sections designed" },
            { value: "1", label: "Working sandbox" },
            { value: "Solo", label: "Research, IA, prototype" },
          ]}
        />
      </Section>

      <Section label="Research" title="Earning the right to design this">
        <Cards
          items={[
            { label: "Secondary", title: "A market moving faster than trust", body: "Healthcare AI has been one of the fastest-growing corners of applied AI for years. That growth curve became the opening argument for solving this carefully, not quickly." },
            { label: "Competitive", title: "Capital is here. Products aren't.", body: "Heavy investment is flowing into the space, but most products still treat AI as a black-box feature bolted onto existing tools, not a trust relationship that needs its own design." },
            { label: "Primary", title: "The gap only interviews could find", body: "Doctors doubted AI because they couldn't see its reasoning. Patients doubted it because no one explained it to them at all. Two different trust problems with the same label." },
          ]}
        />
      </Section>

      <Section label="Personas" title="Two trust problems, not one">
        <Cards
          items={[
            { label: "Physician · Dr. Nitin", title: "Reach a confident diagnosis faster, without a black box making the call.", body: "Pain: fragmented tooling and AI outputs he can't trace to a reason, so he can't defend them to a patient or a tumour board. Frustration: any tool that asks him to trust a result he can't inspect." },
            { label: "Patient · Alia", title: "Understand her condition in plain language and know what happens to her data.", body: "Pain: medical jargon, and no visibility into how an algorithm, not a doctor, is involved in her care. Frustration: feeling like a data point moving through an automated system." },
          ]}
        />
      </Section>

      <Section label="Synthesis" title="From personas to design direction">
        <BulletColumns
          columns={[
            {
              title: "How might we help doctors?",
              items: [
                "How might we make AI reasoning visible, not just its output?",
                "How might we fit into an existing diagnostic workflow instead of replacing it?",
                "How might we let a doctor verify a result before it reaches a patient?",
              ],
            },
            {
              title: "How might we help patients?",
              items: [
                "How might we explain AI involvement in plain, non-clinical language?",
                "How might we make data handling visible and reassuring, not hidden in a policy page?",
                "How might we keep a human thread running through an automated experience?",
              ],
            },
          ]}
        />
      </Section>

      <Section label="Design process" title="Four stages, one through-line">
        <Steps
          items={[
            { title: "Research the trust gap", desc: "Before touching a screen, I studied why healthcare AI adoption lags its own hype, through secondary research and a competitive scan of the AI-health landscape." },
            { title: "Meet four very different users", desc: "The brief named doctors, patients, physicians and nurses in one sentence. Structured interviews showed they don't trust or fear AI for the same reasons." },
            { title: "Architect a system, not a screen set", desc: "I designed the full IA a real AI-health product would need: authentication, discovery, a personalised dashboard, a model library, privacy, training content and a working sandbox." },
            { title: "Prototype the hardest screen first", desc: "The experimentation workspace, a multi-planar image viewer with live segmentation overlays, was the riskiest screen. I built it first, because if it didn't work, nothing else mattered." },
          ]}
        />
      </Section>

      <Section label="Visual language" title="Clinical calm, with signal intact">
        <Prose>
          <p>
            A near-black canvas keeps diagnostic imagery as the brightest thing on any screen. A single teal carries every action and AI signal; red and amber are reserved for clinical meaning, like a segmentation mask or a risk flag, so colour never competes with the data.
          </p>
        </Prose>
        <Palette
          items={[
            { name: "Clinical Teal", hex: "#5EEAD4", role: "Primary actions & AI signal" },
            { name: "Deep Space", hex: "#0B0F14", role: "Background, clinical calm" },
            { name: "Segment Red", hex: "#B33A3A", role: "Diagnostic overlays" },
            { name: "Alert Amber", hex: "#F5A623", role: "Risk flags" },
          ]}
        />
      </Section>

      <Section label="Key screens" title="The system in detail">
        <Screens
          items={[
            { tag: "Entry point", title: "Sign in: calm before complexity", image: tataLoginUrl, desc: "A single, unhurried screen with no marketing noise. Everything after this gets progressively more complex, so the entry point had to feel like the simplest room in the building." },
            { tag: "Discovery", title: "Landing page: make the abstract concrete", image: tataLandingUrl, desc: "AI in healthcare is easy to say and hard to picture. The landing page grounds it in six named tools (image analysis, personalised treatment, diagnosis support and more) plus \"AI Genius\", a conversational entry for anyone who'd rather ask than browse." },
            { tag: "Home base", title: "Dashboard: personalised, not generic", image: tataDashboardUrl, desc: "\"For You\" surfaces the tools most relevant to the user's role, while \"Recently Explored\" shows real diagnostic imagery in progress, so the dashboard reads as a working clinical tool, not a template." },
            { tag: "Core interaction", title: "Experimentation workspace", image: tataExperimentationUrl, desc: "A full multi-planar CT viewer: axial, sagittal and coronal views in sync, a live lung-segmentation overlay, scrubbable slices and an annotation toolbar. The screen the brief never asked for, and the one that mattered most." },
          ]}
        />
      </Section>

      <Callout label="Key decision" title="Build the sandbox for real">
        <Prose>
          <p>
            Every other screen exists to get a user here: a working multi-planar medical image viewer with synced views, a live segmentation overlay on a CT scan, and tools for cropping, brushing and zooming into a region of interest.
          </p>
          <p>
            Nothing in the brief required this fidelity. I built it anyway, because "experiment with AI" is an empty promise if the experimentation screen is a static mockup. It had to behave like a tool a radiologist could trust their eyes to.
          </p>
        </Prose>
        <Stats items={[{ value: "3", label: "Synced planar views" }, { value: "1", label: "Live segmentation overlay" }, { value: "6", label: "Annotation tools" }]} />
      </Callout>

      <Section label="Beyond the screens" title="A full product, not a demo">
        <Prose>
          <p>
            Past the dashboard sits the rest of what a real AI-health product needs to earn trust at scale: a searchable model library, a dedicated privacy and security section, and training content so no one is left to figure out a clinical AI tool alone.
          </p>
        </Prose>
        <Chips items={["Dashboard", "All models", "Blogs", "Privacy & security", "Training & tutorials", "Support"]} />
      </Section>

      <Section label="Reception" title="What came back from the room">
        <Prose>
          <p>
            I walked through this system in the final round of Tata Elxsi's design interviews, and tested it informally with a few non-designers standing in for patients. Feedback was consistently positive on two points: how far the research went to justify two personas instead of one generic user, and how far the experimentation workspace went beyond a typical assignment.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "4", label: "User types researched", sub: "Doctors, patients, physicians, nurses" },
            { value: "2", label: "Core personas", sub: "Dr. Nitin & Alia" },
            { value: "7", label: "System sections", sub: "Auth through to sandbox" },
            { value: "Solo", label: "Designer", sub: "Research to hi-fi prototype" },
          ]}
        />
      </Section>

      <Closing title="Thank you for scrolling along.">
        <p>When a brief gives you room to define the problem, the ambition is in refusing to stop at the screens it named.</p>
      </Closing>
    </CaseStudy>
  );
}
