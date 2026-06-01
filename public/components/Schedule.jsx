/* =========================================================================
 *  Schedule — vertical timeline, hover glow
 * ========================================================================= */

const TRACK_COLORS = {
  ALL:     "rgba(255,255,255,0.5)",
  MAIN:    "#FF153C",
  INFRA:   "#7AE0FF",
  WEB:     "#A78BFA",
  ML:      "#86EFAC",
  DESIGN:  "#FCD34D",
  ADS:     "#FCA5A5",
};

function TrackBadge({ track }) {
  if (!track) return null;
  const color = TRACK_COLORS[track] || "#fff";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-[0.1em]"
      style={{
        color,
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${color}30`,
      }}
    >
      <span className="w-1 h-1 rounded-full" style={{ background: color }} />
      {track}
    </span>
  );
}

function SessionRow({ item, idx }) {
  const isBreak = item.type === "break";
  const isOpen  = item.type === "opening" || item.type === "closing";
  const isLight = item.type === "lightning";
  const isReg   = item.type === "register";
  const isCard  = !isBreak && !isReg;

  return (
    <li
      className="session-row reveal grid grid-cols-[80px_24px_1fr] md:grid-cols-[110px_28px_1fr] gap-3 md:gap-6 group"
      data-delay={Math.min(6, (idx % 6) + 1)}
    >
      {/* time */}
      <div className="pt-5 text-right">
        <div className="session-time text-[16px] md:text-[18px] font-semibold tracking-tight tabular-nums transition-colors">
          {item.time}
        </div>
        {item.duration && (
          <div className="text-[11px] text-fg-4 font-mono mt-1">{item.duration}</div>
        )}
      </div>

      {/* dot column */}
      <div className="pt-7 flex justify-center">
        <span className="timeline-dot" />
      </div>

      {/* content */}
      <div className={`pb-8 ${isBreak ? "break-row rounded-xl px-5 py-5 border border-dashed border-line" : ""}`}>
        {isCard ? (
          <div className="session-card rounded-xl border border-line bg-bg-1 px-5 md:px-7 py-5 md:py-6 cursor-pointer">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <TrackBadge track={item.track} />
              {item.keynote && <span className="chip chip-red">KEYNOTE</span>}
              {isOpen && <span className="chip">CEREMONY</span>}
              {isLight && <span className="chip" style={{ color: "#FCD34D", borderColor: "rgba(252,211,77,0.4)" }}>⚡ LIGHTNING</span>}
              {(item.tags || []).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <h3 className="text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.3] text-white">
              {item.title}
            </h3>

            {(item.speaker || item.role) && (
              <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fg-3">
                {item.speaker && <span className="text-fg-2 font-medium whitespace-nowrap">{item.speaker}</span>}
                {item.role && <span className="whitespace-nowrap">· {item.role}</span>}
              </div>
            )}

            {item.desc && (
              <p className="mt-3 text-[14px] leading-[1.7] text-fg-3 max-w-[680px]">
                {item.desc}
              </p>
            )}

            <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-fg-4 whitespace-nowrap">
              자세히 보기
              <span className="session-arrow"><Icon name="arrowRight" size={13} /></span>
            </div>
          </div>
        ) : (
          <div className="px-1">
            <h3 className="text-[15px] md:text-[16px] font-medium text-fg-2">
              {item.title}
              {item.duration && <span className="ml-2 text-fg-4 text-[12px] font-mono">{item.duration}</span>}
            </h3>
            {item.desc && (
              <p className="mt-1.5 text-[13px] leading-[1.7] text-fg-4 max-w-[640px]">
                {item.desc}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function Schedule() {
  return (
    <section
      id="schedule"
      data-screen-label="03 Schedule"
      className="relative py-28 md:py-40 border-t border-line"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-tag reveal"><span className="dot" /> SCHEDULE · MAY 26</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              세션 타임라인.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 reveal" data-delay="2">
            {Object.entries(TRACK_COLORS).filter(([k]) => k !== "ALL").map(([k, c]) => (
              <span
                key={k}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-fg-3 px-2 py-1 rounded border border-line"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="timeline-rail md:left-[124px]" style={{ left: "94px" }} />
          <ol className="space-y-0">
            {SCHEDULE_DATA.map((item, idx) => (
              <SessionRow key={idx} item={item} idx={idx} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Schedule });
