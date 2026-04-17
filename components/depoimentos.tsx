'use client'

import { useRef, useState, useEffect } from 'react'

// Aspect ratios measured from the actual screenshot images (width / height).
// Portrait screenshots (phone screenshots) are ~0.46. Landscape are ~1.3+.
const allImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9785.PNG-gJlQ42DOBgVADaFIPk0ffy9Ava356o.jpeg',
    alt: 'Depoimento Camila Custódio MUSA — saia que ficou larga',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg',
    alt: 'Depoimento — calça que voltou a servir',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg',
    alt: 'Depoimento Fernanda Moreira',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg',
    alt: 'Depoimento Sabrina e Keila',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg',
    alt: 'Depoimento Vitória Barros -7kg',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-11-Kz1FIVnL3Smro58Nqp7nG1IIccWweF.png',
    alt: 'Depoimento Gabriela Silva',
    ratio: 1.33, // landscape chat screenshot
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-15-aGawae8BNBorC6HhWzj1c9Hs739Ap5.jpg',
    alt: 'Depoimento Monalisa MUSA',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg',
    alt: 'Depoimento Daisy Nunes — shorts 36',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-2-k3QVOnjOueigUf3fl8PrCSVbb5y7e8.jpg',
    alt: 'Depoimento Cibele Almeida — balança',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-25%20at%2013.27.41-0dsNsdGl1yhFdi6UiBdu42FJXJaXqn.jpeg',
    alt: 'Depoimento Gabriela Soares MUSA Semestral — 3 meses de transformação',
    ratio: 0.56,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-26%20at%2005.01.43-3hgkUNpCmVoujT62fuBq6gHDD9XilP.jpeg',
    alt: 'Depoimento Keila Brito MUSA — lipedema e melhora das dores menstruais',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-25%20at%2013.38.18-5AXX6VXElIPgvOdXFbVOQu5wZovLyI.jpeg',
    alt: 'Resultado -15kg com Método Corpo Feliz — de 101,9kg para 87,45kg',
    ratio: 0.56,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-25%20at%2015.28.13-xudmIIAI9vT8Sg3rMjJ22aKwRl2uEx.jpeg',
    alt: 'Depoimento Regina Machado MUSA — medidas de Novembro 2025 a Fevereiro 2026',
    ratio: 0.46,
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-25%20at%2013.40.55-Pa1SH6jxFKdKTl18vNO3JuX43dmEeK.jpeg',
    alt: 'Depoimento transformação pós-gravidez com método da Laura',
    ratio: 0.56,
  },
]

type ImageItem = typeof allImages[number]

/**
 * Justified gallery algorithm.
 * Groups images into rows so each row fills `containerWidth` exactly.
 * `targetRowHeight` is the ideal row height before adjustment.
 * Returns an array of rows, each with the computed row height and images with their widths.
 */
function buildRows(
  images: ImageItem[],
  containerWidth: number,
  targetRowHeight: number,
  gap: number,
) {
  const rows: { height: number; items: { img: ImageItem; width: number }[] }[] = []
  let i = 0

  while (i < images.length) {
    // Accumulate images until the row is full
    let rowRatioSum = 0
    let j = i

    while (j < images.length) {
      rowRatioSum += images[j].ratio
      const rowWidthUsed = rowRatioSum * targetRowHeight + gap * (j - i)
      j++
      if (rowWidthUsed >= containerWidth) break
    }

    const rowImages = images.slice(i, j)
    const totalGap = gap * (rowImages.length - 1)
    const totalRatio = rowImages.reduce((s, img) => s + img.ratio, 0)
    // Solve: totalRatio * rowHeight + totalGap = containerWidth
    const rowHeight = (containerWidth - totalGap) / totalRatio

    rows.push({
      height: rowHeight,
      items: rowImages.map((img) => ({
        img,
        width: img.ratio * rowHeight,
      })),
    })

    i = j
  }

  return rows
}

function JustifiedGallery({
  images,
  dark,
  targetRowHeight = 340,
  gap = 8,
}: {
  images: ImageItem[]
  dark?: boolean
  targetRowHeight?: number
  gap?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })
    ro.observe(el)
    setWidth(el.getBoundingClientRect().width)
    return () => ro.disconnect()
  }, [])

  const isMobile = width > 0 && width < 768

  return (
    <div ref={containerRef} className="w-full" style={{ minHeight: width === 0 ? 400 : undefined }}>
      {width === 0 ? null : isMobile ? (
        // Mobile: single column, full width, natural ratio
        <div className="flex flex-col" style={{ gap }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.1)',
                border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        // Desktop/tablet: justified rows
        <div className="flex flex-col" style={{ gap }}>
          {buildRows(images, width, targetRowHeight, gap).map((row, ri) => (
            <div key={ri} className="flex" style={{ gap, height: row.height }}>
              {row.items.map(({ img, width: imgWidth }, ii) => (
                <div
                  key={ii}
                  className="overflow-hidden rounded-2xl flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    width: imgWidth,
                    height: row.height,
                    boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.1)',
                    border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: imgWidth, height: row.height, objectFit: 'contain', background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
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

        <JustifiedGallery images={allImages.slice(0, 6)} targetRowHeight={360} gap={8} />

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
            Quero esses resultados
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SocialProof2() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--gd)' }}
      aria-label="Comunidade em tempo real"
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
            O que acontece<br />
            dentro do grupo<br />
            <span style={{ color: 'var(--o)' }}>todo dia.</span>
          </h2>
          <p
            className="mt-4 mx-auto max-w-[480px] leading-relaxed"
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}
          >
            Não é marketing. É o WhatsApp das Musas — ao vivo, todos os dias.
          </p>
        </div>

        <JustifiedGallery images={allImages.slice(3)} dark targetRowHeight={360} gap={8} />

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
            Quero fazer parte da Comunidade
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
