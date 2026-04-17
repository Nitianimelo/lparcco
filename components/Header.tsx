'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'IAs', href: '#ias' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Planos', href: '#planos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-950/95 backdrop-blur-lg border-b border-white/8 shadow-xl shadow-black/20'
            : 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="flex items-center flex-shrink-0 cursor-pointer">
              <div className="relative h-12 w-48 flex items-center justify-start">
                <img
                  src="https://qscezcbpwvnkqoevulbw.supabase.co/storage/v1/object/public/Chipro%20calculadora/arcco%20(1).png"
                  alt="Arcco"
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="http://app.arccoai.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2 cursor-pointer"
              >
                Login
              </motion.a>

              <motion.a
                href="#planos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg cursor-pointer"
              >
                Conhecer nossa plataforma
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40"
            >
              <nav className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className="text-gray-300 hover:text-white text-lg font-medium py-3 border-b border-white/5 last:border-0 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="flex flex-col gap-3 pt-6">
                  <a
                    href="http://app.arccoai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="text-center py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    Login
                  </a>
                  <a
                    href="#planos"
                    onClick={closeMenu}
                    className="text-center py-3 rounded-xl bg-white text-gray-900 hover:bg-gray-100 text-sm font-semibold transition-all duration-200 cursor-pointer"
                  >
                    Conhecer nossa plataforma
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
