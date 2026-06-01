/* =========================================================================
 *  About — title left (with brushy highlight), description right
 * ========================================================================= */

function AboutBru() {
  return (
    <section
      id="about"
      data-screen-label="02 About"
      className="relative py-28 md:py-40 border-t border-line overflow-hidden"
    >
      {/* loose grid */}
      <div className="absolute inset-0 bg-grid-tight opacity-50 pointer-events-none" />

      {/* decorations */}
      <Sparkle size={40} color="var(--lime)" style={{ position: "absolute", top: "12%", right: "8%", transform: "rotate(20deg)" }} />
      <Scribble size={120} color="rgba(255,255,255,0.6)" style={{ position: "absolute", bottom: "8%", left: "4%", transform: "rotate(-10deg)" }} />
      <ArrowDoodle size={70} color="#fff" style={{ position: "absolute", top: "44%", right: "6%", transform: "rotate(20deg)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left — title */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="section-tag reveal">
              <span className="num">02</span> ABOUT
            </div>

            <h2 className="display-section mt-8 reveal" data-delay="1" style={{ fontWeight: 900 }}>
              한 달에 한 번,<br />
              <span className="relative inline-block">
                우리가 만든
                <BrushUnderline
                  width={520}
                  color="var(--lime)"
                  style={{ position: "absolute", left: -4, bottom: "-12%", width: "104%" }}
                />
              </span><br />
              것을 <span style={{ background: "var(--lime)", color: "#000", padding: "0 14px", marginLeft: -6, display: "inline-block", transform: "rotate(-1deg)" }}>말합니다.</span>
            </h2>

            <p className="mt-10 text-fg-3 text-[15px] leading-[1.75] max-w-[420px] reveal" data-delay="2">
              TVING Tech Meetup은 티빙 엔지니어가 직접 부딪힌 문제와 그 답을
              공유하는 월간 기술 공유회입니다. 화려한 발표보다는
              <span className="text-white"> 솔직한 회고</span>를 지향합니다.
            </p>

            <div className="mt-10 flex items-center gap-3 reveal" data-delay="3">
              <span className="sticker" style={{ transform: "rotate(-2deg)" }}>
                <Sparkle size={14} color="#000" /> SINCE 2024
              </span>
              <span className="font-mono text-[11px] text-fg-4 tracking-[0.16em]">VOL.01 → VOL.07</span>
            </div>
          </div>

          {/* right — chapters */}
          <div className="md:col-span-7 space-y-12">
            {[
              {
                tag: "01 ─ WELCOME",
                body: <>안녕하세요. 5월 밋업의 호스트, <span style={{ background: "var(--lime)", color: "#000", padding: "0 8px" }}>Web Core Development</span>입니다. 이번 달은 「{MEETUP_META.themeKo}」를 주제로, 티빙 안쪽에서 일어나는 일들을 <span className="text-white">7개의 세션</span>으로 풀어 봅니다.</>,
              },
              {
                tag: "02 ─ WHAT'S INSIDE",
                body: <>1,000만 동시 접속을 견디는 라이브 아키텍처부터, RSC로 다시 짠 티빙 웹, LLM 추천 파이프라인, 디자인 시스템 운영의 1년까지 — 표면에서 잘 보이지 않지만 매일 돌아가는 시스템들의 이야기.</>,
              },
              {
                tag: "03 ─ FOR WHOM",
                body: <>미디어·스트리밍 도메인 엔지니어, 대규모 트래픽을 운영하는 플랫폼 엔지니어, 프로덕트 단을 책임지는 프론트엔드/디자인 엔지니어 — 그리고 K-콘텐츠가 어떻게 만들어지는지 궁금한 모두를 환영합니다.</>,
              },
            ].map((c, i) => (
              <div key={i} className="reveal" data-delay={i+1}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-lime font-bold">{c.tag}</span>
                  <span className="flex-1 h-px bg-line" />
                </div>
                <p className="mt-4 text-[17px] md:text-[19px] leading-[1.65] text-fg-2">
                  {c.body}
                </p>
              </div>
            ))}

            {/* stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 reveal" data-delay="4">
              {[
                { v: "07",   l: "회차",         s: "VOL." },
                { v: "120+", l: "오프라인 좌석", s: "+ 온라인" },
                { v: "7",    l: "세션",         s: "이번 달" },
                { v: "10K",  l: "누적 시청",    s: "다시보기" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="relative px-5 py-6 border bg-[var(--bg-1)]"
                  style={{
                    borderColor: i === 0 ? "var(--lime)" : "var(--line)",
                    boxShadow: i === 0 ? "4px 4px 0 var(--lime)" : "4px 4px 0 #000",
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-fg-4 font-bold">{s.s}</div>
                  <div className="mt-3 text-[44px] md:text-[48px] font-black tracking-[-0.04em] leading-none">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[13px] text-fg-3">{s.l}</div>
                  {i === 0 && (
                    <Sparkle size={20} color="var(--lime)" style={{ position: "absolute", top: 10, right: 12 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutBru });
