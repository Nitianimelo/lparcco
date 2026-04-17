import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variant === 'secondary'
          ? 'bg-white/10 text-gray-300 hover:bg-white/20'
          : 'bg-primary/20 text-primary-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}
