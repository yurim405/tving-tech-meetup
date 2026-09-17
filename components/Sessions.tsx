import { trackColor, trackLabel } from './tracks';

/** 지난 밋업(2026년 8월)에서 실제로 발표된 세션. 이번 회차 발표자가 확정되면 교체한다. */
const PAST_SESSIONS = [
  {
    id: 'device-farm',
    track: 'QE',
    title: 'TVING Device Farm 구축기',
    desc: '맥북에 폰을 꽂아 쓰던 테스트를 공유 인프라로 옮긴 이야기. Appium Device Farm을 온프레미스로 올려 Hub가 조건에 맞는 실기기로 테스트를 보냅니다.',
    icon: '/objects/cloud-db.jpg',
  },
  {
    id: 'idea-lab',
    track: 'APP',
    title: '아이디어랩 채널 (#etc-idea-lab) 운영기',
    desc: '아이디어 리뷰에서 앱스토어까지 44일. 제도를 기다리는 대신 채널부터 열어 제안 35건을 받고 그중 두 기능을 실제로 배포했습니다.',
    icon: '/objects/pills.jpg',
  },
  {
    id: 'ai-context',
    track: 'APP',
    title: 'AI는 환경을 Context로 삼는다',
    desc: '환경(테스트·컨벤션)을 가꾸는 일이 곧 AI 산출물의 품질 관리다.',
    icon: '/objects/cloud.jpg',
  },
  {
    id: 'pitch-tracking',
    track: 'LIVE',
    title: 'KBO 피치트래킹 리플레이 개발기',
    desc: 'API가 주는 건 공을 던진 순간의 숫자 아홉 개뿐. 등가속도 운동과 근의 공식으로 궤적과 도달 시각을 되살려 Three.js로 다시 그렸습니다.',
    icon: '/objects/play.jpg',
  },
  {
    id: 'arcade',
    track: 'LIVE',
    title: '티빙 공채 채용 미니 게임 개발기',
    desc: 'HTML 파일 하나의 코드 검토 요청이 공채 홍보 웹게임이 됐습니다. 게임 5개를 MVP까지 만들어 2개만 남겼고, 걷어내기 쉽게 짜 둔 덕에 제거는 한 시간이었습니다.',
    icon: '/objects/play-alt.jpg',
  },
  {
    id: 'giants',
    track: 'LIVE',
    title: '니가 사는 그 집 어서 와, Giants는 처음이지?',
    desc: '한 레포에 섞여 있던 도메인을 pnpm + Turborepo 모노레포로 옮겼습니다. /live · /shorts · /sports가 각자 배포되고 장애도 각자 납니다.',
    icon: '/objects/brackets.jpg',
  },
];

export default function Sessions() {
  return (
    <section id="tm-sessions" className="border-t border-[var(--line)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <p className="tm-label tm-rise">지난 Key Sessions</p>
        <h2 className="tm-h2 mt-4 max-w-[680px] tm-rise">
          지난 밋업에서는
          <br />
          이런 이야기를 나눴습니다
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAST_SESSIONS.map((s) => (
            <article
              key={s.id}
              className="group relative rounded-[22px] border border-[var(--line)] p-7 pb-8 overflow-hidden transition-colors hover:border-[var(--line-2)] tm-rise"
            >
              {/* 트랙 색 띠 */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[5px]"
                style={{ background: trackColor(s.track) }}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.icon}
                alt=""
                aria-hidden
                width={800}
                height={800}
                loading="lazy"
                className="tm-obj w-[86px] h-[86px] object-contain transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-7deg]"
              />

              <div className="mt-6 flex items-center gap-2">
                <span
                  className="text-[11px] font-extrabold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full text-white"
                  style={{ background: trackColor(s.track) }}
                >
                  {trackLabel(s.track)}
                </span>
              </div>

              <h3 className="mt-4 text-[19px] font-extrabold leading-[1.35] tracking-[-0.03em]">{s.title}</h3>
              <p className="mt-3.5 text-[14px] leading-[1.7] text-[var(--ink-2)]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
