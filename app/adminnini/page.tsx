'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Trash2, Image as ImageIcon, Type, LogOut, Eye, Save, ArrowLeft, GripVertical, X, Music, CheckCircle2, Loader2 } from 'lucide-react'

const ADMIN_USER = 'nini'
const ADMIN_PASS = '96947188'

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
  createdAt: string
}

// ── Login ──────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      sessionStorage.setItem('arcco_admin', '1')
      onLogin()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 mb-4">
            <span className="text-primary text-xl font-bold">A</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Arcco</h1>
          <p className="text-gray-500 text-sm mt-1">Acesso restrito</p>
        </div>

        <form onSubmit={submit} className="bg-gray-900/60 border border-white/8 rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Usuário</label>
            <input
              value={user}
              onChange={e => { setUser(e.target.value); setError(false) }}
              className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="usuário"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Senha</label>
            <input
              type="password"
              value={pass}
              onChange={e => { setPass(e.target.value); setError(false) }}
              className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-400 text-xs">Usuário ou senha incorretos.</p>}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Block Editor ───────────────────────────────────────
function BlockEditor({ blocks, onChange }: { blocks: Block[]; onChange: (b: Block[]) => void }) {
  const addBlock = (type: 'text' | 'image') => {
    onChange([...blocks, { id: Date.now().toString(), type, content: '' }])
  }

  const updateBlock = (id: string, content: string) => {
    onChange(blocks.map(b => b.id === id ? { ...b, content } : b))
  }

  const removeBlock = (id: string) => {
    onChange(blocks.filter(b => b.id !== id))
  }

  const moveBlock = (idx: number, dir: -1 | 1) => {
    const arr = [...blocks]
    const swap = idx + dir
    if (swap < 0 || swap >= arr.length) return
    ;[arr[idx], arr[swap]] = [arr[swap], arr[idx]]
    onChange(arr)
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => (
        <div key={block.id} className="group relative flex gap-2">
          {/* Drag handle */}
          <div className="flex flex-col gap-1 pt-2 opacity-30 group-hover:opacity-80 transition-opacity">
            <button onClick={() => moveBlock(idx, -1)} className="text-gray-400 hover:text-white p-0.5" title="Mover para cima">
              <GripVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1">
            {block.type === 'text' ? (
              <div className="relative">
                <span className="absolute top-2 left-3 text-[10px] font-semibold text-gray-600 uppercase tracking-widest">Texto</span>
                <textarea
                  value={block.content}
                  onChange={e => updateBlock(block.id, e.target.value)}
                  rows={4}
                  placeholder="Escreva seu parágrafo aqui..."
                  className="w-full bg-gray-800/50 border border-white/8 rounded-xl px-4 pt-7 pb-3 text-sm text-gray-200 focus:outline-none focus:border-primary/50 transition-colors resize-y leading-relaxed"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute top-2 left-3 text-[10px] font-semibold text-gray-600 uppercase tracking-widest">URL da Imagem</span>
                  <input
                    value={block.content}
                    onChange={e => updateBlock(block.id, e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-gray-800/50 border border-white/8 rounded-xl px-4 pt-7 pb-3 text-sm text-gray-200 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                {block.content && (
                  <div className="rounded-xl overflow-hidden border border-white/8">
                    <img src={block.content} alt="preview" className="w-full max-h-64 object-cover" onError={e => (e.currentTarget.style.display = 'none')} />
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => removeBlock(block.id)}
            className="mt-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}

      {/* Add block buttons */}
      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={() => addBlock('text')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/15 text-gray-400 hover:border-primary/40 hover:text-primary transition-all text-xs font-medium"
        >
          <Type className="w-3.5 h-3.5" />
          Bloco de texto
        </button>
        <button
          type="button"
          onClick={() => addBlock('image')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-white/15 text-gray-400 hover:border-primary/40 hover:text-primary transition-all text-xs font-medium"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          Bloco de imagem
        </button>
      </div>
    </div>
  )
}

// ── Post Form ──────────────────────────────────────────
function PostForm({ initial, onSave, onCancel }: {
  initial?: Partial<Post>
  onSave: (post: Omit<Post, 'id' | 'date' | 'createdAt'>) => void
  onCancel: () => void
}) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? '')
  const [author, setAuthor] = useState(initial?.author ?? '')
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? '')
  const [tags, setTags] = useState((initial?.tags ?? []).join(', '))
  const [readTime, setReadTime] = useState(initial?.readTime ?? '5 min de leitura')
  const [blocks, setBlocks] = useState<Block[]>(initial?.blocks ?? [])
  const [audioUrl, setAudioUrl] = useState(initial?.audioUrl ?? '')
  const [audioUploading, setAudioUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const audioInputRef = useRef<HTMLInputElement>(null)

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setAudioUploading(true)
    const tempId = initial?.id ?? Date.now().toString()
    const fd = new FormData()
    fd.append('file', file)
    fd.append('id', tempId)
    const res = await fetch('/api/upload-audio', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.audioUrl) setAudioUrl(data.audioUrl)
    setAudioUploading(false)
  }

  const handleSave = async () => {
    if (!title.trim()) return
    setSaving(true)
    await onSave({
      title,
      subtitle,
      author,
      coverImage,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      readTime,
      blocks,
      audioUrl: audioUrl || null,
    })
    setSaving(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onCancel} className="text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-white">{initial?.id ? 'Editar post' : 'Novo post'}</h2>
        <div className="ml-auto flex gap-2">
          <button onClick={onCancel} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !title.trim()}
            className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Salvando...' : 'Publicar'}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Capa */}
        <div className="bg-gray-900/50 border border-white/8 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Capa & Metadados</h3>

          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Título *</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título do artigo"
              className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-white text-base font-semibold focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Subtítulo</label>
            <input
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
              placeholder="Uma frase de apoio ao título"
              className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Autor</label>
              <input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Nome do autor"
                className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Tempo de leitura</label>
              <input
                value={readTime}
                onChange={e => setReadTime(e.target.value)}
                placeholder="5 min de leitura"
                className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Tags (separadas por vírgula)</label>
            <input
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="IA, Automação, Marketing"
              className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Imagem de capa (URL)</label>
            <input
              value={coverImage}
              onChange={e => setCoverImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full bg-gray-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
            {coverImage && (
              <div className="mt-2 rounded-xl overflow-hidden border border-white/8 aspect-[16/6]">
                <img src={coverImage} alt="capa" className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} />
              </div>
            )}
          </div>

          {/* Áudio */}
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Áudio do artigo (MP3)</label>
            <input ref={audioInputRef} type="file" accept=".mp3,audio/mpeg" className="hidden" onChange={handleAudioUpload} />
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => audioInputRef.current?.click()}
                disabled={audioUploading}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-white/15 text-gray-400 hover:border-primary/40 hover:text-primary transition-all text-xs font-medium disabled:opacity-50"
              >
                {audioUploading
                  ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  : <Music className="w-3.5 h-3.5" />
                }
                {audioUploading ? 'Enviando...' : 'Selecionar MP3'}
              </button>
              {audioUrl && !audioUploading && (
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Áudio carregado</span>
                  <button onClick={() => setAudioUrl('')} className="text-gray-600 hover:text-red-400 transition-colors ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            {audioUrl && (
              <audio src={audioUrl} controls className="mt-3 w-full h-8 opacity-60" />
            )}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="bg-gray-900/50 border border-white/8 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Conteúdo — Blocos</h3>
          <BlockEditor blocks={blocks} onChange={setBlocks} />
        </div>
      </div>
    </div>
  )
}

// ── Dashboard ──────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'list' | 'new' | 'edit'>('list')
  const [editing, setEditing] = useState<Post | null>(null)

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    setPosts(await res.json())
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  const handleSave = async (data: Omit<Post, 'id' | 'date' | 'createdAt'>) => {
    if (editing) {
      await fetch('/api/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, id: editing.id }),
      })
    } else {
      await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
    await fetchPosts()
    setView('list')
    setEditing(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Excluir este post?')) return
    await fetch('/api/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchPosts()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Topbar */}
      <div className="border-b border-white/8 bg-gray-950/90 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">Arcco</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400 text-sm">Admin Blog</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/blog" target="_blank" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
              <Eye className="w-3.5 h-3.5" />
              Ver blog
            </a>
            <button onClick={onLogout} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition-colors">
              <LogOut className="w-3.5 h-3.5" />
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {view === 'list' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Posts</h1>
                <p className="text-gray-500 text-sm mt-0.5">{posts.length} publicados</p>
              </div>
              <button
                onClick={() => { setEditing(null); setView('new') }}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <Plus className="w-4 h-4" />
                Novo post
              </button>
            </div>

            {loading ? (
              <div className="text-gray-500 text-sm">Carregando...</div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                <p className="text-gray-500 mb-4">Nenhum post ainda.</p>
                <button
                  onClick={() => setView('new')}
                  className="text-primary text-sm hover:underline"
                >
                  Criar o primeiro post →
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="group flex items-center gap-4 bg-gray-900/50 border border-white/8 rounded-xl px-5 py-4 hover:border-white/15 transition-all"
                  >
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-16 h-11 rounded-lg object-cover flex-shrink-0 border border-white/8"
                        onError={e => (e.currentTarget.style.display = 'none')}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white truncate">{post.title}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        {post.author && <span className="text-xs text-gray-600">· {post.author}</span>}
                        <div className="flex gap-1.5">
                          {post.tags?.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary/80 border border-primary/20">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => { setEditing(post); setView('edit') }}
                        className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-gray-600 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {(view === 'new' || view === 'edit') && (
          <PostForm
            initial={editing ?? undefined}
            onSave={handleSave}
            onCancel={() => { setView('list'); setEditing(null) }}
          />
        )}
      </div>
    </div>
  )
}

// ── Root ───────────────────────────────────────────────
export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setAuth(sessionStorage.getItem('arcco_admin') === '1')
    setChecked(true)
  }, [])

  const logout = () => {
    sessionStorage.removeItem('arcco_admin')
    setAuth(false)
  }

  if (!checked) return null
  if (!auth) return <LoginScreen onLogin={() => setAuth(true)} />
  return <Dashboard onLogout={logout} />
}
