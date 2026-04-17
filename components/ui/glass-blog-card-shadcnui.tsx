'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

interface GlassBlogCardProps {
  title?: string
  excerpt?: string
  image?: string
  author?: {
    name: string
    avatar: string
  }
  date?: string
  readTime?: string
  tags?: string[]
  className?: string
  href?: string
}

const defaultPost = {
  title: 'O Futuro da IA para Empresas Brasileiras',
  excerpt:
    'Como o Arcco Tera está transformando a forma como PMEs automatizam processos com inteligência artificial.',
  image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  author: { name: 'Time Arcco', avatar: '' },
  date: '15 Abr 2026',
  readTime: '5 min de leitura',
  tags: ['IA', 'Automação'],
}

export function GlassBlogCard({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readTime = defaultPost.readTime,
  tags = defaultPost.tags,
  className,
  href = '#',
}: GlassBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn('w-full', className)}
    >
      <a href={href} className="block h-full cursor-pointer">
        <Card className="group relative h-96 overflow-hidden border-white/8 transition-all duration-300 hover:border-white/15 hover:-translate-y-1">

          {/* Imagem cobrindo o card todo */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Sombra preta pesada na base */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Tags no topo */}
          <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-black/50 backdrop-blur-sm border border-white/15 text-gray-200 text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* "Ler artigo" suave — aparece no hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium text-white/50 tracking-widest uppercase">
              Ler artigo
            </span>
          </div>

          {/* Conteúdo fixado na base */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
            <h3 className="text-base font-semibold leading-snug text-white line-clamp-2">
              {title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
              {excerpt}
            </p>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-gray-500">{date}</span>
              <div className="flex items-center gap-1 text-[11px] text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>

        </Card>
      </a>
    </motion.div>
  )
}
