'use client'

import { useState } from 'react'

const beneficios = [
  { num: '01', txt: 'Emagreça até 5kg nos primeiros 30 dias - sem dieta restritiva, sem passar fome' },
  { num: '02', txt: 'Barriga mais seca e braços mais finos — as áreas que mais incomodam e que treinos genéricos ignoram' },
  { num: '03', txt: 'Mais energia, sono melhor, menos ansiedade — porque cortisol regulado muda tudo' },
  { num: '04', txt: 'Fim do ciclo do efeito sanfona — tratando a causa, não o sintoma' },
  { num: '05', txt: 'Treinos em 15–30min em casa — e Mega Curtos de 3min para os dias impossíveis' },
  { num: '06', txt: 'Uma relação diferente com o próprio corpo — sem culpa, sem luta' },
]

const accData = [
  {
    nome: 'Treinos',
    sub: 'Trilhas · Ciclo · Casa · Academia · Mega Curtos · Viagem · Localizados',
    colorClass: 'o',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M6.5 6.5h11" /><path d="M6.5 17.5h11" /><line x1="6.5" y1="6.5" x2="6.5" y2="17.5" /><line x1="17.5" y1="6.5" x2="17.5" y2="17.5" /><rect x="3" y="5" width="3.5" height="14" rx="1.5" /><rect x="17.5" y="5" width="3.5" height="14" rx="1.5" />
      </svg>
    ),
    items: [
      'Avaliação Física de entrada — seu caminho personalizado, não o de todo mundo',
      'Trilha Completa: Treino em casa e academia com atualizações mensais',
      'Treino Hormonais organizados por fase do ciclo: Iniciante I, Iniciante II, Intermediário e Avançada',
      'Treinos Mega Curtos de 3 e 5 minutos — para os dias impossíveis',
      'Fichas para Academia: já disponível da Fase 1 até a 8 e novas Fases atualizadas a cada 8 semanas',
      'Treinos Metabólicos para Academia',
      'Treinos para Viagem — hotel, parque, praia',
      'Treinos Localizados: Coxas, Superiores, Cardio, Glúteo, Corpo Todo, Core, Cardios ao Ar Livre',
    ],
  },
  {
    nome: 'Relaxamento e Atenção Plena',
    sub: 'Mobilidade · Alongamento · Ioga · Lombar',
    colorClass: 'g',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M12 22s-6-4.5-6-10a6 6 0 0 1 12 0c0 5.5-6 10-6 10z" /><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" stroke="none" /><path d="M6 12c-2-1-4-3-4-6a4 4 0 0 1 6.5-3.1" /><path d="M18 12c2-1 4-3 4-6a4 4 0 0 0-6.5-3.1" />
      </svg>
    ),
    items: [
      'Aulas de Relaxamento',
      'Treinos de Mobilidade',
      'Aulas de Alongamento',
      'Fortalecimento Lombar',
      'Aula de Ioga',
      'Aulas bônus de Flux, Jump e Mobilidade com professores convidados',
    ],
  },
  {
    nome: 'Desafios',
    sub: 'Lipo 21D · LPF · 7x · 30x · Semana Detox · Projetos sazonais',
    colorClass: 'o',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    items: [
      'Desafio Lipo 21D — 21 treinos hormonais + 8 aulas de LPF (vácuo abdominal)',
      'Módulo LPF Completo — 21 aulas práticas, do básico ao avançado',
      'Você Seca em 21 — treinos hormonais + LPF integrados',
      'Desafio 7x — 7 treinos com plano alimentar integrado',
      'Desafio 30x — 30 dias com orientação alimentar',
      'Semana Detox — 7 dias para desinchar, regular e reiniciar',
      'Projetos sazonais: Musa do Carnaval e outros',
    ],
  },
  {
    nome: 'Nutrição',
    sub: 'Sem restrição. Comer não é punição.',
    colorClass: 'g',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M8 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4" fill="none" /><line x1="12" y1="8" x2="12" y2="17" />
      </svg>
    ),
    items: [
      'Cálculo de calorias personalizada para o seu objetivo',
      'Plano alimentar baseado nas suas calorias para cada fase do seu emagrecimento',
      'Receitas Saudáveis — práticas para a rotina real',
    ],
  },
  {
    nome: 'Guias e Encontros ao Vivo',
    sub: 'Inteligência Emocional · Receitas · Mamãe Ativa · Entenda seu Corpo',
    colorClass: 'o',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    items: [
      'Cardápio de Receitas Saudáveis e Gostosas',
      'Guia de Inteligência Emocional: compulsão, ansiedade, relação com comida têm solução',
      'Jornada dos 21 Dias de Abundância — mentalidade e hábitos',
      'Manual da Gestação Ativa / Mamãe Ativa',
      'Encontros ao Vivo gravados: Entenda seu Corpo, Saúde da Mulher, Quarentena Desafio e mais',
    ],
  },
]

const tableRows = [
  { feature: 'Treinos para o corpo feminino', cf: true, academia: false, apps: false, personal: 'dep', gratis: false },
  { feature: 'Respeita o ciclo hormonal', cf: true, academia: false, apps: false, personal: false, gratis: false },
  { feature: 'Avaliação física de entrada', cf: true, academia: false, apps: false, personal: true, gratis: false },
  { feature: 'Acompanhamento diário real', cf: true, academia: false, apps: false, personal: true, gratis: false },
  { feature: 'Treinos de 3 e 5 minutos', cf: true, academia: false, apps: false, personal: false, gratis: false },
  { feature: 'Nutrição + plano alimentar', cf: true, academia: false, apps: false, personal: 'sep', gratis: false },
  { feature: 'Saúde mental integrada', cf: true, academia: false, apps: false, personal: false, gratis: false },
  { feature: 'Comunidade ativa', cf: true, academia: false, apps: false, personal: false, gratis: false },
]

function Sym({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-lg font-bold" style={{ color: 'var(--g)' }}>✓</span>
  if (val === false) return <span className="text-lg" style={{ color: '#ddd' }}>✕</span>
  return <span className="text-xs font-bold" style={{ color: 'var(--o)' }}>{val === 'dep' ? 'Depende' : 'Separado'}</span>
}

export function Beneficios() {
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4', '']
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--o)' }}>
              ✦ Transformação
            </span>
            <h2
              className="reveal reveal-d1 mt-4 mb-7"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4.5vw,56px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              O que muda quando<br />
              o treino finalmente<br />
              <span style={{ color: 'var(--gd)' }}>é o certo.</span>
            </h2>
            <div className="reveal reveal-d2" style={{ fontSize: 17, color: 'var(--sub)', lineHeight: 1.85 }}>
              <p>Na primeira semana, a diferença no corpo aparece antes mesmo de ser vista, você se sente com mais energia, menos inchaço. A vontade de doce começa a diminuir.</p>
              <p className="mt-4">Em 30 dias a mudança no corpo se torna totalmente visível. A barriga diminui, os braços afinam, a celulites somem e a balança se torna sua amiga - mas o que despenca primeiro, não é peso, são roupas servindo e ficando largas.</p>
              <p className="mt-4">Com o tempo, algo mais profundo muda. O treino deixa de ser punição e vira cuidado. A culpa vai embora. O ciclo vira aliado.</p>
            </div>
            <div className="reveal mt-8">
              <a
                href="#planos"
                className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{ fontFamily: 'var(--font-display)', fontSize: 16, padding: '17px 36px', background: 'var(--gd)', color: 'white', boxShadow: '0 8px 32px rgba(0,72,17,0.3)' }}
              >
                Quero essa transformação
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className={`reveal ${delays[i]} flex gap-4 items-start py-4 transition-transform duration-300 hover:translate-x-1.5`}
                style={{ borderBottom: i < beneficios.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, color: 'var(--o)', letterSpacing: '0.06em', minWidth: 32, marginTop: 2 }}>{b.num}</span>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink)', fontWeight: 500 }}>{b.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Entrega() {
  const [openIdx, setOpenIdx] = useState(0)
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4']

  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--ink)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-end mb-12 sm:mb-14">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--o)' }}>
              ✦ O que está dentro
            </span>
            <h2
              className="mt-4 text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Tudo dentro da<br />
              Comunidade<br />
              <span style={{ color: 'var(--o)' }}>Corpo Feliz.</span>
            </h2>
            <p className="mt-4 max-w-[380px]" style={{ fontSize: 19, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
              Um ecossistema completo de saúde feminina. Não apenas treinos.
            </p>
          </div>
          <div
            className="reveal reveal-d2 hidden sm:block select-none leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px,10vw,120px)',
              fontWeight: 800,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(245,113,0,0.3)',
              letterSpacing: '-0.05em',
              textAlign: 'right',
            }}
          >
            ECO<br />SIS<br />TEMA
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {accData.map((acc, i) => {
            const isOpen = openIdx === i
            const isO = acc.colorClass === 'o'
            return (
              <div
                key={i}
                className={`reveal ${delays[i]} rounded-[18px] overflow-hidden transition-all duration-300`}
                style={{
                  background: isOpen ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                  border: isOpen
                    ? '1px solid rgba(245,113,0,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 sm:p-6 cursor-pointer text-left"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 p-2.5 transition-colors duration-300"
                    style={{
                      background: isOpen
                        ? isO ? 'var(--o)' : 'var(--g)'
                        : isO ? 'rgba(245,113,0,0.15)' : 'rgba(28,135,60,0.15)',
                      color: isOpen ? '#fff' : isO ? 'var(--o)' : 'var(--g)',
                    }}
                  >
                    {acc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{acc.nome}</div>
                    <div className="truncate" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{acc.sub}</div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(245,113,0,0.2)' : 'rgba(255,255,255,0.07)',
                      color: isOpen ? 'var(--o)' : 'rgba(255,255,255,0.4)',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    ▼
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? 600 : 0 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pl-16 sm:pl-20 flex flex-col gap-2.5">
                    {acc.items.map((item, j) => (
                      <div key={j} className="flex gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>
                        <span style={{ color: 'var(--o)', fontSize: 9, flexShrink: 0, marginTop: 4 }}>✦</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href="#planos"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,1.5vw,18px)', padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)', background: 'var(--o)', color: '#000', boxShadow: '0 8px 40px rgba(245,113,0,0.35)' }}
          >
            Quero acesso a tudo isso
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

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

const competitors = ['Corpo Feliz', 'Academia', 'Outros Apps', 'Personal', 'Grátis']

export function Comparacao() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="reveal text-center mb-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--g)' }}>
            ✦ Comparação
          </span>
        </div>
        <h2
          className="reveal reveal-d1 text-center mt-4 mb-12 sm:mb-14"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
        >
          Por que a Corpo Feliz entrega<br />
          o que outros <span style={{ color: 'var(--o)' }}>não conseguem.</span>
        </h2>

        {/* Tabela — scroll horizontal em mobile, normal no desktop */}
        <div className="reveal overflow-x-auto rounded-3xl" style={{ boxShadow: '0 4px 48px rgba(0,0,0,0.08)' }}>
          <table className="w-full min-w-[640px] border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 text-left text-xs font-bold tracking-widest uppercase border-b-2" style={{ borderColor: '#f0f0f0', color: 'var(--mute)' }}>Recurso</th>
                <th className="p-4 text-center text-sm font-black" style={{ background: 'var(--gd)', color: '#fff' }}>
                  Corpo Feliz<br /><small className="text-[10px] font-normal tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>Comunidade</small>
                </th>
                {['Academia', 'Outros Apps', 'Personal', 'Conteúdo gratuito'].map(h => (
                  <th key={h} className="p-4 text-center text-xs font-bold tracking-wider uppercase border-b-2" style={{ borderColor: '#f0f0f0', color: 'var(--mute)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3.5 text-left text-sm font-semibold border-b" style={{ borderColor: '#f5f5f5', color: 'var(--ink)' }}>{row.feature}</td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5', background: 'rgba(0,72,17,0.04)' }}><Sym val={row.cf} /></td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}><Sym val={row.academia} /></td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}><Sym val={row.apps} /></td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}><Sym val={row.personal} /></td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}><Sym val={row.gratis} /></td>
                </tr>
              ))}
              <tr className="hover:bg-gray-50">
                <td className="p-3.5 text-left text-sm font-semibold" style={{ color: 'var(--ink)' }}>Investimento mensal</td>
                <td className="p-3.5 text-center font-black text-lg" style={{ background: 'rgba(0,72,17,0.04)', color: 'var(--gd)' }}>$</td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>$$</td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>$</td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>$$$</td>
                <td className="p-3.5 text-center text-sm font-bold" style={{ color: 'var(--g)' }}>Grátis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
