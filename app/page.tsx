import { Boosts } from "@/components/home/Boosts";
import { FeatureRows } from "@/components/home/FeatureRows";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PreviewCta } from "@/components/home/PreviewCta";
import { Quotes } from "@/components/home/Quotes";
import { RoutesStrip } from "@/components/home/RoutesStrip";
import { DownloadBand } from "@/components/layout/DownloadBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureRows />
      <RoutesStrip />
      <Boosts />
      <Quotes />
      <PreviewCta />
      <DownloadBand />
    </>
  );
}
