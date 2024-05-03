import type { Metadata } from "next";
import Image from "next/image";
import { FairPlay } from "@/components/challenges/FairPlay";
import { FormatGrid } from "@/components/challenges/FormatGrid";
import { WeekTimeline } from "@/components/challenges/WeekTimeline";
import { DownloadBand } from "@/components/layout/DownloadBand";
import { Phone } from "@/components/phone/Phone";
import { AppScreen } from "@/components/phone/screens";
import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { Eyebrow, SectionHead } from "@/components/ui/SectionHead";
import { PLAYER_FAQ } from "@/lib/data/challenges";

export const metadata: Metadata = {
  title: "Challenge formats",
  description:
    "Team relays, weekend sprints, route quests, office leagues and more. See how Trailmates step challenges work and how fair play is built in.",
};

export default function ChallengesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap ph-grid">
          <div>
            <Eyebrow dot>Challenges</Eyebrow>
            <h1>Six ways to play. All of them friendly.</h1>
            <p className="lede">
              From a two-person weekend sprint to a season-long office league, every format runs itself. You bring the
              crew; Trailmates handles the scoring, reminders and recap.
            </p>
            <Button href="/app" chevron>
              See a challenge in the app
            </Button>
          </div>
          <div className="ph-art">
            <Phone>
              <AppScreen screen="challenge" />
            </Phone>
            <Image className="ph-walker" src="/images/walker-red.webp" alt="" width={256} height={366} />
          </div>
        </div>
      </section>

      <section className="formats">
        <div className="wrap">
          <SectionHead eyebrow="Formats" title="Pick the one that fits your people." />
          <FormatGrid />
        </div>
      </section>

      <section className="week">
        <div className="wrap wk-grid">
          <div>
            <Eyebrow>A week on the trail</Eyebrow>
            <h2>What a Team Relay feels like.</h2>
            <p>
              Challenges have a rhythm, with a few moments that bring the group together and plenty of quiet in
              between.
            </p>
          </div>
          <WeekTimeline />
        </div>
      </section>

      <FairPlay />

      <section className="faq-sec" id="faq">
        <div className="wrap narrow">
          <SectionHead center eyebrow="Player FAQ" title="Questions from the trail." />
          <FaqList items={PLAYER_FAQ} />
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
