'use client';

import { useMemo, useState } from 'react';
import { SCHEDULE_DATA } from '@/data/meetup-data';
import { trackColor, trackLabel } from './tracks';

/** 전체 보기를 뜻하는 필터 키. 트랙 'ALL'(모두를 위한 시간)과 구분해야 한다. */
const ANY = '*';

export default function Timetable() {
  // 칩은 실제 데이터에 있는 트랙으로만 만든다. 세션이 바뀌어도 빈 목록이 생기지 않는다.
  const tracks = useMemo(
    () => [ANY, ...Array.from(new Set(SCHEDULE_DATA.map((s) => s.track ?? 'ALL')))],
    [],
  );
  const [filter, setFilter] = useState(ANY);

  const rows = useMemo(
    () => (filter === ANY ? SCHEDULE_DATA : SCHEDULE_DATA.filter((s) => (s.track ?? 'ALL') === filter)),
    [filter],
  );

  return (
    <section id="tm-timetable" className="border-t border-[var(--line)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <p className="tm-label tm-rise">Time Table</p>
        <h2 className="tm-h2 mt-4 tm-rise">타임테이블</h2>

        <div className="mt-9 flex flex-wrap gap-2.5 tm-rise">
          {tracks.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={filter === t}
              onClick={() => { setFilter(t); }}
              className="tm-chip"
            >
              {t === ANY ? '전체' : trackLabel(t)}
            </button>
          ))}
        </div>

        <ul className="mt-10 border-t border-[var(--line)]">
          {rows.map((s) => (
            <li
              key={s.time + s.title}
              className="grid grid-cols-[72px_1fr] md:grid-cols-[110px_1fr_190px] gap-x-5 gap-y-2 items-baseline py-6 border-b border-[var(--line)]"
            >
              <span className="text-[16px] md:text-[19px] font-extrabold tabular-nums tracking-[-0.02em]">
                {s.time}
              </span>

              <div className="col-start-2">
                <h3 className="text-[17px] md:text-[20px] font-extrabold leading-[1.4] tracking-[-0.03em]">
                  {s.title}
                </h3>
                {s.desc && <p className="mt-2 text-[14px] leading-[1.7] text-[var(--ink-2)]">{s.desc}</p>}

                {/* 데스크톱에서는 오른쪽 칸이 맡는 정보라 좁은 화면에서만 보여준다 */}
                <div className="mt-3 flex flex-wrap items-center gap-2 md:hidden">
                  <TrackBadge track={s.track} />
                  {s.speaker && (
                    <span className="text-[13px] font-semibold text-[var(--ink-2)]">
                      {s.speaker}
                      {s.role && <span className="text-[var(--ink-3)]"> · {s.role}</span>}
                    </span>
                  )}
                  {s.duration && <span className="text-[13px] text-[var(--ink-3)]">{s.duration}</span>}
                </div>
              </div>

              <div className="hidden md:flex flex-col items-end gap-2 text-right">
                <TrackBadge track={s.track} />
                {s.speaker && (
                  <span className="text-[14px] font-semibold text-[var(--ink-2)]">
                    {s.speaker}
                    {s.role && <span className="text-[var(--ink-3)]"> · {s.role}</span>}
                  </span>
                )}
                {s.duration && <span className="text-[13px] text-[var(--ink-3)]">{s.duration}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TrackBadge({ track }: { track?: string }) {
  return (
    <span
      className="text-[11px] font-extrabold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full text-white whitespace-nowrap"
      style={{ background: trackColor(track) }}
    >
      {trackLabel(track)}
    </span>
  );
}
