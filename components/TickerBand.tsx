'use client';

interface TickerBandProps {
  items: string[];
  reverse?: boolean;
  speed?: 'normal' | 'fast';
}

export default function TickerBand({ items, reverse = false, speed = 'normal' }: TickerBandProps) {
  const duration = speed === 'fast' ? '24s' : '36s';

  return (
    <div className="border-y border-[var(--line)] overflow-hidden select-none bg-[var(--bg-0)]">
      <div
        className="flex whitespace-nowrap py-4"
        style={{
          animation: `marquee ${duration} linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8 md:gap-12 px-6 shrink-0">
            {items.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className={`font-mono text-[13px] md:text-[15px] font-bold tracking-[0.12em] uppercase ${
                  t === '✦' ? 'text-[var(--lime)] text-[18px]' : 'text-[var(--fg-4)]'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
