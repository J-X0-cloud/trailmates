import { StatusBar } from "@/components/phone/StatusBar";
import { StepRing } from "@/components/phone/StepRing";
import { TabBar } from "@/components/phone/TabBar";
import { Avatar } from "@/components/ui/Avatar";
import { Bar } from "@/components/ui/Bar";
import { Icon } from "@/components/ui/Icon";
import { ACTIVE_ROUTE, CHALLENGE, ME, TODAY } from "@/lib/data/crew";
import { ROUTES } from "@/lib/data/routes";
import { formatSteps } from "@/lib/format";

export function TodayScreen() {
  const route = ROUTES[ACTIVE_ROUTE.key];
  const total = CHALLENGE.home.steps + CHALLENGE.away.steps;
  const leading = CHALLENGE.home.steps > CHALLENGE.away.steps;

  return (
    <>
      <StatusBar />
      <div className="s-body">
        <div className="s-top">
          <div>
            <small>{TODAY.dateLabel}</small>
            <h5>Morning, {ME.name}</h5>
          </div>
          <Avatar initials={ME.initials} color={ME.color} />
        </div>
        <div className="s-card ring-card">
          <StepRing
            fraction={TODAY.steps / TODAY.goal}
            label={formatSteps(TODAY.steps)}
            sub={`of ${formatSteps(TODAY.goal)} steps`}
          />
          <div className="chips">
            <span>
              <Icon name="flame" />
              <b>{TODAY.streakDays}</b> day streak
            </span>
            <span>
              <Icon name="shoe" />
              <b>{TODAY.miles}</b> mi
            </span>
            <span>
              <Icon name="clock" />
              <b>{TODAY.activeMinutes}</b> min
            </span>
          </div>
        </div>
        <div className="s-card mini-vs">
          <div className="mv-head">
            <small>
              {CHALLENGE.format} &middot; Day {CHALLENGE.day} of {CHALLENGE.days}
            </small>
            <em>{leading ? "Leading" : "Chasing"}</em>
          </div>
          <div className="mv-row">
            <b>{CHALLENGE.home.name}</b>
            <b>{CHALLENGE.away.name}</b>
          </div>
          <div className="split">
            <i style={{ width: `${Math.round((CHALLENGE.home.steps / total) * 100)}%` }} />
          </div>
          <div className="mv-row mv-n">
            <span>{formatSteps(CHALLENGE.home.steps)}</span>
            <span>{formatSteps(CHALLENGE.away.steps)}</span>
          </div>
        </div>
        <div className="s-card mini-route">
          <div>
            <Icon name="map" />
          </div>
          <div>
            <b>{route.name}</b>
            <small>
              {ACTIVE_ROUTE.milesDone} of {route.miles} mi &middot; next: {ACTIVE_ROUTE.nextStop}
            </small>
            <Bar percent={ACTIVE_ROUTE.progress * 100} />
          </div>
        </div>
      </div>
      <TabBar active="today" />
    </>
  );
}
