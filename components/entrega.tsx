'use client'

import { useState } from 'react'

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
