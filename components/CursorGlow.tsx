'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * 페이지 전체에서 마우스를 따라다니는 라임 글로우.
 * fixed 포지션으로 뷰포트 기준 동작.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!active) {
      setActive(true);
    }
  }, [active]);

  const handleLeave = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [handleMove, handleLeave]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-500"
      style={{
        width: 500,
        height: 500,
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        background:
          'radial-gradient(circle, rgba(232,117,42,0.16) 0%, rgba(232,117,42,0.05) 35%, transparent 65%)',
        opacity: active ? 1 : 0,
      }}
    />
  );
}
