'use client'

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
