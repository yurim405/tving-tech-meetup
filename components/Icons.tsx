import type { CSSProperties } from 'react';

const ICON_PATHS: Record<string, string> = {
  arrowDown:    'M12 5v14M5 12l7 7 7-7',
  arrowRight:   'M5 12h14M13 5l7 7-7 7',
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  chevronDown:  'M6 9l6 6 6-6',
  mapPin:       'M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  calendar:     'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  clock:        'M12 6v6l4 2 M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z',
  mic:          'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8',
  users:        'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  play:         'M5 3 19 12 5 21V3Z',
  menu:         'M3 6h18M3 12h18M3 18h18',
  close:        'M18 6 6 18 M6 6l12 12',
  check:        'M5 13l4 4L19 7',
  external:     'M15 3h6v6 M10 14 21 3 M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5',
  link:         'M10 14a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72 M14 10a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72',
};

interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
  className?: string;
  fill?: string;
  style?: CSSProperties;
}

export function Icon({
  name,
  size = 18,
  stroke = 1.6,
  className = '',
  fill = 'none',
  style,
}: IconProps) {
  const d = ICON_PATHS[name];
  if (!d) {
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {d.split(' M').map((seg, i) => (
        <path key={i} d={(i === 0 ? '' : 'M') + seg} />
      ))}
    </svg>
  );
}

export function TMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4 6 H28 V11 H20.5 V26 H15.5 V11 H4 Z" fill="currentColor" transform="skewX(-8)" />
    </svg>
  );
}
