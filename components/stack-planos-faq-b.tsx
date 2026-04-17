'use client'

import { Planos as PlanosOriginal, Stack, Garantia, Faq } from './stack-planos-faq'
import { useState } from 'react'

const planosBVariant = [
  {
    nome: 'Plano Anual',
    de: 'de R$958,80',
    preco: 'R$39,92',
    precoLabel: '12x de ',
    per: 'ou R$479 à vista',
    avista: 'Acesso por 12 meses',
    dest: true,
    badge: '✦ Melhor custo-benefício',
    cta: 'Garantir agora ›',
    href: 'https://payfast.greenn.com.br/78187/offer/9nk4U0',
  },
  {
    nome: 'Plano Mensal',
    de: '',
    preco: 'R$97',
    precoLabel: '',
    per: 'por mês',
    avista: 'Para conhecer antes\nde se comprometer',
    cta: 'Começar agora ›',
    href: 'https://payfast.greenn.com.br/148344/offer/o5sqIu',
  },
]

export function PlanosB() {
  return (
    <section id="planos" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: 'var(--ink)' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(100px,18vw,260px)',
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.03)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.04em',
        }}
      >
        PLANOS
      </div>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="reveal text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
            ✦ Investimento
          </span>
          <h2
            className="mt-4 text-white"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            Escolha o seu plano.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:justify-center max-w-2xl mx-auto">
          {planosBVariant.map((p, i) => (
            <div
              key={i}
              className={`reveal ${i > 0 ? `reveal-d${i}` : ''} relative pt-5`}
            >
              {p.badge && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap z-10 px-4 py-1.5"
                  style={{ background: 'var(--g)' }}
                >
                  {p.badge}
                </div>
              )}
              <div
                className="rounded-3xl p-6 sm:p-7 flex flex-col gap-1 h-full transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: p.dest ? 'var(--o)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${p.dest ? 'var(--o)' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: p.dest ? '0 12px 48px rgba(245,113,0,0.3)' : 'none',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.dest ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                  {p.nome}
                </div>
                {p.de && (
                  <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>{p.de}</div>
                )}
                <div
                  className="text-white leading-none tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  {p.precoLabel && <span style={{ fontSize: 14, fontWeight: 500 }}>{p.precoLabel}</span>}
                  {p.preco}
                </div>
                <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{p.per}</div>
                <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)', marginBottom: 20, whiteSpace: 'pre-line' }}>
                  {p.avista}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-full font-bold text-sm text-white py-3.5 px-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: p.dest ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.12)' }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center items-center gap-2.5 mt-7" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          <span>Acesso imediato</span>
          {['Cartão', 'PIX', 'Boleto'].map(b => (
            <span key={b} className="rounded-full px-3 py-1 text-xs font-bold tracking-wider" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Stack, Garantia, Faq }
