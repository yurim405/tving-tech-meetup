'use client';

import { useState } from 'react';
import { SCHEDULE_DATA } from '@/data/meetup-data';
import { trackColor, TRACK_CAPTION } from './tracks';

export default function V2Sessions() {
  // 마우스를 올린 세션이 왼쪽 패널에 그대로 비친다. 기본값은 첫 세션.
  const [active, setActive] = useState(0);
  const cur = SCHEDULE_DATA[active];

  return (
    <section id="v2-sessions" className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-6">
        <p className="v2-label v2-rise">Sessions</p>
        <h2 className="v2-h2 mt-4 v2-rise">세션 타임라인</h2>
        <p className="mt-5 text-[16px] leading-[1.7] text-[var(--ink-2)] max-w-[560px] v2-rise">
          {SCHEDULE_DATA.length}개의 세션을 준비했어요. 목록에 마우스를 올리면 트랙을 미리 볼 수 있습니다.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-start">
          {/* 왼쪽 — 트랙 색 패널. 데스크톱에서만 따라붙는다 */}
          <div
            className="hidden lg:block sticky top-[100px] rounded-2xl p-8 text-white overflow-hidden v2-rise"
            style={{ background: trackColor(cur.track), transition: 'background 420ms cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="text-[13px] font-extrabold tracking-[0.16em] opacity-80">
              {cur.track ?? 'ALL'}
            </div>
            <div className="mt-2 text-[14px] opacity-80">
              {TRACK_CAPTION[cur.track ?? 'ALL']}
            </div>

            <div className="mt-16 text-[64px] font-extrabold leading-none tabular-nums opacity-90">
              {String(active + 1).padStart(2, '0')}
            </div>
            <div className="mt-5 text-[22px] font-extrabold leading-[1.3] tracking-[-0.03em]">
              {cur.title}
            </div>
            <div className="mt-4 text-[14px] leading-[1.6] opacity-85">{cur.desc}</div>

            <div className="mt-8 pt-5 border-t border-white/25 flex items-center gap-4 text-[13px] font-semibold">
              <span className="tabular-nums">{cur.time}</span>
              {cur.duration && <span className="opacity-80">{cur.duration}</span>}
              {cur.speaker && <span className="opacity-80">{cur.speaker}</span>}
            </div>
          </div>

          {/* 오른쪽 — 번호를 매긴 세션 목록 */}
          <ol className="border-b border-[var(--line)] v2-rise">
            {SCHEDULE_DATA.map((s, i) => (
              <li key={`${s.time}-${s.title}`}>
                <button
                  type="button"
                  className="v2-row"
                  data-active={active === i}
                  onMouseEnter={() => { setActive(i); }}
                  onFocus={() => { setActive(i); }}
                >
                  <span className="v2-row-num">
                    {String(i + 1).padStart(2, '0')}
                    <span className="block mt-1 text-[var(--ink-3)] font-semibold">{s.time}</span>
                  </span>

                  <span className="min-w-0">
                    <span className="v2-row-title block">{s.title}</span>
                    <span className="v2-row-meta block">
                      {s.speaker ? `${s.speaker}${s.role ? ` · ${s.role}` : ''}` : s.desc}
                    </span>
                  </span>

                  <span
                    className="v2-row-track"
                    style={{ background: trackColor(s.track) }}
                  >
                    {s.track ?? 'ALL'}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
