export function Mark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="var(--lagoon)" />
      <path
        d="M9 29c5-1 7-5 11-8s9-3 11-9"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.1 5.2"
      />
      <circle cx="9" cy="29" r="3.2" fill="var(--sun)" />
      <path d="M31 5.5a5 5 0 0 0-5 5c0 3.6 5 8 5 8s5-4.4 5-8a5 5 0 0 0-5-5z" fill="var(--coral)" />
      <circle cx="31" cy="10.5" r="1.8" fill="#fff" />
    </svg>
  );
}
