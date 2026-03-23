'use client'

type Img = { src: string; alt: string; ratio: number }

const imgs1: Img[] = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-7-GkyR4FRazkbfKWnmvfI9BQb7dc0YE3.jpg', alt: 'Antes e depois barriga', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg', alt: 'Calça que voltou a servir', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg', alt: 'Fernanda Moreira', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg', alt: 'Sabrina e Keila', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg', alt: 'Vitória Barros -7kg', ratio: 0.5625 },
]

const imgs2: Img[] = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-11-Kz1FIVnL3Smro58Nqp7nG1IIccWweF.png', alt: 'Gabriela Silva', ratio: 1.778 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-15-aGawae8BNBorC6HhWzj1c9Hs739Ap5.jpg', alt: 'Monalisa MUSA', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg', alt: 'Daisy Nunes', ratio: 0.5625 },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-2-k3QVOnjOueigUf3fl8PrCSVbb5y7e8.jpg', alt: 'Cibele Almeida', ratio: 0.5625 },
]

const rows1: Img[][] = [
  [imgs1[0], imgs1[1], imgs1[2]],
  [imgs1[3], imgs1[4]],
]

const rows2: Img[][] = [
  [imgs2[0], imgs2[1]],
  [imgs2[2], imgs2[3]],
]

function BentoRow({ row, dark }: { row: Img[]; dark?: boolean }) {
  const anchor = row.reduce((a, b) => (a.ratio < b.ratio ? a : b))
  return (
    <div className="flex gap-2" style={{ alignItems: 'stretch' }}>
      {row.map((img, i) => {
        const isAnchor = img === anchor
        return (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl reveal transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: `${img.ratio} 0 0`,
              minWidth: 0,
              boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.35)' : '0 4px 20px rgba(0,0,0,0.12)',
              border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.05)',
            }}
          >
            {isAnchor && (
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className="block w-full h-auto"
                style={{ visibility: 'hidden' }}
                loading="lazy"
              />
            )}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}

function BentoGrid({ rows, dark }: { rows: Img[][]; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, i) => (
        <BentoRow key={i} row={row} dark={dark} />
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
        <BentoGrid rows={rows1} />
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
        <BentoGrid rows={rows2} dark />
        <CtaBtn label="Quero fazer parte da Comunidade" green />
      </div>
    </section>
  )
}
