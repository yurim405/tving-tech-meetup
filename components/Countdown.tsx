'use client';

import { useState, useEffect, useMemo } from 'react';
import { MEETUP_DATE } from '@/data/meetup-data';

export default function Countdown() {
  const target = useMemo(() => MEETUP_DATE.getTime(), []);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const diff = now ? Math.max(0, target - now) : 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  const isLive = diff === 0 && now !== null;

  const units = [
    { v: days, l: 'D' },
    { v: hours, l: 'H' },
    { v: mins, l: 'M' },
    { v: secs, l: 'S' },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <span className="text-[10px] tracking-[0.18em] font-mono text-[var(--fg-4)] mr-1">
        {isLive ? 'NOW LIVE' : 'STARTS IN'}
      </span>
      {units.map((c, i) => (
        <div
          key={i}
          className="flex items-baseline gap-1 px-3 py-2 rounded-md border border-[var(--line)] bg-[var(--bg-2)]/60 min-w-[60px]"
        >
          <span className="text-[20px] md:text-[24px] font-semibold tabular-nums tracking-tight">
            {now === null ? '--' : String(c.v).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-[var(--fg-4)] font-mono">
            {c.l}
          </span>
        </div>
      ))}
    </div>
  );
}
