import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { TickList } from "@/components/ui/TickList";
import type { Plan } from "@/types";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={clsx("plan", plan.featured && "hot")}>
      {plan.featured && <span className="tag">Most popular</span>}
      <h3>{plan.name}</h3>
      <div className="price">
        <b>{plan.price}</b>
        <small>{plan.period}</small>
      </div>
      <TickList items={plan.features} />
      <Button href={plan.cta.href} variant={plan.featured ? "lagoon" : "ghost"}>
        {plan.cta.label}
      </Button>
    </div>
  );
}
