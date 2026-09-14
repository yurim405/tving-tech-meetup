import type { Metadata } from 'next';
import './v2.css';

import V2Reveal from '@/components/v2/V2Reveal';
import V2Header from '@/components/v2/V2Header';
import V2Hero from '@/components/v2/V2Hero';
import V2About from '@/components/v2/V2About';
import V2Sessions from '@/components/v2/V2Sessions';
import V2Speakers from '@/components/v2/V2Speakers';
import V2Info from '@/components/v2/V2Info';
import V2Cfp from '@/components/v2/V2Cfp';
import V2Footer from '@/components/v2/V2Footer';

export const metadata: Metadata = {
  title: 'TVING Tech Meetup — 2026. 06. 05',
  description: '한 달에 한 번, 티빙 엔지니어가 직접 부딪힌 문제와 그 답을 공유합니다.',
};

export default function V2Page() {
  return (
    // 전용 스타일이 .v2 안으로만 걸리도록 전체를 감싼다
    <div className="v2">
      <V2Reveal />
      <V2Header />
      <main>
        <V2Hero />
        <V2About />
        <V2Sessions />
        <V2Speakers />
        <V2Info />
        <V2Cfp />
      </main>
      <V2Footer />
    </div>
  );
}
