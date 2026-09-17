import type { Metadata } from 'next';

import Reveal from '@/components/Reveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sessions from '@/components/Sessions';
import Speakers from '@/components/Speakers';
import Timetable from '@/components/Timetable';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TVING TECH MEETUP 2026 — Streaming the Future',
  description: '끊김 없이 안정적인 서비스를 이끄는 티빙의 엔지니어링. 같은 문제를 만난 사람들이 답을 나누는 자리.',
};

export default function Home() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Sessions />
        <Speakers />
        <Timetable />
      </main>
      <Footer />
    </>
  );
}
