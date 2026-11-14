import { CaseStudy, Section, Prose, Stats, Steps, Cards, Screens, Palette, Gallery, Callout, Closing } from "./CaseKit";
import presolvLoginUrl from "../../imports/presolv-login.png";
import presolvDashboardUrl from "../../imports/presolv-dashboard.png";
import presolvRaiseTypeUrl from "../../imports/presolv-raise-01-type.png";
import presolvRaisePartiesUrl from "../../imports/presolv-raise-02-parties.png";
import presolvRaiseAmountUrl from "../../imports/presolv-raise-03-amount.png";
import presolvRaiseDetailsUrl from "../../imports/presolv-raise-04-details.png";
import presolvRaiseReviewUrl from "../../imports/presolv-raise-05-review.png";
import presolvDocumentUploadUrl from "../../imports/presolv-document-upload.png";
import presolvDisputeDetailsUrl from "../../imports/presolv-dispute-details.png";
import presolvOutcomeUrl from "../../imports/presolv-outcome.png";

export function Presolv() {
  return (
    <CaseStudy
      path="/projects/presolv360"
      title="Online dispute resolution, simplified"
      summary="A response to Presolv360's UI/UX design challenge: a complete case-filing-to-resolution experience for people who have never dealt with mediation or arbitration before."
      overview={[
        { label: "Role", value: "Solo designer · Design challenge" },
        { label: "Brief", value: "Presolv360 UI/UX assignment" },
        { label: "Platform", value: "Web · Legal tech · ODR" },
        { label: "Scope", value: "10 screens, sign-in to case closure" },
      ]}
      cover={presolvDashboardUrl}
      coverAlt="Presolv360 case dashboard"
    >
      <Section label="The challenge" title="Legal process, designed for people who dread it">
        <Prose>
          <p>
            Presolv360 is a real online dispute resolution (ODR) platform: legal disputes settled through mediation, arbitration and negotiation, without a courtroom. The brief was direct. Most people who reach the platform have never filed a legal claim and have no idea what "arbitration" involves. They arrive anxious, not curious.
          </p>
          <p>
            The assignment asked for five screens: Raise a Dispute, Document Upload, Case Dashboard, Resolution Room and Outcome. I treated it as one connected product. What does someone need to see the moment they land, and what do they need to feel the moment their case closes?
          </p>
        </Prose>
        <Stats
          items={[
            { value: "10", label: "Screens designed" },
            { value: "5", label: "Steps in the filing wizard" },
            { value: "3", label: "Resolution paths" },
            { value: "Solo", label: "Brief to hi-fi prototype" },
          ]}
        />
      </Section>

      <Section label="Design process" title="Four stages, one through-line">
        <Steps
          items={[
            { title: "Unpack the brief", desc: "Reframed the five requested screens around one constraint: most claimants have never filed a legal case and don't know what mediation or arbitration involves. Every screen had to explain itself." },
            { title: "Map the full loop", desc: "Added a sign-in and a case dashboard the brief didn't ask for. A filing flow with nowhere to land afterwards isn't a product, it's a form." },
            { title: "Break the hardest screen into steps", desc: "The single 'Raise a Dispute' screen became a 5-step wizard (Type, Parties, Amount, Details, Review), each with its own validation and a persistent progress bar." },
            { title: "Prototype end to end", desc: "Delivered a clickable Figma prototype covering the full case lifecycle: sign-in, dashboard, filing, document upload, case tracking and resolution." },
          ]}
        />
      </Section>

      <Section label="Design decisions" title="Four calls that shaped the flow">
        <Cards
          items={[
            { title: "One form is one too many asks", body: "A single intake form asking for case type, parties, claim amount and evidence at once is the fastest way to lose a first-time filer. Five focused steps mean one decision per screen." },
            { title: "Status has to read at a glance", body: "'Mediation' and 'Hearing scheduled' mean nothing to a first-time filer. A five-stage stepper (Filed → Review → Mediation → Hearing → Resolved) sits on every case page so status never needs explaining." },
            { title: "Evidence needs structure, not a folder", body: "Document Upload sorts files into Agreements, Invoices, Payment Proofs, Notices and Identity Proof, with per-file OCR status, so both parties always know what's on record." },
            { title: "Closure should feel final", body: "The Outcome screen states the settlement amount, payment schedule and a legally binding notice up front, plus a full case timeline, so a resolution never feels ambiguous." },
          ]}
        />
      </Section>

      <Section label="Visual language" title="Confidence, without noise">
        <Prose>
          <p>
            One confident blue carries trust and action. Status colour is reserved for case-state feedback and never used as decoration, so someone scanning a dashboard of a dozen disputes can tell instantly which ones need them.
          </p>
        </Prose>
        <Palette
          items={[
            { name: "Trust Blue", hex: "#2563EB", role: "Primary actions & brand" },
            { name: "Deep Indigo", hex: "#1E3A8A", role: "Hero gradient, authority" },
            { name: "Success Green", hex: "#16A34A", role: "Resolution & confirmation" },
            { name: "Alert Amber", hex: "#F59E0B", role: "Pending & attention states" },
          ]}
        />
      </Section>

      <Section label="Key screens" title="The experience in detail">
        <Screens
          items={[
            { tag: "Entry point", title: "Sign in: trust before task", image: presolvLoginUrl, desc: "A split layout puts reassurance beside the form: bank-grade encryption, real-time tracking, and \"Trusted by 10,000+ users\". Filing a legal claim is an anxious first move, not a routine login." },
            { tag: "Home base", title: "Case dashboard", image: presolvDashboardUrl, desc: "The screen the brief didn't ask for. Total cases, pending reviews, scheduled hearings and a filed-vs-resolved trend sit above a prioritised list of active disputes, so a returning user lands on progress." },
            { tag: "5-step flow", title: "Raise a dispute: guided filing wizard", image: presolvRaiseTypeUrl, desc: "What the brief called one screen became five, each behind its own progress step. Inline reassurance (\"Payment disputes typically resolve within 2–4 weeks\") keeps first-time filers moving." },
            { tag: "Evidence", title: "Document upload", image: presolvDocumentUploadUrl, desc: "A categorised upload centre with per-file OCR status and upload stats, so evidence never sits in an undifferentiated pile." },
            { tag: "Case tracking", title: "Dispute details & resolution room", image: presolvDisputeDetailsUrl, desc: "The single source of truth for a case in progress: the five-stage stepper, every participant including the mediator, documents, an activity timeline, and a direct way into the live session." },
            { tag: "Closure", title: "Outcome", image: presolvOutcomeUrl, desc: "Settlement amount, payment schedule and a legally binding notice, stated plainly, plus a timeline recap and a feedback prompt, so both parties leave with a clear, final record." },
          ]}
        />
      </Section>

      <Callout label="Key decision" title="The 5-step filing wizard">
        <Prose>
          <p>
            'Raise a Dispute' was the highest-risk screen in the flow: the moment a first-time user either commits or leaves. I broke it into five short steps instead of one long form, each validated on its own, with a persistent progress bar so users always know how much is left.
          </p>
          <p>
            Small details carry the weight. A 700-character cap keeps issue summaries scannable for whoever reviews the case next, and contextual tips tell first-time filers what happens after they submit.
          </p>
        </Prose>
        <Gallery
          tall
          items={[
            { src: presolvRaiseTypeUrl, label: "01 Type" },
            { src: presolvRaisePartiesUrl, label: "02 Parties" },
            { src: presolvRaiseAmountUrl, label: "03 Amount" },
            { src: presolvRaiseDetailsUrl, label: "04 Details" },
            { src: presolvRaiseReviewUrl, label: "05 Review" },
          ]}
        />
        <Stats items={[{ value: "5", label: "Guided steps, not 1 form" }, { value: "700", label: "Character cap on summaries" }, { value: "3", label: "Resolution paths" }]} />
      </Callout>

      <Section label="Outcome" title="What the challenge produced">
        <Stats
          items={[
            { value: "10", label: "Screens delivered", sub: "Sign-in through case closure" },
            { value: "5-step", label: "Filing wizard", sub: "Replacing one dense intake form" },
            { value: "Solo", label: "Designer", sub: "Brief to hi-fi prototype" },
            { value: "Figma", label: "Clickable prototype", sub: "Full desktop flow" },
          ]}
        />
      </Section>

      <Closing title="Thank you for scrolling along.">
        <p>Legal products don't need to feel legal. They need to be clear, calm, and honest about exactly where you stand.</p>
      </Closing>
    </CaseStudy>
  );
}
