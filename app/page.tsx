import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { SocialProof1, SocialProof2 } from '@/components/gallery'
import { Metodo } from '@/components/metodo'
import { ComoFunciona } from '@/components/como-funciona'
import { Beneficios, Entrega, Bonus, Comparacao } from '@/components/beneficios-entrega'
import { Stack, Planos, Garantia, Faq, CtaFinal, Footer } from '@/components/stack-planos-faq'

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

export default function Page() {
  return (
    <main>
      <Hero />
      <MarqueeStrip items={marqueeItems1} />
      <SocialProof1 />
      <Metodo />
      <MarqueeStrip items={marqueeItems2} dark reverse />
      <ComoFunciona />
      <SocialProof2 />
      <Beneficios />
      <Entrega />
      <Bonus />
      <Comparacao />
      <Stack />
      <Planos />
      <Garantia />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  )
}
