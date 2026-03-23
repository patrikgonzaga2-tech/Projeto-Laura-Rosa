'use client'

const imgs = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-7-GkyR4FRazkbfKWnmvfI9BQb7dc0YE3.jpg', alt: 'Depoimento — antes e depois barriga' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg', alt: 'Depoimento — calça que voltou a servir' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg', alt: 'Depoimento Fernanda Moreira' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg', alt: 'Depoimento Sabrina e Keila' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg', alt: 'Depoimento Vitória Barros -7kg' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-11-Kz1FIVnL3Smro58Nqp7nG1IIccWweF.png', alt: 'Depoimento Gabriela Silva' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-15-aGawae8BNBorC6HhWzj1c9Hs739Ap5.jpg', alt: 'Depoimento Monalisa MUSA' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg', alt: 'Depoimento Daisy Nunes — shorts 36' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-2-k3QVOnjOueigUf3fl8PrCSVbb5y7e8.jpg', alt: 'Depoimento Cibele Almeida — balança' },
]

function TImg({ src, alt, dark }: { src: string; alt: string; dark?: boolean }) {
  return (
    <div
      className="reveal relative overflow-hidden break-inside-avoid mb-3.5 block transition-all duration-300 hover:-translate-y-1 rounded-[22px]"
      style={{
        boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.1)',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
    </div>
  )
}

function GreenBtn({ label }: { label: string }) {
  return (
    <div className="reveal text-center mt-12">
      <a
        href="#planos"
        className="inline-flex items-center gap-3 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16,
          padding: '17px 36px',
          background: 'var(--g)',
          boxShadow: '0 8px 40px rgba(28,135,60,0.35)',
        }}
      >
        {label}
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
      </a>
    </div>
  )
}

export function SocialProof1() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 20%,rgba(245,113,0,0.06) 0%,transparent 70%)' }} />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-end gap-6 mb-14 sm:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--g)' }}>
              ✦ Resultados reais
            </span>
            <h2 className="mt-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Mulheres que pararam<br />de lutar contra<br /><span style={{ color: 'var(--o)' }}>o próprio corpo.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-right max-w-xs sm:max-w-[320px] leading-relaxed" style={{ color: 'var(--sub)' }}>
            Mais de 1.000 transformações. Histórias de mulheres com SOP, efeito sanfona, menopausa e rotinas impossíveis — que encontraram um método feito para o corpo delas.
          </p>
        </div>
        <div className="sm:[column-count:2] lg:[column-count:3]" style={{ columnGap: 14 }}>
          {imgs.slice(0, 6).map((img, i) => <TImg key={i} src={img.src} alt={img.alt} />)}
        </div>
        <GreenBtn label="Quero esses resultados" />
      </div>
    </section>
  )
}

export function SocialProof2() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: 'var(--gd)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 80%,rgba(245,113,0,0.08) 0%,transparent 70%)' }} />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--o)' }}>
            ✦ A comunidade em tempo real
          </span>
          <h2 className="mt-4 text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            O que acontece<br />dentro do grupo<br /><span style={{ color: 'var(--o)' }}>todo dia.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[480px] leading-relaxed" style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>
            Não é marketing. É o WhatsApp das Musas — ao vivo, todos os dias.
          </p>
        </div>
        <div className="sm:[column-count:2] lg:[column-count:3]" style={{ columnGap: 14 }}>
          {imgs.slice(3).map((img, i) => <TImg key={i} src={img.src} alt={img.alt} dark />)}
        </div>
        <GreenBtn label="Quero fazer parte da Comunidade" />
      </div>
    </section>
  )
}
