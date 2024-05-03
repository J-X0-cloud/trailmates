import type { Metadata } from "next";
import { DownloadBand } from "@/components/layout/DownloadBand";
import { RouteMap } from "@/components/map/RouteMap";
import { Phone } from "@/components/phone/Phone";
import { AppScreen } from "@/components/phone/screens";
import { RouteCard } from "@/components/routes/RouteCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHead";
import { TickList } from "@/components/ui/TickList";
import { CUSTOM_ROUTE_TICKS, LIBRARY, ROUTE_STATS } from "@/lib/data/routes";

export const metadata: Metadata = {
  title: "Virtual routes",
  description:
    "Walk hand-drawn virtual routes with your team: coastlines, canyons, mountain lakes and city bridges, with checkpoints and postcards along the way.",
};

export default function RoutesPage() {
  return (
    <>
      <section className="page-hero routes-hero">
        <div className="wrap ph-grid">
          <div>
            <Eyebrow dot>Virtual routes</Eyebrow>
            <h1>Walk the coast from your cul-de-sac.</h1>
            <p className="lede">
              Every route is a hand-drawn map with real-world distances. Your team&rsquo;s combined steps move one
              shared pin, and each checkpoint unlocks a postcard for the whole crew.
            </p>
            <div className="hero-stats">
              {ROUTE_STATS.map((stat) => (
                <div key={stat.label}>
                  <b>{stat.value}</b>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="ph-map">
            <RouteMap route="coast" progress={0.62} className="big-map" pin="LL" />
            <div className="float f3">
              <span className="pm-i sm">
                <Icon name="pin" />
              </span>
              <div>
                <b>Checkpoint unlocked</b>
                <small>Lighthouse point &middot; postcard 3 of 7</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-list">
        <div className="wrap">
          <div className="sec-head split-head">
            <div>
              <Eyebrow>The library</Eyebrow>
              <h2>Six crew favorites.</h2>
            </div>
            <p className="sh-note">
              Distances assume roughly 2,000 steps per mile. Estimated times are for a crew of six averaging 8,000 steps
              a day each.
            </p>
          </div>
          <div className="route-grid">
            {LIBRARY.map(({ key, progress }) => (
              <RouteCard key={key} routeKey={key} progress={progress} />
            ))}
          </div>
        </div>
      </section>

      <section className="custom">
        <div className="wrap cu-grid">
          <div className="cu-art">
            <Phone>
              <AppScreen screen="route" />
            </Phone>
          </div>
          <div>
            <Eyebrow>Trailmates Plus</Eyebrow>
            <h2>Draw your own route.</h2>
            <p>
              Plan a route between any two places you care about, like the walk from your old campus to your first
              apartment, or the distance to a teammate&rsquo;s hometown. Add your own checkpoints and photos and the
              map is ready for your crew in seconds.
            </p>
            <TickList items={CUSTOM_ROUTE_TICKS} />
            <Button href="/teams#pricing" chevron>
              See Plus pricing
            </Button>
          </div>
        </div>
      </section>

      <DownloadBand />
    </>
  );
}
