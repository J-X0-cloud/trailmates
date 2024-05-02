import clsx from "clsx";
import { Phone } from "@/components/phone/Phone";
import { AppScreen } from "@/components/phone/screens";
import { Eyebrow } from "@/components/ui/SectionHead";
import { TickList } from "@/components/ui/TickList";
import { FEATURES } from "@/lib/data/marketing";

export function FeatureRows() {
  return (
    <section className="features">
      <div className="wrap">
        {FEATURES.map((feature, i) => (
          <div key={feature.screen} className={clsx("feat", i % 2 === 1 && "flip")}>
            <div className="feat-copy">
              <Eyebrow>{feature.eyebrow}</Eyebrow>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <TickList items={feature.ticks} />
            </div>
            <div className={`feat-art art-${feature.screen}`}>
              <Phone>
                <AppScreen screen={feature.screen} />
              </Phone>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
