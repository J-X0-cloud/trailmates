import Link from "next/link";
import clsx from "clsx";
import { Mark } from "./Mark";

export function Wordmark({ light }: { light?: boolean }) {
  return (
    <Link className={clsx("brand", light && "brand-light")} href="/" aria-label="Trailmates home">
      <Mark />
      <span>trailmates</span>
    </Link>
  );
}
