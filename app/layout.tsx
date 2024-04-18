import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE } from "@/lib/data/site";
import "./globals.css";

const pally = localFont({
  src: [
    { path: "./fonts/pally-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/pally-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/pally-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pally",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Trailmates | The social step-challenge game",
    template: "%s | Trailmates",
  },
  description:
    "Trailmates turns walking into a team game: step challenges with friends, virtual routes, streaks and friendly leaderboards. Free on iPhone and Android.",
  openGraph: { type: "website", siteName: "Trailmates" },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={pally.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
