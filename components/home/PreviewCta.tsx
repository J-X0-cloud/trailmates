import { Phone } from "@/components/phone/Phone";
import { AppScreen } from "@/components/phone/screens";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHead";

export function PreviewCta() {
  return (
    <section className="preview-cta">
      <div className="wrap pc-grid">
        <div>
          <Eyebrow>Try before you download</Eyebrow>
          <h2>Tap through the app right here.</h2>
          <p>
            Flip between the five core screens, from today&rsquo;s ring to the live route map, in our interactive
            preview.
          </p>
          <Button href="/app" chevron>
            Open the app preview
          </Button>
        </div>
        <div className="pc-phones">
          <Phone className="sm">
            <AppScreen screen="today" />
          </Phone>
          <Phone className="sm">
            <AppScreen screen="ranks" />
          </Phone>
        </div>
      </div>
    </section>
  );
}
