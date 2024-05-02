import Image from "next/image";
import { StoreButtons } from "@/components/brand/StoreButtons";
import { Eyebrow } from "@/components/ui/SectionHead";

export function DownloadBand() {
  return (
    <section className="download" id="download">
      <div className="wrap dl-grid">
        <div>
          <Eyebrow light>Free to play</Eyebrow>
          <h2>Round up your crew. Your first route is waiting.</h2>
          <p>
            Trailmates is free on iPhone and Android, with optional Plus for custom routes and bigger teams. Invite
            friends by link and your first challenge starts the same day.
          </p>
          <StoreButtons light />
        </div>
        <div className="dl-art" aria-hidden="true">
          <Image src="/images/avatar-green.webp" alt="" width={256} height={277} />
          <Image src="/images/avatar-cap.webp" alt="" width={256} height={277} />
          <Image src="/images/avatar-red.webp" alt="" width={128} height={138} />
        </div>
      </div>
    </section>
  );
}
