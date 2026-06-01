/* =========================================================================
 *  Footer
 * ========================================================================= */

function FooterBru() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-[var(--bg-0)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* decorations */}
      <Sparkle size={60} color="var(--lime)" style={{ position: "absolute", top: "18%", right: "8%", transform: "rotate(15deg)" }} />
      <Sparkle size={32} color="#fff"        style={{ position: "absolute", top: "32%", right: "16%", transform: "rotate(-12deg)" }} />
      <StarBurst size={44} color="#fff"      style={{ position: "absolute", top: "10%", right: "20%" }} />
      <Scribble size={100} color="rgba(255,255,255,0.5)" style={{ position: "absolute", bottom: "30%", left: "4%", transform: "rotate(-12deg)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.22em] text-fg-4 font-bold">
              SEE YOU NEXT MONTH ✦
            </div>
            <h2
              className="mt-4 font-black tracking-[-0.06em] leading-[0.86]"
              style={{ fontSize: "clamp(72px, 16vw, 260px)" }}
            >
              TVING<span className="text-lime">.</span>
            </h2>
            <p className="mt-6 text-fg-3 text-[14px] leading-[1.7] max-w-[420px]">
              한 달에 한 번. 같은 라운지에서. 같은 호기심으로.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="sticker" style={{ transform: "rotate(-2deg)" }}>
                <Sparkle size={14} color="#000" /> VOL.08 · COMING SOON
              </span>
              <button onClick={() => scrollToId("cfp")} className="btn-ghost-line text-[12px] whitespace-nowrap" style={{ padding: "9px 16px" }}>
                알림 신청 →
              </button>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:gap-12 text-[13px]">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold mb-4">
                EXPLORE
              </div>
              <ul className="space-y-3 text-fg-2">
                {[
                  ["#about",    "About"],
                  ["#schedule", "Schedule"],
                  ["#speakers", "Speakers"],
                  ["#cfp",      "발표 신청"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); scrollToId(href.slice(1)); }}
                      className="hover:text-lime transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">{label}</span>
                      <span className="opacity-0 group-hover:opacity-100">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold mb-4">
                CONTACT
              </div>
              <ul className="space-y-3 text-fg-2">
                <li>techmeetup@tving.com</li>
                <li>티빙 사옥 1F 라운지</li>
                <li>서울 마포구</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-fg-4 tracking-[0.14em] uppercase">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-6 h-6"
              style={{ background: "var(--lime)", color: "#000", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.08em", fontSize: 14 }}
            >
              T
            </span>
            <span>HOSTED BY <span className="text-fg-2">TVING · {MEETUP_META.hostTeam}</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {year} TVING CORP.</span>
            <a href="#" className="hover:text-lime transition-colors">개인정보 처리방침</a>
            <a href="#" className="hover:text-lime transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FooterBru });
