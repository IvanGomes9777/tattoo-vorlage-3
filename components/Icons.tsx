type IconProps = { className?: string };

const base = "h-7 w-7";

export function LeafIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 20A7 7 0 0 1 4 13c0-4.5 4-9 16-9 0 8-4.5 12-9 12Z" />
      <path d="M4 20c2-5 6-8 11-9" />
    </svg>
  );
}

export function RecycleIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m7 19-2.5-4.3a2 2 0 0 1 .2-2.3L7 9" />
      <path d="m11 4 2.4 4.1a2 2 0 0 1 0 2L12 12" />
      <path d="M17.5 9 20 13.3a2 2 0 0 1-1.7 3H14" />
      <path d="m9 19 1.5-2.5M14 16.3l-2-3.4" />
      <path d="M11 4 8.5 5.5M4.7 14.7l2.9.2" />
    </svg>
  );
}

export function HeartIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20s-7-4.4-9.3-9C1.3 8 2.7 5 5.7 5 7.6 5 9 6.3 12 9c3-2.7 4.4-4 6.3-4 3 0 4.4 3 3 6-2.3 4.6-9.3 9-9.3 9Z" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.5 14.9 8l6.1.9-4.4 4.3 1 6L12 16.8 6.4 19.2l1-6L3 8.9 9.1 8Z" />
    </svg>
  );
}

export function iconFor(name: string, className?: string) {
  switch (name) {
    case "leaf":
      return <LeafIcon className={className} />;
    case "recycle":
      return <RecycleIcon className={className} />;
    case "heart":
      return <HeartIcon className={className} />;
    default:
      return <HeartIcon className={className} />;
  }
}
