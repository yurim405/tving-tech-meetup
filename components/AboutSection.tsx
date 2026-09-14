'use client';

import { MEETUP_META } from '@/data/meetup-data';
import { Sparkle, Scribble, ArrowDoodle, BrushUnderline } from '@/components/Decorations';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-tight opacity-50 pointer-events-none" />

      {/* decorations */}
      <div className="absolute top-[12%] right-[8%] rotate-[20deg]">
        <Sparkle size={40} color="var(--maple)" className="deco-twinkle" style={{ '--d': '0.3s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[8%] left-[4%] -rotate-[10deg]">
        <Scribble size={120} color="var(--fg-4)" className="deco-wiggle" style={{ '--d': '0.6s' } as React.CSSProperties} />
      </div>
      <div className="absolute top-[44%] right-[6%] rotate-[20deg]">
        <ArrowDoodle size={70} color="var(--maple)" className="deco-pop" style={{ '--d': '0.8s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left — title */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="section-tag reveal">
              <span className="num">02</span> ABOUT
            </div>

            <h2 className="display-section mt-8 reveal" data-delay="1">
              한 달에 한 번,<br />
              <span className="relative inline-block">
                우리가 만든
                <BrushUnderline width={520} color="var(--maple)" style={{ position: 'absolute', left: -4, bottom: '-12%', width: '104%' }} />
              </span><br />
              것을{' '}
              <span style={{ background: 'var(--maple)', color: 'var(--on-maple)', padding: '0 14px', marginLeft: -6, display: 'inline-block', lineHeight: 0.92, transform: 'rotate(-1deg)' }}>
                말합니다.
              </span>
            </h2>

            <p className="mt-10 text-[var(--fg-3)] text-[15px] leading-[1.75] max-w-[420px] reveal" data-delay="2">
              TVING Tech Meetup은 티빙 엔지니어가 직접 부딪힌 문제와 그 답을
              공유하는 월간 기술 공유회입니다. 화려한 발표보다는
              <span className="text-[var(--fg-1)]"> 솔직한 회고</span>를 지향합니다.
            </p>

          </div>

          {/* right — chapters */}
          <div className="md:col-span-7 space-y-12">
            {[
              {
                tag: '01 ─ WELCOME',
                body: (
                  <>
                    안녕하세요. 5월 밋업의 호스트,{' '}
                    <span style={{ background: 'var(--maple)', color: 'var(--on-maple)', padding: '0 8px' }}>Web Core Development</span>
                    입니다. 이번 달은 「{MEETUP_META.themeKo}」를 주제로, 티빙 안쪽에서 일어나는 일들을{' '}
                    <span className="text-[var(--fg-1)]">4개의 세션</span>으로 풀어 봅니다.
                  </>
                ),
              },
              {
                tag: "02 ─ WHAT'S INSIDE",
                body: (
                  <>
                    1,000만 동시 접속을 견디는 라이브 아키텍처부터, RSC로 다시 짠 티빙 웹,
                    LLM 추천 파이프라인까지 — 표면에서 잘 보이지 않지만 매일 돌아가는
                    시스템들의 이야기.
                  </>
                ),
              },
              {
                tag: '03 ─ FOR WHOM',
                body: (
                  <>
                    미디어·스트리밍 도메인 엔지니어, 대규모 트래픽을 운영하는
                    플랫폼 엔지니어, 프론트엔드/디자인 엔지니어 — 그리고
                    K-콘텐츠가 어떻게 만들어지는지 궁금한 모두를 환영합니다.
                  </>
                ),
              },
            ].map((c, i) => (
              <div key={i} className="reveal" data-delay={i + 1}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-maple font-bold">{c.tag}</span>
                  <span className="flex-1 h-px bg-[var(--line)]" />
                </div>
                <p className="mt-4 text-[17px] md:text-[19px] leading-[1.65] text-[var(--fg-2)]">
                  {c.body}
                </p>
              </div>
            ))}

            {/* stats grid removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
