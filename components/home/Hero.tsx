import { StoreButtons } from "@/components/brand/StoreButtons";
import { TrailBand } from "@/components/layout/TrailBand";
import { Phone } from "@/components/phone/Phone";
import { AppScreen } from "@/components/phone/screens";
import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHead";
import { TODAY } from "@/lib/data/crew";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Eyebrow dot>The social step-challenge game</Eyebrow>
          <h1>
            Every step moves your whole crew <span className="hl">forward.</span>
          </h1>
          <p className="lede">
            Trailmates turns everyday walking into a team game. Join friends on virtual routes, keep streaks alive
            together and climb leaderboards that stay friendly.
          </p>
          <StoreButtons />
          <p className="fine">
            <Icon name="check" /> Free to play &middot; syncs with Apple Health and Health Connect
          </p>
        </div>
        <div className="hero-art">
          <Phone className="tilt">
            <AppScreen screen="route" />
          </Phone>
          <div className="float f1">
            <Avatar initials="DO" color={1} />
            <div>
              <b>Dev just added 2,140 steps</b>
              <small>Lunch Loopers &middot; now</small>
            </div>
          </div>
          <div className="float f2">
            <span className="flame sm">
              <Icon name="flame" />
            </span>
            <div>
              <b>{TODAY.streakDays}-day streak</b>
              <small>Keep it lit</small>
            </div>
          </div>
        </div>
      </div>
      <TrailBand />
    </section>
  );
}
