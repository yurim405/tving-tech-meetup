'use client';

import { useState, useEffect, useCallback } from 'react';
import { SPEAKER_DATA } from '@/data/meetup-data';
import type { Speaker } from '@/data/meetup-data';
import { Icon } from '@/components/Icons';
import { Sparkle, Scribble } from '@/components/Decorations';

function SpeakerCard({ s, onOpen }: { s: Speaker; onOpen: (s: Speaker) => void }) {
  return (
    <button
      onClick={() => { onOpen(s); }}
      className="speaker-card group relative block w-full text-left overflow-hidden"
    >
      <div className="speaker-tape">{s.team}</div>

      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.photo}
          alt={s.name}
          loading="lazy"
          className="speaker-img absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) brightness(0.85) contrast(1.05)' }}
        />
        <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'linear-gradient(160deg, rgba(198,247,59,0.15), transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />

        <div
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'var(--lime)', color: '#000', padding: '8px' }}
        >
          <Icon name="arrowUpRight" size={14} />
        </div>

        <div className="absolute left-5 right-5 bottom-5">
          <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--fg-3)]">{s.nameEn.toUpperCase()}</div>
          <div className="mt-1.5 text-[22px] md:text-[26px] font-black tracking-[-0.03em] leading-none text-white">{s.name}</div>
          <div className="mt-2 text-[13px] text-[var(--fg-2)]">{s.role}</div>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-[var(--line)] bg-[var(--bg-0)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold">TALK ↓</span>
        </div>
        <div className="mt-1.5 text-[14px] leading-[1.5] text-[var(--fg-2)] line-clamp-2 group-hover:text-white transition-colors">
          {s.topic}
        </div>
      </div>
    </button>
  );
}

function SpeakerModal({ s, onClose }: { s: Speaker; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-[920px] grid md:grid-cols-2 bg-[var(--bg-1)] overflow-hidden max-h-[90vh]"
        style={{ border: '1.5px solid var(--lime)', boxShadow: '10px 10px 0 #000' }}
      >
        <div className="relative aspect-[4/5] md:aspect-auto bg-[var(--bg-2)] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.photo} alt={s.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'linear-gradient(160deg, rgba(198,247,59,0.2), transparent 55%)' }} />
          <div className="speaker-tape" style={{ top: 20, left: 20 }}>{s.team}</div>
        </div>
        <div className="p-7 md:p-10 overflow-auto relative">
          <Sparkle size={28} color="var(--lime)" style={{ position: 'absolute', top: 16, right: 60, transform: 'rotate(15deg)' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 border border-[var(--line-strong)] bg-[var(--bg-2)] hover:bg-[var(--lime)] hover:text-black flex items-center justify-center text-[var(--fg-2)] transition-colors"
            aria-label="close"
          >
            <Icon name="close" size={16} />
          </button>

          <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--fg-4)] font-bold">SPEAKER</div>
          <h3 className="mt-2 text-[34px] md:text-[40px] font-black tracking-[-0.04em] leading-none">{s.name}</h3>
          <div className="mt-2 font-mono text-[12px] tracking-[0.16em] text-[var(--fg-3)] uppercase">
            {s.nameEn} · {s.role}
          </div>

          <div className="mt-6 p-5 border" style={{ borderColor: 'var(--lime)', background: 'var(--lime-soft)' }}>
            <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold">▸ TALK</div>
            <div className="mt-2 text-[18px] font-bold text-white leading-[1.35]">{s.topic}</div>
          </div>

          <p className="mt-6 text-[14px] leading-[1.75] text-[var(--fg-2)]">{s.bio}</p>

          <div className="mt-8 flex items-center gap-2">
            <span className="btn-ghost-line text-[12px]" style={{ padding: '9px 16px' }}>
              <Icon name="link" size={13} /> LinkedIn
            </span>
            <span className="btn-ghost-line text-[12px]" style={{ padding: '9px 16px' }}>
              <Icon name="external" size={13} /> 블로그
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  const [active, setActive] = useState<Speaker | null>(null);
  const handleClose = useCallback(() => { setActive(null); }, []);

  return (
    <section id="speakers" className="relative py-28 md:py-40 border-t border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-[8%] right-[12%] rotate-[20deg]">
        <Sparkle size={40} color="#fff" className="deco-twinkle" style={{ '--d': '0.3s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[6%] left-[4%] -rotate-[15deg]">
        <Scribble size={110} color="rgba(255,255,255,0.5)" className="deco-wiggle" style={{ '--d': '0.7s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag reveal"><span className="num">04</span> SPEAKERS</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              발표자<span className="text-lime">.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-[var(--fg-3)] text-[15px] leading-[1.7] reveal" data-delay="2">
              티빙 안쪽에서 매일 시스템을 굴리는 <span className="text-white">{SPEAKER_DATA.length}명</span>.
              카드를 눌러 자세한 이야기를 확인하세요.
            </p>
          </div>
          <div className="reveal" data-delay="3">
            <span className="sticker" style={{ transform: 'rotate(3deg)' }}>
              <Sparkle size={14} color="#000" /> {SPEAKER_DATA.length} SESSIONS
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 pointer-events-none select-none">
            {SPEAKER_DATA.map((s, i) => (
              <div key={s.id} className="reveal" data-delay={Math.min(6, (i % 6) + 1)}>
                <SpeakerCard s={s} onOpen={setActive} />
              </div>
            ))}
          </div>

          {/* 공개 예정 오버레이 */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.5) 15%, rgba(11,11,11,0.92) 45%, rgba(11,11,11,0.98) 100%)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <div className="pointer-events-auto text-center">
              <div className="inline-block sticker mb-5" style={{ transform: 'rotate(3deg)' }}>
                <Sparkle size={14} color="#000" /> COMING SOON
              </div>
              <p className="text-[22px] md:text-[28px] font-black tracking-tight">
                발표자 라인업 <span className="text-lime">공개 예정</span>
              </p>
              <p className="mt-3 text-[14px] text-[var(--fg-3)] max-w-[360px] mx-auto leading-[1.6]">
                발표자가 확정되면 프로필과 세션 주제가 공개됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {active && <SpeakerModal s={active} onClose={handleClose} />}
    </section>
  );
}
