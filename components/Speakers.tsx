import { MEETUP_META, SPEAKER_DATA } from '@/data/meetup-data';
import TiltCard from '@/components/TiltCard';

/** 발표자마다 다른 3D 오브젝트를 붙여 카드가 구분되게 한다. */
const SPEAKER_ICON = ['/objects/play.jpg', '/objects/cloud-db-alt.jpg', '/objects/brackets.jpg', '/objects/pills.jpg'];

export default function Speakers() {
  return (
    <section id="tm-speakers" className="border-t border-[var(--line)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <p className="tm-label tm-rise">Speakers</p>
        <h2 className="tm-h2 mt-4 max-w-[680px] tm-rise">
          그 화면을 만든
          <br />
          사람들이 직접 말합니다
        </h2>

        {/* 라인업 확정 전이라 카드는 흐리게 깔고 그 위에 CFP를 얹는다. */}
        <div className="relative mt-14">
          <div
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 blur-[7px] opacity-60 select-none pointer-events-none"
            aria-hidden
          >
          {SPEAKER_DATA.map((s, i) => (
            <TiltCard
              key={s.id}
              className="group rounded-[22px] border border-[var(--line)] p-7 pb-8 tm-rise"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[13px] font-bold tracking-[0.04em] text-[var(--ink-3)]">{s.team}</p>
                  <h3 className="mt-1.5 text-[22px] font-extrabold tracking-[-0.03em]">{s.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold text-[var(--ink-2)]">{s.role}</p>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SPEAKER_ICON[i % SPEAKER_ICON.length]}
                  alt=""
                  aria-hidden
                  width={800}
                  height={800}
                  loading="lazy"
                  className="tm-obj w-[64px] h-[64px] shrink-0 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[10deg] group-hover:scale-110"
                />
              </div>

              <p className="mt-6 text-[16px] font-extrabold leading-[1.45] tracking-[-0.03em]">{s.topic}</p>
              <p className="mt-3 text-[14px] leading-[1.7] text-[var(--ink-2)]">{s.bio}</p>
            </TiltCard>
          ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 text-center">
            <div>
              <p className="tm-label">Call for Speakers</p>
              <p className="mt-3 text-[20px] md:text-[24px] font-extrabold tracking-[-0.03em]">
                이번 달 발표자를 모집하고 있습니다
              </p>
              <p className="mt-2 text-[15px] text-[var(--ink-2)]">
                라인업은 발표 확정과 함께 공개됩니다.
              </p>
            </div>
            <a
              href={MEETUP_META.cfpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tm-btn tm-btn-red"
            >
              발표자 모집 중 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
