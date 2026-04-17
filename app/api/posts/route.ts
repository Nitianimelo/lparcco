import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const POSTS_FILE = path.join(process.cwd(), 'data', 'posts.json')

function readPosts() {
  if (!fs.existsSync(POSTS_FILE)) {
    fs.mkdirSync(path.dirname(POSTS_FILE), { recursive: true })
    fs.writeFileSync(POSTS_FILE, '[]')
  }
  return JSON.parse(fs.readFileSync(POSTS_FILE, 'utf-8'))
}

function writePosts(posts: unknown[]) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2))
}

export async function GET() {
  const posts = readPosts()
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const posts = readPosts()

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
  writePosts(posts)
  return NextResponse.json(newPost, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  const posts = readPosts()
  const filtered = posts.filter((p: { id: string }) => p.id !== id)
  writePosts(filtered)

  // Remove audio file if exists
  const audioFile = path.join(process.cwd(), 'public', 'audio', `${id}.mp3`)
  if (fs.existsSync(audioFile)) fs.unlinkSync(audioFile)

  return NextResponse.json({ success: true })
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  const posts = readPosts()
  const idx = posts.findIndex((p: { id: string }) => p.id === body.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  posts[idx] = { ...posts[idx], ...body }
  writePosts(posts)
  return NextResponse.json(posts[idx])
}
