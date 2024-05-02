import { Mark } from "@/components/brand/Mark";
import { Bar } from "@/components/ui/Bar";
import { LEAGUE } from "@/lib/data/teams";
import { formatSteps } from "@/lib/format";

const BAR_SCALE = 1.3;

export function OrganizerDashboard() {
  const leader = LEAGUE.table[0]?.steps ?? 1;
  return (
    <div className="dash" id="admin" aria-label="Organizer dashboard preview">
      <div className="dash-top">
        <b>
          <Mark /> {LEAGUE.name}
        </b>
        <span className="pill">
          Week {LEAGUE.week} of {LEAGUE.weeks}
        </span>
      </div>
      <div className="kpis">
        {LEAGUE.kpis.map((kpi) => (
          <div key={kpi.label}>
            <small>{kpi.label}</small>
            <b>{kpi.value}</b>
            <em>{kpi.note}</em>
          </div>
        ))}
      </div>
      <div className="dash-mid">
        <div className="dash-chart">
          <small>Daily league steps (thousands)</small>
          <svg viewBox="0 0 310 150" aria-hidden="true">
            <g stroke="var(--line)">
              <path d="M0 145h310M0 95h310M0 45h310" />
            </g>
            {LEAGUE.daily.map((value, i) => (
              <rect
                key={i}
                x={12 + i * 25}
                y={Math.round(145 - value * BAR_SCALE)}
                width="16"
                height={Math.round(value * BAR_SCALE)}
                rx="4"
                fill={i < LEAGUE.daily.length - 1 ? "var(--lagoon)" : "var(--coral)"}
              />
            ))}
          </svg>
        </div>
        <div className="dash-table">
          <small>Team table</small>
          <table>
            <tbody>
              {LEAGUE.table.map((row) => (
                <tr key={row.team}>
                  <td>
                    <em>{row.rank}</em>
                    {row.team}
                  </td>
                  <td>{formatSteps(row.steps)}</td>
                  <td>
                    <Bar percent={(row.steps / leader) * 100} thin />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
