import { SectionHead } from "@/components/ui/SectionHead";
import { HOW_IT_WORKS } from "@/lib/data/marketing";

export function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <SectionHead center eyebrow="How it works" title="Three steps. Well, a few thousand." />
        <ol className="steps">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.title}>
              <span className="n">{i + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
