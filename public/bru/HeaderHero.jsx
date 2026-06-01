/* =========================================================================
 *  Header — sticky, lime accents, monospace nav
 * ========================================================================= */

function HeaderBru() {
  const scrolled = useScrolled(30);
  const active = useActiveSection(["hero", "about", "schedule", "speakers", "cfp"]);
  const [open, setOpen] = useState(false);

  const NAV = [
    { id: "about",    label: "ABOUT" },
    { id: "schedule", label: "SCHEDULE" },
    { id: "speakers", label: "SPEAKERS" },
    { id: "cfp",      label: "APPLY" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        background: scrolled ? "rgba(11,11,11,0.7)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToId("hero"); }}
          className="flex items-center gap-2.5"
        >
          <span
            className="inline-flex items-center justify-center w-7 h-7"
            style={{ background: "var(--lime)", color: "#000", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.08em", fontSize: 18 }}
          >
            T
          </span>
          <span className="text-[15px] tracking-tight font-bold">
            TVING <span className="text-fg-3 font-normal">· Tech Meetup</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}
              className={`nav-link ${active === n.id ? "is-active" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
          <span className="chip hidden xl:inline-flex">VOL.07 · MAY 2026</span>
          <button onClick={() => scrollToId("cfp")} className="btn-lime" style={{ padding: "9px 16px", fontSize: 12, letterSpacing: "0.1em", boxShadow: "3px 3px 0 #000" }}>
            발표 신청 →
          </button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-fg-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-[var(--bg-1)]/95 backdrop-blur">
          <div className="px-6 py-5 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={"#" + n.id}
                onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId(n.id); }}
                className="nav-link"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================================================================
 *  Hero — black canvas, lime tags, massive type with green slash
 * ========================================================================= */

function HeroBru() {
  const { days, hours, mins, secs, isLive } = useCountdown("2026-05-26T14:00:00+09:00");

  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="relative min-h-screen flex flex-col overflow-hidden pt-[64px]"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-grid opacity-90 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 35% at 50% 45%, rgba(198,247,59,0.08) 0%, transparent 70%), radial-gradient(35% 30% at 12% 80%, rgba(198,247,59,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* DECORATIONS — sparkles + scribbles around the headline */}
      <Sparkle size={64} color="#fff"          style={{ position: "absolute", top: "30%", left: "9%",  transform: "rotate(8deg)" }} />
      <Sparkle size={38} color="#fff"          style={{ position: "absolute", top: "44%", left: "14%", transform: "rotate(-12deg)", opacity: 0.85 }} />
      <Sparkle size={32} color="var(--lime)"   style={{ position: "absolute", top: "26%", left: "17%", transform: "rotate(18deg)" }} />

      <Sparkle  size={56} color="#fff"        style={{ position: "absolute", top: "30%", right: "10%" }} />
      <Sparkle  size={36} color="var(--lime)" style={{ position: "absolute", top: "44%", right: "16%", transform: "rotate(15deg)" }} />
      <StarBurst size={48} color="#fff"       style={{ position: "absolute", top: "22%", right: "6%" }} />

      <BrushSmile width={150} color="#fff"   style={{ position: "absolute", bottom: "30%", left: "11%", transform: "rotate(8deg)" }} />
      <Scribble   size={130} color="#fff"    style={{ position: "absolute", bottom: "36%", right: "6%", transform: "rotate(-12deg)" }} />

      {/* corner sticker */}
      <div className="absolute top-[110px] right-6 md:right-10 z-10 sticker" style={{ transform: "rotate(8deg)" }}>
        ★ APPLY OPEN
      </div>

      {/* center content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-12">
        {/* pill tags */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14 reveal"
          data-delay="1"
          style={{ transform: "rotate(-2deg)" }}
        >
          <span className="pill-tag pill-tag-lime">
            1,000만이 보는 그 화면을
          </span>
          <span className="pill-tag pill-tag-white" style={{ transform: "rotate(3deg) translateY(2px)" }}>
            만드는 사람들
          </span>
        </div>

        {/* headline row 1 */}
        <div className="flex items-center gap-4 md:gap-6 reveal" data-delay="2">
          <HandSlash height={140} color="#fff" style={{ marginTop: -10 }} />
          <span className="display-hero italic" style={{ color: "#FF153C" }}>TVING</span>
        </div>

        {/* headline row 2 */}
        <div className="flex flex-wrap items-baseline justify-center gap-4 md:gap-6 mt-2 reveal" data-delay="3">
          <span className="display-hero">TECH</span>
          <span className="display-hero text-lime relative">
            MEETUP
            <BrushUnderline
              width={520}
              color="var(--lime)"
              style={{ position: "absolute", left: -8, bottom: "-14%", width: "104%" }}
            />
          </span>
        </div>

        {/* theme line */}
        <div className="mt-12 md:mt-16 font-mono text-[12px] md:text-[14px] tracking-[0.22em] uppercase text-fg-3 reveal" data-delay="4">
          THEME / 「{MEETUP_META.themeKo}」
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 reveal" data-delay="5">
          <button onClick={() => scrollToId("schedule")} className="btn-lime">
            <Icon name="play" size={12} fill="currentColor" stroke={0} />
            세션 둘러보기
          </button>
          <button onClick={() => scrollToId("cfp")} className="btn-ghost-line">
            <Icon name="mic" size={14} />
            발표 신청하기
          </button>
        </div>

        {/* countdown */}
        <div className="mt-12 flex items-center gap-2 md:gap-3 reveal" data-delay="6">
          <span className="text-[10px] tracking-[0.22em] font-mono text-fg-4 mr-1">
            {isLive ? "● NOW LIVE" : "STARTS IN"}
          </span>
          {[
            { v: days,  l: "D" },
            { v: hours, l: "H" },
            { v: mins,  l: "M" },
            { v: secs,  l: "S" },
          ].map((c, i) => (
            <div key={i} className="flex items-baseline gap-1 px-3 py-2 border border-line bg-[var(--bg-1)]/60 min-w-[58px]">
              <span className="text-[20px] md:text-[22px] font-extrabold tabular-nums tracking-tight">
                {String(c.v).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-fg-4 font-mono">{c.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM DATA STRIP — like V3 hero */}
      <div className="relative border-t border-line">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {[
            { l: "DATE",  v: "05.26",   b: "2026 · TUE" },
            { l: "TIME",  v: "14:00",   b: "→ 18:30 KST" },
            { l: "VENUE", v: "1F",      b: "TVING HQ · 라운지" },
            { l: "SEATS", v: "120+",    b: "+ ONLINE LIVE" },
          ].map((m, i) => (
            <div
              key={m.l}
              className="px-6 py-6 md:px-7 md:py-8 border-r border-line last:border-r-0"
              style={{ background: "rgba(11,11,11,0.6)", backdropFilter: "blur(8px)" }}
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-fg-4 font-bold">
                0{i+1} / {m.l}
              </div>
              <div className="mt-3 md:mt-4 flex items-baseline gap-2 flex-wrap">
                <span className="text-[36px] md:text-[44px] font-black tracking-[-0.04em] leading-none">
                  {m.v}
                </span>
              </div>
              <div className="mt-2 text-[12px] md:text-[13px] font-mono text-fg-3 tracking-wide">
                {m.b}
              </div>
            </div>
          ))}
          {/* HOST cell */}
          <div
            className="px-6 py-6 md:px-7 md:py-8 col-span-2 md:col-span-1 relative overflow-hidden"
            style={{ background: "rgba(11,11,11,0.6)", backdropFilter: "blur(8px)" }}
          >
            <Sparkle size={24} color="var(--lime)" style={{ position: "absolute", top: 14, right: 18 }} />
            <div className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold">
              05 / HOST
            </div>
            <div className="mt-3 md:mt-4 text-[26px] md:text-[28px] font-extrabold tracking-[-0.03em] leading-none">
              Web Core
            </div>
            <div className="mt-2 text-[12px] md:text-[13px] font-mono text-fg-3 tracking-wide">
              DEVELOPMENT · TVING
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-t border-line overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap py-3 font-mono text-[12px] tracking-[0.18em] text-fg-3 uppercase">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-8 px-6 shrink-0">
                {[
                  "K-CONTENT No.1",
                  "✦",
                  "LIVE · WEB · ML · ADS · DESIGN",
                  "✦",
                  "MONTHLY ENGINEERING JOURNAL",
                  "✦",
                  "HOSTED BY WEB CORE DEVELOPMENT",
                  "✦",
                  "VOL.07 · 「" + MEETUP_META.themeKo + "」",
                  "✦",
                ].map((t, i) => (
                  <span key={i} className={t === "✦" ? "text-lime" : ""}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => scrollToId("about")}
        className="absolute left-1/2 -translate-x-1/2 bottom-[212px] md:bottom-[224px] flex flex-col items-center gap-1 text-fg-3 hover:text-lime transition-colors z-10"
        aria-label="Scroll to About"
      >
        <span className="bounce-arrow"><Icon name="arrowDown" size={20} /></span>
      </button>
    </section>
  );
}

Object.assign(window, { HeaderBru, HeroBru });
