'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center flex-shrink-0">
            <div className="relative h-12 w-48 flex items-center justify-start">
              <img
                src="https://qscezcbpwvnkqoevulbw.supabase.co/storage/v1/object/public/Chipro%20calculadora/arcco%20(1).png"
                alt="Arcco"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Nav — empurrado para a direita */}
          <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
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

          {/* Ações */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="http://app.arccoai.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2"
            >
              Login
            </motion.a>

            <motion.a
              href="#planos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg"
            >
              Conhecer nossa plataforma
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
