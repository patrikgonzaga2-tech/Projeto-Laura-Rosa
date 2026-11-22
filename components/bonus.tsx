'use client'

export function Bonus() {
  const bonusCards = [
    {
      title: 'WhatsApp diário com a Laüra',
      desc: 'A criadora do método presente todos os dias — inclusive fim de semana.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: 'Comunidade Exclusiva das Musas',
      desc: '+1.000 mulheres que entendem o que está sendo vivido.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Suporte Individual',
      desc: 'Atendimento humano para dúvidas específicas. Sem robô.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: 'var(--o)' }}>
      <svg className="absolute pointer-events-none" style={{ top: -100, right: -100, width: 400, height: 400, opacity: 0.15 }} viewBox="0 0 400 400">
        <path d="M60,20 C120,-20 220,10 280,60 C340,110 380,180 360,260 C340,340 260,390 180,380 C100,370 20,320 10,240 C0,160 0,60 60,20Z" fill="white" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: -80, left: -80, width: 300, height: 300, opacity: 0.12 }} viewBox="0 0 300 300">
        <path d="M40,10 C90,-15 170,5 210,50 C250,95 270,160 240,210 C210,260 140,280 80,260 C20,240 -10,170 5,110 C20,50 -10,35 40,10Z" fill="#004811" />
      </svg>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
          <div className="reveal">
            <div
              className="inline-flex items-center gap-2 rounded-full text-white mb-5"
              style={{ background: 'rgba(0,0,0,0.15)', padding: '6px 18px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              O principal não é a área de membros
            </div>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px,4.5vw,52px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              A Laüra<br />
              no WhatsApp.<br />
              Todo dia.
            </h2>
            <p className="mb-0" style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: 480 }}>
              Desde as 4h da manhã, quando as primeiras Musas já estão treinando, até o fim do dia — a Laura está no grupo. Não é suporte de equipe. É a criadora do método, todos os dias, para tirar dúvidas, ajustar orientações e estar presente nos dias difíceis.<br /><br />
              <strong className="text-white">Isso daqui é rede de apoio real. É aqui que a história acontece.</strong>
            </p>
          </div>
          <div className="reveal reveal-d1 flex flex-col gap-3.5">
            <div className="rounded-2xl overflow-hidden w-full mb-1">
              <img
                src="/images/laura-whatsapp.svg"
                alt="Laüra Rosa — criadora do Método Corpo Feliz"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width={560}
                height={280}
              />
            </div>
            {bonusCards.map((card, i) => (
              <div
                key={i}
                className="flex gap-3.5 items-start rounded-[18px] p-5 sm:p-6 transition-all duration-300 hover:translate-x-1.5"
                style={{ background: 'rgba(0,0,0,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 p-2.5 text-white" style={{ background: 'rgba(255,255,255,0.18)' }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
