import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const id = formData.get('id') as string | null

  if (!file || !id) {
    return NextResponse.json({ error: 'Arquivo ou ID ausente' }, { status: 400 })
  }

  const audioDir = path.join(process.cwd(), 'public', 'audio')
  fs.mkdirSync(audioDir, { recursive: true })

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${id}.mp3`
  fs.writeFileSync(path.join(audioDir, filename), buffer)

  return NextResponse.json({ audioUrl: `/audio/${filename}` })
}
