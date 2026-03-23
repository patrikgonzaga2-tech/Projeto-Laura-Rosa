'use client'

// Layout: bento flex rows — images fill 100% width per row, maintaining aspect ratio via object-fit cover
// Each row has a fixed height; flex-grow distributes width proportionally (like the reference image grid)

const imgs1 = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-7-GkyR4FRazkbfKWnmvfI9BQb7dc0YE3.jpg',
    alt: 'Antes e depois barriga',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg',
    alt: 'Calça que voltou a servir',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg',
    alt: 'Fernanda Moreira',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg',
    alt: 'Sabrina e Keila',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg',
    alt: 'Vitória Barros -7kg',
    // portrait ~9:16
    ratio: 0.5625,
  },
]

const imgs2 = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-11-Kz1FIVnL3Smro58Nqp7nG1IIccWweF.png',
    alt: 'Gabriela Silva',
    // landscape ~16:9
    ratio: 1.778,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-15-aGawae8BNBorC6HhWzj1c9Hs739Ap5.jpg',
    alt: 'Monalisa MUSA',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg',
    alt: 'Daisy Nunes — shorts 36',
    // portrait ~9:16
    ratio: 0.5625,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-2-k3QVOnjOueigUf3fl8PrCSVbb5y7e8.jpg',
    alt: 'Cibele Almeida — balança',
    // portrait ~9:16
    ratio: 0.5625,
  },
]

// Rows: each sub-array groups images that share a row
// flex-grow is set to the aspect ratio so images fill the row width proportionally
const rows1 = [
  [imgs1[0], imgs1[1]],
  [imgs1[2], imgs1[3], imgs1[4]],
]

const rows2 = [
  [imgs2[0], imgs2[1]],
  [imgs2[2], imgs2[3]],
]

type Img = { src: string; alt: string; ratio: number }

function BentoGrid({ rows, dark }: { rows: Img[][]; dark?: boolean }) {
  const ROW_H = 280
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-2" style={{ height: ROW_H }}>
          {row.map((img, ii) => (
            <div
              key={ii}
              className="relative overflow-hidden rounded-2xl reveal transition-all duration-300 hover:-translate-y-1"
              style={{
                flex: img.ratio,
                minWidth: 0,
                boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.35)' : '0 4px 20px rgba(0,0,0,0.12)',
                border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function CtaBtn({ label }: { label: string }) {
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
              Mulheres que pararam<br />de lutar contra<br />
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
        <CtaBtn label="Quero fazer parte da Comunidade" />
      </div>
    </section>
  )
}
