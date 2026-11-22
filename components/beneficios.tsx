'use client'

const beneficios = [
  { num: '01', txt: 'Emagreça até 5kg nos primeiros 30 dias - sem dieta restritiva, sem passar fome' },
  { num: '02', txt: 'Barriga mais seca e braços mais finos — as áreas que mais incomodam e que treinos genéricos ignoram' },
  { num: '03', txt: 'Mais energia, sono melhor, menos ansiedade — porque cortisol regulado muda tudo' },
  { num: '04', txt: 'Fim do ciclo do efeito sanfona — tratando a causa, não o sintoma' },
  { num: '05', txt: 'Treinos em 15–30min em casa — e Mega Curtos de 3min para os dias impossíveis' },
  { num: '06', txt: 'Uma relação diferente com o próprio corpo — sem culpa, sem luta' },
]

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
