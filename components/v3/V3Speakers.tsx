import { SPEAKER_DATA } from '@/data/meetup-data';

export default function V3Speakers() {
  return (
    <section id="v3-speakers" className="relative px-5 md:px-10 py-28 md:py-40">
      <div className="max-w-[1520px] mx-auto">
        <div className="max-w-[640px]">
          <p className="v3-mono v3-rise">Speakers</p>
          <h2 className="v3-h2 mt-5 v3-rise">발표자</h2>
        </div>

        <div className="mt-14 md:mt-20 grid gap-5 md:grid-cols-2 max-w-[1180px]">
          {SPEAKER_DATA.map((s) => (
            <article
              key={s.id}
              className="v3-rise rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] p-7 md:p-9"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[18px] font-extrabold shrink-0 border border-[var(--line-2)]"
                  style={{ background: 'var(--bg-3)' }}
                >
                  {s.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <div className="text-[17px] font-extrabold tracking-[-0.03em]">{s.name}</div>
                  <div className="mt-1 text-[13px] text-[var(--fg-3)]">
                    {s.team} · {s.role}
                  </div>
                </div>
              </div>

              <h3 className="mt-7 text-[19px] md:text-[22px] font-extrabold leading-[1.4] tracking-[-0.035em]">
                {s.topic}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--fg-2)]">{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
