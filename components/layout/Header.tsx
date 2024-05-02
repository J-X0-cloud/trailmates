"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { DOWNLOAD_HREF, NAV } from "@/lib/data/site";

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [pathname]);

  const links = NAV.map((item) => (
    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
      {item.label}
    </Link>
  ));

  return (
    <header className="site-head">
      <div className="wrap head-row">
        <Wordmark />
        <nav className="nav" aria-label="Main">
          {links}
        </nav>
        <Link className="btn btn-ink head-cta" href={DOWNLOAD_HREF}>
          Get the app
        </Link>
        <details className="mnav" ref={menuRef}>
          <summary aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="mnav-panel">
            {links}
            <Link className="btn btn-lagoon" href={DOWNLOAD_HREF}>
              Get the app
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
