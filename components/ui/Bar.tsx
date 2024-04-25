import clsx from "clsx";

export function Bar({ percent, thin }: { percent: number; thin?: boolean }) {
  return (
    <div className={clsx("bar", thin && "thin")}>
      <i style={{ width: `${Math.round(percent)}%` }} />
    </div>
  );
}
