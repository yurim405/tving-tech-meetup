'use client';

import { scrollToId, useScrolled } from '@/hooks';

const NAV = [
  { id: 'tm-sessions', label: 'Sessions' },
  { id: 'tm-speakers', label: 'Speakers' },
  { id: 'tm-timetable', label: 'Schedule' },
];

export default function Header() {
  const scrolled = useScrolled(24);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(249,248,248,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between gap-4">
        <a
          href="#tm-top"
          className="flex items-center gap-2 text-[17px] md:text-[19px] font-extrabold tracking-[-0.04em]"
        >
          <img src="/logo-tving-gray.svg" alt="TVING" className="h-[13px] md:h-[15px] w-auto" />
          TECH
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => { scrollToId(n.id); }}
              className="px-4 py-2 text-[15px] font-semibold text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => { scrollToId('tm-timetable'); }}
          className="tm-btn !px-6 !py-2.5 !text-[14px]"
        >
          Register
        </button>
      </div>
    </header>
  );
}
