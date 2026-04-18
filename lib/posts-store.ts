import { getStore } from '@netlify/blobs'
import fs from 'fs'
import path from 'path'

const LOCAL_FILE = path.join(process.cwd(), 'data', 'posts.json')

async function readFromBlobs(): Promise<unknown[] | null> {
  try {
    const store = getStore('blog')
    return await store.get('posts', { type: 'json' }) as unknown[] | null
  } catch {
    return null
  }
}

async function writeToBlobs(posts: unknown[]): Promise<boolean> {
  try {
    const store = getStore('blog')
    await store.setJSON('posts', posts)
    return true
  } catch {
    return false
  }
}

export async function readPosts(): Promise<unknown[]> {
  const fromBlobs = await readFromBlobs()
  if (fromBlobs !== null) return fromBlobs

  // Local dev fallback (or first deploy: seeds blobs from committed data/posts.json)
  if (fs.existsSync(LOCAL_FILE)) {
    const posts = JSON.parse(fs.readFileSync(LOCAL_FILE, 'utf-8'))
    await writeToBlobs(posts) // seeds blobs on first deploy; no-op if blobs unavailable
    return posts
  }
  return []
}

export async function writePosts(posts: unknown[]): Promise<void> {
  const saved = await writeToBlobs(posts)
  if (!saved) {
    fs.mkdirSync(path.dirname(LOCAL_FILE), { recursive: true })
    fs.writeFileSync(LOCAL_FILE, JSON.stringify(posts, null, 2))
  }
}
