'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp, CheckCircle } from 'lucide-react'

const depoimentos = [
  {
    name: 'Rafaela S.',
    city: 'São Paulo, SP',
    avatar: 'RS',
    rating: 5,
    title: 'Melhor ferramenta de IA que já usei',
    text: 'Já testei ChatGPT, Gemini e várias outras. A Arcco é a única que realmente executa o que você pede. Pedi um relatório completo com gráficos e ela entregou o arquivo pronto em minutos. Não tem comparação.',
    date: '12 abr. 2026',
    helpful: 34,
    verified: true,
  },
  {
    name: 'Carlos M.',
    city: 'Belo Horizonte, MG',
    avatar: 'CM',
    rating: 5,
    title: 'Economizei horas por semana na contabilidade',
    text: 'Sou contador e uso pra analisar planilhas e gerar relatórios de fechamento. O que levava 2 dias agora sai em menos de 1 hora. Suporte respondeu na hora quando tive dúvida. Recomendo muito.',
    date: '08 abr. 2026',
    helpful: 27,
    verified: true,
  },
  {
    name: 'Juliana A.',
    city: 'Rio de Janeiro, RJ',
    avatar: 'JA',
    rating: 5,
    title: 'Triplicou minha produção de conteúdo',
    text: 'Gerencio o marketing de 3 marcas. Antes passava o dia todo criando posts. Agora descrevo o que quero e a Arcco gera a arte e o texto. Em 1 tarde faço o conteúdo da semana inteira das 3 marcas.',
    date: '05 abr. 2026',
    helpful: 51,
    verified: true,
  },
  {
    name: 'Thiago F.',
    city: 'Curitiba, PR',
    avatar: 'TF',
    rating: 5,
    title: 'Pesquisa de concorrentes automatizada',
    text: 'Minha equipe fazia pesquisa de mercado manualmente, levava 2 dias. Com o Cloud Computer Agent da Arcco, em 15 minutos tenho uma planilha completa com preços, produtos e análise dos concorrentes. Impressionante.',
    date: '01 abr. 2026',
    helpful: 43,
    verified: true,
  },
  {
    name: 'Amanda C.',
    city: 'Recife, PE',
    avatar: 'AC',
    rating: 5,
    title: 'Analisei 30 contratos em menos de 20 minutos',
    text: 'Sou advogada e precisava revisar contratos com urgência. Fiz upload de 30 PDFs e a Arcco extraiu os pontos críticos de cada um com um resumo por contrato. Salvou meu prazo. Produto incrível.',
    date: '28 mar. 2026',
    helpful: 62,
    verified: true,
  },
  {
    name: 'Roberto L.',
    city: 'Fortaleza, CE',
    avatar: 'RL',
    rating: 5,
    title: 'Nunca pensei que seria tão fácil',
    text: 'Tenho pet shop e não entendo nada de tecnologia. Em menos de 1 hora já tava usando. Agora a IA responde meus clientes no WhatsApp automaticamente com informações do meu negócio. Simplesmente funciona.',
    date: '25 mar. 2026',
    helpful: 38,
    verified: true,
  },
  {
    name: 'Fernanda O.',
    city: 'Porto Alegre, RS',
    avatar: 'FO',
    rating: 5,
    title: 'Substituiu 4 assinaturas que eu pagava',
    text: 'Pagava separado por ChatGPT, Canva Pro, Jasper e uma ferramenta de planilha com IA. A Arcco faz tudo isso e mais. Economizei quase R$ 400 por mês e ainda tenho mais recursos. Não tem lógica não usar.',
    date: '20 mar. 2026',
    helpful: 29,
    verified: true,
  },
  {
    name: 'Diego B.',
    city: 'Salvador, BA',
    avatar: 'DB',
    rating: 5,
    title: 'Geração de slides profissional em minutos',
    text: 'Precisava de uma apresentação para investidores. Descrevi o negócio, pedi os slides e em 4 minutos tinha uma apresentação completa com design profissional. Ajustei alguns detalhes e apresentei. Fechei o aporte.',
    date: '15 mar. 2026',
    helpful: 74,
    verified: true,
  },
  {
    name: 'Patrícia N.',
    city: 'Campinas, SP',
    avatar: 'PN',
    rating: 5,
    title: 'Atendimento e produto de altíssimo nível',
    text: 'Tive uma dúvida técnica sobre integração e o suporte resolveu em menos de 10 minutos via chat. Além do atendimento, o produto em si é surreal. Uso todo dia para criar conteúdo e automatizar tarefas repetitivas.',
    date: '10 mar. 2026',
    helpful: 21,
    verified: true,
  },
]

const avatarColors: Record<string, string> = {
  RS: 'from-purple-500 to-pink-500',
  CM: 'from-blue-500 to-cyan-500',
  JA: 'from-emerald-500 to-teal-500',
  TF: 'from-orange-500 to-amber-500',
  AC: 'from-violet-500 to-purple-500',
  RL: 'from-blue-500 to-indigo-500',
  FO: 'from-rose-500 to-pink-500',
  DB: 'from-yellow-500 to-orange-500',
  PN: 'from-teal-500 to-emerald-500',
}

function ReviewCard({ dep }: { dep: typeof depoimentos[0] }) {
  return (
    <div className="flex-shrink-0 w-80 rounded-2xl border border-white/8 bg-gray-900/50 backdrop-blur-sm p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[dep.avatar]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {dep.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-white leading-none">{dep.name}</p>
              {dep.verified && (
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{dep.city}</p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-0.5 flex-shrink-0">
          {Array.from({ length: dep.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-gray-100 leading-snug">{dep.title}</p>

      {/* Text */}
      <p className="text-xs text-gray-400 leading-relaxed flex-1">{dep.text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/6">
        <span className="text-[11px] text-gray-600">{dep.date}</span>
        <div className="flex items-center gap-1 text-[11px] text-gray-600">
          <ThumbsUp className="w-3 h-3" />
          <span>{dep.helpful} acharam útil</span>
        </div>
      </div>
    </div>
  )
}

const allCards = [...depoimentos, ...depoimentos, ...depoimentos]

export default function Depoimentos() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <style>{`
        @keyframes marquee-reviews {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .reviews-track {
          animation: marquee-reviews 55s linear infinite;
          display: flex;
          gap: 1.25rem;
          width: max-content;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-5 tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            +500 empresas aprovam
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Quem usa a Arcco{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              não volta atrás
            </span>
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-sm text-muted-foreground">de 5 — baseado em +300 avaliações</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="reviews-track px-5">
          {allCards.map((dep, i) => (
            <ReviewCard key={i} dep={dep} />
          ))}
        </div>
      </div>
    </section>
  )
}
