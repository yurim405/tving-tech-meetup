/* =========================================================================
 *  Header — sticky, blurs after scroll
 * ========================================================================= */

function Header() {
  const scrolled = useScrolled(30);
  const active = useActiveSection(["hero", "about", "schedule", "speakers", "cfp"]);
  const [open, setOpen] = useState(false);

  const NAV = [
    { id: "about",    label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "speakers", label: "Speakers" },
    { id: "cfp",      label: "Apply" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        background: scrolled ? "rgba(10,10,10,0.72)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToId("hero"); }}
          className="flex items-center gap-2.5 group"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[var(--red)] text-white">
            <TMark size={18} />
          </span>
          <span className="text-[15px] tracking-tight font-semibold">
            TVING <span className="text-fg-3 font-normal">Tech Meetup</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px]">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}
              className="nav-link"
              style={{
                color: active === n.id ? "var(--fg-1)" : undefined,
              }}
            >
              {n.label}
              {active === n.id && (
                <span
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--red)", boxShadow: "0 0 8px var(--red-glow)" }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
          <span className="chip hidden xl:inline-flex">{MEETUP_META.edition}</span>
          <button
            onClick={() => scrollToId("cfp")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium bg-white text-black hover:bg-[var(--fg-2)] transition-colors whitespace-nowrap"
          >
            발표 신청
            <Icon name="arrowUpRight" size={14} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-fg-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-bg-1/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={"#" + n.id}
                onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId(n.id); }}
                className="py-2 text-[15px] text-fg-2"
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
 *  Hero
 * ========================================================================= */

function Hero() {
  const { days, hours, mins, secs, isLive } = useCountdown("2026-05-26T14:00:00+09:00");

  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-[64px]"
    >
      {/* layered background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 30%, rgba(255,21,60,0.16) 0%, transparent 60%), radial-gradient(50% 40% at 80% 70%, rgba(255,21,60,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto w-full px-6 md:px-10 pt-20 md:pt-28 flex-1 flex flex-col">
        {/* top tag row */}
        <div className="flex flex-wrap items-center gap-3 reveal" data-delay="1">
          <span className="section-tag"><span className="dot" /> {MEETUP_META.edition} · {MEETUP_META.theme}</span>
          <span className="chip chip-red">LIVE 신청 진행 중</span>
        </div>

        {/* Title */}
        <h1 className="hero-title display-hero mt-10 md:mt-12 reveal" data-delay="2">
          TVING <span className="hero-month">{MEETUP_META.monthLabel}</span>
          <br />
          Tech Meetup<span className="text-red">.</span>
        </h1>

        {/* Subtitle + ko theme */}
        <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-end reveal" data-delay="3">
          <p className="md:col-span-7 text-[18px] md:text-[22px] leading-[1.55] text-fg-2 max-w-[640px]">
            No.1 K-콘텐츠 플랫폼을 만드는 <span className="text-white font-medium">기술과 사람들</span>의 이야기.
            <br className="hidden md:block" />
            한 달에 한 번, 우리가 부딪힌 문제를 가감 없이 공유합니다.
          </p>
          <div className="md:col-span-5 md:text-right">
            <div className="text-[11px] tracking-[0.18em] text-fg-4 font-mono">EDITION THEME</div>
            <div className="mt-2 text-[20px] md:text-[26px] font-semibold tracking-tight">
              「{MEETUP_META.themeKo}」
            </div>
          </div>
        </div>

        {/* meta strip */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border-y border-line reveal" data-delay="4">
          {[
            { icon: "calendar", label: "DATE",     value: "2026. 05. 26 (TUE)" },
            { icon: "clock",    label: "TIME",     value: "14:00 – 18:30 KST" },
            { icon: "mapPin",   label: "VENUE",    value: "티빙 사옥 1F 라운지" },
            { icon: "users",    label: "CAPACITY", value: "오프라인 120 + 온라인" },
          ].map((m) => (
            <div key={m.label} className="bg-black px-5 py-5 md:px-6 md:py-6">
              <div className="flex items-center gap-2 text-fg-4">
                <Icon name={m.icon} size={14} />
                <span className="text-[10px] tracking-[0.18em] font-mono">{m.label}</span>
              </div>
              <div className="mt-3 text-[15px] md:text-[16px] font-medium text-fg-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* CTAs + countdown */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-8 reveal" data-delay="5">
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => scrollToId("schedule")} className="btn-primary">
              <Icon name="play" size={14} fill="currentColor" stroke={0} />
              세션 둘러보기
            </button>
            <button onClick={() => scrollToId("cfp")} className="btn-ghost">
              <Icon name="mic" size={14} />
              발표 신청하기
            </button>
          </div>

          {/* countdown */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[10px] tracking-[0.18em] font-mono text-fg-4 mr-1">{isLive ? "NOW LIVE" : "STARTS IN"}</span>
            {[
              { v: days,  l: "D" },
              { v: hours, l: "H" },
              { v: mins,  l: "M" },
              { v: secs,  l: "S" },
            ].map((c, i) => (
              <div key={i} className="flex items-baseline gap-1 px-3 py-2 rounded-md border border-line bg-bg-2/60 min-w-[60px]">
                <span className="text-[20px] md:text-[24px] font-semibold tabular-nums tracking-tight">
                  {String(c.v).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-fg-4 font-mono">{c.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom marquee + scroll cue */}
      <div className="relative">
        <div className="border-y border-line overflow-hidden bg-black/40">
          <div className="marquee-track flex whitespace-nowrap py-4 text-[14px] text-fg-3">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-10 px-6 shrink-0">
                {[
                  "K-콘텐츠 No.1 플랫폼",
                  "✦",
                  "Live Streaming · Web · ML · Ads · DesignOps",
                  "✦",
                  "월간 사내·사외 공유회",
                  "✦",
                  "Hosted by TVING Web Core Development",
                  "✦",
                  `Vol. 07 — ${MEETUP_META.themeKo}`,
                  "✦",
                ].map((t, i) => (
                  <span key={i} className={t === "✦" ? "text-[var(--red)]" : ""}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToId("about")}
          className="absolute left-1/2 -translate-x-1/2 -top-10 flex flex-col items-center gap-1 text-fg-3 hover:text-white transition-colors"
          aria-label="Scroll to About"
        >
          <span className="bounce-arrow">
            <Icon name="arrowDown" size={22} />
          </span>
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero });
