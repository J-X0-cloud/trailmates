import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { QUOTES } from "@/lib/data/marketing";

export function Quotes() {
  return (
    <section className="quotes">
      <div className="wrap">
        <SectionHead center eyebrow="From the trail" title="Crews who kept walking." />
        <div className="qgrid">
          {QUOTES.map((q) => (
            <figure key={q.name} className="quote">
              <Image src={q.avatar} alt="" width={256} height={277} />
              <blockquote>&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption>
                <b>{q.name}</b>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
