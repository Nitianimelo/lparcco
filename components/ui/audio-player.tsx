'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Headphones } from 'lucide-react'

interface AudioPlayerProps {
  src: string
}

const SPEEDS = [0.75, 1, 1.25, 1.5]

function formatTime(s: number) {
  if (!s || isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    const audio = new Audio(src)
    audioRef.current = audio

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate', () => {
      setCurrent(audio.currentTime)
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    })
    audio.addEventListener('ended', () => {
      setPlaying(false)
      setCurrent(0)
      setProgress(0)
      audio.currentTime = 0
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * duration
  }

  function cycleSpeed() {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length]
    setSpeed(next)
    if (audioRef.current) audioRef.current.playbackRate = next
  }

  return (
    <div className="flex items-center gap-4 bg-white/[0.03] border border-white/8 rounded-xl px-5 py-3.5 mb-10">

      <button
        onClick={toggle}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
        aria-label={playing ? 'Pausar' : 'Ouvir'}
      >
        {playing
          ? <Pause className="w-4 h-4 text-white" />
          : <Play className="w-4 h-4 text-white ml-0.5" />
        }
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <Headphones className="w-3 h-3 text-gray-600 flex-shrink-0" />
          <span className="text-[11px] text-gray-600 tracking-widest uppercase">Ouvir artigo</span>
        </div>
        <div className="w-full h-[3px] bg-white/8 rounded-full cursor-pointer" onClick={seek}>
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <span className="text-[11px] text-gray-600 tabular-nums flex-shrink-0">
        {formatTime(current)}{duration ? ` / ${formatTime(duration)}` : ''}
      </span>

      <button
        onClick={cycleSpeed}
        className="flex-shrink-0 text-[11px] text-gray-600 hover:text-white transition-colors w-8 text-center cursor-pointer"
      >
        {speed}x
      </button>
    </div>
  )
}
