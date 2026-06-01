/* =========================================================================
 *  About — title left, description right, scroll-reveal
 * ========================================================================= */

function About() {
  return (
    <section
      id="about"
      data-screen-label="02 About"
      className="relative py-28 md:py-40 border-t border-line"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left: title */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="section-tag reveal"><span className="dot" /> ABOUT THIS EDITION</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              한 달에 한 번,<br />
              <span className="text-red">우리가 만든</span> 것을<br />
              우리가 말합니다.
            </h2>
            <p className="mt-8 text-fg-3 text-[15px] leading-[1.7] max-w-[420px] reveal" data-delay="2">
              TVING Tech Meetup은 티빙 엔지니어가 직접 부딪힌 문제와 그 답을 공유하는
              월간 기술 공유회입니다. 화려한 발표보다는 솔직한 회고를 지향합니다.
            </p>
          </div>

          {/* right: long-form */}
          <div className="md:col-span-7 space-y-10">
            <div className="reveal" data-delay="1">
              <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">01 — WELCOME</div>
              <p className="mt-3 text-[19px] md:text-[22px] leading-[1.6] text-fg-2">
                안녕하세요. 5월 밋업의 호스트, <span className="text-white">Web Core Development</span>입니다.
                이번 달은 「<span className="text-white">{MEETUP_META.themeKo}</span>」를 주제로,
                티빙 안쪽에서 일어나는 일들을 <span className="text-white">7개의 세션</span>으로 풀어 봅니다.
              </p>
            </div>

            <div className="reveal" data-delay="2">
              <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">02 — WHAT'S INSIDE</div>
              <p className="mt-3 text-[16px] leading-[1.75] text-fg-3">
                1,000만 동시 접속을 견디는 라이브 아키텍처부터, RSC로 다시 짠 티빙 웹,
                LLM 추천 파이프라인, 그리고 디자인 시스템 운영의 1년까지 — 표면에서 잘
                보이지 않지만 매일 돌아가는 시스템들의 이야기를 가져왔습니다.
              </p>
            </div>

            <div className="reveal" data-delay="3">
              <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">03 — FOR WHOM</div>
              <p className="mt-3 text-[16px] leading-[1.75] text-fg-3">
                미디어·스트리밍 도메인을 다루는 엔지니어, 대규모 트래픽을 운영해본
                백엔드/플랫폼 엔지니어, 프로덕트 단을 책임지는 프론트엔드/디자인
                엔지니어 — 그리고 K-콘텐츠 산업이 어떻게 만들어지는지 궁금한 모두를
                환영합니다.
              </p>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4 reveal" data-delay="4">
              {[
                { v: "07", l: "회차", s: "Vol." },
                { v: "120+", l: "오프라인 좌석", s: "+ 온라인" },
                { v: "7", l: "세션", s: "이번 달" },
                { v: "10K", l: "누적 시청", s: "온라인 다시보기" },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">{s.s}</div>
                  <div className="mt-3 text-[40px] md:text-[44px] font-semibold tracking-[-0.04em] leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[13px] text-fg-3">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
