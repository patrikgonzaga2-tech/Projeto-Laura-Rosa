'use client'

const items = [
  {
    freq: 'Toda semana',
    titulo: 'Novos desafios no grupo das Musas',
    desc: 'Curto, direto, com começo e fim. Algo concreto para executar, compartilhar e celebrar com quem está no mesmo caminho.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    freq: 'Todo dia',
    titulo: 'Acompanhamento da própria Laura',
    desc: 'Às 4h da manhã já tem Musa treinando. E a Profe Laüra já está lá também com você. Não é equipe respondendo no lugar dela - é a profe, todos os dias juntinhas. ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><circle cx="9" cy="11" r=".5" fill="currentColor" stroke="none" /><circle cx="12" cy="11" r=".5" fill="currentColor" stroke="none" /><circle cx="15" cy="11" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    freq: 'Todo mês',
    titulo: 'Treinos novos',
    desc: 'Todo mês você recebe treinos hormonais atualizados com novos estímulos, feitos para seu corpo nunca estagnar nos resultados.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" /><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
      </svg>
    ),
  },
  {
    freq: 'Nos dias impossíveis',
    titulo: 'Treinos Mega Curtos — 3 e 5 minutos',
    desc: 'Porque a rotina real não é perfeita. Quando a agenda vira loucura, quando faltam horas no dia, 3 minutos são suficientes para fazer seu corpo feliz e manter a constância.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    freq: 'Em viagem',
    titulo: 'Treinos que vão junto',
    desc: 'Hotel, parque, praia. A corpo feliz vai pelo mundo junto.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 1 16.5 2.5L13 6 4.8 4.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    freq: 'Todo momento',
    titulo: 'Uma comunidade que cresce junto',
    desc: '+1.000 mulheres reais que vivem o mesmo que você e são uma verdadeira rede de apoio. Estrutura de acolhimento que transformam seus resultados.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export function ComoFunciona() {
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4', '']
  return (
    <section
      className="py-20 sm:py-24 lg:py-28 relative overflow-hidden"
      style={{ background: 'var(--pale)' }}
      aria-label="Como funciona a Comunidade"
    >
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left sticky visual */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            <div
              className="reveal rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
              style={{ background: 'var(--o)' }}
            >
              <div
                className="absolute pointer-events-none"
                style={{ top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(0,72,17,0.2)' }}
              />
              <div className="relative z-10">
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(72px,10vw,100px)',
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.2)',
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    marginBottom: -16,
                  }}
                >
                  6
                </div>
                <div
                  className="text-white"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}
                >
                  formas de estar<br />com você.
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                  Todo dia. Todo mês. Em qualquer rotina. A Comunidade foi feita para a vida real — não para a vida ideal.
                </p>
              </div>
            </div>
            {/* Foto da Laura */}
            <div className="reveal reveal-d1 rounded-3xl overflow-hidden w-full" style={{ aspectRatio: '4/5' }}>
              <img
                src="/images/laura.svg"
                alt="Laüra Rosa, criadora do Método Corpo Feliz"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
                width={480}
                height={600}
              />
            </div>
          </div>

          {/* Right list */}
          <div>
            <span
              className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
              style={{ background: 'var(--ink)' }}
            >
              ✦ Como funciona
            </span>
            <h2
              className="reveal reveal-d1 mt-4 mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4vw,48px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
              }}
            >
              Como é a sua semana<br />dentro da Comunidade.
            </h2>

            <div className="flex flex-col">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`reveal ${delays[i]} flex gap-5 py-7 transition-transform duration-300 hover:translate-x-1.5`}
                  style={{ borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 p-2.5 text-white transition-all duration-300"
                    style={{ background: 'var(--gd)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--o)', marginBottom: 4 }}>
                      {item.freq}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>
                      {item.titulo}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--sub)', lineHeight: 1.7 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
