'use client'

import Script from 'next/script'
import { useReveal } from '@/hooks/use-reveal'

interface HeroProps {
  hideBottomContent?: boolean
}

export function Hero({ hideBottomContent = false }: HeroProps) {
  useReveal()

  return (
    <section
      className="relative min-h-svh flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--gd)' }}
      aria-label="Seção principal"
    >
      {/* Blobs */}
      <svg
        className="blob-float1 absolute pointer-events-none will-change-transform"
        style={{ top: '-20%', right: '-15%', width: 'min(700px,90vw)', height: 'min(700px,90vw)' }}
        viewBox="0 0 400 400"
      >
        <path d="M60,20 C120,-20 220,10 280,60 C340,110 380,180 360,260 C340,340 260,390 180,380 C100,370 20,320 10,240 C0,160 0,60 60,20Z" fill="rgba(245,113,0,0.18)" />
      </svg>
      <svg
        className="blob-float2 absolute pointer-events-none will-change-transform"
        style={{ bottom: '-10%', left: '-10%', width: 'min(500px,70vw)', height: 'min(500px,70vw)' }}
        viewBox="0 0 300 300"
      >
        <path d="M40,10 C90,-15 170,5 210,50 C250,95 270,160 240,210 C210,260 140,280 80,260 C20,240 -10,170 5,110 C20,50 -10,35 40,10Z" fill="rgba(28,135,60,0.25)" />
      </svg>
      <svg
        className="blob-float3 absolute pointer-events-none will-change-transform"
        style={{ top: '20%', left: '30%', width: 'min(300px,40vw)', height: 'min(300px,40vw)' }}
        viewBox="0 0 200 200"
      >
        <path d="M30,10 C65,-5 120,5 150,40 C180,75 185,130 160,160 C135,190 80,195 45,175 C10,155 -5,100 5,65 C15,30 -5,25 30,10Z" fill="rgba(245,113,0,0.10)" />
      </svg>

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-5 sm:px-8 pt-12 sm:pt-14 lg:pt-16">
        {/* Logo */}
        <div className="reveal mb-10 sm:mb-12">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20165%20%282%29-RoDBA8TV1oNG9u024AV9Gt19c7dub6.png"
            alt="Comunidade Corpo Feliz"
            className="h-14 sm:h-16 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            width={220}
            height={64}
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        <h1
          className="reveal reveal-d1 font-display text-white mb-8 max-w-[780px]"
          style={{
            fontSize: 'clamp(44px,7vw,88px)',
            fontWeight: 800,
            lineHeight: 0.96,
            letterSpacing: '-0.03em',
          }}
        >
          {'Emagreça de verdade. Sem lutar contra '}
          <br className="hidden sm:block" />
          <em
            className="not-italic relative inline-block"
            style={{ color: 'var(--o)' }}
          >
            o seu corpo.
            <span
              className="absolute bottom-[-4px] left-0 right-0 h-[3px] rounded-sm"
              style={{ background: 'var(--o)' }}
            />
          </em>
        </h1>

        <p
          className="reveal reveal-d2 mb-6 sm:mb-10"
          style={{
            fontSize: 'clamp(15px,2vw,18px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 560,
            fontFamily: 'var(--font-body)',
          }}
        >
          Mais de 1.000 mulheres já descobriram o que muda quando o treino respeita os hormônios. Em casa. Em 15 minutos. Com a Laura do seu lado todo dia.
        </p>

        {/* VSL — único player, com bordas arredondadas no mobile */}
        <div className="reveal reveal-d3 mb-6 sm:mb-10">
          <div className="rounded-2xl overflow-hidden sm:rounded-none">
            <vturb-smartplayer
              id="vid-69d7a4db299a69aeb30006b1"
              style={{ display: 'block', margin: '0 auto', width: '100%' }}
              aria-label="Vídeo de apresentação da Comunidade Corpo Feliz"
              role="region"
            />
          </div>
          <Script
            src="https://scripts.converteai.net/9406f62d-bd68-44a6-971a-c0a91bdff3c8/players/69d7a4db299a69aeb30006b1/v4/player.js"
            strategy="afterInteractive"
          />
        </div>

        {!hideBottomContent && (
          <>
            <div className="reveal reveal-d3 flex flex-wrap gap-3 mb-10 sm:mb-16 justify-center">
              <a
                href="#planos"
                aria-label="Quero entrar para as Musas — ver planos"
                className="font-display inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  fontSize: 'clamp(15px,1.5vw,18px)',
                  padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)',
                  background: 'var(--o)',
                  color: '#000',
                  boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
                }}
              >
                Quero entrar para as Musas
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 overflow-hidden"
              style={{
                gap: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '18px 18px 0 0',
              }}
            >
              {[
                { num: '+1.000', lbl: 'Musas ativas' },
                { num: '15–30min', lbl: 'por treino' },
                { num: '30 dias', lbl: 'resultados expressivos' },
                { num: '30 dias', lbl: 'garantia total' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="px-4 py-5 sm:px-5 sm:py-6"
                  style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(12px)' }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: 'clamp(22px,3.5vw,38px)',
                      fontWeight: 800,
                      color: 'var(--o)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.04em' }}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
