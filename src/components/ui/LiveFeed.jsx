import { useEffect, useState } from 'react';

/* Simulated mempool feed — ambient hero element.
 * Always uses the dark "code" surface tokens so it reads as a console even
 * when the rest of the site is in light mode. */
const SAMPLES = [
  { kind: 'OK',      addr: '0xA9F1…be32', method: 'swap()',      ms: 12, risk: 8 },
  { kind: 'OK',      addr: '0xC712…91a4', method: 'deposit()',   ms: 9,  risk: 4 },
  { kind: 'WATCH',   addr: '0x4E0d…f02b', method: 'liquidate()', ms: 22, risk: 47 },
  { kind: 'OK',      addr: '0xD8b0…12cc', method: 'transfer()',  ms: 7,  risk: 2 },
  { kind: 'BLOCK',   addr: '0x9111…aaba', method: 'flashLoan()', ms: 41, risk: 92 },
  { kind: 'OK',      addr: '0x77fe…2210', method: 'approve()',   ms: 5,  risk: 6 },
  { kind: 'WATCH',   addr: '0x5b3c…79d1', method: 'borrow()',    ms: 18, risk: 38 },
  { kind: 'OK',      addr: '0x2A00…ccd4', method: 'mint()',      ms: 11, risk: 9 },
  { kind: 'ALERT',   addr: '0xFf23…0eaa', method: 'governance()',ms: 31, risk: 71 },
  { kind: 'OK',      addr: '0x3344…1abc', method: 'repay()',     ms: 8,  risk: 5 },
];

const toneOf = (k) =>
  k === 'BLOCK'
    ? 'text-argus-red'
    : k === 'ALERT'
    ? 'text-argus-yellow'
    : k === 'WATCH'
    ? 'text-argus-blue'
    : 'text-argus-accent';

export default function LiveFeed({ className = '' }) {
  const [rows, setRows] = useState(() => SAMPLES.slice(0, 7));

  useEffect(() => {
    let i = 7;
    const id = setInterval(() => {
      setRows((prev) => {
        const next = [...prev.slice(1), SAMPLES[i % SAMPLES.length]];
        i++;
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`relative rounded-lg border border-argus-code-border bg-argus-code-bg/95 backdrop-blur shadow-argus overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between border-b border-argus-code-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-argus-accent">
            <span className="absolute inset-0 rounded-full animate-pulseDot bg-argus-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-code-muted">
            mempool · live (simulated)
          </span>
        </div>
        <span className="font-mono text-[11px] text-argus-code-muted">argus / sepolia</span>
      </div>

      <div className="p-3 md:p-4 font-mono text-[12px] md:text-[13px]">
        <div className="grid grid-cols-12 gap-2 pb-2 text-[10px] uppercase tracking-[0.14em] text-argus-code-muted border-b border-argus-code-border/60">
          <div className="col-span-2">state</div>
          <div className="col-span-4">tx</div>
          <div className="col-span-3">method</div>
          <div className="col-span-1 text-right">ms</div>
          <div className="col-span-2 text-right">risk</div>
        </div>
        <div className="divide-y divide-argus-code-border/40">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 py-2 items-center transition-opacity"
            >
              <div className={`col-span-2 font-bold ${toneOf(r.kind)}`}>{r.kind}</div>
              <div className="col-span-4 text-argus-code-muted truncate">{r.addr}</div>
              <div className="col-span-3 text-argus-code-fg truncate">{r.method}</div>
              <div className="col-span-1 text-right text-argus-code-muted">{r.ms}</div>
              <div className="col-span-2 text-right">
                <span className={`${r.risk > 70 ? 'text-argus-red' : r.risk > 35 ? 'text-argus-yellow' : 'text-argus-accent'}`}>
                  {r.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
