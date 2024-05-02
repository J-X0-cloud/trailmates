import Link from "next/link";
import { RouteMap } from "@/components/map/RouteMap";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHead";
import { FEATURED_ROUTES, ROUTES } from "@/lib/data/routes";

export function RoutesStrip() {
  return (
    <section className="routes-strip">
      <div className="wrap">
        <div className="sec-head split-head">
          <div>
            <Eyebrow>Virtual routes</Eyebrow>
            <h2>Somewhere new every week.</h2>
          </div>
          <Button href="/routes" variant="ghost" chevron>
            Browse all routes
          </Button>
        </div>
        <div className="rgrid">
          {FEATURED_ROUTES.map(({ key, progress, team }) => {
            const route = ROUTES[key];
            return (
              <Link key={key} className="rcard" href={`/routes#${key}`}>
                <RouteMap route={key} progress={progress} pin={team} />
                <div>
                  <b>{route.name}</b>
                  <small>
                    {route.miles} mi &middot; {route.stops.length} checkpoints
                  </small>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
