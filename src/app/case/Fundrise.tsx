import { CaseStudy, Section, Prose, Stats, Steps, Screens, Figure, Gallery, Callout, Closing } from "./CaseKit";
import problemListUrl from "../../imports/fundrise-problem-list.png";
import lackCapitalUrl from "../../imports/fundrise-lack-capital.png";
import stockMarketUrl from "../../imports/fundrise-stock-market.png";
import capitalEducationUrl from "../../imports/fundrise-capital-education.png";
import overviewUrl from "../../imports/fundrise-overview.png";
import howItWorksUrl from "../../imports/fundrise-how-it-works.png";
import continueUrl from "../../imports/fundrise-continue.png";
import websiteMockUrl from "../../imports/fundrise-website-mock.png";

export function Fundrise() {
  return (
    <CaseStudy
      path="/ideas/fundrise"
      title="Fund the skill, not just the capital"
      summary="Fundrise is a proprietary trading firm concept for India. Traders prove their edge in a funded challenge, then trade the firm's capital for up to an 80% profit split."
      overview={[
        { label: "Role", value: "Founder · Concept, PRD, landing page" },
        { label: "Category", value: "Fintech · Proprietary trading" },
        { label: "Stage", value: "Idea → PRD → landing page" },
        { label: "Model", value: "₹2,000 challenge fee · up to 80% split" },
      ]}
      cover={websiteMockUrl}
      coverAlt="Fundrise landing page"
    >
      <Section label="The problem" title="Skilled traders, shut out by capital">
        <Prose>
          <p>
            India has no shortage of people who understand markets. What it lacks is a way for them to trade at a scale that matters without risking money they don't have. Talking to retail traders surfaced the same five walls, over and over.
          </p>
        </Prose>
        <Steps
          items={[
            { title: "Capital", desc: "Lack of high capital to trade meaningfully." },
            { title: "Guidance", desc: "Lack of expertise or guidance to invest well." },
            { title: "Complexity", desc: "Difficulty navigating the stock market's complexity." },
            { title: "Risk", desc: "Risk aversion born from past losses and no safety net." },
            { title: "Funding", desc: "No specialised funding built for traders, not businesses." },
          ]}
        />
        <Figure src={problemListUrl} alt="The five problems traders described" />
      </Section>

      <Section label="Research" title="What traders actually told me">
        <Screens
          items={[
            { tag: "Research finding", title: "Capital isn't the only wall", image: lackCapitalUrl, desc: "Many traders lack the funds to act on market opportunities. That compounds with a second gap: most also lack the knowledge to make informed choices, so hesitation costs them even when capital isn't the blocker." },
            { tag: "Market reality", title: "F&O is a trap, not a shortcut", image: stockMarketUrl, desc: "Low capital requirements pull traders toward futures and options instead of equities, and 95% of F&O traders lose money. The equity investing that could build wealth stays out of reach because their capital is too small." },
            { tag: "Core insight", title: "Two words: capital + education", image: capitalEducationUrl, desc: "Across interviews and feedback, the blocker was consistent: not ambition or skill, but missing capital paired with missing education. Solve both at once and the rest starts to dissolve." },
          ]}
        />
      </Section>

      <Callout label="The model" title="Fund the trade, share the upside">
        <Prose>
          <p>
            Fundrise provides capital to traders in exchange for a share of the profits. Traders qualify on demonstrated trading performance and risk management, not credit history or collateral.
          </p>
          <p>
            The goal is to open up financial markets: give aspiring traders the capital to act on skill they've already built, instead of waiting on the sidelines until they've saved enough to matter.
          </p>
        </Prose>
        <Figure src={overviewUrl} alt="Fundrise model overview" />
      </Callout>

      <Section label="How it works" title="Six steps, capital to payout">
        <Steps
          items={[
            { title: "Selection & fee", desc: "The trader picks an account size, say ₹3,00,000, and pays a flat fee (₹4,000 in this model) to enter. Low enough to filter for seriousness, not to gatekeep." },
            { title: "Challenge, phase 1", desc: "The trader gets specific objectives, chiefly a profit target, and trades under strict drawdown rules to prove discipline, not luck." },
            { title: "Challenge, phase 2", desc: "A verification pass with the same rules, to confirm phase 1 wasn't a fluke before real capital is on the line." },
            { title: "Account activation", desc: "Once both phases and compliance checks clear, the funded account activates at the selected size, fully tradable." },
            { title: "Trade the funded account", desc: "The trader trades the firm's capital with their own strategy, with unlimited trading days and no artificial time pressure." },
            { title: "Profit sharing", desc: "Profits are split per the agreed terms, up to 80% to the trader, while the firm keeps the rest as its return on the capital." },
          ]}
        />
        <Gallery items={[{ src: howItWorksUrl, label: "Challenge phases" }, { src: continueUrl, label: "Activation & profit sharing" }]} />
      </Section>

      <Section label="The product" title="Landing page, designed">
        <Prose>
          <p>
            A full landing page concept: challenge tiers from ₹2,00,000 to ₹20,00,000, transparent phase-by-phase rules, and a broker integration mock, so trading with Fundrise's capital feels identical to trading your own.
          </p>
        </Prose>
        <Figure src={websiteMockUrl} alt="Fundrise landing page, full length" caption="fundrise.in · scroll to explore" scroll />
      </Section>

      <Section label="The economics" title="Rules that keep risk honest">
        <Stats
          items={[
            { value: "7.5%", label: "Phase 1 profit target" },
            { value: "5%", label: "Phase 2 profit target" },
            { value: "80/20", label: "Funded profit split" },
            { value: "10% / 5%", label: "Total / daily drawdown" },
          ]}
        />
      </Section>

      <Section label="Where this stands" title="Concept stage, on purpose">
        <Stats
          items={[
            { value: "5", label: "Problems researched", sub: "From trader interviews & feedback" },
            { value: "6-step", label: "Funding flow", sub: "Challenge entry to payout" },
            { value: "80/20", label: "Profit split", sub: "Trader keeps the majority" },
            { value: "Concept", label: "Current stage", sub: "PRD + landing page, pre-build" },
          ]}
        />
      </Section>

      <Closing title="One of a few ideas I'd bet on.">
        <p>This is a live problem, not a shipped product. If the model or the market is something you'd want to dig into together, I'd like to hear your read on it.</p>
        <p><a className="cs-link" href="/#contact">Let's talk →</a></p>
      </Closing>
    </CaseStudy>
  );
}
