import type { Metadata } from 'next'
import { readPosts } from '@/lib/posts-store'
import { GlassBlogCard } from '@/components/ui/glass-blog-card-shadcnui'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog — Inteligência Artificial para Negócios',
  description:
    'Aprenda como usar IA para automatizar processos, criar conteúdo, analisar documentos e escalar seu negócio. Artigos práticos do time Arcco.',
}

const posts = [
  {
    title: 'Arcco Tera: o modelo de IA criado para o mercado brasileiro',
    excerpt:
      'Entenda como desenvolvemos um modelo proprietário que entende jargão local, APIs brasileiras e o contexto real das PMEs no Brasil.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    author: { name: 'Time Arcco', avatar: '' },
    date: '15 Abr 2026',
    readTime: '6 min de leitura',
    tags: ['Arcco Tera', 'IA'],
    href: '#',
  },
  {
    title: 'Como analisar 50 contratos em 15 minutos com inteligência artificial',
    excerpt:
      'Um passo a passo prático para advogados, contadores e gestores que precisam extrair informações críticas de documentos em segundos.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
    author: { name: 'Juliana Alves', avatar: '' },
    date: '10 Abr 2026',
    readTime: '8 min de leitura',
    tags: ['Documentos', 'PDFs'],
    href: '#',
  },
  {
    title: 'Geração de slides profissionais com IA: guia completo para PMEs',
    excerpt:
      'Esqueça o PowerPoint hora a hora. Aprenda a criar apresentações completas — com design e conteúdo — em menos de 3 minutos usando IA.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    author: { name: 'Carlos Menezes', avatar: '' },
    date: '05 Abr 2026',
    readTime: '5 min de leitura',
    tags: ['Slides', 'Produtividade'],
    href: '#',
  },
  {
    title: 'IA para automação de redes sociais: como criar posts automáticos',
    excerpt:
      'Da legenda à arte final: veja como usar agentes de IA para produzir e agendar uma semana inteira de conteúdo em uma única sessão.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    author: { name: 'Rafaela Souza', avatar: '' },
    date: '01 Abr 2026',
    readTime: '7 min de leitura',
    tags: ['Marketing', 'Redes Sociais'],
    href: '#',
  },
  {
    title: 'RPA Cognitivo vs. chatbots tradicionais: qual a diferença real?',
    excerpt:
      'Por que um chatbot que só responde não é suficiente para o seu negócio — e como agentes de execução autônoma mudam o jogo completamente.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    author: { name: 'Time Arcco', avatar: '' },
    date: '28 Mar 2026',
    readTime: '6 min de leitura',
    tags: ['RPA', 'Agentes'],
    href: '#',
  },
  {
    title: 'Como economizar R$ 500 por mês trocando 5 assinaturas de IA por uma',
    excerpt:
      'ChatGPT, Gemini, Jasper, Canva e ferramentas de planilha — some tudo e veja quanto você gasta. Existe uma alternativa mais barata e mais poderosa.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    author: { name: 'Roberto Lima', avatar: '' },
    date: '20 Mar 2026',
    readTime: '4 min de leitura',
    tags: ['Economia', 'SaaS'],
    href: '#',
  },
]

type AdminPost = { id: string; title: string; subtitle?: string; author: string; coverImage: string; tags: string[]; date: string; readTime: string }

export default async function BlogPage() {
  const adminPosts = (await readPosts()) as AdminPost[]

  // Merge: admin posts first, then hardcoded as fallback if no admin posts
  const allPosts = adminPosts.length > 0
    ? adminPosts.map((p) => ({
        title: p.title,
        excerpt: p.subtitle || '',
        image: p.coverImage,
        author: { name: p.author || 'Time Arcco', avatar: '' },
        date: p.date,
        readTime: p.readTime,
        tags: p.tags,
        href: `/blog/${p.id}`,
      }))
    : posts

  return (
    <div className="relative min-h-screen bg-black">
      <Header />

      <main className="relative z-10 pt-24 pb-32">

        {/* ── Hero do Blog ── */}
        <section className="relative overflow-hidden">
          {/* Banner azul escuro de ponta a ponta */}
          <div className="w-full bg-black py-20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400/60 mb-6">
                Arcco Blog
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Domine a Inteligência Artificial
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Guias práticos, análises profundas e as últimas novidades sobre IA generativa, ferramentas e aplicações para transformar seu trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* ── Grade de posts ── */}
        <section className="relative py-16">
          {/* Fundo clareado com toque roxo em degradê */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080608] to-[#0a080e] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(100,40,180,0.04),transparent)] pointer-events-none" />

          <div className="relative container mx-auto px-4 max-w-6xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 mb-8">Artigos recentes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post: typeof posts[0], i: number) => (
                <GlassBlogCard
                  key={i}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                  href={post.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="container mx-auto px-4 max-w-xl mt-24 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 mb-4">Newsletter</p>
          <h3 className="text-xl font-semibold text-white mb-2">
            Receba os próximos artigos
          </h3>
          <p className="text-sm text-gray-600 mb-8">
            Conteúdo prático sobre IA para negócios. Sem spam.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="seu@email.com.br"
              className="flex-1 bg-white/4 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/20 transition-colors placeholder:text-gray-700"
            />
            <button className="bg-white hover:bg-gray-100 text-black px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Assinar
            </button>
          </div>
        </section>

      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
