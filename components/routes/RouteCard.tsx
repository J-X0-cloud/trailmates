import { RouteMap } from "@/components/map/RouteMap";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/lib/data/routes";
import type { RouteKey } from "@/types";

export function RouteCard({ routeKey, progress }: { routeKey: RouteKey; progress: number }) {
  const route = ROUTES[routeKey];
  return (
    <article className="route" id={route.key}>
      <div className="route-map-wrap">
        <RouteMap route={route.key} progress={progress} width={320} height={200} />
        <span className={`lvl lvl-${route.difficulty.toLowerCase()}`}>{route.difficulty}</span>
      </div>
      <div className="route-body">
        <h3>{route.name}</h3>
        <p>{route.blurb}</p>
        <div className="route-meta">
          <span>
            <Icon name="shoe" />
            {route.miles} mi
          </span>
          <span>
            <Icon name="pin" />
            {route.stops.length} checkpoints
          </span>
          <span>
            <Icon name="clock" />
            {route.duration}
          </span>
        </div>
        <ol className="stops">
          {route.stops.map((stop) => (
            <li key={stop}>{stop}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
