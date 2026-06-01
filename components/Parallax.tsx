'use client';

import { useState, useEffect, useCallback } from 'react';

interface ParallaxProps {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * 스크롤에 따라 자식을 Y축으로 이동시키는 패럴랙스 래퍼.
 * speed: 양수 = 느리게 올라감, 음수 = 빠르게 올라감
 */
export default function Parallax({ speed = 0.1, children, className = '' }: ParallaxProps) {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.scrollY * speed);
  }, [speed]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
