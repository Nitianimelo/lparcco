'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="relative h-12 w-48 flex items-center justify-start">
              <img
                src="https://qscezcbpwvnkqoevulbw.supabase.co/storage/v1/object/public/Chipro%20calculadora/arcco%20(1).png"
                alt="Arcco"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#ias" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              IAs
            </a>
            <a href="#solucoes" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Soluções
            </a>
            <a href="#planos" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Planos
            </a>
            <a href="#contato" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Contato
            </a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Começar Agora</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
