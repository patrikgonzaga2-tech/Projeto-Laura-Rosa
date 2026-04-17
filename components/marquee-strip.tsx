'use client'

export function MarqueeStrip({
  dark = false,
  reverse = false,
  items,
}: {
  dark?: boolean
  reverse?: boolean
  items: string[]
}) {
  const doubled = [...items, ...items]
  return (
    <div
      className="overflow-hidden whitespace-nowrap py-3.5"
      style={{ background: dark ? 'var(--gd)' : 'var(--o)' }}
      aria-hidden="true"
    >
      <div
        className={`inline-flex ${reverse ? 'marquee-animate-reverse' : 'marquee-animate'}`}
        style={{ gap: 0 }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={i % 2 === 1 ? 'px-0 opacity-100' : 'px-8 opacity-90'}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fff',
              ...(i % 2 === 1 ? { color: 'rgba(255,255,255,0.4)', fontSize: 18 } : {}),
            }}
          >
            {i % 2 === 1 ? '✦' : item}
          </span>
        ))}
      </div>
    </div>
  )
}
