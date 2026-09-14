import Header from '@/components/Header';
import CursorGlow from '@/components/CursorGlow';
import { PuffyDefs } from '@/components/Puffy';
import RevealProvider from '@/components/RevealProvider';
import HeroSection from '@/components/HeroSection';
import TickerBand from '@/components/TickerBand';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import GuidelinesSection from '@/components/GuidelinesSection';
import CfpSection from '@/components/CfpSection';
import Footer from '@/components/Footer';

const TICKER_1 = [
  '「스트리밍의 안쪽, 그 너머」', '✦',
  'LIVE · WEB · ML · ADS', '✦',
  'TVING TECH MEETUP', '✦',
  'MAY 2026', '✦',
];

const TICKER_2 = [
  'CALL FOR PROPOSALS', '✦',
  '발표 신청 진행 중', '✦',
  'WEB CORE DEVELOPMENT', '✦',
  'K-CONTENT No.1', '✦',
  'MONTHLY ENGINEERING JOURNAL', '✦',
];

export default function Home() {
  return (
    <>
      <PuffyDefs />
      <CursorGlow />
      <RevealProvider />
      <Header />
      <main>
        <HeroSection />
        {/* 히어로 아래 전체 콘텐츠: 검정 배경으로 히어로를 완전히 가림 */}
        <div className="relative z-[1] bg-[var(--bg-0)]">
          <AboutSection />
          <TickerBand items={TICKER_1} />
          <ScheduleSection />
          <TickerBand items={TICKER_2} reverse speed="fast" />
          <SpeakersSection />
          <GuidelinesSection />
          <CfpSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
