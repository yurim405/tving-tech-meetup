'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  delay = 0,
  speed = 80,
  className = '',
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  useEffect(() => {
    if (!started) {
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => {
      clearInterval(timer);
    };
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-[var(--lime)] ml-[2px] align-middle blink" />
      )}
    </span>
  );
}
