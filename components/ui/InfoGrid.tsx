import type { IconCard } from "@/types";
import { Icon } from "./Icon";

/** Four-up icon cards used on the app preview and teams pages. */
export function InfoGrid({ items, className = "pm-grid" }: { items: IconCard[]; className?: string }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.title} className="pm">
          <span className="pm-i">
            <Icon name={item.icon} />
          </span>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
