'use client'

import { Share2, Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function ShareButton({ title, subtitle }: { title: string; subtitle?: string }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title, text: subtitle || title, url })
      } catch {
        // usuário cancelou — ignora
      }
      return
    }

    // Desktop: copia o link
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-green-400">Link copiado!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Compartilhar
        </>
      )}
    </button>
  )
}
