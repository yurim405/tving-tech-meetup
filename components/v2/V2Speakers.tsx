import { SPEAKER_DATA } from '@/data/meetup-data';

/** 발표자 카드 — 사진 자리는 이니셜 블록으로 둔다(현재 데이터가 플레이스홀더 SVG라서). */
const TONES = ['var(--t-MAIN)', 'var(--t-INFRA)', 'var(--t-WEB)', 'var(--t-ML)'];

export default function V2Speakers() {
  return (
    <section id="v2-speakers" className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <p className="v2-label v2-rise">Speakers</p>
        <h2 className="v2-h2 mt-4 v2-rise">발표자</h2>
        <p className="mt-5 text-[16px] leading-[1.7] text-[var(--ink-2)] max-w-[560px] v2-rise">
          티빙 안쪽에서 매일 시스템을 굴리는 엔지니어들이 직접 이야기합니다.
        </p>

        <div className="mt-12 md:mt-16 grid gap-5 md:grid-cols-2">
          {SPEAKER_DATA.map((s, i) => (
            <article
              key={s.id}
              className="v2-rise rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] p-7 md:p-9 flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[20px] font-extrabold shrink-0"
                  style={{ background: TONES[i % TONES.length] }}
                  aria-hidden
                >
                  {s.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-[18px] font-extrabold tracking-[-0.03em]">{s.name}</div>
                  <div className="mt-1 text-[14px] text-[var(--ink-3)]">
                    {s.team} · {s.role}
                  </div>
                </div>
              </div>

              <h3 className="mt-7 text-[20px] md:text-[24px] font-extrabold leading-[1.35] tracking-[-0.035em]">
                {s.topic}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--ink-2)]">{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
