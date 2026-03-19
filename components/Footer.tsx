'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Github, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Github, href: '#github', label: 'GitHub' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative h-12 w-48 flex items-center justify-start">
                  <img
                    src="https://qscezcbpwvnkqoevulbw.supabase.co/storage/v1/object/public/Chipro%20calculadora/arcco%20(1).png"
                    alt="Arcco"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                Inteligência Artificial plug-and-play para transformar empresas brasileiras em operações de alta performance.
              </p>

              <div className="max-w-md">
                <h4 className="text-sm font-semibold text-foreground mb-3">Inscreva-se na nossa newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-foreground font-semibold mb-6">Produto</h3>
              <ul className="space-y-4">
                {['Funcionalidades', 'Integrações', 'Preços', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-6">Empresa</h3>
              <ul className="space-y-4">
                {['Sobre Nós', 'Carreiras', 'Blog', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Arcco. Todos os direitos reservados.
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
