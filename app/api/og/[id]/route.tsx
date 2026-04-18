import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { readPosts } from '@/lib/posts-store'

type Post = {
  id: string
  title: string
  subtitle?: string
  author: string
  coverImage?: string
  tags?: string[]
  date: string
  readTime: string
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const posts = (await readPosts()) as Post[]
  const post = posts.find(p => p.id === params.id)
  if (!post) return new Response('Not found', { status: 404 })

  let coverImageData: string | undefined
  if (post.coverImage) {
    try {
      const res = await fetch(post.coverImage)
      const buf = await res.arrayBuffer()
      const mime = res.headers.get('content-type') || 'image/jpeg'
      coverImageData = `data:${mime};base64,${Buffer.from(buf).toString('base64')}`
    } catch {
      // sem imagem — sem problema
    }
  }

  const title = post.title.length > 100 ? post.title.slice(0, 97) + '...' : post.title
  const subtitle = post.subtitle
    ? post.subtitle.length > 160 ? post.subtitle.slice(0, 157) + '...' : post.subtitle
    : ''
  const tags = (post.tags ?? []).slice(0, 3)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1080px',
          height: '1920px',
          background: 'linear-gradient(160deg, #09090b 0%, #0d0a18 60%, #0a0d1a 100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow de fundo */}
        <div
          style={{
            position: 'absolute',
            top: '200px',
            left: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Header — Arcco */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, letterSpacing: '0.08em' }}>
              ARCCO
            </div>
            <div style={{ color: '#6366f1', fontSize: '18px', letterSpacing: '0.2em', marginTop: '2px' }}>
              BLOG
            </div>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{
            color: '#374151',
            fontSize: '20px',
            letterSpacing: '0.15em',
          }}>
            arcco.ai
          </div>
        </div>

        {/* Cover image */}
        {coverImageData && (
          <div
            style={{
              width: '920px',
              height: '480px',
              borderRadius: '20px',
              marginBottom: '56px',
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            <img
              src={coverImageData}
              style={{ width: '920px', height: '480px', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            {tags.map(tag => (
              <div
                key={tag}
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: '#818cf8',
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  padding: '8px 22px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Linha divisória */}
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
          borderRadius: '2px',
          marginBottom: '36px',
          display: 'flex',
        }} />

        {/* Title */}
        <div
          style={{
            color: '#ffffff',
            fontSize: coverImageData ? '64px' : '80px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '36px',
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              color: '#9ca3af',
              fontSize: '32px',
              lineHeight: 1.55,
              marginBottom: '64px',
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ color: '#e5e7eb', fontSize: '26px', fontWeight: 600 }}>
              {post.author.trim()}
            </div>
            <div style={{ color: '#4b5563', fontSize: '22px' }}>
              {post.date} · {post.readTime}
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '12px',
              padding: '14px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <div style={{ color: '#818cf8', fontSize: '20px', fontWeight: 700, letterSpacing: '0.1em' }}>
              LEIA AGORA
            </div>
            <div style={{ color: '#4b5563', fontSize: '18px', letterSpacing: '0.05em' }}>
              arcco.ai/blog
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1080, height: 1920 }
  )
}
