import { MEETUP_META } from '@/data/meetup-data';

const LINKS = [
  { label: 'Sessions', href: '#tm-sessions' },
  { label: 'Speakers', href: '#tm-speakers' },
  { label: 'Schedule', href: '#tm-timetable' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="tm-display-sub tm-rise">
            See you
            <br />
            there
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/objects/cloud.jpg"
            alt=""
            aria-hidden
            width={800}
            height={800}
            loading="lazy"
            className="tm-obj tm-obj-float w-[120px] md:w-[170px] h-auto"
            style={{ '--amp': '-14px', '--dur': '8s' } as React.CSSProperties}
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="tm-rise">
            <div className="flex items-center gap-2 text-[16px] font-extrabold tracking-[-0.03em]">
              <img src="/logo-tving-gray.svg" alt="TVING" className="h-[12px] w-auto" />
              TECH MEETUP
            </div>
            <p className="mt-3 text-[15px] leading-[1.7] text-[var(--ink-2)] max-w-[340px]">
              한 달에 한 번, 같은 공간에서, 같은 호기심으로.
            </p>
          </div>

          <nav className="tm-rise">
            <div className="tm-label">Explore</div>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="tm-rise">
            <div className="tm-label">Contact</div>
            <ul className="mt-4 space-y-2.5 text-[15px] text-[var(--ink-2)]">
              <li>{MEETUP_META.venue} 회의실</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3 text-[13px] text-[var(--ink-3)]">
          <span>Hosted by TVING · {MEETUP_META.hostTeam}</span>
          <span>© 2026 TVING Corp.</span>
        </div>
      </div>
    </footer>
  );
}
