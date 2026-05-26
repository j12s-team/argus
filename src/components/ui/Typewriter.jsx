import { useEffect, useState } from 'react';

/* Subtle typewriter that types two lines for the hero. Stable, accessible. */
export default function Typewriter({
  lines = [],
  speed = 36,
  startDelay = 250,
  className = '',
}) {
  const [typed, setTyped] = useState(lines.map(() => ''));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    let timer = setTimeout(tick, startDelay);

    function tick() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const current = lines[lineIdx];
      if (charIdx <= current.length) {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx);
          return next;
        });
        charIdx++;
        timer = setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(tick, speed * 6);
      }
    }
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, speed, startDelay]);

  return (
    <span className={className}>
      {typed.map((t, i) => (
        <span key={i} className="block">
          {t || ' '}
          {!done && i === typed.findIndex((v, idx) => v.length < lines[idx].length) && (
            <span className="caret" />
          )}
        </span>
      ))}
    </span>
  );
}
