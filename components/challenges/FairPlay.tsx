import { Icon } from "@/components/ui/Icon";
import { FAIR_PLAY } from "@/lib/data/challenges";

export function FairPlay() {
  return (
    <section className="fair">
      <div className="wrap fair-grid">
        {FAIR_PLAY.map((card) => (
          <div key={card.title} className="fair-card">
            <span className="pm-i">
              <Icon name={card.icon} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
