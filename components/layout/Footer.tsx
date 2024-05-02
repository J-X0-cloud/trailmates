import Link from "next/link";
import { StoreButtons } from "@/components/brand/StoreButtons";
import { Wordmark } from "@/components/brand/Wordmark";
import { FOOTER_COLUMNS, SITE } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Wordmark light />
          <p>{SITE.blurb}</p>
          <StoreButtons light />
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            {column.links.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="wrap foot-base">
        <span>{SITE.legal}</span>
        <span>{SITE.dataNote}</span>
      </div>
    </footer>
  );
}
