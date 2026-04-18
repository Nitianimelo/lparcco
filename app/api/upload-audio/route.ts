import { NextRequest, NextResponse } from 'next/server'
import { getStore } from '@netlify/blobs'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const id = formData.get('id') as string | null

  if (!file || !id) {
    return NextResponse.json({ error: 'Arquivo ou ID ausente' }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()

  try {
    const store = getStore('audio')
    await store.set(id, arrayBuffer, { metadata: { contentType: 'audio/mpeg' } })
    return NextResponse.json({ audioUrl: `/api/audio/${id}` })
  } catch {
    // Local dev fallback: write to public/audio/
    const audioDir = path.join(process.cwd(), 'public', 'audio')
    fs.mkdirSync(audioDir, { recursive: true })
    fs.writeFileSync(path.join(audioDir, `${id}.mp3`), Buffer.from(arrayBuffer))
    return NextResponse.json({ audioUrl: `/audio/${id}.mp3` })
  }
}
