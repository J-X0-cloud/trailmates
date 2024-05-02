import { StatusBar } from "@/components/phone/StatusBar";
import { TabBar } from "@/components/phone/TabBar";
import { Icon } from "@/components/ui/Icon";
import { STREAK_BADGES, STREAK_CALENDAR, TODAY } from "@/lib/data/crew";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

const KEY = [
  { cell: "l1", label: "5k" },
  { cell: "l3", label: "8k" },
  { cell: "l4", label: "10k+" },
  { cell: "l0 rest", label: "Rest day" },
] as const;

export function StreakScreen() {
  const counted = STREAK_CALENDAR.filter((c) => c !== "e" && c !== "f");
  const hit = counted.filter((c) => c !== "l0 rest").length;

  return (
    <>
      <StatusBar />
      <div className="s-body">
        <div className="streak-hero">
          <span className="flame">
            <Icon name="flame" />
          </span>
          <div>
            <b>{TODAY.streakDays}-day streak</b>
            <small>Your longest yet. Keep it lit.</small>
          </div>
        </div>
        <div className="s-card">
          <div className="s-sub">
            <h6>March</h6>
            <small>
              {hit} of {counted.length} days
            </small>
          </div>
          <div className="cal-h">
            {WEEKDAYS.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="cal">
            {STREAK_CALENDAR.map((cell, i) => (
              <i key={i} className={cell} />
            ))}
          </div>
          <div className="cal-key">
            {KEY.map((k) => (
              <span key={k.label}>
                <i className={k.cell} />
                {k.label}
              </span>
            ))}
          </div>
        </div>
        <div className="badges">
          {STREAK_BADGES.map((badge) => (
            <span key={badge.label}>
              <i style={{ background: badge.tint }}>
                <Icon name={badge.icon} />
              </i>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <TabBar active="streak" />
    </>
  );
}
