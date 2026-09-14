'use client';

import { useState, useEffect, useCallback } from 'react';
import { SPEAKER_DATA } from '@/data/meetup-data';
import type { Speaker } from '@/data/meetup-data';
import { Icon } from '@/components/Icons';
import { Sparkle } from '@/components/Decorations';

/* 단풍·은행·홍시·마른잎 — 카드마다 다른 가을 그라디언트 */
const CARD_GRADIENTS = [
  'linear-gradient(135deg, #f4a259 0%, #e8752a 100%)',
  'linear-gradient(135deg, #f6c667 0%, #e0952a 100%)',
  'linear-gradient(135deg, #e08b6a 0%, #c0442b 100%)',
  'linear-gradient(135deg, #d9bb92 0%, #a8804f 100%)',
];

function SpeakerCard({ s, index, onOpen }: { s: Speaker; index: number; onOpen: (s: Speaker) => void }) {
  const initial = s.name.charAt(0);

  return (
    <button
      onClick={() => { onOpen(s); }}
      className="group relative block w-full text-left overflow-hidden border border-[var(--line)] bg-[var(--bg-1)] transition-all duration-300 hover:border-[var(--maple)] hover:translate-y-[-2px]"
    >
      {/* 그라디언트 + 이니셜 영역 */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0" style={{ background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }} />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(253,246,233,0.35) 0%, transparent 60%)',
          }}
        />

        {/* 사람 실루엣 */}
        <div className="absolute inset-0 flex items-center justify-center select-none transition-transform duration-700 group-hover:scale-105">
          <svg width="140" height="140" viewBox="0 0 80 80" fill="none" style={{ opacity: 0.35 }}>
            <circle cx="40" cy="28" r="14" fill="var(--bg-0)" />
            <path d="M12 72c0-15.464 12.536-28 28-28s28 12.536 28 28" fill="var(--bg-0)" />
          </svg>
        </div>

        {/* 넘버링 */}
        <div className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.18em] font-bold text-[var(--on-maple)]/70">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* 호버 화살표 */}
        <div
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: 'var(--maple)', color: 'var(--on-maple)' }}
        >
          <Icon name="arrowUpRight" size={12} />
        </div>

        {/* 하단 그라디언트 */}
        <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(59,42,30,0.35), transparent)' }} />
      </div>

      {/* 정보 영역 */}
      <div className="px-5 py-5 border-t border-[var(--line)]">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[20px] font-black tracking-[-0.02em] text-[var(--fg-1)]">{s.name}</h3>
          <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--fg-4)] uppercase shrink-0">{s.role}</span>
        </div>
        <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-[var(--fg-4)] uppercase">{s.team}</div>

        <div className="mt-4 h-px bg-[var(--line)]" />

        <div className="mt-3 flex items-start gap-2">
          <span className="shrink-0 mt-1.5 w-1.5 h-1.5 bg-[var(--maple)] inline-block" />
          <span className="text-[13px] leading-[1.5] text-[var(--fg-3)] line-clamp-2 group-hover:text-[var(--fg-1)] transition-colors">
            {s.topic}
          </span>
        </div>
      </div>
    </button>
  );
}

function SpeakerModal({ s, onClose }: { s: Speaker; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const index = SPEAKER_DATA.findIndex((sp) => sp.id === s.id);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(59,42,30,0.72)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-[640px] bg-[var(--bg-1)] overflow-hidden max-h-[90vh]"
        style={{ border: '1px solid var(--line-strong)' }}
      >
        {/* 상단 그라디언트 바 */}
        <div className="h-2" style={{ background: CARD_GRADIENTS[index >= 0 ? index % CARD_GRADIENTS.length : 0] }} />

        <div className="p-7 md:p-10 overflow-auto">
          <button
            onClick={onClose}
            className="absolute top-6 right-5 w-8 h-8 border border-[var(--line-strong)] bg-[var(--bg-2)] hover:bg-[var(--maple)] hover:text-[var(--on-maple)] flex items-center justify-center text-[var(--fg-3)] transition-colors"
            aria-label="close"
          >
            <Icon name="close" size={14} />
          </button>

          <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--fg-4)] font-bold">{s.team}</div>
          <h3 className="mt-3 text-[36px] md:text-[42px] font-black tracking-[-0.04em] leading-[0.92]">{s.name}</h3>
          <div className="mt-2 font-mono text-[12px] tracking-[0.14em] text-[var(--fg-4)] uppercase">
            {s.nameEn} · {s.role}
          </div>

          <div className="mt-7 h-px bg-[var(--line)]" />

          <div className="mt-6">
            <div className="font-mono text-[10px] tracking-[0.22em] text-maple font-bold mb-3">SESSION</div>
            <div className="text-[18px] font-bold text-[var(--fg-1)] leading-[1.4]">{s.topic}</div>
          </div>

          <p className="mt-6 text-[14px] leading-[1.8] text-[var(--fg-3)]">{s.bio}</p>
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
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-tag reveal"><span className="num">04</span> SPEAKERS</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              발표자<span className="text-maple">.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-[var(--fg-3)] text-[14px] leading-[1.75] reveal" data-delay="2">
            티빙 안쪽에서 매일 시스템을 굴리는 엔지니어들!
            카드를 눌러 자세한 이야기를 확인하세요.
          </p>
        </div>

        {/* Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 pointer-events-none select-none">
            {SPEAKER_DATA.map((s, i) => (
              <div key={s.id} className="reveal" data-delay={Math.min(6, i + 1)}>
                <SpeakerCard s={s} index={i} onOpen={setActive} />
              </div>
            ))}
          </div>

          {/* 공개 예정 오버레이 */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(253,246,233,0.55) 12%, rgba(253,246,233,0.93) 40%, rgba(253,246,233,0.98) 100%)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div className="pointer-events-auto text-center">
              <div className="inline-block sticker mb-6" style={{ transform: 'rotate(2deg)' }}>
                <Sparkle size={14} color="var(--on-maple)" /> COMING SOON
              </div>
              <p className="text-[24px] md:text-[32px] font-black tracking-[-0.03em]">
                발표자 라인업 <span className="text-maple">공개 예정</span>
              </p>
              <p className="mt-4 text-[14px] text-[var(--fg-4)] max-w-[320px] mx-auto leading-[1.65]">
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
