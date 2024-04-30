const grouped = new Intl.NumberFormat("en-US");

/** 212480 -> "212,480" */
export function formatSteps(steps: number): string {
  return grouped.format(steps);
}

/** 74900 -> "74.9k" */
export function formatThousands(steps: number): string {
  return `${(steps / 1000).toFixed(1)}k`;
}
