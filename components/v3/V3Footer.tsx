import { MEETUP_META } from '@/data/meetup-data';

export default function V3Footer() {
  return (
    <footer className="relative px-5 md:px-10 pt-24 md:pt-32 pb-10">
      <div className="max-w-[1520px] mx-auto">
        <div className="text-center v3-rise">
          <p className="v3-mono">See you next month</p>
          <p className="v3-h2 mt-6">다음 달에 또 만나요</p>

          <div className="mt-10 flex items-center justify-center gap-2" aria-hidden>
            <span
              className="h-[2px] w-[120px] md:w-[200px]"
              style={{ background: 'linear-gradient(90deg, transparent, var(--red))' }}
            />
            <span className="w-[7px] h-[7px] bg-[var(--red)]" style={{ boxShadow: '0 0 12px var(--red)' }} />
          </div>

          <a href="mailto:techmeetup@tving.com" className="inline-block mt-10 text-[16px] font-bold hover:text-[var(--red-2)] transition-colors">
            techmeetup@tving.com
          </a>
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-6 flex flex-wrap items-center justify-between gap-3">
          <span className="v3-mono !text-[10px] md:!text-[11px]">
            Hosted by TVING · {MEETUP_META.hostTeam}
          </span>
          <span className="v3-mono !text-[10px] md:!text-[11px]">© 2026 TVING Corp.</span>
        </div>
      </div>
    </footer>
  );
}
