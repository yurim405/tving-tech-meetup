/* =========================================================================
 *  Hero Variations — 4 alternative visual directions for TVING Tech Meetup
 *  Each is a full hero (1440×900) shown side-by-side in a design canvas.
 * ========================================================================= */

/* ---------- shared meta ---------- */
const VAR_META = {
  edition: "Vol. 07",
  monthEn: "May",
  monthKo: "5월",
  themeKo: "스트리밍의 안쪽, 그 너머",
  themeEn: "Streaming at Scale",
  date: "2026. 05. 26 (TUE)",
  time: "14:00 – 18:30 KST",
  venue: "티빙 사옥 1F 라운지",
  host: "Web Core Development",
};

/* ============================================================
 *  V1 — Editorial Paper
 *  Cream paper, deep ink, rust accent, serif headline.
 *  Magazine/archive vibe, asymmetric grid, oversized issue number.
 * ============================================================ */
function V1Editorial() {
  return (
    <div
      style={{
        width: 1440, height: 900,
        background: "#F2EBDD",
        color: "#1A1410",
        fontFamily: "'Pretendard Variable', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle paper grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        opacity: 0.6, pointerEvents: "none",
      }} />

      {/* nav */}
      <div style={{
        position: "absolute", top: 36, left: 56, right: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(26,20,16,0.18)", paddingBottom: 16,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span style={{ fontFamily: "'Newsreader', 'Times New Roman', serif", fontSize: 26, fontWeight: 600, fontStyle: "italic", letterSpacing: "-0.01em" }}>
            TVING
          </span>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(26,20,16,0.6)", textTransform: "uppercase" }}>
            Tech Meetup · A Monthly Review
          </span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 13, color: "#1A1410" }}>
          {["About", "Schedule", "Speakers", "Apply"].map((n) => (
            <span key={n} style={{ borderBottom: "1px solid transparent", cursor: "pointer" }}>{n}</span>
          ))}
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(26,20,16,0.6)", fontFamily: "ui-monospace, monospace" }}>
          NO. 07 / MAY MMXXVI
        </div>
      </div>

      {/* main grid */}
      <div style={{
        position: "absolute", top: 130, left: 56, right: 56, bottom: 60,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
      }}>
        {/* left — masthead */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B83A2E", fontWeight: 600 }}>
              The {VAR_META.monthEn} Edition · 「{VAR_META.themeKo}」
            </div>

            <h1 style={{
              margin: "32px 0 0",
              fontFamily: "'Newsreader', 'Times New Roman', serif",
              fontWeight: 500,
              fontSize: 96,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#1A1410",
            }}>
              매월,<br />
              <em style={{ fontStyle: "italic", color: "#B83A2E", fontWeight: 400 }}>한 편의</em><br />
              엔지니어<br />링 노트.
            </h1>
          </div>

          <div style={{ marginTop: 24, fontFamily: "'Newsreader', serif", fontSize: 15, lineHeight: 1.55, color: "rgba(26,20,16,0.7)", maxWidth: 460, fontStyle: "italic" }}>
            티빙의 엔지니어가 직접 부딪힌 문제, 그 문제를 어떻게 풀었는지 — 그리고
            아직 풀지 못한 것들까지 정직하게 적습니다.
          </div>
        </div>

        {/* right — oversized issue + meta */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "rgba(26,20,16,0.55)", fontFamily: "ui-monospace, monospace" }}>
              ISSUE
            </div>
            <div style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 320,
              lineHeight: 0.82,
              fontWeight: 300,
              letterSpacing: "-0.05em",
              color: "#1A1410",
              fontStyle: "italic",
              marginTop: -8,
            }}>
              07
            </div>
            <div style={{
              fontSize: 12, letterSpacing: "0.22em", color: "#B83A2E", fontWeight: 600,
              borderTop: "1px solid #B83A2E", paddingTop: 8, marginTop: 8,
              display: "inline-block",
            }}>
              MAY · 2026
            </div>
          </div>

          {/* article-style ToC at bottom */}
          <div style={{
            borderTop: "1px solid rgba(26,20,16,0.2)",
            paddingTop: 18, marginTop: 24,
            display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 36, rowGap: 10,
            fontSize: 13, color: "rgba(26,20,16,0.75)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted rgba(26,20,16,0.25)", paddingBottom: 6 }}>
              <span>Live Architecture</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 14:25</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted rgba(26,20,16,0.25)", paddingBottom: 6 }}>
              <span>App Router Rewrite</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 15:00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted rgba(26,20,16,0.25)", paddingBottom: 6 }}>
              <span>LLM × Recommendation</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 15:50</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted rgba(26,20,16,0.25)", paddingBottom: 6 }}>
              <span>Design Systems · 1Y</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 16:25</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 6 }}>
              <span>Midroll AI Pipeline</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 17:00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 6 }}>
              <span>Lightning ⚡ × 4</span><span style={{ fontFamily: "ui-monospace, monospace", color: "rgba(26,20,16,0.5)" }}>p. 17:35</span>
            </div>
          </div>
        </div>
      </div>

      {/* footer rule */}
      <div style={{
        position: "absolute", left: 56, right: 56, bottom: 24,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "rgba(26,20,16,0.55)", fontFamily: "ui-monospace, monospace",
        letterSpacing: "0.1em",
      }}>
        <span>{VAR_META.date.toUpperCase()} · {VAR_META.time}</span>
        <span style={{ flex: 1, height: 1, background: "rgba(26,20,16,0.2)", margin: "0 24px" }} />
        <span>{VAR_META.venue.toUpperCase()}</span>
        <span style={{ flex: 1, height: 1, background: "rgba(26,20,16,0.2)", margin: "0 24px" }} />
        <span>HOST · {VAR_META.host.toUpperCase()}</span>
      </div>
    </div>
  );
}

Object.assign(window, { V1Editorial });
