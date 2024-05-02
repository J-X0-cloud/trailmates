import { StatusBar } from "@/components/phone/StatusBar";
import { TabBar } from "@/components/phone/TabBar";
import { Avatar } from "@/components/ui/Avatar";
import { Bar } from "@/components/ui/Bar";
import { Icon } from "@/components/ui/Icon";
import { CHALLENGE, CREW } from "@/lib/data/crew";
import { formatSteps } from "@/lib/format";
import { crewTotal, leadMargin } from "@/lib/scoring";

export function ChallengeScreen() {
  const { home, away } = CHALLENGE;
  const top = Math.max(...CREW.map((m) => m.stepsToday));
  const share = Math.round((home.steps / (home.steps + away.steps)) * 100);

  return (
    <>
      <StatusBar dark />
      <div className="s-hero">
        <small>
          {CHALLENGE.format} &middot; Day {CHALLENGE.day} of {CHALLENGE.days}
        </small>
        <div className="vs">
          <div>
            <span className="badge-t" style={{ background: home.badge }}>
              {home.initials}
            </span>
            <b>{home.name}</b>
            <em>{formatSteps(home.steps)}</em>
          </div>
          <i>vs</i>
          <div>
            <span className="badge-t" style={{ background: away.badge }}>
              {away.initials}
            </span>
            <b>{away.name}</b>
            <em>{formatSteps(away.steps)}</em>
          </div>
        </div>
        <div className="split light">
          <i style={{ width: `${share}%` }} />
        </div>
        <p>
          {formatSteps(leadMargin(home.steps, away.steps))} steps ahead &middot; {CHALLENGE.days - CHALLENGE.day} days left
        </p>
      </div>
      <div className="s-body pad-top">
        <div className="s-sub">
          <h6>Your crew today</h6>
          <small>{formatSteps(crewTotal(CREW))} steps</small>
        </div>
        <ul className="crew">
          {CREW.map((member) => (
            <li key={member.initials}>
              <Avatar initials={member.initials} color={member.color} />
              <div>
                <b>{member.name}</b>
                <Bar percent={(member.stepsToday / top) * 100} thin />
              </div>
              <span>{formatSteps(member.stepsToday)}</span>
            </li>
          ))}
        </ul>
        <button className="s-btn" type="button" tabIndex={-1}>
          <Icon name="clap" /> Send the crew a cheer
        </button>
      </div>
      <TabBar active="challenge" />
    </>
  );
}
