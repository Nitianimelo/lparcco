'use client'

import { motion } from 'framer-motion'
import { Brain, Globe, FileDown, X, Check, Zap, Sparkles } from 'lucide-react'

const comparisons = [
    {
        prompt: 'Você pede: "Faça um resumo dos meus concorrentes."',
        traditional: {
            label: 'A IA responde:',
            text: 'Um texto genérico com dicas de como você mesmo pode pesquisar no Google.',
        },
        arcco: {
            label: 'A Arcco age:',
            text: 'Abre um navegador invisível, varre o site de 3 concorrentes e extrai os preços reais.',
        },
    },
    {
        prompt: 'Você pede: "Analise essa planilha de 5.000 linhas."',
        traditional: {
            label: 'A IA responde:',
            text: '"Desculpe, esse arquivo é muito grande" — ou alucina a matemática, errando a soma.',
        },
        arcco: {
            label: 'A Arcco age:',
            text: 'Escreve um script Python, roda em servidor seguro, calcula com 100% de exatidão e gera um gráfico.',
        },
    },
    {
        prompt: null, // footer row
        traditional: {
            label: 'O seu papel:',
            text: 'Copiar, colar, formatar no Word e salvar como PDF.',
            isFooter: true,
        },
        arcco: {
            label: 'O seu papel:',
            text: 'Clicar em "Baixar PDF" e ir tomar um café. ☕',
            isFooter: true,
        },
    },
]

const motorItems = [
    {
        icon: <Brain className="w-7 h-7" />,
        title: 'Planejador Lógico',
        desc: 'Ela não sai respondendo por impulso. Quebra o seu pedido complexo em um plano de 5 a 10 ações tangíveis e mostra a você antes de começar.',
        blobColor: '#8b5cf6', // Violet
        blobColor2: '#d946ef', // Fuchsia
        glowColor: 'rgba(139, 92, 246, 0.5)',
        border: 'border-violet-500/20 group-hover:border-violet-400/50',
        iconColor: 'text-violet-400',
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: 'Navegação Real',
        desc: 'Se a informação não está no banco de dados, a Arcco acessa a web anonimamente, clica, escaneia e extrai os dados da página por você — em tempo real.',
        blobColor: '#3b82f6', // Blue
        blobColor2: '#06b6d4', // Cyan
        glowColor: 'rgba(59, 130, 246, 0.5)',
        border: 'border-blue-500/20 group-hover:border-blue-400/50',
        iconColor: 'text-blue-400',
    },
    {
        icon: <FileDown className="w-7 h-7" />,
        title: 'Curinga de Arquivos',
        desc: 'Precisa de um Excel consolidado, CSV estruturado ou Gráfico em PDF? Ela gera o arquivo físico na nuvem e te entrega o botão de download.',
        blobColor: '#10b981', // Emerald
        blobColor2: '#14b8a6', // Teal
        glowColor: 'rgba(16, 185, 129, 0.5)',
        border: 'border-emerald-500/20 group-hover:border-emerald-400/50',
        iconColor: 'text-emerald-400',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function EraExecucao() {
    return (
        <section className="relative py-28 overflow-hidden bg-background">
            <style>{`
        @keyframes float-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.15); }
          66% { transform: translate(-20px, 30px) scale(0.85); }
        }
      `}</style>

            {/* Background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative container mx-auto px-4 max-w-6xl">

                {/* ── Header ── */}
                <motion.div {...fadeUp(0)} className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary/80 text-[11px] font-bold mb-6 tracking-[0.18em] uppercase">
                        <Zap className="w-3 h-3" />
                        Não somos apenas um chatbot. Somos um RPA Cognitivo.
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Chatbots dão conselhos.{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent">
                            A Arcco entrega o trabalho pronto.
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A maioria das IAs gera blocos de texto para você copiar, colar e tentar montar sozinho.
                        A Arcco possui um <span className="text-foreground font-medium">ambiente de execução real</span>: ele planeja a tarefa,
                        navega na internet, processa planilhas e devolve o arquivo final nas suas mãos.{' '}
                        <span className="text-foreground font-semibold">Pare de conversar. Comece a delegar.</span>
                    </p>
                </motion.div>

                {/* ── Comparison Table ── */}
                <motion.div {...fadeUp(0.15)} className="mb-32">
                    {/* Column headers - Desktop only */}
                    <div className="hidden md:grid grid-cols-2 gap-4 mb-3 px-1">
                        <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gray-800/50 border border-white/5">
                            <span className="text-xl">🤖</span>
                            <span className="text-sm font-semibold text-gray-300">IAs Tradicionais</span>
                            <span className="text-xs text-gray-500 hidden sm:inline">— Apenas Conversa</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-primary/15 to-purple-600/10 border border-primary/20">
                            <span className="text-xl">⚡</span>
                            <span className="text-sm font-semibold text-white">A Agente Arcco</span>
                            <span className="text-xs text-primary/70 hidden sm:inline">— Ação Autônoma</span>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="rounded-2xl border border-white/8 overflow-hidden divide-y divide-white/5 bg-gray-900/30 backdrop-blur-sm">
                        {comparisons.map((row, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            >
                                {/* Prompt banner */}
                                {row.prompt && (
                                    <div className="px-5 py-3 bg-white/3 border-b border-white/5">
                                        <p className="text-xs sm:text-sm text-gray-400 font-medium italic">"{row.prompt.replace('Você pede: "', '').replace('"', '')}"</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                                    {/* Traditional side */}
                                    <div className={`px-4 sm:px-6 py-5 flex gap-3 ${row.traditional.isFooter ? 'bg-red-950/20' : ''}`}>
                                        <div className="flex-shrink-0 mt-0.5">
                                            <X className="w-4 h-4 text-red-500/70" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] sm:text-[11px] font-semibold text-red-400/70 uppercase tracking-widest mb-1.5">{row.traditional.label}</p>
                                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{row.traditional.text}</p>
                                        </div>
                                    </div>

                                    {/* Arcco side */}
                                    <div className={`px-4 sm:px-6 py-5 flex gap-3 ${row.arcco.isFooter ? 'bg-emerald-950/20' : 'bg-primary/5'}`}>
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] sm:text-[11px] font-semibold text-emerald-400/80 uppercase tracking-widest mb-1.5">{row.arcco.label}</p>
                                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">{row.arcco.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Motor Section ── */}
                <motion.div {...fadeUp(0.1)} className="text-center mb-16">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">O que faz a Arcco ser diferente</p>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">O Nosso Motor de Execução</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                        Não conectamos a sua empresa a um simples "modelo de linguagem".
                        Damos um <span className="text-foreground font-medium">computador virtual hiper-rápido para a sua IA trabalhar</span>.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {motorItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: 'easeOut' }}
                            className="group relative h-full"
                        >
                            {/* Outer animated border glow on hover */}
                            <div
                                className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[6px] pointer-events-none"
                                style={{ background: `linear-gradient(45deg, ${item.blobColor}, transparent, ${item.blobColor2})` }}
                            />

                            {/* Card surface */}
                            <div className={`relative h-full rounded-2xl border ${item.border} bg-gray-900/60 backdrop-blur-xl p-8 overflow-hidden flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]`}>

                                {/* Floating animated background blobs */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 blur-[40px] pointer-events-none transition-opacity duration-700"
                                    style={{
                                        backgroundColor: item.blobColor,
                                        animation: 'float-blob 8s ease-in-out infinite',
                                        animationDelay: `${i * 1.5}s`
                                    }}
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-[40px] pointer-events-none transition-opacity duration-700"
                                    style={{
                                        backgroundColor: item.blobColor2,
                                        animation: 'float-blob 10s ease-in-out infinite reverse',
                                    }}
                                />

                                {/* Animated Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 6 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-xl bg-gray-950/80 border border-white/5 mb-8 ${item.iconColor} shadow-xl group-hover:border-white/10 transition-colors duration-300`}
                                >
                                    <div className="absolute inset-0 rounded-xl bg-current opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300" />
                                    {item.icon}
                                </motion.div>

                                {/* Text Content */}
                                <h4 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {item.title}
                                </h4>
                                <p className="relative z-10 text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {item.desc}
                                </p>

                                {/* Decorative sub-icon / sparkle */}
                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4">
                                    <Sparkles className={`w-5 h-5 ${item.iconColor} animate-pulse`} />
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
