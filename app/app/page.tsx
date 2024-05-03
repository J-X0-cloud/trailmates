import type { Metadata } from "next";
import { DownloadBand } from "@/components/layout/DownloadBand";
import { PhonePreview } from "@/components/preview/PhonePreview";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { PREVIEW_PERKS } from "@/lib/data/marketing";

export const metadata: Metadata = {
  title: "App preview",
  description:
    "Tap through the Trailmates app: today's step ring, live team challenges, the virtual route map, weekly leaderboards and streaks.",
};

export default function AppPreviewPage() {
  return (
    <>
      <PhonePreview />
      <section className="pv-more">
        <InfoGrid items={PREVIEW_PERKS} className="wrap pm-grid" />
      </section>
      <DownloadBand />
    </>
  );
}
