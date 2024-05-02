import { useId } from "react";

interface StepRingProps {
  fraction: number;
  label: string;
  sub: string;
  size?: number;
  stroke?: number;
}

export function StepRing({ fraction, label, sub, size = 150, stroke = 14 }: StepRingProps) {
  const gradientId = useId();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const center = size / 2;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={center} cy={center} r={r} fill="none" stroke="var(--ring-bg)" strokeWidth={stroke} />
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(c * fraction).toFixed(1)} ${c.toFixed(1)}`}
          transform={`rotate(-90 ${center} ${center})`}
        />
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFD166" />
            <stop offset="1" stopColor="#0FA3B1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="ring-in">
        <b>{label}</b>
        <small>{sub}</small>
      </div>
    </div>
  );
}
