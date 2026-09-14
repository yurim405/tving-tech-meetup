import { MEETUP_META } from '@/data/meetup-data';

export default function V3Hero() {
  return (
    <section id="v3-top" className="relative min-h-[100svh] flex flex-col">
      {/* 붉은 번짐 — 리본이 지나가는 자리를 받쳐준다 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(48% 38% at 72% 22%, rgba(232,17,45,0.28) 0%, transparent 64%),' +
            'radial-gradient(42% 34% at 18% 74%, rgba(232,17,45,0.20) 0%, transparent 62%)',
        }}
      />

      <div className="relative flex-1 flex items-center justify-center px-5 md:px-10 pt-[92px] pb-16">
        <div className="text-center w-full max-w-[1000px]">
          {/* 라벨 줄 — 좌우로 가는 선이 뻗는다 */}
          <div className="flex items-center justify-center gap-4 md:gap-6 v3-rise">
            <span aria-hidden className="hidden sm:block h-px flex-1 max-w-[90px] bg-[var(--line-2)]" />
            <span className="v3-pill">
              <span className="v3-pill-dot" />
              TVING TECH
            </span>
            <span className="v3-mono !text-[11px] md:!text-[12px] !text-[var(--fg-2)]">Connect through code</span>
            <span aria-hidden className="hidden sm:block h-px flex-1 max-w-[90px] bg-[var(--line-2)]" />
          </div>

          <h1 className="v3-hero-title mt-9 md:mt-12 v3-rise">
            Tech
            <br />
            Meetup
          </h1>

          {/* 빨간 구분선 + 점 */}
          <div aria-hidden className="mt-8 md:mt-10 flex items-center justify-center gap-2 v3-rise">
            <span
              className="h-[2px] w-[160px] md:w-[280px]"
              style={{ background: 'linear-gradient(90deg, transparent, var(--red))' }}
            />
            <span className="w-[7px] h-[7px] bg-[var(--red)]" style={{ boxShadow: '0 0 12px var(--red)' }} />
          </div>

          <p className="mt-8 md:mt-10 text-[20px] md:text-[30px] font-extrabold tracking-[-0.035em] v3-rise">
            더 나은 스트리밍을 만드는 개발자들의 이야기
          </p>
          <p className="mt-3.5 text-[14px] md:text-[17px] text-[var(--fg-2)] v3-rise">
            기술을 나누고, 경험을 잇다.
          </p>

          <dl className="mt-12 md:mt-16 inline-flex flex-wrap items-start justify-center gap-8 md:gap-14 text-left v3-rise">
            <div>
              <dt className="v3-mono">Date</dt>
              <dd className="mt-2.5 text-[22px] md:text-[30px] font-extrabold tracking-[-0.03em] tabular-nums">
                2026.06.05
              </dd>
            </div>
            <span aria-hidden className="hidden sm:block w-px self-stretch bg-[var(--line-2)]" />
            <div>
              <dt className="v3-mono">Location</dt>
              <dd className="mt-2.5 text-[22px] md:text-[30px] font-extrabold tracking-[-0.03em]">
                {MEETUP_META.venue} 회의실
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="relative px-5 md:px-10 pb-7">
        <div className="max-w-[1520px] mx-auto border-t border-[var(--line)] pt-5 flex items-center justify-between gap-4">
          <span className="v3-mono !text-[10px] md:!text-[11px]">Behind the stream</span>
          <span className="v3-mono !text-[10px] md:!text-[11px]">TVING Tech Meetup</span>
        </div>
      </div>
    </section>
  );
}
