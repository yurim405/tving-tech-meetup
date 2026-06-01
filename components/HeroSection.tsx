'use client';

import { useState, useEffect, useCallback } from 'react';
import { useCountdown, scrollToId } from '@/hooks';
import { MEETUP_META, MEETUP_TARGET_ISO } from '@/data/meetup-data';
import { Icon } from '@/components/Icons';
import { Sparkle, StarBurst, BrushSmile, Scribble, HandSlash, BrushUnderline } from '@/components/Decorations';
import TypingText from '@/components/TypingText';
import Parallax from '@/components/Parallax';

function HeroBottom() {
  const [show, setShow] = useState<'date' | 'host'>('date');

  const handleScroll = useCallback(() => {
    // 뷰포트 25% — 페이드 그라디언트 시작 전에 이미 전환 완료
    setShow(window.scrollY > window.innerHeight * 0.25 ? 'host' : 'date');
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="text-center pb-10 relative">
      {/* 날짜/장소: 스크롤하면 사라짐 */}
      <div
        className="transition-all duration-500 ease-out"
        style={{
          opacity: show === 'date' ? 1 : 0,
          transform: show === 'date' ? 'translateY(0)' : 'translateY(-16px)',
        }}
      >
        <div className="font-mono text-[22px] md:text-[28px] font-black text-white tracking-tight">
          2026. 06. 05.
        </div>
        <div className="font-mono text-[22px] md:text-[28px] font-black text-white tracking-tight mt-1">
          13층 C/D
        </div>
      </div>

      {/* 호스트: 스크롤하면 나타남 (같은 위치) */}
      <div
        className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
        style={{
          opacity: show === 'host' ? 1 : 0,
          transform: show === 'host' ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <div className="font-mono text-[12px] md:text-[14px] tracking-[0.22em] text-[var(--fg-4)] font-bold uppercase">
          Hosted by
        </div>
        <div className="mt-2 text-[22px] md:text-[28px] font-black text-white tracking-tight">
          Web Core Development
        </div>
        <div className="mt-1 font-mono text-[12px] tracking-[0.18em] text-[var(--lime)] font-bold">
          TVING
        </div>
      </div>

      {/* 스크롤 유도 화살표 (항상 보임) */}
      <button
        onClick={() => { scrollToId('hero-content'); }}
        className="mt-14 text-[var(--fg-3)] hover:text-[var(--lime)] transition-colors relative z-10"
        aria-label="Scroll down"
      >
        <span className="bounce-arrow inline-block"><Icon name="chevronDown" size={24} /></span>
      </button>
    </div>
  );
}

export default function HeroSection() {
  const { days, hours, mins, secs, isLive } = useCountdown(MEETUP_TARGET_ISO);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          히어로: fixed로 화면 뒤에 깔림.
          나머지 콘텐츠가 위로 스크롤되면서 히어로를 덮음.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        id="hero"
        className="fixed inset-0 z-0 flex flex-col overflow-hidden"
      >
        {/* 배경 */}
        <div className="absolute inset-0 bg-grid opacity-90 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 35% at 50% 45%, rgba(198,247,59,0.08) 0%, transparent 70%), radial-gradient(35% 30% at 12% 80%, rgba(198,247,59,0.05) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

        {/* 장식 (패럴랙스) */}
        <Parallax speed={-0.06} className="absolute top-[30%] left-[9%] rotate-[8deg]">
          <Sparkle size={64} color="#fff" className="deco-pop" style={{ '--d': '0.3s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={0.04} className="absolute top-[44%] left-[14%] -rotate-12">
          <Sparkle size={38} color="#fff" className="deco-twinkle" style={{ '--d': '0.6s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={-0.08} className="absolute top-[26%] left-[17%] rotate-[18deg]">
          <Sparkle size={32} color="var(--lime)" className="deco-pop" style={{ '--d': '0.9s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={0.05} className="absolute top-[30%] right-[10%]">
          <Sparkle size={56} color="#fff" className="deco-pop" style={{ '--d': '0.5s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={-0.07} className="absolute top-[44%] right-[16%] rotate-[15deg]">
          <Sparkle size={36} color="var(--lime)" className="deco-twinkle" style={{ '--d': '1.1s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={0.06} className="absolute top-[22%] right-[6%]">
          <StarBurst size={48} color="#fff" className="deco-wiggle" style={{ '--d': '0.7s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={-0.05} className="absolute bottom-[30%] left-[11%] rotate-[8deg]">
          <BrushSmile width={150} color="#fff" className="deco-wiggle" style={{ '--d': '1.0s' } as React.CSSProperties} />
        </Parallax>
        <Parallax speed={0.08} className="absolute bottom-[36%] right-[6%] -rotate-12">
          <Scribble size={130} color="#fff" className="deco-pop" style={{ '--d': '0.8s' } as React.CSSProperties} />
        </Parallax>

        {/* 코너 스티커 */}
        <div className="absolute top-[110px] right-6 md:right-10 z-10 rotate-[8deg]">
          <div className="sticker deco-sticker-bounce">★ APPLY OPEN</div>
        </div>

        {/* 메인 타이틀 (중앙) */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 pt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14 reveal" data-delay="1" style={{ transform: 'rotate(-2deg)' }}>
            <span className="pill-tag pill-tag-lime">1,000만이 보는 그 화면을</span>
            <span className="pill-tag pill-tag-white" style={{ transform: 'rotate(3deg) translateY(2px)' }}>만드는 사람들</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 reveal" data-delay="2">
            <HandSlash height={140} color="#fff" style={{ marginTop: -10 }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-tving-red.svg"
              alt="TVING"
              className="h-[60px] md:h-[100px] lg:h-[130px] w-auto"
            />
          </div>

          <div className="flex flex-wrap items-baseline justify-center gap-4 md:gap-6 mt-2 reveal" data-delay="3">
            <span className="display-hero">TECH</span>
            <span className="display-hero text-lime relative">
              MEETUP
              <BrushUnderline
                width={520}
                color="var(--lime)"
                style={{ position: 'absolute', left: -8, bottom: '-14%', width: '104%' }}
              />
            </span>
          </div>

          <div className="mt-12 md:mt-16 font-mono text-[12px] md:text-[14px] tracking-[0.22em] uppercase text-[var(--fg-3)] reveal" data-delay="4">
            THEME / 「<TypingText text={MEETUP_META.themeKo} delay={2000} speed={120} />」
          </div>
        </div>

        {/* 하단 날짜/장소 → 스크롤 시 호스트로 전환 */}
        <HeroBottom />
      </div>

      {/* Spacer: fixed 히어로 높이만큼 빈 공간 */}
      <div className="h-screen" aria-hidden="true" />

      {/* 페이드 전환: 투명 → 불투명 그라디언트로 히어로를 서서히 가림 */}
      <div
        className="relative z-[1] h-[60vh] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--bg-0) 100%)',
        }}
      />

      {/* 스크롤되는 콘텐츠 */}
      <div id="hero-content" className="relative z-[1] bg-[var(--bg-0)]">
        {/* 소개 텍스트 + CTA */}
        <div className="text-center px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-28">
          <p className="text-[18px] md:text-[22px] leading-[1.65] text-[var(--fg-3)] max-w-[600px] mx-auto">
            No.1 K-콘텐츠 플랫폼을 만드는{' '}
            <span className="text-white font-medium">기술과 사람들</span>의 이야기.
            <br />
            한 달에 한 번, 우리가 부딪힌 문제를 가감 없이 공유합니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => { scrollToId('schedule'); }} className="btn-lime">
              <Icon name="play" size={12} fill="currentColor" stroke={0} />
              세션 둘러보기
            </button>
            <button onClick={() => { scrollToId('cfp'); }} className="btn-ghost-line">
              <Icon name="mic" size={14} />
              발표 신청하기
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 md:gap-3">
            <span className="text-[10px] tracking-[0.22em] font-mono text-[var(--fg-4)] mr-1">
              {isLive ? '● NOW LIVE' : 'STARTS IN'}
            </span>
            {[
              { v: days, l: 'D' },
              { v: hours, l: 'H' },
              { v: mins, l: 'M' },
              { v: secs, l: 'S' },
            ].map((c, i) => (
              <div key={i} className="flex items-baseline gap-1 px-3 py-2 border border-[var(--line)] bg-[var(--bg-1)]/60 min-w-[58px]">
                <span className="text-[20px] md:text-[22px] font-extrabold tabular-nums tracking-tight">
                  {c.v === null ? '--' : String(c.v).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[var(--fg-4)] font-mono">{c.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 데이터 스트립 */}
        <div className="border-t border-[var(--line)]">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {[
              { l: 'DATE', v: '06.05', b: '2026 · FRI' },
              { l: 'TIME', v: '15:00', b: '→ 16:30 KST' },
              { l: 'VENUE', v: '13F', b: 'C/D 회의실' },
              { l: 'SEATS', v: '70', b: 'OFFLINE' },
            ].map((m, i) => (
              <div key={m.l} className="px-6 py-6 md:px-7 md:py-8 border-r border-b border-[var(--line)] last:border-r-0">
                <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--fg-4)] font-bold">
                  0{i + 1} / {m.l}
                </div>
                <div className="mt-3 md:mt-4 text-[28px] md:text-[36px] font-black tracking-[-0.04em] leading-none">
                  {m.v}
                </div>
                <div className="mt-2 text-[12px] md:text-[13px] font-mono text-[var(--fg-3)] tracking-wide">
                  {m.b}
                </div>
              </div>
            ))}
            <div className="px-6 py-6 md:px-7 md:py-8 col-span-2 md:col-span-1 relative overflow-hidden border-b border-[var(--line)]">
              <Sparkle size={24} color="var(--lime)" style={{ position: 'absolute', top: 14, right: 18 }} />
              <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold">05 / HOST</div>
              <div className="mt-3 md:mt-4 text-[22px] md:text-[24px] font-extrabold tracking-[-0.03em] leading-none">Web Core</div>
              <div className="mt-2 text-[12px] md:text-[13px] font-mono text-[var(--fg-3)] tracking-wide">DEVELOPMENT · TVING</div>
            </div>
          </div>
        </div>

        {/* 마키 */}
        <div className="border-b border-[var(--line)] overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap py-3 font-mono text-[12px] tracking-[0.18em] text-[var(--fg-3)] uppercase">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-8 px-6 shrink-0">
                {[
                  'K-CONTENT No.1', '✦',
                  'LIVE · WEB · ML · ADS · DESIGN', '✦',
                  'MONTHLY ENGINEERING JOURNAL', '✦',
                  'HOSTED BY WEB CORE DEVELOPMENT', '✦',
                  `VOL.07 · 「${MEETUP_META.themeKo}」`, '✦',
                ].map((t, i) => (
                  <span key={`${dup}-${i}`} className={t === '✦' ? 'text-lime' : ''}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
