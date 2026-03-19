'use client'

import { motion } from 'framer-motion'
import { Check, TrendingDown } from 'lucide-react'

const competitors = [
    {
        name: 'ChatGPT',
        price: 'R$ 120',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
        ),
    },
    {
        name: 'Grok',
        price: 'R$ 180',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Claude',
        price: 'R$ 120',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.304 3.541 12.001 17.51 6.697 3.541H3L9.999 21h4.004L21 3.541h-3.696z" />
            </svg>
        ),
    },
    {
        name: 'Gemini',
        price: 'R$ 100',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
            </svg>
        ),
    },
    {
        name: 'Mistral AI',
        price: 'R$ 90',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M0 0h4v4H0zm6.667 0h4v4h-4zM0 6.667h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm4 0h2.667v4H17.333zM13.333 0h4v4h-4zM17.333 0H20v4h-2.667zM20 0h4v4h-4zm0 6.667h4v4h-4zM0 13.333h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm6.667 0h4v4h-4zM0 20h4v4H0zm6.667 0h4v4h-4zm6.666 0h4v4h-4zm6.667 0h4v4h-4z" />
            </svg>
        ),
    },
]

const totalCompetitor = 610

const arccoFeatures = [
    '+50 modelos de IA incluídos',
    'ChatGPT, Gemini, Deepseek, Claude e Grok',
    'Atualização automática de modelos',
    'Suporte em português',
    'Integração plug & play',
]

export default function Economia() {
    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-5 tracking-wide uppercase">
                        <TrendingDown className="w-3.5 h-3.5" />
                        Economia real
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        Economize{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                            90%
                        </span>{' '}
                        com a nossa plataforma
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Por que pagar por várias assinaturas separadas se você pode ter tudo em um lugar?
                    </p>
                </motion.div>

                {/* Comparison cards */}
                <div className="flex flex-col lg:flex-row items-stretch gap-6 max-w-4xl mx-auto">

                    {/* ── LEFT: Competitors ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex-1 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-sm p-6"
                    >
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Outros</p>

                        <div className="space-y-3 mb-6">
                            {competitors.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5"
                                >
                                    <div className="flex items-center gap-3 text-gray-400">
                                        {item.svg}
                                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-red-400">{item.price}<span className="text-gray-500 font-normal">/mês</span></span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                            <span className="text-sm text-gray-400">Total mensal</span>
                            <span className="text-2xl font-bold text-red-400">R$ {totalCompetitor}</span>
                        </div>
                    </motion.div>

                    {/* ── CENTER: VS divider ── */}
                    <div className="flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0">
                        <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 bg-gray-900 flex items-center justify-center text-xs font-bold text-gray-400">
                            VS
                        </div>
                        <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                    </div>

                    {/* ── RIGHT: Arcco ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-purple-600/10 backdrop-blur-sm p-6 relative overflow-hidden"
                    >
                        {/* Glow corner */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="flex items-center justify-between mb-5">
                            <p className="text-xs font-semibold text-primary/80 uppercase tracking-widest">Arcco</p>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-semibold">
                                Melhor valor
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <p className="text-gray-400 text-sm mb-1">A partir de</p>
                            <div className="flex items-end gap-1">
                                <span className="text-5xl font-bold text-white">R$ 99</span>
                                <span className="text-2xl font-bold text-white mb-1">,90</span>
                                <span className="text-gray-400 text-sm mb-2">/mês</span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            {arccoFeatures.map((feat, i) => (
                                <motion.li
                                    key={feat}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                                    className="flex items-start gap-3 text-sm text-gray-300"
                                >
                                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    {feat}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Savings badge */}
                        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 flex items-center justify-between">
                            <span className="text-sm text-emerald-300 font-medium">Você economiza</span>
                            <span className="text-xl font-bold text-emerald-400">R$ {totalCompetitor - 99}/mês</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
