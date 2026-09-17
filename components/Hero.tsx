'use client';

import { scrollToId } from '@/hooks';
import { MEETUP_META } from '@/data/meetup-data';
import Objects from './Objects';

export default function Hero() {
  return (
    <section id="tm-top" className="relative min-h-[100svh] flex flex-col">
      <Objects />

      {/* 오브젝트 위로 타이포가 올라오도록 */}
      <div className="relative z-10 flex-1 flex items-center px-5 md:px-10 pt-[100px] pb-[92px]">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-[760px] mx-auto md:mx-0 md:ml-[17%] text-center md:text-left">
            <h1 className="tm-display tm-rise">
              <img
                src="/logo-tving-gray.svg"
                alt="TVING"
                className="block w-auto mx-auto md:mx-0"
                style={{ height: '0.72em', marginBottom: '0.1em' }}
              />
              TECH
              <br />
              MEETUP
              <br />
              2026
            </h1>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 tm-rise">
              <span className="tm-pill">
                <span className="w-2 h-2 rounded-full bg-[var(--red)]" />
                {MEETUP_META.dateText.split(' ').slice(0, 3).join(' ')}
              </span>
              <span className="tm-label !text-[var(--ink-2)]">{MEETUP_META.venue} 회의실</span>
            </div>

            <p className="tm-display-sub mt-8 md:mt-10 tm-rise">
              Streaming
              <br />
              the Future
            </p>

            {/* 문장마다 행을 나눠 의미 단위로 끊는다. 한 문장이 넘칠 때의 줄바꿈은
                text-balance가 고르게 맞춰 준다(word-break: keep-all은 globals.css에). */}
            <p className="mt-6 text-[16px] md:text-[19px] leading-[1.65] text-[var(--ink-2)] max-w-[560px] mx-auto md:mx-0 text-balance tm-rise">
              <span className="block">끊김 없이 안정적인 서비스를 이끄는 티빙의 엔지니어링.</span>
              <span className="block">같은 문제를 만난 사람들이 답을 나누는 자리입니다.</span>
            </p>

            <div className="mt-9 md:mt-11 flex flex-wrap items-center justify-center md:justify-start gap-3 tm-rise">
              <a
                href={MEETUP_META.cfpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tm-btn tm-btn-red"
              >
                발표자 모집 중 →
              </a>
              <button onClick={() => { scrollToId('tm-sessions'); }} className="tm-btn tm-btn-ghost">
                프로그램 보기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 코너 메타 */}
      <div className="relative z-10 hidden md:block px-5 md:px-10 pb-7">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 text-[13px] font-semibold text-[var(--ink-2)]">
          <span>{MEETUP_META.dateText.split('–')[0].trim()}</span>
          <span>Seoul, Korea</span>
        </div>
      </div>
    </section>
  );
}
