import type { Metadata } from "next";
import { DownloadBand } from "@/components/layout/DownloadBand";
import { OrganizerDashboard } from "@/components/teams/OrganizerDashboard";
import { PlanCard } from "@/components/teams/PlanCard";
import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { Eyebrow, SectionHead } from "@/components/ui/SectionHead";
import { CONTACT_EMAIL } from "@/lib/data/site";
import { ORGANIZER_FAQ, PLANS, WHY_TEAMS } from "@/lib/data/teams";

export const metadata: Metadata = {
  title: "For teams & workplaces",
  description:
    "Run office step leagues, department challenges and charity walks with Trailmates Teams. Organizer dashboard, inclusive scoring and simple per-member pricing.",
};

export default function TeamsPage() {
  return (
    <>
      <section className="page-hero teams-hero">
        <div className="wrap ph-grid">
          <div>
            <Eyebrow dot>For workplaces &amp; clubs</Eyebrow>
            <h1>A step challenge your whole company will actually join.</h1>
            <p className="lede">
              Trailmates Teams runs office leagues, charity walks and department match-ups with almost no admin. People
              play with the app they already like; organizers get a simple dashboard.
            </p>
            <div className="btn-row">
              <Button href={`mailto:${CONTACT_EMAIL}`}>Plan a challenge</Button>
              <Button href="#pricing" variant="ghost">
                See pricing
              </Button>
            </div>
          </div>
          <OrganizerDashboard />
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <SectionHead center eyebrow="Why teams choose Trailmates" title="Wellness that feels like a game night." />
          <InfoGrid items={WHY_TEAMS} />
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Pricing"
            title="Simple plans for crews of every size."
            body="Every plan includes streaks, boosts and friendly leaderboards. Nothing in a challenge is ever for sale."
          />
          <div className="plans">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq-sec">
        <div className="wrap narrow">
          <SectionHead center eyebrow="Organizer FAQ" title="Before you roll it out." />
          <FaqList items={ORGANIZER_FAQ} />
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
