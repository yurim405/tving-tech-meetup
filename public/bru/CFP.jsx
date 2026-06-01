/* =========================================================================
 *  CFP — 발표 신청 (brutalist tone)
 * ========================================================================= */

const CFP_TRACKS_BRU = [
  { id: "INFRA",  label: "INFRA · LIVE",       desc: "스트리밍, CDN, 트래픽" },
  { id: "WEB",    label: "WEB · APP",          desc: "프론트엔드, 모바일" },
  { id: "ML",     label: "ML · DATA",          desc: "추천, LLM, 데이터" },
  { id: "DESIGN", label: "DESIGN ENG.",        desc: "디자인 시스템, UX" },
  { id: "ADS",    label: "ADS · MONETIZATION", desc: "광고, 미드롤" },
  { id: "ETC",    label: "기타",                desc: "그 외 자유 주제" },
];

const CFP_LENGTHS_BRU = ["10분 ⚡", "20분", "30분"];

function FieldBru({ label, hint, children }) {
  return (
    <label className="block field">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] tracking-[0.18em] text-fg-2 font-bold uppercase">{label}</span>
        {hint && <span className="font-mono text-[10px] text-fg-4 tracking-wide">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

function CFPBru() {
  const [form, setForm] = useState({
    name: "", email: "", team: "", track: "", length: "20분",
    title: "", abstract: "", public: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const remaining = 600 - form.abstract.length;

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.title || !form.abstract || !form.track) {
      setError("이름, 이메일, 트랙, 제목, 발표 요약은 필수입니다.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("이메일 형식을 확인해 주세요.");
      return;
    }
    try {
      const prev = JSON.parse(localStorage.getItem("tving_meetup_cfp") || "[]");
      prev.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("tving_meetup_cfp", JSON.stringify(prev));
    } catch (_) {}
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", team: "", track: "", length: "20분", title: "", abstract: "", public: true });
  };

  return (
    <section
      id="cfp"
      data-screen-label="05 CFP"
      className="relative py-28 md:py-40 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(45% 35% at 80% 30%, rgba(198,247,59,0.10) 0%, transparent 70%)" }}
      />
      <Sparkle size={56} color="var(--lime)" style={{ position: "absolute", top: "10%", left: "8%", transform: "rotate(20deg)" }} />
      <ArrowDoodle size={80} color="#fff" style={{ position: "absolute", top: "30%", left: "4%", transform: "rotate(-20deg)" }} />
      <StarBurst size={56} color="#fff" style={{ position: "absolute", bottom: "10%", right: "6%" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="section-tag reveal"><span className="num">05</span> CALL FOR PROPOSALS</div>

            <h2 className="display-section mt-6 reveal" data-delay="1">
              <span className="relative inline-block">
                발표
                <BrushUnderline width={220} color="var(--lime)" style={{ position: "absolute", left: -4, bottom: "-14%", width: "108%" }} />
              </span><br />
              <span style={{ background: "var(--lime)", color: "#000", padding: "0 14px", display: "inline-block", transform: "rotate(-2deg)" }}>
                신청.
              </span>
            </h2>

            <p className="mt-10 text-fg-3 text-[16px] leading-[1.75] max-w-[420px] reveal" data-delay="2">
              다음 달, 다다음 달 밋업에 서 보고 싶은 분이라면 누구나 환영합니다.
              사내·사외 구분 없이 받습니다.
              <span className="text-white"> 짧은 회고도, 깊은 기술 발표도 좋아요.</span>
            </p>

            <ul className="mt-10 space-y-0 reveal" data-delay="3">
              {[
                { k: "DEADLINE", v: "매월 25일 · 다음 달 밋업 기준" },
                { k: "RESPONSE", v: "마감일로부터 영업일 3일 이내" },
                { k: "PERKS",    v: "스피커 굿즈 + 외부 컨퍼런스 지원" },
              ].map((row, i) => (
                <li key={row.k} className="flex items-start gap-5 border-t border-line py-4 last:border-b">
                  <span className="font-mono text-[10px] tracking-[0.22em] text-lime font-bold w-20 shrink-0 pt-0.5">
                    0{i+1} {row.k}
                  </span>
                  <span className="text-[15px] text-fg-2">{row.v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right form */}
          <div className="md:col-span-7">
            <div
              className="bg-[var(--bg-1)] p-6 md:p-10 reveal"
              data-delay="2"
              style={{ border: "1.5px solid var(--line-strong)", boxShadow: "8px 8px 0 var(--lime)" }}
            >
              {!submitted ? (
                <form onSubmit={submit} className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FieldBru label="NAME *">
                      <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="홍길동" />
                    </FieldBru>
                    <FieldBru label="EMAIL *">
                      <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@tving.com" />
                    </FieldBru>
                  </div>

                  <FieldBru label="소속 팀 / 회사">
                    <input type="text" value={form.team} onChange={(e) => set("team", e.target.value)} placeholder="예) TVING · Web Core Development" />
                  </FieldBru>

                  {/* track */}
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.18em] text-fg-2 font-bold uppercase mb-3">트랙 *</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {CFP_TRACKS_BRU.map((t) => {
                        const active = form.track === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => set("track", t.id)}
                            className="text-left px-4 py-3 border transition-all relative"
                            style={{
                              background: active ? "var(--lime-soft)" : "var(--bg-2)",
                              borderColor: active ? "var(--lime)" : "var(--line)",
                              borderWidth: "1.5px",
                              boxShadow: active ? "4px 4px 0 var(--lime)" : "none",
                              transform: active ? "translate(-2px, -2px)" : "none",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`font-mono text-[13px] font-bold tracking-[0.06em] ${active ? "text-white" : "text-fg-2"}`}>
                                {t.label}
                              </span>
                              {active && (
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-[var(--lime)] text-black">
                                  <CheckDoodle size={14} color="#000" />
                                </span>
                              )}
                            </div>
                            <div className="mt-1 text-[12px] text-fg-4">{t.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* length */}
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.18em] text-fg-2 font-bold uppercase mb-3">발표 길이</div>
                    <div className="inline-flex p-1 border border-line bg-[var(--bg-2)]">
                      {CFP_LENGTHS_BRU.map((l) => {
                        const active = form.length === l;
                        return (
                          <button
                            key={l}
                            type="button"
                            onClick={() => set("length", l)}
                            className={`px-4 py-1.5 text-[13px] font-bold transition-all ${active ? "bg-[var(--lime)] text-black" : "text-fg-3 hover:text-white"}`}
                          >
                            {l}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <FieldBru label="발표 제목 *">
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => set("title", e.target.value)}
                      placeholder="한 줄로 요약하면 어떤 이야기인가요?"
                      maxLength={120}
                    />
                  </FieldBru>

                  <FieldBru label="발표 요약 *" hint={`${remaining}자 남음`}>
                    <textarea
                      rows={5}
                      value={form.abstract}
                      onChange={(e) => set("abstract", e.target.value.slice(0, 600))}
                      placeholder="어떤 문제를 풀었고, 무엇을 배웠는지 600자 이내로."
                    />
                  </FieldBru>

                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.public}
                      onChange={(e) => set("public", e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[var(--lime)]"
                    />
                    <span className="text-[13px] text-fg-3 leading-[1.6]">
                      발표 영상의 사외 공개에 동의합니다.
                      <span className="text-fg-4"> (선택 — 동의하지 않아도 사내 공유는 진행됩니다.)</span>
                    </span>
                  </label>

                  {error && (
                    <div
                      className="text-[13px] px-4 py-3"
                      style={{
                        color: "#000", background: "var(--lime)",
                        borderLeft: "4px solid #000", fontWeight: 700,
                      }}
                    >
                      ⚠ {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-line">
                    <p className="text-[12px] text-fg-4 font-mono">
                      제출 시 등록한 이메일로 접수 확인 메일이 발송됩니다.
                    </p>
                    <button type="submit" className="btn-lime">
                      신청서 제출
                      <Icon name="arrowUpRight" size={14} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 relative">
                  <Sparkle size={32} color="var(--lime)" style={{ position: "absolute", top: 0,  left: "30%", transform: "rotate(15deg)" }} />
                  <Sparkle size={24} color="#fff"        style={{ position: "absolute", top: 12, right: "28%", transform: "rotate(-15deg)" }} />
                  <Sparkle size={20} color="var(--lime)" style={{ position: "absolute", top: 60, left: "26%", transform: "rotate(30deg)" }} />

                  <div
                    className="inline-flex w-16 h-16 items-center justify-center mb-6 mx-auto"
                    style={{ background: "var(--lime)", boxShadow: "4px 4px 0 #000" }}
                  >
                    <CheckDoodle size={36} color="#000" />
                  </div>
                  <h3 className="display-mid">접수 완료<span className="text-lime">!</span></h3>
                  <p className="mt-5 text-fg-3 text-[15px] leading-[1.7] max-w-[420px] mx-auto">
                    <span className="text-white font-bold">{form.name}</span> 님의 발표 신청이 접수되었습니다.<br />
                    3 영업일 이내에 <span className="text-white font-mono text-[14px]">{form.email}</span> 로 회신드리겠습니다.
                  </p>
                  <button onClick={reset} className="mt-8 btn-ghost-line text-[13px]">
                    다른 발표 신청하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CFPBru });
