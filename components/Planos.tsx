'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Check, FileText, Image, Monitor, FolderKanban, Wrench,
  BrainCircuit, Globe, Paintbrush, TableProperties, Stamp,
  Cpu, Rocket, Plug, HeadphonesIcon, LucideIcon,
} from 'lucide-react'

interface Feature {
  icon: LucideIcon
  text: string
  description?: string
}

interface Plano {
  name: string
  tagline: string
  description: string
  priceMonthly: string
  priceAnnual: string
  annualLabel?: string
  features: Feature[]
  extras?: Feature[]
  popular: boolean
  badge?: string
  cta: string
  ctaLink: string
}

const starterFeatures: Feature[] = [
  {
    icon: BrainCircuit,
    text: 'Arcco Tera — Modelo Proprietário',
    description: 'Nosso modelo treinado para o mercado brasileiro. Entende jargão local, APIs nacionais e contexto de negócio.',
  },
  {
    icon: Paintbrush,
    text: 'Arcco Design',
    description: 'Crie apresentações, posts, stories e criativos com IA — exporte em PDF, PPTX ou PNG.',
  },
  {
    icon: TableProperties,
    text: 'Geração e edição de planilhas com IA',
    description: 'Peça um Excel consolidado, CSV estruturado ou análise de dados e receba o arquivo pronto para download.',
  },
  {
    icon: Stamp,
    text: 'Documentos personalizados com a marca',
    description: 'Contratos, propostas, recibos e relatórios com logo e identidade visual da sua empresa.',
  },
  {
    icon: Globe,
    text: 'Mais de 20 modelos de IA do mercado',
    description: 'Acesse GPT-4o, Claude 3.5, Gemini, Mistral e outros — tudo em um só lugar.',
  },
  {
    icon: FileText,
    text: 'Análise de até 50 PDFs simultâneos',
    description: 'Envie contratos, relatórios e editais. O Arcco lê tudo, cruza as informações e entrega o resumo pronto.',
  },
  {
    icon: Image,
    text: 'Geração de Imagens e Slides',
    description: 'Crie apresentações profissionais e imagens para marketing. Baixe o arquivo final.',
  },
  {
    icon: Monitor,
    text: 'Cloud Computer Agent',
    description: 'Um computador virtual na nuvem que navega, clica, preenche formulários e executa tarefas reais.',
  },
  {
    icon: FolderKanban,
    text: 'Projetos e Memória Infinita (RAG)',
    description: 'Espaços de trabalho segmentados. A IA lembra como sua empresa funciona para sempre.',
  },
  {
    icon: Wrench,
    text: 'Ferramentas do Dia a Dia',
    description: 'Hub de atalhos e utilitários rápidos para resolver tarefas recorrentes em um clique.',
  },
]

const ultraExtras: Feature[] = [
  {
    icon: Paintbrush,
    text: '6× mais uso no Arcco Design',
    description: 'Cota ampliada para geração de criativos, apresentações e materiais visuais.',
  },
  {
    icon: Cpu,
    text: 'Arcco Agent com modelos premium',
    description: 'GPT-4o, Claude 3.7 Sonnet, Gemini 2.0 Flash e outros top-tier sem limitações.',
  },
  {
    icon: Plug,
    text: 'Integrações nativas para PMEs brasileiras',
    description: 'Nota fiscal, ERP, CRM, WhatsApp Business e sistemas legados nacionais.',
  },
  {
    icon: Rocket,
    text: 'Ferramentas exclusivas para PMEs',
    description: 'Automações, templates e fluxos pensados para a operação do negócio brasileiro.',
  },
  {
    icon: HeadphonesIcon,
    text: 'Suporte prioritário',
    description: 'Atendimento com tempo de resposta garantido e gerente de conta dedicado.',
  },
]

const planos: Plano[] = [
  {
    name: 'Starter',
    tagline: 'Para quem está começando',
    description: 'Um time de especialistas em IA trabalhando 24/7 pelo seu negócio.',
    priceMonthly: '129',
    priceAnnual: '99,90',
    annualLabel: 'Economize R$348/ano',
    features: starterFeatures,
    popular: true,
    badge: 'Mais Escolhido',
    cta: 'Testar grátis agora',
    ctaLink: 'http://app.arccoai.com/',
  },
  {
    name: 'Ultra',
    tagline: 'Para PMEs que querem escalar',
    description: 'Tudo do Starter mais capacidade ampliada, modelos premium e integrações nativas brasileiras.',
    priceMonthly: '316',
    priceAnnual: '245',
    annualLabel: 'Economize R$852/ano',
    features: starterFeatures,
    extras: ultraExtras,
    popular: false,
    badge: 'Completo',
    cta: 'Começar agora',
    ctaLink: 'http://app.arccoai.com/',
  },
]

export default function Planos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="planos" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground/90 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Preços Simples e Transparentes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Escolha o plano ideal para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              seu negócio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Do primeiro acesso à operação completa com IA. Evolua conforme o seu crescimento.
          </p>

          {/* Toggle mensal / anual */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isAnnual
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anual
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-green-500/20 text-green-400'
              }`}>
                -22%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plano.popular ? 'z-10 md:-mt-4 md:mb-4' : ''}`}
            >
              {plano.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-lg ${
                    plano.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-primary/30'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-purple-500/30'
                  }`}>
                    {plano.badge}
                  </div>
                </div>
              )}

              <div className={`
                h-full rounded-2xl p-8 border transition-all duration-300 flex flex-col
                ${plano.popular
                  ? 'bg-card border-primary/50 shadow-2xl shadow-primary/10 scale-105'
                  : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80'
                }
              `}>
                {/* Plan header */}
                <div className="mb-8">
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-1">{plano.tagline}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plano.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[48px]">{plano.description}</p>

                  {/* Price */}
                  <motion.div
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">
                        R$ {isAnnual ? plano.priceAnnual : plano.priceMonthly}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    {isAnnual && plano.annualLabel && (
                      <p className="text-xs text-green-400 mt-1 font-medium">{plano.annualLabel}</p>
                    )}
                    {!isAnnual && (
                      <p className="text-xs text-muted-foreground mt-1">
                        ou R$ {plano.priceAnnual}/mês no plano anual
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  {/* Ultra: "Tudo do Starter +" */}
                  {plano.extras && (
                    <div className="mb-4 pb-4 border-b border-border/50">
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Diferenciais Ultra
                      </p>
                      <ul className="space-y-3">
                        {plano.extras.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="mt-0.5 rounded-full p-1 shrink-0 bg-purple-500/20 text-purple-400">
                              <Check className="w-3 h-3" />
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-foreground">{feature.text}</span>
                              {feature.description && (
                                <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    {plano.extras ? 'Inclui tudo do Starter' : 'Incluído no plano'}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plano.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="mt-0.5 rounded-full p-1 shrink-0 bg-primary/20 text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">{feature.text}</span>
                          {feature.description && (
                            <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={plano.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-4 rounded-xl font-bold transition-all duration-300 text-center block
                    ${plano.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-lg shadow-purple-500/20'
                    }
                  `}
                >
                  {plano.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Precisa de algo maior?{' '}
          <a
            href="https://wa.me/5511999999999?text=Olá%2C%20tenho%20interesse%20no%20plano%20Enterprise%20da%20Arcco."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Fale com a gente sobre Enterprise →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
