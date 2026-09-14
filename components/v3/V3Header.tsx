'use client';

import { useScrolled, scrollToId } from '@/hooks';

const NAV = [
  { id: 'v3-about', label: '행사 소개' },
  { id: 'v3-program', label: '프로그램' },
  { id: 'v3-speakers', label: '발표자' },
  { id: 'v3-cfp', label: '발표 신청' },
];

export default function V3Header() {
  const scrolled = useScrolled(24);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,7,8,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div className="max-w-[1520px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between gap-4">
        <a href="#v3-top" className="flex items-baseline gap-3 whitespace-nowrap">
          <span className="text-[22px] md:text-[26px] font-black tracking-[-0.05em] text-[var(--red)]">TVING</span>
          <span className="v3-mono !text-[13px] !tracking-[0.28em] !text-[var(--fg)]">TECH</span>
        </a>

        <nav className="flex items-center gap-5 md:gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => { scrollToId(n.id); }}
              className="text-[14px] md:text-[15px] font-bold text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors whitespace-nowrap"
            >
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
