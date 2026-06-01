import type { CSSProperties } from 'react';

interface DecoProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export function Sparkle({ size = 60, color = '#fff', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      <path d="M50 6 C 50 38 50 38 4 50 C 50 62 50 62 50 94 C 50 62 50 62 96 50 C 50 38 50 38 50 6 Z" fill={color} />
    </svg>
  );
}

export function StarBurst({ size = 80, color = '#fff', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      <g stroke={color} strokeWidth="6" strokeLinecap="round">
        <line x1="50" y1="8" x2="50" y2="28" />
        <line x1="50" y1="72" x2="50" y2="92" />
        <line x1="8" y1="50" x2="28" y2="50" />
        <line x1="72" y1="50" x2="92" y2="50" />
        <line x1="20" y1="20" x2="34" y2="34" />
        <line x1="66" y1="66" x2="80" y2="80" />
        <line x1="80" y1="20" x2="66" y2="34" />
        <line x1="20" y1="80" x2="34" y2="66" />
      </g>
    </svg>
  );
}

export function BrushSmile({ width = 220, color = '#fff', style }: DecoProps) {
  const w = width ?? 220;
  return (
    <svg width={w} height={w * 0.55} viewBox="0 0 220 120" style={style} aria-hidden>
      <path d="M 14 22 C 30 88 110 116 196 60 C 200 56 204 50 204 44" fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}

export function Scribble({ size = 160, color = '#fff', style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style} aria-hidden>
      <path d="M 30 110 C 40 60 90 50 120 70 C 150 90 140 140 110 145 C 80 150 60 130 80 110 C 110 80 170 100 175 140 C 178 165 162 178 142 178 C 130 178 124 174 124 174" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandSlash({ height = 220, color = '#fff', style }: DecoProps) {
  const h = height ?? 220;
  return (
    <svg width={h * 0.42} height={h} viewBox="0 0 90 220" style={style} aria-hidden>
      <path d="M 78 12 C 70 30 56 80 40 130 C 28 168 18 196 8 208" fill="none" stroke={color} strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

export function BrushUnderline({ width = 540, color = '#C6F73B', style }: DecoProps) {
  const w = width ?? 540;
  return (
    <svg width={w} height={28} viewBox="0 0 540 28" style={style} aria-hidden preserveAspectRatio="none">
      <path d="M 6 18 C 90 4 220 4 320 10 C 410 14 480 18 534 8" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDoodle({ size = 80, color = '#fff', style }: DecoProps) {
  return (
    <svg width={size} height={(size ?? 80) * 1.3} viewBox="0 0 80 104" style={style} aria-hidden>
      <path d="M 18 6 C 26 26 40 50 38 78 M 24 64 L 38 80 L 56 70" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckDoodle({ size = 28, color = '#000', style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={style} aria-hidden>
      <path d="M 5 16 L 11 22 L 23 7" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
