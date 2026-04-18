import { NextRequest, NextResponse } from 'next/server'
import { getStore } from '@netlify/blobs'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const store = getStore('audio')
    const { data, metadata } = await store.getWithMetadata(params.id, { type: 'arrayBuffer' })

    if (!data) {
      return new NextResponse(null, { status: 404 })
    }

    return new NextResponse(data as ArrayBuffer, {
      headers: {
        'Content-Type': (metadata?.contentType as string) || 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new NextResponse(null, { status: 404 })
  }
}
