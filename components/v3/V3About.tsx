import { MEETUP_META } from '@/data/meetup-data';

const POINTS = [
  { k: '01', t: '무엇을 다루나요', d: '1,000만 동시 접속을 견디는 라이브 아키텍처, RSC로 다시 짠 티빙 웹, LLM 추천 파이프라인까지 — 표면에서 잘 보이지 않지만 매일 돌아가는 시스템들의 이야기.' },
  { k: '02', t: '누구를 위한 자리인가요', d: '미디어·스트리밍 도메인 엔지니어, 대규모 트래픽을 운영하는 플랫폼 엔지니어, 프론트엔드와 디자인 엔지니어를 환영합니다.' },
  { k: '03', t: '어떻게 진행되나요', d: '한 달에 한 번 오프라인으로 모입니다. 발표 뒤에는 질문과 회고를 나누는 시간을 넉넉히 둡니다.' },
];

export default function V3About() {
  return (
    <section id="v3-about" className="relative px-5 md:px-10 py-28 md:py-40">
      <div className="max-w-[1520px] mx-auto">
        {/* 선이 오른쪽을 지나가므로 본문은 왼쪽에 붙인다 */}
        <div className="max-w-[620px]">
          <p className="v3-mono v3-rise">About</p>
          <h2 className="v3-h2 mt-5 v3-rise">
            기술을 나누고,
            <br />
            경험을 잇다.
          </h2>
          <p className="mt-7 text-[16px] md:text-[17px] leading-[1.75] text-[var(--fg-2)] v3-rise">
            한 달에 한 번, 티빙 엔지니어가 직접 부딪힌 문제와 그 답을 공유합니다.
            화려한 발표보다는 솔직한 회고를 지향해요. 이번 달 호스트는 {MEETUP_META.hostTeam}입니다.
          </p>

          <ul className="mt-14 space-y-10">
            {POINTS.map((p) => (
              <li key={p.k} className="v3-rise flex gap-6">
                <span className="v3-mono !text-[var(--red)] pt-1">{p.k}</span>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-[-0.03em]">{p.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-[var(--fg-2)]">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
