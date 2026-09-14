'use client';

import { SCHEDULE_DATA } from '@/data/meetup-data';
import type { ScheduleItem } from '@/data/meetup-data';
import { Icon } from '@/components/Icons';
import { Sparkle, BrushSmile } from '@/components/Decorations';
import TiltCard from '@/components/TiltCard';

const TRACKS = ['MAIN', 'INFRA', 'WEB', 'ML', 'DESIGN', 'ADS'];

function TrackPill({ track }: { track?: string }) {
  if (!track) {
    return null;
  }
  return (
    <span className={`track-pill track-${track}`}>
      <span className="pip" /> {track}
    </span>
  );
}

function SessionRow({ item, idx }: { item: ScheduleItem; idx: number }) {
  const isBreak = item.type === 'break';
  const isReg = item.type === 'register';
  const isCard = !isBreak && !isReg;
  const isComingSoon = item.desc === '공개 예정';

  return (
    <li
      className="session-row reveal grid gap-3 md:gap-7 group"
      style={{ gridTemplateColumns: '96px 32px 1fr' }}
      data-delay={Math.min(6, (idx % 6) + 1)}
    >
      {/* time */}
      <div className="pt-5 text-right">
        <div className="session-time font-mono text-[16px] md:text-[19px] font-extrabold tabular-nums tracking-tight text-[var(--fg-1)] transition-colors">
          {item.time}
        </div>
        {item.duration && (
          <div className="text-[11px] text-[var(--fg-4)] font-mono mt-1">{item.duration}</div>
        )}
      </div>

      {/* dot */}
      <div className="pt-7 flex justify-center">
        {item.keynote ? (
          <Sparkle size={22} color="var(--maple)" />
        ) : (
          <span className="timeline-dot" />
        )}
      </div>

      {/* content */}
      <div className="pb-10">
        {isCard ? (
          <TiltCard className={`session-card px-5 md:px-7 py-5 md:py-6 relative overflow-hidden ${isComingSoon ? 'pointer-events-none' : ''}`}>
            {/* 공개 예정 오버레이 */}
            {isComingSoon && (
              <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ background: 'rgba(253,246,233,0.88)', backdropFilter: 'blur(4px)' }}>
                <div className="text-center">
                  <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--maple-text)] font-bold">COMING SOON</div>
                  <div className="mt-1 text-[15px] font-bold text-[var(--fg-1)]">공개 예정</div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <TrackPill track={item.track} />
              {item.keynote && <span className="chip chip-maple" style={{ borderColor: 'var(--maple)' }}>★ KEYNOTE</span>}
              {(item.type === 'opening' || item.type === 'closing') && <span className="chip">CEREMONY</span>}
              {item.type === 'lightning' && <span className="chip chip-outline-maple">⚡ LIGHTNING</span>}
              {(item.tags ?? []).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <h3 className="text-[16px] md:text-[19px] font-bold tracking-tight leading-[1.3] text-[var(--fg-1)]">
              {item.title}
            </h3>

            {(item.speaker || item.role) && (
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[var(--fg-3)]">
                {item.speaker && (
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--fg-1)] font-medium">
                    <span className="w-1.5 h-1.5" style={{ background: 'var(--maple)' }} />
                    {item.speaker}
                  </span>
                )}
                {item.role && <span className="whitespace-nowrap">· {item.role}</span>}
              </div>
            )}

            {item.desc && !isComingSoon && (
              <p className="mt-3 text-[14px] leading-[1.7] text-[var(--fg-3)] max-w-[680px]">
                {item.desc}
              </p>
            )}

            {!isComingSoon && (
              <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[var(--fg-4)] whitespace-nowrap uppercase">
                자세히 보기
                <span className="session-arrow">→</span>
              </div>
            )}
          </TiltCard>
        ) : (
          <div className={`px-5 py-5 ${isBreak ? 'break-row' : ''}`}>
            <h3 className="text-[15px] md:text-[16px] font-medium text-[var(--fg-2)]">
              {item.title}
              {item.duration && <span className="ml-2 text-[var(--fg-4)] text-[12px] font-mono">{item.duration}</span>}
            </h3>
            {item.desc && (
              <p className="mt-2 text-[13px] leading-[1.7] text-[var(--fg-4)] max-w-[640px]">{item.desc}</p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-28 md:py-40 border-t border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="absolute top-[8%] left-[5%] rotate-[15deg]">
        <Sparkle size={48} color="var(--maple)" className="deco-pop" style={{ '--d': '0.4s' } as React.CSSProperties} />
      </div>
      <div className="absolute top-[12%] right-[8%] -rotate-[10deg]">
        <Sparkle size={36} color="var(--ginkgo)" className="deco-twinkle" style={{ '--d': '0.7s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[6%] right-[5%] -rotate-[8deg]">
        <BrushSmile width={120} color="var(--fg-4)" className="deco-wiggle" style={{ '--d': '0.9s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag reveal"><span className="num">03</span> SCHEDULE</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              세션 <span className="text-maple">타임라인.</span>
            </h2>
            <div className="mt-4 reveal" data-delay="2">
              <span className="sticker" style={{ transform: 'rotate(-2deg)' }}>
                06.05 FRI · 15:00 → 16:30
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 reveal" data-delay="3">
            {TRACKS.map((t) => (
              <span key={t} className={`track-pill track-${t}`}>
                <span className="pip" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="timeline-rail" style={{ left: '111px' }} />
          <ol className="space-y-0">
            {SCHEDULE_DATA.map((item, idx) => (
              <SessionRow key={idx} item={item} idx={idx} />
            ))}
          </ol>

          {/* 공개 예정 오버레이 */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none z-10 flex flex-col items-center justify-end pb-16"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(253,246,233,0.6) 20%, rgba(253,246,233,0.93) 50%, rgba(253,246,233,0.98) 100%)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div className="pointer-events-auto text-center">
              <div className="inline-block sticker mb-5" style={{ transform: 'rotate(-2deg)' }}>
                <Sparkle size={14} color="var(--on-maple)" /> COMING SOON
              </div>
              <p className="text-[22px] md:text-[28px] font-black tracking-tight">
                세션 라인업 <span className="text-maple">공개 예정</span>
              </p>
              <p className="mt-3 text-[14px] text-[var(--fg-3)] max-w-[360px] mx-auto leading-[1.6]">
                발표자와 세션 주제가 확정되면 업데이트됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
