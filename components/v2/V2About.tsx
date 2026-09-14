import { MEETUP_META } from '@/data/meetup-data';

const CHAPTERS = [
  {
    k: '무엇을 다루나요',
    v: '1,000만 동시 접속을 견디는 라이브 아키텍처부터, RSC로 다시 짠 티빙 웹, LLM 추천 파이프라인까지 — 표면에서 잘 보이지 않지만 매일 돌아가는 시스템들의 이야기.',
  },
  {
    k: '누구를 위한 자리인가요',
    v: '미디어·스트리밍 도메인 엔지니어, 대규모 트래픽을 운영하는 플랫폼 엔지니어, 프론트엔드와 디자인 엔지니어 — 그리고 K-콘텐츠가 어떻게 만들어지는지 궁금한 모두를 환영합니다.',
  },
  {
    k: '어떻게 진행되나요',
    v: '한 달에 한 번, 오프라인으로 모입니다. 발표 후에는 질문과 회고를 나누는 시간을 넉넉히 둡니다.',
  },
];

export default function V2About() {
  return (
    <section id="v2-about" className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-32">
        <span className="v2-badge v2-rise">About</span>

        <p className="v2-lead mt-7 max-w-[900px] v2-rise">
          한 달에 한 번, 우리가 만든 것을 말합니다.
          <br />
          이번 달 호스트는 {MEETUP_META.hostTeam}이에요.
        </p>

        {/* gap-px로 구분선을 만드는 그리드는 셀이 아니라 컨테이너에 리빌을 건다.
            셀에 걸면 나타나기 전까지 구분선 색이 회색 덩어리로 보인다. */}
        <div className="mt-16 md:mt-24 grid gap-px bg-[var(--line)] border border-[var(--line)] md:grid-cols-3 v2-rise">
          {CHAPTERS.map((c) => (
            <div key={c.k} className="bg-[var(--paper)] p-7 md:p-9">
              <h3 className="text-[16px] font-extrabold tracking-[-0.03em]">{c.k}</h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-[var(--ink-2)]">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
