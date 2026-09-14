'use client';

import { useCountdown, scrollToId, useScrolled } from '@/hooks';
import { MEETUP_TARGET_ISO } from '@/data/meetup-data';

const NAV = [
  { id: 'v2-about', label: '소개' },
  { id: 'v2-sessions', label: '세션' },
  { id: 'v2-speakers', label: '발표자' },
  { id: 'v2-info', label: '안내' },
];

function Countdown() {
  const { days, hours, mins, isLive } = useCountdown(MEETUP_TARGET_ISO);

  if (isLive) {
    return <span className="font-bold tabular-nums">지금 진행 중</span>;
  }
  if (days === null) {
    return <span className="tabular-nums">—</span>;
  }
  return (
    <span className="font-bold tabular-nums">
      {days}일 {String(hours).padStart(2, '0')}:{String(mins).padStart(2, '0')} 남음
    </span>
  );
}

export default function V2Header() {
  const scrolled = useScrolled(24);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,247,242,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-4">
        <a href="#v2-top" className="text-[15px] font-extrabold tracking-[-0.03em] whitespace-nowrap">
          TVING Tech Meetup
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => { scrollToId(n.id); }}
              className="px-3 py-2 text-[14px] font-semibold text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex v2-badge">
            <Countdown />
          </span>
          <button onClick={() => { scrollToId('v2-cfp'); }} className="v2-btn !px-5 !py-2.5 !text-[14px]">
            발표 신청
          </button>
        </div>
      </div>
    </header>
  );
}
