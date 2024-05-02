import clsx from "clsx";

const STORES = [
  {
    id: "ios",
    eyebrow: "Download for",
    label: "iPhone",
    href: "https://apps.apple.com/app/trailmates-step-challenges/id6479033117",
    icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 3v13h10V5H7zm5 14.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  },
  {
    id: "android",
    eyebrow: "Get it for",
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.trailmates.app",
    icon: "M5 3.5v17a1 1 0 0 0 1.5.86l14.2-8.5a1 1 0 0 0 0-1.72L6.5 2.64A1 1 0 0 0 5 3.5z",
  },
] as const;

export function StoreButtons({ light }: { light?: boolean }) {
  return (
    <div className={clsx("stores", light && "stores-light")}>
      {STORES.map((store) => (
        <a key={store.id} className="store" href={store.href} rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d={store.icon} />
          </svg>
          <span>
            <small>{store.eyebrow}</small>
            {store.label}
          </span>
        </a>
      ))}
    </div>
  );
}
