'use client'

type Img = { src: string; alt: string }

const imgs1: Img[] = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9785.PNG-gJlQ42DOBgVADaFIPk0ffy9Ava356o.jpeg', alt: 'Camila Custódio MUSA — saia que ficou larga' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg', alt: 'Calça que voltou a servir' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg', alt: 'Fernanda Moreira' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg', alt: 'Sabrina e Keila' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg',  alt: 'Vitória Barros -7kg' },
]

const imgs2: Img[] = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-11-Kz1FIVnL3Smro58Nqp7nG1IIccWweF.png', alt: 'Gabriela Silva' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-15-aGawae8BNBorC6HhWzj1c9Hs739Ap5.jpg', alt: 'Monalisa MUSA' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg', alt: 'Daisy Nunes' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-2-k3QVOnjOueigUf3fl8PrCSVbb5y7e8.jpg',  alt: 'Cibele Almeida' },
]

function MasonryGallery({ imgs, dark }: { imgs: Img[]; dark?: boolean }) {
  return (
    <div
      style={{ columnGap: 10 }}
      className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
    >
      {imgs.map((img, i) => (
        <div
          key={i}
          className="reveal break-inside-avoid mb-2.5 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.35)' : '0 4px 20px rgba(0,0,0,0.12)',
            border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading={i < 2 ? 'eager' : 'lazy'}
            decoding={i < 2 ? 'sync' : 'async'}
            className="block w-full h-auto"
          />
        </div>
      ))}
    </div>
  )
}

function CtaBtn({ label, green }: { label: string; green?: boolean }) {
  return (
    <div className="reveal text-center mt-12">
      <a
        href="#planos"
        className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16,
          padding: '17px 36px',
          background: green ? 'var(--g)' : 'var(--o)',
          color: green ? '#fff' : '#000',
          boxShadow: green ? '0 8px 40px rgba(28,135,60,0.35)' : '0 8px 40px rgba(245,113,0,0.35)',
        }}
      >
        {label}
        <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-sm flex-shrink-0">›</span>
      </a>
    </div>
  )
}

export function SocialProof1() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--pale)' }}
      aria-label="Resultados reais das Musas"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 20%,rgba(245,113,0,0.06) 0%,transparent 70%)' }}
      />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-end gap-6 mb-14 sm:mb-16">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
              style={{ background: 'var(--g)' }}
            >
              Resultados reais
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
              Mulheres que pararam<br />de lutar contra<br />
              <span style={{ color: 'var(--o)' }}>o próprio corpo.</span>
            </h2>
          </div>
          <p
            className="text-sm sm:text-right max-w-xs sm:max-w-[320px] leading-relaxed"
            style={{ color: 'var(--sub)' }}
          >
            Mais de 1.000 transformações. Histórias de mulheres com SOP, efeito sanfona, menopausa e rotinas impossíveis.
          </p>
        </div>

        <MasonryGallery imgs={imgs1} />
        <CtaBtn label="Quero esses resultados" />
      </div>
    </section>
  )
}

export function SocialProof2() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--gd)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 80%,rgba(245,113,0,0.08) 0%,transparent 70%)' }}
      />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal text-center mb-14 sm:mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
            style={{ background: 'var(--o)' }}
          >
            A comunidade em tempo real
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
            O que acontece<br />dentro do grupo<br />
            <span style={{ color: 'var(--o)' }}>todo dia.</span>
          </h2>
          <p
            className="mt-4 mx-auto max-w-[480px] leading-relaxed"
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}
          >
            Não é marketing. É o WhatsApp das Musas — ao vivo, todos os dias.
          </p>
        </div>

        <MasonryGallery imgs={imgs2} dark />
        <CtaBtn label="Quero fazer parte da Comunidade" green />
      </div>
    </section>
  )
}
