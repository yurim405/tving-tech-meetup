/* =========================================================================
 *  Schedule — vertical timeline, sparkle dots, brutalist cards
 * ========================================================================= */

const TRACKS_BRU = ["MAIN", "INFRA", "WEB", "ML", "DESIGN", "ADS"];

function TrackPillBru({ track }) {
  if (!track) return null;
  return (
    <span className={`track-pill track-${track}`}>
      <span className="pip" /> {track}
    </span>
  );
}

function SessionRowBru({ item, idx }) {
  const isBreak = item.type === "break";
  const isReg   = item.type === "register";
  const isLight = item.type === "lightning";
  const isOpen  = item.type === "opening" || item.type === "closing";
  const isCard  = !isBreak && !isReg;

  return (
    <li
      className="session-row reveal grid gap-3 md:gap-7 group"
      style={{ gridTemplateColumns: "96px 32px 1fr" }}
      data-delay={Math.min(6, (idx % 6) + 1)}
    >
      {/* time */}
      <div className="pt-5 text-right">
        <div className="session-time font-mono text-[18px] md:text-[22px] font-extrabold tabular-nums tracking-tight text-white transition-colors">
          {item.time}
        </div>
        {item.duration && (
          <div className="text-[11px] text-fg-4 font-mono mt-1">{item.duration}</div>
        )}
      </div>

      {/* dot */}
      <div className="pt-7 flex justify-center">
        {item.keynote
          ? <Sparkle size={22} color="var(--lime)" />
          : <span className="timeline-dot" />
        }
      </div>

      {/* content */}
      <div className="pb-10">
        {isCard ? (
          <div className="session-card px-5 md:px-7 py-5 md:py-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <TrackPillBru track={item.track} />
              {item.keynote && (
                <span className="chip chip-lime" style={{ borderColor: "var(--lime)" }}>
                  ★ KEYNOTE
                </span>
              )}
              {isOpen && <span className="chip">CEREMONY</span>}
              {isLight && (
                <span className="chip chip-outline-lime">
                  ⚡ LIGHTNING
                </span>
              )}
              {(item.tags || []).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <h3 className="text-[18px] md:text-[22px] font-bold tracking-tight leading-[1.3] text-white">
              {item.title}
            </h3>

            {(item.speaker || item.role) && (
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fg-3">
                {item.speaker && (
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-white font-medium">
                    <span className="w-1.5 h-1.5 bg-lime" style={{ background: "var(--lime)" }} />
                    {item.speaker}
                  </span>
                )}
                {item.role && <span className="whitespace-nowrap">· {item.role}</span>}
              </div>
            )}

            {item.desc && (
              <p className="mt-3 text-[14px] leading-[1.7] text-fg-3 max-w-[680px]">
                {item.desc}
              </p>
            )}

            <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-fg-4 whitespace-nowrap uppercase">
              자세히 보기
              <span className="session-arrow">→</span>
            </div>
          </div>
        ) : (
          <div className={`px-5 py-5 ${isBreak ? "break-row" : ""}`}>
            <h3 className="text-[15px] md:text-[16px] font-medium text-fg-2">
              {item.title}
              {item.duration && <span className="ml-2 text-fg-4 text-[12px] font-mono">{item.duration}</span>}
            </h3>
            {item.desc && (
              <p className="mt-2 text-[13px] leading-[1.7] text-fg-4 max-w-[640px]">
                {item.desc}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function ScheduleBru() {
  return (
    <section
      id="schedule"
      data-screen-label="03 Schedule"
      className="relative py-28 md:py-40 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* decorations */}
      <Sparkle size={48} color="var(--lime)" style={{ position: "absolute", top: "8%", left: "5%", transform: "rotate(15deg)" }} />
      <Sparkle size={36} color="#fff"        style={{ position: "absolute", top: "12%", right: "8%", transform: "rotate(-10deg)" }} />
      <BrushSmile width={120} color="rgba(255,255,255,0.7)" style={{ position: "absolute", bottom: "6%", right: "5%", transform: "rotate(-8deg)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag reveal"><span className="num">03</span> SCHEDULE</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              세션 <span className="text-lime">타임라인.</span>
            </h2>
            <div className="mt-4 reveal" data-delay="2">
              <span className="sticker" style={{ transform: "rotate(-2deg)" }}>
                MAY 26 · TUE · 14:00 → 18:30
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 reveal" data-delay="3">
            {TRACKS_BRU.map((t) => (
              <span key={t} className={`track-pill track-${t}`}>
                <span className="pip" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="timeline-rail" style={{ left: "111px" }} />
          <ol className="space-y-0">
            {SCHEDULE_DATA.map((item, idx) => (
              <SessionRowBru key={idx} item={item} idx={idx} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ScheduleBru });
