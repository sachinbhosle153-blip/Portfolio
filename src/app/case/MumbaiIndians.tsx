import { CaseStudy, Section, Prose, Stats, Steps, Cards, Screens, Palette, Figure, Callout, Closing } from "./CaseKit";
import jioDesignUrl from "../../imports/image-1.png";
import commandCentreUrl from "../../imports/mi-command-centre.png";
import playerProfileUrl from "../../imports/mi-player-profile.png";
import multiLeagueUrl from "../../imports/mi-multi-league.png";
import valStatsUrl from "../../imports/mi-val-stats.png";
import playerWellnessUrl from "../../imports/mi-player-wellness.png";

export function MumbaiIndians() {
  return (
    <CaseStudy
      path="/projects/mumbai-indians"
      title="Cricket intelligence platform"
      summary="A ground-up redesign of a legacy sports analytics tool, built for coaching staff across 6 global franchises and used daily for auction strategy, player scouting, and game planning."
      overview={[
        { label: "Role", value: "Sole designer" },
        { label: "Client", value: "Mumbai Indians · JIO Platforms AI" },
        { label: "Platform", value: "Web · Multi-league" },
        { label: "Outcome", value: "45 → 500+ users · 10×" },
      ]}
      cover={commandCentreUrl}
      coverAlt="Mumbai Indians command centre dashboard"
    >
      <Section label="The challenge" title="A tool with critical data that nobody wanted to use">
        <Prose>
          <p>
            The Mumbai Indians coaching and strategy staff were sitting on a goldmine of performance data used for decisions with real competitive and financial stakes: auction bids, player scouting, game strategy. But the legacy analytics platform had an adoption rate of just ~45 users. Staff actively avoided it, falling back to spreadsheets and manual research.
          </p>
          <p>
            As the sole designer on this project within JIO Platforms AI, I was responsible for understanding why, and redesigning from the ground up: information architecture, visual system, and a first-of-its-kind multi-league role-switching system.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "~45", label: "Active users at start" },
            { value: "4–6 min", label: "Lost per league switch" },
            { value: "0%", label: "Mobile support" },
            { value: "3 yrs", label: "Since last design update" },
          ]}
        />
      </Section>

      <Section label="Design process" title="Four stages, one through-line">
        <Steps
          items={[
            { title: "Research", desc: "Shadowed coaches and strategy staff across two franchises to understand how decisions were made and where the existing tool broke down." },
            { title: "Define", desc: "Synthesised research into a clear problem statement: staff needed contextual, role-aware data without switching tools or re-authenticating between leagues." },
            { title: "Design", desc: "Built a new information architecture, visual system, and the multi-league role-switching layer, iterating through 4 rounds of concept reviews with coaching staff." },
            { title: "Ship", desc: "Delivered production-ready specs and worked directly with engineering through to launch. The platform went live across 6 franchises." },
          ]}
        />
      </Section>

      <Section label="Discovery & research" title="What the research revealed">
        <Cards
          items={[
            { title: "Data overload, not data scarcity", body: "Staff had access to too much raw data with no hierarchy. The platform needed to surface the right insight at the right moment, not dump everything on screen." },
            { title: "Context switching was the silent killer", body: "Users managing multiple leagues were logging out and back in multiple times per session. Each switch cost 4–6 minutes of lost context." },
            { title: "Trust in the data was low", body: "Coaches distrusted outputs they could not trace. Every data point needed a visible source and update timestamp to earn credibility." },
            { title: "Mobile use was an afterthought", body: "Staff in the dugout needed quick access on phones. The legacy tool was desktop-only, so responsive design was non-negotiable." },
          ]}
        />
      </Section>

      <Section label="Design language" title="Built on the JIO design system">
        <Prose>
          <p>
            The platform was built on JIO's internal design system, a token-based system I contributed to as a core team member. That gave coaching staff the same visual trust signals they already relied on elsewhere in the JIO ecosystem, while the MI platform still carried its own identity through colour and motion.
          </p>
        </Prose>
        <Palette
          items={[
            { name: "Deep Navy", hex: "#001A40", role: "Primary background" },
            { name: "JIO Blue", hex: "#0057B8", role: "Brand accent" },
            { name: "Gold", hex: "#C8A96E", role: "Interactive emphasis" },
            { name: "Charcoal", hex: "#1A1A22", role: "Surface elevation" },
          ]}
        />
        <Figure src={jioDesignUrl} alt="JIO design system screens used in the platform" />
      </Section>

      <Section label="Key screens" title="The experience in detail">
        <Screens
          items={[
            { tag: "Core experience", title: "Command Centre dashboard", image: commandCentreUrl, desc: "Real-time wellness and workload overview with live player metrics, form responses, and upcoming schedules in a single view. Priority-ranked so the most urgent information reads first." },
            { tag: "Analytics layer", title: "Player performance profile", image: playerProfileUrl, desc: "A deep dive into individual player data (batting style, innings, runs, strike rate) with progressive detail that reveals trend lines without overwhelming the reader." },
            { tag: "System feature", title: "Multi-league role switcher", image: multiLeagueUrl, desc: "The key innovation: a persistent profile panel that shows active league participation and lets staff shift context with no re-authentication and no workflow interruption." },
            { tag: "Bowling analytics", title: "Stats & VAL (length variation)", image: valStatsUrl, desc: "Tracks variation across ball length and delivery stats (full toss, yorker, good length, full length) mapped against a pitch visual for a specific match, instead of buried in a spreadsheet." },
            { tag: "Wellness & readiness", title: "Player wellness dashboard", image: playerWellnessUrl, desc: "A daily view for the wellness coach combining GPS load, peak load trends, survey response rates, and player readiness. Injury risk is flagged inline against each player, so at-risk athletes surface immediately." },
          ]}
        />
      </Section>

      <Callout label="Key decision" title="The multi-league role-switching system">
        <Prose>
          <p>
            Staff managing multiple franchises (MI, MI Capetown, MI Emirates and others) previously had to log out and back in when switching between leagues. Each switch destroyed their working context and took 4–6 minutes to restore.
          </p>
          <p>
            I designed a persistent context panel, always reachable from the top bar, that shifts active league and role in a single interaction. Permissions update in real time, data refreshes in the background, and the user stays exactly where they were.
          </p>
          <p>
            A simpler account-switcher dropdown would have shipped faster. But staff needed to compare context across leagues mid-conversation, not just reload into a new one, so I chose the real-time panel over the cheaper option.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "6", label: "Leagues supported" },
            { value: "1 click", label: "Context switching" },
            { value: "0 s", label: "Re-authentication time" },
          ]}
        />
      </Callout>

      <Section label="Impact" title="Results after launch">
        <Stats
          items={[
            { value: "45 → 500+", label: "Active users", sub: "10× growth after launch" },
            { value: "6", label: "Franchises live", sub: "MI, MI Capetown, MI Emirates + 3 more" },
            { value: "0", label: "Re-logins needed", sub: "Removed by the role switcher" },
            { value: "Daily", label: "Active use", sub: "Auctions, scouting, game planning" },
          ]}
        />
        <p className="cv-mono">
          Some details are confidential. The full case study is on{" "}
          <a className="cs-link" href="https://www.behance.net/gallery/195188123/Cricket-Intelligence-Platform" target="_blank" rel="noreferrer">Behance ↗</a>
        </p>
      </Section>

      <Closing title="Thank you for scrolling along.">
        <p>This project reminded me that good design earns trust through clarity, consistency, and craft that serves the people using the product.</p>
      </Closing>
    </CaseStudy>
  );
}
