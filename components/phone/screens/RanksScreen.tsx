import clsx from "clsx";
import { StatusBar } from "@/components/phone/StatusBar";
import { TabBar } from "@/components/phone/TabBar";
import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { BOARDS, PODIUM, RANKS } from "@/lib/data/crew";

export function RanksScreen() {
  return (
    <>
      <StatusBar />
      <div className="s-body">
        <div className="s-top">
          <h5>Leaderboard</h5>
          <small className="pill">This week</small>
        </div>
        <div className="seg">
          {BOARDS.map((board, i) => (
            <span key={board} className={clsx(i === 0 && "on")}>
              {board}
            </span>
          ))}
        </div>
        <div className="podium">
          {PODIUM.map((p) => (
            <div key={p.initials} className={`pod p${p.place}`}>
              <Avatar initials={p.initials} color={p.color} />
              <b>{p.name}</b>
              <small>{p.weekly}</small>
              <div className="step">{p.place}</div>
            </div>
          ))}
        </div>
        <ul className="ranks">
          {RANKS.map((row) => (
            <li key={row.initials}>
              <em>{row.rank}</em>
              <Avatar initials={row.initials} color={row.color} />
              <b>{row.name}</b>
              <span>{row.weeklySteps}</span>
              {row.move === "flat" ? <i className="mv-flat" /> : <Icon name={row.move} className={`ic mv mv-${row.move}`} />}
            </li>
          ))}
        </ul>
        <p className="s-note">
          <Icon name="heart" /> Everyone who hits 5k a day earns a trail badge.
        </p>
      </div>
      <TabBar active="ranks" />
    </>
  );
}
