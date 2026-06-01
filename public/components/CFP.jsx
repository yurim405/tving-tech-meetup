/* =========================================================================
 *  CFP — Call for Proposals (발표 신청)
 *  Multi-step lightweight form. Submits to localStorage as a demo.
 * ========================================================================= */

const CFP_TRACKS = [
  { id: "INFRA",  label: "Infrastructure · Live", desc: "스트리밍, CDN, 트래픽" },
  { id: "WEB",    label: "Web · App",             desc: "프론트엔드, 모바일" },
  { id: "ML",     label: "ML · Data",             desc: "추천, LLM, 데이터" },
  { id: "DESIGN", label: "Design Engineering",    desc: "디자인 시스템, UX" },
  { id: "ADS",    label: "Ads · Monetization",    desc: "광고, 미드롤" },
  { id: "ETC",    label: "기타",                   desc: "그 외 자유 주제" },
];

const CFP_LENGTHS = ["10분 라이트닝", "20분 세션", "30분 세션"];

function CFP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    team: "",
    track: "",
    length: "20분 세션",
    title: "",
    abstract: "",
    public: true,
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
    setForm({ name: "", email: "", team: "", track: "", length: "20분 세션", title: "", abstract: "", public: true });
  };

  return (
    <section
      id="cfp"
      data-screen-label="05 CFP"
      className="relative py-28 md:py-40 border-t border-line"
    >
      {/* atmospheric red bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(40% 30% at 80% 20%, rgba(255,21,60,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* left blurb */}
          <div className="md:col-span-5">
            <div className="section-tag reveal"><span className="dot" /> CALL FOR PROPOSALS</div>
            <h2 className="display-section mt-6 reveal" data-delay="1">
              발표<br />
              <span className="text-red">신청.</span>
            </h2>
            <p className="mt-8 text-[16px] leading-[1.75] text-fg-3 max-w-[420px] reveal" data-delay="2">
              다음 달, 다다음 달 밋업에 서 보고 싶은 분이라면 누구나 환영합니다.
              사내·사외 구분 없이 받습니다. 짧은 회고도, 깊은 기술 발표도 좋아요.
            </p>

            <ul className="mt-10 space-y-4 reveal" data-delay="3">
              {[
                { k: "마감", v: "매월 25일 · 다음 달 밋업 기준" },
                { k: "응답", v: "마감일로부터 영업일 3일 이내" },
                { k: "혜택", v: "스피커 굿즈 + 다음 분기 외부 컨퍼런스 지원" },
              ].map((row) => (
                <li key={row.k} className="flex items-start gap-4 border-t border-line pt-4">
                  <span className="text-[10px] tracking-[0.18em] font-mono text-fg-4 w-12 shrink-0 pt-1">{row.k}</span>
                  <span className="text-[15px] text-fg-2">{row.v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-line bg-bg-1 p-6 md:p-10 reveal" data-delay="2">
              {!submitted ? (
                <form onSubmit={submit} className="space-y-7">
                  {/* identity */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="이름 *">
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="홍길동"
                      />
                    </Field>
                    <Field label="이메일 *">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@tving.com"
                      />
                    </Field>
                  </div>

                  <Field label="소속 팀 / 회사">
                    <input
                      type="text"
                      value={form.team}
                      onChange={(e) => set("team", e.target.value)}
                      placeholder="예) TVING · Web Core Development"
                    />
                  </Field>

                  {/* track selection */}
                  <div>
                    <label className="block text-[12px] tracking-[0.06em] text-fg-3 mb-3">트랙 *</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {CFP_TRACKS.map((t) => {
                        const active = form.track === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => set("track", t.id)}
                            className={`text-left rounded-xl border px-4 py-3 transition-all ${
                              active
                                ? "border-[var(--red)] bg-[rgba(255,21,60,0.06)]"
                                : "border-line hover:border-line-strong bg-bg-2"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-[14px] font-medium ${active ? "text-white" : "text-fg-2"}`}>
                                {t.label}
                              </span>
                              {active && (
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--red)] text-white">
                                  <Icon name="check" size={12} />
                                </span>
                              )}
                            </div>
                            <div className="mt-1 text-[12px] text-fg-4">{t.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* length radio */}
                  <div>
                    <label className="block text-[12px] tracking-[0.06em] text-fg-3 mb-3">발표 길이</label>
                    <div className="inline-flex p-1 rounded-full border border-line bg-bg-2">
                      {CFP_LENGTHS.map((l) => {
                        const active = form.length === l;
                        return (
                          <button
                            key={l}
                            type="button"
                            onClick={() => set("length", l)}
                            className={`px-4 py-1.5 rounded-full text-[13px] transition-all ${
                              active ? "bg-white text-black" : "text-fg-3 hover:text-white"
                            }`}
                          >
                            {l}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Field label="발표 제목 *">
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => set("title", e.target.value)}
                      placeholder="한 줄로 요약하면 어떤 이야기인가요?"
                      maxLength={120}
                    />
                  </Field>

                  <Field label={`발표 요약 * (${remaining}자 남음)`}>
                    <textarea
                      rows={5}
                      value={form.abstract}
                      onChange={(e) => set("abstract", e.target.value.slice(0, 600))}
                      placeholder="어떤 문제를 풀었고, 무엇을 배웠는지 600자 이내로 적어주세요."
                    />
                  </Field>

                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.public}
                      onChange={(e) => set("public", e.target.checked)}
                      className="mt-1 accent-[var(--red)]"
                    />
                    <span className="text-[13px] text-fg-3 leading-[1.6]">
                      발표 영상의 사외 공개에 동의합니다. (선택 — 동의하지 않으셔도 사내 공유는 진행됩니다.)
                    </span>
                  </label>

                  {error && (
                    <div className="text-[13px] text-[#ff8093] bg-[rgba(255,21,60,0.08)] border border-[rgba(255,21,60,0.3)] rounded-lg px-4 py-3">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-line">
                    <p className="text-[12px] text-fg-4">
                      제출하시면 등록한 이메일로 접수 확인 메일이 발송됩니다.
                    </p>
                    <button type="submit" className="btn-primary">
                      신청서 제출
                      <Icon name="arrowUpRight" size={14} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex w-16 h-16 rounded-full bg-[var(--red-soft)] border border-[rgba(255,21,60,0.4)] items-center justify-center text-[var(--red)] mb-6">
                    <Icon name="check" size={28} stroke={2.2} />
                  </div>
                  <h3 className="text-[28px] font-semibold tracking-tight">접수 완료!</h3>
                  <p className="mt-3 text-fg-3 text-[15px] leading-[1.7] max-w-[420px] mx-auto">
                    <span className="text-white">{form.name}</span> 님의 발표 신청이 접수되었습니다.<br />
                    3 영업일 이내에 <span className="text-white font-mono text-[14px]">{form.email}</span> 로 회신드리겠습니다.
                  </p>
                  <button onClick={reset} className="mt-8 btn-ghost text-[13px]">
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

/* small labelled input wrapper */
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12px] tracking-[0.06em] text-fg-3 mb-2">{label}</span>
      <span className="block field-wrap">{children}</span>
    </label>
  );
}

Object.assign(window, { CFP, Field });
