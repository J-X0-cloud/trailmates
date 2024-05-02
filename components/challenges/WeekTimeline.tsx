import { RELAY_WEEK } from "@/lib/data/challenges";

export function WeekTimeline() {
  return (
    <ol className="timeline">
      {RELAY_WEEK.map((moment) => (
        <li key={moment.day}>
          <span className="tl-d">{moment.day}</span>
          <div>
            <h4>{moment.title}</h4>
            <p>{moment.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
