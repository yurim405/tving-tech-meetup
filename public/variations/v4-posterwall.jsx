/* ============================================================
 *  V4 — Poster Wall
 *  Cinematic dark hero over a wall of K-content posters.
 *  Glassmorphism panel center. Feels like the TVING app.
 *  All poster titles are FICTIONAL — invented placeholders.
 * ============================================================ */

const POSTERS = [
  { t: "심야 카페",       sub: "DRAMA · S2",     a: "#5B1B2D", b: "#1A0508", emoji: "☕" },
  { t: "달빛 사냥꾼",     sub: "NEW · 12 EP",    a: "#1A2F4A", b: "#04080F", emoji: "🌙" },
  { t: "서울 1999",       sub: "RETRO",          a: "#2D1B3D", b: "#0A0414", emoji: "📼" },
  { t: "푸른 바람",       sub: "DOCU",           a: "#0F3B36", b: "#03100E", emoji: "🌊" },
  { t: "정거장 12",       sub: "MYSTERY",        a: "#3D2814", b: "#14080A", emoji: "🚉" },
  { t: "지하 4층",         sub: "THRILLER",       a: "#1F1F1F", b: "#000000", emoji: "🔦" },
  { t: "이름 없는<br/>사람들", sub: "ORIGINAL",       a: "#4A1F1F", b: "#140404", emoji: "👥" },
  { t: "한낮의 산책",     sub: "ROMANCE",        a: "#4A2F0A", b: "#1A0F04", emoji: "🌻" },
  { t: "북쪽 별",         sub: "SCI-FI",         a: "#1A1A4A", b: "#040414", emoji: "✦" },
  { t: "재방송",          sub: "COMEDY",         a: "#4A3D0A", b: "#1A1404", emoji: "📺" },
  { t: "이브닝<br/>뉴스",     sub: "VARIETY",        a: "#1A3D4A", b: "#04141A", emoji: "🎙" },
  { t: "겨울의 정원",     sub: "MELODRAMA",      a: "#2A4A3D", b: "#0A1A14", emoji: "❄" },
  { t: "에피소드 0",      sub: "PREQUEL",        a: "#3D0A2A", b: "#14040A", emoji: "○" },
  { t: "오래된<br/>라디오",   sub: "MUSIC",          a: "#2F1A3D", b: "#0F0414", emoji: "📻" },
  { t: "보이지 않는<br/>손",  sub: "CRIME",          a: "#0A2A3D", b: "#040A14", emoji: "✋" },
  { t: "이상한 손님",     sub: "HORROR",         a: "#1F1A2F", b: "#04040A", emoji: "🚪" },
  { t: "도시의 새벽",     sub: "ACTION",         a: "#3D1F0A", b: "#14040A", emoji: "🌆" },
  { t: "마지막<br/>편집실",   sub: "MAKING",         a: "#0A3D3D", b: "#041414", emoji: "🎞" },
];

function Poster({ p }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: 6,
      overflow: "hidden",
      background: `linear-gradient(155deg, ${p.a} 0%, ${p.b} 100%)`,
      boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.04)",
    }}>
      {/* faint glow accent */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(60% 50% at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
      }} />
      {/* large faded glyph */}
      <div style={{
        position: "absolute", right: 4, bottom: 0,
        fontSize: 64, opacity: 0.18, filter: "grayscale(0.4)",
        pointerEvents: "none", lineHeight: 1,
      }}>
        {p.emoji}
      </div>
      {/* top tag */}
      <div style={{
        position: "absolute", top: 8, left: 8,
        fontSize: 8, letterSpacing: "0.16em",
        color: "rgba(255,255,255,0.7)",
        fontFamily: "ui-monospace, monospace",
        fontWeight: 600,
      }}>
        {p.sub}
      </div>
      {/* title bottom */}
      <div
        style={{
          position: "absolute", left: 10, bottom: 10, right: 10,
          fontSize: 16, fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,0.6)",
        }}
        dangerouslySetInnerHTML={{ __html: p.t }}
      />
    </div>
  );
}

function V4PosterWall() {
  return (
    <div style={{
      width: 1440, height: 900,
      background: "#050505",
      color: "#fff",
      fontFamily: "'Pretendard Variable', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* poster wall background */}
      <div style={{
        position: "absolute", inset: 0,
        padding: 12,
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridAutoRows: "calc((100% - 24px - 7 * 10px) / 8)",
        gap: 10,
      }}>
        {Array.from({ length: 72 }).map((_, i) => {
          const p = POSTERS[i % POSTERS.length];
          return <Poster key={i} p={p} />;
        })}
      </div>

      {/* dark vignette to push posters back */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(70% 50% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.92) 100%)",
      }} />

      {/* top nav over wall */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px",
        background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
        zIndex: 3,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 32, height: 32, borderRadius: 8,
            background: "#FF153C", color: "#fff", fontWeight: 900,
            fontSize: 17, fontStyle: "italic", letterSpacing: "-0.08em",
          }}>T</span>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>TVING</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em" }}>TECH MEETUP</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
          {["About", "Schedule", "Speakers", "Apply"].map((n) => (
            <span key={n} style={{ cursor: "pointer" }}>{n}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{
            padding: "8px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
            color: "#fff", fontSize: 13, cursor: "pointer", backdropFilter: "blur(10px)",
          }}>발표 신청</button>
        </div>
      </div>

      {/* center glass panel */}
      <div style={{
        position: "absolute", left: 80, top: 130, width: 720,
        padding: "44px 48px 40px",
        background: "rgba(10,10,12,0.55)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 24,
        backdropFilter: "blur(28px) saturate(140%)",
        WebkitBackdropFilter: "blur(28px) saturate(140%)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        {/* edition pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "6px 12px", borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.15)",
          fontSize: 12, color: "rgba(255,255,255,0.85)",
          letterSpacing: "0.04em",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#FF153C", boxShadow: "0 0 8px #FF153C" }} />
          NOW SHOWING · VOL.07
        </div>

        <h1 style={{
          margin: "26px 0 0",
          fontWeight: 700,
          fontSize: 84,
          lineHeight: 0.96,
          letterSpacing: "-0.04em",
          color: "#fff",
        }}>
          이 모든 것을<br />
          만드는<br />
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(110deg, #FF8FA3 0%, #FF153C 50%, #FF8FA3 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>티빙의 사람들</span>
        </h1>

        <p style={{
          margin: "24px 0 0",
          fontSize: 17, lineHeight: 1.6,
          color: "rgba(255,255,255,0.78)",
          maxWidth: 540,
        }}>
          포스터 한 장 너머 — 1,000만 동시 접속을 견디고, 추천을 다듬고,
          광고를 끼우고, 새벽까지 빌드를 돌리는 사람들의 이야기.
          <span style={{ color: "#fff" }}> 5월 26일, 라운지에서 들려드립니다.</span>
        </p>

        {/* meta row */}
        <div style={{
          marginTop: 28, paddingTop: 22,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24,
        }}>
          {[
            { l: "EPISODE", v: "07" },
            { l: "AIR DATE", v: "05.26.2026" },
            { l: "DURATION", v: "04H 30M" },
          ].map((m) => (
            <div key={m.l}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", fontFamily: "ui-monospace, monospace" }}>{m.l}</div>
              <div style={{ marginTop: 6, fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{m.v}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
          <button style={{
            padding: "14px 24px",
            background: "#fff", color: "#000",
            border: "none", borderRadius: 999,
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 0, height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "10px solid #000",
            }} />
            지금 시청 신청
          </button>
          <button style={{
            padding: "14px 22px",
            background: "rgba(255,255,255,0.06)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999,
            fontSize: 15, fontWeight: 500, cursor: "pointer",
            backdropFilter: "blur(10px)",
          }}>
            + 내 캘린더에 담기
          </button>
        </div>
      </div>

      {/* right column — "up next" stack */}
      <div style={{
        position: "absolute", right: 48, top: 130, width: 320,
        display: "flex", flexDirection: "column", gap: 12,
      }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.55)",
          fontFamily: "ui-monospace, monospace", marginBottom: 4,
        }}>
          UP NEXT · SESSION LINEUP
        </div>
        {[
          { time: "14:25", title: "1,000만 동시 접속을 견디는 라이브 스트리밍", who: "정수민 · Live Platform", c: "#FF153C" },
          { time: "15:00", title: "Next.js 15 App Router로 다시 짠 티빙 웹", who: "이가람 · Web Platform", c: "#A78BFA" },
          { time: "15:50", title: "TVING 추천, LLM과 협업하는 법", who: "한도연 · ML Platform", c: "#86EFAC" },
          { time: "16:25", title: "디자인 시스템을 코드로 운영하기", who: "오민채 · Design Engineering", c: "#FCD34D" },
        ].map((s) => (
          <div key={s.time} style={{
            padding: "14px 16px",
            background: "rgba(20,20,22,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            backdropFilter: "blur(14px)",
            display: "flex", gap: 14, alignItems: "flex-start",
          }}>
            <div style={{
              fontFamily: "ui-monospace, monospace", fontSize: 13,
              color: s.c, fontWeight: 700, paddingTop: 2,
              minWidth: 44,
            }}>
              {s.time}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35, color: "#fff", wordBreak: "keep-all" }}>
                {s.title}
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                {s.who}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* bottom location ribbon */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px",
        background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
        fontSize: 12, color: "rgba(255,255,255,0.6)",
        fontFamily: "ui-monospace, monospace", letterSpacing: "0.14em",
      }}>
        <span>● LIVE · TVING HQ · 1F LOUNGE · SEOUL</span>
        <span>BROADCAST BY {VAR_META.host.toUpperCase()}</span>
      </div>
    </div>
  );
}

Object.assign(window, { V4PosterWall });
