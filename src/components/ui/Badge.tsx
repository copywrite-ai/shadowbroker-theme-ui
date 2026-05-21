import type { ReactNode } from 'react'

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  size?: 'sm' | 'md'
  pulse?: boolean
  children: ReactNode
}

const variantMap = {
  default: {
    badge: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
    dot: 'bg-cyan-400',
  },
  success: {
    badge: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
    dot: 'bg-emerald-400',
  },
  warning: {
    badge: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
    dot: 'bg-amber-400',
  },
  destructive: {
    badge: 'text-red-300 border-red-500/30 bg-red-500/10',
    dot: 'bg-red-400',
  },
}

const sizeMap = {
  sm: 'text-[9px] px-2 py-0.5',
  md: 'text-[10px] px-2.5 py-1',
}

export default function Badge({
  variant = 'default',
  size = 'md',
  pulse = false,
  children,
}: BadgeProps) {
  const v = variantMap[variant]

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-sm border font-bold uppercase tracking-[0.18em]
        ${v.badge}
        ${sizeMap[size]}
      `}
      role="status"
      aria-live="polite"
    >
      {pulse && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${v.dot}`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${v.dot}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  )
}
