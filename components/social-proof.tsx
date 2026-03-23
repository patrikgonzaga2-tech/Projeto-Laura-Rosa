'use client'

import { useEffect, useRef } from 'react'

// Images are placeholder colored blocks since base64 data is truncated
const cards = [
  { bg: '#e8d5c4' },
  { bg: '#d4e8d4' },
  { bg: '#c4d4e8' },
  { bg: '#e8e4c4' },
  { bg: '#e4c4e8' },
  { bg: '#c4e8e4' },
]

const accentColors = [
  'linear-gradient(90deg,#F57100,#C54E00)',
  'linear-gradient(90deg,#1C873C,#004811)',
  'linear-gradient(90deg,#004811,#1C873C)',
  'linear-gradient(90deg,#F57100,#C54E00)',
  'linear-gradient(90deg,#1C873C,#004811)',
  'linear-gradient(90deg,#004811,#1C873C)',
]

function MosaicCard({
  dark,
  idx,
  delay = '',
}: {
  dark?: boolean
  idx: number
  delay?: string
}) {
  const heights = [280, 220, 320, 260, 300, 240]
  const h = heights[idx % heights.length]

  return (
    <div
      className={`reveal ${delay} relative overflow-hidden break-inside-avoid mb-3.5 block transition-all duration-300 hover:-translate-y-1`}
      style={{
        borderRadius: 28,
        boxShadow: dark
          ? '0 2px 20px rgba(0,0,0,0.2)'
          : '0 2px 20px rgba(0,0,0,0.07)',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : 'none',
        background: dark ? 'rgba(255,255,255,0.04)' : '#fff',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: accentColors[idx % accentColors.length] }}
      />
      <div
        style={{
          height: h,
          background: `linear-gradient(135deg, ${cards[idx % cards.length].bg}, ${cards[(idx + 2) % cards.length].bg})`,
        }}
        className="w-full"
      />
      <div className="p-4">
        <div
          className="h-3 rounded mb-2"
          style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)', width: '70%' }}
        />
        <div
          className="h-2.5 rounded"
          style={{ background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', width: '50%' }}
        />
      </div>
    </div>
  )
}

export function SocialProof1() {
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d1', 'reveal-d2', 'reveal-d3']

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--pale)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 80% 20%,rgba(245,113,0,0.06) 0%,transparent 70%)',
        }}
      />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-end gap-6 mb-14 sm:mb-16">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
              style={{ background: 'var(--g)' }}
            >
              ✦ Resultados reais
            </span>
            <h2
              className="mt-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px,5vw,60px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Mulheres que pararam<br />
              de lutar contra<br />
              <span style={{ color: 'var(--o)' }}>o próprio corpo.</span>
            </h2>
          </div>
          <p
            className="text-sm sm:text-right max-w-xs sm:max-w-[320px] leading-relaxed"
            style={{ color: 'var(--sub)' }}
          >
            Mais de 1.000 transformações. Histórias de mulheres com SOP, efeito sanfona, menopausa e rotinas impossíveis — que encontraram um método feito para o corpo delas.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="sm:[column-count:2] lg:[column-count:3]"
          style={{ columnGap: 14 }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <MosaicCard key={i} idx={i} delay={delays[i]} />
          ))}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href="#planos"
            className="inline-flex items-center gap-3 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              padding: '17px 36px',
              background: 'var(--o)',
              boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
            }}
          >
            Quero esses resultados
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SocialProof2() {
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d1', 'reveal-d2', 'reveal-d3']

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--gd)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 80%,rgba(245,113,0,0.08) 0%,transparent 70%)',
        }}
      />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal text-center mb-14 sm:mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
            style={{ background: 'var(--o)' }}
          >
            ✦ A comunidade em tempo real
          </span>
          <h2
            className="mt-4 text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px,5vw,60px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            O que acontece<br />
            dentro do grupo<br />
            <span style={{ color: 'var(--o)' }}>todo dia.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[480px] leading-relaxed" style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>
            Não é marketing. É o WhatsApp das Musas — ao vivo, todos os dias.
          </p>
        </div>

        <div
          className="sm:[column-count:2] lg:[column-count:3]"
          style={{ columnGap: 14 }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <MosaicCard key={i} dark idx={i} delay={delays[i]} />
          ))}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href="#planos"
            className="inline-flex items-center gap-3 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              padding: '17px 36px',
              background: 'var(--o)',
              boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
            }}
          >
            Quero fazer parte da Comunidade
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
