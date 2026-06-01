/* ============================================================
 *  V2 — Broadcast Signal
 *  Deep midnight blue, cyan/magenta, scanlines, broadcast monitor frame.
 *  Riffs on TVING's "TV" heritage — a UI for the control room.
 * ============================================================ */
function V2Broadcast() {
  const BG    = "#070A1A";
  const PANEL = "#0E1430";
  const CYAN  = "#00E5FF";
  const MAGE  = "#FF2D95";
  const AMBER = "#FFC233";

  // color bars (SMPTE-ish)
  const BARS = ["#C0C0C0", "#C0C000", "#00C0C0", "#00C000", "#C000C0", "#C00000", "#0000C0"];

  return (
    <div style={{
      width: 1440, height: 900,
      background: BG,
      color: "#fff",
      fontFamily: "'Space Grotesk', 'Pretendard Variable', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* scanlines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
        zIndex: 4,
      }} />
      {/* CRT vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.7) 100%)",
        zIndex: 5,
      }} />
      {/* RGB chromatic glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(40% 30% at 18% 30%, ${CYAN}22 0%, transparent 60%), radial-gradient(35% 30% at 85% 75%, ${MAGE}22 0%, transparent 60%)`,
      }} />

      {/* top nav bar — looks like a broadcast tally */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px",
        background: "rgba(7,10,26,0.7)",
        borderBottom: `1px solid ${CYAN}33`,
        backdropFilter: "blur(8px)",
        zIndex: 3,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 10px", borderRadius: 4,
            background: MAGE, color: "#000",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#000", animation: "blink 1.2s steps(1) infinite" }} />
            ON AIR
          </span>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}>
            TVING <span style={{ opacity: 0.55, fontWeight: 400 }}>/ Tech Meetup</span>
          </span>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: CYAN, letterSpacing: "0.14em" }}>
            CH.07 — 04:13:22:08
          </span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 13 }}>
          {["ABOUT", "SCHEDULE", "SPEAKERS", "APPLY"].map((n, i) => (
            <span key={n} style={{
              fontFamily: "ui-monospace, monospace",
              letterSpacing: "0.14em",
              color: i === 0 ? CYAN : "rgba(255,255,255,0.7)",
              borderBottom: i === 0 ? `1px solid ${CYAN}` : "1px solid transparent",
              paddingBottom: 2,
            }}>{n}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "ui-monospace, monospace", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
          <span style={{ color: AMBER }}>● REC</span>
          <span>SIGNAL 99%</span>
        </div>
      </div>

      {/* left — SMPTE color bars sidebar */}
      <div style={{
        position: "absolute", top: 56, bottom: 0, left: 0, width: 28,
        display: "flex", flexDirection: "column",
        zIndex: 2,
      }}>
        {BARS.map((c, i) => <div key={i} style={{ flex: 1, background: c, opacity: 0.7 }} />)}
      </div>

      {/* right — VU meter strip */}
      <div style={{
        position: "absolute", top: 80, right: 28, width: 80, bottom: 60,
        background: PANEL, border: `1px solid ${CYAN}33`,
        padding: 12, display: "flex", flexDirection: "column", gap: 8,
        zIndex: 2,
      }}>
        <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" }}>
          AUDIO
        </div>
        <div style={{ display: "flex", gap: 4, flex: 1 }}>
          {["L", "R"].map((ch, ci) => (
            <div key={ch} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 2 }}>
              {Array.from({ length: 20 }).map((_, i) => {
                const level = 20 - i;
                const fill = level <= (ci === 0 ? 14 : 11);
                const color = level > 16 ? MAGE : level > 12 ? AMBER : CYAN;
                return <div key={i} style={{ height: 8, background: fill ? color : "rgba(255,255,255,0.06)" }} />;
              })}
              <div style={{ textAlign: "center", fontSize: 9, color: "rgba(255,255,255,0.5)", fontFamily: "ui-monospace, monospace", marginTop: 4 }}>{ch}</div>
            </div>
          ))}
        </div>
      </div>

      {/* main content */}
      <div style={{
        position: "absolute", top: 56, left: 28, right: 130, bottom: 0,
        padding: "60px 64px 40px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        zIndex: 2,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span style={{
              fontFamily: "ui-monospace, monospace", fontSize: 11,
              padding: "5px 10px", border: `1px solid ${CYAN}`, color: CYAN,
              letterSpacing: "0.18em",
            }}>
              ▸ TX 26.05.2026 / 14:00 KST
            </span>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}>
              VOL.07 — {VAR_META.themeEn.toUpperCase()}
            </span>
          </div>

          {/* glitchy title */}
          <h1 style={{
            margin: 0,
            fontFamily: "'Space Grotesk', 'Pretendard Variable', sans-serif",
            fontWeight: 700,
            fontSize: 152,
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            position: "relative",
          }}>
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "absolute", left: -3, top: 0, color: CYAN, mixBlendMode: "screen", opacity: 0.8 }}>TVING</span>
              <span style={{ position: "absolute", left: 3, top: 0, color: MAGE, mixBlendMode: "screen", opacity: 0.8 }}>TVING</span>
              <span style={{ position: "relative", color: "#fff" }}>TVING</span>
            </span>
            <br />
            <span style={{ display: "inline-block", color: "#fff" }}>TECH MEETUP</span>
            <span style={{ display: "inline-block", color: CYAN, transform: "translateY(6px)" }}>_</span>
          </h1>

          <div style={{
            marginTop: 28, fontSize: 19, lineHeight: 1.5, maxWidth: 720,
            color: "rgba(255,255,255,0.78)",
          }}>
            No.1 K-콘텐츠 플랫폼을 만드는 <span style={{ color: "#fff", fontWeight: 600 }}>기술과 사람들</span>의 이야기.
            한 달에 한 번, 우리가 부딪힌 문제를 가감 없이 송출합니다.
          </div>
        </div>

        {/* bottom data strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "auto auto auto auto 1fr auto",
          gap: 32, alignItems: "end",
          paddingTop: 24, borderTop: `1px solid ${CYAN}33`,
          fontFamily: "ui-monospace, monospace",
        }}>
          {[
            { l: "DATE",  v: "2026.05.26", a: CYAN },
            { l: "TIME",  v: "14:00–18:30", a: CYAN },
            { l: "VENUE", v: "TVING HQ · 1F", a: CYAN },
            { l: "SEATS", v: "120 + ONLINE", a: CYAN },
          ].map((m) => (
            <div key={m.l}>
              <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.4)" }}>{m.l}</div>
              <div style={{ marginTop: 6, fontSize: 16, color: "#fff", letterSpacing: "-0.005em" }}>{m.v}</div>
            </div>
          ))}
          <div />
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              padding: "13px 22px",
              background: CYAN, color: "#000",
              border: "none", fontFamily: "inherit",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.18em",
              cursor: "pointer",
              clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              paddingRight: 32,
            }}>
              ▸ TUNE IN
            </button>
            <button style={{
              padding: "13px 22px",
              background: "transparent", color: "#fff",
              border: `1px solid ${MAGE}`, fontFamily: "inherit",
              fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
              cursor: "pointer",
            }}>
              ◉ SUBMIT TALK
            </button>
          </div>
        </div>
      </div>

      {/* timecode bottom-left */}
      <div style={{
        position: "absolute", bottom: 14, left: 44,
        fontFamily: "ui-monospace, monospace", fontSize: 10,
        color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em",
        zIndex: 3,
      }}>
        ⌬ TVING.BROADCAST.SYSTEM // ENC.HEVC // 2160P // {VAR_META.host.toUpperCase()}
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

Object.assign(window, { V2Broadcast });
