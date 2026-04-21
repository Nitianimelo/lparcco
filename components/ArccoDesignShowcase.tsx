'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Sparkles, Download, Layers } from 'lucide-react'

const bullets = [
  { icon: Sparkles, text: 'Gere apresentações, posts e criativos em segundos com IA' },
  { icon: Layers,   text: 'Slides 16:9, Stories, A4 e banners — tudo em um só lugar' },
  { icon: Download, text: 'Exporte em PDF, PPTX ou PNG com um clique' },
]

export default function ArccoDesignShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080810 0%, #0a0a14 100%)',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 mb-6 text-[11px] font-semibold tracking-widest uppercase">
              Arcco Design
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Do briefing ao{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                material pronto
              </span>
              {' '}em minutos.
            </h2>

            <p className="text-white/45 text-lg leading-relaxed mb-10">
              Descreva o que precisa. A IA cria apresentações, posts, stories e documentos
              com a identidade visual da sua empresa — sem depender de designer.
            </p>

            <ul className="space-y-4 mb-10">
              {bullets.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)' }}>
                    <Icon size={15} className="text-indigo-400" />
                  </div>
                  <span className="text-white/70 text-sm">{text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="http://app.arccoai.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
              }}
            >
              <Sparkles size={15} />
              Experimentar grátis
            </motion.a>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-2xl blur-2xl scale-95 -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.25), transparent 70%)' }}
            />

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(99,102,241,0.25)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
              }}
            >
              {/* Top bar — fake chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-3"
                style={{ background: 'rgba(15,15,25,0.9)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-4 text-[11px] text-white/20 font-mono">arcco design</span>
              </div>

              <Image
                src="/arcco-design-paisagem.png"
                alt="Arcco Design — criação de materiais visuais com IA"
                width={900}
                height={560}
                className="w-full h-auto block"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
