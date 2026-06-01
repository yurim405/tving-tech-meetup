/* ============================================================
 *  V3 — Brutalist Mono (REV.2)
 *  Black canvas, lime tags, massive white Korean type with one
 *  word filled in green, sparkles + brush squiggles. Playful brutalism.
 * ============================================================ */

/* ---------- hand-drawn SVG decorations ---------- */
function Sparkle({ size = 60, color = "#fff", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <path
        d="M50 6 C 50 38 50 38 4 50 C 50 62 50 62 50 94 C 50 62 50 62 96 50 C 50 38 50 38 50 6 Z"
        fill={color}
      />
    </svg>
  );
}

function BrushSmile({ width = 220, color = "#fff", style }) {
  return (
    <svg width={width} height={width * 0.55} viewBox="0 0 220 120" style={style} aria-hidden>
      <path
        d="M 14 22 C 30 88 110 116 196 60 C 200 56 204 50 204 44"
        fill="none"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Scribble({ size = 160, color = "#fff", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style} aria-hidden>
      <path
        d="M 30 110 C 40 60 90 50 120 70 C 150 90 140 140 110 145 C 80 150 60 130 80 110 C 110 80 170 100 175 140 C 178 165 162 178 142 178 C 130 178 124 174 124 174"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandSlash({ height = 220, color = "#fff", style }) {
  return (
    <svg width={height * 0.42} height={height} viewBox="0 0 90 220" style={style} aria-hidden>
      <path
        d="M 78 12 C 70 30 56 80 40 130 C 28 168 18 196 8 208"
        fill="none"
        stroke={color}
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarBurst({ size = 80, color = "#fff", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={color} strokeWidth="6" strokeLinecap="round">
        <line x1="50" y1="8" x2="50" y2="28" />
        <line x1="50" y1="72" x2="50" y2="92" />
        <line x1="8" y1="50" x2="28" y2="50" />
        <line x1="72" y1="50" x2="92" y2="50" />
        <line x1="20" y1="20" x2="34" y2="34" />
        <line x1="66" y1="66" x2="80" y2="80" />
        <line x1="80" y1="20" x2="66" y2="34" />
        <line x1="20" y1="80" x2="34" y2="66" />
      </g>
    </svg>
  );
}

/* ---------- the variation ---------- */
function V3Brutalist() {
  const GREEN = "#C6F73B";
  const BG    = "#0B0B0B";

  return (
    <div style={{
      width: 1440, height: 900,
      background: BG,
      color: "#fff",
      fontFamily: "'Pretendard Variable', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "90px 90px",
        backgroundPosition: "0 0",
        pointerEvents: "none",
      }} />

      {/* corner glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(50% 40% at 50% 50%, rgba(198,247,59,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* TOP NAV */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 5,
        background: "rgba(11,11,11,0.6)",
        backdropFilter: "blur(8px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 28, height: 28, background: GREEN, color: "#000",
            fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.08em",
            fontSize: 18,
          }}>T</span>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em" }}>
            TVING <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>· Tech Meetup</span>
          </span>
        </div>
        <div style={{
          display: "flex", gap: 32,
          fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
          fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
        }}>
          {["ABOUT", "SCHEDULE", "SPEAKERS", "APPLY"].map((n, i) => (
            <span key={n} style={{
              color: i === 0 ? GREEN : "rgba(255,255,255,0.7)",
              fontWeight: i === 0 ? 700 : 500,
              borderBottom: i === 0 ? `2px solid ${GREEN}` : "2px solid transparent",
              paddingBottom: 2,
            }}>
              {n}
            </span>
          ))}
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          fontFamily: "ui-monospace, monospace", fontSize: 11,
          color: "rgba(255,255,255,0.55)", letterSpacing: "0.14em",
        }}>
          <span>VOL.07 / 05.2026</span>
          <button style={{
            background: GREEN, color: "#000", border: "none",
            padding: "8px 14px", fontFamily: "inherit", fontSize: 12,
            fontWeight: 700, letterSpacing: "0.14em", cursor: "pointer",
            borderRadius: 4,
          }}>
            발표 신청 →
          </button>
        </div>
      </div>

      {/* SPARKLES & DECORATIONS — positioned absolutely around the type */}
      <Sparkle size={70}  color="#fff"  style={{ position: "absolute", top: 220, left: 110, transform: "rotate(8deg)" }} />
      <Sparkle size={48}  color="#fff"  style={{ position: "absolute", top: 310, left: 190, transform: "rotate(-10deg)", opacity: 0.85 }} />
      <Sparkle size={36}  color={GREEN} style={{ position: "absolute", top: 200, left: 230, transform: "rotate(20deg)" }} />

      <Sparkle size={62}  color="#fff"  style={{ position: "absolute", top: 220, right: 130 }} />
      <Sparkle size={42}  color={GREEN} style={{ position: "absolute", top: 320, right: 200, transform: "rotate(15deg)" }} />
      <StarBurst size={56} color="#fff" style={{ position: "absolute", top: 160, right: 80 }} />

      <BrushSmile width={170} color="#fff" style={{ position: "absolute", top: 470, left: 140, transform: "rotate(8deg)" }} />
      <Scribble size={140} color="#fff" style={{ position: "absolute", top: 380, right: 60, transform: "rotate(-12deg)" }} />

      {/* COPY BLOCK */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 64, bottom: 160,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "0 80px",
      }}>
        {/* tag pills (rotated, like the reference) */}
        <div style={{
          display: "flex", gap: 8,
          marginBottom: 38, transform: "rotate(-2deg)",
        }}>
          <span style={{
            background: GREEN, color: "#000",
            padding: "12px 22px",
            fontSize: 26, fontWeight: 800,
            letterSpacing: "-0.02em",
            wordBreak: "keep-all",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.4)",
          }}>
            1,000만이 보는 그 화면을
          </span>
          <span style={{
            background: "#fff", color: "#000",
            padding: "12px 22px",
            fontSize: 26, fontWeight: 800,
            letterSpacing: "-0.02em",
            wordBreak: "keep-all",
            transform: "rotate(3deg) translateY(2px)",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.4)",
          }}>
            만드는 사람들
          </span>
        </div>

        {/* massive headline row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 24,
          fontWeight: 900,
          fontSize: 200,
          lineHeight: 0.9,
          letterSpacing: "-0.05em",
        }}>
          <HandSlash height={200} color="#fff" style={{ marginTop: -10 }} />
          <span style={{ fontStyle: "italic", color: "#fff" }}>Vol. 07</span>
        </div>

        <div style={{
          marginTop: 6,
          fontWeight: 900,
          fontSize: 132,
          lineHeight: 0.95,
          letterSpacing: "-0.05em",
          color: "#fff",
          textAlign: "center",
          display: "flex", gap: 24, alignItems: "baseline",
        }}>
          <span>TECH</span>
          <span style={{
            color: GREEN,
            position: "relative",
          }}>
            MEETUP
            {/* underline brush */}
            <svg
              width="540" height="34"
              viewBox="0 0 540 34"
              style={{ position: "absolute", left: -8, bottom: -18 }}
              aria-hidden
            >
              <path
                d="M 8 22 C 80 8 200 6 290 12 C 380 18 470 22 532 12"
                fill="none"
                stroke={GREEN}
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        {/* theme line */}
        <div style={{
          marginTop: 56,
          fontSize: 17,
          fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
        }}>
          THEME / 「{VAR_META.themeKo}」
        </div>
      </div>

      {/* BOTTOM STRIP — minimal mono data line */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 160,
        borderTop: "1px solid rgba(255,255,255,0.12)",
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1.4fr",
        background: "rgba(11,11,11,0.6)",
        backdropFilter: "blur(8px)",
      }}>
        {[
          { l: "DATE",  v: "05.26",   b: "2026 · TUE" },
          { l: "TIME",  v: "14:00",   b: "→ 18:30 KST" },
          { l: "VENUE", v: "1F",      b: "TVING HQ · 라운지" },
          { l: "SEATS", v: "120+",    b: "+ ONLINE LIVE" },
        ].map((m, i) => (
          <div key={m.l} style={{
            borderRight: "1px solid rgba(255,255,255,0.1)",
            padding: "22px 28px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div style={{
              fontFamily: "ui-monospace, monospace", fontSize: 11,
              letterSpacing: "0.2em", color: "rgba(255,255,255,0.45)", fontWeight: 600,
            }}>
              0{i+1} / {m.l}
            </div>
            <div>
              <div style={{
                fontSize: 56, fontWeight: 900,
                letterSpacing: "-0.04em", lineHeight: 1,
                color: "#fff",
              }}>
                {m.v}
              </div>
              <div style={{
                marginTop: 6, fontSize: 13,
                fontFamily: "ui-monospace, monospace",
                color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em",
              }}>
                {m.b}
              </div>
            </div>
          </div>
        ))}
        {/* HOST + sparkle cell */}
        <div style={{
          padding: "22px 32px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          position: "relative", overflow: "hidden",
        }}>
          <Sparkle size={28} color={GREEN} style={{ position: "absolute", top: 16, right: 22 }} />
          <div style={{
            fontFamily: "ui-monospace, monospace", fontSize: 11,
            letterSpacing: "0.2em", color: GREEN, fontWeight: 700,
          }}>
            05 / HOST
          </div>
          <div>
            <div style={{
              fontSize: 32, fontWeight: 800,
              letterSpacing: "-0.025em", lineHeight: 1,
              color: "#fff",
            }}>
              Web Core
            </div>
            <div style={{
              marginTop: 6, fontSize: 13,
              fontFamily: "ui-monospace, monospace",
              color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em",
            }}>
              DEVELOPMENT · TVING
            </div>
          </div>
        </div>
      </div>

      {/* corner "★ NEW" sticker */}
      <div style={{
        position: "absolute", top: 110, right: 56,
        transform: "rotate(8deg)",
        background: GREEN, color: "#000",
        padding: "8px 14px",
        fontFamily: "ui-monospace, monospace", fontSize: 12,
        fontWeight: 800, letterSpacing: "0.14em",
        boxShadow: "3px 3px 0 #000",
        zIndex: 6,
      }}>
        ★ APPLY OPEN
      </div>
    </div>
  );
}

Object.assign(window, { V3Brutalist });
