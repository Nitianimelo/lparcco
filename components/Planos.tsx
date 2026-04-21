'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, MouseEvent } from 'react'
import {
  Check, Monitor, BrainCircuit, Paintbrush, Stamp,
  Files, Database, TrendingDown, Zap, ShoppingBag, LucideIcon,
} from 'lucide-react'

interface Feature {
  icon: LucideIcon
  text: string
  description: string
}

const starterFeatures: Feature[] = [
  { icon: Monitor,      text: 'Agent Computer',                    description: 'Agente autônomo que navega, clica e executa tarefas reais na web — superior ao Manus.' },
  { icon: TrendingDown, text: 'Economia de custos',                description: 'IA que substitui horas de trabalho manual e reduz custos operacionais do negócio.' },
  { icon: BrainCircuit, text: 'Mensagens ilimitadas — Arcco Tera', description: 'Modelo proprietário treinado para o mercado brasileiro, sem limite de uso.' },
  { icon: Database,     text: 'Memória máxima RAG',                description: 'A IA aprende como sua empresa funciona e lembra para sempre.' },
  { icon: Paintbrush,   text: 'Arcco Design',                      description: 'Crie apresentações, posts e criativos com IA. Exporte em PDF, PPTX ou PNG.' },
  { icon: Stamp,        text: 'Documentos personalizados',         description: 'Contratos, propostas e recibos com logo e identidade visual da sua empresa.' },
  { icon: Files,        text: 'Análise massiva de documentos',     description: 'Envie até 50 PDFs simultâneos — o Arcco lê, cruza e entrega o resumo pronto.' },
]

const ultraExtras: Feature[] = [
  { icon: ShoppingBag, text: 'Loja de ferramentas exclusivas para empresas', description: 'Ferramentas avançadas desenvolvidas para a operação de PMEs brasileiras.' },
  { icon: Zap,         text: '6× mais uso — Agent Computer e Arcco Design', description: 'Cota ampliada para automações e criação de materiais visuais em escala.' },
]

/* ── 3D tilt card ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Planos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isAnnual, setIsAnnual] = useState(true)

  const planos = [
    {
      name: 'Starter',
      tagline: 'Para quem está começando',
      description: 'Um time de especialistas em IA trabalhando 24/7 pelo seu negócio.',
      priceMonthly: '129',
      priceAnnual: '99,90',
      annualSaving: 'Economize R$348/ano',
      features: starterFeatures,
      extras: null as Feature[] | null,
      popular: true,
      badge: 'Mais Escolhido',
      cta: 'Testar grátis agora',
      ctaLink: 'http://app.arccoai.com/',
      accent: 'from-blue-500 to-indigo-600',
      glow: 'rgba(99,102,241,0.35)',
      border: 'rgba(99,102,241,0.4)',
    },
    {
      name: 'Ultra',
      tagline: 'Para PMEs que querem escalar',
      description: 'Tudo do Starter com capacidade ampliada e ferramentas exclusivas para empresas.',
      priceMonthly: '316',
      priceAnnual: '245',
      annualSaving: 'Economize R$852/ano',
      features: starterFeatures,
      extras: ultraExtras,
      popular: false,
      badge: 'Completo',
      cta: 'Começar agora',
      ctaLink: 'http://app.arccoai.com/',
      accent: 'from-violet-600 to-pink-600',
      glow: 'rgba(139,92,246,0.3)',
      border: 'rgba(139,92,246,0.4)',
    },
  ]

  return (
    <section
      id="planos"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,27,75,0.95), transparent), linear-gradient(180deg, #0a0a12 0%, #0d0d18 50%, #080810 100%)',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4" style={{ perspective: '1200px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 mb-6 text-xs font-semibold tracking-widest uppercase">
            Preços Simples e Transparentes
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Escolha o plano ideal para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              seu negócio
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
            Do primeiro acesso à operação completa com IA.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-1 rounded-full p-1"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual ? 'bg-white text-black shadow-sm' : 'text-white/50 hover:text-white/80'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isAnnual ? 'bg-white text-black shadow-sm' : 'text-white/50 hover:text-white/80'
              }`}
            >
              Anual
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                isAnnual ? 'bg-emerald-500/20 text-emerald-600' : 'bg-emerald-500/15 text-emerald-400'
              }`}>
                -22%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Badge */}
              {plano.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`px-5 py-1.5 rounded-full text-white text-xs font-bold tracking-wide shadow-xl bg-gradient-to-r ${plano.accent}`}
                    style={{ boxShadow: `0 4px 20px ${plano.glow}` }}>
                    {plano.badge}
                  </div>
                </div>
              )}

              <TiltCard className="h-full cursor-default">
                {/* Glow ring */}
                <div
                  className="absolute -inset-px rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${plano.border}, transparent 60%)`,
                    borderRadius: '1rem',
                  }}
                />

                <div
                  className="relative h-full rounded-2xl p-8 flex flex-col overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                    border: `1px solid ${plano.border}`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 64px rgba(0,0,0,0.5), 0 0 80px ${plano.glow}`,
                    transform: 'translateZ(0)',
                  }}
                >
                  {/* Inner top shimmer */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${plano.border}, transparent)` }}
                  />

                  {/* Radial glow top-right */}
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${plano.glow.replace('0.3', '0.12').replace('0.35', '0.14')}, transparent 70%)` }}
                  />

                  {/* Plan header */}
                  <div className="relative z-10 mb-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">{plano.tagline}</p>
                    <h3 className="text-3xl font-bold text-white mb-1">{plano.name}</h3>
                    <p className="text-white/40 text-sm mb-6 leading-relaxed">{plano.description}</p>

                    {/* Price */}
                    <div className="pb-6 border-b border-white/[0.07]">
                      <motion.div
                        key={isAnnual ? 'a' : 'm'}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-baseline gap-1">
                          <span className="text-[52px] font-black text-white leading-none tracking-tight">
                            R${isAnnual ? plano.priceAnnual : plano.priceMonthly}
                          </span>
                          <span className="text-white/30 text-sm ml-1">/mês</span>
                        </div>
                        {isAnnual
                          ? <p className="text-emerald-400 text-xs mt-1.5 font-semibold">{plano.annualSaving}</p>
                          : <p className="text-white/30 text-xs mt-1.5">ou R${plano.priceAnnual}/mês no plano anual</p>
                        }
                      </motion.div>
                    </div>
                  </div>

                  {/* Ultra extras */}
                  {plano.extras && (
                    <div className="relative z-10 mb-5 pb-5 border-b border-white/[0.07]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 mb-3">
                        Exclusivo Ultra
                      </p>
                      <ul className="space-y-2.5">
                        {plano.extras.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: 'rgba(139,92,246,0.2)' }}>
                              <Check className="w-3 h-3 text-violet-400" />
                            </div>
                            <span className="text-sm font-semibold text-white/90">{f.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features list */}
                  <div className="relative z-10 flex-1">
                    {plano.extras && (
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-3">
                        Inclui tudo do Starter
                      </p>
                    )}
                    <ul className="space-y-2.5 mb-8">
                      {plano.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `linear-gradient(135deg, ${plano.glow.replace('0.35','0.3').replace('0.3','0.2')}, rgba(255,255,255,0.05))` }}
                          >
                            <Check className="w-3 h-3 text-white/70" />
                          </div>
                          <span className="text-sm text-white/70">{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={plano.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative z-10 w-full py-4 rounded-xl font-bold text-center block text-white text-sm tracking-wide transition-all duration-300 bg-gradient-to-r ${plano.accent}`}
                    style={{ boxShadow: `0 8px 32px ${plano.glow}` }}
                  >
                    {plano.cta}
                  </motion.a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-sm text-white/30 mt-12"
        >
          Precisa de algo maior?{' '}
          <a
            href="https://wa.me/5511999999999?text=Olá%2C%20tenho%20interesse%20no%20plano%20Enterprise%20da%20Arcco."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white underline underline-offset-2 transition-colors font-medium"
          >
            Fale com a gente sobre Enterprise →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
