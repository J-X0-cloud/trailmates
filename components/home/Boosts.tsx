import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { BOOSTS } from "@/lib/data/marketing";

export function Boosts() {
  return (
    <section className="boosts">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Trail boosts"
          title="Little power-ups, big grins."
          body="Boosts add a bit of chaos to the week without turning it into a grind. They are earned by walking and helping your team, never sold."
        />
        <div className="bgrid">
          {BOOSTS.map((boost) => (
            <div key={boost.title} className="boost">
              <Image src={boost.image} alt="" width={128} height={124} />
              <h4>{boost.title}</h4>
              <p>{boost.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
