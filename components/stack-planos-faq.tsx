'use client'

import { useState } from 'react'

const stackCats = [
  {
    title: 'Treinos e trilhas',
    rows: [
      { nome: 'Avaliação Física de entrada', val: 'R$97' },
      { nome: 'Trilha Completa Iniciante ao Avançado', val: 'R$297' },
      { nome: 'Treinos por fase do ciclo + atualizações mensais', val: 'R$197/mês' },
      { nome: 'Treinos Mega Curtos 3 e 5min', val: 'R$47' },
      { nome: 'Fichas Academia · Metabólicos · Viagem · Localizados', val: 'R$338' },
      { nome: 'Relaxamento + Mobilidade + Ioga + Lombar', val: 'R$97' },
    ],
  },
  {
    title: 'Desafios + Nutrição',
    rows: [
      { nome: 'Lipo 21D + Módulo LPF Completo', val: 'R$344' },
      { nome: 'Seca em 21 + Desafio 7x + 30x + Detox', val: 'R$338' },
      { nome: 'Calculadora + Plano + Receitas', val: 'R$191' },
    ],
  },
  {
    title: 'E-books + Conteúdo + Comunidade',
    rows: [
      { nome: '4 E-books + Encontros ao Vivo gravados', val: 'R$385' },
      { nome: 'Suporte com a Profe Laüra Rosa todo dia + Comunidade das Musas', val: 'Incalculável' },
      { nome: 'A Laüra no WhatsApp todos os dias', val: 'Incalculável' },
    ],
  },
]

const planos = [
  {
    nome: 'Plano Anual',
    de: 'de R$958,80',
    preco: 'R$39,92',
    precoLabel: '12x de ',
    per: 'ou R$479 à vista',
    avista: 'Acesso por 12 meses',
    dest: true,
    badge: '✦ Melhor custo-benefício',
    cta: 'Garantir agora ›',
    href: 'https://payfast.greenn.com.br/78187/offer/9nk4U0',
  },
  {
    nome: 'Plano Trimestral',
    de: 'de R$291',
    preco: 'R$65,67',
    precoLabel: '3x de ',
    per: 'ou R$197 à vista',
    avista: 'Acesso por 3 meses',
    cta: 'Garantir agora ›',
    href: 'https://payfast.greenn.com.br/148339/offer/krf3mz',
  },
  {
    nome: 'Plano Mensal',
    de: '',
    preco: 'R$97',
    precoLabel: '',
    per: 'por mês',
    avista: 'Para conhecer antes\nde se comprometer',
    cta: 'Começar agora ›',
    href: 'https://payfast.greenn.com.br/148344/offer/o5sqIu',
  },
]

const faqs = [
  {
    q: 'Não tenho tempo para treinar. Como vou conseguir manter?',
    a: 'Os treinos têm entre 15 e 30 minutos. E nos dias em que nem isso é possível, existem os Treinos Mega Curtos de 3 e 5 minutos. Às 4h da manhã já tem Musa treinando. Se você tem 3 minutos, você tem o que precisa para não parar.',
  },
  {
    q: 'Já tentei vários programas e nada funcionou. Por que seria diferente?',
    a: 'Porque nenhum dos programas anteriores foi criado para o corpo feminino de verdade. Os Treinos Hormonais trabalham com o ciclo, equilibram o cortisol e reativam o metabolismo. Não é mais uma tentativa. É a primeira vez do jeito certo.',
  },
  {
    q: 'Funciona para quem tem SOP ou está na menopausa?',
    a: 'Foi criado exatamente para isso. O método nasceu da experiência de quem tem SOP. Há centenas de mulheres com SOP, resistência insulínica e em fase de menopausa com resultados consistentes. Porque trata a causa, não o sintoma.',
  },
  {
    q: 'Consigo treinar em casa com filho pequeno?',
    a: 'Sim. Em casa, sem equipamentos, em 15 a 30 minutos. Durante a soneca, depois que os filhos dormem, antes de todo mundo acordar. E ainda tem o E-book Mamãe Ativa para a jornada específica de mãe.',
  },
  {
    q: 'Vou engordar tudo de volta quando parar?',
    a: 'O efeito sanfona acontece quando o corpo sai de uma dieta restritiva. Os Treinos Hormonais não funcionam por restrição — funcionam reequilibrando o metabolismo. Quando o metabolismo está reequilibrado, o resultado se sustenta.',
  },
  {
    q: 'Minha ansiedade atrapalha o emagrecimento. O Corpo Feliz trata isso?',
    a: 'Sim. O E-book de Inteligência Emocional, os Encontros ao Vivo e os próprios Treinos Hormonais — que regulam o cortisol — existem para tratar o emagrecimento de forma completa. Não só o físico.',
  },
  {
    q: 'Como funciona o acompanhamento no WhatsApp?',
    a: 'É um grupo exclusivo para as Musas com a Laüra presente todos os dias — inclusive fim de semana. Não é suporte de equipe. É acompanhamento diário real com a criadora do método.',
  },
  {
    q: 'Tenho acesso a tudo assim que entrar?',
    a: 'Sim. Assim que o pagamento é confirmado, o acesso à plataforma é imediato — todas as trilhas, desafios, planos alimentares, e-books, módulo LPF, encontros gravados e o grupo de WhatsApp com a Laüra.',
  },
]

export function Stack() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: 'var(--gd)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--o)' }}>
              ✦ Tudo incluso
            </span>
            <h2
              className="reveal reveal-d1 mt-4 text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Tudo que está<br />
              incluso na<br />
              Comunidade.
            </h2>
            <p className="reveal reveal-d2 mt-4" style={{ fontSize: 17, color: 'rgba(255,255,255,0.88)', lineHeight: 1.8 }}>
              Um ecossistema completo — treinos, desafios, nutrição, e-books, encontros ao vivo, comunidade e acompanhamento diário.
            </p>
            <div
              className="reveal reveal-d3 mt-9 rounded-3xl p-8 sm:p-9"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', marginBottom: 4 }}>Valor total: R$3.000+</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, color: 'var(--o)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 4 }}>
                R$39,92<span style={{ fontSize: 20, color: 'rgba(245,113,0,0.6)' }}>/mês</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>no plano anual · acesso imediato</div>
              <div className="mt-6">
                <a
                  href="https://payfast.greenn.com.br/78187/offer/9nk4U0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 16, padding: '17px 36px', background: 'var(--o)', color: '#000', boxShadow: '0 8px 40px rgba(245,113,0,0.35)' }}
                >
                  Garantir meu acesso
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
                </a>
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2 flex flex-col gap-7">
            {stackCats.map((cat, i) => (
              <div key={i}>
                <div
                  className="flex items-center gap-2.5 mb-2.5"
                  style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--o)' }}
                >
                  {cat.title}
                  <span className="flex-1 h-px" style={{ background: 'rgba(245,113,0,0.2)' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  {cat.rows.map((row, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center gap-3 px-4 py-2.5 rounded-xl transition-colors duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <span className="flex gap-2 items-start text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <span style={{ color: 'var(--o)', fontSize: 9, flexShrink: 0, marginTop: 3 }}>✦</span>
                        {row.nome}
                      </span>
                      <span className="text-xs font-bold flex-shrink-0 opacity-70 line-through" style={{ color: 'var(--g)' }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Planos() {
  return (
    <section id="planos" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: 'var(--ink)' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(100px,18vw,260px)',
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.03)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.04em',
        }}
      >
        PLANOS
      </div>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="reveal text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
            ✦ Investimento
          </span>
          <h2
            className="mt-4 text-white"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            Escolha o seu plano.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-center">
          {planos.map((p, i) => (
            <div
              key={i}
              className={`reveal ${i > 0 ? `reveal-d${i}` : ''} relative pt-5`}
            >
              {p.badge && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap z-10 px-4 py-1.5"
                  style={{ background: 'var(--g)' }}
                >
                  {p.badge}
                </div>
              )}
              <div
                className="rounded-3xl p-6 sm:p-7 flex flex-col gap-1 h-full transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: p.dest ? 'var(--o)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${p.dest ? 'var(--o)' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: p.dest ? '0 12px 48px rgba(245,113,0,0.3)' : 'none',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.dest ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                  {p.nome}
                </div>
                {p.de && (
                  <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>{p.de}</div>
                )}
                <div
                  className="text-white leading-none tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  {p.precoLabel && <span style={{ fontSize: 14, fontWeight: 500 }}>{p.precoLabel}</span>}
                  {p.preco}
                </div>
                <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{p.per}</div>
                <div style={{ fontSize: 12, color: p.dest ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)', marginBottom: 20, whiteSpace: 'pre-line' }}>
                  {p.avista}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-full font-bold text-sm text-white py-3.5 px-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: p.dest ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.12)' }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center items-center gap-2.5 mt-7" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          <span>Acesso imediato</span>
          {['Cartão', 'PIX', 'Boleto'].map(b => (
            <span key={b} className="rounded-full px-3 py-1 text-xs font-bold tracking-wider" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Garantia() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[760px] mx-auto px-5 sm:px-8">
        <div className="reveal text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--g)' }}>
            ✦ Sem risco
          </span>
          <h2
            className="mt-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            30 dias de<br />
            <span style={{ color: 'var(--gd)' }}>garantia total.</span>
          </h2>
        </div>
        <div className="reveal reveal-d1 flex flex-col sm:flex-row gap-12 sm:gap-16 items-center sm:items-start text-center sm:text-left">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div
              className="w-44 h-44 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg,#1C873C,#004811)',
                boxShadow: '0 12px 48px rgba(28,135,60,0.3)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>30</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>dias</div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 800, color: 'var(--gd)', marginBottom: 14 }}>
              Sem perguntas. Sem burocracia.
            </div>
            <p style={{ fontSize: 16, color: 'var(--sub)', lineHeight: 1.82, marginBottom: 20 }}>
              Ao entrar na Comunidade, há 30 dias para testar tudo. Fazer os treinos. Participar do grupo. Sentir na prática o que é treinar com o próprio ciclo pela primeira vez.<br /><br />
              Se por qualquer motivo não for o que esperava — é só mandar uma mensagem. O valor investido volta inteiro.<br /><br />
              São 30 dias — não 7 como a maioria — porque em 30 dias de Treinos Hormonais já dá para sentir a diferença.
            </p>
            <div className="italic font-bold pt-4" style={{ fontSize: 15, color: 'var(--gd)', borderTop: '2px dashed rgba(28,135,60,0.2)' }}>
              O risco é nosso. A transformação é sua. — Laüra Rosa
            </div>
          </div>
        </div>
        <div className="reveal text-center mt-12">
          <a
            href="https://payfast.greenn.com.br/78187/offer/9nk4U0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,1.5vw,18px)', padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)', background: 'var(--gd)', color: 'white', boxShadow: '0 8px 32px rgba(0,72,17,0.3)' }}
          >
            Garantir meu acesso agora
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [openIdx, setOpenIdx] = useState(-1)

  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--ink)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ background: 'var(--o)' }}>
              ✦ Dúvidas
            </span>
            <h2
              className="reveal reveal-d1 mt-4 text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Perguntas<br />
              <span style={{ color: 'var(--o)' }}>frequentes.</span>
            </h2>
            <p className="reveal reveal-d2 mt-5" style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              Cada pergunta aqui é uma objeção real que aparece antes da decisão de entrar. Respondidas com honestidade.
            </p>
            <div
              className="reveal reveal-d3 mt-8 p-7 rounded-[18px]"
              style={{ background: 'rgba(245,113,0,0.08)', border: '1px solid rgba(245,113,0,0.2)' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                Se depois de ler tudo ainda tiver dúvida — <strong style={{ color: 'var(--o)' }}>a garantia de 30 dias existe exatamente para isso.</strong> O risco é nosso.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i
              return (
                <div
                  key={i}
                  className="rounded-[18px] overflow-hidden transition-all duration-300"
                  style={{
                    border: isOpen ? '1px solid rgba(245,113,0,0.25)' : '1px solid rgba(255,255,255,0.07)',
                    background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>{faq.q}</span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base transition-all duration-300"
                      style={{
                        background: isOpen ? 'rgba(245,113,0,0.2)' : 'rgba(255,255,255,0.06)',
                        color: isOpen ? 'var(--o)' : 'rgba(255,255,255,0.4)',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <div
                      className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 text-sm leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaFinal() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 relative overflow-hidden text-center" style={{ background: 'var(--o)' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(120px,20vw,300px)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.07)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.06em',
        }}
      >
        BORA
      </div>
      <div className="relative z-10 max-w-[1080px] mx-auto px-5 sm:px-8">
        <span className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6" style={{ background: 'var(--pale)', color: 'var(--ink)' }}>
          ✦ Hora de decidir
        </span>
        <h2
          className="reveal reveal-d1 text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px,7vw,88px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: 28,
          }}
        >
          Não pensa.<br />Só vai.
        </h2>
        <p
          className="reveal reveal-d2 mx-auto mb-12"
          style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 520 }}
        >
          Duas opções a partir de agora. Continuar frustada e sem ânimo ou entrar para a Comunidade e começar a emagrecer do jeito que o corpo feminino foi feito para treinar.{' '}
          <br /><br />
          VAMOS JUNTAS?
        </p>
        <div className="reveal reveal-d3 flex flex-wrap gap-3.5 justify-center mb-7">
          <a
            href="#planos"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,1.5vw,18px)', padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)', background: 'var(--gd)', color: 'white', boxShadow: '0 8px 32px rgba(0,72,17,0.3)' }}
          >
            Quero entrar para as Musas
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
        <div className="reveal reveal-d4" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>
          Acesso imediato · Garantia de 30 dias · Sem perguntas
        </div>
        <div
          className="reveal max-w-[680px] mx-auto mt-16 p-6 sm:p-8 text-left"
          style={{ background: 'rgba(0,0,0,0.12)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 28 }}
        >
          <div className="mb-3 text-xs font-bold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>P.S.</div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Se chegou até aqui sem assistir ao vídeo — volta e assiste. A Laura conta tudo sobre o método, a própria história com SOP, e por que mais de 1.000 mulheres escolheram o Corpo Feliz.<br /><br />
            Daqui 30 dias você pode estar se sentindo ainda mais frustrada ou pode estar colhendo seu primeiro resultado expressivo da vida com os Treinos Hormonais. Entendendo o próprio corpo, sentindo o que é emagrecer a seu favor e com leveza. Com risco zero e ainda garantia de resultados. Estou te esperando de braços abertos dentro da Comunidade Corpo Feliz.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 text-center" style={{ background: 'var(--gd)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 flex flex-col items-center gap-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20165%20%282%29-RoDBA8TV1oNG9u024AV9Gt19c7dub6.png"
          alt="Comunidade Corpo Feliz"
          className="h-10 w-auto object-contain opacity-60"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>
          © Corpo Feliz · Laura Rosa · Todos os direitos reservados<br />
          Os resultados podem variar de pessoa para pessoa. Exercício e alimentação adequada são necessários para a perda de peso. Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </p>
      </div>
    </footer>
  )
}
