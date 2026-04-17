'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
    Monitor,
    Globe,
    FileText,
    Terminal,
    Cpu,
    Bot,
    CloudLightning,
    MousePointerClick,
    HardDrive,
    FolderOpen,
    ArrowRight,
    Wifi,
} from 'lucide-react'

const terminalLines = [
    { text: '> Iniciando Arcco Cloud Agent...', color: 'text-green-400' },
    { text: '> Conectando ao ambiente virtual...', color: 'text-blue-400' },
    { text: '> Abrindo navegador real...', color: 'text-purple-400' },
    { text: '> Acessando Google Analytics...', color: 'text-yellow-400' },
    { text: '> Extraindo dados de tráfego...', color: 'text-cyan-400' },
    { text: '> Gerando planilha consolidada...', color: 'text-blue-400' },
    { text: '> Enviando relatório por email...', color: 'text-purple-400' },
    { text: '✓ Tarefa concluída com sucesso!', color: 'text-emerald-400' },
]

const capabilities = [
    { icon: Globe, label: 'Navega em sites reais', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
    { icon: FileText, label: 'Gera e edita arquivos', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
    { icon: MousePointerClick, label: 'Clica e interage', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
    { icon: FolderOpen, label: 'Organiza pastas', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
]

function AnimatedTerminal() {
    const [visibleLines, setVisibleLines] = useState(0)
    const [cycle, setCycle] = useState(0)

    useEffect(() => {
        const timeouts: ReturnType<typeof setTimeout>[] = []

        setVisibleLines(0)

        terminalLines.forEach((_, i) => {
            const t = setTimeout(() => {
                setVisibleLines(i + 1)
            }, 600 + i * 900)
            timeouts.push(t)
        })

        const resetTimeout = setTimeout(() => {
            setCycle(c => c + 1)
        }, 600 + terminalLines.length * 900 + 1200)
        timeouts.push(resetTimeout)

        return () => timeouts.forEach(clearTimeout)
    }, [cycle])

    return (
        <div className="p-4 bg-gray-950 min-h-[260px] font-mono text-xs leading-relaxed">
            <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-3 h-3 text-green-400" />
                <span className="text-green-400/60">arcco@cloud-agent</span>
                <span className="text-muted-foreground/40">~$</span>
            </div>

            <div className="space-y-2">
                {terminalLines.map((line, i) => (
                    <motion.div
                        key={`${cycle}-${i}`}
                        initial={{ opacity: 0, x: -8 }}
                        animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ duration: 0.25 }}
                        className={`${line.color} ${i === terminalLines.length - 1 ? 'font-semibold' : ''}`}
                    >
                        {line.text}
                    </motion.div>
                ))}

                {visibleLines > 0 && visibleLines < terminalLines.length && (
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.65, repeat: Infinity }}
                        className="inline-block w-1.5 h-3.5 bg-green-400 align-middle"
                    />
                )}
            </div>
        </div>
    )
}

export default function CloudComputerAgent() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="relative py-28 overflow-hidden bg-background">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[600px] bg-blue-600/8 rounded-full blur-[130px]" />
                <div className="absolute top-1/3 right-0 w-[450px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div ref={ref} className="relative container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* ─── Left: Copy ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground/90 mb-6 backdrop-blur-sm"
                        >
                            <Cpu className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium tracking-wide">Cloud Computer Agent</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Nossa IA tem{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                um computador próprio
                            </span>{' '}
                            para trabalhar por você.
                        </h2>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
                            Esqueça chatbots de texto. O Arcco.ai roda em um{' '}
                            <span className="text-foreground font-medium">computador virtual completo na nuvem</span> —
                            com navegador real, sistema de arquivos e terminal próprio.
                            Ele não responde. Ele <span className="text-foreground font-medium">executa</span>.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    className={`flex items-center gap-3 rounded-xl border p-3.5 ${cap.bg}`}
                                >
                                    <cap.icon className={`w-4 h-4 shrink-0 ${cap.color}`} />
                                    <span className="text-sm text-foreground/80 font-medium">{cap.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Ver o agente em ação
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* ─── Right: Animated Computer ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Floating status badges */}
                        <motion.div
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-5 -right-4 z-20 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-lg"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs font-semibold">Agente Ativo</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                            className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-lg"
                        >
                            <CloudLightning className="w-3 h-3 text-blue-400" />
                            <span className="text-blue-400 text-xs font-semibold">Cloud Native</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                            className="absolute top-1/2 -right-8 z-20 hidden xl:flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-lg"
                        >
                            <Wifi className="w-3 h-3 text-purple-400" />
                            <span className="text-purple-400 text-xs font-semibold">Latência: 12ms</span>
                        </motion.div>

                        {/* Monitor body */}
                        <div className="relative mx-auto max-w-[480px]">
                            {/* Glow behind monitor */}
                            <div className="absolute inset-8 bg-primary/20 blur-3xl rounded-full" />

                            <div className="relative rounded-2xl border border-white/10 bg-gray-950/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/60">
                                {/* Title bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    </div>
                                    <div className="flex-1 mx-3">
                                        <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1 text-[11px] text-muted-foreground/60 text-center truncate">
                                            arcco-cloud-agent &nbsp;·&nbsp; session #4829
                                        </div>
                                    </div>
                                    <Bot className="w-4 h-4 text-primary" />
                                </div>

                                {/* Terminal */}
                                <AnimatedTerminal />

                                {/* Taskbar */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-black/40">
                                    <div className="flex items-center gap-2">
                                        {[Globe, FileText, HardDrive, Terminal].map((Icon, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.25, backgroundColor: 'rgba(255,255,255,0.12)' }}
                                                className="w-6 h-6 flex items-center justify-center rounded bg-white/5 transition-colors cursor-pointer border border-white/5"
                                            >
                                                <Icon className="w-3.5 h-3.5 text-muted-foreground/70" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                                        />
                                        <span className="text-muted-foreground/40 text-[11px] font-mono">CPU 23%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stand */}
                            <div className="flex justify-center -mt-px">
                                <div className="w-20 h-2.5 bg-white/4 border-x border-b border-white/8 rounded-b-lg" />
                            </div>
                            <div className="flex justify-center mt-0.5">
                                <div className="w-28 h-1 bg-white/4 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom statement bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 rounded-2xl border border-primary/15 bg-primary/5 px-8 py-7 max-w-4xl mx-auto text-center"
                >
                    <p className="text-xl sm:text-2xl font-bold text-foreground/90 leading-snug">
                        Enquanto você dorme, o Arcco está no computador dele —
                        {' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            abrindo abas, preenchendo planilhas, enviando emails e entregando resultados.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
