import clsx from "clsx";

export function StatusBar({ dark }: { dark?: boolean }) {
  return (
    <div className={clsx("sb", dark && "sb-dark")}>
      <span>9:41</span>
      <span className="sb-i">
        <i />
        <i />
        <i />
        <b />
      </span>
    </div>
  );
}
