import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { Lora } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { ReadingProgress } from '@/components/ui/reading-progress'
import { AudioPlayer } from '@/components/ui/audio-player'

export const dynamic = 'force-dynamic'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

interface Block {
  id: string
  type: 'text' | 'image'
  content: string
}

interface Post {
  id: string
  title: string
  subtitle: string
  author: string
  coverImage: string
  tags: string[]
  blocks: Block[]
  date: string
  readTime: string
  audioUrl?: string | null
}

function getPosts(): Post[] {
  const file = path.join(process.cwd(), 'data', 'posts.json')
  if (!fs.existsSync(file)) return []
  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const posts = getPosts()
  const post = posts.find(p => p.id === params.id)
  if (!post) notFound()


  return (
    <div className="relative min-h-screen bg-black">
      <ReadingProgress />
      <Header />

      <main className="relative z-10 pt-24 pb-40">

        {/* Back — fora da caixa */}
        <div className="container mx-auto px-6 max-w-4xl mb-8">
          <a href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-white transition-colors tracking-wide">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </a>
        </div>

        {/* Caixa principal — do título ao fim do conteúdo */}
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="rounded-2xl bg-[#0e0e0e] px-10 sm:px-16 py-14">

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-7">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
              {post.title}
            </h1>
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 opacity-70" />

            {/* Subtitle */}
            {post.subtitle && (
              <p className={`${lora.className} text-xl text-gray-400 leading-[1.8] mb-10 italic`}>
                {post.subtitle}
              </p>
            )}

            {/* Meta */}
            <div className="flex items-center gap-4 border-y border-white/6 py-4 mb-12">
              <p className="text-xs text-gray-600 tracking-widest uppercase">{post.date}</p>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-gray-600 tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
            </div>

            {/* Audio player — só aparece se o áudio foi gerado */}
            {post.audioUrl && <AudioPlayer src={post.audioUrl} />}

            {/* Cover image */}
            {post.coverImage && (
              <div className="rounded-xl overflow-hidden mb-14 aspect-[16/9]">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Blocks */}
            <div className="space-y-8 mb-14">
              {post.blocks?.map((block) => (
                <div key={block.id}>
                  {block.type === 'text' ? (
                    <p className={`${lora.className} text-gray-300 text-[1.05rem] leading-[2.1] tracking-[0.02em] whitespace-pre-wrap`}>
                      {block.content}
                    </p>
                  ) : block.content ? (
                    <div className="rounded-xl overflow-hidden border border-white/6 my-10">
                      <img src={block.content} alt="" className="w-full object-cover" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* End card */}
            <div className="border-t border-white/6 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-600 tracking-widest uppercase mb-1">Arcco Blog</p>
                <p className={`${lora.className} text-gray-400 text-sm italic`}>Obrigado por ler até aqui.</p>
              </div>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors tracking-widest uppercase group"
              >
                Ver mais artigos
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </article>
        </div>

      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
