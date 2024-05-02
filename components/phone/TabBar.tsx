import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { SCREENS, type ScreenKey } from "@/lib/data/preview";

/** Decorative in-phone tab bar; navigation in the preview happens through the tabs beside the phone. */
export function TabBar({ active }: { active: ScreenKey }) {
  return (
    <nav className="tb" aria-hidden="true">
      {SCREENS.map((screen) => (
        <span key={screen.key} className={clsx(screen.key === active && "on")}>
          <Icon name={screen.icon} />
          <em>{screen.tab}</em>
        </span>
      ))}
    </nav>
  );
}
