import type { Metadata } from 'next';
import './v3.css';

import V3Reveal from '@/components/v3/V3Reveal';
import V3Thread from '@/components/v3/V3Thread';
import V3Header from '@/components/v3/V3Header';
import V3Hero from '@/components/v3/V3Hero';
import V3About from '@/components/v3/V3About';
import V3Program from '@/components/v3/V3Program';
import V3Speakers from '@/components/v3/V3Speakers';
import V3Cfp from '@/components/v3/V3Cfp';
import V3Footer from '@/components/v3/V3Footer';

export const metadata: Metadata = {
  title: 'TVING TECH MEETUP — Behind the Stream',
  description: '더 나은 스트리밍을 만드는 개발자들의 이야기. 기술을 나누고, 경험을 잇다.',
};

export default function V3Page() {
  return (
    // relative — 빨간 선 SVG가 이 박스 전체 높이를 덮는다
    <div className="v3 relative">
      <V3Reveal />
      <V3Thread />

      <V3Header />
      {/* 선 위로 본문이 올라오도록 */}
      <div className="relative z-10">
        <main>
          <V3Hero />
          <V3About />
          <V3Program />
          <V3Speakers />
          <V3Cfp />
        </main>
        <V3Footer />
      </div>
    </div>
  );
}
