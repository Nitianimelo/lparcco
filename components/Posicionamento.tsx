'use client'

import { motion } from 'framer-motion'
import { Zap, MessageSquareX, ArrowRight } from 'lucide-react'

const diferenciais = [
    {
        label: 'Não somos isso',
        icon: MessageSquareX,
        iconColor: 'text-red-400/70',
        items: [
            'Um chatbot que responde perguntas',
            'Uma IA genérica para conversar',
            'Uma ferramenta que depende de você',
            'Mais uma plataforma para aprender',
        ],
        cardClass: 'border-red-500/10 bg-red-500/5',
        textClass: 'text-muted-foreground/60 line-through decoration-red-400/40',
    },
    {
        label: 'Somos isso',
        icon: Zap,
        iconColor: 'text-primary',
        items: [
            'Agentes que executam tarefas reais',
            'IA que age de ponta a ponta no seu negócio',
            'Automação que trabalha enquanto você dorme',
            'Resultados mensuráveis desde o primeiro dia',
        ],
        cardClass: 'border-primary/20 bg-primary/5',
        textClass: 'text-foreground',
    },
]

export default function Posicionamento() {
    return (
        <section className="relative py-28 overflow-hidden bg-background">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                        Posicionamento
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Tudo que você precisa.{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Nada do que não precisa.
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Enquanto o mundo conversa com IA, seus concorrentes que usam Arcco já estão executando.
                    </p>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
                    {diferenciais.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`rounded-2xl border p-8 ${item.cardClass}`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                    {item.label}
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {item.items.map((text, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${item.textClass}`}>
                                        <span className="mt-0.5 flex-shrink-0 text-muted-foreground/40">—</span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Big statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <div className="inline-block rounded-2xl border border-primary/20 bg-primary/5 px-10 py-8 max-w-3xl">
                        <p className="text-2xl sm:text-3xl font-bold text-foreground leading-snug mb-2">
                            Nós não somos uma IA que conversa.
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-snug">
                            Somos uma IA que{' '}
                            <span className="underline decoration-primary/50 underline-offset-4">faz.</span>
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
                    >
                        Ver como funciona
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
