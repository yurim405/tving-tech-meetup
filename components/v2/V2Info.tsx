const NOTES = [
  { t: '입퇴장', d: '세션 중간 입퇴장은 자유입니다. 조용히 이동해 주시면 감사하겠습니다.' },
  { t: '촬영 및 녹화', d: '발표 자료 촬영은 자유롭게 가능합니다. 다른 참석자의 얼굴이 담기지 않도록 주의해 주세요.' },
  { t: '질문은 환영', d: 'Q&A 시간에 자유롭게 질문해 주세요. Slido로도 실시간 질문을 받습니다.' },
  { t: '네트워킹', d: '명함 교환과 인사는 자연스럽게. 상대방이 불편하지 않은 선에서 대화를 나눠주세요.' },
  { t: '정리 정돈', d: '사용하신 컵과 간식 쓰레기는 지정된 장소에 분리수거 부탁드립니다.' },
  { t: '발표 중 매너', d: '세션 중에는 휴대폰을 무음으로 설정하고, 통화는 라운지 밖에서 부탁드립니다.' },
];

export default function V2Info() {
  return (
    <section id="v2-info" className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <p className="v2-label v2-rise">Guidelines</p>
        <h2 className="v2-h2 mt-4 v2-rise">지켜주세요</h2>
        <p className="mt-5 text-[16px] leading-[1.7] text-[var(--ink-2)] max-w-[560px] v2-rise">
          모두가 편안하게 밋업을 즐길 수 있도록, 몇 가지 부탁드립니다.
        </p>

        <div className="mt-12 md:mt-16 grid gap-px bg-[var(--line)] border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 v2-rise">
          {NOTES.map((n, i) => (
            <div key={n.t} className="bg-[var(--paper)] p-7 md:p-8">
              <span className="v2-label tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-[17px] font-extrabold tracking-[-0.03em]">{n.t}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--ink-2)]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
