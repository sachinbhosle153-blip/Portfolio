import { CaseStudy, Section, Prose, Stats, Steps, Cards, Gallery, Callout, Closing } from "./CaseKit";
import watchHomeUrl from "../../imports/jio-watch-home.png";
import watchMapDarkUrl from "../../imports/jio-watch-map-dark.png";
import watchMapLightUrl from "../../imports/jio-watch-map-light.png";
import watchActivityUrl from "../../imports/jio-watch-activity.png";
import chartStepsUrl from "../../imports/jio-chart-steps.png";
import chartTargetUrl from "../../imports/jio-chart-target.png";
import chartDailyUrl from "../../imports/jio-chart-daily.png";
import tvBlueUrl from "../../imports/jio-tv-blue.jpg";
import tvPinkUrl from "../../imports/jio-tv-pink.jpg";
import tvGreenUrl from "../../imports/jio-tv-green.jpg";

export function JioDesignSystem() {
  return (
    <CaseStudy
      path="/projects/jio-design-system"
      title="System of Interaction: JIO's design system at scale"
      summary="Core contributor to System of Interaction (SOI), JIO's cross-platform design system spanning wearables, TV, mobile and web. I worked with design system architects and engineers to standardise components, tokens and documentation adopted across 20+ product teams at JIO AI."
      overview={[
        { label: "Role", value: "Product designer · Core contributor" },
        { label: "Company", value: "JIO Platforms AI" },
        { label: "Platforms", value: "Watch · TV · Mobile · Web" },
        { label: "Outcome", value: "Adopted across 20+ teams" },
      ]}
      cover={tvBlueUrl}
      coverAlt="JIO TV interface with ambient blue lighting"
    >
      <Section label="The challenge" title="20+ teams building in silos with no shared language">
        <Prose>
          <p>
            When I joined JIO Platforms AI, product teams were building independently, each with its own colour definitions, component patterns and no documentation standards. The result was visual and experiential fragmentation across one of India's largest tech platforms.
          </p>
          <p>
            As a core contributor on the SOI team, I worked alongside design system architects, product designers and engineers: auditing the existing landscape, implementing the token foundation, building platform-specific UI kits, and driving adoption across 20+ squads covering mobile, wearable, TV and web.
          </p>
        </Prose>
        <Stats
          items={[
            { value: "20+", label: "Teams building alone" },
            { value: "5", label: "Platforms, no shared tokens" },
            { value: "7×", label: "Brand blue defined differently" },
            { value: "0", label: "Watch & TV guidelines" },
          ]}
        />
      </Section>

      <Section label="Design process" title="Four stages, one through-line">
        <Steps
          items={[
            { title: "Audit", desc: "Catalogued UI patterns across every JIO surface (mobile, TV, watch, web) to map inconsistencies and find the gaps the shared system needed to close." },
            { title: "Foundation", desc: "Contributed to the token architecture: colour roles, type scale, spacing, elevation and motion curves, all mapped to light and dark modes." },
            { title: "Build", desc: "Built component libraries and surface-specific UI kits for wearables, large-screen TV and mobile, all sharing one token foundation, in close collaboration with engineering." },
            { title: "Scale", desc: "Documented standards, ran onboarding sessions with product teams, and supported adoption hands-on across 20+ internal squads." },
          ]}
        />
      </Section>

      <Section label="Discovery" title="What the audit revealed">
        <Cards
          items={[
            { title: "Every team had its own colour definitions", body: "Colour was hardcoded differently everywhere. With no shared tokens, the same brand blue had seven different hex values across surfaces." },
            { title: "Watch and TV were afterthoughts", body: "Mobile-first thinking had left wearable and large-screen experiences with no design guidance. Each was solved ad hoc by individual engineers." },
            { title: "Dark mode was inconsistent", body: "Some products inverted, some had separate designs, and none used a shared semantic token layer to stay in sync." },
            { title: "Data visualisation had no standards", body: "Charts and health metrics looked different in every product, with no chart conventions, colour mappings or accessibility guidelines." },
          ]}
        />
      </Section>

      <Section label="Wearable design" title="JIO Watch, built from zero">
        <Prose>
          <p>
            JIO's wearable platform had no design language of its own. With the core SOI team I helped build it from the ground up: interaction patterns, touch-target rules, type hierarchy for tiny screens, and UI kits for smart-home control, navigation, and health and fitness tracking.
          </p>
          <p>
            Light and dark variants were designed in full, with the brand colour system adapted to the contrast and legibility needs of watch displays.
          </p>
        </Prose>
        <Gallery items={[{ src: watchMapDarkUrl, label: "Navigation · dark" }, { src: watchHomeUrl, label: "Home" }, { src: watchMapLightUrl, label: "Navigation · light" }]} />
        <Stats items={[{ value: "3", label: "UI kits" }, { value: "2", label: "Colour modes" }, { value: "40+", label: "Watch screens" }]} />
      </Section>

      <Section label="Data visualisation" title="Charts that work on a 45 mm screen">
        <Prose>
          <p>
            Health data on a wearable has to be readable at a tiny scale. I contributed to a standard chart library for JIO Watch: line charts for trends, rings for goal tracking, and bars for daily activity.
          </p>
          <p>
            Each chart type has colour roles, accessible contrast ratios and interaction states, so the data still means something on the smallest screen in the ecosystem.
          </p>
        </Prose>
        <Gallery items={[{ src: chartStepsUrl, label: "Step activity" }, { src: chartTargetUrl, label: "Target ring" }, { src: chartDailyUrl, label: "Daily activity" }]} />
      </Section>

      <Section label="Large screen & ambient AR" title="Colour theory at living-room scale">
        <Prose>
          <p>
            For JIO's streaming platform I helped explore ambient lighting, an AR concept that extends on-screen content into the room through dynamic background colour, within the system's colour framework and accessibility standards.
          </p>
        </Prose>
        <Gallery
          items={[
            { src: tvBlueUrl, label: "Focus · cool blue for cinematic viewing" },
            { src: tvGreenUrl, label: "Natural · relaxed green" },
            { src: tvPinkUrl, label: "Vivid · JIO magenta, high energy" },
          ]}
        />
      </Section>

      <Callout label="Key decision" title="One token layer. Every surface.">
        <Prose>
          <p>
            The core architectural decision behind SOI was a semantic token layer between raw colour values and components. Instead of hardcoding colours per platform, every component referenced a role, like <code>color.interactive.primary</code> or <code>color.surface.elevated</code>, that resolved differently per platform and mode.
          </p>
          <p>
            With the system's architects and engineers, I implemented and extended this pattern across the surfaces I owned. A single token update now propagates across watch, TV, mobile and web, cutting mode switches, rebrands and new platform rollouts from weeks to hours.
          </p>
        </Prose>
        <Stats items={[{ value: "1 layer", label: "Semantic tokens" }, { value: "5×", label: "Platforms, one source" }, { value: "Hours", label: "To roll out a rebrand" }]} />
      </Callout>

      <Section label="Wearable · health tracking" title="Health at a glance">
        <Gallery items={[{ src: watchActivityUrl }, { src: chartStepsUrl }, { src: chartTargetUrl }]} />
      </Section>

      <Section label="Impact" title="Results after rollout">
        <Stats
          items={[
            { value: "20+", label: "Product teams adopted", sub: "Single source of truth across JIO AI" },
            { value: "5", label: "Platforms covered", sub: "Watch, TV, mobile, tablet, web" },
            { value: "4", label: "Design systems built", sub: "Tokens, docs and component libraries" },
            { value: "0→1", label: "Watch & TV language", sub: "Built from scratch for both" },
          ]}
        />
      </Section>

      <Closing title="Thank you for scrolling along.">
        <p>A design system is never finished. It's a living contract between teams, and the real work was earning the trust that made adoption possible.</p>
      </Closing>
    </CaseStudy>
  );
}
