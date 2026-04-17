'use client'

const fases = [
  {
    num: '01',
    tag: '✦ Fase 1',
    titulo: 'Reset Hormonal',
    desc: 'Antes de qualquer resultado, o corpo precisa de um recomeço. Treinos calibrados para reduzir o cortisol, melhorar o sono e regularizar o ciclo. Sem forçar. Só reorganizar — e preparar o corpo para responder de verdade.',
  },
  {
    num: '02',
    tag: '✦ Fase 2',
    titulo: 'Equilíbrio Metabólico',
    desc: 'Os treinos começam a trabalhar a sensibilidade à insulina — o mecanismo que faz o corpo queimar gordura em vez de estocá-la. Menos vontade de doce, mais energia, menos inchaço.',
  },
  {
    num: '03',
    tag: '✦ Fase 3',
    titulo: 'Queima Sustentável',
    desc: 'O corpo está regulado. O metabolismo está ativo. Agora o emagrecimento acontece — sem luta. A barriga seca, os braços afinam, as roupas servem diferente.',
  },
  {
    num: '04',
    tag: '✦ Fase 4',
    titulo: 'Manutenção e Estilo de Vida',
    desc: 'O maior diferencial dos Treinos Hormonais não é o quanto se perde. É o quanto se mantém. O método vira rotina. O ciclo já é conhecido. Não é força de vontade — é entendimento.',
  },
]

const trilhas = [
  { n: '01', nivel: 'Iniciante I', nome: 'Sem impacto', desc: 'Para quem nunca treinou ou precisa se fortalecer com cuidado' },
  { n: '02', nivel: 'Iniciante II', nome: 'Até 6 meses', desc: 'Para quem treina há menos de 6 meses e quer evoluir com segurança' },
  { n: '03', nivel: 'Intermediária', nome: '6 a 8 meses', desc: 'Para quem treina constantemente e quer intensificar o resultado' },
  { n: '04', nivel: 'Avançada', nome: '+8 meses', desc: 'Para quem treina há mais de 8 meses e quer continuar evoluindo' },
]

export function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28"
      style={{ background: 'var(--ink)' }}
    >
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          className="pb-14 sm:pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end">
            <div>
              <span
                className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase text-white"
                style={{ background: 'var(--o)' }}
              >
                ✦ O método
              </span>
              <h2
                className="reveal reveal-d1 font-display mt-4 text-white"
                style={{
                  fontSize: 'clamp(32px,5vw,60px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                }}
              >
                Treinos Hormonais.<br />
                <span style={{ color: 'var(--o)' }}>Do zero.</span><br />
                Para o corpo<br />
                feminino.
              </h2>
            </div>
            <div>
              <div
                className="reveal reveal-d2"
                style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}
              >
                <p>Treinos convencionais foram desenvolvidos para corpos masculinos. Testados em homens. E vendidos para mulheres como se fossem{' '}
                  <strong style={{ color: 'var(--o)' }}>a mesma coisa.</strong>
                </p>
                <p className="mt-4">Não são. O corpo feminino funciona em ciclos — e a cada fase do mês, hormônios diferentes mudam tudo: energia, força, recuperação, fome e capacidade de queimar gordura.</p>
              </div>
              <div
                className="reveal reveal-d3 mt-8 rounded-[18px] p-6 sm:p-7"
                style={{
                  background: 'rgba(245,113,0,0.08)',
                  border: '1px solid rgba(245,113,0,0.2)',
                }}
              >
                <p
                  className="italic"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.65,
                  }}
                >
                  {"\"Ignorar seus hormônios é ir contra nosso ciclo natural e amadurecimento. Às vezes até consegue um resultado.\nMas é tanto sacrifício e esforço que se torna insustentável.\""}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avaliação */}
        <div
          className="reveal flex flex-col sm:flex-row gap-5 items-center sm:items-start my-10 sm:my-14 rounded-3xl p-6 sm:p-8 relative overflow-hidden text-center sm:text-left"
          style={{ background: 'var(--o)' }}
        >
          <div
            className="absolute right-[-40px] top-[-40px] w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
            style={{ background: 'rgba(255,255,255,0.2)', padding: 14, color: '#fff', position: 'relative', zIndex: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="9" y1="16" x2="13" y2="16" />
            </svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Primeiro passo: Avaliação Física</h4>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: 500 }}>Antes de qualquer treino, a jornada começa com nossa avaliação física e identificação da sua jornada. Histórico, nível atual de condicionamento e objetivos reais. A partir daqui, você recebe todo o direcionamento a seguir e ver seu primeiro resultado expressivo em 30 dias.</p>
          </div>
        </div>

        {/* Fases */}
        <div>
          {fases.map((fase, i) => (
            <div
              key={i}
              className={`reveal grid border-t transition-colors duration-300 hover:bg-white/[0.02] py-12 sm:py-14 ${i === 0 ? 'grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr]' : 'grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr]'}`}
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div
                className="hidden sm:block select-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(80px,10vw,160px)',
                  fontWeight: 800,
                  lineHeight: 0.85,
                  letterSpacing: '-0.06em',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255,255,255,0.12)',
                }}
              >
                {fase.num}
              </div>
              <div className="sm:pl-8 lg:pl-10">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4"
                  style={{
                    border: '1px solid rgba(245,113,0,0.3)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--o)',
                  }}
                >
                  {fase.tag}
                </div>
                <div
                  className="mb-3.5"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(22px,3vw,36px)',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.1,
                  }}
                >
                  {fase.titulo}
                </div>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 520 }}>
                  {fase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trilhas */}
        <div
          className="py-12 sm:py-14 lg:py-16"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="rounded-3xl p-6 sm:p-10 lg:p-12"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="reveal mb-8">
              <span
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Trilha do seu nível
              </span>
              <h3
                className="mt-2 text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px,3vw,32px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Do iniciante ao avançado.<br />Começa onde está.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trilhas.map((t, i) => (
                <div
                  key={i}
                  className={`reveal ${i > 0 ? `reveal-d${i}` : ''} rounded-[18px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 flex sm:block gap-4 items-start`}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                >
                  <div
                    className="shrink-0 w-10 sm:w-auto"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(36px,5vw,48px)',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.1)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      marginBottom: 0,
                    }}
                  >
                    {t.n}
                  </div>
                  <div className="sm:mt-3.5">
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--o)', marginBottom: 6 }}>{t.nivel}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{t.nome}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="reveal text-center py-12 sm:py-14 px-5">
        <a
          href="#planos"
          className="font-display inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
          style={{
            fontSize: 'clamp(15px,1.5vw,18px)',
            padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)',
            background: 'var(--o)',
            color: '#000',
            boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
          }}
        >
          Quero treinar a favor do meu ciclo
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
        </a>
      </div>
    </section>
  )
}
