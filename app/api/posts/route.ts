import { NextRequest, NextResponse } from 'next/server'
import { readPosts, writePosts } from '@/lib/posts-store'
import { getStore } from '@netlify/blobs'

type Post = Record<string, unknown> & { id: string }

export async function GET() {
  const posts = await readPosts()
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const posts = (await readPosts()) as Post[]

  const now = new Date()
  const dateLabel = now.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })

  const newPost = {
    id: Date.now().toString(),
    title: body.title,
    subtitle: body.subtitle,
    author: body.author,
    coverImage: body.coverImage,
    tags: body.tags || [],
    blocks: body.blocks || [],
    date: dateLabel,
    readTime: body.readTime || '5 min de leitura',
    audioUrl: body.audioUrl ?? null,
    createdAt: now.toISOString(),
  }

  posts.unshift(newPost)
  await writePosts(posts)
  return NextResponse.json(newPost, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  const posts = (await readPosts()) as Post[]
  const filtered = posts.filter(p => p.id !== id)
  await writePosts(filtered)

  try {
    const audioStore = getStore('audio')
    await audioStore.delete(id)
  } catch {
    // audio may not exist or blobs unavailable — ignore
  }

  return NextResponse.json({ success: true })
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  const posts = (await readPosts()) as Post[]
  const idx = posts.findIndex(p => p.id === body.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  posts[idx] = { ...posts[idx], ...body }
  await writePosts(posts)
  return NextResponse.json(posts[idx])
}
