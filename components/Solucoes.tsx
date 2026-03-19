'use client'

import { motion } from 'framer-motion'
import { MessageCircle, HeadphonesIcon, Globe, Server, Bot, BarChart3, Mail, FileText, ShoppingCart, Calendar, ArrowRight, Sparkles } from 'lucide-react'

const solucoes = [
    {
        icon: MessageCircle,
        title: 'SDR com IA no WhatsApp',
        description: 'Prospecte, qualifique e agende reuniões automaticamente direto no WhatsApp. Seu time de vendas só entra quando o lead já está quente.',
        tag: 'Vendas',
        tagColor: 'bg-green-500/10 text-green-400 border-green-500/20',
        highlight: true,
    },
    {
        icon: HeadphonesIcon,
        title: 'Suporte Automatizado 24/7',
        description: 'Resolva até 80% dos chamados sem intervenção humana. Integra com seu sistema atual e escala sem contratar.',
        tag: 'Suporte',
        tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    {
        icon: Globe,
        title: 'Gerador de Landing Pages',
        description: 'Crie páginas de alta conversão com IA em minutos. Sem código, sem designer, sem agência.',
        tag: 'Marketing',
        tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        highlight: true,
    },
    {
        icon: Server,
        title: 'Hospedagem Incluída',
        description: 'Publique suas páginas com um clique. Domínio personalizado, SSL e CDN global — tudo gerenciado para você.',
        tag: 'Infraestrutura',
        tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    },
    {
        icon: Mail,
        title: 'Campanhas de E-mail com IA',
        description: 'Sequências personalizadas que se adaptam ao comportamento do lead. Copy escrita e enviada automaticamente.',
        tag: 'Marketing',
        tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
        icon: BarChart3,
        title: 'Relatórios Inteligentes',
        description: 'Dashboards gerados automaticamente com insights acionáveis. Saiba o que está funcionando sem precisar analisar planilhas.',
        tag: 'Analytics',
        tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    },
    {
        icon: Bot,
        title: 'Agente de RH Interno',
        description: 'Responde dúvidas de colaboradores, processa solicitações e automatiza onboarding — sem sobrecarregar o RH.',
        tag: 'Operações',
        tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    {
        icon: FileText,
        title: 'Gerador de Contratos e Propostas',
        description: 'Crie documentos profissionais em segundos a partir de um briefing. Personalizados, revisados e prontos para assinar.',
        tag: 'Jurídico',
        tagColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    },
    {
        icon: ShoppingCart,
        title: 'Recuperação de Carrinho Abandonado',
        description: 'Identifica clientes que desistiram e dispara mensagens personalizadas no canal certo, na hora certa.',
        tag: 'E-commerce',
        tagColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    },
    {
        icon: Calendar,
        title: 'Agendamento Inteligente',
        description: 'Seu agente de IA agenda reuniões, confirma presenças e envia lembretes — sem vai-e-vem de mensagens.',
        tag: 'Produtividade',
        tagColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Solucoes() {
    return (
        <section id="solucoes" className="relative py-28 overflow-hidden bg-background">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-gray-400 mb-6 backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span>Plug &amp; Play</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Mais de 10 soluções prontas{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            para o seu negócio
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Implemente em minutos. Sem código, sem equipe técnica, sem dor de cabeça.
                        Cada solução já vem configurada e pronta para gerar resultado.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {solucoes.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className={`group relative rounded-2xl border p-6 transition-all duration-300 cursor-default
                ${s.highlight
                                    ? 'border-primary/25 bg-primary/5 hover:border-primary/40 hover:bg-primary/10'
                                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                                }`}
                        >
                            {s.highlight && (
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                            )}

                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-2.5 rounded-xl ${s.highlight ? 'bg-primary/15' : 'bg-white/5'}`}>
                                    <s.icon className={`w-5 h-5 ${s.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                                </div>
                                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border tracking-wider uppercase ${s.tagColor}`}>
                                    {s.tag}
                                </span>
                            </div>

                            <h3 className="font-semibold text-foreground mb-2 text-base leading-snug">
                                {s.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {s.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* "E muito mais" card */}
                    <motion.div
                        variants={cardVariants}
                        className="rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/30 transition-colors duration-300 cursor-default"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                            E muito mais sendo lançado toda semana
                        </p>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
                    >
                        Ver todas as soluções
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
