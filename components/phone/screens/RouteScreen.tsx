import { RouteMap } from "@/components/map/RouteMap";
import { StatusBar } from "@/components/phone/StatusBar";
import { TabBar } from "@/components/phone/TabBar";
import { Avatar } from "@/components/ui/Avatar";
import { Bar } from "@/components/ui/Bar";
import { Icon } from "@/components/ui/Icon";
import { ACTIVE_ROUTE, CREW, ME } from "@/lib/data/crew";
import { ROUTES } from "@/lib/data/routes";

export function RouteScreen() {
  const route = ROUTES[ACTIVE_ROUTE.key];
  const pct = Math.round(ACTIVE_ROUTE.progress * 100);

  return (
    <>
      <div className="s-map">
        <RouteMap route={route.key} progress={ACTIVE_ROUTE.progress} className="phone-map" pin={ME.initials} width={290} height={400} />
        <StatusBar />
        <div className="map-chip">
          <Icon name="users" /> {ACTIVE_ROUTE.walkingNow} walking now
        </div>
      </div>
      <div className="sheet">
        <i className="grab" />
        <div className="s-sub">
          <h6>{route.name}</h6>
          <small>{pct}%</small>
        </div>
        <Bar percent={pct} />
        <div className="sheet-row">
          <span>
            <Icon name="pin" />
          </span>
          <div>
            <b>{ACTIVE_ROUTE.nextStop}</b>
            <small>{ACTIVE_ROUTE.milesToNext} mi to go &middot; unlocks a postcard</small>
          </div>
        </div>
        <div className="stack">
          {CREW.map((member) => (
            <Avatar key={member.initials} initials={member.initials} color={member.color} />
          ))}
          <small>
            {ACTIVE_ROUTE.milesDone} of {route.miles} mi
          </small>
        </div>
      </div>
      <TabBar active="route" />
    </>
  );
}
