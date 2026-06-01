/* =========================================================================
 *  Footer
 * ========================================================================= */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-black overflow-hidden">
      {/* gigantic typographic mark */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] tracking-[0.18em] font-mono text-fg-4">SEE YOU NEXT MONTH</div>
            <h2
              className="mt-4 font-semibold tracking-[-0.05em] leading-[0.9]"
              style={{ fontSize: "clamp(56px, 14vw, 220px)" }}
            >
              TVING<span className="text-red">.</span>
            </h2>
            <p className="mt-6 text-fg-3 text-[14px] leading-[1.7] max-w-[420px]">
              한 달에 한 번. 같은 라운지에서. 같은 호기심으로.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:gap-12 text-[13px]">
            <div>
              <div className="text-fg-4 text-[10px] tracking-[0.18em] font-mono mb-3">EXPLORE</div>
              <ul className="space-y-2.5 text-fg-2">
                <li><a href="#about"    onClick={(e) => { e.preventDefault(); scrollToId("about"); }}    className="hover:text-white transition-colors">About</a></li>
                <li><a href="#schedule" onClick={(e) => { e.preventDefault(); scrollToId("schedule"); }} className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#speakers" onClick={(e) => { e.preventDefault(); scrollToId("speakers"); }} className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#cfp"      onClick={(e) => { e.preventDefault(); scrollToId("cfp"); }}      className="hover:text-white transition-colors">발표 신청</a></li>
              </ul>
            </div>
            <div>
              <div className="text-fg-4 text-[10px] tracking-[0.18em] font-mono mb-3">CONTACT</div>
              <ul className="space-y-2.5 text-fg-2">
                <li>techmeetup@tving.com</li>
                <li>티빙 사옥 1F 라운지</li>
                <li>서울 마포구</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-fg-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[var(--red)] text-white">
              <TMark size={14} />
            </span>
            <span>Hosted by <span className="text-fg-2">TVING · {MEETUP_META.hostTeam}</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {year} TVING Corp.</span>
            <a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
