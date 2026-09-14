'use client';

import { useEffect } from 'react';

/**
 * .v3-rise 요소를 뷰포트에 들어올 때 한 번만 나타나게 한다.
 * 관찰이 끝난 요소는 바로 unobserve 해서 스크롤마다 콜백이 쌓이지 않도록 한다.
 */
export default function V3Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.v3-rise');
    if (targets.length === 0) return;

    // 모션을 줄이도록 설정한 사용자에게는 애니메이션 없이 바로 보여준다
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '160px 0px -4% 0px', threshold: 0.01 },
    );

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 55}ms`;
      io.observe(el);
    });

    return () => { io.disconnect(); };
  }, []);

  return null;
}
