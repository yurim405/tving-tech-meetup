import { SCHEDULE_DATA } from '@/data/meetup-data';

export default function V3Program() {
  return (
    <section id="v3-program" className="relative px-5 md:px-10 py-28 md:py-40">
      <div className="max-w-[1520px] mx-auto">
        {/* 선이 왼쪽으로 넘어오는 구간이라 본문은 오른쪽에 붙인다 */}
        <div className="ml-auto max-w-[780px]">
          <p className="v3-mono v3-rise">Program</p>
          <h2 className="v3-h2 mt-5 v3-rise">프로그램</h2>
          <p className="mt-6 text-[16px] leading-[1.75] text-[var(--fg-2)] v3-rise">
            {SCHEDULE_DATA.length}개의 세션으로 진행됩니다.
          </p>

          <ol className="mt-12 border-b border-[var(--line)] v3-rise">
            {SCHEDULE_DATA.map((s, i) => (
              <li key={`${s.time}-${s.title}`}>
                <div className="v3-row">
                  <span className="v3-mono !text-[11px] !tracking-[0.14em]">
                    <span className="block text-[var(--red)]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="block mt-1.5 tabular-nums">{s.time}</span>
                  </span>

                  <span className="min-w-0">
                    <span className="v3-row-title block">{s.title}</span>
                    <span className="block mt-2 text-[14px] text-[var(--fg-3)]">
                      {s.speaker ? `${s.speaker}${s.role ? ` · ${s.role}` : ''}` : s.desc}
                    </span>
                  </span>

                  <span className="v3-tag">{s.track ?? 'ALL'}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
