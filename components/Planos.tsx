'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, Database, HeadphonesIcon, Shield, Infinity, Clock, Check, TrendingUp, HardDrive, FileText, Image, LucideIcon, Bot, Globe, Gauge, Wrench, BrainCircuit, FolderKanban, Monitor } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  text: string
  description?: string
  included: boolean
}

interface Plano {
  name: string
  tagline: string
  description: string
  price: string
  priceDisplay?: string
  period: string
  features: Feature[]
  popular: boolean
  cta: string
  badge?: string
}

const planos: Plano[] = [
  {
    name: 'Starter',
    tagline: 'Para quem está começando',
    description: 'Um time de especialistas em IA trabalhando 24/7 pelo seu negócio.',
    price: '99,90',
    period: '/mês',
    features: [
      { icon: Zap, text: 'Acesso a +50 LLMs Globais', description: 'Use GPT-4, Claude, Gemini e Deepseek num só lugar.', included: true },
      { icon: BrainCircuit, text: 'Memória Infinita (RAG)', description: 'Faça upload de PDFs e processos. A IA nunca esquece como sua empresa funciona.', included: true },
      { icon: FolderKanban, text: 'Projetos Personalizados', description: 'Crie espaços de trabalho segmentados para cada cliente ou setor.', included: true },
      { icon: Wrench, text: 'Ferramentas do Dia a Dia', description: 'Hub de atalhos e utilitários rápidos para resolver tarefas chatas num clique.', included: true },
      { icon: FileText, text: 'Geração de Arquivos Físicos', description: 'Não copie texto. A IA gera planilhas, PDFs e propostas e te entrega o download.', included: true },
      { icon: Image, text: 'Estúdio de Design Mágico', description: 'Posts e carrosséis profissionais montados em segundos com base em texto.', included: true },
      { icon: HardDrive, text: 'Arcco Drive Inclusivo', description: 'Seu cofre digital privado para salvar absolutamente tudo que for gerado.', included: true },
      { icon: Monitor, text: 'Cloud Computer Agent', description: 'Um computador virtual na nuvem que navega, clica, preenche e executa tarefas reais pelo seu negócio.', included: true },
    ],
    popular: true,
    badge: 'Mais Escolhido',
    cta: 'Testar grátis agora.',
  },

  {
    name: 'Enterprise',
    tagline: 'Para grandes operações',
    description: 'Infraestrutura de IA sob medida para times complexos que precisam de escala e controle total.',
    price: '',
    priceDisplay: 'Sob Consulta',
    period: '',
    features: [],
    popular: false,
    cta: 'Falar com Vendas',
  },
]

export default function Planos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="planos" className="relative py-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do primeiro acesso à operação completa com IA. Evolua conforme o seu crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plano.popular ? 'z-10 md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Badge */}
              {plano.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-primary/30">
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
                <div className="mb-8">
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-1">{plano.tagline}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plano.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[48px]">{plano.description}</p>
                  <div className="flex items-baseline gap-1">
                    {plano.priceDisplay ? (
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {plano.priceDisplay}
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-foreground">R$ {plano.price}</span>
                        <span className="text-muted-foreground">{plano.period}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plano.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="mt-0.5 rounded-full p-1 shrink-0 bg-primary/20 text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {feature.text}
                          </span>
                          {feature.description && (
                            <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-4 rounded-xl font-bold transition-all duration-300
                    ${plano.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                    }
                  `}
                >
                  {plano.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
