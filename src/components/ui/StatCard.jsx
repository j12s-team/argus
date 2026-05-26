import Card from './Card.jsx';
import Reveal from './Reveal.jsx';

export default function StatCard({ value, label, sub, tone = 'accent', delay = 0 }) {
  const valueColor = tone === 'red' ? 'text-argus-red' : tone === 'yellow' ? 'text-argus-yellow' : 'text-argus-accent';
  return (
    <Reveal delay={delay}>
      <Card accentBar className="p-6 md:p-7 h-full">
        <div className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl ${valueColor} leading-none`}>
          {value}
        </div>
        <div className="mt-3 text-sm md:text-base text-argus-fg font-medium">{label}</div>
        {sub && <div className="mt-1 body-sm">{sub}</div>}
      </Card>
    </Reveal>
  );
}
