'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 페이지 전체를 관통하는 빨간 선.
 *
 * 문서 높이만큼 SVG를 깔고 지그재그 경로를 그린 뒤,
 * 스크롤 위치에 맞춰 stroke-dashoffset을 줄여 "그려지는" 것처럼 보이게 한다.
 * pathLength를 1로 정규화해서 실제 길이를 몰라도 진행률만으로 계산된다.
 */

/** 화면 폭과 문서 높이로 지그재그 경로를 만든다. */
function buildPath(w: number, h: number) {
  const cx = w / 2;
  const amp = Math.min(w * 0.34, 460);
  const bends = Math.max(3, Math.round(h / 900)); // 한 굽이 ≒ 900px
  const step = h / bends;

  const xAt = (i: number) => cx + (i % 2 === 0 ? 1 : -1) * amp * 0.62;

  let d = `M ${xAt(0).toFixed(1)} 0`;
  for (let i = 0; i < bends; i++) {
    const y1 = step * i;
    const y2 = step * (i + 1);
    const x1 = xAt(i);
    const x2 = xAt(i + 1);
    // 굽이마다 접선을 수직으로 맞춘다. 제어점을 옆으로 밀면 이음매에 첨점이 생긴다.
    const c = step * 0.5;
    d += ` C ${x1.toFixed(1)} ${(y1 + c).toFixed(1)}, ${x2.toFixed(1)} ${(y2 - c).toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return d;
}

export default function V3Thread() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  const [box, setBox] = useState({ w: 0, h: 0 });
  const [d, setD] = useState('');

  // 크기가 바뀔 때만 경로를 다시 만든다
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const measure = () => {
      const w = host.offsetWidth;
      const h = host.offsetHeight;
      if (w === 0 || h === 0) return;
      setBox({ w, h });
      setD(buildPath(w, h));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => { ro.disconnect(); };
  }, []);

  // 스크롤에 따라 선이 그려진다
  useEffect(() => {
    if (!d) return;

    const path = pathRef.current;
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!path || !glow) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      path.style.strokeDashoffset = '0';
      glow.style.strokeDashoffset = '0';
      if (dot) dot.style.opacity = '0';
      return;
    }

    const total = path.getTotalLength();
    let raf = 0;

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      // 뷰포트 하단까지 그려지도록 — 스크롤을 따라오는 느낌을 만든다
      const progress = max <= 0 ? 1 : Math.min(1, (window.scrollY + window.innerHeight) / doc.scrollHeight);

      const offset = String(1 - progress);
      path.style.strokeDashoffset = offset;
      glow.style.strokeDashoffset = offset;

      if (dot) {
        const p = path.getPointAtLength(total * progress);
        dot.setAttribute('cx', String(p.x));
        dot.setAttribute('cy', String(p.y));
        dot.style.opacity = progress > 0.995 ? '0' : '1';
      }
    };

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, [d]);

  return (
    <div ref={hostRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {box.w > 0 && (
        <svg width={box.w} height={box.h} viewBox={`0 0 ${box.w} ${box.h}`} className="absolute top-0 left-0">
          <defs>
            <linearGradient id="v3-thread-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff3d54" />
              <stop offset="45%" stopColor="#e8112d" />
              <stop offset="100%" stopColor="#8e0a1c" />
            </linearGradient>
            <filter id="v3-thread-glow" x="-25%" y="-6%" width="150%" height="112%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          {/* 뒤에 깔리는 번짐 */}
          <path
            ref={glowRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="url(#v3-thread-grad)"
            strokeWidth={26}
            strokeLinecap="round"
            filter="url(#v3-thread-glow)"
            opacity={0.5}
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          />
          {/* 선명한 본선 */}
          <path
            ref={pathRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="url(#v3-thread-grad)"
            strokeWidth={3}
            strokeLinecap="round"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          />
          {/* 그려지는 끝점 */}
          <circle ref={dotRef} r={5} fill="#ff5f72" style={{ opacity: 0 }}>
            <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}
    </div>
  );
}
