import { MEETUP_META } from '@/data/meetup-data';

const LINKS = [
  { label: '소개', href: '#v2-about' },
  { label: '세션', href: '#v2-sessions' },
  { label: '발표자', href: '#v2-speakers' },
  { label: '안내', href: '#v2-info' },
  { label: '발표 신청', href: '#v2-cfp' },
];

export default function V2Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <p className="v2-h2 max-w-[720px] v2-rise">
          다음 달에 또 만나요
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="v2-rise">
            <div className="text-[15px] font-extrabold">TVING Tech Meetup</div>
            <p className="mt-3 text-[15px] leading-[1.7] text-[var(--ink-2)] max-w-[320px]">
              한 달에 한 번, 같은 공간에서, 같은 호기심으로.
            </p>
          </div>

          <nav className="v2-rise">
            <div className="v2-label">Explore</div>
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

          <div className="v2-rise">
            <div className="v2-label">Contact</div>
            <ul className="mt-4 space-y-2.5 text-[15px] text-[var(--ink-2)]">
              <li>
                <a href="mailto:techmeetup@tving.com" className="hover:text-[var(--ink)] transition-colors">
                  techmeetup@tving.com
                </a>
              </li>
              <li>{MEETUP_META.venue}</li>
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
