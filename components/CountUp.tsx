'use client';

import { useRef, useState, useEffect } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  pad?: number;
}

export default function CountUp({ value, suffix = '', duration = 1800, pad = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
    };
  }, [started]);

  useEffect(() => {
    if (!started) {
      return;
    }
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame += 1;
      current += increment;
      if (frame >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => {
      clearInterval(timer);
    };
  }, [started, value, duration]);

  const display = pad > 0 ? String(count).padStart(pad, '0') : String(count);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
