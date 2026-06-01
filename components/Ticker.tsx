'use client';

const TICKER_TEXT =
  'TVING TECH MEETUP \u00B7 MAY 2026 \u00B7 FRONTEND \u00B7 STREAMING \u00B7 ARCHITECTURE \u00B7 MONITORING \u00B7 ';

export default function Ticker() {
  return (
    <div className="overflow-hidden py-8 border-y border-white/[0.03] select-none">
      <div className="flex animate-marquee">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl font-black text-white/[0.025] tracking-tight whitespace-nowrap shrink-0"
          >
            {TICKER_TEXT}
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
