/* =========================================================================
 *  Hooks — reveal-on-scroll, sticky-header, smooth-scroll, click-outside
 * ========================================================================= */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* trigger CSS reveal when element enters viewport */
function useInViewMount(rootMargin = "0px 0px -10% 0px") {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    };
    /* Belt-and-suspenders fallback: if IO never fires (iframe edge cases,
       elements created after this hook runs, etc.), force-reveal everything
       after a short delay so the page never gets stuck invisible. */
    const fallback = setTimeout(revealAll, 1200);

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return () => clearTimeout(fallback);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
}

/* sticky header: returns true once page scrolled past threshold */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/* smooth-scroll helper */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

/* current section indicator */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= fromTop) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

/* live ticking clock for hero countdown */
function useCountdown(targetIso) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const diff = Math.max(0, target - now);
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs, isLive: diff === 0 };
}

Object.assign(window, {
  useInViewMount, useScrolled, scrollToId, useActiveSection, useCountdown,
});
