'use client';

import { Sparkle, StarBurst } from '@/components/Decorations';

const GUIDELINES = [
  {
    emoji: '📸',
    title: '촬영 및 녹화',
    desc: '발표 자료의 촬영·녹화는 자유롭게 가능합니다. 단, 다른 참석자의 얼굴이 포함되지 않도록 주의해 주세요.',
  },
  {
    emoji: '🔇',
    title: '발표 중 매너',
    desc: '세션 중에는 휴대폰을 무음으로 설정하고, 통화는 라운지 밖에서 부탁드립니다.',
  },
  {
    emoji: '💬',
    title: '질문은 환영',
    desc: 'Q&A 시간에 자유롭게 질문해 주세요. Slido로도 실시간 질문을 받습니다.',
  },
  {
    emoji: '♻️',
    title: '정리 정돈',
    desc: '사용하신 컵과 간식 쓰레기는 지정된 장소에 분리수거 부탁드립니다.',
  },
  {
    emoji: '🤝',
    title: '네트워킹 매너',
    desc: '명함 교환, 인사는 자연스럽게! 상대방이 불편하지 않은 선에서 대화를 나눠주세요.',
  },
  {
    emoji: '🚪',
    title: '입퇴장',
    desc: '세션 중간 입퇴장은 자유입니다. 조용히 이동해 주시면 감사하겠습니다.',
  },
];

/* 카드를 2번 복제하여 무한 롤링 구현 */
const ROLLING_ITEMS = [...GUIDELINES, ...GUIDELINES];

function GuidelineCard({ item }: { item: (typeof GUIDELINES)[number] }) {
  return (
    <div
      className="group relative shrink-0 w-[280px] md:w-[320px] px-6 py-7 rounded-2xl border bg-[var(--bg-1)] transition-all duration-200 hover:border-[var(--lime)] hover:translate-y-[-3px] hover:shadow-[0_8px_24px_rgba(198,247,59,0.12)]"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="text-[32px] mb-4 transition-transform duration-300 group-hover:scale-110">
        {item.emoji}
      </div>
      <h3 className="text-[16px] font-bold tracking-tight text-white mb-2 group-hover:text-[var(--lime)] transition-colors">
        {item.title}
      </h3>
      <p className="text-[13px] leading-[1.7] text-[var(--fg-3)]">
        {item.desc}
      </p>
    </div>
  );
}

export default function GuidelinesSection() {
  return (
    <section className="relative py-28 md:py-40 border-t border-[var(--line)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-tight opacity-40 pointer-events-none" />

      <div className="absolute top-[10%] right-[6%] rotate-[12deg]">
        <Sparkle size={36} color="var(--lime)" className="deco-twinkle" style={{ '--d': '0.3s' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-[12%] left-[5%]">
        <StarBurst size={40} color="#fff" className="deco-wiggle" style={{ '--d': '0.6s' } as React.CSSProperties} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div className="section-tag reveal">
            <span className="num">06</span> GUIDELINES
          </div>
          <h2 className="display-section mt-6 reveal" data-delay="1">
            지켜<span className="text-lime">주세요.</span>
          </h2>
          <p className="mt-5 max-w-[480px] text-[var(--fg-3)] text-[15px] leading-[1.7] reveal" data-delay="2">
            모두가 편안하게 밋업을 즐길 수 있도록, 몇 가지 부탁드립니다.
          </p>
        </div>
      </div>

      {/* Rolling cards — 화면 전체 너비 사용 */}
      <div className="relative overflow-hidden group/track">
        {/* 호버 시 일시정지를 위한 그라디언트 마스크 (좌우 페이드) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg-0)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg-0)] to-transparent" />

        <div
          className="flex gap-4 md:gap-5 py-2 group-hover/track:[animation-play-state:paused]"
          style={{
            animation: 'scroll-cards 30s linear infinite',
            width: 'max-content',
          }}
        >
          {ROLLING_ITEMS.map((item, i) => (
            <GuidelineCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
