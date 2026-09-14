'use client';

import { MEETUP_META } from '@/data/meetup-data';
import { scrollToId } from '@/hooks';

const FACTS = [
  { k: '일시', v: '2026. 06. 05 (금) 15:00 – 16:30' },
  { k: '장소', v: `${MEETUP_META.venue} · ${MEETUP_META.capacity}` },
  { k: '주최', v: MEETUP_META.hostTeam },
];

export default function V2Hero() {
  return (
    <section id="v2-top" className="relative overflow-hidden">
      {/* 배경 그라디언트 — 장식은 이것 하나로 끝낸다 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 45% at 78% 8%, rgba(232,117,42,0.22) 0%, transparent 62%),' +
            'radial-gradient(50% 40% at 8% 62%, rgba(192,68,43,0.14) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 pt-[136px] md:pt-[180px] pb-20 md:pb-28">
        <p className="v2-label v2-rise">Monthly Engineering Meetup</p>

        <h1 className="v2-display mt-5 md:mt-7 v2-rise">
          TECH
          <br />
          MEETUP
        </h1>

        <p className="v2-lead mt-8 md:mt-10 max-w-[760px] v2-rise">
          「{MEETUP_META.themeKo}」
        </p>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[1.7] text-[var(--ink-2)] max-w-[620px] v2-rise">
          한 달에 한 번, 티빙 엔지니어가 직접 부딪힌 문제와 그 답을 공유합니다.
          화려한 발표보다는 솔직한 회고를 지향해요.
        </p>

        <div className="mt-10 md:mt-12 flex flex-wrap gap-3 v2-rise">
          <button onClick={() => { scrollToId('v2-sessions'); }} className="v2-btn">
            세션 보러 가기
          </button>
          <button onClick={() => { scrollToId('v2-cfp'); }} className="v2-btn v2-btn-ghost">
            발표 신청하기
          </button>
        </div>

        <dl className="mt-16 md:mt-24 grid gap-px bg-[var(--line)] sm:grid-cols-3 border border-[var(--line)] v2-rise">
          {FACTS.map((f) => (
            <div key={f.k} className="bg-[var(--paper)] px-6 py-7">
              <dt className="v2-label">{f.k}</dt>
              <dd className="mt-3 text-[16px] md:text-[17px] font-bold leading-[1.5]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
