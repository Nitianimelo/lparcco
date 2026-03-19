'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, Settings, Rocket, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Cadastro Simples',
    description: 'Crie sua conta em menos de 2 minutos. Basta seu email e senha. Sem cartão de crédito necessário.',
    color: 'bg-blue-500',
    number: '01'
  },
  {
    icon: Settings,
    title: 'Configure em Minutos',
    description: 'Escolha os módulos que sua empresa precisa. Configure parâmetros e integre suas ferramentas existentes.',
    color: 'bg-purple-500',
    number: '02'
  },
  {
    icon: Rocket,
    title: 'Lance e Acompanhe',
    description: 'Ative suas automações com um clique. Acompanhe em tempo real através de dashboards intuitivos.',
    color: 'bg-pink-500',
    number: '03'
  },
  {
    icon: TrendingUp,
    title: 'Otimize Continuamente',
    description: 'A IA aprende com o uso e sugere melhorias. Seus processos ficam mais eficientes dia após dia.',
    color: 'bg-green-500',
    number: '04'
  },
]

export default function ComoFunciona() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground/90 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Passo a Passo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Como <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quatro passos simples para transformar sua empresa com inteligência artificial
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Content */}
                <div className="bg-card border border-border/50 rounded-2xl p-6 pt-12 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-lg bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">{step.number}</span>
                  </div>

                  <div className={`w-14 h-14 rounded-xl ${step.color}/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 transition-colors`}>
                    <step.icon className={`w-7 h-7 text-foreground`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Começar Agora - É Gratuito</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
