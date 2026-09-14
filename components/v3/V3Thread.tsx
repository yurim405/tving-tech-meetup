'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 히어로의 리본을 이어받아 페이지 아래로 계속되는 리본 띠.
 *
 * 히어로는 실제 렌더 이미지(tving-ribbon.webp)를 쓰고, 그 아래부터는
 * 같은 폭의 띠를 SVG로 그린다. 스크롤 진행률로 stroke-dashoffset을 줄여
 * 끈이 아래로 풀려나가는 것처럼 보이게 한다.
 */

/** 히어로 하단에서 시작해 아래로 내려가는 지그재그 경로 */
function buildPath(w: number, h: number, startY: number, startX: number) {
  const cx = w / 2;
  const amp = Math.min(w * 0.3, 400);
  const span = Math.max(1, h - startY);
  const bends = Math.max(2, Math.round(span / 950));
  const step = span / bends;

  // 첫 굽이는 히어로 리본이 빠져나온 지점에서 이어붙인다
  const xAt = (i: number) => (i === 0 ? startX : cx + (i % 2 === 0 ? -1 : 1) * amp * 0.62);

  let d = `M ${startX.toFixed(1)} ${startY.toFixed(1)}`;
  for (let i = 0; i < bends; i++) {
    const y1 = startY + step * i;
    const y2 = startY + step * (i + 1);
    const x1 = xAt(i);
    const x2 = xAt(i + 1);
    // 굽이마다 접선을 수직으로 맞춰야 이음매에 첨점이 생기지 않는다
    const c = step * 0.5;
    d += ` C ${x1.toFixed(1)} ${(y1 + c).toFixed(1)}, ${x2.toFixed(1)} ${(y2 - c).toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return d;
}

export default function V3Thread() {
  const hostRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<SVGPathElement>(null);
  const sheenRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  const [box, setBox] = useState({ w: 0, h: 0, heroH: 0, startY: 0 });
  const [d, setD] = useState('');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const measure = () => {
      const w = host.offsetWidth;
      const h = host.offsetHeight;
      if (w === 0 || h === 0) return;

      const hero = document.getElementById('v3-top');
      const heroH = hero ? hero.offsetHeight : Math.round(h * 0.4);
      // 히어로 이미지가 페이드되는 구간부터 겹쳐 시작해야 이음매가 보이지 않는다
      const startY = Math.max(0, heroH - 190);
      const startX = w * 0.38;

      setBox({ w, h, heroH, startY });
      setD(buildPath(w, h, startY, startX));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => { ro.disconnect(); };
  }, []);

  useEffect(() => {
    if (!d) return;
    const paths = [bodyRef.current, sheenRef.current, glowRef.current].filter(Boolean) as SVGPathElement[];
    if (paths.length === 0) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      paths.forEach((p) => { p.style.strokeDashoffset = '0'; });
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const tail = Math.max(1, doc.scrollHeight - box.heroH);
      // 히어로를 지나면서부터 풀린다. 화면 높이의 1.4배까지 미리 그려
      // 잘린 끝면이 뷰포트 안에 보이지 않게 한다.
      const lead = window.innerHeight * 1.4;
      const progress = Math.min(1, Math.max(0, (window.scrollY + lead - box.heroH) / tail));
      const offset = String(1 - progress);
      paths.forEach((p) => { p.style.strokeDashoffset = offset; });
    };

    const onScroll = () => { if (raf === 0) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, [d, box.heroH]);

  // 화면이 좁으면 띠도 얇게
  const bandWidth = Math.max(44, Math.min(118, box.w * 0.078));
  const dash = { strokeDasharray: 1, strokeDashoffset: 1 } as const;

  return (
    <div ref={hostRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {box.w > 0 && d && (
        <svg width={box.w} height={box.h} viewBox={`0 0 ${box.w} ${box.h}`} className="absolute top-0 left-0">
          <defs>
            {/* 가로로 훑는 명암 — 띠가 좌우로 휘면서 새틴처럼 빛이 흐르게 한다 */}
            <linearGradient id="v3-band" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4d0710" />
              <stop offset="18%" stopColor="#b50d22" />
              <stop offset="38%" stopColor="#ff4257" />
              <stop offset="50%" stopColor="#ff8d97" />
              <stop offset="64%" stopColor="#e8112d" />
              <stop offset="85%" stopColor="#8a0a19" />
              <stop offset="100%" stopColor="#3d060d" />
            </linearGradient>
            <filter id="v3-band-glow" x="-30%" y="-8%" width="160%" height="116%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
            {/* 띠의 시작을 흐리게 — 히어로 이미지에서 자연스럽게 넘어오도록.
                spreadMethod pad 덕분에 위쪽은 계속 검정(가림), 아래쪽은 계속 흰색(보임) */}
            <linearGradient
              id="v3-band-fade"
              gradientUnits="userSpaceOnUse"
              x1="0" y1={box.startY} x2="0" y2={box.startY + 260}
            >
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            {/* 페이지 끝에서 서서히 사라진다 — 푸터 글자가 밝은 띠 위에 겹쳐
                읽기 어려워지는 것도 같이 막는다 */}
            <linearGradient
              id="v3-band-fade-out"
              gradientUnits="userSpaceOnUse"
              x1="0" y1={Math.max(0, box.h - 620)} x2="0" y2={box.h}
            >
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            <mask id="v3-band-mask">
              <rect x="0" y="0" width={box.w} height={box.h} fill="url(#v3-band-fade)" />
              <rect x="0" y={Math.max(0, box.h - 620)} width={box.w} height={620} fill="url(#v3-band-fade-out)" />
            </mask>
          </defs>

          <g mask="url(#v3-band-mask)">
          <path
            ref={glowRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="#e8112d"
            strokeWidth={bandWidth * 1.5}
            strokeLinecap="butt"
            filter="url(#v3-band-glow)"
            opacity={0.32}
            style={dash}
          />
          <path
            ref={bodyRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="url(#v3-band)"
            strokeWidth={bandWidth}
            strokeLinecap="butt"
            style={dash}
          />
          {/* 가운데를 지나는 밝은 결 */}
          <path
            ref={sheenRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="#ffd2d6"
            strokeWidth={Math.max(2, bandWidth * 0.07)}
            strokeLinecap="butt"
            opacity={0.34}
            style={dash}
          />
          </g>
        </svg>
      )}
    </div>
  );
}
