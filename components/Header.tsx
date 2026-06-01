'use client';

import { useState } from 'react';
import { useScrolled, useActiveSection, scrollToId } from '@/hooks';
import { MEETUP_META } from '@/data/meetup-data';
import { Icon } from '@/components/Icons';

const NAV = [
  { id: 'about', label: 'ABOUT' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'speakers', label: 'SPEAKERS' },
  { id: 'cfp', label: 'APPLY' },
];

export default function Header() {
  const scrolled = useScrolled(30);
  const active = useActiveSection(['hero', 'about', 'schedule', 'speakers', 'cfp']);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        background: scrolled ? 'rgba(11,11,11,0.7)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { scrollToId('hero'); }}
          className="flex items-center"
        >
          <span className="text-[17px] font-mono tracking-[0.08em] font-bold text-[var(--fg-2)]">
            TVING TECH MEETUP
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => { scrollToId(n.id); }}
              className={`nav-link ${active === n.id ? 'is-active' : ''}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
          <span className="chip hidden xl:inline-flex">VOL.07 · MAY 2026</span>
          <button
            onClick={() => { scrollToId('cfp'); }}
            className="btn-lime"
            style={{ padding: '9px 16px', fontSize: 12, letterSpacing: '0.1em', boxShadow: '3px 3px 0 #000' }}
          >
            발표 신청 →
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-[var(--fg-2)]"
          onClick={() => { setOpen((v) => !v); }}
          aria-label="menu"
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--bg-1)]/95 backdrop-blur">
          <div className="px-6 py-5 flex flex-col gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => { setOpen(false); scrollToId(n.id); }}
                className="nav-link text-left"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
