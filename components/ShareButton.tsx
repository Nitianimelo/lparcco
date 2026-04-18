'use client'

import { Share2, Download } from 'lucide-react'
import { useState } from 'react'

export function ShareButton({ postId, title }: { postId: string; title: string }) {
  const [loading, setLoading] = useState(false)

  async function handleShare() {
    setLoading(true)
    try {
      const res = await fetch(`/api/og/${postId}`)
      const blob = await res.blob()
      const file = new File([blob], 'arcco-blog.png', { type: 'image/png' })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title })
      } else {
        // Desktop: baixa a imagem
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'arcco-blog.png'
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch {
      // usuário cancelou — ignora
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleShare}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all disabled:opacity-40 cursor-pointer"
    >
      {loading ? (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
        </svg>
      ) : (
        <Share2 className="w-4 h-4" />
      )}
      {loading ? 'Gerando...' : 'Compartilhar'}
    </button>
  )
}
