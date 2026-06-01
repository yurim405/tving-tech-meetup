'use client';

import { MEETUP_META } from '@/data/meetup-data';
import { scrollToId } from '@/hooks';
import { Sparkle, StarBurst, Scribble } from '@/components/Decorations';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'cfp', label: '발표 신청' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--bg-0)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="absolute top-[18%] right-[8%] rotate-[15deg]">
        <Sparkle size={60} color="var(--lime)" className="deco-pop" style={{ '--d': '0.2s' } as React.CSSProperties} />
      </div>
      <div className="absolute top-[32%] right-[16%] -rotate-12">
        <Sparkle size={32} color="#fff" className="deco-twinkle" style={{ '--d': '0.5s' } as React.CSSProperties} />
      </div>
      <div className="absolute top-[10%] right-[20%]">
        <StarBurst size={44} color="#fff" className="deco-wiggle" style={{ '--d': '0.7s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[30%] left-[4%] -rotate-12">
        <Scribble size={100} color="rgba(255,255,255,0.5)" className="deco-wiggle" style={{ '--d': '0.9s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--fg-4)] font-bold">
              SEE YOU NEXT MONTH ✦
            </div>
            <div className="mt-4 flex items-end gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-tving-red.svg"
                alt="TVING"
                className="h-[40px] md:h-[60px] lg:h-[80px] w-auto"
              />
              <span className="text-lime font-black leading-[0.86]" style={{ fontSize: 'clamp(56px, 12vw, 200px)' }}>.</span>
            </div>
            <p className="mt-6 text-[var(--fg-3)] text-[14px] leading-[1.7] max-w-[420px]">
              한 달에 한 번. 같은 공간에서. 같은 호기심으로.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="sticker" style={{ transform: 'rotate(-2deg)' }}>
                <Sparkle size={14} color="#000" /> COMING SOON
              </span>
              <button
                onClick={() => { scrollToId('cfp'); }}
                className="btn-ghost-line text-[12px] whitespace-nowrap"
                style={{ padding: '9px 16px' }}
              >
                알림 신청 →
              </button>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:gap-12 text-[13px]">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold mb-4">EXPLORE</div>
              <ul className="space-y-3 text-[var(--fg-2)]">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => { scrollToId(link.id); }}
                      className="hover:text-[var(--lime)] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold mb-4">CONTACT</div>
              <ul className="space-y-3 text-[var(--fg-2)]">
                <li>techmeetup@tving.com</li>
                <li>13층 C/D</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-[var(--fg-4)] tracking-[0.14em] uppercase">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-6 h-6"
              style={{ background: 'var(--lime)', color: '#000', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.08em', fontSize: 14 }}
            >
              T
            </span>
            <span>HOSTED BY <span className="text-[var(--fg-2)]">TVING · {MEETUP_META.hostTeam}</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span>&copy; {year} TVING CORP.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
