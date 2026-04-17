import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/8 bg-gray-900/30 backdrop-blur-md',
        className
      )}
    >
      {children}
    </div>
  )
}
