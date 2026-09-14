'use client';

import { useRef, useState, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translate(-2px, -2px)`,
      boxShadow: `${-x * 12}px ${-y * 12 + 6}px 0 var(--shadow)`,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
      boxShadow: '',
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        ...style,
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
      }}
    >
      {children}
    </div>
  );
}
