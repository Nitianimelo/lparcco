'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import CircuitBackground from './CircuitBackground'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated Background Gradients */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Circuit Background */}
      <CircuitBackground />

      {/* Main Content — side by side on desktop, column on mobile */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ── LEFT: text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-gray-400 mb-8 backdrop-blur-md hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
            >
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Powered by <span className="text-gray-200">AI</span></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              A tecnologia das grandes empresas{' '}
              <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                agora no seu negócio.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Democratizamos a implementação de IA. Plug &amp; Play para transformar sua operação de ponta a ponta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center lg:items-start w-full sm:w-auto justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Começar Gratuitamente <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:border-white/20"
              >
                Ver Demonstração
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Arcco Agents image — 3D "standing up" effect ── */}
          <div style={{ perspective: '1200px' }} className="relative lg:w-1/2 w-full max-w-[51rem] mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 8 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 2, scale: 1.02 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center' }}
              className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Gloss overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none z-10 rounded-2xl" />

              {/* The image */}
              <img
                src="/arcco-agents.png"
                alt="Arcco Agents — Automação e Inteligência Artificial"
                className="w-full h-auto block opacity-75"
                draggable={false}
              />
            </motion.div>

            {/* Glow beneath */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/30 blur-[80px] -z-10 rounded-full" />
            {/* Soft reflection / shadow floor */}
            <div className="absolute -bottom-2 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}
