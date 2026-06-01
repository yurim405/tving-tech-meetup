'use client';

import { useState, useEffect, useMemo } from 'react';

/* sticky header: returns true once page scrolled past threshold */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return scrolled;
}

/* smooth-scroll helper */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* current section indicator */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= fromTop) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

/* live ticking clock for hero countdown */
export function useCountdown(targetIso: string) {
  const [now, setNow] = useState<number | null>(null);
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);

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

  return { days, hours, mins, secs, isLive: diff === 0 && now !== null };
}

/* scroll-reveal: triggers IntersectionObserver on mount */
export function useReveal() {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        el.classList.add('in');
      });
    };
    const fallback = setTimeout(revealAll, 1200);

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return () => {
        clearTimeout(fallback);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' },
    );

    document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
      io.observe(el);
    });

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
}
