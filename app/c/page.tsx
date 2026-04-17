'use client'

import { useState, useEffect } from 'react'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { SocialProof1 } from '@/components/gallery'
import { Planos, Garantia, CtaFinal, Footer } from '@/components/stack-planos-faq'

const marqueeItems1 = [
  'Treinos Hormonais',
  'Reset Hormonal',
  'Equilíbrio Metabólico',
  'Queima Sustentável',
  'Manutenção e Estilo de Vida',
  'Comunidade das Musas',
  'Laüra Rosa Personal',
  'Corpo Feliz',
]

const marqueeItems2 = [
  '+1.000 Musas ativas',
  '30 dias de garantia',
  'Acompanhamento diário real',
  'Em casa · 15 minutos',
  'Treinos que respeitam o ciclo',
  'Laüra no WhatsApp todo dia',
]

const DELAY_MS = 7 * 60 * 1000 + 5 * 1000 // 7 minutos e 5 segundos = 425000ms

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <Hero hideBottomContent={!showContent} />
      {showContent && (
        <>
          <MarqueeStrip items={marqueeItems1} />
          <SocialProof1 />
          <MarqueeStrip items={marqueeItems2} dark reverse />
          <Planos />
          <Garantia />
          <CtaFinal />
          <Footer />
        </>
      )}
    </main>
  )
}
