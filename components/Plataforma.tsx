'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Monitor, Smartphone, Database, Cog, BarChart, Users } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Dashboard Intuitivo',
    description: 'Interface clean e fácil de usar com todas as métricas importantes em um só lugar.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Acesse sua plataforma de qualquer dispositivo, com experiência otimizada para mobile.',
  },
  {
    icon: Database,
    title: 'Integração Total',
    description: 'Conecte com suas ferramentas favoritas: Slack, WhatsApp, Email e muito mais.',
  },
  {
    icon: Cog,
    title: 'Customização Flexível',
    description: 'Adapte cada automação às necessidades específicas do seu negócio.',
  },
  {
    icon: BarChart,
    title: 'Relatórios Avançados',
    description: 'Análises detalhadas com gráficos interativos e exportação de dados.',
  },
  {
    icon: Users,
    title: 'Colaboração em Equipe',
    description: 'Permissões granulares para gerenciar quem pode ver e editar cada automação.',
  },
]

const screenshots = [
  {
    title: 'Dashboard Principal',
    description: 'Visão geral de todas as suas automações e métricas em tempo real',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Editor de Automações',
    description: 'Interface visual para criar e configurar automações complexas',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Analytics e Relatórios',
    description: 'Análises detalhadas com insights valiosos para seu negócio',
    gradient: 'from-pink-500/20 to-red-500/20',
  },
]

export default function Plataforma() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <section id="plataforma" className="relative py-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Conheça a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma interface poderosa e intuitiva projetada para simplificar a automação do seu negócio
          </p>
        </motion.div>

        {/* Interactive Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent">
            <div className={`bg-card border border-white/5 rounded-xl overflow-hidden shadow-2xl`}>
              <div className="bg-gray-900/50 p-6 md:p-8 backdrop-blur-sm">
                {/* Browser Header */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="h-8 bg-black/40 rounded-lg flex items-center px-4 max-w-sm mx-auto border border-white/5">
                      <span className="text-gray-500 text-xs font-mono">app.arcco.ai/dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Platform Preview */}
                <div className="min-h-[400px] flex flex-col">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold text-lg">{screenshots[activeScreenshot].title}</h3>
                        <p className="text-muted-foreground text-sm">{screenshots[activeScreenshot].description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 bg-black/20 p-1 rounded-full border border-white/5">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveScreenshot(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeScreenshot === index
                              ? 'bg-primary w-8'
                              : 'bg-white/10 hover:bg-white/20'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Content Based on Screenshot */}
                  <div className="flex-1 bg-black/20 rounded-xl p-6 border border-white/5 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${screenshots[activeScreenshot].gradient} opacity-5`} />

                    {activeScreenshot === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                        <div className="bg-card/50 border border-white/5 rounded-xl p-5">
                          <div className="text-3xl font-bold text-blue-400 mb-1">127</div>
                          <div className="text-sm text-muted-foreground">Automações Ativas</div>
                          <div className="text-green-500 text-xs mt-2 font-medium bg-green-500/10 inline-block px-2 py-1 rounded-full">↑ 12% esta semana</div>
                        </div>
                        <div className="bg-card/50 border border-white/5 rounded-xl p-5">
                          <div className="text-3xl font-bold text-purple-400 mb-1">89%</div>
                          <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
                          <div className="text-green-500 text-xs mt-2 font-medium bg-green-500/10 inline-block px-2 py-1 rounded-full">↑ 3% este mês</div>
                        </div>
                        <div className="bg-card/50 border border-white/5 rounded-xl p-5">
                          <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
                          <div className="text-sm text-muted-foreground">Uptime Garantido</div>
                          <div className="text-primary text-xs mt-2 font-medium bg-primary/10 inline-block px-2 py-1 rounded-full">99.9% online</div>
                        </div>
                      </div>
                    )}

                    {activeScreenshot === 1 && (
                      <div className="space-y-3 relative z-10">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-16 bg-card/40 border border-white/5 rounded-lg w-full" />
                        ))}
                      </div>
                    )}
                    {activeScreenshot === 2 && (
                      <div className="flex items-end justify-between h-32 gap-2 relative z-10 md:px-10">
                        {[40, 70, 45, 90, 60].map((h, i) => (
                          <div key={i} className="w-full bg-primary/20 rounded-t-lg" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
