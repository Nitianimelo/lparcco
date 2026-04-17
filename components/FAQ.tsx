'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'A Arcco é uma ferramenta de criação de conteúdo com IA?',
    a: 'Sim — e vai muito além disso. Movida pelo Arcco Tera, nosso modelo proprietário de IA, a plataforma gera posts, carrosséis, imagens para marketing, apresentações em slides e relatórios em PDF. Você descreve o que precisa e recebe o arquivo final pronto para publicar, enviar ou apresentar. Sem copiar texto, sem ferramentas extras, sem precisar de designer.',
  },
  {
    q: 'Como usar IA para criar posts automáticos nas redes sociais?',
    a: 'Com a Arcco, você descreve o que quer — um post para o Instagram sobre uma promoção, por exemplo — e o agente planeja, escreve a legenda, gera a arte e entrega tudo no formato certo. É possível criar sequências de conteúdo para a semana inteira em minutos. A automação de redes sociais com IA deixa de ser um processo manual e passa a ser uma delegação real de tarefas.',
  },
  {
    q: 'A Arcco gera textos e imagens para marketing?',
    a: 'Sim. A plataforma combina mais de 50 modelos de linguagem globais (GPT-4, Claude, Gemini, Deepseek e outros) com capacidade de geração visual. Você pede uma campanha de marketing, a Arcco escreve os textos, gera as imagens e ainda organiza tudo em um arquivo físico para download. É o gerador de conteúdo para marketing mais completo disponível em português do Brasil.',
  },
  {
    q: 'O que diferencia a Arcco do ChatGPT e do Claude?',
    a: 'A diferença fundamental é que ChatGPT e Claude são ferramentas de conversa — eles respondem com texto e param por aí. A Arcco é uma plataforma de execução construída sobre o Arcco Tera, nosso próprio modelo de IA. Enquanto outras ferramentas entregam um bloco de texto para você copiar e formatar, a Arcco abre um navegador invisível, navega em sites reais, analisa até 50 PDFs simultaneamente, gera slides, planilhas, imagens e PDFs prontos — e te entrega o botão de download. Além disso, a Arcco se integra nativamente com APIs brasileiras como Receita Federal, ViaCEP, Open Finance e NF-e. Para uma empresa no Brasil, isso muda completamente o jogo.',
  },
  {
    q: 'Qual a melhor plataforma de IA para pequenas e médias empresas no Brasil em 2026?',
    a: 'A Arcco foi criada especificamente para PMEs brasileiras. Enquanto as grandes plataformas globais são genéricas e em inglês, a Arcco é plug-and-play, opera 100% em português e não exige equipe técnica. Com planos a partir de R$ 99,90/mês, ela substitui as assinaturas de ChatGPT, Gemini, Grok e ferramentas de design — com a vantagem de executar tarefas de ponta a ponta, não só responder perguntas.',
  },
  {
    q: 'O que é um agente de IA autônomo e como a Arcco usa isso?',
    a: 'Um agente de IA autônomo é um sistema que recebe um objetivo, planeja os passos necessários e os executa de forma independente — sem precisar de supervisão humana em cada etapa. A Arcco disponibiliza um Cloud Computer Agent: um computador virtual na nuvem que navega em sites, preenche formulários, extrai dados, gera arquivos e organiza informações por você. É RPA Cognitivo — automação empresarial movida por inteligência artificial.',
  },
  {
    q: 'Preciso saber programar para usar a Arcco?',
    a: 'Não. A proposta da Arcco é ser 100% plug-and-play. Você acessa a plataforma, descreve o que precisa em português e a IA cuida do restante. Não há instalação, código, ou configuração técnica. Em menos de uma hora qualquer pessoa da equipe já consegue delegar tarefas reais para os agentes de IA.',
  },
  {
    q: 'Como a Arcco se diferencia de ferramentas de automação tradicionais (RPA)?',
    a: 'Ferramentas de RPA tradicionais (como UiPath ou Automation Anywhere) precisam de um desenvolvedor para programar cada fluxo. A Arcco é um RPA Cognitivo: você descreve a tarefa em linguagem natural e o agente decide como executá-la, inclusive lidando com variações e imprevistos. É a automação empresarial com IA sem necessidade de TI.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary/80 text-xs font-semibold mb-5 tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas frequentes
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Ainda tem{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              dúvidas?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Respondemos as perguntas mais comuns sobre a plataforma.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/8 bg-gray-900/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-white/3 transition-colors duration-200 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-sm sm:text-base font-medium text-gray-100 leading-snug">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-primary"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
