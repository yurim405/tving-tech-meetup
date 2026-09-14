import type { CSSProperties } from 'react';

interface DecoProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export function Sparkle({ size = 60, color = 'currentColor', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      <path d="M50 6 C 50 38 50 38 4 50 C 50 62 50 62 50 94 C 50 62 50 62 96 50 C 50 38 50 38 50 6 Z" fill={color} />
    </svg>
  );
}

export function StarBurst({ size = 80, color = 'currentColor', style, className = '' }: DecoProps) {
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

export function BrushSmile({ width = 220, color = 'currentColor', style }: DecoProps) {
  const w = width ?? 220;
  return (
    <svg width={w} height={w * 0.55} viewBox="0 0 220 120" style={style} aria-hidden>
      <path d="M 14 22 C 30 88 110 116 196 60 C 200 56 204 50 204 44" fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}

export function Scribble({ size = 160, color = 'currentColor', style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style} aria-hidden>
      <path d="M 30 110 C 40 60 90 50 120 70 C 150 90 140 140 110 145 C 80 150 60 130 80 110 C 110 80 170 100 175 140 C 178 165 162 178 142 178 C 130 178 124 174 124 174" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandSlash({ height = 220, color = 'currentColor', style }: DecoProps) {
  const h = height ?? 220;
  return (
    <svg width={h * 0.42} height={h} viewBox="0 0 90 220" style={style} aria-hidden>
      <path d="M 78 12 C 70 30 56 80 40 130 C 28 168 18 196 8 208" fill="none" stroke={color} strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

export function BrushUnderline({ width = 540, color = 'var(--maple)', style }: DecoProps) {
  const w = width ?? 540;
  return (
    <svg width={w} height={28} viewBox="0 0 540 28" style={style} aria-hidden preserveAspectRatio="none">
      <path d="M 6 18 C 90 4 220 4 320 10 C 410 14 480 18 534 8" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDoodle({ size = 80, color = 'currentColor', style }: DecoProps) {
  return (
    <svg width={size} height={(size ?? 80) * 1.3} viewBox="0 0 80 104" style={style} aria-hidden>
      <path d="M 18 6 C 26 26 40 50 38 78 M 24 64 L 38 80 L 56 70" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckDoodle({ size = 28, color = 'currentColor', style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={style} aria-hidden>
      <path d="M 5 16 L 11 22 L 23 7" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── 가을 잎 ─── */

export function MapleLeaf({ size = 64, color = 'var(--maple)', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      <path
        fill={color}
        d="M50 5 C50 5,46 21,44 25 C42 29,38 27,34 25 L36 37 C30 35,24 33,20 31 L24 41 C18 43,10 45,5 47 L17 57 C13 61,9 65,7 70 L29 66 L27 75 L45 71 L46 96 L54 96 L55 71 L73 75 L71 66 L93 70 C91 65,87 61,83 57 L95 47 C90 45,82 43,76 41 L80 31 C76 33,70 35,64 37 L66 25 C62 27,58 29,56 25 C54 21,50 5,50 5 Z"
      />
    </svg>
  );
}

export function GinkgoLeaf({ size = 64, color = 'var(--ginkgo)', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      {/* 부채꼴 잎몸 — 가운데 V자 홈이 은행잎의 특징 */}
      <path fill={color} d="M50 78 C32 72 14 56 8 34 C20 21 34 15 49 14 L50 40 L51 14 C66 15 80 21 92 34 C86 56 68 72 50 78 Z" />
      <path d="M50 76 C50 84 50 90 50 95" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function AcornDoodle({ size = 48, color = 'var(--persimmon)', style, className = '' }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden>
      <path fill={color} d="M50 94 C34 94 24 80 24 66 C24 62 25 59 26 57 L74 57 C75 59 76 62 76 66 C76 80 66 94 50 94 Z" />
      <path fill={color} opacity="0.6" d="M22 57 C22 42 34 33 50 33 C66 33 78 42 78 57 Z" />
      <path d="M50 33 C50 24 50 17 50 11" fill="none" stroke={color} strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}
