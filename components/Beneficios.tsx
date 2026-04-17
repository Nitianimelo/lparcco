'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Target, BarChart3, Shield, Clock, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Automação Inteligente',
    description: 'IA que aprende e se adapta ao seu negócio, economizando até 40h/semana.',
    className: 'md:col-span-2',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    icon: Zap,
    title: 'Setup Instantâneo',
    description: 'Plug-and-play em minutos. Sem código.',
    className: 'md:col-span-1',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Shield,
    title: 'Segurança Enterprise',
    description: 'Criptografia de ponta a ponta e compliance total.',
    className: 'md:col-span-1',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: BarChart3,
    title: 'Analytics em Tempo Real',
    description: 'Dashboards interativos para decisões baseadas em dados.',
    className: 'md:col-span-2',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground/90 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Por que a Arcco?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Tudo o que você precisa para <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">escalar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma suíte completa de ferramentas de IA projetada para simplificar sua operação e maximizar seus resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 hover:border-white/20 transition-colors ${feature.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Saiba mais <Bot className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-16"
        >
          {[
            { value: "40h+", label: "Economia Semanal" },
            { value: "10x", label: "ROI Médio" },
            { value: "24/7", label: "Funcionamento" },
            { value: "0", label: "Erros Operacionais" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
