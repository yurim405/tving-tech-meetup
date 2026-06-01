/* =========================================================================
 *  Speakers — 3-col grid, hover scale, click for detail
 * ========================================================================= */

function SpeakerCard({ s, onOpen }) {
  return (
    <button
      onClick={() => onOpen(s)}
      className="speaker-card group relative block w-full text-left rounded-2xl overflow-hidden bg-bg-1 border border-line hover:border-line-strong transition-colors"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-2">
        <img
          src={s.photo}
          alt={s.name}
          loading="lazy"
          className="speaker-img absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.85) brightness(0.85)" }}
          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
        />
        {/* accent gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${s.accent || ""} mix-blend-overlay`}
        />
        <div className="speaker-shade" />

        {/* top chips */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="chip" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
            {s.team}
          </span>
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: "var(--red)", color: "#fff" }}
          >
            <Icon name="arrowUpRight" size={14} />
          </span>
        </div>

        {/* bottom title */}
        <div className="absolute left-5 right-5 bottom-5">
          <div className="text-[11px] tracking-[0.18em] font-mono text-fg-3">{s.nameEn.toUpperCase()}</div>
          <div className="mt-1 text-[24px] md:text-[28px] font-semibold tracking-tight text-white">
            {s.name}
          </div>
          <div className="mt-1 text-[13px] text-fg-2">{s.role}</div>
        </div>
      </div>

      {/* topic strip */}
      <div className="px-5 py-4 border-t border-line">
        <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">SESSION TOPIC</div>
        <div className="mt-1.5 text-[14px] leading-[1.5] text-fg-2 line-clamp-2">
          {s.topic}
        </div>
      </div>
    </button>
  );
}

function SpeakerModal({ s, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!s) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      />
      <div className="relative w-full max-w-[900px] grid md:grid-cols-2 bg-bg-1 border border-line rounded-2xl overflow-hidden max-h-[90vh]">
        <div className="relative aspect-[4/5] md:aspect-auto bg-bg-2 overflow-hidden">
          <img src={s.photo} alt={s.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${s.accent || ""} mix-blend-overlay`} />
        </div>
        <div className="p-7 md:p-10 overflow-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full border border-line bg-bg-2 hover:bg-bg-3 flex items-center justify-center text-fg-2"
            aria-label="close"
          >
            <Icon name="close" size={16} />
          </button>
          <div className="text-[11px] tracking-[0.18em] font-mono text-fg-4">{s.team}</div>
          <h3 className="mt-2 text-[34px] md:text-[40px] font-semibold tracking-tight leading-none">
            {s.name}
          </h3>
          <div className="mt-1 text-[14px] text-fg-3">{s.nameEn} · {s.role}</div>

          <div className="mt-6 p-4 rounded-xl border border-line bg-bg-2">
            <div className="text-[10px] tracking-[0.18em] font-mono text-fg-4">TALK</div>
            <div className="mt-1.5 text-[17px] font-medium text-white leading-[1.4]">
              {s.topic}
            </div>
          </div>

          <p className="mt-6 text-[14px] leading-[1.75] text-fg-2">{s.bio}</p>

          <div className="mt-8 flex items-center gap-2">
            <button className="btn-ghost text-[13px] py-2.5">
              <Icon name="link" size={14} /> LinkedIn
            </button>
            <button className="btn-ghost text-[13px] py-2.5">
              <Icon name="external" size={14} /> 블로그
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Speakers() {
  const [active, setActive] = useState(null);
  return (
    <section
      id="speakers"
      data-screen-label="04 Speakers"
      className="relative py-28 md:py-40 border-t border-line"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag reveal"><span className="dot" /> SPEAKERS · {SPEAKER_DATA.length}</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              발표자.
            </h2>
          </div>
          <p className="md:max-w-[420px] text-[15px] text-fg-3 leading-[1.7] reveal" data-delay="2">
            티빙 안쪽에서 매일 시스템을 굴리는 사람들. 카드를 눌러 더 자세한 이야기를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SPEAKER_DATA.map((s, i) => (
            <div key={s.id} className="reveal" data-delay={Math.min(6, (i % 6) + 1)}>
              <SpeakerCard s={s} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>
      {active && <SpeakerModal s={active} onClose={() => setActive(null)} />}
    </section>
  );
}

Object.assign(window, { Speakers });
